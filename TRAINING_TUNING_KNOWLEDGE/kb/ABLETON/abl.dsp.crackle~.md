---
type: ableton
name: "abl.dsp.crackle~"
summary: "Crackle sound generator"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.crackle~/"
package: "Ableton DSP"
see_also: ["abl.dsp.bubble~", "abl.dsp.filterednoise~", "abl.dsp.rain~"]
---
# abl.dsp.crackle~

Crackle sound generator

## Description

An oscillator that emits random transients, emulating a crackling sound.

## Arguments

### frequency[number] optional

Frequency

### density[number] optional

Density

### intensity[number] optional

Intensity

## Attributes

### density[float]

The average rate of crackle generation. [0., 1.]

### frequency[float]

Sets the center frequency of the bandpass filter in Hz. [0., 20500.]

### intensity[float]

Controls the average intensity by flattening the amplitude distribution and modulating filters
and envelope times. [0., 1.]

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
| [abl.dsp.bubble~](https://docs.cycling74.com/reference/abl.dsp.bubble~) | Bubble generator |
| [abl.dsp.filterednoise~](https://docs.cycling74.com/reference/abl.dsp.filterednoise~) | Filtered noise generator |
| [abl.dsp.rain~](https://docs.cycling74.com/reference/abl.dsp.rain~) | Rain sound generator |
