---
type: jitter
name: "jit.fastblur"
summary: "Blur/sharpen using optimized algorithm"
signal: false
url: "https://docs.cycling74.com/reference/jit.fastblur/"
package: "Jitter"
see_also: ["jit.convolve", "jit.op"]
---
# jit.fastblur

Blur/sharpen using optimized algorithm

## Description

Performs several special-case convolution blur/sharpen operations on incoming matrices. Although it is less flexible than the [jit.convolve](https://docs.cycling74.com/reference/jit.convolve) object, the [jit.fastblur](https://docs.cycling74.com/reference/jit.fastblur) object will be quicker and easier to set up for the equivalent convolution, in most cases.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### center[float]

The mathematical weighting of the center pixel when performing convolution (default = 1.)

### mode[int]

The kernel shape (default = 0 (row))

0 = row

1 = column

2 = cross

3 = diagonal

4 = square

Possible values:

0 = 'Row'

1 = 'Column'

2 = 'Cross'

3 = 'Diagonal'

4 = 'Square'

### range[int]

The number of pixels from the center pixel of the convolution kernel to its edge (default = 1)

### ring[float]

The mathematical weighting of cells adjoining the center pixel when performing convolution (default = 1.)

### ripple[float]

The scaling applied to outer cells when performing convolution (default = 1.) The second ring of pixels is scaled by this factor in relation to the ring attribute when performing convolution, while the third ring is scaled in relation to the second.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.convolve](https://docs.cycling74.com/reference/jit.convolve) | Convolve two matrices |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
