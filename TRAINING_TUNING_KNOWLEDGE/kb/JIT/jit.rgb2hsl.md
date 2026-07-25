---
type: jitter
name: "jit.rgb2hsl"
summary: "Convert RGB to HSL"
signal: false
url: "https://docs.cycling74.com/reference/jit.rgb2hsl/"
package: "Jitter"
see_also: ["jit.colorspace", "jit.hue", "jit.hsl2rgb", "jit.rgb2luma", "jit.traffic"]
---
# jit.rgb2hsl

Convert RGB to HSL

## Description

[jit.hsl2rgb](https://docs.cycling74.com/reference/jit.hsl2rgb) converts a 4 plane matrix of ARGB (alpha, red, green, blue) data to AHSL (alpha, hue, saturation, lightness) data. An offset and a scaling factor can be applied to the hue, saturation, and lightness data individually.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 4 | 1 | char float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### hoffset[float]

The hue offset (default = 0.)

### hscale[float]

The hue scaling (default = 1.) Hue scaling values above 1. wrap to 0.

### loffset[float]

The lightness offset (default = 0.)

### lscale[float]

The lightness scale (default = 1.) Lightness scaling values above 1. clip to 1.

### soffset[float]

The saturation offset (default = 0.)

### sscale[float]

The saturation scale (default = 1.) Saturation scaling values above 1. clip to 1.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.colorspace](https://docs.cycling74.com/reference/jit.colorspace) | Convert between colorspaces |
| [jit.hue](https://docs.cycling74.com/reference/jit.hue) | Rotate hue |
| [jit.hsl2rgb](https://docs.cycling74.com/reference/jit.hsl2rgb) | Convert HSL to RGB |
| [jit.rgb2luma](https://docs.cycling74.com/reference/jit.rgb2luma) | Converts RGB to monochrome (luminance) |
| [jit.traffic](https://docs.cycling74.com/reference/jit.traffic) | Multiply the planar vector by a matrix |
