---
type: jitter
name: "jit.transpose"
summary: "Calculate the transpose of a matrix"
signal: false
url: "https://docs.cycling74.com/reference/jit.transpose/"
package: "Jitter"
see_also: ["jit.dimmap", "jit.matrix", "jit.rota"]
---
# jit.transpose

Calculate the transpose of a matrix

## Description

Use the [jit.transpose](https://docs.cycling74.com/reference/jit.transpose) object to calculate the transpose of a matrix: rows become columns, and vice versa.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.dimmap](https://docs.cycling74.com/reference/jit.dimmap) | Remap and/or invert matrix dimensions |
| [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) | The Jitter Matrix! |
| [jit.rota](https://docs.cycling74.com/reference/jit.rota) | Scale/rotate in 2D |
