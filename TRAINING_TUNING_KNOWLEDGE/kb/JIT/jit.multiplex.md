---
type: jitter
name: "jit.multiplex"
summary: "Multiplex (interleave) two matrices into one matrix"
signal: false
url: "https://docs.cycling74.com/reference/jit.multiplex/"
package: "Jitter"
see_also: ["jit.concat", "jit.demultiplex", "jit.glue", "jit.matrix", "jit.scissors", "jit.split"]
---
# jit.multiplex

Multiplex (interleave) two matrices into one matrix

## Description

The [jit.multiplex](https://docs.cycling74.com/reference/jit.multiplex) object takes two matrices as input, and derives a single output matrix from it by interleaving the input matrices across a specified dimension.

#### Discussion

Specifically, the object takes a set of scanlines across the first input matrix, placing these into the output matrix, then takes a set of scanlines across the second input matrix, appending them to the output matrix, alternating between the two input sources until their data is exhausted.

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

### mode[int]

Matrix underflow mode (default = 0 (stop))

0 = stop: If one input matrix is exhausted before the other, do nothing

1 = wrap: If one input matrix is exhausted before the other, return to that matrix's beginning and continue until the second matrix is also exhausted

2 = clip: If one input matrix is exhausted before the other, repeat that matrix's final sample until the second matrix is also exhausted

Possible values:

0 = 'stop'

1 = 'wrap'

2 = 'clip'

### multiplexdim[int]

The dimension across which multiplexing occurs (default = 0). The most common arguments specify horizontal (i.e., dim[0]) or vertical (dim[1]) multiplexing.

### scan\_a[int]

The number of scanlines to sample from the left input matrix (default = 1)

### scan\_b[int]

The number of scanlines to sample from the right input matrix (default = 1)

### truncate[int]

Input truncation flag (default = 1) When the flag is set, the right input's dimensions are truncated to the left input's dimensions if the right dimensions are greater than the left. Truncation is performed for all dimensions except the multiplex dimension. Otherwise, no truncation occurs.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.concat](https://docs.cycling74.com/reference/jit.concat) | Concatenate two matrices |
| [jit.demultiplex](https://docs.cycling74.com/reference/jit.demultiplex) | Demultiplex (deinterleave) one matrix into two |
| [jit.glue](https://docs.cycling74.com/reference/jit.glue) | Glue many matrices into one |
| [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) | The Jitter Matrix! |
| [jit.scissors](https://docs.cycling74.com/reference/jit.scissors) | Cut up a matrix into evenly spaced sub matrices |
| [jit.split](https://docs.cycling74.com/reference/jit.split) | Split a matrix into two matrices |
