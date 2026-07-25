---
type: jitter
name: "jit.sobel"
summary: "Sobel and Prewitt gradient edge detector"
signal: false
url: "https://docs.cycling74.com/reference/jit.sobel/"
package: "Jitter"
see_also: ["jit.brass", "jit.qt.effect", "jit.robcross"]
---
# jit.sobel

Sobel and Prewitt gradient edge detector

## Description

[jit.sobel](https://docs.cycling74.com/reference/jit.sobel) provides two different kinds of edge detection algorithms.

#### Discussion

Both implemented edge detection modes use 3x3 convolution kernels to compute a 2-dimensional spatial gradient of an incoming matrix, brightening features with "high spatial frequency" -- a large amount of change from cell to cell -- and darkening features with less change. The Sobel detector is fairly good at detecting edges in all directions, while the Prewitt is more biased toward edges running vertically and horizontally along the matrix frame.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### mode[int]

The detection mode. (default = 0 (Sobel))

0 = Sobel

1 = Prewitt

### thresh[float]

The threshold below which matrix values are set to 0. (default = 0.)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.brass](https://docs.cycling74.com/reference/jit.brass) | Emboss image |
| [jit.qt.effect](https://docs.cycling74.com/reference/jit.qt.effect) |  |
| [jit.robcross](https://docs.cycling74.com/reference/jit.robcross) | Robert's Cross edge detection |
