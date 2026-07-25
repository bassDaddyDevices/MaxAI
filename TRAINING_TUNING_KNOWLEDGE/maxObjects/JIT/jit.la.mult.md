---
type: jitter
name: "jit.la.mult"
summary: "True matrix multiplication"
signal: false
url: "https://docs.cycling74.com/reference/jit.la.mult/"
package: "Jitter"
see_also: ["jit.la.determinant", "jit.la.diagproduct", "jit.la.inverse", "jit.la.trace", "jit.la.uppertri", "jit.op"]
---
# jit.la.mult

True matrix multiplication

## Description

[jit.la.mult](https://docs.cycling74.com/reference/jit.la.mult) calculates the matrix product of two input matrices (as opposed to multiplication performed by the [jit.op](https://docs.cycling74.com/reference/jit.op) object, which is  *pointwise*  multiplication). The input matrices must be 1-plane or 2-plane matrices of the type  float32  or  float64 . If a 2-plane matrix is used, it is assumed that the data is from the set of complex numbers.

## Matrix Operator

matrix inputs:2, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| in2 | adapt | 1 | 1 | 0 | 1 | 1 | float32 float64 |
| out | n/a | 1 | 1 | 0 | 1 | 1 | float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.la.determinant](https://docs.cycling74.com/reference/jit.la.determinant) | Calculate the determinant of a matrix |
| [jit.la.diagproduct](https://docs.cycling74.com/reference/jit.la.diagproduct) | Calculate the product across the main diagonal |
| [jit.la.inverse](https://docs.cycling74.com/reference/jit.la.inverse) | Calculate the inverse of a matrix |
| [jit.la.trace](https://docs.cycling74.com/reference/jit.la.trace) | Calculate the sum across the main diagonal |
| [jit.la.uppertri](https://docs.cycling74.com/reference/jit.la.uppertri) | Convert a matrix into an upper triangular matrix |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
