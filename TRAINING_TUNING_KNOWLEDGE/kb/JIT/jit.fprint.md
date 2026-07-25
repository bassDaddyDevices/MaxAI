---
type: jitter
name: "jit.fprint"
summary: "Read/write a matrix as a text file"
signal: false
url: "https://docs.cycling74.com/reference/jit.fprint/"
package: "Jitter"
see_also: ["jit.print", "jit.textfile"]
---
# jit.fprint

Read/write a matrix as a text file

## Description

Imports or exports a single matrix from or to a text file.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### default\_dir[symbol]

Equivalent to  defaultdir .

### defaultdir[symbol]

The default directory for writing files (default = default path)

### coldelim[symbol]

The column delimiter (default = tab)

### planedelim[symbol]

The matrix plane delimiter (default = space)

### precision[int]

The number of characters of floating-point precision (default = 6)

### rowdelim[symbol]

The row delimiter (default = carriage return)

### writemode[int]

Data write mode (default = 0 (integer))

0 = integers used when writing matrix values

1 = floats used when writing matrix values

Possible values:

0 = 'Integer'

1 = 'Floating-Point'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### read

Open and read a single matrix from a text file. The optional argument specifies the filename. The [jit.fprint](https://docs.cycling74.com/reference/jit.fprint) object expects text files to be formatted in the same fashion in which it writes them. Attempting to read unformatted text files will likely return an error.

Arguments:

- filename
  [symbol]

### write

Create a new text file for writing. The optional argument specifies a filename. The text file is not written until a matrix is received by the [jit.fprint](https://docs.cycling74.com/reference/jit.fprint) object. After a write attempt, the message  write  followed by two  int  arguments will be sent from the object's right outlet. The first int indicates the success (1) or failure (0) of the write operation, and the second int indicates the number of bytes written to the file (if any).

Arguments:

- filename
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [jit.print](https://docs.cycling74.com/reference/jit.print) | Print a matrix in the Max Console |
| [jit.textfile](https://docs.cycling74.com/reference/jit.textfile) | Read and write a matrix as an ASCII text file |
