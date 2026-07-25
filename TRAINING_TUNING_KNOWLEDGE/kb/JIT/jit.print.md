---
type: jitter
name: "jit.print"
summary: "Print a matrix in the Max Console"
signal: false
url: "https://docs.cycling74.com/reference/jit.print/"
package: "Jitter"
see_also: ["jit.fpsgui", "jit.fprint", "jit.matrixinfo"]
---
# jit.print

Print a matrix in the Max Console

## Description

Use the [jit.print](https://docs.cycling74.com/reference/jit.print) object to print values for small matrices display and display them in the Max Console. For larger matrices, use [jit.fprint](https://docs.cycling74.com/reference/jit.fprint) which prints its contents to a file.

#### Discussion

Delimiters may be set for plane, column and row. Dimensions are delimited by <DIM N>, where N = the current dimension.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### coldelim[symbol]

Column delimiter

### fieldwidth[int]

Number of characters to display per cell

### info[int]

Information mode (default = 0 (matrix, no info))

0 = display matrix contents, no info

1 = display matrix info and contents

2 = display matrix into only

### mode[int]

Character display mode (default = 0 (decimal))

0 = decimal

1 = hexadecimal (used for  char  and  long  matrices only)

2 = ascii (used for  char  matrices only)

### planedelim[symbol]

Plane delimiter

### precision[int]

Floating-point precision characters

### rowdelim[symbol]

Row delimiter

### title[symbol]

Matrix display title

### zeropad[int]

Zero padding flag (default = 0) When the flag is set, empty display spaces in a matrix are filled with zeros.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.fpsgui](https://docs.cycling74.com/reference/jit.fpsgui) | FPS meter |
| [jit.fprint](https://docs.cycling74.com/reference/jit.fprint) | Read/write a matrix as a text file |
| [jit.matrixinfo](https://docs.cycling74.com/reference/jit.matrixinfo) | Report matrix planecount, type, dimensions |
