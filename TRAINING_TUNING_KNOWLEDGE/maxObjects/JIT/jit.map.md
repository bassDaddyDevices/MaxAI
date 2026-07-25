---
type: jitter
name: "jit.map"
summary: "Map input range to output range"
signal: false
url: "https://docs.cycling74.com/reference/jit.map/"
package: "Jitter"
see_also: ["jit.charmap", "jit.clip", "jit.op", "jit.scalebias"]
---
# jit.map

Map input range to output range

## Description

The [jit.map](https://docs.cycling74.com/reference/jit.map) object maps input range to output range as specified by map attribute settings that specify input and output value ranges.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### clip[int]

Clipping flag (default = 1) When the flag is set, any input whose mapped value falls outside the range specified by the  output\_lo  and  output\_hi  values is set to the lower or upper boundary value.

### map[4 floats]

Input to output map  input\_lo input\_hi output\_lo output\_hi  (default = 0. 1. 0. 1.) The range specified by  input\_lo  to  input\_hi  is mapped to the range specified by  output\_lo  to  output\_hi .

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.charmap](https://docs.cycling74.com/reference/jit.charmap) | Map 256-point input to output |
| [jit.clip](https://docs.cycling74.com/reference/jit.clip) | Limit data to a range |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
| [jit.scalebias](https://docs.cycling74.com/reference/jit.scalebias) | Multiply and add |
