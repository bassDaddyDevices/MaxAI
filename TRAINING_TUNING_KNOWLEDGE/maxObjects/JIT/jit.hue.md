---
type: jitter
name: "jit.hue"
summary: "Rotate hue"
signal: false
url: "https://docs.cycling74.com/reference/jit.hue/"
package: "Jitter"
see_also: ["jit.hue", "jit.hsl2rgb", "jit.rgb2hsl", "jit.traffic"]
---
# jit.hue

Rotate hue

## Description

Performs a hue rotation, preserving the luminance values.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 4 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### hue\_angle[float]

The hue rotation angle, in degrees (default = 0.)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.hue](https://docs.cycling74.com/reference/jit.hue) | Rotate hue |
| [jit.hsl2rgb](https://docs.cycling74.com/reference/jit.hsl2rgb) | Convert HSL to RGB |
| [jit.rgb2hsl](https://docs.cycling74.com/reference/jit.rgb2hsl) | Convert RGB to HSL |
| [jit.traffic](https://docs.cycling74.com/reference/jit.traffic) | Multiply the planar vector by a matrix |
