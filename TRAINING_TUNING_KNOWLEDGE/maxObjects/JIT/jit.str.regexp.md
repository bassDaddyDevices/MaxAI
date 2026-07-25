---
type: jitter
name: "jit.str.regexp"
summary: "Use PERL-compatible regular expressions on Jitter matrices"
signal: false
url: "https://docs.cycling74.com/reference/jit.str.regexp/"
package: "Jitter"
see_also: ["jit.op", "jit.str.fromsymbol", "jit.str.tosymbol", "jit.textfile", "regexp"]
---
# jit.str.regexp

Use PERL-compatible regular expressions on Jitter matrices

## Description

[jit.str.regexp](https://docs.cycling74.com/reference/jit.str.regexp) performs regular expression analysis to Jitter matrices with optional substitution.

#### Discussion

To specify a regular expression, the re attribute is used. Substitutions may be specified with the substitute attribute. A full discussion of regular expressions is beyond the scope of this document, but you can read all about them
[here](http://perldoc.perl.org/perlre.html)
and
[here](http://www.pcre.org/man.txt)

[jit.str.regexp](https://docs.cycling74.com/reference/jit.str.regexp) gets its regular expression know-how from the PCRE library package, which is open source software, written by Philip Hazel, and copyright by the University of Cambridge, England.

A word on Jitter strings: In Jitter, any 1 plane char matrix may be manipulated as a string. String matrices may have one or two dimensions. If 1-dimensional, the string is considered terminated at the first 0 (like in C). If 2-dimensional, the string may be considered a multi-line string, with the first 0 encountered on each row treated as a carriage return. The jit.textfile and jit.str.op objects will accept and output 2D matrices. jit.str.fromsymbol only outputs 1D matrices and jit.str.tosymbol only accepts 1D matrices (or the first row of a 2D matrix).

## Matrix Operator

matrix inputs:1, matrix outputs:4

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char |
| out2 | n/a | 1 | 1 | 1 | 1 | 1 | char |
| out3 | n/a | 1 | 1 | 1 | 1 | 1 | char |
| out4 | n/a | 1 | 1 | 1 | 1 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### descriptor[int]

Output descriptor matrix flag (default = 0)

### re[symbol]

The PERL-compatible regular expression to be used by [jit.str.regexp](https://docs.cycling74.com/reference/jit.str.regexp) for analysis of the incoming matrix.

### substitute[symbol]

A substitution string.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
| [jit.str.fromsymbol](https://docs.cycling74.com/reference/jit.str.fromsymbol) | Convert Max symbol to Jitter string matrix |
| [jit.str.tosymbol](https://docs.cycling74.com/reference/jit.str.tosymbol) | Convert Jitter string matrix to Max symbol |
| [jit.textfile](https://docs.cycling74.com/reference/jit.textfile) | Read and write a matrix as an ASCII text file |
| [regexp](https://docs.cycling74.com/reference/regexp) | Use regular expressions to process input |
