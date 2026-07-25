---
type: ableton
name: "abl.dsp.prism~"
summary: "Prism reverb"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.prism~/"
package: "Ableton DSP"
see_also: ["abl.device.reverb~", "abl.dsp.darkhall~", "abl.dsp.quartz~", "abl.dsp.shimmer~", "abl.dsp.tides~"]
---
# abl.dsp.prism~

Prism reverb

## Description

Algorithmic Prism reverb from Live's Hybrid Reverb device.

## Arguments

### decay[number] optional

Decay

### size[number] optional

Size

## Attributes

### crossover[float]

Controls the crossover frequency between the low-frequency and high-frequency portions of the
reverb tail which in turn adjusts the frequency content affected by the lowmult and highmult attributes.
[400., 5500.]

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

### highmult[float]

Scales the decay time of the high-end of the reverb tail. [0.1, 5.]

### lowmult[float]

Scales the decay time of the low-end of the reverb tail. [0.1, 5.]

### mix[float]

Sets the dry/wet mix of the output signal. [0., 1.]

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
| [abl.dsp.quartz~](https://docs.cycling74.com/reference/abl.dsp.quartz~) | Quartz reverb |
| [abl.dsp.shimmer~](https://docs.cycling74.com/reference/abl.dsp.shimmer~) | Shimmer reverb |
| [abl.dsp.tides~](https://docs.cycling74.com/reference/abl.dsp.tides~) | Modulating algorithmic reverb |
