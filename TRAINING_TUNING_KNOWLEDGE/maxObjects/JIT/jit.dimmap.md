---
type: jitter
name: "jit.dimmap"
summary: "Remap and/or invert matrix dimensions"
signal: false
url: "https://docs.cycling74.com/reference/jit.dimmap/"
package: "Jitter"
see_also: ["jit.matrix", "jit.transpose"]
---
# jit.dimmap

Remap and/or invert matrix dimensions

## Description

Provides remapping and/or inversion of matrix dimensions. Similar to the [jit.transpose](https://docs.cycling74.com/reference/jit.transpose) object, however any dimension may be mapped to any other dimension as well as inverted. Note that the input to output map may not contain any duplicates. Redundant dimensions of size 1 may be inserted by using a map value of -1 at the corresponding dimension index.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 0 | 0 | 0 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### invert[32 ints]

Invert dimension flag array (default = all zero)

### map[32 ints]

Input to output dimension map (default = 0 1 2 ... 31)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) | The Jitter Matrix! |
| [jit.transpose](https://docs.cycling74.com/reference/jit.transpose) | Calculate the transpose of a matrix |
