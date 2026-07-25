---
type: jitter
name: "jit.scalebias"
summary: "Multiply and add"
signal: false
url: "https://docs.cycling74.com/reference/jit.scalebias/"
package: "Jitter"
see_also: ["jit.charmap", "jit.map", "jit.op", "jit.rgb2luma"]
---
# jit.scalebias

Multiply and add

## Description

[jit.scalebias](https://docs.cycling74.com/reference/jit.scalebias) scales the values of a 4-plane input matrix of type  char  (ARGB) and adds to an offset value (bias).

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 4 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### abias[float]

The alpha bias (offset) value (default = 0.)

### ascale[float]

The alpha scale value (default = 1.)

### bbias[float]

The blue bias (offset) value (default = 0.)

### bias[float]

The bias (offset) value for all colors if channel summing is set using the  mode 1  message (default = 0.)

### bscale[float]

The blue scale value (default = 1.)

### gbias[float]

The green bias (offset) value (default = 0.)

### gscale[float]

The green scale value (default = 1.)

### mode[int]

Channel summing mode (default = 0 (normal))

0 = normal

1 = sum all the channels together

### rbias[float]

The red bias (offset) value (default = 0.)

### rscale[float]

The red scale value (default = 1.)

### scale[float]

The all scale value if channel summing is set using the  mode 1  message (default = 0.)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.charmap](https://docs.cycling74.com/reference/jit.charmap) | Map 256-point input to output |
| [jit.map](https://docs.cycling74.com/reference/jit.map) | Map input range to output range |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
| [jit.rgb2luma](https://docs.cycling74.com/reference/jit.rgb2luma) | Converts RGB to monochrome (luminance) |
