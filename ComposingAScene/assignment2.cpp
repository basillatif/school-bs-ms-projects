/***
 Assignment-2: Geometric Modeling of a Scene

 Name: Latif, Basil (Please write your name in Last Name, First Name format)

 Collaborators: Doe, John; Doe, Jane
 ** Note: although the assignment should be completed individually
 you may speak with classmates on high level algorithmic concepts. Please
 list their names in this section
 John Hardy
 Jimmy Byrne

 Project Summary: I was able to define the transformation matrices. I defined 6 planes to build a cube. I rotated the scene. I created a table and 2 other objects.
***/

#ifdef __APPLE__
#include <OpenGL/gl.h>
#include <OpenGL/glu.h>
#include <GLUT/glut.h>
#else
#include <GL/gl.h>
#include <GL/glu.h>
#include <GL/glut.h>
#endif

#include <math.h>
#include <vector>
#include <iostream>
using namespace std;

/**************************************************
 *  Rectangular Prisms via Hierarchical Modeling  *
 *                                                *
 *  using planes as building blocks, build a unit *
 *  cube with transformations that will serve as  *
 *  a primitive for modeling objects in the scene *
 *                                                *
 *************************************************/

// Initializes a square plane of unit lengths
float theta = 0.0;

vector<GLfloat> init_plane() {
    vector<GLfloat> vertices = {
        +0.5,   +0.5,   +0.0,
        -0.5,   +0.5,   +0.0,
        -0.5,   -0.5,   +0.0,
        +0.5,   -0.5,   +0.0
    };
    return vertices;
}

// Converts a vector to an array
GLfloat* vector2array(vector<GLfloat> vec) {
    GLfloat* arr = new GLfloat[vec.size()];
    for (int i = 0; i < vec.size(); i++) {
        arr[i] = vec[i];
    }
    return arr;
}

// Converts Cartesian coordinates to homogeneous coordinates
vector<GLfloat> to_homogenous_coord(vector<GLfloat> cartesian_coords) {
    vector<GLfloat> result;
    
    for (int i = 0; i < cartesian_coords.size(); i += 3){
        result.push_back(cartesian_coords[i]);
        result.push_back(cartesian_coords[i + 1]);
        result.push_back(cartesian_coords[i + 2]);
        result.push_back(1.0);
    }
    // Append the 1 in the 4th dimension to generate homoegenous coordinates
    return result;
}

// Converts homogeneous coordinates to Cartesian coordinates
vector<GLfloat> to_cartesian_coord(vector<GLfloat> homogenous_coords) {
    vector<GLfloat> result;
    
    for (int i = 0; i < homogenous_coords.size(); i += 4) {
        result.push_back(homogenous_coords[i]);
        result.push_back(homogenous_coords[i + 1]);
        result.push_back(homogenous_coords[i + 2]);
    }
    // Remove the 1 in the 4th dimension to generate Cartesian coordinates
    return result;
}

// Definition of a translation matrix
vector<GLfloat> translation_matrix (float dx, float dy, float dz) {
    vector<GLfloat> translate_mat = {
        1.0,  0.0,   0.0,   dx,
        0.0,  1.0,   0.0,   dy,
        0.0,  0.0,   1.0,   dz,
        0.0,  0.0,   0.0,   1.0
    };
    return translate_mat;
}

// Definition of a scaling matrix
vector<GLfloat> scaling_matrix (float sx, float sy, float sz) {
    vector<GLfloat> scale_mat = {
        sx,    0.0,   0.0,   0.0,
        0.0,   sy,    0.0,   0.0,
        0.0,   0.0,   sz,    0.0,
        0.0,   0.0,   0.0,   1.0
    };
    return scale_mat;
}

// Definition of a rotation matrix along the x-axis theta degrees
vector<GLfloat> rotation_matrix_x (float theta) {
    vector<GLfloat> rotate_mat_x = {
        1.0,  0.0,  0.0,  0.0,
        0.0,  cos(theta),  -sin(theta),  0.0,
        0.0,  sin(theta),   cos(theta),  0.0,
        0.0,  0.0,  0.0,  1.0
    };
    return rotate_mat_x;
}


// Definition of a rotation matrix along the y-axis by theta degrees
vector<GLfloat> rotation_matrix_y (float theta) {
    vector<GLfloat> rotate_mat_y = {
       cos(theta),   0.0,     sin(theta),   0.0,
       0.0,  1.0,    0.0,                   0.0,
       -sin(theta),  0.0,     cos(theta),   0.0,
       0.0,  0.0,    0.0,                   1.0
    };
    
    return rotate_mat_y;
}


