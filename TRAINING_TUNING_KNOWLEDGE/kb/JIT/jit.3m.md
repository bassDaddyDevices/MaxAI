---
type: jitter
name: "jit.3m"
summary: "Report min/mean/max values"
signal: false
url: "https://docs.cycling74.com/reference/jit.3m/"
package: "Jitter"
see_also: ["jit.histogram", "jit.op"]
---
# jit.3m

Report min/mean/max values

## Description

Reports the minimum, mean, and maximum values for each plane of a given input matrix as lists of size
planecount
, one value for each plane. The list of minimum values are sent out the left outlet of the object, the list of mean values are sent out the middle outlet, and the list of maximum values is sent out the right outlet.

## Matrix Operator

matrix inputs:1, matrix outputs:0

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### max[32 atoms] read-only

Displays the list of maximum values (per plane) calculated from the most recent input matrix.

### mean[32 atoms] read-only

Displays the list of mean values (per plane) calculated from the most recent input matrix.

### min[32 atoms] read-only

Displays the list of minimum values (per plane) calculated from the most recent input matrix.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.histogram](https://docs.cycling74.com/reference/jit.histogram) | Calculate matrix histogram |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
