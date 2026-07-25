---
type: mc
name: "mc.list~"
summary: "Create a multichannel signal from a list of values"
signal: true
url: "https://docs.cycling74.com/reference/mc.list~/"
package: "MC"
see_also: ["MC", "mc.channelcount~", "mc.dup~", "mc.pack~", "mc.resize~", "mc.unpack~", "mc.sig~"]
---
# mc.list~

Create a multichannel signal from a list of values

## Description

Use [mc.list~](https://docs.cycling74.com/reference/mc.list~) to create a multichannel signal from a list of values. The number of output channels is determined by the number of arguments provided to the object.

## Arguments

### initial values[list] optional

Specifies the initial values of each output channel. The number of arguments determines the number of channels in the output multichannel signal.

## Attributes

### chans[int]

Sets the size of the multichannel output. If the chans value is changed after the [mc.list~](https://docs.cycling74.com/reference/mc.list~) object is created, the change takes effect the next time audio is started or restarted.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Replaces the first value in the multichannel output.

### float

Replaces the first value in the multichannel output.

### list

A list replaces the values in the multichannel output. If the list is shorter than the number of output channels, it will leave remaining channels unchanged. If the list is longer than the number of output channels, the extra values will be ignored.

### signal

Combined multichannel output

## See Also

| Name | Description |
| --- | --- |
| [MC](https://docs.cycling74.com/userguide/mc) | MC |
| [mc.channelcount~](https://docs.cycling74.com/reference/mc.channelcount~) | Report channel count |
| [mc.dup~](https://docs.cycling74.com/reference/mc.dup~) | Create a multichannel signal that duplicates a single-channel input |
| [mc.pack~](https://docs.cycling74.com/reference/mc.pack~) | Combine single inputs into a multichannel signal |
| [mc.resize~](https://docs.cycling74.com/reference/mc.resize~) | Resize a multichannel signal using selected channels |
| [mc.unpack~](https://docs.cycling74.com/reference/mc.unpack~) | Split a multichannel signal into single-channel signals |
| [mc.sig~](https://docs.cycling74.com/reference/mc.sig~) | Convert numbers into audio signals (multichannel) |
