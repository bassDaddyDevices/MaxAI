---
type: jitter
name: "jit.charmap"
summary: "Map 256-point input to output"
signal: false
url: "https://docs.cycling74.com/reference/jit.charmap/"
package: "Jitter"
see_also: ["jit.map", "jit.op", "jit.scalebias"]
---
# jit.charmap

Map 256-point input to output

## Description

Creates a 256-point input to output map. Input values are replaced by the corresponding output value.

## Matrix Operator

matrix inputs:2, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| in2 | resamp | 1 | 1 | 0 | 1 | 1 | char |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.map](https://docs.cycling74.com/reference/jit.map) | Map input range to output range |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
| [jit.scalebias](https://docs.cycling74.com/reference/jit.scalebias) | Multiply and add |
