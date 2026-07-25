---
type: jitter
name: "jit.thin"
summary: "Remove redundant dimensions of size 1"
signal: false
url: "https://docs.cycling74.com/reference/jit.thin/"
package: "Jitter"
see_also: ["jit.concat", "jit.dimmap", "jit.matrix", "jit.split"]
---
# jit.thin

Remove redundant dimensions of size 1

## Description

The [jit.thin](https://docs.cycling74.com/reference/jit.thin) object removes redundant dimensions of size 1.

#### Discussion

Example: a 320 x 240 x 1 matrix will be converted to a 320 x 240 matrix, and a 10 x 1 x 1 x 2 x 1 x 4 matrix will be converted to a 10 x 2 x 4 matrix. Redundant dimensions of size 1 may be inserted using the [jit.dimmap](https://docs.cycling74.com/reference/jit.dimmap) object.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 0 | 0 | 0 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.concat](https://docs.cycling74.com/reference/jit.concat) | Concatenate two matrices |
| [jit.dimmap](https://docs.cycling74.com/reference/jit.dimmap) | Remap and/or invert matrix dimensions |
| [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) | The Jitter Matrix! |
| [jit.split](https://docs.cycling74.com/reference/jit.split) | Split a matrix into two matrices |
