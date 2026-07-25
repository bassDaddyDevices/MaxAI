---
type: jitter
name: "jit.luma2uyvy"
summary: "Converts monochrome (luminance) to UYVY"
signal: false
url: "https://docs.cycling74.com/reference/jit.luma2uyvy/"
package: "Jitter"
see_also: ["jit.ayuv2uyvy", "jit.luma2ayuv", "jit.colorspace", "jit.traffic"]
---
# jit.luma2uyvy

Converts monochrome (luminance) to UYVY

## Description

The [jit.luma2uyvy](https://docs.cycling74.com/reference/jit.luma2uyvy) object converts a 1-plane monochrome (lumninance) matrix to a 4-plane char UYVY (signed chroma blue, luminance left, signed chroma red, luminance right) matrix.

#### Discussion

Alpha channel is lost and the horizontal dimension is halved to account for this half chroma, macro pixel out format. The UYVY format is typically useful for efficiently transfering chroma reduced codecs to the GPU without the expense of colorspace conversion, or bandwidth requirements of a full chroma format.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 0 | 1 | 0 | 4 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.ayuv2uyvy](https://docs.cycling74.com/reference/jit.ayuv2uyvy) | Convert AYUV to UYVY |
| [jit.luma2ayuv](https://docs.cycling74.com/reference/jit.luma2ayuv) | Converts monochrome (luminance) to AYUV |
| [jit.colorspace](https://docs.cycling74.com/reference/jit.colorspace) | Convert between colorspaces |
| [jit.traffic](https://docs.cycling74.com/reference/jit.traffic) | Multiply the planar vector by a matrix |
