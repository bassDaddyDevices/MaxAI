---
type: jitter
name: "jit.ayuv2argb"
summary: "Convert AYUV to ARGB"
signal: false
url: "https://docs.cycling74.com/reference/jit.ayuv2argb/"
package: "Jitter"
see_also: ["jit.argb2ayuv", "jit.ayuv2uyvy", "jit.ayuv2luma", "jit.colorspace", "jit.traffic"]
---
# jit.ayuv2argb

Convert AYUV to ARGB

## Description

Converts 4-plane char AYUV (alpha, luminance, signed chroma blue, signed chroma red) matrix into a 4-plane char ARGB (alpha, red, green, blue) matrix. Unlike UYVY data, AYUV data has an alpha channel and full resolution chroma data.

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
| [jit.argb2ayuv](https://docs.cycling74.com/reference/jit.argb2ayuv) | Convert ARGB to AYUV |
| [jit.ayuv2uyvy](https://docs.cycling74.com/reference/jit.ayuv2uyvy) | Convert AYUV to UYVY |
| [jit.ayuv2luma](https://docs.cycling74.com/reference/jit.ayuv2luma) | Convert AYUV to monochrome (luminance) |
| [jit.colorspace](https://docs.cycling74.com/reference/jit.colorspace) | Convert between colorspaces |
| [jit.traffic](https://docs.cycling74.com/reference/jit.traffic) | Multiply the planar vector by a matrix |
