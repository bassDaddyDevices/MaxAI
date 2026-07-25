---
type: jitter
name: "jit.la.diagproduct"
summary: "Calculate the product across the main diagonal"
signal: false
url: "https://docs.cycling74.com/reference/jit.la.diagproduct/"
package: "Jitter"
see_also: ["jit.la.determinant", "jit.la.inverse", "jit.la.mult", "jit.la.trace", "jit.la.uppertri"]
---
# jit.la.diagproduct

Calculate the product across the main diagonal

## Description

[jit.la.diagproduct](https://docs.cycling74.com/reference/jit.la.diagproduct) calculates the product across the main diagonal of a given input matrix, and send the result out the leftmost outlet. The input matrices must be 1-plane or 2-plane matrices of the type  float32  or  float64 . If a 2-plane matrix is used, it is assumed that the data is from the set of complex numbers and the output product is a  list  of 2 floating point values. The first element is the real component and the second element is the imaginary component.

## Matrix Operator

matrix inputs:1, matrix outputs:0

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.la.determinant](https://docs.cycling74.com/reference/jit.la.determinant) | Calculate the determinant of a matrix |
| [jit.la.inverse](https://docs.cycling74.com/reference/jit.la.inverse) | Calculate the inverse of a matrix |
| [jit.la.mult](https://docs.cycling74.com/reference/jit.la.mult) | True matrix multiplication |
| [jit.la.trace](https://docs.cycling74.com/reference/jit.la.trace) | Calculate the sum across the main diagonal |
| [jit.la.uppertri](https://docs.cycling74.com/reference/jit.la.uppertri) | Convert a matrix into an upper triangular matrix |
