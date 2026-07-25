---
type: jitter
name: "jit.convolve"
summary: "Convolve two matrices"
signal: false
url: "https://docs.cycling74.com/reference/jit.convolve/"
package: "Jitter"
see_also: ["jit.fastblur", "jit.op"]
---
# jit.convolve

Convolve two matrices

## Description

Computes the correlation between two matrices (an image and a kernel). For true convolution, rotate the kernel 180º. This may be used for typical image processing tasks like blurring, sharpening, and edge detection. By default, the convolution kernel is a 3 by 3 float32 matrix.

## Matrix Operator

matrix inputs:2, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| in2 | adapt | 0 | 0 | 0 | 1 | 1 | float32 |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### boundmode[int]

Boundary case handling mode (default = 0 (clip))

0 = clip: cells which lie outside the domain of the input data will clip to the nearest cell within the domain of the input data (e.g. a convolution which would need to use cell (0,-1) would instead use cell (0,0)).

1 = wrap: cells which lie outside the domain of the input data will wrap via modulus arithmetic within the domain of the input data (e.g. a convolution on a 320 by 240 matrix which would need to use cell (0,-1) would instead use cell (0,239)).

2 = ignore: cells which lie outside the domain of the input data will not be used in calculating the convolution.

Possible values:

0 = 'Clip'

1 = 'Wrap'

2 = 'Ignore'

### origin[2 ints]

The origin of the convolution kernel (default = 1 1)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.fastblur](https://docs.cycling74.com/reference/jit.fastblur) | Blur/sharpen using optimized algorithm |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
