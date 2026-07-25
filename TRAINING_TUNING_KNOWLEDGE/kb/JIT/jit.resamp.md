---
type: jitter
name: "jit.resamp"
summary: "Resample spatially"
signal: false
url: "https://docs.cycling74.com/reference/jit.resamp/"
package: "Jitter"
see_also: ["jit.matrix", "jit.mxform2d", "jit.rota"]
---
# jit.resamp

Resample spatially

## Description

[jit.resamp](https://docs.cycling74.com/reference/jit.resamp) spatially resamples the input matrix. This can be used to scale (zoom in/out) and offset (move) an image horizontally, vertically, or in both directions.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 4 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### interp\_x[int]

X value interpolation flag (default = 0) When the flag is set, values are interpolated across the x (horizontal) dimension values.

### interp\_y[int]

Y value interpolation flag (default = 0) When the flag is set, values are interpolated across the y (vertical) dimension values.

### wrap[int]

Value wrap flag (default = 0) When the flag is set, values that exceed the limits are wrapped around to the opposite limit with a modulo operation. (1.1 wraps to .1, 1.2 wraps to .2, and -1.1 wraps to .9, -1.2 wraps to .8, etc.)

### xscale[float]

The scaling factor for the x (horizontal) dimension (default = 1.)

### xshift[float]

The shift (offset) amount for x (horizontal) dimension values (default = 0.). Positive values shift right, negative values shift left.

### yscale[float]

The scaling factor for the y (vertical) dimension (default = 1.)

### yshift[float]

The shift (offset) amount for the y (vertical) dimension values (default = 0.) Positive values shift down, negative values shift up.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.matrix](https://docs.cycling74.com/reference/jit.matrix) | The Jitter Matrix! |
| [jit.mxform2d](https://docs.cycling74.com/reference/jit.mxform2d) | Spatial transform using 3x3 matrix |
| [jit.rota](https://docs.cycling74.com/reference/jit.rota) | Scale/rotate in 2D |
