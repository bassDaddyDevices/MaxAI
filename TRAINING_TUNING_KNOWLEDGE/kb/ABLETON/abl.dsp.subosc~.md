---
type: ableton
name: "abl.dsp.subosc~"
summary: "Oscillator with sub bass"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.subosc~/"
package: "Ableton DSP"
see_also: ["abl.dsp.fmbass~"]
---
# abl.dsp.subosc~

Oscillator with sub bass

## Description

An oscillator with waveshaping and an auxiliary sub bass oscillator.

## Arguments

### frequency[number] optional

Frequency

### tone[number] optional

Tone

### aux[number] optional

Auxiliary sub

## Attributes

### aux[float]

Sets the amount of a sub-oscillator one octave below. [0., 1.]

### frequency[float]

Sets the oscillator frequency in Hz. [0., 20500.]

### tone[float]

Changes the tone by deforming the sine wave into a square wave. [0., 1.]

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
