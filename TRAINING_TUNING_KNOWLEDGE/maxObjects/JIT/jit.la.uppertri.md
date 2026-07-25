---
type: jitter
name: "jit.la.uppertri"
summary: "Convert a matrix into an upper triangular matrix"
signal: false
url: "https://docs.cycling74.com/reference/jit.la.uppertri/"
package: "Jitter"
see_also: ["jit.la.determinant", "jit.la.diagproduct", "jit.la.inverse", "jit.la.mult", "jit.la.trace"]
---
# jit.la.uppertri

Convert a matrix into an upper triangular matrix

## Description

The [jit.la.uppertri](https://docs.cycling74.com/reference/jit.la.uppertri) object converts a given input matrix to an upper triangular matrix via Gaussian elimination. The input matrices must be 1-plane or 2-plane matrices of the type  float32  or  float64 . If a 2-plane matrix is used, it is assumed that the data is from the set of complex numbers.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### swapcount[int] read-only

The number of row swaps required to perform Gaussian elimination

### thresh[float]

The threshold value beneath which the absolute value of the result of internal calculations are considered to be equal to zero (default = 0.000000001)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.la.determinant](https://docs.cycling74.com/reference/jit.la.determinant) | Calculate the determinant of a matrix |
| [jit.la.diagproduct](https://docs.cycling74.com/reference/jit.la.diagproduct) | Calculate the product across the main diagonal |
| [jit.la.inverse](https://docs.cycling74.com/reference/jit.la.inverse) | Calculate the inverse of a matrix |
| [jit.la.mult](https://docs.cycling74.com/reference/jit.la.mult) | True matrix multiplication |
| [jit.la.trace](https://docs.cycling74.com/reference/jit.la.trace) | Calculate the sum across the main diagonal |
