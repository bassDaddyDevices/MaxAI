---
type: jitter
name: "jit.streak"
summary: "Probability lines"
signal: false
url: "https://docs.cycling74.com/reference/jit.streak/"
package: "Jitter"
see_also: ["jit.noise", "jit.repos", "jit.sprinkle"]
---
# jit.streak

Probability lines

## Description

The [jit.streak](https://docs.cycling74.com/reference/jit.streak) object uses a specified probability to determine the chance that a given matrix cell's value will be extended to subsequent cells (with an optional scaling factor). The result is a streaky good time.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### direction[int]

Streaking direction (default = 0 (left))

0 = left

1 = down

2 = right

3 = up

### mode[int]

Scanline wrapping mode (default = 0 (wrap))

0 = streaking wraps from scanline to scanline

1 = streaking begins anew at each scanline

### prob[float]

The probability that any given cell will be extended (streaked) (default = 0.)

### scale[float]

The scaling factor applied to extended (streaked) cells (default = 0.75)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.noise](https://docs.cycling74.com/reference/jit.noise) | Generate white noise |
| [jit.repos](https://docs.cycling74.com/reference/jit.repos) | Reposition spatially |
| [jit.sprinkle](https://docs.cycling74.com/reference/jit.sprinkle) | Introduce spatial noise |
