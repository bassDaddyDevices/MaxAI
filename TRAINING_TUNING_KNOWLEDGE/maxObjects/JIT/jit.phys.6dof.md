---
type: jitter
name: "jit.phys.6dof"
summary: "A six degrees of freedom constraint in a physics world"
signal: false
url: "https://docs.cycling74.com/reference/jit.phys.6dof/"
package: "Jitter"
see_also: ["jit.phys.world", "jit.phys.body", "jit.phys.barslide", "jit.phys.conetwist", "jit.phys.hinge", "jit.phys.point2point"]
---
# jit.phys.6dof

A six degrees of freedom constraint in a physics world

## Description

The [jit.phys.6dof](https://docs.cycling74.com/reference/jit.phys.6dof) allows for linear and angular constraints of any of the three axes. Each axis can be either locked, free or limited. If only a single body is bound, it is constrained to a point in world space.

## Attributes

### bias[float]

Sets the magnitude of the limit's position correction (i.e. ow strictly the position error is corrected). For most cases, this attribute value should not be greater than 1 (default = 0.3).

### body1[symbol]

The name of the first [jit.phys.body](https://docs.cycling74.com/reference/jit.phys.body) to constrain.

### body2[symbol]

The name of the second [jit.phys.body](https://docs.cycling74.com/reference/jit.phys.body) to constrain.

### collisions[int]

Enables collisions between attached bodies (default = 0).

### enable[int]

Enable this constraint in the physics simulation (default = 1).

### lowerlimit\_ang[3 floats]

The lower limits of allowed rotation in degrees (default = 1 1 1). If lowerlimit is greater than upper limit, no limits are applied to the constraint axis.

### lowerlimit\_lin[3 floats]

The lower limits of allowed translation (default = 0 0 0). If lowerlimit is greater than upper limit, no limits are applied to the constraint axis.

### motorstrength[float]

The maximum motor impulse (default 1.).

### motorvelocity\_ang[3 floats]

Enables angular motor and specifies velocity desired in degrees per second (default = 0).

### motorvelocity\_lin[3 floats]

Enables linear motor and specifies velocity desired in units per second (default = 0).

### position1[3 floats]

The pivot point of body1 as a 3D vector relative to the body1 center of mass (default = 0 0 0).

### position2[3 floats]

The pivot point of body2 as a 3D vector relative to the body2 center of mass (default = 0 0 0). If body2 is blank, this is the worldspace position of the constraint.

### quat1[4 floats]

The quaternion orientation of body1 relative to the constraint (default = 0 0 0 1).

### quat2[4 floats]

The quaternion orientation of body2 relative to the constraint (default = 0 0 0 1). If body2 is blank, this is the worldspace orientation of the constraint.

### relaxation[float]

The rate at which velocity errors are corrected by limits, effectively the strength of the limits (default = 1.0) . Lower values specify weaker limits. For most cases, the relaxation value should not be greater than 1.

### rotate1[4 floats]

Rotation of body1 relative to the constraint (default = 0 0 0 1).

### rotate2[4 floats]

Rotation of body2 relative to the constraint (default = 0 0 0 1). If body2 is blank, this is the worldspace orientation of the constraint.

### rotatexyz1[3 floats]

Euler rotation of body1 relative to the constraint (default = 0 0 0).

### rotatexyz2[3 floats]

Euler rotation of body2 relative to the constraint (default = 0 0 0). If body2 is blank, this is the worldspace orientation of the constraint.

### spring\_ang[3 ints]

Enable angular spring motor along axis, if non-zero (default = 0 0 0).

### spring\_lin[3 ints]

Enable linear spring motor along axis, if non-zero (default = 0 0 0).

### springdamp\_ang[3 floats]

Set the angular spring motor damping for each axis (default = 1 1 1).

### springdamp\_lin[3 floats]

Set the linear spring motor damping for each axis (default = 1 1 1).

### springeq\_ang[3 floats]

Set the angular spring motor equilibrium point for each axis, in degrees (default = 0 0 0).

### springeq\_lin[3 floats]

Set the linear spring motor equilibrium point for each axis (default = 0 0 0).

### springstiff\_ang[3 floats]

Set the angular spring motor stiffness for each axis (default = 0 0 0).

### springstiff\_lin[3 floats]

Set the linear spring motor stiffness for each axis (default = 0 0 0).

### strength[float]

Set the constraint strength (default = 0.2). Determines what proportion of the joint error will be fixed each simulation step. Values between 0.1 and 0.8 are recommended.

### stretch[float]

Set the constraint stretch (default = 0.0). Setting to a positive value allows forces acting on rigid bodies to violate the constraint by an amount proportional to the stretch value.

### upperlimit\_ang[3 floats]

The upper limits of allowed rotation in degrees (default = -1 -1 -1). If lowerlimit is greater than upper limit, no limits are applied to the constraint axis.

### upperlimit\_lin[3 floats]

The upper limits of allowed translation (default = 0 0 0). If lowerlimit is greater than upper limit, no limits are applied to the constraint axis.

### worldname[symbol]

The name of a [jit.phys.world](https://docs.cycling74.com/reference/jit.phys.world) context this constraint is bound to.

### worldpos[3 floats] read-only

The derived constraint world position (default = 0 0 0)

### worldquat[4 floats] read-only

The derived constraint world quaternion (default = 0 0 0 1)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### reset

Removes any current forces and returns the attached objects to their original position.

## See Also

| Name | Description |
| --- | --- |
| [jit.phys.world](https://docs.cycling74.com/reference/jit.phys.world) | Collision detection and rigid body dynamics |
| [jit.phys.body](https://docs.cycling74.com/reference/jit.phys.body) | A rigid body and collision shape |
| [jit.phys.barslide](https://docs.cycling74.com/reference/jit.phys.barslide) | A bar constraint in a physics world |
| [jit.phys.conetwist](https://docs.cycling74.com/reference/jit.phys.conetwist) | A conetwist constraint in a physics world |
| [jit.phys.hinge](https://docs.cycling74.com/reference/jit.phys.hinge) | A hinge constraint in a physics world |
| [jit.phys.point2point](https://docs.cycling74.com/reference/jit.phys.point2point) | A point to point constraint in a physics world |
