---
type: jitter
name: "jit.hsl2rgb"
summary: "Convert HSL to RGB"
signal: false
url: "https://docs.cycling74.com/reference/jit.hsl2rgb/"
package: "Jitter"
see_also: ["jit.colorspace", "jit.hue", "jit.rgb2luma", "jit.rgb2hsl", "jit.traffic"]
---
# jit.hsl2rgb

Convert HSL to RGB

## Description

Converts a 4 plane matrix of AHSL (alpha, hue, saturation, lightness) data to ARGB (alpha, red, green, blue) data.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 4 | 1 | char float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.colorspace](https://docs.cycling74.com/reference/jit.colorspace) | Convert between colorspaces |
| [jit.hue](https://docs.cycling74.com/reference/jit.hue) | Rotate hue |
| [jit.rgb2luma](https://docs.cycling74.com/reference/jit.rgb2luma) | Converts RGB to monochrome (luminance) |
| [jit.rgb2hsl](https://docs.cycling74.com/reference/jit.rgb2hsl) | Convert RGB to HSL |
| [jit.traffic](https://docs.cycling74.com/reference/jit.traffic) | Multiply the planar vector by a matrix |
