---
type: jitter
name: "jit.str.tosymbol"
summary: "Convert Jitter string matrix to Max symbol"
signal: false
url: "https://docs.cycling74.com/reference/jit.str.tosymbol/"
package: "Jitter"
see_also: ["jit.str.fromsymbol", "jit.str.op", "jit.str.regexp", "jit.textfile", "tosymbol"]
---
# jit.str.tosymbol

Convert Jitter string matrix to Max symbol

## Description

Use the [jit.str.tosymbol](https://docs.cycling74.com/reference/jit.str.tosymbol) object to convert a string matrix into a Max symbol.

#### Discussion

A word on Jitter strings: In Jitter, any 1 plane char matrix may be manipulated as a string. String matrices may have one or two dimensions. If 1-dimensional, the string is considered terminated at the first 0 (like in C). If 2-dimensional, the string may be considered a multi-line string, with the first 0 encountered on each row treated as a carriage return. The jit.textfile and jit.str.op objects will accept and output 2D matrices. jit.str.fromsymbol only outputs 1D matrices and jit.str.tosymbol only accepts 1D matrices (or the first row of a 2D matrix).

## Matrix Operator

matrix inputs:1, matrix outputs:0

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### outsym[symbol]

The current symbol

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.str.fromsymbol](https://docs.cycling74.com/reference/jit.str.fromsymbol) | Convert Max symbol to Jitter string matrix |
| [jit.str.op](https://docs.cycling74.com/reference/jit.str.op) | Apply common string operations |
| [jit.str.regexp](https://docs.cycling74.com/reference/jit.str.regexp) | Use PERL-compatible regular expressions on Jitter matrices |
| [jit.textfile](https://docs.cycling74.com/reference/jit.textfile) | Read and write a matrix as an ASCII text file |
| [tosymbol](https://docs.cycling74.com/reference/tosymbol) | Convert messages, numbers, or lists to a single symbol |
