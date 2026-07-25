---
type: jitter
name: "jit.argb2uyvy"
summary: "Convert ARGB to UYVY"
signal: false
url: "https://docs.cycling74.com/reference/jit.argb2uyvy/"
package: "Jitter"
see_also: ["jit.argb2ayuv", "jit.colorspace", "jit.rgb2luma", "jit.traffic", "jit.uyvy2argb"]
---
# jit.argb2uyvy

Convert ARGB to UYVY

## Description

Converts a 4-plane char ARGB (alpha, red, green, blue) matrix into a 4-plane char UYVY (signed chroma blue, luminance left, signed chroma red, luminance right) matrix. Alpha channel is lost and horizontal dimension is halved to support this half chroma, macro pixel output format. The UYVY format is typically useful for efficiently transferring chroma reduced codecs to the GPU without the expense of colorspace conversion, or bandwidth requirements of a full chroma format.

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
| [jit.colorspace](https://docs.cycling74.com/reference/jit.colorspace) | Convert between colorspaces |
| [jit.rgb2luma](https://docs.cycling74.com/reference/jit.rgb2luma) | Converts RGB to monochrome (luminance) |
| [jit.traffic](https://docs.cycling74.com/reference/jit.traffic) | Multiply the planar vector by a matrix |
| [jit.uyvy2argb](https://docs.cycling74.com/reference/jit.uyvy2argb) | Converts UYVY to ARGB |
