---
type: jitter
name: "jit.gl.path"
summary: "Generate and render a path in OpenGL"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.path/"
package: "Jitter"
see_also: ["jit.path", "jit.anim.path", "jit.gl.sketch"]
---
# jit.gl.path

Generate and render a path in OpenGL

## Description

The [jit.gl.path](https://docs.cycling74.com/reference/jit.gl.path) object generates and renders a 3D path. See the [jit.path](https://docs.cycling74.com/reference/jit.path) object for more information on the underlying path structure. The 3D visualization can be rendered as either a line, an extruded line (ribbon), an extruded circle (tube), or an extruded 2D contour. The path stores 10 values: position x/y/z, color r/g/b/a, scale x/y, and orient angle.

For more information on how the extrusion is handled, see the GLE library:
<http://www.linas.org/gle>

#### Discussion

This OB3D object optionally takes one argument: the name of a [drawing context](https://docs.cycling74.com/userguide/jitter/graphics_processing#graphics-contexts). This is a named instance of a [jit.world](https://docs.cycling74.com/reference/jit.world), or [jit.pworld](https://docs.cycling74.com/reference/jit.pworld) object, or a [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) sub-context. This value may also be set via the OB3D drawto attribute. If no argument is present, the object is implicitly added to the first valid drawing context or sub-context found in the current patch or by searching up the patcher hierarchy.

## Attributes

### autohandles[int]

Enable the calculation of handle values every time the path is edited (default = 1).

### closed[int] read-only

Indicates the path is closed (first and last points are equal).

### drawhandles[int]

Enable drawing of path handles, for debugging (default = 0).

### endcap[int]

Enable the closing of extruded path endpoints. (default = 0)

### evalin[float]

A parameter between 0 and 1 to determine where in the path rendering starts (default = 0.).

### evalout[float]

A parameter between 0 and 1 to determine where in the path rendering ends (default = 1.).

### extrudescale[2 floats]

2D scaling factor for extrusion contours in the form x y (default = 1. 1.).

### interpmode[symbol]

Path interpolation method (default = linear).

Possible values:

'linear'
(
Linear interpolation
)
'spline'
(
Hermite interpolation
)

### joinstyle[symbol]

Extrusion segment join method (default = angle). See the GLE library for more information.

Possible values:

'raw'

'angle'

'cut'

'round'

### normgen[symbol]

Normal generation method for extruded paths (default = none). See the GLE library for more information.

Possible values:

'none'
(
No generation
)
'facet'
(
Normal vector per facet
)
'edge'
(
Normal vectors lie along edges
)
'pathedge'
(
Normal vectors lie along edges and interpolate between segments
)

### pathstyle[symbol]

Path drawing method (default = line).

Possible values:

'line'

'ribbon'

'tube'

'contour'

### pointcount[int] read-only

Number of path points (default = 0).

### segments[int]

Number of segments between points (default = 20).

### texscale[3 floats]

The 3D scaling factor for textures in the form x y z (default = 1. 1. 1.) .

### texturemode[int]

Texturing coord generation method for extruded paths (default = 1). See the GLE library for more information.

Possible values:

0 = 'none'
(
No texture coord generation
)
1 = 'vertex\_flat'
(
Vertex X is U, accumulated segment length is V
)
2 = 'normal\_flat'
(
Normal vector X is U, accumulated segment length is V
)
3 = 'vertex\_cylinder'
(
Vertex cylinder mapping for U, accumulated segment length for V
)
4 = 'normal\_cylinder'
(
Normal cylinder mapping for U, accumulated segment length for V
)
5 = 'vertex\_sphere'
(
Vertex sphere mapping
)
6 = 'normal\_sphere'
(
Normal sphere mapping
)
7 = 'vertex\_model\_flat'
(
same as vertex\_flat but with untransformed vertices
)
8 = 'normal\_model\_flat'
(
same as normal\_flat but with untransformed vertices
)
9 = 'vertex\_model\_cylinder'
(
same as vertex\_cylinder but with untransformed vertices
)
10 = 'normal\_model\_cylinder'
(
same as normal\_cylinder but with untransformed vertices
)
11 = 'vertex\_model\_sphere'
(
same as vertex\_sphere but with untransformed vertices
)
12 = 'normal\_model\_sphere'
(
same as normal\_sphere but with untransformed vertices
)

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

### addcolor

Add color values to the last point in the path.

Arguments:

- r
  [float]
- g
  [float]
- b
  [float]
- a
  [float]

### addcontour

Set the contour to be used for pathstyle  contour . The  contour-vals  are a list of X and Y position values describing a contour in 2D space. A minimum of 4 are required.

Arguments:

- contour-vals
  [list]

### addorient

Add an orientation value to the last point in the path.

Arguments:

- orient
  [float]

### addscale

Add scale values to the last point in the path.

Arguments:

- scale-x
  [float]
- scale-y
  [float]

### append

Append point values to the end of the path.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]
- r
  [float]
- g
  [float]
- b
  [float]
- a
  [float]
- scale-x
  [float]
- scale-y
  [float]
- orient
  [float]

### calchandles

Calculate the path handles of each point in the path using the Catmull-Rom method. This will overwrite any previously stored handles.

### clear

Remove all points from the path

### closepath

Close the path by adding a point to the end equal to the first point.

### delete

Delete the point at  index

Arguments:

- index
  [int]

### edit

Edit the point at  index

Arguments:

- index
  [int]
- x
  [float]
- y
  [float]
- z
  [float]
- r
  [float]
- g
  [float]
- b
  [float]
- a
  [float]
- scale-x
  [float]
- scale-y
  [float]
- orient
  [float]

### edithandle

Edit the point handle at  index

Arguments:

- index
  [int]
- x
  [float]
- y
  [float]
- z
  [float]
- r
  [float]
- g
  [float]
- b
  [float]
- a
  [float]
- scale-x
  [float]
- scale-y
  [float]
- orient
  [float]

### gethandle

Get handle values at  index  and output through dump outlet.

Arguments:

- index
  [int]

### getpoint

Get point values at  index  and output through dump outlet.

Arguments:

- index
  [int]

### insert

Insert a new point at  index

Arguments:

- index
  [int]
- x
  [float]
- y
  [float]
- z
  [float]
- r
  [float]
- g
  [float]
- b
  [float]
- a
  [float]
- scale-x
  [float]
- scale-y
  [float]
- orient
  [float]

### setcolor

Set color values at  index

Arguments:

- index
  [int]
- r
  [float]
- g
  [float]
- b
  [float]
- a
  [float]

### setorient

Set orientation value at  index

Arguments:

- index
  [int]
- orient
  [float]

### setscale

Set scale values at  index

Arguments:

- index
  [int]
- scale-x
  [float]
- scale-y
  [float]

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
| [jit.path](https://docs.cycling74.com/reference/jit.path) | Evaluates a series of N-dim points as a path |
| [jit.anim.path](https://docs.cycling74.com/reference/jit.anim.path) | Evaluate a path of 3D transform points |
| [jit.gl.sketch](https://docs.cycling74.com/reference/jit.gl.sketch) | Use drawing commands with OpenGL |
