---
type: mc
name: "mc.pack~"
summary: "Combine single inputs into a multichannel signal"
signal: true
url: "https://docs.cycling74.com/reference/mc.pack~/"
package: "MC"
see_also: ["MC Signal Manipulation Objects", "MC", "join", "mc.combine~", "mc.resize~", "mc.separate~", "mc.unpack~", "pack", "pak", "unjoin", "unpack"]
---
# mc.pack~

Combine single inputs into a multichannel signal

## Description

The [mc.pack~](https://docs.cycling74.com/reference/mc.pack~) object combines inputs (signals, multichannel signals, floats) into a multi-channel signal. Unlike [mc.combine~](https://docs.cycling74.com/reference/mc.combine~), [mc.pack~](https://docs.cycling74.com/reference/mc.pack~) creates an output multichannel signal that contains exactly the number of channels as its number of inlets.

## Arguments

### size[int] optional

The argument to [mc.pack~](https://docs.cycling74.com/reference/mc.pack~) determines both the count of inlets and channels in its output multichannel signal.

## Attributes

### chans[int]

If the chans attribute is set to a value smaller than the number of inlets of [mc.pack](https://docs.cycling74.com/reference/mc.pack), extra channels will be removed from the multichannel output the next time the audio is restarted. By default, the chans attribute is set to 0, which means the output channel count is always equal to the number of inlets.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

An incoming number is converted a constant value within the output multichannel signal.

### float

An incoming number is converted a constant value within the output multichannel signal.

### list

The first value of the list is converted to a constant value within the output multichannel signal.

### mute

The word  mute , followed by a 1 or 0, will mute or unmute the output of [mc.pack~](https://docs.cycling74.com/reference/mc.pack~). When muted, all output channels are set to zero.

Arguments:

- state
  [int]

### signal

A single-channel signal or the first channel of a multichannel signal is copied to the output multichannel signal at the channel position correponding to its inlet.

## See Also

| Name | Description |
| --- | --- |
| [MC Signal Manipulation Objects](https://docs.cycling74.com/userguide/mc/mc_signals_newobjects) | MC Signal Manipulation Objects |
| [MC](https://docs.cycling74.com/userguide/mc) | MC |
| [join](https://docs.cycling74.com/reference/join) | Combine items into a list |
| [mc.combine~](https://docs.cycling74.com/reference/mc.combine~) | Combine inputs into a multichannel signal |
| [mc.resize~](https://docs.cycling74.com/reference/mc.resize~) | Resize a multichannel signal using selected channels |
| [mc.separate~](https://docs.cycling74.com/reference/mc.separate~) | Split a multichannel signal |
| [mc.unpack~](https://docs.cycling74.com/reference/mc.unpack~) | Split a multichannel signal into single-channel signals |
| [pack](https://docs.cycling74.com/reference/pack) | Create a list |
| [pak](https://docs.cycling74.com/reference/pak) | Output a list when any element changes |
| [unjoin](https://docs.cycling74.com/reference/unjoin) | Break a list into messages |
| [unpack](https://docs.cycling74.com/reference/unpack) | Break a list into individual messages |
