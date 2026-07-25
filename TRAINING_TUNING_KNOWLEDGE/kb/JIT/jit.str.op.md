---
type: jitter
name: "jit.str.op"
summary: "Apply common string operations"
signal: false
url: "https://docs.cycling74.com/reference/jit.str.op/"
package: "Jitter"
see_also: ["jit.op", "jit.str.fromsymbol", "jit.str.tosymbol", "jit.str.regexp", "jit.textfile"]
---
# jit.str.op

Apply common string operations

## Description

Use the [jit.str.op](https://docs.cycling74.com/reference/jit.str.op) object to perform common string operations on string matrices.

#### Discussion

A word on Jitter strings: In Jitter, any 1 plane char matrix may be manipulated as a string. String matrices may have one or two dimensions. If 1-dimensional, the string is considered terminated at the first 0 (like in C). If 2-dimensional, the string may be considered a multi-line string, with the first 0 encountered on each row treated as a carriage return. The jit.textfile and jit.str.op objects will accept and output 2D matrices. jit.str.fromsymbol only outputs 1D matrices and jit.str.tosymbol only accepts 1D matrices (or the first row of a 2D matrix).

Most operations input and output a single string matrix. The  strcat  operation (which concatenates strings) and the  strcmp  operation (which compares strings) take two input matrices.

## Matrix Operator

matrix inputs:2, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| in2 | adapt | 0 | 0 | 0 | 1 | 1 | char |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### end[2 ints]

The end of the slice when in  slice  mode (default = 0)

### multiline\_in[int]

Enables the [jit.str.op](https://docs.cycling74.com/reference/jit.str.op) object to work with 2D matrices, with each row interpreted as a CR-terminated string. If disabled, only the first row of an incoming 2D matrix is used. (default = 1)

### multiline\_out[int]

Causes the [jit.str.op](https://docs.cycling74.com/reference/jit.str.op) object to convert any CR to the start of a new row in a 2D output matrix and output an 'expanded' 2D matrix. If disabled, a 'collapsed', single-row matrix is output. (default = 0)

### op[symbol]

String operation mode (default = strcat) Available modes are:

strcat = Concatenate two strings

strrev = Reverse a string

slice = Output an arbitrary substring as a zero-terminated string

strcmp = Compare two strings lexicographically, returning the difference between the two characters at the point that the strings become dissimilar, as well as the index of that point

strlen = Report the length of a string

toupper = Convert to uppercase

tolower = Convert to lowercase

thru = Properly truncate (if necessary) and terminate string matrix

### start[2 ints]

The start of the slice when in  slice  mode (default = 0)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
| [jit.str.fromsymbol](https://docs.cycling74.com/reference/jit.str.fromsymbol) | Convert Max symbol to Jitter string matrix |
| [jit.str.tosymbol](https://docs.cycling74.com/reference/jit.str.tosymbol) | Convert Jitter string matrix to Max symbol |
| [jit.str.regexp](https://docs.cycling74.com/reference/jit.str.regexp) | Use PERL-compatible regular expressions on Jitter matrices |
| [jit.textfile](https://docs.cycling74.com/reference/jit.textfile) | Read and write a matrix as an ASCII text file |
