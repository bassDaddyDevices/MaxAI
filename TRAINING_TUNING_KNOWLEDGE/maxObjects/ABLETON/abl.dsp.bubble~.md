---
type: ableton
name: "abl.dsp.bubble~"
summary: "Bubble generator"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.bubble~/"
package: "Ableton DSP"
see_also: ["abl.dsp.crackle~", "abl.dsp.filterednoise~", "abl.dsp.rain~"]
---
# abl.dsp.bubble~

Bubble generator

## Description

A simulation of the sound of bubbles in water.

## Arguments

### frequency[number] optional

Frequency

### rate[number] optional

Rate

### randomness[number] optional

Randomness

## Attributes

### frequency[float]

Sets the average size of bubbles which is roughly equivalent to the fundamental frequency.
[0., 20500.]

### randomness[float]

Sets the randomness of bubble size [0., 1.]. Note that 0.0 will still have some randomness.

### rate[float]

Sets the rate of bubble generation. [0., 1.]

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
| [abl.dsp.crackle~](https://docs.cycling74.com/reference/abl.dsp.crackle~) | Crackle sound generator |
| [abl.dsp.filterednoise~](https://docs.cycling74.com/reference/abl.dsp.filterednoise~) | Filtered noise generator |
| [abl.dsp.rain~](https://docs.cycling74.com/reference/abl.dsp.rain~) | Rain sound generator |
