---
type: jitter
name: "jit.gl.sketch"
summary: "Use drawing commands with OpenGL"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.sketch/"
package: "Jitter"
see_also: ["jit.gl.graph", "jit.gl.gridshape", "jit.gl.handle", "jit.gl.isosurf", "jit.gl.mesh", "jit.gl.model", "jit.gl.nurbs", "jit.gl.plato", "jit.gl.render", "jit.gl.shader", "jit.gl.slab", "jit.gl.text2d", "jit.gl.text3d", "jit.gl.texture", "jit.gl.videoplane", "jit.gl.volume"]
---
# jit.gl.sketch

Use drawing commands with OpenGL

## Description

Records and draws based on 3-D drawing commands. These commands range from simple turtle graphics to the majority of the OpenGL API.

#### Discussion

This OB3D object optionally takes one argument: the name of a [drawing context](https://docs.cycling74.com/userguide/jitter/graphics_processing#graphics-contexts). This is a named instance of a [jit.world](https://docs.cycling74.com/reference/jit.world), or [jit.pworld](https://docs.cycling74.com/reference/jit.pworld) object, or a [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) sub-context. This value may also be set via the OB3D drawto attribute. If no argument is present, the object is implicitly added to the first valid drawing context or sub-context found in the current patch or by searching up the patcher hierarchy.

## Attributes

### OB3D Attributes

### anim[symbol]

The name of a [jit.anim.node](https://docs.cycling74.com/reference/jit.anim.node) object that handles all spatial transforms for this instance (default = UID). The default value references an internal object, but can be overridden by setting to the name of an existing external [jit.anim.node](https://docs.cycling74.com/reference/jit.anim.node) instance. This allows for more advanced control of the spatial transform.

### anchor[3 floats]

The anchor position in local space (default = 0. 0. 0.). Allows for offsetting the local 3D origin around which transforms are applied.

### animmode[symbol]

Determines which space the  anim\_move  and  anim\_turn  messages will affect the position and orientation of this object (default = parent).

local = Rotate relative to local axis

parent = Rotate relative to parent axis

world = Rotate relative to world axis

### antialias[int]

Antialiasing flag (default = 0) On some hardware, the blend\_enable attribute must also be enabled for antialiasing to work.

### automatic[int]

Automatic rendering flag (default = 1) When the flag is set, rendering occurs when the associated jit.gl.render object receives a bang message

### auto\_material[int]

Automatic material attributes flag (default = 1) When the flag is set, and lighting is enabled for the object, the diffuse and ambient material components for the object will be set to the object's color, and the specular and emissive lighting components are disabled.

### aux\_color[4 floats]

The auxiliary color in the form red green blue alpha (default = 0. 0. 0. 0.) The list elements should be in the range 0.-1.

### axes[int]

x/y/z axis rendering off/on (default = 0)

### blend[symbol]

The named blending mode. The possible values are:

add =  blend\_mode  1 1

multiply =  blend\_mode  2 1

screen =  blend\_mode  4 1

exclusion =  blend\_mode  4 5

colorblend =  blend\_mode  3 4

alphablend =  blend\_mode  6 7

coloradd =  blend\_mode  3 1

alphaadd =  blend\_mode  6 1

### blend\_enable[int]

Blending flag (default = 0) When the flag is set, blending is enabled for all rendered objects.

### blend\_mode[2 ints]

The source and destination planes associated with the blend mode (default = 6 7) Blend modes are specified in the form src\_blend\_mode dst\_blend\_mode. The supported modes are:

0 = zero

1 = one

2 = destination color

3 = source color

4 = one minus destination color

5 = one minus source color

6 = source alpha

7 = one minus source alpha

8 = destination alpha

9 = one minus destination alpha

10 = source alpha saturate

### capture[symbol]

The name of a texture to be rendered to - e.g.  jit.gl.nurbs @capture mytex  will capture to  jit.gl.texture @name mytex .

### cull\_face[int]

Face culling mode (default = 0 (no culling))

0 = no culling

1 = cull back faces

2 = cull front faces

### depth\_clear[int]

Depth buffer clear flag (default = 0) When the flag is set, the depth buffer is cleared before rendering the object.

### depth\_enable[int]

Depth buffering flag (default = 1) When the flag is set, depth buffering is enabled.

### depth\_write[int]

Depth write flag (default = 1). When the flag is set, writing to the depth buffer is enabled. This will have no effect if depth\_enable is turned off.

### drawto[symbol]

The named drawing context in which to draw (default = none) A named drawing context is a named instance of a jit.window, jit.pwindow, or jit.matrix object that has an instance of the jit.gl.render object associated with it.

### enable[int]

Enable flag (default = 1) When the flag is set, drawing is enabled.

### filterclass[symbol]

The name of this object's pick filter class (default = default). This controls the visibility of objects to the [jit.gl.handle](https://docs.cycling74.com/reference/jit.gl.handle) and [jit.gl.picker](https://docs.cycling74.com/reference/jit.gl.picker) objects. In order to select this object, the filterclass value must be in the picking object's filters list.

### fog\_params[7 floats]

The fog parameters in the form red green blue alpha density start end (default = 0. 0. 0. 0. 0. 0. 0.) The list's color elements should be in the range 0.-1.

### fog[float]

The amount of fog effect (default = 0.)

### layer[int]

Object layer number (default = 0) When in automatic mode, the layer number determines the rendering order (low to high). Objects in the same layer have no guarantee which will be rendered first.

### lighting\_enable[int]

Lighting enabled flag (default = 0) When the flag is set, lighting is calculated.

### line\_width[float]

The drawing line width (default = 1.)

### mat\_ambient[4 floats]

The ambient light material property in the form red green blue alpha (default = 0. 0. 0. 0.) The list elements should be in the range 0.-1.

### mat\_diffuse[4 floats]

The diffuse light material property in the form red green blue alpha (default = 0. 0. 0. 0.) The list elements should be in the range 0.-1.

### mat\_emission[4 floats]

The material emission property in the form red green blue alpha (default = 0. 0. 0. 0.) The list elements should be in the range 0.-1.

### mat\_specular[4 floats]

The specular light material property in the form red green blue alpha (default = 0. 0. 0. 0.) The list elements should be in the range 0.-1.

### matfile[symbol]

The Jitter material file to apply (.jitmtl)

### name[symbol]

The instance name (default = UID)

### point\_mode[symbol]

Point drawing mode to use when  *points*  drawing primitive (poly\_mode 2) is enabled (default = circle).

Possible values:

'square'
(
Draw point as square
)
'circle'
(
Draw point as circle
)
'square\_depth'
(
Draw point as square with depth scaling
)
'circle\_depth'
(
Draw point as circle with depth scaling
)
'user\_shader'
(
Allow writing to  *gl\_PointSize*  in custom vertex shader
)

### point\_size[float]

The draw point size (default = 1.)

### poly\_mode[2 ints]

Polygon rendering modes (default 0 0) Rendering modes are expressed in the form frontface backface. Supported rendering modes are:

0 = render as filled polygons

1 = render as lines

2 = render as points

### position[3 floats]

The 3D origin in the form x y z (default = 0. 0. 0.)

### quat[4 floats]

The current rotation as a quaternion(default = 0. 0. 0. 1.). A quaternion is a mathematical construct that is a four dimensional vector, and can be visualized as a rotation around an arbitrary axis. Quaternions are a useful representation of an orientation in 3D space.

### rotate[4 floats]

The angle of rotation and the xyz vector about which the rotation is performed in the form rotation-angle x y z (default = 0. 0. 0. 1.)

### rotatexyz[3 floats]

Sets the current rotation to the concatenation of rotations about the positive x, y, and z axes, also known as Euler angles (default = 0. 0. 0.). The default order is yzx and can be changed with the [jit.gl.render](https://docs.cycling74.com/reference/jit.gl.render) rotate\_order attribute. Angles are expressed in degrees.

### scale[3 floats]

The 3D scaling factor in the form x y z (default = 1. 1. 1.)

### shadow\_caster[int]

Shadow caster flag (default = 0) When the flag is set, object will cast shadows.

### shininess[float]

The material shininess value (default = 16.0) The value should be a float in the range 0.-255.

### smooth\_shading[int]

Smooth shading flag (default = 0) When the flag is set, smooth shading is used when rendering.

### tex\_map[int]

Mode for automatic generation of texture coordinate controls (default = 0)

0 = no coordinates are generated.

1 = OpenGL's texture generation is used with mode GL\_OBJECT\_LINEAR. This applies the texture in a fixed orientation relative to the object.

2 = OpenGL's texture generation is used with mode GL\_SPHERE\_MAP. This can be used to create a reflection effect.

3 = OpenGL's texture generation is used with mode GL\_EYE\_LINEAR. This applies the texture in a fixed orientation relative to OpenGL's eye coordinates.

Modes 1 and 3 are affected by the value of the tex\_plane\_s and tex\_plane\_t attributes listed below.

### tex\_plane\_s[4 floats]

The texture generation coefficients a b c d that apply to tex\_map modes 1 and 3. (default = 1. 0. 0. 0.)

The four coefficients define a plane used to generate the s texture coordinate, which corresponds to the x axis of the texture image. If the tex\_map mode is 1, s = ax + by + cz + dw, where x, y, z, and w are the homogeneous coordinates of the vertex.

### tex\_plane\_t[4 floats]

The texture generation coefficients a b c d, which apply to tex\_map modes 1 and 3. (default = 0. 1. 0. 0)

The four coefficients define a plane which is used to generate the t texture coordinate, which corresponds to the y axis of the texture image.

### shader[symbol]

The name of the shader to be applied (default = none)

### texture[8 symbols]

The name of the texture to be applied (default = none). If multiple textures are specified, uses multi-texturing.

### transform\_reset[int]

Modelview and projection transform reset flag (default = 0) When the flag is set, the modelview and projection transforms are set to the identity transform before rendering the object. This is useful for sprite or billboard overlays, or automatic scaling to window size. The transform\_reset flag modes are:

0 = do nothing (default)

1 = proportional orthographic glOrtho(-aspect, aspect, -1.0, 1.0, near\_clip, far\_clip);

2 = orthographic normalized glOrtho(-1.0, 1.0, -1.0, 1.0, near\_clip, far\_clip);

3 = proportional perspective with near clip = 0.001 gluPerspective(lens\_angle, aspect, 0.001/\*near\_clip\*/, far\_clip);

4 = normalized perspective with near clip = 0.001 gluPerspective(lens\_angle, 1.0, 0.001/\*near\_clip\*/, far\_clip);

### viewalign[int]

View aligned transformation flag (default = 0)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### beginstroke

Begin definition of a stroked path of the style specified by a following  *stroke\_style*  argument. Currently supported stroke styles are "

basic2d

line

### circle

Draws a circle with radius specified by  *radius*  and center point at the current drawing position. If  *theta-start*  and  *theta-end*  are specified, then an arc will be drawn instead of a full circle. The  *theta-start*  and  *theta-end*  arguments are in terms of degrees (0-360). The current  shapeorient  and  shapeslice  values will also affect the drawing.

Arguments:

- radius
  [float]
- theta-start
  [float]
- theta-end
  [float]

### cmd\_delete

Deletes  *index*  or all instances of the command specified by the  *command*  argument from the command list.

### cmd\_enable

Enables/disables  *command*  in the command list.

Arguments:

- mutex
  group

  index
  [int]

  command
  [symbol]

  endmutex group
- 0/1
  [int]

### cmd\_insert

Inserts  *command*  at position  *index*  in the command list.

Arguments:

- index
  [int]
- command
  [symbol]
- command-args
  [variable]

### cmd\_replace

Replaces position  *index*  in the command list with  *command* .

Arguments:

- index
  [int]
- command
  [symbol]
- command-args
  [variable]

### cube

Draws a box with width 2\*  *scale-x* , height 2\*  *scale-y* , depth 2\*  *scale-z* , and center point at the current drawing position. If  *scale-y*  and  *scale-z*  are not specified, they will assume the same value as  *scale-x* . The current  *shapeorient* ,  *shapeslice* , and  *shapeprim*  values will also affect the drawing.

Arguments:

- scale-x
  [float]
- scale-y
  [float]
- scale-z
  [float]

### cylinder

Draws a cylinder with top radius specified by  *radius1* , bottom radius specified by  *radius2* , length specified by  *mag* , and center point at the current drawing position. If  *theta-start*  and  *theta-end*  are specified, then a patch will be drawn instead of a full cylinder. The  *theta-start*  and  *theta-end*  arguments are in terms of degrees (0-360). The current  shapeorient ,  shapeslice , and  shapeprim  values will also affect the drawing.

Arguments:

- radius1
  [float]
- radius2
  [float]
- mag
  [float]
- theta-start
  [float]
- theta-end
  [float]

### drawmatrix

Draws a matrix. The format of the message is

 drawmatrix   *<matrixname> <drawing primitive> <texflag> <normalflag> <colorflag>*
 *texflag*  values are specified as follows: 0=use, 1=ignore, 2=auto

 *normalflag*  values are specified as follows: 0=use, 1=ignore, 2=auto

 *colorflag*  values are specified as follows: 0=use, 1=ignore

 *edgeflag*  values are specified as follows: 0=use, 1=ignore

### drawobject

The word  drawobject , followed by a symbol that specifies an object name and a 0/1 flag that specifies whether or not to ignore the OB3D attributes, draws a named jit.gl object.

### ellipse

Draws the ellipse specified by  *radius1* ,  *radius2*  and center point at the current drawing position. If  *theta-start*  and  *theta-end*  are specified, then an arc will be drawn instead of a full ellipse. The  *theta-start*  and  *theta-end*  arguments are in terms of degrees (0-360). The current  shapeorient  and  shapeslice  values will also affect the drawing.

Arguments:

- radius1
  [float]
- radius2
  [float]
- theta-start
  [float]
- theta-end
  [float]

### endstroke

Ends the definition of a stroked path and renders the path.

### framecircle

Draws the circumference of the circle with radius specified by  *radius*  and center point at the current drawing position. If  *theta-start*  and  *theta-end*  are specified, then an arc will be drawn instead of a full circle. The  *theta-start*  and  *theta-end*  arguments are in terms of degrees (0-360). The current  shapeorient  and  shapeslice  values will also affect the drawing.

Arguments:

- radius
  [float]
- theta-start
  [float]
- theta-end
  [float]

### frameellipse

Draws the circumference of the ellipse specified by  *radius1* ,  *radius2*  and center point at the current drawing position. If  *theta-start*  and  *theta-end*  are specified, then an arc will be drawn instead of a full ellipse. The  *theta-start*  and  *theta-end*  arguments are in terms of degrees (0-360). The current  shapeorient  and  shapeslice  values will also affect the drawing.

Arguments:

- radius1
  [float]
- radius2
  [float]
- theta-start
  [float]
- theta-end
  [float]

### framequad

Draws the frame of the quadrilateral specified by the four points  *x1 y1 z1 x2 y2 z2 x3 y3 z3 x4 y4 z4* .

Arguments:

- x1
  [float]
- y1
  [float]
- z1
  [float]
- x2
  [float]
- y2
  [float]
- z2
  [float]
- x3
  [float]
- y3
  [float]
- z3
  [float]
- x4
  [float]
- y4
  [float]
- z4
  [float]

### frametri

Draws the frame of the triangle specified by the three points  *x1 y1 z1 x2 y2 z2 x3 y3 z3* .

Arguments:

- x1
  [float]
- y1
  [float]
- z1
  [float]
- x2
  [float]
- y2
  [float]
- z2
  [float]
- x3
  [float]
- y3
  [float]
- z3
  [float]

### getcamera

Returns the x, y, and z coordinates of the camera location.

### getcmd\_index

Sends the command list item at  *index*  as a message out the object's right outlet.

Arguments:

- index
  [int]

### getcmdlist

Sends the command list as a series of messages out the object's right outlet. The command list is bracketed by max messages that indicate the beginning and the of the current command list, and the command list is output between these two lines, one line per command. The output takes the form:

 cmdlist\_begin   *index*
 cmdlist   *index*   *command-name*   *command-arg1* ...  *command-argN*
 cmdlist   *index* ....

 cmdlist\_end

### glbegin

Please see the OpenGL "Red Book" or "Blue Book" for more information.

Arguments:

- draw-prim
  [symbol]

### glcolor

Please see the OpenGL "Red Book" or "Blue Book" for more information.

Arguments:

- near
  [float]
- far
  [float]

### glcullface

Please see the OpenGL "Red Book" or "Blue Book" for more information.

### gldisable

Please see the OpenGL "Red Book" or "Blue Book" for more information.

Arguments:

- capability
  [symbol]

### glenable

Please see the OpenGL "Red Book" or "Blue Book" for more information.

Arguments:

- capability
  [symbol]

### glend

Please see the OpenGL "Red Book" or "Blue Book" for more information.

### glget

Please see the OpenGL "Red Book" or "Blue Book" for more information.

### gllinestipple

Please see the OpenGL "Red Book" or "Blue Book" for more information.

Arguments:

- factor
  [int]
- bit-pattern
  [int]

### gllinewidth

Please see the OpenGL "Red Book" or "Blue Book" for more information.

Arguments:

- width
  [float]

### glnormal

Please see the OpenGL "Red Book" or "Blue Book" for more information.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### glpointsize

Please see the OpenGL "Red Book" or "Blue Book" for more information.

Arguments:

- size
  [float]

### glpolygonmode

Please see the OpenGL "Red Book" or "Blue Book" for more information.

### glpolygonoffset

Please see the OpenGL "Red Book" or "Blue Book" for more information.

Arguments:

- factor
  [float]
- units
  [float]

### glpopmatrix

Please see the OpenGL "Red Book" or "Blue Book" for more information.

### glpushmatrix

Please see the OpenGL "Red Book" or "Blue Book" for more information.

### glrect

Please see the OpenGL "Red Book" or "Blue Book" for more information.

Arguments:

- x1
  [float]
- y1
  [float]
- x2
  [float]
- y2
  [float]

### glrotate

Please see the OpenGL "Red Book" or "Blue Book" for more information.

Arguments:

- angle
  [float]
- x
  [float]
- y
  [float]
- z
  [float]

### glscale

Please see the OpenGL "Red Book" or "Blue Book" for more information.

Arguments:

- x-scale
  [float]
- y-scale
  [float]
- z-scale
  [float]

### glshademodel

Please see the OpenGL "Red Book" or "Blue Book" for more info.

### gltexcoord

Please see the OpenGL "Red Book" or "Blue Book" for more information.

Arguments:

- s
  [float]
- t
  [float]

### gltranslate

Please see the OpenGL "Red Book" or "Blue Book" for more information.

Arguments:

- delta-x
  [float]
- delta-y
  [float]
- delta-z
  [float]

### glvertex

Please see the OpenGL "Red Book" or "Blue Book" for more information.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### line

Draws a line from the current drawing position to the location  *delta-x*   *delta-y*   *delta-z*  relative to the current drawing position.

Arguments:

- delta-x
  [float]
- delta-y
  [float]
- delta-z
  [float]

### linesegment

Draws a line from the location specified by  *x1 y1 z1*  to the location specified by  *x2 y2 z2* .

Arguments:

- x1
  [float]
- y1
  [float]
- z1
  [float]
- x2
  [float]
- y2
  [float]
- z2
  [float]

### lineto

Draws a line from the current drawing position to the location specified by  *x*   *y*   *z* .

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### move

Moves the drawing position  *delta-x*   *delta-y*   *delta-z*  relative to the current drawing position.

Arguments:

- delta-x
  [float]
- delta-y
  [float]
- delta-z
  [float]

### moveto

Moves the drawing position to the location specified by  *x*   *y*   *z* .

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### plane

Draws a plane with top width 2\*  *scale-x1* , left height 2\*  *scale-y1* , bottom width 2\*  *scale-x2* , right height 2\*  *scale-y2* , and center point at the current drawing position. If  *scale-y1*  is not specified, it will assume the same value as  *scale-x1* . If  *scale-x2*  and  *scale-y2*  are not specified, they will assume the same values as  *scale-x1*  and  *scale-y1*  respectively. The current  shapeorient ,  shapeslice , and  shapeprim  values will also affect the drawing.

Arguments:

- scale-x1
  [float]
- scale-y1
  [float]
- scale-x2
  [float]
- scale-y2
  [float]

### point

Draws a point at the location specified by  *x*   *y*   *z* .

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### quad

Draws the quadrilateral specified by the four points  *x1 y1 z1 x2 y2 z2 x3 y3 z3 x4 y4 z4* .

Arguments:

- x1
  [float]
- y1
  [float]
- z1
  [float]
- x2
  [float]
- y2
  [float]
- z2
  [float]
- x3
  [float]
- y3
  [float]
- z3
  [float]
- x4
  [float]
- y4
  [float]
- z4
  [float]

### reset

Delete all elements of the command list.

### roundedplane

The message  roundedplane   *round\_amount*   *scale\_x*   *scale\_y*  draws a rounded plane with width 2 \*  *scale\_x* , and height 2 \*  *scale\_y*  and center point at the current drawing position. The size of the rounded portion of the plane is determined by the  *round\_amount*  argument. If  *scale\_y*  is not specified, it will assume the same value as  *scale\_x* .

### screentoworld

The word  screentoworld , followed by a pair of numbers that specify  *x*  and  *y*  coordinates, returns an array containing the  *x* ,  *y* , and  *z*  world coordinates associated with a given screen pixel using the same the depth from the camera as 0,0,0. Optionally a third depth arg may be specified, which may be useful for hit detection and other applications. The depth value is typically specified in the range 0.-1. where 0 is the near clipping plane, and 1. is the far clipping plane.

### shapeorient

Sets the current orientation for shape drawing commands ( circle ,  framecircle ,  ellipse ,  frameellipse ,  sphere ,  cylinder ,  torus ,  cube , and  plane ). The  *rot-x* ,  *rot-y* , and  *rot-z*  arguments are in terms of degrees (0-360). The order in which the orientation is applied is first rotate about x axis  *rot-x* , then rotate about y axis  *rot-y* , and finally rotate about z axis  *rot-z* .

Arguments:

- rot-x
  [float]
- rot-y
  [float]
- rot-z
  [float]

### shapeprim

Sets the current drawing primitive for shape drawing commands ( circle ,  framecircle ,  ellipse ,  frameellipse ,  sphere ,  cylinder ,  torus ,  cube , and  plane ). Valid values for  *draw-prim*  are:

 lines
 line\_loop
 line\_strip
 points
 polygon
 quads
 quad\_grid
 quad\_strip
 triangles
 tri\_grid
 tri\_fan
 tri\_strip

Arguments:

- draw-prim
  [symbol]

### shapeslice

Sets the current level of decimation (resolution) for shape drawing commands ( circle ,  framecircle ,  ellipse ,  frameellipse ,  sphere ,  cylinder ,  torus ,  cube , and  plane ).

Arguments:

- slice-a
  [int]
- slice-b
  [int]

### sphere

Draws a sphere with radius specified by  *radius*  and center point at the current drawing position. If  *theta1-start* ,  *theta1-end* ,  *theta2-start* , and  *theta2-end*  are specified, then a patch will be drawn instead of a full sphere. The  *theta1-start* ,  *theta1-end* ,  *theta2-start* , and  *theta2-end*  arguments are in terms of degrees (0-360). The current  shapeorient ,  shapeslice , and  shapeprim  values will also affect the drawing.

Arguments:

- radius
  [float]
- theta1-start
  [float]
- theta1-end
  [float]
- theta2-start
  [float]
- theta2-end
  [float]

### strokeparam

The word  strokeparam , followed by a parameter name argument and a list of parameter values, sets the current value of the parameter specified by the  *parameter\_name*  argument to be the value specified by  *parameter\_value*  argument(s). Some parameters are global for the extent of a stroked path definition, while others may vary on a point by point basis.

### strokepoint

The word  strokepoint , followed by three numbers that specify  *x* ,  *y* ,  *z*  coordinates, defines an anchor point at the location specified by those coordinates. Some stroke styles (such as basic2d) will ignore the  *z*  coordinate.

### torus

Draws a torus with major radius specified by  *radius1* , minor radius specified by  *radius1* , and center point at the current drawing position. If  *theta1-start* ,  *theta1-end* ,  *theta2-start* , and  *theta2-end*  are specified, then a patch will be drawn instead of a full torus. The  *theta1-start* ,  *theta1-end* ,  *theta2-start* , and  *theta2-end*  arguments are in terms of degrees (0-360). The current  shapeorient ,  shapeslice , and  shapeprim  values will also affect the drawing.

Arguments:

- radius1
  [float]
- radius2
  [float]
- theta1-start
  [float]
- theta1-end
  [float]
- theta2-start
  [float]
- theta2-end
  [float]

### tri

Draws the triangle specified by the three points  *x1 y1 z1 x2 y2 z2 x3 y3 z3* .

Arguments:

- x1
  [float]
- y1
  [float]
- z1
  [float]
- x2
  [float]
- y2
  [float]
- z2
  [float]
- x3
  [float]
- y3
  [float]
- z3
  [float]

### worldtoscreen

The word  worldtoscreen , followed by three numbers that specify  *x* ,  *y* ,  *z*  coordinates, returns an array containing the  *x* ,  *y* , and depth screen coordinates associated with a given world coordinate. The depth value is typically specified in the range 0.-1. where 0 is the near clipping plane, and 1. is the far clipping plane.

### OB3D Messages

### bang

Equivalent to the  draw  message.

### draw

Draws the object in the named drawing destination. If the matrixoutput attribute is supported and set to 1, the geometry matrices are sent out the object's left outlet.

### drawraw

Equivalent to  draw  with the inherit\_all attribute set to 1.

### drawimmediate

Equivalent to  draw  but ignoring any potential renderer setup

### anim\_move

Move the object along the axis provided, relative to the space indicated by animmode.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### anim\_turn

Rotate the object along each axis by the amount provided, relative to the space indicated by animmode.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### anim\_grow

Scale the object along each axis by the amount provided.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### anim\_reset

Reset the local transformation attributes to their default values (position = 0 0 0, rotatexyz = 0 0 0, and scale = 1 1 1)

### update\_node

Update the node transformation attributes.

### import\_material

Import a Jitter material file (.jitmtl).

### export\_material

Export material state as a material file (.jitmtl).

### jit\_gl\_texture

Binds the texture specified by  *texture-name*  to this object. Equivalent to setting the texture attribute to  *texture-name* .

Arguments:

- texture-name
  [symbol]

### get\_shader

Open an editor window containing the object's current JXS shader.

## See Also

| Name | Description |
| --- | --- |
| [jit.gl.graph](https://docs.cycling74.com/reference/jit.gl.graph) | Graph floats into 3D space |
| [jit.gl.gridshape](https://docs.cycling74.com/reference/jit.gl.gridshape) | Generate simple geometric shapes as a grid |
| [jit.gl.handle](https://docs.cycling74.com/reference/jit.gl.handle) | Use mouse movement to control position/rotation |
| [jit.gl.isosurf](https://docs.cycling74.com/reference/jit.gl.isosurf) | Generate a GL based surface extraction |
| [jit.gl.mesh](https://docs.cycling74.com/reference/jit.gl.mesh) | Generate GL geometry from matrices |
| [jit.gl.model](https://docs.cycling74.com/reference/jit.gl.model) | Read and draw various 3D model formats |
| [jit.gl.nurbs](https://docs.cycling74.com/reference/jit.gl.nurbs) | Generate NURBS surface |
| [jit.gl.plato](https://docs.cycling74.com/reference/jit.gl.plato) | Generate platonic solids |
| [jit.gl.render](https://docs.cycling74.com/reference/jit.gl.render) | Render Jitter OpenGL objects |
| [jit.gl.shader](https://docs.cycling74.com/reference/jit.gl.shader) | Manage a GL shader |
| [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab) | Process texture data |
| [jit.gl.text2d](https://docs.cycling74.com/reference/jit.gl.text2d) |  |
| [jit.gl.text3d](https://docs.cycling74.com/reference/jit.gl.text3d) |  |
| [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) | Create OpenGL textures |
| [jit.gl.videoplane](https://docs.cycling74.com/reference/jit.gl.videoplane) | Display video in OpenGL |
| [jit.gl.volume](https://docs.cycling74.com/reference/jit.gl.volume) | Create a volume visualization |
