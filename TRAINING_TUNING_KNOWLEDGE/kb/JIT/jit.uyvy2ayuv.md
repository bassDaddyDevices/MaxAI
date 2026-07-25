---
type: jitter
name: "jit.uyvy2ayuv"
summary: "Converts UYVY to AYUV"
signal: false
url: "https://docs.cycling74.com/reference/jit.uyvy2ayuv/"
package: "Jitter"
see_also: ["jit.ayuv2uyvy", "jit.colorspace", "jit.traffic", "jit.uyvy2argb", "jit.uyvy2luma"]
---
# jit.uyvy2ayuv

Converts UYVY to AYUV

## Description

The [jit.uyvy2ayuv](https://docs.cycling74.com/reference/jit.uyvy2ayuv) object converts a 4-plane char UYVY (signed chroma blue, luminance left, signed chroma red, luminance right) matrix into a 4-plane char AYUV (alpha, luminance, signed chroma blue, signed chroma red) matrix.

#### Discussion

A default alpha channel (all on) is added and horizontal dimension is doubled for the output to account for this half chroma, macro pixel input format. The UYVY format is typically useful for efficiently transfering chroma reduced codecs to the GPU without the expense of colorspace conversion, or bandwidth requirements of a full chroma format. However, to apply most spatial operations in Jitter on the CPU, a full chroma format like AYUV or ARGB is typically necessary.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 0 | 3 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### noalpha[int]

Disable alpha channel flag. If this flag is set, a three-plane YUV matrix will be output instead of a four-plane AYUV matrix.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.ayuv2uyvy](https://docs.cycling74.com/reference/jit.ayuv2uyvy) | Convert AYUV to UYVY |
| [jit.colorspace](https://docs.cycling74.com/reference/jit.colorspace) | Convert between colorspaces |
| [jit.traffic](https://docs.cycling74.com/reference/jit.traffic) | Multiply the planar vector by a matrix |
| [jit.uyvy2argb](https://docs.cycling74.com/reference/jit.uyvy2argb) | Converts UYVY to ARGB |
| [jit.uyvy2luma](https://docs.cycling74.com/reference/jit.uyvy2luma) | Converts UYVY to monochrome (luminance) |
