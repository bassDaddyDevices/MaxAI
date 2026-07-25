---
type: jitter
name: "jit.grgb2argb"
summary: "Convert GRGB to ARGB"
signal: false
url: "https://docs.cycling74.com/reference/jit.grgb2argb/"
package: "Jitter"
see_also: ["jit.argb2grgb", "jit.argb2uyvy", "jit.colorspace", "jit.traffic"]
---
# jit.grgb2argb

Convert GRGB to ARGB

## Description

Converts a 4-plane char GRGB (green left, red, green right, blue) matrix into a 4-plane char ARGB (alpha, red, green, blue) matrix. A default alpha channel (all on) is added and horizontal dimension is doubled for the output to account for this half red and blue chroma, macro pixel input format.

#### Discussion

The GRGB format is typically useful for conserving memory and/or bandwidth for continuous tone images with less expense than colorspace conversion.

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
| [jit.argb2grgb](https://docs.cycling74.com/reference/jit.argb2grgb) | Convert ARGB to GRGB |
| [jit.argb2uyvy](https://docs.cycling74.com/reference/jit.argb2uyvy) | Convert ARGB to UYVY |
| [jit.colorspace](https://docs.cycling74.com/reference/jit.colorspace) | Convert between colorspaces |
| [jit.traffic](https://docs.cycling74.com/reference/jit.traffic) | Multiply the planar vector by a matrix |
