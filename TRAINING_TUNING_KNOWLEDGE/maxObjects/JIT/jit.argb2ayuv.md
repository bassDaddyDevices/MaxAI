---
type: jitter
name: "jit.argb2ayuv"
summary: "Convert ARGB to AYUV"
signal: false
url: "https://docs.cycling74.com/reference/jit.argb2ayuv/"
package: "Jitter"
see_also: ["jit.argb2uyvy", "jit.ayuv2argb", "jit.colorspace", "jit.rgb2luma", "jit.traffic"]
---
# jit.argb2ayuv

Convert ARGB to AYUV

## Description

Converts 4-plane char matrix a 4-plane char ARGB (alpha, red, green, blue) matrix into a 4-plane AYUV (alpha, luminance, signed chroma blue, signed chroma red) matrix. Unlike UYVY data, AYUV data has an alpha channel and full resolution chroma data.

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
| [jit.ayuv2argb](https://docs.cycling74.com/reference/jit.ayuv2argb) | Convert AYUV to ARGB |
| [jit.colorspace](https://docs.cycling74.com/reference/jit.colorspace) | Convert between colorspaces |
| [jit.rgb2luma](https://docs.cycling74.com/reference/jit.rgb2luma) | Converts RGB to monochrome (luminance) |
| [jit.traffic](https://docs.cycling74.com/reference/jit.traffic) | Multiply the planar vector by a matrix |
