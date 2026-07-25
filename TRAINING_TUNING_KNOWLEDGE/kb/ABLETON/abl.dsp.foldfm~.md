---
type: ableton
name: "abl.dsp.foldfm~"
summary: "Wavefolding FM oscillator"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.foldfm~/"
package: "Ableton DSP"
see_also: ["abl.dsp.fmbass~", "abl.dsp.harmonicfm~", "abl.dsp.simplefm~", "abl.dsp.subosc~"]
---
# abl.dsp.foldfm~

Wavefolding FM oscillator

## Description

An oscillator that mixes FM, waveshaping and wavefolding.

## Arguments

### frequency[number] optional

Frequency

### mod[number] optional

Modulation amount

### shape[number] optional

Shaping amount

## Attributes

### frequency[float]

Sets the oscillator frequency in Hz. [0., 20500.]

### mod[float]

Scales the overall modulation amount. [0., 1.]

### shape[float]

Scales the overall waveshaping and wavefolding amount. [0., 1.]

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
| [abl.dsp.harmonicfm~](https://docs.cycling74.com/reference/abl.dsp.harmonicfm~) | Harmonic FM oscillator |
| [abl.dsp.simplefm~](https://docs.cycling74.com/reference/abl.dsp.simplefm~) | Two-operator FM oscillator |
| [abl.dsp.subosc~](https://docs.cycling74.com/reference/abl.dsp.subosc~) | Oscillator with sub bass |
