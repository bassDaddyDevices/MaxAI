---
type: jitter
name: "jit.avg4"
summary: "Average four points"
signal: false
url: "https://docs.cycling74.com/reference/jit.avg4/"
package: "Jitter"
see_also: ["jit.convolve", "jit.fastblur", "jit.op"]
---
# jit.avg4

Average four points

## Description

Replaces the values in each cell of an incoming matrix with average values derived from four cells at a specified distance from the original.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### mode[int]

Boundary handling mode (default = 0 (wrap))

0 = wrap: Values that exceed the limits are wrapped around to the opposite limit with a modulo operation. (256 wraps to 0, 257 wraps to 1, and -1 wraps to 255, -2 wraps to 254, etc.)

1 = clip: Values are limited not to exceed min or max. (e.g. numbers greater than 255 are set to 255, and numbers less than 0 are set to 0.)

2 = fold: Values that exceed the limits are folded back in the opposite direction. (256 is folded back to 254, 257 is folded back to 253, and -1 is folded back to 1, -2 to 2, etc.)

Possible values:

0 = 'Clip'

1 = 'Fold'

2 = 'Wrap'

### x[int]

The horizontal distance from each incoming cell to the source cells used for averaging (default = 0)

### y[int]

The vertical distance from each incoming cell to the source cells used for averaging (default = 0)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.convolve](https://docs.cycling74.com/reference/jit.convolve) | Convolve two matrices |
| [jit.fastblur](https://docs.cycling74.com/reference/jit.fastblur) | Blur/sharpen using optimized algorithm |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
