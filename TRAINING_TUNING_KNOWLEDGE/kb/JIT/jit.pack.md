---
type: jitter
name: "jit.pack"
summary: "Make a multiplane matrix out of single plane matrices"
signal: false
url: "https://docs.cycling74.com/reference/jit.pack/"
package: "Jitter"
see_also: ["jit.coerce", "jit.concat", "jit.split", "jit.unpack"]
---
# jit.pack

Make a multiplane matrix out of single plane matrices

## Description

The [jit.pack](https://docs.cycling74.com/reference/jit.pack) object merges N single-plane matrices to make one N-plane matrix. This is useful for combining separate alpha, red, green, and blue matrices to make one ARGB matrix, and similar types of merging.

## Arguments

### planecount[int] optional

The number of planes in the input matrix and the number of single plane matrix inlets for the [jit.unpack](https://docs.cycling74.com/reference/jit.unpack) object.

## Matrix Operator

matrix inputs:-1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 0 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### index[int]

Alias to the  *plane*  attribute for backwards compatibility. This attribute is only useful from Javascript or Java, the Max object inlet sets this attribute automatically.

### jump[32 ints]

Number of planes to grab from input matrix (default = all ones)

### offset[32 ints]

Plane offset into input matrix (default = all zero)

### plane[int]

Output matrix plane to which input is written. This attribute is only useful from Javascript or Java, since the Max object inlet sets this attribute automatically.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.coerce](https://docs.cycling74.com/reference/jit.coerce) | Coerce a matrix into different types/planecount |
| [jit.concat](https://docs.cycling74.com/reference/jit.concat) | Concatenate two matrices |
| [jit.split](https://docs.cycling74.com/reference/jit.split) | Split a matrix into two matrices |
| [jit.unpack](https://docs.cycling74.com/reference/jit.unpack) | Make multiple single plane matrices out of a multiplane matrix |
