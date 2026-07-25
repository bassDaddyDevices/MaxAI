---
type: ableton
name: "abl.dsp.noiseloop~"
summary: "Noise buffer looper"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.noiseloop~/"
package: "Ableton DSP"
see_also: ["abl.dsp.extratone~", "abl.dsp.filterednoise~", "abl.dsp.noisyshapes~"]
---
# abl.dsp.noiseloop~

Noise buffer looper

## Description

An oscillator that loops a noise buffer at fast rates to produce granular-esque tonal sounds.

## Arguments

### frequency[number] optional

Frequency

### rate[number] optional

Rate

### fade[number] optional

Fade

## Attributes

### fade[float]

Sets the smoothness of transitions between the noise loops. [0., 1.]

### frequency[float]

Sets the frequency of the noise loop by controlling the period of the noise loop. [0., 20500.]

### rate[float]

Sets the rate at which the windows of different noise loops occur. [0., 1.]

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
| [abl.dsp.extratone~](https://docs.cycling74.com/reference/abl.dsp.extratone~) | Granular-esque kick drum tone oscillator |
| [abl.dsp.filterednoise~](https://docs.cycling74.com/reference/abl.dsp.filterednoise~) | Filtered noise generator |
| [abl.dsp.noisyshapes~](https://docs.cycling74.com/reference/abl.dsp.noisyshapes~) | Noisy dual basic shape oscillator |
