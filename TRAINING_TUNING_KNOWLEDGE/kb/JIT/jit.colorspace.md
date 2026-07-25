---
type: jitter
name: "jit.colorspace"
summary: "Convert between colorspaces"
signal: false
url: "https://docs.cycling74.com/reference/jit.colorspace/"
package: "Jitter"
see_also: ["jit.rgb2luma", "jit.hsl2rgb", "jit.traffic", "jit.rgb2hsl"]
---
# jit.colorspace

Convert between colorspaces

## Description

Converts a 4-plane char matrix between two different colorspaces. Output matrices are always 4-plane char, even if the colorspace is normally described in a different format. The alpha channel (plane 0) remains untouched in all conversions except for the KCMY colorspace.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 4 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### input[symbol]

The name of the colorspace to convert  **from**  (default = RGB)

Possible values:

'RGB'

'RetinalCone'

'XYZ'

'UVW'

'uvY'

'xyY'

'U\*V\*W\*'

'S0W\*'

'L\*HoC\*'

'YIQ'

'YUV'

'RGBcie'

'RGBsmpte'

'HSV'

'HLS'

'IHS'

'L\*a\*b\*'

'L\*u\*v\*'

'CMY'

'CMYK'

'KCMY'

'I1I2I3'

### output[symbol]

The name of the colorspace to convert  **to**  (default = RGB)

The options are the same as for the input attribute.

Possible values:

'RGB'

'RetinalCone'

'XYZ'

'UVW'

'uvY'

'xyY'

'U\*V\*W\*'

'S0W\*'

'L\*HoC\*'

'YIQ'

'YUV'

'RGBcie'

'RGBsmpte'

'HSV'

'HLS'

'IHS'

'L\*a\*b\*'

'L\*u\*v\*'

'CMY'

'CMYK'

'KCMY'

'I1I2I3'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.rgb2luma](https://docs.cycling74.com/reference/jit.rgb2luma) | Converts RGB to monochrome (luminance) |
| [jit.hsl2rgb](https://docs.cycling74.com/reference/jit.hsl2rgb) | Convert HSL to RGB |
| [jit.traffic](https://docs.cycling74.com/reference/jit.traffic) | Multiply the planar vector by a matrix |
| [jit.rgb2hsl](https://docs.cycling74.com/reference/jit.rgb2hsl) | Convert RGB to HSL |
