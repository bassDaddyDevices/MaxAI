---
type: ableton
name: "abl.dsp.harmonicfm~"
summary: "Harmonic FM oscillator"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.harmonicfm~/"
package: "Ableton DSP"
see_also: ["abl.dsp.fmbass~", "abl.dsp.foldfm~", "abl.dsp.simplefm~"]
---
# abl.dsp.harmonicfm~

Harmonic FM oscillator

## Description

A macro oscillator that smoothly fades between FM oscillators with increasing modulator ratios.

## Arguments

### frequency[number] optional

Frequency

### amount[number] optional

FM amount

### ratio[number] optional

FM ratio

## Attributes

### amount[float]

Sets the amount of modulation. [0., 1.]

### frequency[float]

Sets the oscillator frequency in Hz. [0., 20500.]

### ratio[float]

Fades through increasing modulator ratios. Note that this fades between a predefined set of
ratios, so the available range of this attribute is 0.0 to 1.0. Values below 0.5 produce subharmonics.
[0., 1.]

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
| [abl.dsp.fmbass~](https://docs.cycling74.com/reference/abl.dsp.fmbass~) | Three operator FM oscillator |
| [abl.dsp.foldfm~](https://docs.cycling74.com/reference/abl.dsp.foldfm~) | Wavefolding FM oscillator |
| [abl.dsp.simplefm~](https://docs.cycling74.com/reference/abl.dsp.simplefm~) | Two-operator FM oscillator |
