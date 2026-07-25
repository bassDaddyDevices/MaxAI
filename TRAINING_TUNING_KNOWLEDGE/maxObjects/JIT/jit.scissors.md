---
type: jitter
name: "jit.scissors"
summary: "Cut up a matrix into evenly spaced sub matrices"
signal: false
url: "https://docs.cycling74.com/reference/jit.scissors/"
package: "Jitter"
see_also: ["jit.concat", "jit.demultiplex", "jit.glue", "jit.matrix", "jit.multiplex", "jit.split"]
---
# jit.scissors

Cut up a matrix into evenly spaced sub matrices

## Description

[jit.scissors](https://docs.cycling74.com/reference/jit.scissors) takes a single matrix and cuts it into uniform rectangular regions, outputting each one out a separate outlet as a new matrix.

## Matrix Operator

matrix inputs:1, matrix outputs:-1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### columns[int]

The number of columns to split the input matrix into (default = 1)

If you specify the columns attribute in the object box, The number of outlets will be equal to the number of rows multiplied by the number of columns. If you change the rows \* columns attributes later, the size of the split regions will change, but the number of outlets will not change.

### rows[int]

The number of rows to split the input matrix into (default = 1)

If you specify the columns attribute in the object box, The number of outlets will be equal to the number of rows multiplied by the number of columns. If you change the rows \* columns attributes later, the size of the split regions will change, but the number of outlets will not change.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### anything

The  anything  message forwards any MOP Attribute messages to the underlying outputs -- e.g. out1\_dim, out1\_name, out1\_planecount, out1\_type.

## See Also

| Name | Description |
| --- | --- |
| [jit.concat](https://docs.cycling74.com/reference/jit.concat) | Concatenate two matrices |
| [jit.demultiplex](https://docs.cycling74.com/reference/jit.demultiplex) | Demultiplex (deinterleave) one matrix into two |
| [jit.glue](https://docs.cycling74.com/reference/jit.glue) | Glue many matrices into one |
| [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) | The Jitter Matrix! |
| [jit.multiplex](https://docs.cycling74.com/reference/jit.multiplex) | Multiplex (interleave) two matrices into one matrix |
| [jit.split](https://docs.cycling74.com/reference/jit.split) | Split a matrix into two matrices |
