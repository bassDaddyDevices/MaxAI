---
type: jitter
name: "jit.mo.line"
summary: "Generate animated single dim matrices using a specified function"
signal: false
url: "https://docs.cycling74.com/reference/jit.mo.line/"
package: "jit.mo"
see_also: ["jit.mo.join", "jit.mo.field", "jit.mo.time", "jit.anim.drive", "jit.anim.path"]
---
# jit.mo.line

Generate animated single dim matrices using a specified function

## Description

Generate animated single dim matrices using a specified function. Similar in nature to a sound oscillator, jit.mo.func can generate time-varying cell values across a matrix based on a given function.

## Arguments

### Dimension[number] optional

Set the dimension (number of elements) of the output matrix. Will be overriden if to attached [jit.mo.join](https://docs.cycling74.com/reference/jit.mo.join) object via the join attribute. jit.mo objects only support matrices with a dimcount of 1.

## Attributes

### rand\_amt[float64]

Scales the random offset value (default = 0.0).

### start[float64]

Line function start (default = -1.0).

### join[symbol]

Sets the [jit.mo.join](https://docs.cycling74.com/reference/jit.mo.join) object binding. When set, animation parameters are controlled by the named object.

### function[symbol]

The function type used for generating matrices. Available functypes are line, sin, saw, tri, perlin

### delta[float64]

Frame delta time for animating graph (default = 0.0). When bound to [jit.mo.join](https://docs.cycling74.com/reference/jit.mo.join) this value is set automatically.

### offset[float64]

Output offset (default = 0.0).

### loop[long]

Enable and disable phase looping when animating (default = 1). Non-looped animation can be reset by setting phase to 0

### phase[float64]

Output phase offset (default = 0.0).

### period[long]

The period length for the perlin noise function (default = 8).

### scale[float64]

Output multiplier (default = 1.0).

### end[float64]

Line function end (default = 1.0).

### speed[float64]

Animation speed multiplier (default = 0.0).

### loopreport[long]

Enable animation loop reporting (default = 0). When enabled the symbol loopnotify is sent out the dumpout when the animation loops.

### freq[float64]

Output frequency (default = 1.0). Number of times the function is repeated over the width of the matrix

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### rand

Generate new random values for rand\_amt offset.

## See Also

| Name | Description |
| --- | --- |
| [jit.mo.join](https://docs.cycling74.com/reference/jit.mo.join) | Combine jit.mo streams and output a multi-plane matrix |
| [jit.mo.field](https://docs.cycling74.com/reference/jit.mo.field) | Field manipulator for 3 plane jit.mo streams |
| [jit.mo.time](https://docs.cycling74.com/reference/jit.mo.time) | Outputs float time values using specified mode for realtime animation |
| [jit.anim.drive](https://docs.cycling74.com/reference/jit.anim.drive) | Animate a 3D transform |
| [jit.anim.path](https://docs.cycling74.com/reference/jit.anim.path) | Evaluate a path of 3D transform points |
