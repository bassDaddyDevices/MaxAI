---
type: jitter
name: "jit.coerce"
summary: "Coerce a matrix into different types/planecount"
signal: false
url: "https://docs.cycling74.com/reference/jit.coerce/"
package: "Jitter"
see_also: ["jit.matrix", "jit.pack", "jit.unpack", "jit.submatrix"]
---
# jit.coerce

Coerce a matrix into different types/planecount

## Description

Coerces a matrix into different types/planecount without copying data (sometimes called "header munging"). This may be useful for treating integers as floating point data and vice versa, or treating a four-plane char matrix as a single plane long matrix.

Similar to [jit.submatrix](https://docs.cycling74.com/reference/jit.submatrix), jit.coerce only outputs a reference matrix and does not create a separate memory allocation. To use the resulting reference matrix with some jitter objects such as jit.cellblock, you may need to pass the output into another [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) object first.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 0 | 0 | 0 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) | The Jitter Matrix! |
| [jit.pack](https://docs.cycling74.com/reference/jit.pack) | Make a multiplane matrix out of single plane matrices |
| [jit.unpack](https://docs.cycling74.com/reference/jit.unpack) | Make multiple single plane matrices out of a multiplane matrix |
| [jit.submatrix](https://docs.cycling74.com/reference/jit.submatrix) | Reference a sub-region of a matrix |
