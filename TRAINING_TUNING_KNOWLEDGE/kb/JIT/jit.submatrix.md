---
type: jitter
name: "jit.submatrix"
summary: "Reference a sub-region of a matrix"
signal: false
url: "https://docs.cycling74.com/reference/jit.submatrix/"
package: "Jitter"
see_also: ["jit.coerce", "jit.matrix", "jit.scissors"]
---
# jit.submatrix

Reference a sub-region of a matrix

## Description

Use the [jit.submatrix](https://docs.cycling74.com/reference/jit.submatrix) object when you want to reference a sub region of an input matrix without copying data.

Some objects, such as [jit.cellblock](https://docs.cycling74.com/reference/jit.cellblock), are unable to use the reference matrix, so it may be necessary to pass the output through another [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) in certain cases.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 0 | 0 | 0 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### offset[32 ints]

Dimension offset into input matrix (default = 0 for all dimensions)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.coerce](https://docs.cycling74.com/reference/jit.coerce) | Coerce a matrix into different types/planecount |
| [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) | The Jitter Matrix! |
| [jit.scissors](https://docs.cycling74.com/reference/jit.scissors) | Cut up a matrix into evenly spaced sub matrices |
