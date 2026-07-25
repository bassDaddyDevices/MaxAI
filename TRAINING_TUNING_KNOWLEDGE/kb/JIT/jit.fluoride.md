---
type: jitter
name: "jit.fluoride"
summary: "Add a neon glow"
signal: false
url: "https://docs.cycling74.com/reference/jit.fluoride/"
package: "Jitter"
see_also: ["jit.chromakey", "jit.lumakey"]
---
# jit.fluoride

Add a neon glow

## Description

Provides an approximation of a neon glow effect. Individual cell values fade into a specified color as they approach a luminance value. Cell values greater than the luminance value fade to black. Values outside of a tolerance boundary are passed.

#### Discussion

The [jit.fluoride](https://docs.cycling74.com/reference/jit.fluoride) object can work on an input matrix in either greyscale or color, depending on the setting of its mode attribute.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 4 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### glow[3 floats]

The color of the glow in the form  *red green blue*  (default = 0. 1. 0.) All color values should be in the range 0.-1.

### lum[float]

The luminosity threshold for the glow effect (default = 0.88)

### mode[int]

Output mode setting (default = 0 (greyscale))

0 = output is converted to greyscale after glow is applied

1 = output retains its color after glow is applied

Possible values:

0 = 'Black and White'

1 = 'Color'

### tol[float]

Tolerance level (or width) of the color range affected by the glow (default = 0.2)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.chromakey](https://docs.cycling74.com/reference/jit.chromakey) | Key images based on chromatic distance |
| [jit.lumakey](https://docs.cycling74.com/reference/jit.lumakey) | Key based on distance from a luminance value |
