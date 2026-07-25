---
type: mc
name: "mc.combine~"
summary: "Combine single inputs into a multichannel signal"
signal: true
url: "https://docs.cycling74.com/reference/mc.combine~/"
package: "MC"
see_also: ["mc.pack~", "mc.unpack~", "mc.resize~", "mc.separate~"]
---
# mc.combine~

Combine inputs into a multichannel signal

## Description

The [mc.combine~](https://docs.cycling74.com/reference/mc.combine~) object combines inputs (signals, multichannel signals, floats) into one multichannel signal. Unlike [mc.pack~](https://docs.cycling74.com/reference/mc.pack~), every channel of an input multichannel signal will be included in the output.

## Arguments

### number-of-inlets[int] optional

The first argument specifies the number of inlets. If no argument is present, the object will be created with two inlets.

## Attributes

### chans[int]

The chans attribute sets a fixed number of output channels. By default chans is 0, meaning the number of outputs is determined by the total channel count of signals connected to the inlets of [mc.combine~](https://docs.cycling74.com/reference/mc.combine~).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

An int message will set a constant value for a single channel in the output multichannel signal.

### float

A float message will set a constant value for a single channel in the output multichannel signal.

### list

A list message will set constant values for multiple channels. For instance, a list of three items will set constant values for three consecutive output channels starting at the output channel corresponding to the inlet receiving the list.

### mute

The message  mute 1  mutes all output channels,  mute 0  unmutes all output channels.

Arguments:

- on/off-flag
  [int]

### signal

You can send either a single-channel or a multi-channel signal to [mc.combine~](https://docs.cycling74.com/reference/mc.combine~).

## See Also

| Name | Description |
| --- | --- |
| [mc.pack~](https://docs.cycling74.com/reference/mc.pack~) | Combine single inputs into a multichannel signal |
| [mc.unpack~](https://docs.cycling74.com/reference/mc.unpack~) | Split a multichannel signal into single-channel signals |
| [mc.resize~](https://docs.cycling74.com/reference/mc.resize~) | Resize a multichannel signal using selected channels |
| [mc.separate~](https://docs.cycling74.com/reference/mc.separate~) | Split a multichannel signal |
