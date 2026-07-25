---
type: jitter
name: "jit.time.delta"
summary: "Outputs float time values using specified mode for realtime animation"
signal: false
url: "https://docs.cycling74.com/reference/jit.time.delta/"
package: "jit.mo"
see_also: ["jit.mo.join", "jit.mo.field", "jit.mo.func", "jit.anim.drive"]
---
# jit.time.delta

Outputs float time values using specified mode for realtime animation

## Description

Outputs float time values using specified mode for realtime animation. Can be used to generate control functions in sync with other jit.world and jit.mo objects, time delta between frames, or accumulated running time.

## Arguments

None.

## Attributes

### timevalue[float64] read-only

The current time or function value (readonly).

### start[float64]

Line function start (default = -1.0).

### offset[float64]

Output offset (default = 0.0).

### loop[long]

Enable and disable phase looping when animating (default = 1). Animation can be reset by setting phase to 0

### phase[float64]

Output phase offset (default = 0.0). Setting this to 0 will restart an animation

### fixed\_delta[float64]

Fixed frame delta time for calculating time output (default = 0.0). When non-zero, time functions will use this value to calculate output, rather than the delta time since last update.This can be useful when animating at a fixed rate regardless of the actual update rate.

### freq[float64]

Function frequency (default = 1.0). Specified in Hz

### delta[float64]

Frame delta time for animating graph (default = 0.0). When automatic enabled this value is set automatically by the render context.

### function[symbol]

The function type used when mode = function (default = line). Line generates linear interpolated values between start and end values, sin outputs a sine function, saw gives a phasor-like repeating ramp, and perlin uses a Perlin Noise function

### period[long]

The period length for the perlin noise function (default = 8).

### end[float64]

Line function end (default = 1.0).

### scale[float64]

Output multiplier (default = 1.0).

### interval[time]

Animation interval (default = 0 ms). This attribute uses the Max time format syntax, so the interval can be either fixed or tempo-relative.When set to a non-zero value, the speed attribute is no longer user settable, and will be automatically set based on the interval value.

### speed[float64]

Animation speed multiplier (default = 1.0).

### loopreport[long]

Enable animation loop reporting (default = 0). When enabled the symbol loopnotify is sent out the dumpout when the animation loops.

### rand\_amt[float64]

Scales the random offset value (default = 0.0).

### mode[symbol]

How time output is calculated (default = accum). The different modes are accum, function, and delta. Accum provides accumulated running time. Function uses the specified function attribute to generate a periodic function and can be used to generate float LFOs and ramps in sync with the animation graph. Delta gives the amount of time between frames, which is useful for driving smooth realtime animations.

### enable[long]

Enable function output (default = 1).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### update

Update and output the time or function value when in non-automatic mode.

### reset

Reset the accumulated time to 0.

## See Also

| Name | Description |
| --- | --- |
| [jit.mo.join](https://docs.cycling74.com/reference/jit.mo.join) | Combine jit.mo streams and output a multi-plane matrix |
| [jit.mo.field](https://docs.cycling74.com/reference/jit.mo.field) | Field manipulator for 3 plane jit.mo streams |
| [jit.mo.func](https://docs.cycling74.com/reference/jit.mo.func) | Generate animated single dim matrices using a specified function |
| [jit.anim.drive](https://docs.cycling74.com/reference/jit.anim.drive) | Animate a 3D transform |
