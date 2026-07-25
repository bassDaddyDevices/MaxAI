---
type: jitter
name: "jit.clip"
summary: "Limit data to a range"
signal: false
url: "https://docs.cycling74.com/reference/jit.clip/"
package: "Jitter"
see_also: ["jit.3m", "jit.op"]
---
# jit.clip

Limit data to a range

## Description

Limits matrix values to a range specified the object's min and max attributes.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### max[float]

The maximum value above which clipping occurs (default = 1.)

### min[float]

The minimum value below which clipping occurs (default = 0.)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.3m](https://docs.cycling74.com/reference/jit.3m) | Report min/mean/max values |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
