---
type: jitter
name: "jit.fft"
summary: "Perform a matrix-based FFT"
signal: false
url: "https://docs.cycling74.com/reference/jit.fft/"
package: "Jitter"
see_also: ["jit.convolve", "jit.histogram", "jit.op"]
---
# jit.fft

Perform a matrix-based FFT

## Description

Performs both the Fast Fourier Transform and Inverse Fast Fourier Transform on an input matrix. It requires that the input has two planes that represent complex numbers--plane 0 is the real component, and plane 1 is the imaginary component.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 2 | 1 | float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### inverse[int]

Calculate inverse transform flag (default = 0)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.convolve](https://docs.cycling74.com/reference/jit.convolve) | Convolve two matrices |
| [jit.histogram](https://docs.cycling74.com/reference/jit.histogram) | Calculate matrix histogram |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
