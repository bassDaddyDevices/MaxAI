---
type: jitter
name: "jit.p.bounds"
summary: "Limit particles to a region of space"
signal: false
url: "https://docs.cycling74.com/reference/jit.p.bounds/"
package: "Jitter"
see_also: ["jit.p.shiva", "jit.p.vishnu"]
---
# jit.p.bounds

Limit particles to a region of space

## Description

The [jit.p.bounds](https://docs.cycling74.com/reference/jit.p.bounds) object creates limits in a particle system. Limits may be applied to any of the qualities of the system (with the exception of the reserved life and ID qualities).

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 2 | 2 | float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### bounds\_hi[30 floats]

The upper limit value, per plane, starting at plane 2 (planes 0 and 1 are reserved) (default = 1.)

A symbol may be used to indicate that the bound is disabled.

### bounds\_lo[30 floats]

The lower limit, per plane, starting at plane 2 (default = -1.)

A symbol may be used to indicate that the bound is disabled.

### mode[int]

Boundary handling mode (default = 0 (bounce))

0 = bounce: Values are reflected back in the direction from which they came

1 = kill: Particle life is immediately set to 0

2 = wrap: Values reaching a bound value wrap to the other bound value

3 = clip: Values reaching a bound value stay at that value)

### squish[30 floats]

The amount of "bounciness" of the bound (default = 1.)

### squish\_var[30 floats]

The amount of per-collision variance calculated for squish response (default = 0.)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.p.shiva](https://docs.cycling74.com/reference/jit.p.shiva) | Generate/eliminate particles |
| [jit.p.vishnu](https://docs.cycling74.com/reference/jit.p.vishnu) | Apply single force to particles |
