---
type: jitter
name: "jit.la.determinant"
summary: "Calculate the determinant of a matrix"
signal: false
url: "https://docs.cycling74.com/reference/jit.la.determinant/"
package: "Jitter"
see_also: ["jit.la.diagproduct", "jit.la.inverse", "jit.la.mult", "jit.la.trace", "jit.la.uppertri"]
---
# jit.la.determinant

Calculate the determinant of a matrix

## Description

[jit.la.determinant](https://docs.cycling74.com/reference/jit.la.determinant) calculates the determinant of a given input matrix, and send the result out the leftmost outlet. The input matrices must be 1-plane or 2-plane matrices of the type  float32  or  float64 . If a 2-plane matrix is used, it is assumed that the data is from the set of complex numbers and the output product is a  list  of 2 floating point values. The first element is the real component and the second element is the imaginary component.

## Matrix Operator

matrix inputs:1, matrix outputs:0

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### thresh[float]

The threshold value beneath which the absolute value of the result of internal calculations are considered to be equal to zero (default = 0.000000001)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.la.diagproduct](https://docs.cycling74.com/reference/jit.la.diagproduct) | Calculate the product across the main diagonal |
| [jit.la.inverse](https://docs.cycling74.com/reference/jit.la.inverse) | Calculate the inverse of a matrix |
| [jit.la.mult](https://docs.cycling74.com/reference/jit.la.mult) | True matrix multiplication |
| [jit.la.trace](https://docs.cycling74.com/reference/jit.la.trace) | Calculate the sum across the main diagonal |
| [jit.la.uppertri](https://docs.cycling74.com/reference/jit.la.uppertri) | Convert a matrix into an upper triangular matrix |
