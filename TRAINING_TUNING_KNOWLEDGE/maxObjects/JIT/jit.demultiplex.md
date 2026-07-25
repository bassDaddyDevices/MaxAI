---
type: jitter
name: "jit.demultiplex"
summary: "Demultiplex (deinterleave) one matrix into two"
signal: false
url: "https://docs.cycling74.com/reference/jit.demultiplex/"
package: "Jitter"
see_also: ["jit.concat", "jit.glue", "jit.matrix", "jit.multiplex", "jit.scissors", "jit.split"]
---
# jit.demultiplex

Demultiplex (deinterleave) one matrix into two

## Description

Accepts a single matrix as input, and derives two output matrices from it by demultiplexing across a specified dimension.

#### Discussion

Specifically, the object takes a set of scanlines across the input matrix, placing these into the first output matrix, and then takes the next set of scanlines, placing those into the second output matrix, alternating between the two until the input matrix's data is exhausted.

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

Matrix clear following output flag (default = 1)

### demultiplexdim[int]

The dimension across which demultiplexing occurs (default = 0)

Possible values:

'0'

'1'

'2'

'3'

'4'

'5'

'6'

'7'

'8'

'9'

'10'

'11'

'12'

'13'

'14'

'15'

'16'

'17'

'18'

'19'

'20'

'21'

'22'

'23'

'24'

'25'

'26'

'27'

'28'

'29'

'30'

'31'

### scan\_a[int]

The number of scanlines across the input matrix sampled into the first output matrix (default = 1)

To perform a standard deinterleave of NTSC video, scan\_a and scan\_b would both be set to 1.

### scan\_b[int]

The number of scanlines across the input matrix sampled into the second output matrix (default = 1)

To perform a standard deinterleave of NTSC video, scan\_a and scan\_b would both be set to 1.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.concat](https://docs.cycling74.com/reference/jit.concat) | Concatenate two matrices |
| [jit.glue](https://docs.cycling74.com/reference/jit.glue) | Glue many matrices into one |
| [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) | The Jitter Matrix! |
| [jit.multiplex](https://docs.cycling74.com/reference/jit.multiplex) | Multiplex (interleave) two matrices into one matrix |
| [jit.scissors](https://docs.cycling74.com/reference/jit.scissors) | Cut up a matrix into evenly spaced sub matrices |
| [jit.split](https://docs.cycling74.com/reference/jit.split) | Split a matrix into two matrices |
