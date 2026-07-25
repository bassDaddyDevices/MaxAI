---
type: ableton
name: "abl.dsp.rain~"
summary: "Rain sound generator"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.rain~/"
package: "Ableton DSP"
see_also: ["abl.dsp.bubble~", "abl.dsp.crackle~", "abl.dsp.filterednoise~"]
---
# abl.dsp.rain~

Rain sound generator

## Description

An oscillator that mimics the sounds of raindrops mixed with wind.

## Arguments

### frequency[number] optional

Frequency

### resonance[number] optional

Resonance

### density[number] optional

Density

## Attributes

### density[float]

Sets the density of raindrops. [0., 1.]

### frequency[float]

Sets the oscillator frequency in Hz. [0., 20500.]

### resonance[float]

Sets the resonance intensity. Higher resonance makes the oscillator more tonal. [0., 1.]

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
| [abl.dsp.crackle~](https://docs.cycling74.com/reference/abl.dsp.crackle~) | Crackle sound generator |
| [abl.dsp.filterednoise~](https://docs.cycling74.com/reference/abl.dsp.filterednoise~) | Filtered noise generator |
