---
type: ableton
name: "abl.dsp.filther~"
summary: "Distorted lowpass filter"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.filther~/"
package: "Ableton DSP"
see_also: ["abl.dsp.meldfilter~"]
---
# abl.dsp.filther~

Distorted lowpass filter

## Description

A lowpass filter with two distortion stages. The first is a hard diode clipper on the input, and the
second is a soft saturation on the output to add harmonics to the filtered resonant output.

## Arguments

### frequency[number] optional

Frequency

### resonance[number] optional

Resonance

### drive[number] optional

Drive

## Attributes

### drive[float]

Sets the amount of filter drive. [0., 1.]

### frequency[float]

Sets the cutoff frequency in Hz. [0., 20500.]

### resonance[float]

Sets the filter resonance. [0., 1.]

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
| [abl.dsp.meldfilter~](https://docs.cycling74.com/reference/abl.dsp.meldfilter~) | Meta-filter |
