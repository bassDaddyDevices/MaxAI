---
type: jitter
name: "jit.hatch"
summary: "Perform crosshatch filtering"
signal: false
url: "https://docs.cycling74.com/reference/jit.hatch/"
package: "Jitter"
see_also: ["jit.altern", "jit.eclipse", "jit.roy"]
---
# jit.hatch

Perform crosshatch filtering

## Description

Divides an incoming matrix into a grid. Along the central axes of each square, the color value of the original top-left pixel is visible.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 4 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### bgcolor[4 floats]

The background color in the form  *alpha red green blue*  (default = 0. 0. 0. 0.) All values are in the range 0.-1.

### grid[int]

The square size (default = 5)

### thresh[float]

The luminance threshold (default = 0.)

Color values above the threshold are eligible for hatching. Otherwise, they are replaced by the background color.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.altern](https://docs.cycling74.com/reference/jit.altern) | Color screen with threshold |
| [jit.eclipse](https://docs.cycling74.com/reference/jit.eclipse) | Create images from images |
| [jit.roy](https://docs.cycling74.com/reference/jit.roy) | Convert image to halftone image |
