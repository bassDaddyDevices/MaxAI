---
type: jitter
name: "jit.unpack"
summary: "Make multiple single plane matrices out of a multiplane matrix"
signal: false
url: "https://docs.cycling74.com/reference/jit.unpack/"
package: "Jitter"
see_also: ["jit.coerce", "jit.concat", "jit.pack", "jit.split"]
---
# jit.unpack

Make multiple single plane matrices out of a multiplane matrix

## Description

The [jit.unpack](https://docs.cycling74.com/reference/jit.unpack) object splits one N-plane matrix into N single-plane matrices. This is useful for splitting one ARGB matrix into separate alpha, red, green, and blue matrices, and similar types of splitting.

## Arguments

### planecount[int] optional

The number of planes in the input matrix and the number of single plane matrix outlets for the [jit.unpack](https://docs.cycling74.com/reference/jit.unpack) object (default = 4).

## Matrix Operator

matrix inputs:1, matrix outputs:-1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### jump[32 ints]

Number of planes to grab from input matrix (default = all ones)

### offset[32 ints]

Offset into input matrix (default = 0 1 2 ... 31)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### anything

The  anything  message forwards any MOP Attribute messages to the underlying outputs -- e.g. out1\_dim, out1\_name, out1\_planecount, out1\_type.

## See Also

| Name | Description |
| --- | --- |
| [jit.coerce](https://docs.cycling74.com/reference/jit.coerce) | Coerce a matrix into different types/planecount |
| [jit.concat](https://docs.cycling74.com/reference/jit.concat) | Concatenate two matrices |
| [jit.pack](https://docs.cycling74.com/reference/jit.pack) | Make a multiplane matrix out of single plane matrices |
| [jit.split](https://docs.cycling74.com/reference/jit.split) | Split a matrix into two matrices |
