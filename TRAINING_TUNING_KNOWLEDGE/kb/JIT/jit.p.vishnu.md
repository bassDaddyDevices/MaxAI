---
type: jitter
name: "jit.p.vishnu"
summary: "Apply single force to particles"
signal: false
url: "https://docs.cycling74.com/reference/jit.p.vishnu/"
package: "Jitter"
see_also: ["jit.p.bounds", "jit.p.shiva"]
---
# jit.p.vishnu

Apply single force to particles

## Description

The [jit.p.vishnu](https://docs.cycling74.com/reference/jit.p.vishnu) object takes a Jitter particle systems matrix as input, and applies a specific single force world model to it.

#### Discussion

In order to do so, it interprets the matrix's planes in a particular way: if the incoming matrix is 5-plane, planes 2-4 are interpreted as 3-dimensional position data (x, y, z); if the incoming matrix is 8-plane, planes 2-4 are considered position data, and planes 5-7 as velocity data (in the 5-plane model, velocity is derived from an analysis of positional change).

The world of the [jit.p.vishnu](https://docs.cycling74.com/reference/jit.p.vishnu) object is fairly simple: particles, born in the [jit.p.shiva](https://docs.cycling74.com/reference/jit.p.shiva) object are animated by applying force to them. New particles (i.e., particles with identical values in both rows 0 and 1) are given an initial position with the pos attribute. Next they are assigned an initial velocity, through the pitch, yaw and speed attributes. Finally, each time the particle passes through the object, the velocity is altered by the world's force.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 2 | 2 | float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### force[30 floats]

The world force per-plane (default = 0. -0.001 0.)

### mode[int]

Generation mode flag (default = 0 (use pos attribute))

When the flag is set, any pre-existing values in the matrix are used as initial positions. Otherwise, the pos attribute is used to generate an initial position for new particles.

### pitch[float]

The initial angle of deviation from the horizontal plane (in radians) (default = 1.5708)

### pitch\_var[float]

The amount of variance in pitch attribute output values (default = 0.6981)

### pos[30 floats]

The initial position, per-plane (default = 0. -0.5 -0.5)

### pos\_var[30 floats]

The amount of variance in pos attribute output values (default = 0. 0. 0.)

### speed[float]

The initial speed (default = 0.05)

### speed\_var[float]

The amount of variance in speed attribute output values (default = 0.01)

### yaw[float]

The initial angle of deviation from the vertical plane (in radians) (default = 0.)

### yaw\_var[float]

The amount of variance in yaw attribute output values (default = 6.2832)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.p.bounds](https://docs.cycling74.com/reference/jit.p.bounds) | Limit particles to a region of space |
| [jit.p.shiva](https://docs.cycling74.com/reference/jit.p.shiva) | Generate/eliminate particles |
