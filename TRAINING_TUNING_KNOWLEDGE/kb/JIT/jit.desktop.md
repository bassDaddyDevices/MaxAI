---
type: jitter
name: "jit.desktop"
summary: "Copy the display into a matrix"
signal: false
url: "https://docs.cycling74.com/reference/jit.desktop/"
package: "Jitter"
see_also: ["jit.displays"]
---
# jit.desktop

Copy the display into a matrix

## Description

Grabs the contents of the computer display, taking a screen shot of whatever lies at the specified screen coordinates and placing that data into a Jitter matrix.

## Matrix Operator

matrix inputs:0, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 4 | 2 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### rect[4 ints]

Coordinates of the computer display to copy into a Jitter matrix. The display area is specified by four ints corresponding to the x and y pixel offsets from the upper left of the computer screen followed by the the x and y values offset from the upper left of the computer screen of the bottom right corner of the matrix (default = 0 0 320 240).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.displays](https://docs.cycling74.com/reference/jit.displays) | Set and query monitor attributes |
