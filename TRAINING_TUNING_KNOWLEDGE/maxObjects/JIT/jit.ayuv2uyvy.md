---
type: jitter
name: "jit.ayuv2uyvy"
summary: "Convert AYUV to UYVY"
signal: false
url: "https://docs.cycling74.com/reference/jit.ayuv2uyvy/"
package: "Jitter"
see_also: ["jit.ayuv2argb", "jit.ayuv2luma", "jit.ayuv2uyvy", "jit.colorspace", "jit.traffic"]
---
# jit.ayuv2uyvy

Convert AYUV to UYVY

## Description

Converts a 4-plane char AYUV (alpha, luminance, signed chroma blue, signed chroma red) matrix into a 4-plane char UYVY (signed chroma blue, luminance left, signed chroma red, luminance right) matrix. Alpha channel is lost and the horizontal dimension is halved to account for this half chroma, macro pixel out format.

#### Discussion

The UYVY format is typically useful for efficiently transfering chroma reduced codecs to the GPU without the expense of colorspace conversion, or bandwidth requirements of a full chroma format. Unlike UYVY data, AYUV data has an alpha channel and full resolution chroma data.

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
| [jit.ayuv2argb](https://docs.cycling74.com/reference/jit.ayuv2argb) | Convert AYUV to ARGB |
| [jit.ayuv2luma](https://docs.cycling74.com/reference/jit.ayuv2luma) | Convert AYUV to monochrome (luminance) |
| [jit.ayuv2uyvy](https://docs.cycling74.com/reference/jit.ayuv2uyvy) | Convert AYUV to UYVY |
| [jit.colorspace](https://docs.cycling74.com/reference/jit.colorspace) | Convert between colorspaces |
| [jit.traffic](https://docs.cycling74.com/reference/jit.traffic) | Multiply the planar vector by a matrix |
