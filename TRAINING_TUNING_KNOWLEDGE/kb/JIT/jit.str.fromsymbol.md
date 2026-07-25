---
type: jitter
name: "jit.str.fromsymbol"
summary: "Convert Max symbol to Jitter string matrix"
signal: false
url: "https://docs.cycling74.com/reference/jit.str.fromsymbol/"
package: "Jitter"
see_also: ["jit.str.op", "jit.str.tosymbol", "jit.str.regexp", "jit.textfile"]
---
# jit.str.fromsymbol

Convert Max symbol to Jitter string matrix

## Description

Use the [jit.str.tosymbol](https://docs.cycling74.com/reference/jit.str.tosymbol) object to convert Max symbols into string matrices. An optional argument can be used to specify the length of the 1-dim matrix.

#### Discussion

A word on Jitter strings: In Jitter, any 1 plane char matrix may be manipulated as a string. String matrices may have one or two dimensions. If 1-dimensional, the string is considered terminated at the first 0 (like in C). If 2-dimensional, the string may be considered a multi-line string, with the first 0 encountered on each row treated as a carriage return. The jit.textfile and jit.str.op objects will accept and output 2D matrices. jit.str.fromsymbol only outputs 1D matrices and jit.str.tosymbol only accepts 1D matrices (or the first row of a 2D matrix).

## Matrix Operator

matrix inputs:0, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Any int sent to the [jit.str.fromsymbol](https://docs.cycling74.com/reference/jit.str.fromsymbol) object is converted to a string matrix and sent out the left outlet.

### float

Any float sent to the [jit.str.fromsymbol](https://docs.cycling74.com/reference/jit.str.fromsymbol) object is converted to a string matrix and sent out the left outlet.

### list

Any list sent to the [jit.str.fromsymbol](https://docs.cycling74.com/reference/jit.str.fromsymbol) object is converted to a string matrix and sent out the left outlet.

### anything

Any symbol input to the [jit.str.fromsymbol](https://docs.cycling74.com/reference/jit.str.fromsymbol) object is converted to a string matrix and sent out the left outlet.

## See Also

| Name | Description |
| --- | --- |
| [jit.str.op](https://docs.cycling74.com/reference/jit.str.op) | Apply common string operations |
| [jit.str.tosymbol](https://docs.cycling74.com/reference/jit.str.tosymbol) | Convert Jitter string matrix to Max symbol |
| [jit.str.regexp](https://docs.cycling74.com/reference/jit.str.regexp) | Use PERL-compatible regular expressions on Jitter matrices |
| [jit.textfile](https://docs.cycling74.com/reference/jit.textfile) | Read and write a matrix as an ASCII text file |
