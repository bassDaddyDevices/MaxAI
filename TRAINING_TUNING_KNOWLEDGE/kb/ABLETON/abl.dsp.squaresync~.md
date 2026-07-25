---
type: ableton
name: "abl.dsp.squaresync~"
summary: "Dual square wave oscillator"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.squaresync~/"
package: "Ableton DSP"
see_also: ["abl.dsp.squarefifth~", "abl.dsp.swarm~"]
---
# abl.dsp.squaresync~

Dual square wave oscillator

## Description

A synced dual square wave oscillator

## Arguments

### frequency[number] optional

Frequency

### first[number] optional

Frequency 1

### second[number] optional

Frequency 2

## Attributes

### first[float]

Sets the frequency of the first square wave oscillator in Hz. [0., 2000.]

### frequency[float]

Sets the fundamental oscillator frequency in Hz. [0., 20500.]

### second[float]

Sets the frequency of the second square wave oscillator in Hz. [0., 2000.]

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
| [abl.dsp.squarefifth~](https://docs.cycling74.com/reference/abl.dsp.squarefifth~) | Morphing square wave oscillator |
| [abl.dsp.swarm~](https://docs.cycling74.com/reference/abl.dsp.swarm~) | Multi-oscillator swarm |
