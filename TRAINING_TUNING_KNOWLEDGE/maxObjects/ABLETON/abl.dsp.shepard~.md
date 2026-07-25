---
type: ableton
name: "abl.dsp.shepard~"
summary: "Shepard tone oscillator"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.shepard~/"
package: "Ableton DSP"
see_also: ["abl.dsp.extratone~"]
---
# abl.dsp.shepard~

Shepard tone oscillator

## Description

A Shepard tone oscillator with depth and direction.

## Arguments

### frequency[number] optional

Frequency

### rate[number] optional

Rate

### width[number] optional

Width

## Attributes

### frequency[float]

Sets the oscillator frequency in Hz. [0., 20500.]

### rate[float]

Sets the modulation rate. This determines the rate at which one oscillator cycles through all
octaves and returns to its original frequency. Values [0.0, 0.5) correspond to falling movements,
0.5 is no movement, and (0.5, 1.0] corresponds to rising movement. [0., 1.]

### width[float]

Sets the octave range of the Shepard's tone. [0., 1.]

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
