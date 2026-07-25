---
type: mc
name: "mc.interleave~"
summary: "Interleave two or more multichannel signals"
signal: true
url: "https://docs.cycling74.com/reference/mc.interleave~/"
package: "MC"
see_also: ["MC Channel Topology", "MC", "mc.deinterleave~", "mc.transpose~", "mc.pack~", "mc.resize~", "mc.combine~", "mc.mixdown~"]
---
# mc.interleave~

Interleave two or more multichannel signals

## Description

The [mc.interleave~](https://docs.cycling74.com/reference/mc.interleave~) object combines two or more multichannel signals into a single multichannel signal by interleaving channels. This is useful for re-combining stereo pairs from MC sample playback objects prior to sending to [mc.mixdown~](https://docs.cycling74.com/reference/mc.mixdown~) or [mc.stereo~](https://docs.cycling74.com/reference/mc.stereo~).

## Arguments

### inputs[int] optional

Number of inlets (default 2)

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

The output multichannel signal will combine two or more input signals by using channels from each inlet in order from left to right. For example, if there are two inputs A and B with four channels each, the output will have eight channels consisting of A1, B1, A2, B2, A3, B3, A4, and B4.

## See Also

| Name | Description |
| --- | --- |
| [MC Channel Topology](https://docs.cycling74.com/userguide/mc/mc_channel_topology) | MC Channel Topology |
| [MC](https://docs.cycling74.com/userguide/mc) | MC |
| [mc.deinterleave~](https://docs.cycling74.com/reference/mc.deinterleave~) | Deinterleave a multichannel audio signal |
| [mc.transpose~](https://docs.cycling74.com/reference/mc.transpose~) | Reorganize multichannel signals |
| [mc.pack~](https://docs.cycling74.com/reference/mc.pack~) | Combine single inputs into a multichannel signal |
| [mc.resize~](https://docs.cycling74.com/reference/mc.resize~) | Resize a multichannel signal using selected channels |
| [mc.combine~](https://docs.cycling74.com/reference/mc.combine~) | Combine inputs into a multichannel signal |
| [mc.mixdown~](https://docs.cycling74.com/reference/mc.mixdown~) | Mix and pan a multichannel signal |
