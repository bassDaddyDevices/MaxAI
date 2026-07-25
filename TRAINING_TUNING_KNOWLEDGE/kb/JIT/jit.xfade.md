---
type: jitter
name: "jit.xfade"
summary: "Crossfade between 2 matrices"
signal: false
url: "https://docs.cycling74.com/reference/jit.xfade/"
package: "Jitter"
see_also: ["jit.alphablend", "jit.op"]
---
# jit.xfade

Crossfade between 2 matrices

## Description

Use the [jit.xfade](https://docs.cycling74.com/reference/jit.xfade) object to crossfade between two matrices. A crossfade value of 0. results in output values equivalent to the left input values, while a crossfade value of 1.0 results in output values equivalent to the right input matrix.

## Matrix Operator

matrix inputs:2, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| in2 | resamp | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### xfade[float]

The crossfade amount. A crossfade value of 0. (the default) results in output values equivalent to the left input values, while a crossfade value of 1.0 results in output values equivalent to the right input matrix.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.alphablend](https://docs.cycling74.com/reference/jit.alphablend) | Blend two images with an alpha channel image |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
