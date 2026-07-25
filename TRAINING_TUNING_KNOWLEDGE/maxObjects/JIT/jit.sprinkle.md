---
type: jitter
name: "jit.sprinkle"
summary: "Introduce spatial noise"
signal: false
url: "https://docs.cycling74.com/reference/jit.sprinkle/"
package: "Jitter"
see_also: ["jit.noise", "jit.repos", "jit.streak"]
---
# jit.sprinkle

Introduce spatial noise

## Description

[jit.sprinkle](https://docs.cycling74.com/reference/jit.sprinkle) probabilistically determines whether a matrix cell will be displaced by a random amount along the horizontal or vertical axes to produce a "cloud" of data surrounding the original cell values.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### prob[float]

The probability that any given cell will be displaced (default = 0.)

### x\_range[int]

The displacement range along the horizontal axis (default = 0)

### y\_range[int]

The displacement range along the vertical axis (default = 0)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.noise](https://docs.cycling74.com/reference/jit.noise) | Generate white noise |
| [jit.repos](https://docs.cycling74.com/reference/jit.repos) | Reposition spatially |
| [jit.streak](https://docs.cycling74.com/reference/jit.streak) | Probability lines |
