---
type: jitter
name: "jit.rota"
summary: "Scale/rotate in 2D"
signal: false
url: "https://docs.cycling74.com/reference/jit.rota/"
package: "Jitter"
see_also: ["jit.mxform2d", "jit.repos", "jit.resamp"]
---
# jit.rota

Scale/rotate in 2D

## Description

Use the [jit.rota](https://docs.cycling74.com/reference/jit.rota) object for quick 2-dimemsional scaling and rotation of matrices.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### anchor\_x[int]

The horizontal anchor point for rotation (default = 0) The anchor point is horizontally offset in pixels from the upper left corner of the display.

### anchor\_y[int]

The vertical anchor point for rotation (default = 0) The anchor point is vertically offset in pixels from the upper left corner of the display.

### boundmode[int]

Boundary handling mode (default = 0 (ignore))

0 = ignore: Values that exceed the limits are ignored.

1 = clear: Values that exceed the limits are set to 0.

2 = wrap: Values that exceed the limits are wrapped around to the opposite limit with a modulo operation. (256 wraps to 0, 257 wraps to 1, and -1 wraps to 255, -2 wraps to 254, etc.)

3 = clip: Values are limited not to exceed min or max. (e.g. numbers greater than 255 are set to 255, and numbers less than 0 are set to 0.)

4 = fold: Values that exceed the limits are folded back in the opposite direction. (256 is folded back to 254, 257 is folded back to 253, and -1 is folded back to 1, -2 to 2, etc.)

### cosoffset\_x[float]

Horizontal cosine offset (default = 0.)

### cosoffset\_y[float]

Vertical cosine offset (default = 0.)

### cosscale\_x[float]

Horizontal cosine scale (default = 0.)

### cosscale\_y[float]

Vertical cosine scale (default = 0.)

### interp[int]

Interpolation flag (default = 0) When the flag is set, the incoming matrix is interpolated when scaling to display.

### offset\_x[int]

The horizontal offset (default = 0) The horizontal offset is specified in pixels from the upper left corner of the display.

### offset\_y[int]

The vertical offset (default = 0) The vertical offset is specified in pixels from the upper left corner of the display.

### sinoffset\_x[float]

Horizontal sine offset (default = 0.)

### sinoffset\_y[float]

Vertical sine offset (default = 0.)

### sinscale\_x[float]

Horizontal sine scale (default = 0.)

### sinscale\_y[float]

Vertical sine scale (default = 0.)

### theta[float]

The rotation angle in radians (default = 0.)

### thetaoffsetcos\_x[float]

theta-dependent horizontal cosine offset (default = 0.)

### thetaoffsetcos\_y[float]

theta-dependent vertical cosine offset (default = 0.)

### thetaoffsetsin\_x[float]

theta-dependent horizontal sine offset (default = 0.)

### thetaoffsetsin\_y[float]

theta-dependent vertical sine offset (default = 0.)

### thetascalecos\_x[float]

theta-dependent horizontal cosine scale (default = 0.)

### thetascalecos\_y[float]

theta-dependent vertical cosine scale (default = 0.)

### thetascalesin\_x[float]

theta-dependent horizontal sine scale (default = 0.)

### thetascalesin\_y[float]

theta-dependent vertical sine scale (default = 0.)

### zoom\_x[float]

The horizontal image scaling (default = 1.)

### zoom\_y[float]

The vertical image scaling (default = 1.)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.mxform2d](https://docs.cycling74.com/reference/jit.mxform2d) | Spatial transform using 3x3 matrix |
| [jit.repos](https://docs.cycling74.com/reference/jit.repos) | Reposition spatially |
| [jit.resamp](https://docs.cycling74.com/reference/jit.resamp) | Resample spatially |
