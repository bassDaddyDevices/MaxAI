---
type: mc
name: "mc.deinterleave~"
summary: "Deinterleave a multichannel audio signal"
signal: true
url: "https://docs.cycling74.com/reference/mc.deinterleave~/"
package: "MC"
see_also: ["MC Channel Topology", "MC", "mc.interleave~", "mc.resize~", "mc.separate~", "mc.transpose~", "mc.unpack~"]
---
# mc.deinterleave~

Deinterleave a multichannel audio signal

## Description

The [mc.deinterleave~](https://docs.cycling74.com/reference/mc.deinterleave~) object separates a multichannel signal into two or more deinterleaved multichannel signals.

## Arguments

### outputs[int] optional

Number of outlets

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

A multichannel signal will be separated into two or more multichannel signals. Channels from the input will be assigned in turn to each of the output channels in left-to-right order. For example, given a 10 channel input and three outputs, the left output will contain channels 1, 4, 7, and 10 from the input; the middle output will contain channels 2, 5, and 8; and the right output will contain channels 3, 6, and 9.

## See Also

| Name | Description |
| --- | --- |
| [MC Channel Topology](https://docs.cycling74.com/userguide/mc/mc_channel_topology) | MC Channel Topology |
| [MC](https://docs.cycling74.com/userguide/mc) | MC |
| [mc.interleave~](https://docs.cycling74.com/reference/mc.interleave~) | Interleave two or more multichannel signals |
| [mc.resize~](https://docs.cycling74.com/reference/mc.resize~) | Resize a multichannel signal using selected channels |
| [mc.separate~](https://docs.cycling74.com/reference/mc.separate~) | Split a multichannel signal |
| [mc.transpose~](https://docs.cycling74.com/reference/mc.transpose~) | Reorganize multichannel signals |
| [mc.unpack~](https://docs.cycling74.com/reference/mc.unpack~) | Split a multichannel signal into single-channel signals |
