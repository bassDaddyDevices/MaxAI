---
type: jitter
name: "jit.concat"
summary: "Concatenate two matrices"
signal: false
url: "https://docs.cycling74.com/reference/jit.concat/"
package: "Jitter"
see_also: ["jit.demultiplex", "jit.glue", "jit.matrix", "jit.multiplex", "jit.scissors", "jit.split"]
---
# jit.concat

Concatenate two matrices

## Description

Accepts two matrices as input, and sends a single concatenated matrix out.

## Matrix Operator

matrix inputs:2, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| in2 | adapt | 0 | 0 | 0 | 1 | 1 | char long float32 float64 |
| out | n/a | 0 | 0 | 0 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### autoclear[int]

Matrix clear following output flag (default = 1)

### concatdim[int]

The dimension across which concatenation occurs (default = 0)

### mode[int]

Concatenation order flag (default = 0)

0 = append the matrix entering the right inlet to the matrix entering the left inlet

1 = append the matrix entering the left inlet to the matrix entering the right inlet

Possible values:

0 = 'Append Right to Left'

1 = 'Append Left to Right'

### truncate[int]

Matrix truncation flag (default = 1) When the flag is set, the right input's dimensions are truncated to the left input's dimensions if the right dimensions are greater than the left for all dimensions except the concatenation dimension.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.demultiplex](https://docs.cycling74.com/reference/jit.demultiplex) | Demultiplex (deinterleave) one matrix into two |
| [jit.glue](https://docs.cycling74.com/reference/jit.glue) | Glue many matrices into one |
| [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) | The Jitter Matrix! |
| [jit.multiplex](https://docs.cycling74.com/reference/jit.multiplex) | Multiplex (interleave) two matrices into one matrix |
| [jit.scissors](https://docs.cycling74.com/reference/jit.scissors) | Cut up a matrix into evenly spaced sub matrices |
| [jit.split](https://docs.cycling74.com/reference/jit.split) | Split a matrix into two matrices |
