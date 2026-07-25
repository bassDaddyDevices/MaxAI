---
type: jitter
name: "jit.repos"
summary: "Reposition spatially"
signal: false
url: "https://docs.cycling74.com/reference/jit.repos/"
package: "Jitter"
see_also: ["jit.mxform2d", "jit.plume", "jit.rota"]
---
# jit.repos

Reposition spatially

## Description

[jit.repos](https://docs.cycling74.com/reference/jit.repos) performs cell positioning on an input matrix received in its left inlet using the input from a second input matrix received in its right Inlet as a spatial map.

#### Discussion

The spatial map should be a 2 plane matrix, where plane 0 specifies the x offset and plane 1 specifies the y offset. You can do Fractional repositioning by setting the interpbits attribute to a non-zero value -- the spatial map values are considered to be fixed point values with a fractional component of interpbits.

## Matrix Operator

matrix inputs:2, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| in2 | resamp | 0 | 0 | 1 | 2 | 1 | long char |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### boundmode[int]

Boundary mode for values outside the range (0, width) (0, height) (default = 3 (clip))

0 = ignore: Values that exceed the limits are ignored.

1 = clear: Values that exceed the limits are set to 0.

2 = wrap: Values that exceed the limits are wrapped around to the opposite limit with a modulo operation.

3 = clip: Values are limited not to exceed width or height.

4 = fold: Values that exceed the limits are folded back in the opposite direction

### interpbits[int]

The number of bits considered as fraction for spatial mapping values (default = 0)

### mode[int]

Offset mode flag (default = 0 (absolute offsets))

0 = spatial map values specified as absolute offsets

1 = spatial map specified as relative offsets

### offset\_x[int]

The offset added to the x values in the spatial map matrix (default = 0)

### offset\_y[int]

The offset added to the y values in the spatial map matrix (default = 0)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.mxform2d](https://docs.cycling74.com/reference/jit.mxform2d) | Spatial transform using 3x3 matrix |
| [jit.plume](https://docs.cycling74.com/reference/jit.plume) | Displace points based on luminance |
| [jit.rota](https://docs.cycling74.com/reference/jit.rota) | Scale/rotate in 2D |
