---
type: jitter
name: "jit.brcosa"
summary: "Adjust image brightness/contrast/saturation"
signal: false
url: "https://docs.cycling74.com/reference/jit.brcosa/"
package: "Jitter"
see_also: ["jit.op", "jit.scalebias", "jit.traffic", "jit.qt.effect"]
---
# jit.brcosa

Adjust image brightness/contrast/saturation

## Description

Permits you to simultaneously adjust an image's brightness, contrast and saturation. This is useful for achieving a variety of color effects.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 4 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### brightness[float]

Brightness (default = 1.) Values below 1. (to 0.) reduce brightness, while values above 1. increase it. 1. represents no change.

### contrast[float]

Contrast (default = 1.) Values below 1. (to 0.) decrease contrast, bringing the image closer to grey (which represents the average luminance of the image frame). Values above 1.0 increase contrast. 1.0 represents no change. Negative values affect a color inversion, but with similar results.

### saturation[float]

Saturation (default = 1.) Values below 1. (to 0.) decrease saturation, bringing the image closer to greyscale. Values above 1. increase saturation. 1. represents no change. Negative values affect a color inversion, but with similar results.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
| [jit.scalebias](https://docs.cycling74.com/reference/jit.scalebias) | Multiply and add |
| [jit.traffic](https://docs.cycling74.com/reference/jit.traffic) | Multiply the planar vector by a matrix |
| [jit.qt.effect](https://docs.cycling74.com/reference/jit.qt.effect) |  |
