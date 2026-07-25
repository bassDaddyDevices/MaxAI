---
type: mc
name: "mc.separate~"
summary: "Split a multichannel signal"
signal: true
url: "https://docs.cycling74.com/reference/mc.separate~/"
package: "MC"
see_also: ["mc.unpack~", "mc.combine~", "mc.deinterleave~", "mc.resize~"]
---
# mc.separate~

Split a multichannel signal

## Description

The [mc.separate~](https://docs.cycling74.com/reference/mc.separate~) object splits a multichannel signal into two or more multichannel signals with specific channel counts.

## Arguments

### channels per outlet[int] optional

Each argument to [mc.separate~](https://docs.cycling74.com/reference/mc.separate~) creates an outlet whose output multichannel signal will contain the number of channels specified by that argument. If no arguments are present, two oulets will be generated; the left outlet will have a multichannel signal with two channels. Any remaining channels from the input will be contained in the right outlet's multichannel signal.

## Attributes

### chans[atom]

Sets the number of output channels in the multichannel output. If chans is sent to the object when audio is on, the number of output channels will not change until the audio is turned off and back on again.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

Input to Separate

## See Also

| Name | Description |
| --- | --- |
| [mc.unpack~](https://docs.cycling74.com/reference/mc.unpack~) | Split a multichannel signal into single-channel signals |
| [mc.combine~](https://docs.cycling74.com/reference/mc.combine~) | Combine inputs into a multichannel signal |
| [mc.deinterleave~](https://docs.cycling74.com/reference/mc.deinterleave~) | Deinterleave a multichannel audio signal |
| [mc.resize~](https://docs.cycling74.com/reference/mc.resize~) | Resize a multichannel signal using selected channels |
