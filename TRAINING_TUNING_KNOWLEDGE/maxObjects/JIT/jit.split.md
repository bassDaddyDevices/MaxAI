---
type: jitter
name: "jit.split"
summary: "Split a matrix into two matrices"
signal: false
url: "https://docs.cycling74.com/reference/jit.split/"
package: "Jitter"
see_also: ["jit.concat", "jit.demultiplex", "jit.glue", "jit.matrix", "jit.multiplex", "jit.scissors"]
---
# jit.split

Split a matrix into two matrices

## Description

[jit.split](https://docs.cycling74.com/reference/jit.split) takes a single matrix, divides it along a specified dimension at a specified point, and outputs the two resulting matrices.

## Matrix Operator

matrix inputs:1, matrix outputs:2

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 0 | 0 | 0 | 1 | 1 | char long float32 float64 |
| out2 | n/a | 0 | 0 | 0 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### autoclear[int]

Autoclear flag (default = 1) When the flag is set, the matrix is cleared following output.

### splitdim[int]

The dimension across which splitting occurs. (default = 0)

### splitpoint[int]

The point along the dimension specified by the splitdim attribute where the split occurs. (default = 1)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.concat](https://docs.cycling74.com/reference/jit.concat) | Concatenate two matrices |
| [jit.demultiplex](https://docs.cycling74.com/reference/jit.demultiplex) | Demultiplex (deinterleave) one matrix into two |
| [jit.glue](https://docs.cycling74.com/reference/jit.glue) | Glue many matrices into one |
| [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) | The Jitter Matrix! |
| [jit.multiplex](https://docs.cycling74.com/reference/jit.multiplex) | Multiplex (interleave) two matrices into one matrix |
| [jit.scissors](https://docs.cycling74.com/reference/jit.scissors) | Cut up a matrix into evenly spaced sub matrices |
