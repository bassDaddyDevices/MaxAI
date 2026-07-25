---
type: jitter
name: "jit.luma2ayuv"
summary: "Converts monochrome (luminance) to AYUV"
signal: false
url: "https://docs.cycling74.com/reference/jit.luma2ayuv/"
package: "Jitter"
see_also: ["jit.ayuv2uyvy", "jit.luma2ayuv", "jit.colorspace", "jit.traffic"]
---
# jit.luma2ayuv

Converts monochrome (luminance) to AYUV

## Description

The [jit.luma2ayuv](https://docs.cycling74.com/reference/jit.luma2ayuv) object converts a 1-plane monochrome (lumninance) matrix to a 4-plane char AYUV (alpha, luminance, signed chroma blue, signed chroma red) matrix.

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
