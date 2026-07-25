---
type: jitter
name: "jit.glop"
summary: "Produce feedback with gain staging"
signal: false
url: "https://docs.cycling74.com/reference/jit.glop/"
package: "Jitter"
see_also: ["jit.op", "jit.wake"]
---
# jit.glop

Produce feedback with gain staging

## Description

Performs feedback on either the input matrix or the output matrix, and provides a gain stage for control.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### gain[32 floats]

The per-plane gain factor for feedback (default = 1.)

### mode[int]

Feedback mode (default = 0 (feedback output))

0 = perform feedback on output matrix

1 = perform feedback on input matrix

Possible values:

0 = 'Apply to Output'

1 = 'Apply to Input'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
| [jit.wake](https://docs.cycling74.com/reference/jit.wake) | Feedback with convolution stage |
