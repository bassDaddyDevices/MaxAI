---
type: jitter
name: "jit.gl.render"
summary: "Render Jitter OpenGL objects"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.render/"
package: "Jitter"
see_also: ["jit.gl.graph", "jit.gl.gridshape", "jit.gl.handle", "jit.gl.isosurf", "jit.gl.mesh", "jit.gl.model", "jit.gl.nurbs", "jit.gl.plato", "jit.gl.shader", "jit.gl.sketch", "jit.gl.slab", "jit.gl.text2d", "jit.gl.text3d", "jit.gl.texture", "jit.gl.videoplane", "jit.gl.volume"]
---
# jit.gl.render

Render Jitter OpenGL objects

## Description

Use [jit.gl.render](https://docs.cycling74.com/reference/jit.gl.render) to render Jitter OpenGL objects to a rendering destination. [jit.gl.render](https://docs.cycling74.com/reference/jit.gl.render) drives the rendering of 3D graphics, setting up and invoking the drawing of each frame. [jit.gl.render](https://docs.cycling74.com/reference/jit.gl.render) can draw to [jit.window](https://docs.cycling74.com/reference/jit.window) and [jit.pwindow](https://docs.cycling74.com/reference/jit.pwindow).

## Attributes

### camera[3 floats]

Camera position

### drawto[symbol]

The named drawing context in which to draw (default = none) A named drawing context is a named instance of a [jit.window](https://docs.cycling74.com/reference/jit.window) or [jit.pwindow](https://docs.cycling74.com/reference/jit.pwindow) object.

### erase\_color[4 floats]

The context RBGA erase color (default = 0.2 0.2 0.2 1)

### far\_clip[float]

Far clipping plane distance

### lens\_angle[float]

Camera lens angle

### light\_ambient[4 floats]

Ambient lighting color

### light\_diffuse[4 floats]

Diffuse lighting color

### light\_global\_ambient[4 floats]

Global ambient lighting color

### light\_position[4 floats]

Light position

### light\_specular[4 floats]

Specular lighting color

### lookat[3 floats]

Camera lookat position

### near\_clip[float]

Near clipping plane distance

### rotate\_order[symbol]

Set the order rotations are applied for the rotatexyz attribute for all child gl objects (default = auto). E.G. if set to  xyz , the object is first rotated around its X axis, then Y, and finally Z. The default of  auto  implements  yzx  ordering. To replicate Max 5, use  zyx .

Possible values:

'auto'

'xyz'

'xzy'

'yxz'

'yzx'

'zxy'

'zyx'

### up[3 floats]

Camera up vector

### OB3D Attributes

### anchor[3 floats]

The anchor position in local space (default = 0. 0. 0.). Allows for offsetting the local 3D origin around which transforms are applied.

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

### cull\_face[int]

Face culling mode (default = 0 (no culling))

0 = no culling

1 = cull back faces

2 = cull front faces

### depth\_enable[int]

Depth buffering flag (default = 1) When the flag is set, depth buffering is enabled.

### depth\_write[int]

Depth write flag (default = 1). When the flag is set, writing to the depth buffer is enabled. This will have no effect if depth\_enable is turned off.

### enable[int]

Enable flag (default = 1) When the flag is set, drawing is enabled.

### fog\_params[7 floats]

The fog parameters in the form red green blue alpha density start end (default = 0. 0. 0. 0. 0. 0. 0.) The list's color elements should be in the range 0.-1.

### fog[float]

The amount of fog effect (default = 0.)

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

### ortho[int]

Orthographic projection mode (default = 0)

0 = orthographic projection off (perspective projection)

1 = orthographic projection on, using lens angle

2 = orthographic projection on, ignoring lens angle

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

### shader[symbol]

The name of the shader to be applied (default = none)

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

### drawclients

Draw all automatic clients

### drawswap

Draw all automatic clients and swap buffers

### erase

Erase the render destination contents

### getscene\_dict >= 8.0.0

Outputs a dictionary of scene elements out the dumpout prepended by the symbol "scene\_dict". The optional argument specifies the attribute mode. If no argument is supplied only the spatial transform attributes are included.

If the arg  *all\_attrs*  is supplied all object attributes are included.

If the arg  *modified\_attrs*  is supplied any attributes with modified state are included.

Arguments:

- attribute mode
  [symbol]

### screentoworld

Converts screen coordinates to world coordinates, output out the dump outlet. The input x and y input coordinates are in pixels, and the input z coordinate is in normalized distance from camera (0.-1.), where 0. is the near clipping plane and 1. is the far clipping plane.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### swap

Swap rendering buffers

### worldtoscreen

Converts world coordinates to screen coordinates, output out the dump outlet. The output x and y input coordinates are in pixels, and the output z coordinate is in normalized distance from camera (0.-1.), where 0. is the near clipping plane and 1. is the far clipping plane.

Arguments:

- x
  [float]
- y
  [float]
- z
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

### import\_material

Import a Jitter material file (.jitmtl).

### export\_material

Export material state as a material file (.jitmtl).

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
| [jit.gl.shader](https://docs.cycling74.com/reference/jit.gl.shader) | Manage a GL shader |
| [jit.gl.sketch](https://docs.cycling74.com/reference/jit.gl.sketch) | Use drawing commands with OpenGL |
| [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab) | Process texture data |
| [jit.gl.text2d](https://docs.cycling74.com/reference/jit.gl.text2d) |  |
| [jit.gl.text3d](https://docs.cycling74.com/reference/jit.gl.text3d) |  |
| [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) | Create OpenGL textures |
| [jit.gl.videoplane](https://docs.cycling74.com/reference/jit.gl.videoplane) | Display video in OpenGL |
| [jit.gl.volume](https://docs.cycling74.com/reference/jit.gl.volume) | Create a volume visualization |
