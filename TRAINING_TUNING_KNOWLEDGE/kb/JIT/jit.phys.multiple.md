---
type: jitter
name: "jit.phys.multiple"
summary: "Uses matrices to simulate multiple rigid bodies"
signal: false
url: "https://docs.cycling74.com/reference/jit.phys.multiple/"
package: "Jitter"
see_also: ["jit.phys.world", "jit.phys.body", "jit.phys.ghost", "jit.phys.picker", "jit.gl.physdraw", "jit.gl.multiple", "jit.gl.gridshape"]
---
# jit.phys.multiple

Uses matrices to simulate multiple rigid bodies

## Description

The [jit.phys.multiple](https://docs.cycling74.com/reference/jit.phys.multiple) object uses several jit.matrix objects to simulate rigid bodies in a physics world. The two outlets connect to the position and rotate matrix inputs of a [jit.gl.multiple](https://docs.cycling74.com/reference/jit.gl.multiple) object allowing for easy visualization of the rigid body shapes.

#### Discussion

Settable parameters include position, rotate, rotatexyz, scale, mass, friction, restitution, damping, force, torque, and mesh. All parameters take float32 matrices. Parameter matrices can be of differing dim sizes, and will wrap to the dimensions of the matrix specified by the dimparam attribute (except for mesh).

## Attributes

### constraint[symbol]

Specifies a constraint type to be used for the internal constraint matrix (default=none). When set, constraints are automatically created halfway between each rigid body and its nearest neighbor, along each dimension of the position matrix.

Possible values:

'none'

'point2point'

'hinge'

'barslide'

'conetwist'

'6dof'

### constraint\_matrix[int]

Enable reporting of constraint positions as a jit\_matrix (default = 0)

### constraintoutname[symbol]

Constraint output matrix name

### damping[2 floats]

Set the linear and angular damping applied to a body in the range 0. to 1. (default 0.2 0.2). Damping can be used to simulate air resistance.

### enable[int]

Enable bodies in the physics simulation (default = 1).

### enable\_sleep[int]

Enable sleeping on all bodies, causing deactivation when linear and angular velocity are 0 (default = 0).

### filterclass[symbol]

Set the name of this object's collision filter-class (default = default). Other objects must specify the  filterclass  name in their  filters  list to enable collisions with this object. Maximum allowed unique names is 10.

### filters[10 symbols]

Specify a list of filterclass names to enable collisions with (default = all). Possible values include  all ,  worldbox , and  default . Additional values include any user-specified filterclass names (maximum allowed = 10).

### force[3 floats]

Apply a force to the rigid bodies using a 3D worldspace vector (default = 0 0 0). If forces\_relative is enabled, the vector is converted to object space.

### forces\_relative[int]

Forces relative flag will cause all forces to be converted to object space before applying (default = 0).

### friction[float]

The friction amount (opposite force) (default = 0.5). Applied when the body is in contact with another body that has friction.

### kinematic[int]

Kinematic flag (default = 1). Use this mode to disable dynamics on the bodies, enable collisions, and animate using position and rotate matrices.

### local\_scaling[int]

Local scaling flag (default = 0). When enabled, the scale attribute will apply a local scaling transform to the collision shape. When disabled, the rigid-body is removed and re-added to the physics world for every scale modification.

### mass[float]

Body mass (default = 1.). When set to 0. body dynamics are disabled, however collisions remain active.

### name[symbol]

Specifies the name of the instance (default = UID).

### physparams[11 symbols]

The list of physics body attributes corresponding to object inlets that are modifiable by passing in a matrix. Valid attributes are position, rotation, rotatexyz, scale, mass, friction, restitution, damping, force, torque, and mesh.

### posoutname[symbol] read-only

Position output matrix name

### reduce\_hull[int]

Enable automatic vertex reduction when body shape attribute is set to  convexhull  (default = 1).

### restitution[float]

Restitution value, or bounciness (default = 0.1). The proportion of kinetic energy preserved on impact with other rigid bodies.

### rolling\_friction[float]

The rolling friction amount (opposite force for a rolling object) (default = 0.0). Applied when the body is in contact with another body that has friction.

### rotoutname[symbol] read-only

Rotate output matrix name

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
A convex hull is generated that encloses the vertices specified by the  mesh  matrix.
)
'concave'
(
A concave shape is generated allowing for hollows in the shape, from the vertices specified by the  mesh  matrix.
)
'dynamicmesh'

### shareshape[int]

Enable collision shape sharing among body instances (default = 0). When enabled, all rigid body instances will have uniform shape scaling, ignoring the  scale  matrix if present.

