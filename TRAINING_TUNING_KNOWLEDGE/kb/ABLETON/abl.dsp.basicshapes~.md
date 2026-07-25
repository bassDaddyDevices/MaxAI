---
type: ableton
name: "abl.dsp.basicshapes~"
summary: "Basic shape oscillator"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.basicshapes~/"
package: "Ableton DSP"
see_also: ["abl.dsp.dualbasicshapes~", "abl.dsp.meldosc~", "abl.dsp.noisyshapes~"]
---
# abl.dsp.basicshapes~

Basic shape oscillator

## Description

An oscillator which fades between basic shapes (sine, triangle, saw, square).

## Arguments

### frequency[number] optional

Frequency

### shape[number] optional

Wave shape

### effect[number] optional

Effect

## Attributes

### effect[float]

The effect attribute changes depending on the waveform shape. Sine and triangle shapes
receive wavefolding, saw mixes in a second saw with phase offset, and pulse changes its pulsewidth. [0.,
1.]

### frequency[float]

Sets the oscillator frequency in Hz. [0., 20500.]

### shape[float]

Fades between sine, triangle, saw, and pulse wave shapes. [0., 1.]

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
| [abl.dsp.dualbasicshapes~](https://docs.cycling74.com/reference/abl.dsp.dualbasicshapes~) | Dual basic shape oscillator |
| [abl.dsp.meldosc~](https://docs.cycling74.com/reference/abl.dsp.meldosc~) | Meta-oscillator |
| [abl.dsp.noisyshapes~](https://docs.cycling74.com/reference/abl.dsp.noisyshapes~) | Noisy dual basic shape oscillator |
