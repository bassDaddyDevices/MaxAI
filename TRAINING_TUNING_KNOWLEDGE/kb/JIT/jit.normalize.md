---
type: jitter
name: "jit.normalize"
summary: "Normalizes a matrix."
signal: false
url: "https://docs.cycling74.com/reference/jit.normalize/"
package: "Jitter"
see_also: ["jit.matrix", "jit.bfg"]
---
# jit.normalize

Normalizes a matrix.

## Description

[jit.normalize](https://docs.cycling74.com/reference/jit.normalize) examines a [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) and scales the minimum and maximum values to a normalized range.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### amp[32 floats]

The amplitude to scale the normalized range. (default = 1)

### global[int]

Flag to enable or disable global normalization across all planes. (default = 0)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) | The Jitter Matrix! |
| [jit.bfg](https://docs.cycling74.com/reference/jit.bfg) | Evaluate a procedural basis function graph |
