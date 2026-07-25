---
type: jitter
name: "jit.roy"
summary: "Convert image to halftone image"
signal: false
url: "https://docs.cycling74.com/reference/jit.roy/"
package: "Jitter"
see_also: ["jit.eclipse", "jit.hatch"]
---
# jit.roy

Convert image to halftone image

## Description

[jit.roy](https://docs.cycling74.com/reference/jit.roy) is a halftone screen emulator. It takes an input matrix and splits it into a grid. Each element in the grid is then replaced by regions of a second matrix based on the mean value of each slot in the grid.

#### Discussion

The second matrix (which defines the halftone screen) is a series of submatrices set next to one another along a horizontal axis. These matrices replace regions of the first matrix in ascending order.

## Matrix Operator

matrix inputs:2, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| in2 | adapt | 0 | 0 | 0 | 1 | 1 | char long float32 float64 |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### shades[int]

The number of shades present in the halftone matrix (i.e. the number of regions to split the matrix into as individual halftone images) (default = 11)

### x[int]

The width of each halftone screen (default = 8)

### y[int]

The height of each halftone screen (default = 8)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.eclipse](https://docs.cycling74.com/reference/jit.eclipse) | Create images from images |
| [jit.hatch](https://docs.cycling74.com/reference/jit.hatch) | Perform crosshatch filtering |
