---
type: jitter
name: "jit.argb2grgb"
summary: "Convert ARGB to GRGB"
signal: false
url: "https://docs.cycling74.com/reference/jit.argb2grgb/"
package: "Jitter"
see_also: ["jit.argb2uyvy", "jit.grgb2argb", "jit.colorspace", "jit.rgb2luma", "jit.traffic"]
---
# jit.argb2grgb

Convert ARGB to GRGB

## Description

Converts a 4-plane char ARGB (alpha, red, green, blue) matrix into a 4-plane char GRGB (green left, red, green right, blue) matrix. Alpha channel is lost and horizontal dimension is halved to support this half red and blue chroma, macro pixel output format. The GRGB format is typically useful for conserving memory and/or bandwidth for continuous tone images with less expense than colorspace conversion.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 0 | 4 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.argb2uyvy](https://docs.cycling74.com/reference/jit.argb2uyvy) | Convert ARGB to UYVY |
| [jit.grgb2argb](https://docs.cycling74.com/reference/jit.grgb2argb) | Convert GRGB to ARGB |
| [jit.colorspace](https://docs.cycling74.com/reference/jit.colorspace) | Convert between colorspaces |
| [jit.rgb2luma](https://docs.cycling74.com/reference/jit.rgb2luma) | Converts RGB to monochrome (luminance) |
| [jit.traffic](https://docs.cycling74.com/reference/jit.traffic) | Multiply the planar vector by a matrix |
