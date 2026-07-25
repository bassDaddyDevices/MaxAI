---
type: jitter
name: "jit.phys.conetwist"
summary: "A conetwist constraint in a physics world"
signal: false
url: "https://docs.cycling74.com/reference/jit.phys.conetwist/"
package: "Jitter"
see_also: ["jit.phys.world", "jit.phys.body", "jit.phys.barslide", "jit.phys.hinge", "jit.phys.point2point", "jit.phys.6dof"]
---
# jit.phys.conetwist

A conetwist constraint in a physics world

## Description

[jit.phys.conetwist](https://docs.cycling74.com/reference/jit.phys.conetwist) is a special point-to-point constraint that restricts the translation and allows limits on the rotation. The x-axis serves as a twist axis. This can be useful to represent limbs of a body, such as arms and legs. Motor forces can be applied to the constraint. If only a single body is bound, it is constrained to a point in world space.

## Attributes

### bias[float]

Magnitude of the limit's position correction (default = 0.3). This attribute sets how strictly the position error is corrected. For most cases, the value should not be greater than 1.

### body1[symbol]

The name of the first [jit.phys.body](https://docs.cycling74.com/reference/jit.phys.body) to constrain.

### body2[symbol]

The name of the second [jit.phys.body](https://docs.cycling74.com/reference/jit.phys.body) to constrain.

### collisions[int]

Enables collisions between attached bodies (default = 0).

### enable[int]

Enable this constraint in the physics simulation (default = 1).

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

### strength[float]

Set the constraint strength (default = 0.2). Determines what proportion of the joint error will be fixed each simulation step. Values between 0.1 and 0.8 are recommended.

### stretch[float]

Set the constraint stretch (default = 0.0). Setting to a positive value allows forces acting on rigid bodies to violate the constraint by an amount proportional to the stretch value.

### swing1limit[float]

The limit of allowed rotation in degrees in either direction around the swing 1 axis (default = 180). With a limit of 180 degrees, rotation is unconstrainted around the axis.

### swing2limit[float]

The limit of allowed rotation in degrees in either direction around the swing 2 axis (default = 180). With a limit of 180 degrees, rotation is unconstrainted around the axis.

### twistlimit[float]

The limit, in degrees, of allowed rotation in degrees in either direction around the twist axis (default = 180). With a limit of 180 degrees, rotation is unconstrainted around the axis.

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
| [jit.phys.hinge](https://docs.cycling74.com/reference/jit.phys.hinge) | A hinge constraint in a physics world |
| [jit.phys.point2point](https://docs.cycling74.com/reference/jit.phys.point2point) | A point to point constraint in a physics world |
| [jit.phys.6dof](https://docs.cycling74.com/reference/jit.phys.6dof) | A six degrees of freedom constraint in a physics world |
