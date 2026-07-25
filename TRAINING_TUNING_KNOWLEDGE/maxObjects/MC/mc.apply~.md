---
type: mc
name: "mc.apply~"
summary: "Apply a Function to a Multichannel Signal"
signal: true
url: "https://docs.cycling74.com/reference/mc.apply~/"
package: "MC"
see_also: ["function", "mc.function", "mc.gradient~", "mc.range~", "phasor~"]
---
# mc.apply~

Apply a Function to a Multichannel Signal

## Description

The [mc.apply~](https://docs.cycling74.com/reference/mc.apply~) object accepts a breakpoint function in the same format as [line~](https://docs.cycling74.com/reference/line~) and applies it over the space of channels of a multi-channel signal. Each channel contains a sample of the function evenly divided in the X dimension. In addition, [mc.apply~](https://docs.cycling74.com/reference/mc.apply~) can store up to 64 functions, edited by [mc.function](https://docs.cycling74.com/reference/mc.function), which you can recall and continuously interpolate using a signal input.

## Arguments

### channels[int] optional

Sets the number of output channels in the multi-channel signal. The default value is 1.

## Attributes

### chans[int]

Sets the number of output channels in the multi-channel signal. When chans is set as a typed-in argument or when the audio is turned off, the change is reflected immediately. If chans is changed while the audio is on, the change is reflected the next time audio is restarted.

### functions[int]

Sets the number of stored functions. This attribute can only be set as a typed-in argument; it cannot be changed after the object is created.

### ramptime[float]

Sets the ramp time between changes in the output in milliseconds. Note that large ramp time values may cause unpredictable behavior when driving continuous interpolation between functions with a signal input.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: Sets function number to output (starting at 0); only has an effect when there is no signal connected to the left inlet.

In middle inlet: Set the initial Y value of the breakpoint function (at time 0). However until a list is received, the function won't be changed.

In right inlet: Sets the function number that will be modified by a subsequent  list  message of breakpoints received in the middle inlet.

### float

In left inlet: Sets function number to output (starting at 0); only has an effect when there is no signal connected to the left inlet. A  float  with a fractional part performs interpolation between two functions.

In middle inlet: Set the initial Y value of the breakpoint function (at time 0). However until a list is received, the function won't be changed.

In right inlet: Sets the function number that will be modified by a subsequent  list  message of breakpoints received in the middle inlet.

### list

In middle inlet: A list of breakpoints in [line~](https://docs.cycling74.com/reference/line~) format (as output by the [function](https://docs.cycling74.com/reference/function) object) defines a function for [mc.apply~](https://docs.cycling74.com/reference/mc.apply~) to apply across a space of output channels. The list should consist of alternating value, time pairs. The function is applied such that the beginning (at 0) maps to the first output channel and the end maps to the last output channel.

### signal

Specifies the index of the stored function to output, where 0 represents the first function. A number with a fractional part will interpolate between functions, so 0.5 will be halfway between the first and second stored. By sending a ramp into the inlet inlet of [mc.apply~](https://docs.cycling74.com/reference/mc.apply~) you can continuously morph between two functions.

## See Also

| Name | Description |
| --- | --- |
| [function](https://docs.cycling74.com/reference/function) | Breakpoint function editor |
| [mc.function](https://docs.cycling74.com/reference/mc.function) | Breakpoint function editor |
| [mc.gradient~](https://docs.cycling74.com/reference/mc.gradient~) | Generate a time-varying function over the space of a multichannel signal |
| [mc.range~](https://docs.cycling74.com/reference/mc.range~) | Generate a multichannel signal with a range of constant values |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
