---
type: ableton
name: "abl.dsp.fmbass~"
summary: "Three operator FM oscillator"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.fmbass~/"
package: "Ableton DSP"
see_also: ["abl.dsp.foldfm~", "abl.dsp.harmonicfm~", "abl.dsp.simplefm~", "abl.dsp.subosc~"]
---
# abl.dsp.fmbass~

Three operator FM oscillator

## Description

A simple 3-operator FM oscillator with two modulators and one carrier. Also known as the 'squelch'
oscillator in Live's Meld Instrument, it is ideal for making FM bass sounds.

## Arguments

### frequency[number] optional

Frequency

### index[number] optional

FM index

### feedback[number] optional

Feedback

## Attributes

### feedback[float]

Sets the macro controlling both the feedback of modulator 1 and the modulator 1 to 2 amount.
[0., 1.]

### frequency[float]

Sets the oscillator frequency in Hz. [0., 20500.]

### index[float]

Sets the FM index as a macro. Internally, this is mapped (nonlinearly) from 0.01 to 4.0. [0.,
1.]

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
| [abl.dsp.foldfm~](https://docs.cycling74.com/reference/abl.dsp.foldfm~) | Wavefolding FM oscillator |
| [abl.dsp.harmonicfm~](https://docs.cycling74.com/reference/abl.dsp.harmonicfm~) | Harmonic FM oscillator |
| [abl.dsp.simplefm~](https://docs.cycling74.com/reference/abl.dsp.simplefm~) | Two-operator FM oscillator |
| [abl.dsp.subosc~](https://docs.cycling74.com/reference/abl.dsp.subosc~) | Oscillator with sub bass |
