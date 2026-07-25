---
type: ableton
name: "abl.dsp.shimmer~"
summary: "Shimmer reverb"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.shimmer~/"
package: "Ableton DSP"
see_also: ["abl.device.reverb~", "abl.dsp.darkhall~", "abl.dsp.prism~", "abl.dsp.quartz~", "abl.dsp.tides~"]
---
# abl.dsp.shimmer~

Shimmer reverb

## Description

Algorithmic Shimmer reverb from Live's Hybrid Reverb device.

## Arguments

### decay[number] optional

Decay

### size[number] optional

Size

### damping[number] optional

Damping

### diffusion[number] optional

Diffusion

### mod[number] optional

Modulation amount

## Attributes

### damping[float]

Controls the amount of filtering within the reverb algorithm. Higher values result in darker
reverberation sounds. [0., 1.]

### decay[float]

Adjusts the approximate time in seconds required for the algorithm's reverb tail to drop to
1/1000th (-60dB) of its initial amplitude. [0.1, 60.]

### diffusion[float]

Controls the density of the algorithm's reverb tail. Low values produce sparser tails while
higher values produce denser tails. [0., 1.]

### freeze[int]

Sets the algorithm's decay time to infinity so that reverberation will sustain endlessly. Freezing
begins when this attribute is enabled and ends when disabled, so you will most likely want to toggle
this attribute while audio is being processed for it to take effect.

### freezein[int]

When enabled, new input signals are added to the frozen reverberation. When disabled, freeze will endlessly sustain the output of the reverb, and any additional input signals will not be
processed until freeze is turned off and then back on. This attribute is disabled by default.

### mix[float]

Sets the dry/wet mix of the output signal. [0., 1.]

### mod[float]

Controls the amount of movement within the algorithm's reverb tail. Less modulation produces
less movement, and more modulation adds more movement with a chorusing effect. [0., 1.]

### pitchshift[float]

Adjusts the amount of pitch-shifting applied to the feedback in semitones. [-12., 12.]

### shimmer[float]

Adjusts the intensity of the shimmer effect. When disabled (0.0), there is no pitch adjustment;
when enabled, the level of the pitched signal is progressively more present. [0., 1.]

### size[float]

Controls the size of the virtual room. [0., 1.]

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
| [abl.dsp.tides~](https://docs.cycling74.com/reference/abl.dsp.tides~) | Modulating algorithmic reverb |
