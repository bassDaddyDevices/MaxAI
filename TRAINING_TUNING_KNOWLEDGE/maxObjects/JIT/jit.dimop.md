---
type: jitter
name: "jit.dimop"
summary: "Downsample using operators across dimensions"
signal: false
url: "https://docs.cycling74.com/reference/jit.dimop/"
package: "Jitter"
see_also: ["jit.op", "jit.planeop", "jit.expr"]
---
# jit.dimop

Downsample using operators across dimensions

## Description

Applies an operator to elements within a subregion, across one or more dimensions, downsampling the input matrix in the process.

#### Discussion

For example, to downsample an incoming matrix to half the width and a quarter of the height, averaging all the values in each incoming 2 x 4 cell sub-region to a single output cell, use a step of 2 4, and an op of  avg .

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 0 | 0 | 0 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### op[symbol]

The operator to be used in the downsampling process (default = avg).

Possible values:

'avg'

'+'

'\*'

'min'

'max'

### step[32 ints]

Step size across each dimension (default = 1). A step size of -1 will span the entire dimension.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
| [jit.planeop](https://docs.cycling74.com/reference/jit.planeop) | Operator across planes |
| [jit.expr](https://docs.cycling74.com/reference/jit.expr) | Evaluate an expression to fill a matrix |
