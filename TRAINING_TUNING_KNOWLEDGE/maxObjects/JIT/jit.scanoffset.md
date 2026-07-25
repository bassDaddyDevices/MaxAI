---
type: jitter
name: "jit.scanoffset"
summary: "Uses a 1-dimensional matrix to offset scanlines"
signal: false
url: "https://docs.cycling74.com/reference/jit.scanoffset/"
package: "Jitter"
see_also: ["jit.repos", "jit.scanwrap"]
---
# jit.scanoffset

Uses a 1-dimensional matrix to offset scanlines

## Description

[jit.scanoffset](https://docs.cycling74.com/reference/jit.scanoffset) uses a 1-dimensional slice of one matrix as a map for the offset and scale of the scanlines of another matrix.

## Matrix Operator

matrix inputs:2, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| in2 | adapt | 0 | 0 | 0 | 1 | 1 | float32 |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### displacement\_map[3 ints]

The scanline, dimension, and plane of the matrix (in2\_matrix) used as the offset/scale map (default = 0 0 0)

### interp[int]

Interpolation flag (default = 0) When the flag is set, the incoming matrix is interpolated when scaling to display.

### mode[int]

The axis of the in1\_matrix along which to apply the offset. (default = 0 (horizontal))

0 = apply offset along the horizontal axis

1 = apply offset along the vertical axis

### offset[float]

The offset amount. (default = 0.)

### scale[float]

The scale amount. (default = 0.)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.repos](https://docs.cycling74.com/reference/jit.repos) | Reposition spatially |
| [jit.scanwrap](https://docs.cycling74.com/reference/jit.scanwrap) | Resample by scanline wrapping |
