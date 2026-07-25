---
type: ableton
name: "abl.dsp.vowel~"
summary: "Vowel bandpass filter"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.vowel~/"
package: "Ableton DSP"
see_also: ["abl.dsp.meldfilter~"]
---
# abl.dsp.vowel~

Vowel bandpass filter

## Description

A bank of five bandpass filters with frequencies and gains that correspond to the vowels AEIOU.

## Arguments

### frequency[number] optional

Frequency

### resonance[number] optional

Resonance

### morph[number] optional

Morph

## Attributes

### frequency[float]

Sets the cutoff frequency in Hz. [0., 20500.]

### morph[float]

Morphs between vowel sounds. [0., 1.]

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
