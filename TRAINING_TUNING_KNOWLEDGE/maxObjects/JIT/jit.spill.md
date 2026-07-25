---
type: jitter
name: "jit.spill"
summary: "Unroll a matrix into a list"
signal: false
url: "https://docs.cycling74.com/reference/jit.spill/"
package: "Jitter"
see_also: ["jit.fill", "jit.iter", "jit.matrix", "zl"]
---
# jit.spill

Unroll a matrix into a list

## Description

[jit.spill](https://docs.cycling74.com/reference/jit.spill) outputs matrix values as a Max list, starting from a specified offset. The object will only wrap around two dimensions.

## Matrix Operator

matrix inputs:1, matrix outputs:0

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### listlength[int]

The length of the output list (default = 128)

### offset[32 ints]

The x and y offsets from the start of matrix (default = 0 0)

### plane[int]

The plane whose values will be reported (default = 0)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.fill](https://docs.cycling74.com/reference/jit.fill) | Fill a matrix with a list |
| [jit.iter](https://docs.cycling74.com/reference/jit.iter) | Iterate a matrix as lists or values |
| [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) | The Jitter Matrix! |
| [zl](https://docs.cycling74.com/reference/zl) | Process lists in many ways |
