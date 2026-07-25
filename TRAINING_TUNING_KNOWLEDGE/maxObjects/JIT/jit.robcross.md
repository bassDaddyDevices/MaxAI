---
type: jitter
name: "jit.robcross"
summary: "Robert's Cross edge detection"
signal: false
url: "https://docs.cycling74.com/reference/jit.robcross/"
package: "Jitter"
see_also: ["jit.brass", "jit.qt.effect", "jit.sobel"]
---
# jit.robcross

Robert's Cross edge detection

## Description

[jit.robcross](https://docs.cycling74.com/reference/jit.robcross) implements the Robert's Cross method of edge detection.

#### Discussion

This particular edge detector uses a 2x2 convolution kernel to compute a 2-dimensional spatial gradient of an incoming matrix, brightening features with "high spatial frequency" -- a large amount of change from cell to cell -- and darkening features with less change.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### thresh[float]

Edge detection threshold (default 0.). Cell values below this threshold are set to 0.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.brass](https://docs.cycling74.com/reference/jit.brass) | Emboss image |
| [jit.qt.effect](https://docs.cycling74.com/reference/jit.qt.effect) |  |
| [jit.sobel](https://docs.cycling74.com/reference/jit.sobel) | Sobel and Prewitt gradient edge detector |
