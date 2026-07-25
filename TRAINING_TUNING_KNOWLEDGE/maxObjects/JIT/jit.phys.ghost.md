---
type: jitter
name: "jit.phys.ghost"
summary: "A collision sensor and forcefield"
signal: false
url: "https://docs.cycling74.com/reference/jit.phys.ghost/"
package: "Jitter"
see_also: ["jit.phys.world", "jit.phys.body", "jit.phys.multiple", "jit.phys.picker", "jit.gl.physdraw"]
---
# jit.phys.ghost

A collision sensor and forcefield

## Description

The [jit.phys.ghost](https://docs.cycling74.com/reference/jit.phys.ghost) object represents a sensor area defined by a basic collision shape in a physics world. The collision shape is either one of several simple shapes. Additionally a force field can be enabled to act on colliding objects. The direction vector of the force field can be either in world coordinates, or relative to the [jit.phys.ghost](https://docs.cycling74.com/reference/jit.phys.ghost) object.

## Attributes

### central\_exp[float]

Adjust the exponent of the central force scaling curve if central\_mode is  decrease  or  increase . The default of 1 gives a linear curve, greater than one exponential, and less than one logarithmic.

### central\_force[float]

Apply a central force

### central\_mode[symbol]

Specifies how rigid body distance from center affects the central force when enabled by central\_force (default = decrease).

Possible values:

'constant'
(
Distance has no effect on central force
)
'decrease'
(
Central force decreases with distance
)
'increase'
(
Central force increases with distance
)

### collision\_mode[symbol]

Specifies the format of the collisions dictionary (default = simple)

Possible values:

'simple'
(
Report contact point positions and normals average
)
'complete'
(
All contact point position and normals reported
)

### collisions[int]

Enables and disables collision dictionary reporting out the first outlet.

### enable[int]

Enable this ghost object in the physics simulation (default = 1).

### filters[10 symbols]

The list of names that determine colliding objects for this ghost object; Valid attributes are  all  and  default . Additional valid attributes are defined by the colliding objects' filterclass attribute.

### force[3 floats]

Apply a force to the colliding rigid bodies using the vector from the ghost object center to the rigid body center, scaled by  amount . If  amount  is positive, bodies shoot away from the ghost center, if negative they are pulled into the ghost center.

### name[symbol]

Specifies the name of the instance (default = UID).

### position[3 floats]

Ghost object in worldspace in the form x y z (default = 0. 0. 0.).

### quat[4 floats]

Ghost object orientation as a quaternion in the form x y z w (default = 0. 0. 0. 1.).

### rotate[4 floats]

Ghost object orientation as angle-axis in the form angle(in degrees) x y z (default = 0. 0. 0. 1.).

### rotate\_order[symbol]

Sets the order of rotations that are applied to the rotatexyz attribute for all child gl objects (default = auto). E.G. if set to xyz , the object is first rotated around its X axis, then Y, and finally Z. The default value, 'auto', implements yzx ordering.

Possible values:

'auto'

'xyz'

'xzy'

'yxz'

'yzx'

'zxy'

'zyx'

### rotatexyz[3 floats]

Ghost object orientation as Euler angles (in degrees) in the form x y z (default = 0. 0. 0.).

### scale[3 floats]

The Ghost object scaling factor in the form x y z (default = 1. 1. 1.). Cannot be applied to  concave  shapes.

### shape[symbol]

Collision shape type (default = sphere).

Possible values:

'sphere'

'cube'

'capsule'

'cone'

'cylinder'

'convexhull'

'concave'

'dynamicmesh'

### torque[3 floats]

Apply a torque (angular force) to the colliding bodies using a 3D worldspace vector (default = 0 0 0).

### worldname[symbol]

The name of a [jit.phys.world](https://docs.cycling74.com/reference/jit.phys.world) context this ghost object is bound to.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Update ghost forces and output collision dict

### central\_impulse

Apply an impulse (instantaneous force) to the colliding rigid bodies using the vector from the ghost object center to the rigid body center, scaled by  amount . If  amount  is positive, bodies shoot away from the ghost center, if negative they are pulled into the ghost center. Impulse strength is inversely proportional to the distance between objects.

Arguments:

- amount
  [float]

### impulse

Apply an impulse (instantaneous force) to the colliding rigid bodies using a worldspace vector described by  x ,  y ,  z . Optional args  relative-x ,  relative-y ,  relative-z  describe a relative position on the body where the force is applied, otherwise it's a central force.

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

### reset

Clear all forces

### torque\_impulse

Apply a torque impulse (instantaneous angular force) to the colliding rigid bodies using a worldspace vector described by  x ,  y ,  z .

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
| [jit.phys.body](https://docs.cycling74.com/reference/jit.phys.body) | A rigid body and collision shape |
| [jit.phys.multiple](https://docs.cycling74.com/reference/jit.phys.multiple) | Uses matrices to simulate multiple rigid bodies |
| [jit.phys.picker](https://docs.cycling74.com/reference/jit.phys.picker) | Constraint picking in a physics world |
| [jit.gl.physdraw](https://docs.cycling74.com/reference/jit.gl.physdraw) | A physics opengl debug drawer |
