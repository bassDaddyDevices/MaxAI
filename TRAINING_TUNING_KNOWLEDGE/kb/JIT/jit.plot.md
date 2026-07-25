---
type: jitter
name: "jit.plot"
summary: "(x,y) plotting of a two-plane matrix"
signal: false
url: "https://docs.cycling74.com/reference/jit.plot/"
package: "Jitter"
see_also: ["jit.buffer~", "jit.graph", "jit.peek~", "jit.poke~", "jit.release~", "peek~", "poke~"]
---
# jit.plot

(x,y) plotting of a two-plane matrix

## Description

Use [jit.plot](https://docs.cycling74.com/reference/jit.plot) to render a cartesian plot of a two-plane matrix.

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

### width[int]

The width of the output matrix (default=240)

### xmax[float]

The floating point value to map to the right of the graph (default=1.0)

### xmin[float]

The floating point value to map to the left of the graph (default=-1.0)

### ymax[float]

The floating point value to map to the top of the graph (default=1.0)

### ymin[float]

The floating point value to map to the left of the graph (default=-1.0)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.buffer~](https://docs.cycling74.com/reference/jit.buffer~) | Access an MSP buffer~ in matrix form |
| [jit.graph](https://docs.cycling74.com/reference/jit.graph) | Perform floating-point data visualization |
| [jit.peek~](https://docs.cycling74.com/reference/jit.peek~) | Read matrix data as an audio signal |
| [jit.poke~](https://docs.cycling74.com/reference/jit.poke~) | Write an audio signal into a matrix |
| [jit.release~](https://docs.cycling74.com/reference/jit.release~) | Transforms matrix data into signals |
| [peek~](https://docs.cycling74.com/reference/peek~) | Read and write sample values |
| [poke~](https://docs.cycling74.com/reference/poke~) | Write sample values to a buffer by index |
