---
type: mc
name: "mc.dup~"
summary: "Create a multichannel signal that duplicates a single-channel input"
signal: true
url: "https://docs.cycling74.com/reference/mc.dup~/"
package: "MC"
see_also: ["mc.resize~", "mc.channelcount~", "mc.list~", "mc.pack~", "mc.separate~", "mc.unpack~"]
---
# mc.dup~

Create a multichannel signal that duplicates a single-channel input

## Description

The [mc.dup~](https://docs.cycling74.com/reference/mc.dup~) object creates multichannel signals from a single-channel signals by duplicating the input across all channels of the output.

## Arguments

### channel count[int] optional

Specify the number of channels in the duplicated multichannel output (default 2).

## Attributes

### chans[int]

Sets the number of output channels in the multichannel output. If chans is sent to the object when audio is on, the number of output channels will not change until the audio is turned off and back on again.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

A single-channel signal connected to the input will be duplicated across all of the [mc.dup~](https://docs.cycling74.com/reference/mc.dup~) object's output channels.

## See Also

| Name | Description |
| --- | --- |
| [mc.resize~](https://docs.cycling74.com/reference/mc.resize~) | Resize a multichannel signal using selected channels |
| [mc.channelcount~](https://docs.cycling74.com/reference/mc.channelcount~) | Report channel count |
| [mc.list~](https://docs.cycling74.com/reference/mc.list~) | Create a multichannel signal from a list of values |
| [mc.pack~](https://docs.cycling74.com/reference/mc.pack~) | Combine single inputs into a multichannel signal |
| [mc.separate~](https://docs.cycling74.com/reference/mc.separate~) | Split a multichannel signal |
| [mc.unpack~](https://docs.cycling74.com/reference/mc.unpack~) | Split a multichannel signal into single-channel signals |
