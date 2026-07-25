---
type: jitter
name: "jit.bsort"
summary: "Bubble sort"
signal: false
url: "https://docs.cycling74.com/reference/jit.bsort/"
package: "Jitter"
see_also: ["jit.3m", "jit.histogram"]
---
# jit.bsort

Bubble sort

## Description

Performs a bubble sort on an incoming matrix, sorting the cells in ascending order.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### dimmode[int]

Sorts along the dimension specified the integer (0 or 1)

### maxiter[int]

The maximum number of search iterations (default = -1). A value of -1 sets the search iterations based on the matrix size.

### planemode[int]

Sorts cells based on the values contained in the plane specified by the  *planemode*  0-(planecount-1)

### summode[int]

Summing flag (default = 0) When the flag is set, sorting is based on the sum of the planes.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.3m](https://docs.cycling74.com/reference/jit.3m) | Report min/mean/max values |
| [jit.histogram](https://docs.cycling74.com/reference/jit.histogram) | Calculate matrix histogram |
