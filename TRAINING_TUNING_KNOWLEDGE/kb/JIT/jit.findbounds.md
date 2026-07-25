---
type: jitter
name: "jit.findbounds"
summary: "Locate bounding dimensions for a value range"
signal: false
url: "https://docs.cycling74.com/reference/jit.findbounds/"
package: "Jitter"
see_also: ["jit.3m", "jit.op"]
---
# jit.findbounds

Locate bounding dimensions for a value range

## Description

Scans a matrix for values in the range [ min, max ] and sends out the minimum and maximum points that contain those values. The minimum point is sent as a list out the leftmost outlet, and the maximum point is sent as a list out the second outlet. If both points are all -1 values, then there are no points within the range.

## Matrix Operator

matrix inputs:1, matrix outputs:0

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### boundmax[32 ints] read-only

The maximum bounding point

### boundmin[32 ints] read-only

The minimum bounding point

### max[32 floats]

The maximum value to search for (default = all 0.)

### min[32 floats]

The minimum value to search for (default = all 0.)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.3m](https://docs.cycling74.com/reference/jit.3m) | Report min/mean/max values |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
