---
type: jitter
name: "jit.uyvy2luma"
summary: "Converts UYVY to monochrome (luminance)"
signal: false
url: "https://docs.cycling74.com/reference/jit.uyvy2luma/"
package: "Jitter"
see_also: ["jit.colorspace", "jit.luma2uyvy", "jit.traffic", "jit.uyvy2ayuv", "jit.uyvy2argb"]
---
# jit.uyvy2luma

Converts UYVY to monochrome (luminance)

## Description

The [jit.uyvy2luma](https://docs.cycling74.com/reference/jit.uyvy2luma) object converts a 4-plane char UYVY (signed chroma blue, luminance left, signed chroma red, luminance right) matrix into a 1-plane char monochrome (luma) matrix.

#### Discussion

Horizontal dimension is doubled for the output to account for this half chroma, macro pixel input format. The UYVY format is typically useful for efficiently transfering chroma reduced codecs to the GPU without the expense of colorspace conversion, or bandwidth requirements of a full chroma format. However, to apply most spatial operations in Jitter on the CPU, a full chroma format like AYUV or ARGB is typically necessary.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 0 | 1 | 0 | 1 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.colorspace](https://docs.cycling74.com/reference/jit.colorspace) | Convert between colorspaces |
| [jit.luma2uyvy](https://docs.cycling74.com/reference/jit.luma2uyvy) | Converts monochrome (luminance) to UYVY |
| [jit.traffic](https://docs.cycling74.com/reference/jit.traffic) | Multiply the planar vector by a matrix |
| [jit.uyvy2ayuv](https://docs.cycling74.com/reference/jit.uyvy2ayuv) | Converts UYVY to AYUV |
| [jit.uyvy2argb](https://docs.cycling74.com/reference/jit.uyvy2argb) | Converts UYVY to ARGB |
