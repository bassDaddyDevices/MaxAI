---
type: jitter
name: "jit.traffic"
summary: "Multiply the planar vector by a matrix"
signal: false
url: "https://docs.cycling74.com/reference/jit.traffic/"
package: "Jitter"
see_also: ["jit.colorspace", "jit.hsl2rgb", "jit.rgb2luma", "jit.rgb2hsl"]
---
# jit.traffic

Multiply the planar vector by a matrix

## Description

The [jit.traffic](https://docs.cycling74.com/reference/jit.traffic) object takes an input matrix and multiplies its cells using an N x N+1 float32 matrix (where N is the planecount of the input matrix). The left input matrix can be of any type.

#### Discussion

Example: for an input cell (a, r, g, b), an output cell (A, R, G, B) and a multiplicaton matrix m0...m19 (4 X 5 float32 matrix) the object multiplies using the following formula:

A = m0\*a + m4\*r + m8\*g + m12\*b + m16

R = m1\*a + m5\*r + m9\*g + m13\*b + m17

G = m2\*a + m6\*r + m10\*g + m14\*b + m18

B = m3\*a + m7\*r + m12\*g + m15\*b + m19

## Matrix Operator

matrix inputs:2, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| in2 | adapt | 0 | 0 | 0 | 1 | 1 | char long float32 float64 |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.colorspace](https://docs.cycling74.com/reference/jit.colorspace) | Convert between colorspaces |
| [jit.hsl2rgb](https://docs.cycling74.com/reference/jit.hsl2rgb) | Convert HSL to RGB |
| [jit.rgb2luma](https://docs.cycling74.com/reference/jit.rgb2luma) | Converts RGB to monochrome (luminance) |
| [jit.rgb2hsl](https://docs.cycling74.com/reference/jit.rgb2hsl) | Convert RGB to HSL |
