---
type: jitter
name: "jit.phys.body"
summary: "A rigid body and collision shape"
signal: false
url: "https://docs.cycling74.com/reference/jit.phys.body/"
package: "Jitter"
see_also: ["jit.phys.world", "jit.phys.multiple", "jit.phys.picker", "jit.gl.physdraw", "jit.gl.gridshape"]
---
# jit.phys.body

A rigid body and collision shape

## Description

The [jit.phys.body](https://docs.cycling74.com/reference/jit.phys.body) object represents a rigid body and collision shape in a physics simulation. The collision shape is either one of several simple shapes, a compound shape (combination of simple shapes), or defined by a matrix of vertices.

#### Discussion

Shapes defined by a mesh of vertices include  convexhull ,  concave , and  dynamicmesh . Each of these shapes require a 3 plane, float32, 1D or 2D matrix passed in. If the vertex matrix is 1D it's interpreted as a triangle mesh, if 2D it's interpreted as a tri\_grid mesh.

## Attributes

### anim[symbol]

The name of a [jit.anim.node](https://docs.cycling74.com/reference/jit.anim.node) object to receive transform updates from.

### collisions[int]

Enables and disables collision reporting out the second (dumpout) outlet.

### damping[2 floats]

Set the linear and angular damping applied to a body in the range 0. to 1. (default 0.2 0.2). Damping can be used to simulate air resistance.

### enable[int]

Enable this body in the physics simulation (default = 1).

### enable\_sleep[int]

Enable sleeping on this body, causing deactivation when linear and angular velocity are 0 (default = 0).

### filterclass[symbol]

Set the name of this object's collision filter-class (default = default). Other objects must specify the  filterclass  name in their  filters  list to enable collisions with this object. Maximum allowed unique names is 10.

### filters[10 symbols]

Specify a list of filterclass names to enable collisions with (default = all). Possible values include  all ,  worldbox , and  default . Additional values include any user-specified filterclass names (maximum allowed = 10).

### force[3 floats]

Apply a force to the rigid body using a 3D worldspace vector (default = 0 0 0). If forces\_relative is enabled, the vector is converted to object space.

### forces\_relative[int]

Forces relative flag will cause all forces to be converted to object space before applying (default = 0).

### friction[float]

The friction amount (opposite force) (default = 0.5). Applied when the body is in contact with another body that has friction.

### kinematic[int]

Kinematic flag (default = 0). Use this mode to disable dynamics on the body, maintain collisions with other bodies in the world, and animate using position and quat attributes. This allows for a user-animated rigid-body.

### local\_scaling[int]

Local scaling flag (default = 0). When enabled, the scale attribute will apply a local scaling transform to the collision shape. When disabled, the rigid-body is removed and re-added to the physics world for every scale modification.

### mass[float]

Body mass (default = 1.). When set to 0. body dynamics are disabled, however collisions remain active.

### name[symbol]

Specifies the name of the instance (default = UID).

### position[3 floats]

Body position in worldspace in the form x y z (default = 0. 0. 0.).

### quat[4 floats]

Body orientation as a quaternion in the form x y z w (default = 0. 0. 0. 1.).

### reduce\_hull[int]

Enable automatic vertex reduction when body shape attribute is set to  convexhull  (default = 1).

### resetpos[3 floats]

Body reset position in the form x y z (default = 0. 0. 0.). This is the worldspace position the body will return to upon receiving the  reset  message.

### resetquat[4 floats]

Body reset orientation as a quaternion in the form x y z w (default = 0. 0. 0. 1.). This is the orientation the body will return to upon receiving the  reset  message.

### restitution[float]

Restitution value, or bounciness (default = 0.1). The proportion of kinetic energy preserved on impact with other rigid bodies.

### rolling\_friction[float]

The rolling friction amount (opposite force for a rolling object) (default = 0.0). Applied when the body is in contact with another body that has friction.

### rotate[4 floats]

Body orientation as angle-axis in the form angle(in degrees) x y z (default = 0. 0. 0. 1.).

### rotate\_order[symbol]

Sets the order of rotations that are applied to the rotatexyz attribute for all child gl objects (default = auto). E.G. if set to xyz , the object is first rotated around its X axis, then Y, and finally Z. The default value, 'auto', implements yzx ordering. To replicate Max 5, use zyx . If an ob3d is bound, this will override the rotate\_order inherited from its jit.gl.render context.

Possible values:

'auto'

'xyz'

'xzy'

'yxz'

'yzx'

'zxy'

'zyx'

### rotatexyz[3 floats]

Body orientation as Euler angles (in degrees) in the form x y z (default = 0. 0. 0.).

### scale[3 floats]

The body scaling factor in the form x y z (default = 1. 1. 1.).

### send\_scale[int]

Send scale flag (default = 1). When enabled, scale values will be sent to bound objects.

### shape[symbol]

Collision shape type (default = sphere).

Possible values:

'sphere'

'cube'

'capsule'

'cone'

'cylinder'

'convexhull'
(
Requires a matrix of vertices. A convex hull is generated that encloses the vertices.
)
'concave'
(
Requires a matrix of vertices. A concave shape is generated, allowing for hollows in the mesh shape
)
'compound'
(
Composite of simple shapes
)
'dynamicmesh'
(
Requires a matrix of vertices. Handles dynamically changing mesh shapes and requires a non-moving rigid body.
)

### targetname[symbol]

The name of a target object, either an OpenGL object or a [jit.anim.node](https://docs.cycling74.com/reference/jit.anim.node). This object will receive position, quat, and possibly scale values.

### torque[3 floats]

Apply a torque (angular force) to the rigid body using a 3D worldspace vector (default = 0 0 0).

### total\_force[3 floats] read-only

The total force currently applied to the rigid-body.

### total\_torque[3 floats] read-only

The total torque currently applied to the rigid-body.

### velocity[3 floats]

The current rigid-body velocity in units per second (default = 0 0 0).

### velocity\_ang[3 floats]

The current rigid-body angular velocity in radians per second (default = 0 0 0).

### worldname[symbol]

The name of a [jit.phys.world](https://docs.cycling74.com/reference/jit.phys.world) context this body is bound to.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Update the body forces and matrix inputs, and output position and quat values.

### addchild

Add to a compound body a child  shape . Optional args are position x/y/z, quaternion x/y/z/w and scale x/y/z.

Arguments:

- shape
  [symbol]
- x
  [float]
- y
  [float]
- z
  [float]
- quat-x
  [float]
- quat-y
  [float]
- quat-z
  [float]
- quat-w
  [float]
- scale-x
  [float]
- scale-y
  [float]
- scale-z
  [float]

### getchild\_dict

Send a dictionary description of the compound body child shapes out the dumpout.

### impulse

Apply an impulse (instantaneous force) to the rigid body using a worldspace vector described by  x ,  y ,  z . If forces\_relative is enabled, the vector is converted to object space. Optional args  relative-x ,  relative-y ,  relative-z  describe a relative position on the body where the force is applied, otherwise it's a central force.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]
- relative-x
  [float]
- relative-y
  [float]
- relative-z
  [float]

### removechild

Remove the child shape at  index  from a compound body.

Arguments:

- index
  [int]

### removechildren

Remove all child shapes from a compound body.

### reset

Reset body properties position, and quat, and zero all forces.

### setchild\_position

Set the position of child shape at  index  of a compound body.

Arguments:

- index
  [int]
- x
  [float]
- y
  [float]
- z
  [float]

### setchild\_quat

Set the quaternion of child shape at  index  of a compound body.

Arguments:

- index
  [int]
- x
  [float]
- y
  [float]
- z
  [float]
- w
  [float]

### setchild\_scale

Set the scaling factor of child shape at  index  of a compound body.

Arguments:

- index
  [int]
- x
  [float]
- y
  [float]
- z
  [float]

### setchild\_shape

Set the shape of child at  index  of a compound body.

Arguments:

- index
  [int]
- shape
  [symbol]

### setresetstate

Set the resetpos and resetquat attributes to their current state.

### torque\_impulse

Apply a torque impulse (instantaneous angular force) to the rigid body using a worldspace vector described by  x ,  y ,  z . If forces\_relative is enabled, the vector is converted to object space.

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

## See Also

| Name | Description |
| --- | --- |
| [jit.phys.world](https://docs.cycling74.com/reference/jit.phys.world) | Collision detection and rigid body dynamics |
| [jit.phys.multiple](https://docs.cycling74.com/reference/jit.phys.multiple) | Uses matrices to simulate multiple rigid bodies |
| [jit.phys.picker](https://docs.cycling74.com/reference/jit.phys.picker) | Constraint picking in a physics world |
| [jit.gl.physdraw](https://docs.cycling74.com/reference/jit.gl.physdraw) | A physics opengl debug drawer |
| [jit.gl.gridshape](https://docs.cycling74.com/reference/jit.gl.gridshape) | Generate simple geometric shapes as a grid |
