---
type: ableton
name: "abl.dsp.tides~"
summary: "Modulating algorithmic reverb"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.tides~/"
package: "Ableton DSP"
see_also: ["abl.device.reverb~", "abl.dsp.darkhall~", "abl.dsp.prism~", "abl.dsp.quartz~", "abl.dsp.shimmer~"]
---
# abl.dsp.tides~

Modulating algorithmic reverb

## Description

Algorithmic Tides reverb from Live's Hybrid Reverb device.

## Arguments

### decay[number] optional

Decay

### size[number] optional

Size

### damping[number] optional

Damping

## Attributes

### damping[float]

Controls the amount of filtering within the reverb algorithm. Higher values result in darker
reverberation sounds. [0., 1.]

### decay[float]

Adjusts the approximate time in seconds required for the algorithm's reverb tail to drop to
1/1000th (-60dB) of its initial amplitude. [0.1, 60.]

### freeze[int]

Sets the algorithm's decay time to infinity so that reverberation will sustain endlessly. Freezing
begins when this attribute is enabled and ends when disabled, so you will most likely want to toggle
this attribute while audio is being processed for it to take effect.

### freezein[int]

When enabled, new input signals are added to the frozen reverberation. When disabled, freeze will endlessly sustain the output of the reverb, and any additional input signals will not be
processed until freeze is turned off and then back on. This attribute is disabled by default.

### mix[float]

Sets the dry/wet mix of the output signal. [0., 1.]

### phase[float]

Adjusts the amount of offset between the modulation waveforms for the left and right channel.
At 180 degrees, the channels will be perfectly out of phase. [0., 180.]

### rate[float]

Sets the modulation rate in Hz. [0., 20000.]

### size[float]

Controls the size of the virtual room. [0., 1.]

### tides[float]

Adjusts the intensity of texture in the algorithm's reverb tail. [0., 1.]

### waveform[float]

Morphs the modulation waveform from noise to sine to square. [0., 1.]

### ins[symbol]

Declares additional inlets that can be used to control float-type attributes at either event or
signal rate. Any declared attributes already mapped to inlets will be ignored. This attribute can only
be set when the object is instantiated.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### float

Function depends on inlet

### reset

Reset

### signal

Function depends on inlet

## See Also

| Name | Description |
| --- | --- |
| [abl.device.reverb~](https://docs.cycling74.com/reference/abl.device.reverb~) | Plate reverb |
| [abl.dsp.darkhall~](https://docs.cycling74.com/reference/abl.dsp.darkhall~) | Dark hall reverb |
| [abl.dsp.prism~](https://docs.cycling74.com/reference/abl.dsp.prism~) | Prism reverb |
| [abl.dsp.quartz~](https://docs.cycling74.com/reference/abl.dsp.quartz~) | Quartz reverb |
| [abl.dsp.shimmer~](https://docs.cycling74.com/reference/abl.dsp.shimmer~) | Shimmer reverb |
