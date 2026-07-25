---
type: jitter
name: "jit.scanslide"
summary: "Cellwise spatial envelope follower"
signal: false
url: "https://docs.cycling74.com/reference/jit.scanslide/"
package: "Jitter"
see_also: ["jit.op", "jit.slide", "slide", "slide~"]
---
# jit.scanslide

Cellwise spatial envelope follower

## Description

Use the [jit.scanslide](https://docs.cycling74.com/reference/jit.scanslide) object to perform cellwise spatial envelope following across dimension 0 or 1.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### dimmode[int]

The dimension across which the envelope following is performed (default = 0)

0 = horizontal

1 = vertical

### mode[int]

Filter mode (default = 0 (filter cells with greater than offset))

0 = filter cells with a position greater than the value of the offset attribute.

1 = filter cells with a position less than the value of the offset attribute.

2 = filter cells with a position both greater than and less than the value of the offset attribute.

### offset[int]

The position offset along the dimension specified by the dimmode attribute. (default = 0)

### slide\_down[float]

The slide down factor (default = 1). Note that down does not refer not to change along the y axis, but rather with respect to amplitude (e.g. brightness of color channel for image data).

### slide\_up[float]

The slide up factor (default = 1). Note that up does not refer not to change along the y axis, but rather with respect to amplitude (e.g. brightness of color channel for image data).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.op](https://docs.cycling74.com/reference/jit.op) | Apply binary or unary operators |
| [jit.slide](https://docs.cycling74.com/reference/jit.slide) | Cellwise temporal envelope follower |
| [slide](https://docs.cycling74.com/reference/slide) | Smooth values logarithmically |
| [slide~](https://docs.cycling74.com/reference/slide~) | Filter a signal logarithmically |
