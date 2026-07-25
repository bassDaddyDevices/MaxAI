---
type: jitter
name: "jit.planeop"
summary: "Operator across planes"
signal: false
url: "https://docs.cycling74.com/reference/jit.planeop/"
package: "Jitter"
see_also: ["jit.op", "jit.dimop", "jit.expr"]
---
# jit.planeop

Operator across planes

## Description

[jit.planeop](https://docs.cycling74.com/reference/jit.planeop) applies an operator to all the planar elements, converting multi-plane input to single-plane output.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 0 | 0 | 0 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### op[symbol]

The operator to be applied across the plane (default = avg).

Supported Operators:

 avg  = average

 \*  = multiplication (also  mult )
 +  = addition (also  add )
 min  = minimum

 max  = maximum

Possible values:

'avg'

'+'

'\*'

'min'

'max'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
| [jit.dimop](https://docs.cycling74.com/reference/jit.dimop) | Downsample using operators across dimensions |
| [jit.expr](https://docs.cycling74.com/reference/jit.expr) | Evaluate an expression to fill a matrix |
