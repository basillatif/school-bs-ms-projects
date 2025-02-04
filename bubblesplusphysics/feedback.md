

## Basil Latif

##### https://github.com/lmu-cmsi370-fall2017/direct-manipulation-basillatif.git

| | Feedback | Points | Notes |
| --- | --- | ---: | --- |
| **Bubble look (_3a_, _4a_, _4b_, _4d_)** | Completely B&W bubbles (in green…water?) have some nice minimalism but…considering the range of possibilities, couldn’t they have been a _bit_ more? | 9 | A little too minimalist |
| **Bubble motion (_3a_, _3b_, _4a_, _4b_, _4d_)** | Direction has been reversed, but little else; definitely feels more like “rocket balls” than bubbles. Especially the way they bounce off the boundaries. | 20 | Aside from direction, movement is otherwise not very “bubbly” |
| **Bubble creation (_3a_, _3b_, _4a_, _4b_, _4d_)** | Can only tap to create, so all new bubbles are the same size. | 15 | Very limited same-size constraint |
| **Bubble inflation/deflation (_3a_, _3b_, _4a_, _4b_, _4d_)** | Time delay takes some getting used to but at least affords some user control without totally sacrificing the ability to purely move the bubble. Ideally a little more discoverability and maybe initial guidance is called for in order to speed up learning. But “original bubbles” don’t acquire this behavior—there is an off-by-one bug between `oldPosition` and `newPosition` (in my testing) that prevents the inflation logic from triggering. | 25 | Good design, once it is learned; it’s getting there that could use some work—however, “original bubbles” don’t act the same way |
| **Bubble popping/deletion (_3a_, _3b_, _4a_, _4b_, _4d_)** | Works as specified, although no feedback is given when a bubble is about to “pop.” A little signal that “one more click will end me” (red boundary? red color? throbbing animation?) would give the user a full picture of the state of things. | 8 | No feedback when close to popping |
| **Code Style (_4c_)** | Jenkins green |  |  |
| **Version Control (_4e_)** | 6 commits |  |  |
| **Punctuality (_4f_)** | last commit 2 days after due date | -2 |  |
|  |  | **75** | **Total** |
