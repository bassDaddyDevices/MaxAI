---
type: jitter
name: "jit.gencoord"
summary: "Evaluate a procedural basis function graph"
signal: false
url: "https://docs.cycling74.com/reference/jit.gencoord/"
package: "Jitter"
see_also: ["jit.matrix", "jit.bfg"]
---
# jit.gencoord

Evaluate a procedural basis function graph

## Description

Generates spatial coordinates across a grid. The output matrix will contain coordinate dimensional values in each plane (eg. RGB == XYZ)

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### offset[32 floats]

The dimensional offsets to use for generating the spatial grid coordinates (only valid when an input matrix is not attached). (default = 0)

### scale[32 floats]

The dimensional scale factors to use for generating the spatial grid coordinates (only valid when an input matrix is not attached). (default = 0)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) | The Jitter Matrix! |
| [jit.bfg](https://docs.cycling74.com/reference/jit.bfg) | Evaluate a procedural basis function graph |
