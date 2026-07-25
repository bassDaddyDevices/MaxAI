---
type: ableton
name: "abl.dsp.extratone~"
summary: "Granular-esque kick drum tone oscillator"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.extratone~/"
package: "Ableton DSP"
see_also: ["abl.dsp.shepard~", "abl.dsp.tarp~"]
---
# abl.dsp.extratone~

Granular-esque kick drum tone oscillator

## Description

An oscillator created by retriggering a kick at the rate of the oscillator frequency. It produces
granular-esque kick drum tones found in Extratone music.

## Arguments

### frequency[number] optional

Trigger frequency

### pitch[number] optional

Base pitch

### envamount[number] optional

Envelope amount

## Attributes

### envamount[float]

Sets the amount of envelope by adjusting resonance, frequency modulation depth, and the
modulation shape of the kick oscillator. [0., 1.]

### frequency[float]

Sets the retrigger frequency in Hz. [0., 20500.]

### pitch[float]

Sets the base pitch of the kick oscillator as a macro. Internally, this is mapped from 20 Hz to
100 Hz. [0., 1.]

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
| [abl.dsp.shepard~](https://docs.cycling74.com/reference/abl.dsp.shepard~) | Shepard tone oscillator |
| [abl.dsp.tarp~](https://docs.cycling74.com/reference/abl.dsp.tarp~) | Kick/bass oscillator |
