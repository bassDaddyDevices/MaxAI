---
type: ableton
name: "abl.dsp.simplefm~"
summary: "Two-operator FM oscillator"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.simplefm~/"
package: "Ableton DSP"
see_also: ["abl.dsp.fmbass~", "abl.dsp.foldfm~", "abl.dsp.harmonicfm~"]
---
# abl.dsp.simplefm~

Two-operator FM oscillator

## Description

A simple two-operator FM oscillator with one carrier and one modulator.

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

Fade through increasing modulator ratios. Internally, this fades nonlinearly from a ratio of
0.0 up to 8.0. [0., 1.]

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
| [abl.dsp.harmonicfm~](https://docs.cycling74.com/reference/abl.dsp.harmonicfm~) | Harmonic FM oscillator |
