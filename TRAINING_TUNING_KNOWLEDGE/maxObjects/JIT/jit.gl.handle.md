---
type: jitter
name: "jit.gl.handle"
summary: "Use mouse movement to control position/rotation"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.handle/"
package: "Jitter"
see_also: ["jit.gl.graph", "jit.gl.gridshape", "jit.gl.isosurf", "jit.gl.mesh", "jit.gl.model", "jit.gl.nurbs", "jit.gl.plato", "jit.gl.render", "jit.gl.shader", "jit.gl.sketch", "jit.gl.slab", "jit.gl.text2d", "jit.gl.text3d", "jit.gl.texture", "jit.gl.videoplane", "jit.gl.volume"]
---
# jit.gl.handle

Use mouse movement to control position/rotation

## Description

[jit.gl.handle](https://docs.cycling74.com/reference/jit.gl.handle) responds to mouse clicks and drags in the destination by generating rotate and position messages out its left outlet.

#### Discussion

When the context is being drawn to a [jit.window](https://docs.cycling74.com/reference/jit.window) or [jit.pwindow](https://docs.cycling74.com/reference/jit.pwindow), [jit.gl.handle](https://docs.cycling74.com/reference/jit.gl.handle) responds to mouse clicks and drags in the destination by generating rotate and position messages out its left outlet. When these messages are sent to 3D objects, the objects can then be rotated and moved in space using the mouse.

If the messages from [jit.gl.handle](https://docs.cycling74.com/reference/jit.gl.handle) are sent directly to [jit.gl.render](https://docs.cycling74.com/reference/jit.gl.render), mouse motion has the effect of moving and rotating the entire 3D space defined by the renderer. In this setup, the inherit\_transform attribute should be set to 1, so that the [jit.gl.handle](https://docs.cycling74.com/reference/jit.gl.handle) object does not move within the world as well.
While mouse input is present, the [jit.gl.handle](https://docs.cycling74.com/reference/jit.gl.handle) is drawn as circles around a sphere on the x, y, and z axes. Clicking and dragging on the sphere rotates connected objects. Dragging with the command key held moves the objects along the xy plane relative to the camera. Dragging with the option key held moves the objects towards and away from the camera.

This OB3D object optionally takes one argument: the name of a [drawing context](https://docs.cycling74.com/userguide/jitter/graphics_processing#graphics-contexts). This is a named instance of a [jit.world](https://docs.cycling74.com/reference/jit.world), or [jit.pworld](https://docs.cycling74.com/reference/jit.pworld) object, or a [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) sub-context. This value may also be set via the OB3D drawto attribute. If no argument is present, the object is implicitly added to the first valid drawing context or sub-context found in the current patch or by searching up the patcher hierarchy.

## Attributes

### auto\_handle[int]

Enable/disable auto handle mode. When enabled the handle will perform mouse picking to select 3D objects under the mouse. This mode is enabled by default when the [jit.gl.handle](https://docs.cycling74.com/reference/jit.gl.handle) left inlet is unconnected.

### auto\_rotate[int]

Continue spinning along last rotation when no UI input is present (default = 0)

### auto\_time[int]

The time between automatic rotations for auto\_rotate (default = 0)

### filters[10 symbols]

Specify a list of filterclass names that can be picked when auto\_handle is enabled (default = all). Possible values include  all  and  default . Additional values include any user-specified filterclass names (maximum allowed = 10).

### fixed\_delta[float] >= 9.0.0

Locks the delta time value used when animating, in seconds (default = 0). When non-zero, updates are calculated using this value, rather than the actual time between frames. Useful for non realtime frame capture. If non-zero will override that of the bound [jit.world](https://docs.cycling74.com/reference/jit.world) fixed\_delta value.

### hilite\_color[4 floats]

Set the hilite color, used when select\_mode is  hilite  (default = 1. 1. 0. 1.).

### hover[int]

Enable/disable mouse hovering (default = 0).

### radius[float]

The radius of control sphere in 3D world (default = 1.0)

### rgb\_axes[int]

Sphere axis color flag (default = 1) When the flag is set, the sphere axes are drawn in RGB colors, Otherwise, the color attribute determines the color used.

### select\_mode[symbol]

Set the selection mode to use when  auto\_handle  = 1 (default = none).

Possible values:

'none'

'bounds'

'wireframe'

'hilite'

'depth'

### tracking[float]

The rotation amount relative to amount of mouse movement (default = 1.)

### ui\_priority[int]

UI priority value (default = -700). When multiple UI objects are listening to the same window, ui\_priority determines the order objects receive input. Lower values test first.

### visible[int]

Visibility flag (default = 1) When the flag is set, the sphere axes are visible in the 3D world.

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

### aux\_color[4 floats]

The auxiliary color in the form red green blue alpha (default = 0. 0. 0. 0.) The list elements should be in the range 0.-1.

### axes[int]

x/y/z axis rendering off/on (default = 0)

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

### layer[int]

Object layer number (default = 0) When in automatic mode, the layer number determines the rendering order (low to high). Objects in the same layer have no guarantee which will be rendered first.

### line\_width[float]

The drawing line width (default = 1.)

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

### smooth\_shading[int]

Smooth shading flag (default = 0) When the flag is set, smooth shading is used when rendering.

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

### reset

Returns [jit.gl.handle](https://docs.cycling74.com/reference/jit.gl.handle) and attached objects to the original viewing origin and undoes all rotation.

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

## See Also

| Name | Description |
| --- | --- |
| [jit.gl.graph](https://docs.cycling74.com/reference/jit.gl.graph) | Graph floats into 3D space |
| [jit.gl.gridshape](https://docs.cycling74.com/reference/jit.gl.gridshape) | Generate simple geometric shapes as a grid |
| [jit.gl.isosurf](https://docs.cycling74.com/reference/jit.gl.isosurf) | Generate a GL based surface extraction |
| [jit.gl.mesh](https://docs.cycling74.com/reference/jit.gl.mesh) | Generate GL geometry from matrices |
| [jit.gl.model](https://docs.cycling74.com/reference/jit.gl.model) | Read and draw various 3D model formats |
| [jit.gl.nurbs](https://docs.cycling74.com/reference/jit.gl.nurbs) | Generate NURBS surface |
| [jit.gl.plato](https://docs.cycling74.com/reference/jit.gl.plato) | Generate platonic solids |
| [jit.gl.render](https://docs.cycling74.com/reference/jit.gl.render) | Render Jitter OpenGL objects |
| [jit.gl.shader](https://docs.cycling74.com/reference/jit.gl.shader) | Manage a GL shader |
| [jit.gl.sketch](https://docs.cycling74.com/reference/jit.gl.sketch) | Use drawing commands with OpenGL |
| [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab) | Process texture data |
| [jit.gl.text2d](https://docs.cycling74.com/reference/jit.gl.text2d) |  |
| [jit.gl.text3d](https://docs.cycling74.com/reference/jit.gl.text3d) |  |
| [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) | Create OpenGL textures |
| [jit.gl.videoplane](https://docs.cycling74.com/reference/jit.gl.videoplane) | Display video in OpenGL |
| [jit.gl.volume](https://docs.cycling74.com/reference/jit.gl.volume) | Create a volume visualization |
