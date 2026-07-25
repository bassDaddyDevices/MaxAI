---
type: jitter
name: "jit.slide"
summary: "Cellwise temporal envelope follower"
signal: false
url: "https://docs.cycling74.com/reference/jit.slide/"
package: "Jitter"
see_also: ["jit.scanslide", "slide", "slide~"]
---
# jit.slide

Cellwise temporal envelope follower

## Description

The [jit.slide](https://docs.cycling74.com/reference/jit.slide) object performs cellwise temporal envelope following.`

#### Discussion

The [jit.slide](https://docs.cycling74.com/reference/jit.slide) object uses the equation

y(n) = y (n-1) + ((x (n) - y (n-1))/slide)

For example, given a slide up/down value of 1, the output will always equal the input. Given a slide value of 10, the slide up/down value output will only change 1/10th as quickly as the input.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### slide\_down[float]

The slide down factor (default = 1.) Note that down refers not to spatial change along the y axis, but rather with respect to amplitude (e.g. brightness of color channel for image data).

### slide\_up[float]

The slide up factor (default = 1.) Note that up refers not to spatial change along the y axis, but rather with respect to amplitude (e.g. brightness of color channel for image data).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.scanslide](https://docs.cycling74.com/reference/jit.scanslide) | Cellwise spatial envelope follower |
| [slide](https://docs.cycling74.com/reference/slide) | Smooth values logarithmically |
| [slide~](https://docs.cycling74.com/reference/slide~) | Filter a signal logarithmically |