// Definition of a rotation matrix along the z-axis by theta degrees
vector<GLfloat> rotation_matrix_z (float theta) {
    vector<GLfloat> rotate_mat_z = {
      cos(theta),  -sin(theta),  0.0,  0.0,
      sin(theta),  cos(theta),  0.0,  0.0,
        0.0,  0.0,  1.0,  0.0,
        0.0,  0.0,  0.0,  1.0
    };
    return rotate_mat_z;
}

// Perform matrix multiplication for A B
vector<GLfloat> mat_mult(vector<GLfloat> A, vector<GLfloat> B) {
    vector<GLfloat> result;
    GLfloat sum1 = 0;
    for (int coord = 0; coord < B.size(); coord+=4){
        for (int row = 0; row < 16; row+=4){
            for (int col = 0; col < 4; col++) {
                sum1 += A[row + col]*B[coord + col];
                cout << "Current Val of A: " << A[row + col] << " B Matrix: " << B[coord + col] << endl;
                cout << "Coord: " << coord << " Row: " << row << " Column: " << col << " Sum: " << sum1 << endl;
            }
            result.push_back(sum1);
            sum1 = 0;
        }
    }
    return result;
}

vector<GLfloat> makeOne(vector<vector<GLfloat>> twoDimVector) {
    vector<GLfloat> result;
    for (int i = 0; i < twoDimVector.size(); i++){
        for (int j = 0; j < twoDimVector[i].size(); j++){
            result.push_back(twoDimVector[i][j]);
        }
    }
    return result;
}

// Builds a unit cube centered at the origin
// John Hardy helped me with matrix multiplication
vector<GLfloat> build_cube() {
    // Creates a unit cube by transforming a set of planes
    // Adding the 6 planes together into one vector
    
    vector<vector<GLfloat>> cube;
    vector<GLfloat> planeA = to_homogenous_coord(init_plane());
    vector<GLfloat> front = mat_mult(translation_matrix(0.0, 0.0, 0.5), planeA);
    cube.push_back(front);
    vector<GLfloat> right = mat_mult(rotation_matrix_y(M_PI/2), planeA);
    right = mat_mult(translation_matrix(0.5, 0.0, 0.0), right);
    cube.push_back(right);
    vector<GLfloat> left = mat_mult(translation_matrix(-0.5, 0.0, 0.0), mat_mult(rotation_matrix_y(M_PI/2), planeA));
    cube.push_back(left);
    vector<GLfloat> back = mat_mult(translation_matrix(0.0, 0.0, -0.5), mat_mult(rotation_matrix_y(M_PI), planeA));
    cube.push_back(back);
    vector<GLfloat> top = mat_mult(translation_matrix(0.0, 0.5, 0.0), mat_mult(rotation_matrix_x(M_PI/2), planeA));
    cube.push_back(top);
    vector<GLfloat> bottom = mat_mult(translation_matrix(0.0, -0.5, 0.0), mat_mult(rotation_matrix_x(M_PI/2), planeA));
    cube.push_back(bottom);
   
    for(int i = 0 ; i < planeA.size(); i++){
        //cout<<planeA.size()<<endl;
    }
    return makeOne(cube);
}

/**************************************************
 *            Camera and World Modeling           *
 *                                                *
 *  create a scene by applying transformations to *
 *  the objects built from planes and position    *
 *  the camera to view the scene by using setting *
 *  the projection viewing matrices               *
 *                                                *
 *************************************************/

void setup() {
    // Enable the vertex array functionality
    glEnableClientState(GL_VERTEX_ARRAY);
    // Enable the color array functionality (so we can specify a color for each vertex)
    glEnableClientState(GL_COLOR_ARRAY);
    // Enable depth test
    glEnable(GL_DEPTH_TEST);
    // Accept fragment if it closer to the camera than the former one
    glDepthFunc(GL_LESS);
    // Set up some default base color
    glColor3f(0.5, 0.5, 0.5);
    // Set up white background
    glClearColor(1.0, 1.0, 1.0, 0.0);
}

void init_camera() {
    // Camera parameters
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    // Define a 50 degree field of view, 1:1 aspect ratio, near and far planes at 3 and 7
    gluPerspective(50.0, 1.0, 2.0, 500.0);
    // Position camera at (2, 3, 5), attention at (0, 0, 0), up at (0, 1, 0)
    gluLookAt(2.0, 3.0, 5.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0);
}

// Construct the scene using objects built from cubes/prisms

