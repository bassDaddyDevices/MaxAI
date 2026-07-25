---
type: jitter
name: "jit.rgb2luma"
summary: "Converts RGB to monochrome (luminance)"
signal: false
url: "https://docs.cycling74.com/reference/jit.rgb2luma/"
package: "Jitter"
see_also: ["jit.colorspace", "jit.hue", "jit.hsl2rgb", "jit.rgb2hsl", "jit.traffic"]
---
# jit.rgb2luma

Converts RGB to monochrome (luminance)

## Description

[jit.rgb2luma](https://docs.cycling74.com/reference/jit.rgb2luma) converts a 4-plane char ARGB (alpha, red, green, blue) matrix into a 1-plane char monochrome matrix containing the luminosity of the original matrix using the equation L = (.299 \* R value) + (.587 \* G value) + (.114 \* B value).

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 0 | 1 | 1 | 1 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### ascale[float]

The alpha scaling factor (default = 0.)

### bscale[float]

The blue scaling factor (default = 0.114)

### gscale[float]

The green scaling factor (default = 0.587)

### rscale[float]

The red scaling factor (default = 0.299)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.colorspace](https://docs.cycling74.com/reference/jit.colorspace) | Convert between colorspaces |
| [jit.hue](https://docs.cycling74.com/reference/jit.hue) | Rotate hue |
| [jit.hsl2rgb](https://docs.cycling74.com/reference/jit.hsl2rgb) | Convert HSL to RGB |
| [jit.rgb2hsl](https://docs.cycling74.com/reference/jit.rgb2hsl) | Convert RGB to HSL |
| [jit.traffic](https://docs.cycling74.com/reference/jit.traffic) | Multiply the planar vector by a matrix |
