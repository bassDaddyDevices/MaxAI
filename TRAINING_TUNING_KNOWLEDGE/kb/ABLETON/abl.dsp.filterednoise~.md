---
type: ableton
name: "abl.dsp.filterednoise~"
summary: "Filtered noise generator"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.filterednoise~/"
package: "Ableton DSP"
see_also: ["abl.dsp.noiseloop~", "abl.dsp.noisyshapes~"]
---
# abl.dsp.filterednoise~

Filtered noise generator

## Description

A noise generator with a resonant bandpass filter.

## Arguments

### frequency[number] optional

Frequency

### offset[number] optional

Offset center frequency

### narrow[number] optional

Narrowness of the pass band

## Attributes

### frequency[float]

Sets the center frequency of the bandpass filter Hz. [0., 20500.]

### narrow[float]

Sets the narrowness of the bandpass filter. As the value approaches 1.0, the bandwidth
decreases to zero and resonance is added to increase the peak. [0., 1.]

### offset[float]

Offset the center frequency of the band-limited noise. [0., 1.]

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
| [abl.dsp.noiseloop~](https://docs.cycling74.com/reference/abl.dsp.noiseloop~) | Noise buffer looper |
| [abl.dsp.noisyshapes~](https://docs.cycling74.com/reference/abl.dsp.noisyshapes~) | Noisy dual basic shape oscillator |