### torque[3 floats]

Apply a torque (angular force) to the rigid bodies using a 3D worldspace vector (default = 0 0 0).

### worldname[symbol]

The name of a [jit.phys.world](https://docs.cycling74.com/reference/jit.phys.world) context the rigid bodies are bound to.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Update bodies and output matrices

### damping\_matrix

A named matrix to use for the damping parameter if it's in the  physparams  list. Must be a 2-plane float32 matrix.

Arguments:

- matrix name
  [symbol]

### force\_matrix

A named matrix to use for the force parameter if it's in the  physparams  list. Must be a 3-plane float32 matrix.

Arguments:

- matrix name
  [symbol]

### friction\_matrix

A named matrix to use for the friction parameter if it's in the  physparams  list. Must be a 1-plane float32 matrix.

Arguments:

- matrix name
  [symbol]

### getconstraint\_dict

Send a dictionary description of the modified constraint attributes out the dumpout.

### impulse

Apply an impulse (instantaneous force) to the rigid bodies using a worldspace vector described by  x ,  y ,  z . Optional args  relative-x ,  relative-y ,  relative-z  describe a relative position on the body where the force is applied, otherwise it's a central force.

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

### mass\_matrix

A named matrix to use for the mass parameter if it's in the  physparams  list. Must be a 1-plane float32 matrix.

Arguments:

- matrix name
  [symbol]

### mesh\_matrix

A named matrix to use for the mesh parameter if it's in the  physparams  list. Specifies a matrix of vertex values for determining the rigid-body convex hull or concave mesh. Must be a 3-plane float32 matrix.

Arguments:

- matrix name
  [symbol]

### position\_matrix

A named matrix to use for the position parameter if it's in the  physparams  list. Must be a 3-plane float32 matrix.

Arguments:

- matrix name
  [symbol]

### reset

Reset all instance body properties position, and quat, and zero all forces.

### restitution\_matrix

A named matrix to use for the restitution parameter if it's in the  physparams  list. Must be a 1-plane float32 matrix.

Arguments:

- matrix name
  [symbol]

### rotate\_matrix

A named matrix to use for the rotate parameter if it's in the  physparams  list. Must be a 4-plane float32 matrix.

Arguments:

- matrix name
  [symbol]

### rotatexyz\_matrix

A named matrix to use for the rotatexyz parameter if it's in the  physparams  list. Must be a 3-plane float32 matrix.

Arguments:

- matrix name
  [symbol]

### scale\_matrix

A named matrix to use for the scale parameter if it's in the  physparams  list. Must be a 3-plane float32 matrix.

Arguments:

- matrix name
  [symbol]

### sendbody

Send a body instance a message. If the first arg is a symbol, it's treated as the body instance name. If it's an integer, a list is expected whose length is equal to the number of dimensions of the position-matrix. Possible messages include all values for the physparams attribute (except  mesh ), as well as the  impulse  and  torque\_impulse  messages.

Arguments:

- body-name (optional)
  [symbol]
- body-index (optional)
  [list]
- message
  [symbol]
- values
  [list]

### sendbody\_reset

Send a body instance a message with a reset message. See the  sendbody  message for more info.

Arguments:

- body-name (optional)
  [symbol]
- body-index (optional)
  [list]
- message
  [symbol]
- values
  [list]

### sendconstraint

Send the internal constraints a message

### torque\_impulse

Apply a torque impulse (instantaneous angular force) to the rigid bodies using a worldspace vector described by  x ,  y ,  z .

Arguments:

- x
  [float]
- y
  [float]
- z
  [float]

### torque\_matrix

A named matrix to use for the torque parameter if it's in the  physparams  list. Must be a 3-plane float32 matrix.

Arguments:

- matrix name
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [jit.phys.world](https://docs.cycling74.com/reference/jit.phys.world) | Collision detection and rigid body dynamics |
| [jit.phys.body](https://docs.cycling74.com/reference/jit.phys.body) | A rigid body and collision shape |
| [jit.phys.ghost](https://docs.cycling74.com/reference/jit.phys.ghost) | A collision sensor and forcefield |
| [jit.phys.picker](https://docs.cycling74.com/reference/jit.phys.picker) | Constraint picking in a physics world |
| [jit.gl.physdraw](https://docs.cycling74.com/reference/jit.gl.physdraw) | A physics opengl debug drawer |
| [jit.gl.multiple](https://docs.cycling74.com/reference/jit.gl.multiple) | Create multiple object instances |
| [jit.gl.gridshape](https://docs.cycling74.com/reference/jit.gl.gridshape) | Generate simple geometric shapes as a grid |
