---
type: jitter
name: "jit.phys.barslide"
summary: "A bar constraint in a physics world"
signal: false
url: "https://docs.cycling74.com/reference/jit.phys.barslide/"
package: "Jitter"
see_also: ["jit.phys.world", "jit.phys.body", "jit.phys.conetwist", "jit.phys.hinge", "jit.phys.point2point", "jit.phys.6dof"]
---
# jit.phys.barslide

A bar constraint in a physics world

## Description

The [jit.phys.barslide](https://docs.cycling74.com/reference/jit.phys.barslide) object constrains attached [jit.phys.body](https://docs.cycling74.com/reference/jit.phys.body) objects to rotate and translate around a single axis. Limits and motor forces can be specified for both the linear translation and angular rotation around the constraint. If only a single body is bound, it is constrained to a point in world space.

## Attributes

### body1[symbol]

The name of the first [jit.phys.body](https://docs.cycling74.com/reference/jit.phys.body) to constrain.

### body2[symbol]

The name of the second [jit.phys.body](https://docs.cycling74.com/reference/jit.phys.body) to constrain.

### collisions[int]

Enables collisions between attached bodies (default = 0).

### damping[float]

Limit damping value (default = 0.7).

### enable[int]

Enable this constraint in the physics simulation (default = 1).

### linearposition[float] read-only

Position of constraint along translate axis (default = 0).

### lowerlimit\_ang[float]

The lower limit of allowed rotation around the bar axis in degrees (default = 1). If lowerlimit is greater than upper limit, no limits are applied to the constraint axis.

### lowerlimit\_lin[float]

The lower limit of allowed translation along the bar axis (default = 0). If lowerlimit is greater than upper limit, no limits are applied to the constraint axis.

### motorstrength\_ang[float]

The maximum angular motor impulse (default 1.).

### motorstrength\_lin[float]

The maximum linear motor impulse (default 1.).

### motorvelocity\_ang[float]

Enables angular motor and specifies velocity desired in degrees per second (default = 0).

### motorvelocity\_lin[float]

Enables linear motor and specifies velocity desired in units per second (default = 0).

### position1[3 floats]

The pivot point of body1 as a 3D vector relative to the body1 center of mass (default = 0 0 0).

### position2[3 floats]

The pivot point of body2 as a 3D vector relative to the body2 center of mass (default = 0 0 0). If body2 is blank, this is the worldspace position of the constraint.

### quat1[4 floats]

The quaternion orientation of body1 relative to the constraint (default = 0 0 0 1).

### quat2[4 floats]

The quaternion orientation of body2 relative to the constraint (default = 0 0 0 1). If body2 is blank, this is the worldspace orientation of the constraint.

### restitution[float]

Limit restitution value (default = 1.0).

### rotate1[4 floats]

Rotation of body1 relative to the constraint (default = 0 0 0 1).

### rotate2[4 floats]

Rotation of body2 relative to the constraint (default = 0 0 0 1). If body2 is blank, this is the worldspace orientation of the constraint.

### rotatexyz1[3 floats]

Euler rotation of body1 relative to the constraint (default = 0 0 0).

### rotatexyz2[3 floats]

Euler rotation of body2 relative to the constraint (default = 0 0 0). If body2 is blank, this is the worldspace orientation of the constraint.

### softness[float]

Limit softness value (default = 1.0).

### strength[float]

Set the constraint strength (default = 0.2). Determines what proportion of the joint error will be fixed each simulation step. Values between 0.1 and 0.8 are recommended.

### stretch[float]

Set the constraint stretch (default = 0.0). Setting to a positive value allows forces acting on rigid bodies to violate the constraint by an amount proportional to the stretch value.

### upperlimit\_ang[float]

The upper limit of allowed rotation in degrees around the bar axis (default = -1). If lowerlimit is greater than upper limit, no limits are applied to the constraint axis.

### upperlimit\_lin[float]

The upper limit of allowed translation along the bar axis (default = 0). If lowerlimit is greater than upper limit, no limits are applied to the constraint axis.

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
| [jit.phys.conetwist](https://docs.cycling74.com/reference/jit.phys.conetwist) | A conetwist constraint in a physics world |
| [jit.phys.hinge](https://docs.cycling74.com/reference/jit.phys.hinge) | A hinge constraint in a physics world |
| [jit.phys.point2point](https://docs.cycling74.com/reference/jit.phys.point2point) | A point to point constraint in a physics world |
| [jit.phys.6dof](https://docs.cycling74.com/reference/jit.phys.6dof) | A six degrees of freedom constraint in a physics world |
