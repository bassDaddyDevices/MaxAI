---
type: jitter
name: "jit.anim.node"
summary: "Perform hierarchical transformation"
signal: false
url: "https://docs.cycling74.com/reference/jit.anim.node/"
package: "Jitter"
see_also: ["jit.anim.drive", "jit.anim.path", "jit.gl.camera"]
---
# jit.anim.node

Perform hierarchical transformation

## Description

The [jit.anim.node](https://docs.cycling74.com/reference/jit.anim.node) object represents a transformation (position, orientation and scale) in 3D space. OpenGL objects bind to a [jit.anim.node](https://docs.cycling74.com/reference/jit.anim.node) and receive position, rotate, and scale attributes. In addition, parent-child relationships can be established in a hierarchical transformation structure, where child [jit.anim.node](https://docs.cycling74.com/reference/jit.anim.node) objects are transformed relative to their parents.

#### Discussion

Messages are provided that allow for translating, rotating and scaling relative to the current transform in either local space, parent space, or absolute world space. Additional attributes are provided for advanced control when a [jit.anim.node](https://docs.cycling74.com/reference/jit.anim.node) is bound to a [jit.gl.camera](https://docs.cycling74.com/reference/jit.gl.camera).

## Attributes

### anchor[3 floats]

Adjust the node anchor (pivot) position (default = 0 0 0). This is the position around which the node will rotate.

### anim[symbol]

Parent anim\_node name

### animmode[symbol]

Set both turnmode and movemode attributes (default = parent).

Possible values:

'local'
(
transform relative to local axis
)
'parent'
(
transform relative to parent axis
)
'world'
(
transform relative to world axis
)

### automatic[int]

Enable automatic updates from draw context (default = 1).

### direction[3 floats]

One way to set the orientation. The node will orient so that it's local Z axis will align with the axis provided. (default = 0 0 1)

### inherit\_position[int]

Enable inheriting of position values from the parent node (default = 1).

### inherit\_rotate[int]

Enable inheriting of rotation values from the parent node (default = 1).

### inherit\_scale[int]

Enable inheriting of scale values from the parent node (default = 1).

### invtransform[16 floats] read-only

Retrieve the inverse world transform

### locklook[int]

Force the node to remain pointed at the lookat value, ignoring orientation messages and attributes (default = 0).

### lockplane[int]

Cause translation values of the specified plane to be set to zero for  move  message (default = 0).

Possible values:

0 = 'none'

1 = 'x-plane'

2 = 'y-plane'

3 = 'z-plane'

### lookat[3 floats]

One way to set the orientation. The node will orient so that it's local Z points to the 3D position provided. (default = 0 0 0)

### movemode[symbol]

Determines which space the  move  message will affect the position of this node (default = parent).

Possible values:

'local'
(
move relative to local axis
)
'parent'
(
Move relative to parent axis
)
'world'
(
Move relative to world axis
)

### name[symbol]

The instance name. Ob3ds can set their anim attribute to this value to bind to this node.

### parentpos[3 floats]

Set by the node named by the anim attribute. Specifies a position in 3D space that will be concatenated with the local position to derive the world position. (default = 0 0 0)

### parentquat[4 floats]

Set by the node named by the anim attribute. Specifies a quaternion orientation that will be concatenated with the local orientation to derive the world orientation. (default = 0 0 0 1)

### parentrot[4 floats]

Set by the node named by the anim attribute. Specifies an angle-axis orientation that will be concatenated with the local orientation to derive the world orientation. (default = 0 0 0 1)

### parentscale[3 floats]

Set by the node named by the anim attribute. Specifies a scale value that will be concatenated with the local scale to derive the world scale. (default = 1 1 1)

### position[3 floats]

Specifies a position in 3D space. This position is relative to the position provided by the parent node. (default = 0 0 0)

### quat[4 floats]

Specifies a quaternion orientation in 3D space. This orientation is relative to the orientation provided by the parent node. (default = 0 0 0 1)

### rotate[4 floats]

Specifies an angle-axis orientation in 3D space. This orientation is relative to the orientation provided by the parent node. (default = 0 0 0 1)

### rotate\_order[symbol]

Set the order rotations are applied for the rotatexyz attribute (default = auto). E.G. if set to  xyz , the object is first rotated around its X axis, then Y, and finally Z. The default of  auto  implements  yzx  ordering. To replicate Max 5, use  zyx . If an ob3d is bound, this will override the rotate\_order inherited from its [jit.gl.render](https://docs.cycling74.com/reference/jit.gl.render) context.

Possible values:

'auto'

'xyz'

'xzy'

'yxz'

'yzx'

'zxy'

'zyx'

### rotatexyz[3 floats]

Specifies an Euler orientation in 3D space. This orientation is relative to the orientation provided by the parent node. (default = 0 0 0)

### scale[3 floats]

The local 3D scaling factor in the form x y z (default = 1. 1. 1.)

### transform[16 floats]

Get and set the full local 4x4 matrix transformation.

### tripod[int]

Force the node to orient itself as if mounted on a tripod. Y-axis  turn  values are applied in world-space regardless of turnmode (default = 0).

### turnmode[symbol]

Determines which space the  turn  message will affect the orientation of this node (default = parent).

Possible values:

'local'
(
Rotate relative to local axis
)
'parent'
(
Rotate relative to parent axis
)
'world'
(
Rotate relative to world axis
)

### worlddir[3 floats] read-only

Retrieve the worldspace direction vector.

### worldpos[3 floats] read-only

A position in 3D space that is derived from the local position and parent position. (default = 0 0 0)

### worldquat[4 floats] read-only

An orientation in 3D space that is derived from the local orientation and the parent orientation. (default = 0 0 0 1)

### worldrot[4 floats] read-only

An orientation in 3D space that is derived from the local orientation and the parent orientation. (default = 0 0 0 1)

### worldscale[3 floats] read-only

A scaling value in 3D space that is derived from the local scale and the parent scale. (default = 1 1 1)

### worldtransform[16 floats] read-only

The full world transformation

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Output the current world transform coordinates, which is a concatenation of the local transform with the parent transform.

### anim\_grow

Scale the node along each axis by the amount provided.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### anim\_move

Move the node along the axis provided, relative to the space indicated by movemode.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### anim\_reset

Reset the local transformation attributes to their default values (position = 0 0 0, rotatexyz = 0 0 0, and scale = 1 1 1)

### anim\_turn

Rotate the node along each axis by the amount provided, relative to the space indicated by turnmode.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### concat

Concatenate (multiply) the current transform with the passed in 4x4 matrix. Local transform attributes are updated after the operation.

### grow

See the  anim\_grow  listing

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### localtoworld

Retrieve the world-space position from passed in local coordinates. The local coordinates are relative to the current world-space transform.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### localtoworld\_quat

Retrieve the world-space quaternion from passed in local quaternion. The returned quaternion is the product of to the current world-space quaternion and the local quaternion.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]
- w
  [float]

### move

See the  anim\_move  listing

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### reset

See the  anim\_reset  listing

### turn

See the  anim\_turn  listing

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### update\_node

See the  bang  listing

### worldtolocal

Retrieve the local-space position from passed in world coordinates. The local coordinates are relative to the current world-space transform.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### worldtolocal\_quat

Retrieve the local quaternion from passed in world quaternion. The returned quaternion is the product of to the current inverse world-space quaternion and the world quaternion.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]
- w
  [float]

## See Also

| Name | Description |
| --- | --- |
| [jit.anim.drive](https://docs.cycling74.com/reference/jit.anim.drive) | Animate a 3D transform |
| [jit.anim.path](https://docs.cycling74.com/reference/jit.anim.path) | Evaluate a path of 3D transform points |
| [jit.gl.camera](https://docs.cycling74.com/reference/jit.gl.camera) | Set a rendering view |
