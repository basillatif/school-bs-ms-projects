let drawBubbleMap = new Map();
let moveBubbleMap = new Map();
const INITIAL_DIAMETER = 20;
const HOLD_SENSITIVITY = 0.01;
const HOLD_TIME = 50;
const GROWTH_SPEED = 1.5;
const MAX_DIAMETER = 200;
($ => {

    /**
     * Tracks a box as it is rubberbanded or moved across the drawing area.
     * Note how we can use arrow function notation here because we don't need
     * the `this` variable in this implementation.
     */
    let trackDrag = event => {
        $.each(event.changedTouches, function (index, touch) {
            // Don't bother if we aren't tracking anything.
            if (moveBubbleMap.has(touch.identifier)) {
                let bubbleTouched = moveBubbleMap.get(touch.identifier);
                // Reposition the object.
                let newPosition = {
                    left: touch.pageX - touch.target.deltaX,
                    top: touch.pageY - touch.target.deltaY
                };
                // This form of `data` allows us to update values one attribute at a time.
                bubbleTouched.data('oldPosition', bubbleTouched.offset());
                bubbleTouched.data('position', newPosition);
                bubbleTouched.offset(newPosition);
                // BL-I added this 'else if' clause to reflect what we do in case that we are moving a new bubble
            } else if (drawBubbleMap.has(touch.identifier)) {
                let bubbleTouched = drawBubbleMap.get(touch.identifier);
                let anchorX = bubbleTouched.data('oldPosition').left + (INITIAL_DIAMETER);
                let anchorY = bubbleTouched.data('oldPositon').top + (INITIAL_DIAMETER);
                let newPosition = {
                    left: (anchorX < touch.pageX) ? anchorX : touch.pageX,
                    top: (anchorY < touch.pageY) ? anchorY : touch.pageY
                };
                let newWidth = Math.abs(touch.pageX - anchorX);
                let newHeight = Math.abs(touch.pageY - anchorY);
                let radius = Math.round(Math.max(newWidth, newHeight));
                radius = Math.min(radius, MAX_DIAMETER);
                bubbleTouched
                    .data("position", newPosition)
                    .offset(newPosition)
                    .width(radius)
                    .height(radius)
                    .bind("touchend", unhighlight)
                    .bind("touchend", endDrag)
                    .addClass("box-highlight");
            }
        });
        // Don't do any touch scrolling.
        event.preventDefault();
    };

    /**
     * Concludes a drawing or moving sequence.
     */
    let endDrag = event => {
        $.each(event.changedTouches, (index, touch) => {
            if (moveBubbleMap.has(touch.identifier)) {
                // Change state to "not-moving-anything" by clearing out
                moveBubbleMap.delete(touch.identifier);

            } else if (drawBubbleMap.has(touch.identifier)) {
                let mapValue = drawBubbleMap.get(touch.identifier);
                mapValue
                    .data({
                        isDrawing: false,
                        position: mapValue.offset(),
                        oldPosition: mapValue.offset()
                    })
                    .removeClass("box-highlight")
                    .bind("touchstart", startMove);
                drawBubbleMap.delete(touch.identifier);
            }
        });
    };

    /**
     * Indicates that an element is unhighlighted.
     */
    let unhighlight = event => $(event.currentTarget).removeClass("box-highlight");

    /**
     * Begins a box move sequence.
     */
    let startMove = event => {
        $.each(event.changedTouches, (index, touch) => {
            // Highlight the element.
            $(touch.target).addClass("box-highlight");

            // Take note of the box's current (global) location. Also, set its velocity and acceleration to
            // nothing because, well, _finger_.
            let targetBox = $(touch.target);
            let previousLocation = targetBox.data('position');
            let startOffset = targetBox.offset();

            targetBox.data({
                position: startOffset,
                oldPosition: { left: previousLocation.left, top: previousLocation.top},
                velocity: {x: 0, y: 0, z: 0},
                acceleration: {x: 0, y: 0, z: 0},
                hasNotMoved: 0,
                isDrawing: false,
                touchId: touch.identifier
            });

            moveBubbleMap.set(touch.identifier, targetBox);
            touch.target.deltaX = touch.pageX - startOffset.left;
            touch.target.deltaY = touch.pageY - startOffset.top;
        });
        // Eat up the event so that the drawing area does not
        // deal with it.
        event.stopPropagation();
    };

    /**
     * The motion update routine.
     */
    const FRICTION_FACTOR = 0.99;
    const ACCELERATION_COEFFICIENT = -0.05;
    const FRAME_RATE = 120;
    const FRAME_DURATION = 1000 / FRAME_RATE;

    let lastTimestamp = 0;
    let updateBoxes = timestamp => {
        if (!lastTimestamp) {
            lastTimestamp = timestamp;
        }

        // Keep that frame rate under control.
        if (timestamp - lastTimestamp < FRAME_DURATION) {
            window.requestAnimationFrame(updateBoxes);
            return;
        }

        $("div.box").each((index, element) => {
            let $element = $(element);

            // If it's highlighted, we don't accelerate it because it is under a finger.
            if ($element.hasClass("box-highlight")) {
                if (!$element.data('isDrawing')) {
                    checkHold($element);
                }
                if ($element.data('hasNotMoved') > HOLD_TIME) {
                    let newPosition = {
                        left: $element.offset().left - (GROWTH_SPEED / 2),
                        top: $element.offset().top - (GROWTH_SPEED / 2)
                    };
                    $element.css({
                        width: $element.width() + GROWTH_SPEED,
                        height: $element.height() + GROWTH_SPEED
                    });
                    $element.offset(newPosition);
                    $element[0].deltaX += (GROWTH_SPEED / 2);
                    $element[0].deltaY += (GROWTH_SPEED / 2);
                }
                if ($element.width() > MAX_DIAMETER) {
                    moveBubbleMap.delete($element.data('touchId'));
                    $element.remove();
                }
            } else {

            // Note how we base all of our calculations from the _model_...
                let s = $element.data('position');
                let v = $element.data('velocity');
                let a = $element.data('acceleration');

            // The standard update-bounce sequence.
                s.left += v.x;
                s.top -= v.y;

                v.x += (a.x * ACCELERATION_COEFFICIENT);
                v.y += (a.y * ACCELERATION_COEFFICIENT);
                v.z += (a.z * ACCELERATION_COEFFICIENT);

                v.x *= FRICTION_FACTOR;
                v.y *= FRICTION_FACTOR;
                v.z *= FRICTION_FACTOR;

                let $parent = $element.parent();
                let bounds = {
                    left: $parent.offset().left,
                    top: $parent.offset().top
                };

                bounds.right = bounds.left + $parent.width();
                bounds.bottom = bounds.top + $parent.height();

                if ((s.left <= bounds.left) || (s.left + $element.width() > bounds.right)) {
                    s.left = (s.left <= bounds.left) ? bounds.left : bounds.right - $element.width();
                    v.x = -v.x;
                }

                if ((s.top <= bounds.top) || (s.top + $element.height() > bounds.bottom)) {
                    s.top = (s.top <= bounds.top) ? bounds.top : bounds.bottom - $element.height();
                    v.y = -v.y;
                }

            // ...and the final result is sent on a one-way trip to the _view_.
                $(element).offset(s);
            }
        });



        lastTimestamp = timestamp;
        window.requestAnimationFrame(updateBoxes);
    };

    /**
     * Sets up the given jQuery collection as the drawing area(s).
     */

    let createBubble = event => {
        $.each(event.changedTouches, (index, touch) => {
            let newPosition = {left: touch.pageX, top: touch.pageY};
            let newBubble = $("<div></div>")
                .appendTo($("#drawing-area"))
                .addClass("box")
                .addClass("box-highlight")
                .width(50)
                .height(50)
                .bind("touchmove", trackDrag)
                .bind("touchend", endDrag)
                .bind("touchend", unhighlight)
                .offset(newPosition)
                .data({
                    position: newPosition,
                    oldPosition: newPosition,
                    velocity: { x: 0, y: 0, z: 0 },
                    acceleration: { x: 0, y: 0, z: 0 },
                    hasNotMoved: 0,
                    isDrawing: true,
                    touchId: touch.identifier
                });
                // $("<div>test</div>").appendTo($("#drawing-area"));
            drawBubbleMap.set(touch.identifier, newBubble);
                // newBubble.movingBox = targetBox;
                // newBubble.deltaX = touch.pageX - startOffset.left;
                // newBubble.deltaY = touch.pageY - startOffest.top;

        });
    };

    let checkHold = target => {
        let currentPosition = target.data('position');
        let oldPosition = target.data('oldPosition');
        let leftDifference = Math.pow(currentPosition.left - oldPosition.left, 2);
        let topDifference = Math.pow(currentPosition.top - oldPosition.top, 2);
        let distance = Math.sqrt(leftDifference + topDifference);

        if (distance <= HOLD_SENSITIVITY) {
            target.data('hasNotMoved', target.data('hasNotMoved') + 1);
        } else {
            target.data('hasNotMoved', 0);
        }
    };

    let setDrawingArea = jQueryElements => {
        // Set up any pre-existing box elements for touch behavior.
        jQueryElements
            .addClass("drawing-area")

            // Event handler setup must be low-level because jQuery
            // doesn't relay touch-specific event properties.
            .each((index, element) => {
                $(element)
                .bind("touchstart", createBubble)
                .bind("touchmove", trackDrag)
                .bind("touchend", endDrag);

            })

            .find("div.box").each((index, element) => {
                $(element)
                    .bind("touchstart", startMove)
                    .bind("touchend", unhighlight)
                    .data({
                        position: $(element).offset(),
                        velocity: { x: 0, y: 0, z: 0 },
                        acceleration: { x: 0, y: 0, z: 0 },
                        oldPosition: $(element).offset(),
                        hasNotMoved: 0,
                        isDrawing: false,
                        touchId: 0

                    });
            });

        // In this sample, device acceleration is the _sole_ determiner of a box's acceleration.
        window.ondevicemotion = event => {
            let a = event.accelerationIncludingGravity;
            $("div.box").each((index, element) => {
                $(element).data('acceleration', a);
            });
        };

        // Start the animation sequence.
        window.requestAnimationFrame(updateBoxes);
    };

    // No arrow function here because we don't want lexical scoping.
    $.fn.bubblesWithPhysics = function () {
        setDrawingArea(this);
        return this;
    };
})(jQuery);
