---
type: jitter
name: "jit.glue"
summary: "Glue many matrices into one"
signal: false
url: "https://docs.cycling74.com/reference/jit.glue/"
package: "Jitter"
see_also: ["jit.concat", "jit.demultiplex", "jit.matrix", "jit.multiplex", "jit.scissors", "jit.split"]
---
# jit.glue

Glue many matrices into one

## Description

Composites multiple input matrices together as if they were rectangular pieces of a whole.

## Matrix Operator

matrix inputs:-1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 0 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### columns[int]

The number of columns to use when gluing the matrix together (default = 1)

If you specify the columns attribute in the object box, The number of inlets will be equal to the number of rows multiplied by the number of columns. If you change the rows \* columns attributes later, the size of the split regions will change, but the number of inlets will not change.

### syncinlet[int]

The inlet number which will cause the [jit.glue](https://docs.cycling74.com/reference/jit.glue) object to output a new composite matrix when a matrix is received at the specified inlet (default = 0)

A value of -1 will cause the object to output a new matrix in response to a matrix received at  **all**  inlets

### rows[int]

The number of rows to use when gluing the matrix together (default = 1)

If you specify the rows attribute in the object box, The number of inlets will be equal to the number of rows multiplied by the number of columns. If you change this value later you will change the compositing effect, but the number of inlets will not change.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.concat](https://docs.cycling74.com/reference/jit.concat) | Concatenate two matrices |
| [jit.demultiplex](https://docs.cycling74.com/reference/jit.demultiplex) | Demultiplex (deinterleave) one matrix into two |
| [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) | The Jitter Matrix! |
| [jit.multiplex](https://docs.cycling74.com/reference/jit.multiplex) | Multiplex (interleave) two matrices into one matrix |
| [jit.scissors](https://docs.cycling74.com/reference/jit.scissors) | Cut up a matrix into evenly spaced sub matrices |
| [jit.split](https://docs.cycling74.com/reference/jit.split) | Split a matrix into two matrices |
