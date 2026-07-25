---
type: jitter
name: "jit.textfile"
summary: "Read and write a matrix as an ASCII text file"
signal: false
url: "https://docs.cycling74.com/reference/jit.textfile/"
package: "Jitter"
see_also: ["jit.fprint", "jit.matrix", "text"]
---
# jit.textfile

Read and write a matrix as an ASCII text file

## Description

The [jit.textfile](https://docs.cycling74.com/reference/jit.textfile) object maintains a text buffer, into which a text file or  char  matrix can be imported. The buffer can also be edited directly by double-clicking on the object to open an editor window. A  bang  to the object causes the text buffer to be sent out the left outlet as a matrix.

#### Discussion

In adapt mode, jit.textfile will analyze the file for carriage returns and deduce the probable width and height of the output matrix (always 1 plane 2 dimensional). String matrices can be output using the  line  message.

## Matrix Operator

matrix inputs:1, matrix outputs:2

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char |
| out2 | n/a | 1 | 1 | 1 | 1 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### autoclear[int]

Matrix clear following output flag (default = 1)

### defaultdir[symbol]

The default directory for writing files (default = default path)

### convert[int]

Convert line breaks flag (default = 1) When the flag is set, UNIX/DOS line breaks are converted to Macintosh format when reading a file from disk.

### title[symbol]

Sets the title for the text editor window

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### (mouse)

Double-clicking on the object opens a text editor window with the current contents of the text buffer.

### erase

Clear the object's text buffer.

### line

Sends the line specified by the argument out the middle outlet of the object as a string matrix (1 dimensional char matrix, 0 terminated) that can be used by the  jit.str.  set of objects. Line numbering starts at 1.

Arguments:

- line-number
  [int]

### open

Opens the text editor window. Sending this message is equivalent to double-clicking on the object.

### outputline

Sends the matrix out the middle outlet. This is equivalent to the  outputmatrix  message, but uses to the middle outlet rather than the left outlet. (For this object, the  outputmatrix  message refers only to the left outlet).

### read

Reads a text file from disk if a filename is specified. Otherwise, an file dialog box will appear so that a text file can be specified.

Arguments:

- filename
  [symbol]

### wclose

Closes the editor window, if open.

### write

Writes the object's text buffer to a disk file. The optional argument specifies a file name.

Arguments:

- filename
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [jit.fprint](https://docs.cycling74.com/reference/jit.fprint) | Read/write a matrix as a text file |
| [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) | The Jitter Matrix! |
| [text](https://docs.cycling74.com/reference/text) | Format messages as a text file |
