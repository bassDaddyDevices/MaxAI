---
type: jitter
name: "jit.ameba"
summary: "Downsample/upsample with non-obvious results"
signal: false
url: "https://docs.cycling74.com/reference/jit.ameba/"
package: "Jitter"
see_also: ["jit.matrix", "jit.op", "jit.plur"]
---
# jit.ameba

Downsample/upsample with non-obvious results

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 4 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### gain[float]

The overall gain scaling factor (default = 1.)

### mode[int]

Color handling mode (default = 0 (wrap))

0 = wrap: Values that exceed the limits are wrapped around to the opposite limit with a modulo operation. (256 wraps to 0, 257 wraps to 1, and -1 wraps to 255, -2 wraps to 254, etc.)

1 = clip: Values are limited not to exceed min or max. (E.g. numbers greater than 255 are set to 255, and numbers less than 0 are set to 0.)

2 = fold: Values that exceed the limits are folded back in the opposite direction. (256 is folded back to 254, 257 is folded back to 253, and -1 is folded back to 1, -2 to 2, etc.)

Possible values:

0 = 'Wrap'

1 = 'Clip'

2 = 'Fold'

### x[int]

The number of cells used for horizontal quantization (default = 1)

### y[int]

The number of cells used for vertical quantization (default = 1)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) | The Jitter Matrix! |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
| [jit.plur](https://docs.cycling74.com/reference/jit.plur) | Peace Love Unity Rave |
