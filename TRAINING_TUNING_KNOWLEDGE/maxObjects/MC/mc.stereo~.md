---
type: mc
name: "mc.stereo~"
summary: "Mix and pan a multichannel signal"
signal: true
url: "https://docs.cycling74.com/reference/mc.stereo~/"
package: "MC"
see_also: ["MC Channel Topology", "MC Mixing and Panning", "MC Hardware Interfacing", "mc.dac~", "mc.live.gain~", "gain~", "mc.op~"]
---
# mc.stereo~

Mix and pan a multichannel signal

## Description

The [mc.mixdown~](https://docs.cycling74.com/reference/mc.mixdown~) object mixes channels in a multichannel signal connected to its left inlet to a multichannel output. [mc.mixdown~](https://docs.cycling74.com/reference/mc.mixdown~) can use a signal connected to its right inlet to pan the channels of its left (mix) input signal.

## Arguments

### output-channel-count[int] optional

An optional argument sets the number of channels in the multichannel output signal (default 2).

## Attributes

### activechans[int]

Setting the activechans attribute reduces the number of channels that will be used for mixing. Extra channels will be set to zero. Use of activechans provides a way to set different output mix channel counts without repatching. For example, you could switch your patch from multichannel to stereo output by using an [mc.mixdown~](https://docs.cycling74.com/reference/mc.mixdown~) object with an argument of 5, then setting activechans to 2 at runtime.

### autogain[int]: 0

When autogain is enabled, overall gain is scaled by the number of output channels (as determined by the activechans attribute) divided by the number of input channels.

### busymapname[symbol]

Alias:
bzname

When the usebusymap attribute is enabled, [mc.mixdown~](https://docs.cycling74.com/reference/mc.mixdown~) uses the local busy map of any [mc.voiceallocator~](https://docs.cycling74.com/reference/mc.voiceallocator~) or [mc.noteallocator~](https://docs.cycling74.com/reference/mc.noteallocator~) object in the same patcher by default. To use a named global busy map instead, set the busymapname attribute to the desired name.

### chans[int]

Sets the number of output channels in the multichannel output. If chans is sent to the object when audio is on, the number of output channels will not change until the audio is turned off and back on again.

### linearpanmode[int]: 0

When enabled, [mc.mixdown~](https://docs.cycling74.com/reference/mc.mixdown~) applies a linear pan scaling factor to all input channels. This scaling factor is set by the linearpanscalefactor attribute (default 1). When linearpanmode is disabled (the default), [mc.mixdown~](https://docs.cycling74.com/reference/mc.mixdown~) applies a constant power pan scale factor (square root of 2 over 2).

### linearpanscalefactor[float]: 1.

Sets the panning scale factor to apply to all input channels when linearpanmode is enabled (default 1).

### pancontrolmode[int]: 0

The pancontrolmode determines how [mc.mixdown~](https://docs.cycling74.com/reference/mc.mixdown~) interprets values in its pan input signal. In all pan control modes, values outside the specified range are wrapped around to be within the range.

Possible values:

0 = 'Circle (0 - 1)'

When pancontrolmode is 0 (default), [mc.mixdown~](https://docs.cycling74.com/reference/mc.mixdown~) interprets pan values in a circular map with 0.5 defined as the "front" position between the two middle channels (if there are an even number of output channels) or the center channel (if there are an odd number of output channels). For stereo output, panning all the way to the left (channel 1) is at 0.25 and panning all the way to the right (channel 2) is at 0.75. For higher output channel counts, exact pan for a specific channel can be calculated by dividing 1 by twice the number of output channels and then using odd numbers for the value of the numerator. For example, for 4 channels, the exact pan for channel 1 is at 1/8 (0.125), channel 2 is at 3/8 (0.375), channel 3 is at 5/8 (0.625), and channel 4 is at 7/8 (0.875). (If all this math seems daunting, look at the other pancontrolmode settings below.)

1 = 'Line (0 - 1)'

When pancontrolmode is 1, all channels are arranged in a line with panning to the first channel at 0 and the last channel at 1. This prevents any panning between the first and last channel in a case where the number of outputs are larger than 2. However, for the 2-channel output case where this is not an issue, it is often more convenient to produce a signal where 0 represents channel 1 and 1 represents channel 2.

2 = 'Line (1 - N)'

When pancontrolmode is 2, all channels are arranged in a line with panning to the first channel at 1 and the last channel when the the pan value is equal to the output channel count. This prevents any panning between the first and last channel in a case where the number of outputs are larger than 2.

3 = 'Circle (0 - N)'

When pancontrolmode is 3, [mc.mixdown~](https://docs.cycling74.com/reference/mc.mixdown~) interprets pan values in a circular map where panning only to each output channel is represented by a whole number. Values between 0 and 1 represent a pan position between the first and last output channels.

### pans[atom]

Pan Values

### usebusymap[int]

Alias:
bz

When usebusymap is enabled, [mc.mixdown~](https://docs.cycling74.com/reference/mc.mixdown~) will not mix non-busy channels in its mix input. This can increase efficiency and avoid unpleasant noise when mixing channels that are not set to zero. Note that the way [mc.mixdown~](https://docs.cycling74.com/reference/mc.mixdown~) uses the busy map is somewhat different from the way the MC wrapper uses it, but the two systems are designed to work together.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

In left inlet: a multichannel signal to mix

In right inlet: a single- or multichannel signal with pan information

Without a signal connected to the right inlet, [mc.mixdown~](https://docs.cycling74.com/reference/mc.mixdown~) alternates input channels to output channels (output channel 1 contains inputs 1, 3, 5, ... and output channel 2 contains input 2, 4, 6...). With a signal connected to the right inlet, [mc.mixdown~](https://docs.cycling74.com/reference/mc.mixdown~) performs N-way panning. The pan behavior is determined by the linearpanmode, pancontrolmode, and activechans attributes.

## See Also

| Name | Description |
| --- | --- |
| [MC Channel Topology](https://docs.cycling74.com/userguide/mc/mc_channel_topology) | MC Channel Topology |
| [MC Mixing and Panning](https://docs.cycling74.com/userguide/mc/mc_mixing_panning) | MC Mixing and Panning |
| [MC Hardware Interfacing](https://docs.cycling74.com/userguide/audio_channels?panchor=mc-hardware-interfacing) | MC Hardware Interfacing |
| [mc.dac~](https://docs.cycling74.com/reference/mc.dac~) | Multichannel audio output and on/off |
| [mc.live.gain~](https://docs.cycling74.com/reference/mc.live.gain~) | Decibel volume slider and monitor |
| [gain~](https://docs.cycling74.com/reference/gain~) | Gain control |
| [mc.op~](https://docs.cycling74.com/reference/mc.op~) | Apply arithmetic operators to a multichannel signal |
