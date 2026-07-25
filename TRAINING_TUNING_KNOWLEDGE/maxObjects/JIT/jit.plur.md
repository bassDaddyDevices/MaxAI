---
type: jitter
name: "jit.plur"
summary: "Peace Love Unity Rave"
signal: false
url: "https://docs.cycling74.com/reference/jit.plur/"
package: "Jitter"
see_also: ["jit.ameba"]
---
# jit.plur

Peace Love Unity Rave

## Description

Use the [jit.plur](https://docs.cycling74.com/reference/jit.plur) object to performs linear interpolation on incoming matrix frames. This object resamples an image and then interpolates back to the original size.

#### Discussion

The resampling process uses two different attributes along each axis of the matrix frame. The \_step attributes determine how the frame is divided at output. For instance, with x\_step set to 5, there will be a resampled rectangle every 5 cells along the horizontal axis. The \_range attributes determine how that resampled rectangle is interpolated. If x\_range is less than or greater than x\_step, different corner points are used for the interpolation calculation, than are used in the resampling.

When using other interpolation modes, the [jit.plur](https://docs.cycling74.com/reference/jit.plur) object performs a wide variety of variations on theme.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### colormode[int]

Color wrapping mode (default = 0 (wrap))

0 = wrap: Values that exceed the limits are wrapped around to the opposite limit with a modulo operation. (256 wraps to 0, 257 wraps to 1, and -1 wraps to 255, -2 wraps to 254, etc.)

1 = clip: Values are limited not to exceed min or max. (E.g. numbers greater than 255 are set to 255, and numbers less than 0 are set to 0.)

2 = bounce: Values that exceed the limits are folded back in the opposite direction. (256 is folded back to 254, 257 is folded back to 253, and -1 is folded back to 1, -2 to 2, etc.)

### gang[int]

Range value flag (default = 1) When the flag is set, the x\_range and y\_range values are used. Otherwise, the x\_step and y\_step values are used instead.

### hi[float]

The upper output range limit (default = 1.)

### lo[float]

The lower output range limit (default = 0.)

### mode[int]

Interpolation mode (default = 0 (linear))

0 = linear interpolation

1 - 15 = interpolation variations (Try 'em and see!)

### scale[int]

The amount of bit shift before output (default = 8)

### x\_range[int]

The horizontal distance between corner points used for interpolation (default = 2)

### x\_step[int]

The horizontal distance between resampled corner points (default = 2)

### y\_range[int]

The vertical distance between corner points used for interpolation (default = 2)

### y\_step[int]

The vertical distance between resampled corner points (default = 2)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.ameba](https://docs.cycling74.com/reference/jit.ameba) | Downsample/upsample with non-obvious results |
