---
type: jitter
name: "jit.phys.point2point"
summary: "A point to point constraint in a physics world"
signal: false
url: "https://docs.cycling74.com/reference/jit.phys.point2point/"
package: "Jitter"
see_also: ["jit.phys.world", "jit.phys.body", "jit.phys.hinge", "jit.phys.conetwist", "jit.phys.barslide", "jit.phys.6dof"]
---
# jit.phys.point2point

A point to point constraint in a physics world

## Description

The [jit.phys.point2point](https://docs.cycling74.com/reference/jit.phys.point2point) object limits the translation so that the local pivot points of 2 [jit.phys.body](https://docs.cycling74.com/reference/jit.phys.body) objects match in worldspace. If only a single body is bound, it is constrained to a point in world space.

## Attributes

### body1[symbol]

The name of the first [jit.phys.body](https://docs.cycling74.com/reference/jit.phys.body) to constrain.

### body2[symbol]

The name of the second [jit.phys.body](https://docs.cycling74.com/reference/jit.phys.body) to constrain.

### collisions[int]

Enables collisions between attached bodies (default = 0.).

### enable[int]

Enable this constraint in the physics simulation (default = 1).

### position1[3 floats]

The pivot point of body1 as a 3D vector relative to the body1 center of mass (default = 0 0 0).

### position2[3 floats]

The pivot point of body2 as a 3D vector relative to the body2 center of mass (default = 0 0 0). If body2 is blank, this is the worldspace position of the constraint.

### strength[float]

Set the constraint strength (default = 0.2). Determines what proportion of the joint error will be fixed each simulation step. Values between 0.1 and 0.8 are recommended.

### stretch[float]

Set the constraint stretch (default = 0.0). Setting to a positive value allows forces acting on rigid bodies to violate the constraint by an amount proportional to the stretch value.

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
| [jit.phys.hinge](https://docs.cycling74.com/reference/jit.phys.hinge) | A hinge constraint in a physics world |
| [jit.phys.conetwist](https://docs.cycling74.com/reference/jit.phys.conetwist) | A conetwist constraint in a physics world |
| [jit.phys.barslide](https://docs.cycling74.com/reference/jit.phys.barslide) | A bar constraint in a physics world |
| [jit.phys.6dof](https://docs.cycling74.com/reference/jit.phys.6dof) | A six degrees of freedom constraint in a physics world |
