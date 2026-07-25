---
type: jitter
name: "jit.histogram"
summary: "Calculate matrix histogram"
signal: false
url: "https://docs.cycling74.com/reference/jit.histogram/"
package: "Jitter"
see_also: ["jit.3m", "jit.fft"]
---
# jit.histogram

Calculate matrix histogram

## Description

Calculates the histogram for a series of input matrices. The histogram is the distribution of values for each of the matrix's planes.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 0 | 0 | 1 | 1 | long char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### autoclear[int]

Autoclear flag (default = 1) When the flag is set, the matrix is cleared following output.

### normalize[int]

Normalization mode. The normalization modes are:

0: no normalization

1: per channel normalization

2: channel-linked normalization

Channel-linked normalization may be of limited value for video signals where the alpha channel is composed of all zero values.

### normval[int]

Normalization flag (default = 0) When the flag is set, histogram values to the range [0, normval ] are normalized.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.3m](https://docs.cycling74.com/reference/jit.3m) | Report min/mean/max values |
| [jit.fft](https://docs.cycling74.com/reference/jit.fft) | Perform a matrix-based FFT |
