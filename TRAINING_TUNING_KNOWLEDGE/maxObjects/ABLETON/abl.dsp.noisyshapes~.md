---
type: ableton
name: "abl.dsp.noisyshapes~"
summary: "Noisy dual basic shape oscillator"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.noisyshapes~/"
package: "Ableton DSP"
see_also: ["abl.dsp.basicshapes~", "abl.dsp.dualbasicshapes~"]
---
# abl.dsp.noisyshapes~

Noisy dual basic shape oscillator

## Description

A dual basic shape oscillator with noise bursts and waveshaping.

## Arguments

### frequency[number] optional

Frequency

### shape[number] optional

Waveform shape

### rough[number] optional

Rough

## Attributes

### frequency[float]

Sets the oscillator frequency in Hz. [0., 20500.]

### rough[float]

Adds noise, distortion, and a sub-oscillator. [0., 1.]

### shape[float]

Morphs through the basic waveforms: sine, triangle, saw, square. [0., 1.]

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
| [abl.dsp.basicshapes~](https://docs.cycling74.com/reference/abl.dsp.basicshapes~) | Basic shape oscillator |
| [abl.dsp.dualbasicshapes~](https://docs.cycling74.com/reference/abl.dsp.dualbasicshapes~) | Dual basic shape oscillator |