vector<GLfloat> build_table() {
    vector<vector<GLfloat>> table;
    
    vector<GLfloat> leg1;
    leg1 = build_cube();
    leg1 = mat_mult(scaling_matrix(0.5, 1.5 , 0.5), leg1);
    table.push_back(leg1);
    
    vector<GLfloat> leg2;
    leg2 = build_cube();
    leg2 = mat_mult(scaling_matrix(0.5, 1.5, 0.5), leg2);
    leg2 = mat_mult(translation_matrix(1.0, 0.0, 0.0), leg2);
    table.push_back(leg2);

    vector<GLfloat> leg3;
    leg3 = build_cube();
    leg3 = mat_mult(scaling_matrix(0.5, 1.0, 0.5), leg3);
    leg3 = mat_mult(translation_matrix(0.0, 0.0, 1.0), leg3);
    table.push_back(leg3);
    
    vector<GLfloat> leg4;
    leg4 = build_cube();
    leg4 = mat_mult(scaling_matrix(0.5, 1.0, 0.5), leg4);
    leg4 = mat_mult(translation_matrix(1.0, 0.0, 0.0), leg4);
    leg4 = mat_mult(translation_matrix(0.0, 0.0, 1.0), leg4);
    table.push_back(leg4);
    
    vector<GLfloat> tabletop;
    tabletop = build_cube();
    tabletop = mat_mult(scaling_matrix(0.2, 2.0, 2.0), tabletop);
    tabletop = mat_mult(rotation_matrix_z(M_PI/2), tabletop);
    tabletop = mat_mult(translation_matrix(0.0, 1.0, 0.0), tabletop);
    tabletop = mat_mult(translation_matrix(0.8, 0.0, 1.0), tabletop);
    table.push_back(tabletop);
    
    vector<GLfloat> tower;
    tower = build_cube();
    tower = mat_mult(scaling_matrix(1.0, 1.0, 1.0), tower);
    tower = mat_mult(translation_matrix(-3.0, 0.0, -2.0), tower);
    table.push_back(tower);
    
//    vector<GLfloat> minitower;
//    minitower = build_cube();
//    minitower = mat_mult(scaling_matrix(0.5, 0.5, 0.5), minitower);
//    minitower = mat_mult(translation_matrix(1.0, 1.0, -4.0), minitower);
//    table.push_back(minitower);
    
    vector<GLfloat> far_tower;
    far_tower = build_cube();
    far_tower = mat_mult(scaling_matrix(1.0, 1.0, 1.0), far_tower);
    far_tower = mat_mult(translation_matrix(-4.0, -5.0, -0.0), far_tower);
    table.push_back(far_tower);
    
    
    return makeOne(table);
}

GLfloat* init_scene(int* numPoints) {
    vector<vector<GLfloat>> scene;
    vector<GLfloat> result;
    //scene.push_back(build_cube());
    scene.push_back(build_table());
    result = to_cartesian_coord(makeOne(scene));
    *numPoints = (int)result.size();
    
    return vector2array(result);
}
//Construct the color--all gray
GLfloat* init_color(int numPts) {
    vector<GLfloat> colors;
    for (int i = 0; i < numPts; i++) {
        colors.push_back(0.5);
    }
    return vector2array(colors);
}

void display_func() {
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    
    // World model parameters
    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();
    
    glRotatef(theta, 0.0, 1.0, 0.0);
    glRotatef(theta, 1.0, 0.0, 0.0);
    
    int* numPoints = new int [0];
    GLfloat* vertices = init_scene(numPoints);
    
    GLfloat* colors = init_color(*numPoints);
    
    // Perform display functions
    
    glVertexPointer(3,          // 3 components (x, y, z)
                    GL_FLOAT,   // Vertex type is GL_FLOAT
                    0,          // Start position in referenced memory
                    vertices);  // Pointer to memory location to read from
    
    //pass the color pointer
    glColorPointer(3,           // 3 components (r, g, b)
                   GL_FLOAT,    // Vertex type is GL_FLOAT
                   0,           // Start position in referenced memory
                   colors);     // Pointer to memory location to read from
    
    // Draw quad point planes: each 4 vertices
    glDrawArrays(GL_QUADS, 0, 4*42);
    
    glFlush();            //Finish rendering
    glutSwapBuffers();
    delete numPoints;
    delete vertices;
    delete(colors);
}
void idle_func() {
    theta = theta+0.3;
    display_func();
}
int main (int argc, char **argv) {
    // Initialize GLUT
    glutInit(&argc, argv);
    glutInitDisplayMode(GLUT_RGB | GLUT_DOUBLE | GLUT_DEPTH);
    glutInitWindowSize(800, 600);
    // Create a window with rendering context and everything else we need
    glutCreateWindow("Assignment 2");
    
    setup();
    init_camera();
    
    // Set up our display function
    glutDisplayFunc(display_func);
    //Rotate once something is drawn
     glutIdleFunc(idle_func);
    // Render our world
    glutMainLoop();
    
    delete vector2array({});
   
    return 0;
}

