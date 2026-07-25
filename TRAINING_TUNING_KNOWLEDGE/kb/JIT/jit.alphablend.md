---
type: jitter
name: "jit.alphablend"
summary: "Blend two images with an alpha channel image"
signal: false
url: "https://docs.cycling74.com/reference/jit.alphablend/"
package: "Jitter"
see_also: ["jit.op", "jit.pack", "jit.unpack", "jit.xfade"]
---
# jit.alphablend

Blend two images with an alpha channel image

## Description

Accesses the alpha channel (plane 0) of the input matrix in the left inlet as a per-cell crossfade value, and crossfades between the input matrices in the left and right inlets. In mode 0, a low value means more of the right input matrix, while a high value means more of the left input matrix. In mode 1, a low value means more of the left input matrix, while a high value means more of the right input matrix.

## Matrix Operator

matrix inputs:2, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| in2 | resamp | 1 | 1 | 1 | 1 | 1 | char float32 float64 |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### mode[int]

Crossfade mode (default = 0 (left to right))

0 = crossfade right to left

1 = crossfade left to right

Possible values:

0 = 'Left-to-Right'

1 = 'Right-to-Left'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
| [jit.pack](https://docs.cycling74.com/reference/jit.pack) | Make a multiplane matrix out of single plane matrices |
| [jit.unpack](https://docs.cycling74.com/reference/jit.unpack) | Make multiple single plane matrices out of a multiplane matrix |
| [jit.xfade](https://docs.cycling74.com/reference/jit.xfade) | Crossfade between 2 matrices |
