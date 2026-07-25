---
type: ableton
name: "abl.dsp.squarefifth~"
summary: "Morphing square wave oscillator"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.squarefifth~/"
package: "Ableton DSP"
see_also: ["abl.dsp.squaresync~", "abl.dsp.swarm~"]
---
# abl.dsp.squarefifth~

Morphing square wave oscillator

## Description

An oscillator that morphs a square to a square pitched a fifth above.

## Arguments

### frequency[number] optional

Frequency

### amount[number] optional

Fifth amount

### width[number] optional

Pulse width

## Attributes

### amount[float]

Morphs a square to a square a perfect fifth above. [0., 1.]

### frequency[float]

Sets the oscillator frequency in Hz. [0., 20500.]

### width[float]

Sets the pulse width of the square wave. [0., 1.]

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
| [abl.dsp.squaresync~](https://docs.cycling74.com/reference/abl.dsp.squaresync~) | Dual square wave oscillator |
| [abl.dsp.swarm~](https://docs.cycling74.com/reference/abl.dsp.swarm~) | Multi-oscillator swarm |
