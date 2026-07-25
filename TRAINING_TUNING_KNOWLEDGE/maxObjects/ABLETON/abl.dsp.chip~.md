---
type: ableton
name: "abl.dsp.chip~"
summary: "Square wave chiptune oscillator"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.chip~/"
package: "Ableton DSP"
see_also: ["abl.device.redux~", "abl.device.swarm~"]
---
# abl.dsp.chip~

Square wave chiptune oscillator

## Description

A simple square wave oscillator producing sounds emulating an 8-bit game console.

## Arguments

### frequency[number] optional

Frequency

### pulsewidth[number] optional

Pulse width

### mod[number] optional

Modulation frequency

## Attributes

### frequency[float]

Sets the oscillator frequency in Hz. [0., 20500.]

### mod[float]

Sets the frequency of the modulator triggering. [0., 1.]

### pulsewidth[float]

Sets the pulse width and pitch offset of the second note in the arpeggio sequence. [0., 1.]

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
| [abl.device.redux~](https://docs.cycling74.com/reference/abl.device.redux~) | Downsampling and bit-reduction effect |
| [abl.device.swarm~](https://docs.cycling74.com/reference/abl.device.swarm~) |  |
