---
type: mc
name: "mc.channelcount~"
summary: "Report channel count"
signal: true
url: "https://docs.cycling74.com/reference/mc.channelcount~/"
package: "MC"
see_also: ["MC", "dspstate~"]
---
# mc.channelcount~

Report channel count

## Description

[mc.channelcount~](https://docs.cycling74.com/reference/mc.channelcount~) outputs the number of channels in a multichannel signal connected to its inlet. Any message sent to its inlet triggers the channel count out its left outlet. A signal reports the channel count out the right outlet when the audio is turned on.

## Arguments

None.

## Attributes

### active[int]: 0

WHen active is enabled, [mc.channelcount~](https://docs.cycling74.com/reference/mc.channelcount~) outputs the current channel count out the left outlet whenever audio is turned on.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Triggers output containing the number of channels in a connected multichannel patch cord out the left outlet.

### int

Triggers output containing the number of channels in a connected multichannel patch cord out the left outlet.

### float

Triggers output containing the number of channels in a connected multichannel patch cord out the left outlet.

### anything

Triggers output containing the number of channels in a connected multichannel patchcord out the left outlet.

### signal

The single- or multichannel signal input whose channel count will be reported.

## See Also

| Name | Description |
| --- | --- |
| [MC](https://docs.cycling74.com/userguide/mc) | MC |
| [dspstate~](https://docs.cycling74.com/reference/dspstate~) | Report current DSP settings |
