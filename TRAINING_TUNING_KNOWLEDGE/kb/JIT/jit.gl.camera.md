---
type: jitter
name: "jit.gl.camera"
summary: "Set a rendering view"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.camera/"
package: "Jitter"
see_also: ["jit.gl.render", "jit.gl.sketch", "jit.anim.node", "jit.anim.drive"]
---
# jit.gl.camera

Set a rendering view

## Description

Sets the properties needed to define a view in OpenGL. These include field of view, clipping planes, and perspective or orthographic projection modes. In addition a position and orientation can be defined for a virtual camera in 3D space, and the proper view will be generated from these transforms.

#### Discussion

Multiple [jit.gl.camera](https://docs.cycling74.com/reference/jit.gl.camera) objects can be added to a single drawing context, and switched between using the enable attribute.

Jit.gl.camera can override standard OB3D attributes of objects in the context it is drawing to. For example setting poly\_mode on the jit.gl.camera will override the current value of poly\_mode on every OB3D for that camera's draw pass. To reset this action send the attribute name with no arguments.

This OB3D object optionally takes one argument: the name of a [drawing context](https://docs.cycling74.com/userguide/jitter/graphics_processing#graphics-contexts). This is a named instance of a [jit.world](https://docs.cycling74.com/reference/jit.world), or [jit.pworld](https://docs.cycling74.com/reference/jit.pworld) object, or a [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) sub-context. This value may also be set via the OB3D drawto attribute. If no argument is present, the object is implicitly added to the first valid drawing context or sub-context found in the current patch or by searching up the patcher hierarchy.

## Attributes

### adapt[int]

Adapt the capture texture dimensions to the context window size (default = 1).

### capture[int]

Capture to the internal texture (default = 0).

Possible Values:

0 = disabled. Rendering is performed according to the parent context, which can be a jit.gl.node or a jit.gl.render object.

1 = enabled. Rendering is captured to a texture and the texture name is output out the left outlet.

> 1 = outputs multiple render targets (mrt) to the left outlet in the format " jit\_gl\_texture <texture\_name> <texture\_name> ".

### colormask[4 ints]

Color mask values for red, green, blue, and alpha channels. When set to 0, the corresponding color component is ignored by OpenGL. See
[glColorMask](http://www.opengl.org/sdk/docs/man/xhtml/glColorMask.xml)
for more detail.

### dim[2 ints]

Capture texture dimensions, used when adapt = 0 (default = 256 256).

### direction[3 floats]

Direction

### drawto[symbol]

Drawing context

### erase\_color[4 floats]

Background color of viewport and capture texture (default = 0.2 0.2 0.2 1.). Not compatible with non-automatic mode objects.

### far\_clip[float]

The far clipping plane distance in 3D world (default = 100.)

### frustum[6 floats]

Camera frustum values (left, right, bottom, top, near, far). projection\_mode must be set to frustum for these values to have an effect. The camera's frustum values entirely specify the geometry of the viewing frustum. For more technical documentation on what the six parameters to the frustum attribute mean, see the OpenGL documentation for
[glFrustum](http://www.opengl.org/sdk/docs/man/xhtml/glFrustum.xml)

### fsaa[int]

Enable full screen anti-aliasing on the texture targets when capture is enabled (default = 0)

### layer[int]

The camera layer controls the order a context or [jit.gl.node](https://docs.cycling74.com/reference/jit.gl.node) sub-context will render this camera viewport when in automatic mode (default = 0). Lower values draw first. Objects in the same layer have indeterminate ordering.

### lens\_angle[float]

The lens angle of the OpenGL camera (default = 45.)

### locklook[int]

Force the camera to remain pointed at the lookat value, ignoring orientation messages and attributes (default = 0).

### lookat[3 floats]

3D position at which the camera is pointed (default = 0. 0. 0.) when locklook is enabled. When set the camera will orient itself to point at the lookat, but only if locklook is enabled will it remain locked on this target point through subsequent transformations. To retrieve an arbitrary point along the cameras direction vector, the direction attribute can be added to the position attribute via [vexpr](https://docs.cycling74.com/reference/vexpr).

### near\_clip[float]

The near clipping plane distance in 3D world (default = 0.1)

### ortho[int]

Orthographic projection mode (default = 0)

Possible values:

0 = 'Off (Perspective)'
(
orthographic projection off (perspective projection)
)
1 = 'Orthographic (Lens Angle)'
(
orthographic projection on, using lens angle
)
2 = 'Orthographic (No Lens Angle)'
(
orthographic projection on, ignoring lens angle
)

### out\_name[symbol]

Capture texture name

### out\_names[32 symbols] read-only>= 8.0.0

Capture texture name list. The list length is equal to the number of capture targets enabled.

### proj\_matrix[16 floats] read-only>= 7.0.0

Current projection matrix

### projection\_mode[symbol]

Camera projection mode sets how the projection matrix is generated. In standard mode, the camera uses the ortho setting an related attributes such as near, far, lens\_angle, etc. to generate the projection matrix. In frustum mode, only the frustum attribute is used to calculate the projection matrix.

Possible values:

'standard'

'frustum'

### tripod[int]

Force the camera to orient itself as if mounted on a tripod. Y-axis  turn  values are applied in world-space regardless of animmode (default = 0).

### type[symbol]

Capture texture type (default = auto)

Possible values:

'auto'
(
8bit unsigned byte
)
'char'
(
8bit unsigned byte
)
'long'
(
32bit integer
)
'half'
(
16bit float
)
'float'
(
32bit float
)
'float16'
(
16bit float
)
'float32'
(
32bit float
)

### view\_matrix[16 floats] read-only>= 7.0.0

Current view matrix

### viewport[4 floats]

Viewport coordinates which set the left, bottom, width, and height of the viewport (default = 0. 0. 1. 1.)

### viewproj\_matrix[16 floats] read-only>= 7.0.0

Current view projection matrix

### vp\_mode[symbol]

Viewport coordinate mode (default = normalized). Determines if the viewport values are  absolute  or  normalized  coordinates.

Possible values:

'normalized'

'absolute'

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

### auto\_material[int]

Automatic material attributes flag (default = 1) When the flag is set, and lighting is enabled for the object, the diffuse and ambient material components for the object will be set to the object's color, and the specular and emissive lighting components are disabled.

### axes[int]

x/y/z axis rendering off/on (default = 0)

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

### color[4 floats]

The draw color in the form red green blue alpha (default = 1. 1. 1. 1.) The list elements should be in the range 0.-1.

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

### enable[int]

Enable flag (default = 1) When the flag is set, drawing is enabled.

### filterclass[symbol]

The name of this object's pick filter class (default = default). This controls the visibility of objects to the [jit.gl.handle](https://docs.cycling74.com/reference/jit.gl.handle) and [jit.gl.picker](https://docs.cycling74.com/reference/jit.gl.picker) objects. In order to select this object, the filterclass value must be in the picking object's filters list.

### fog\_params[7 floats]

The fog parameters in the form red green blue alpha density start end (default = 0. 0. 0. 0. 0. 0. 0.) The list's color elements should be in the range 0.-1.

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

### name[symbol]

The instance name (default = UID)

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

### shininess[float]

The material shininess value (default = 16.0) The value should be a float in the range 0.-255.

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

### getviewportray

Return 6 values representing the world-space endpoints of a ray cast from the  screen-x  and  screen-y  arguments.

Arguments:

- screen-x
  [int]
- screen-y
  [int]

### screentoworld >= 9.0.0

Converts screen coordinates to world coordinates, output out the dump outlet. The input x and y input coordinates are in pixels, and the input z coordinate is in normalized distance from camera (0.-1.), where 0. is the near clipping plane and 1. is the far clipping plane.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### sendoutput

Send messages to the internal texture objects used for capture output

Arguments:

- message
  [symbol]
- values
  [list]

### worldtoscreen >= 9.0.0

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
| [jit.gl.render](https://docs.cycling74.com/reference/jit.gl.render) | Render Jitter OpenGL objects |
| [jit.gl.sketch](https://docs.cycling74.com/reference/jit.gl.sketch) | Use drawing commands with OpenGL |
| [jit.anim.node](https://docs.cycling74.com/reference/jit.anim.node) | Perform hierarchical transformation |
| [jit.anim.drive](https://docs.cycling74.com/reference/jit.anim.drive) | Animate a 3D transform |
