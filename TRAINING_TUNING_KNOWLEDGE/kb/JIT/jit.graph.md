---
type: jitter
name: "jit.graph"
summary: "Perform floating-point data visualization"
signal: false
url: "https://docs.cycling74.com/reference/jit.graph/"
package: "Jitter"
see_also: ["jit.gl.graph", "jit.buffer~", "jit.catch~", "jit.peek~", "jit.poke~", "jit.release~", "peek~", "poke~"]
---
# jit.graph

Perform floating-point data visualization

## Description

Renders floating point data as a two-dimensional plot.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 4 | 2 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### brgb[3 ints]

Three chars represent the red, green and blue values of the background color to render

### clearit[int]

If non-zero the cells of the matrix will be cleared to the brgb color before rendering.

### frgb[4 ints]

Four chars represent the alpha, red, green and blue values of the color to render

### height[int]

The height of the output matrix (default=240)

### mode[int]

Five different modes are possible: mode 0 renders points, mode 1 renders lines, mode 2 renders area between the float value and the horizontal axis at 0.0, and mode 3 renders the area in a bipolar way (reflected in the horizontal axis). Unlike the other modes, which all expect one-dimensional matrices, mode 4 expects a two dimensional matrix, with one row of upper and one row of lower values, which it then renders as vertical bars, coloring the space between the lower and upper values.

Possible values:

0 = 'Points'

1 = 'Lines'

2 = 'Area'

3 = 'Bi-Polar Area'

4 = 'Bar'

### rangehi[float]

The floating point value to map to the top of the graph (default=1.0)

### rangelo[float]

The floating point value to map to the bottom of the graph (default=-1.0)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.gl.graph](https://docs.cycling74.com/reference/jit.gl.graph) | Graph floats into 3D space |
| [jit.buffer~](https://docs.cycling74.com/reference/jit.buffer~) | Access an MSP buffer~ in matrix form |
| [jit.catch~](https://docs.cycling74.com/reference/jit.catch~) | Transform signal data into matrices |
| [jit.peek~](https://docs.cycling74.com/reference/jit.peek~) | Read matrix data as an audio signal |
| [jit.poke~](https://docs.cycling74.com/reference/jit.poke~) | Write an audio signal into a matrix |
| [jit.release~](https://docs.cycling74.com/reference/jit.release~) | Transforms matrix data into signals |
| [peek~](https://docs.cycling74.com/reference/peek~) | Read and write sample values |
| [poke~](https://docs.cycling74.com/reference/poke~) | Write sample values to a buffer by index |
