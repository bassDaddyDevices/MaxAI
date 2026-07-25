---
type: ableton
name: "abl.dsp.tarp~"
summary: "Kick/bass oscillator"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.tarp~/"
package: "Ableton DSP"
see_also: ["abl.dsp.extratone~", "abl.dsp.fmbass~"]
---
# abl.dsp.tarp~

Kick/bass oscillator

## Description

A kick/bass oscillator for creating 808 style sounds.

## Arguments

### frequency[number] optional

Frequency

### tone[number] optional

Tone

## Attributes

### decay[float]

Sets the frequency ramp decay shape. [0., 1.]

### frequency[float]

Sets the oscillator frequency in Hz. [0., 20500.]

### tone[float]

Sets the aggressiveness by setting the resonance, drive, noise gain, ramp depth, and ramp shape
of the kick oscillator. [0., 1.]

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
| [abl.dsp.extratone~](https://docs.cycling74.com/reference/abl.dsp.extratone~) | Granular-esque kick drum tone oscillator |
| [abl.dsp.fmbass~](https://docs.cycling74.com/reference/abl.dsp.fmbass~) | Three operator FM oscillator |
