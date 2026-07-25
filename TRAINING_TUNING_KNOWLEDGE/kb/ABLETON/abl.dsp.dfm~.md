---
type: ableton
name: "abl.dsp.dfm~"
summary: "Digitally modeled analog lowpass filter"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.dfm~/"
package: "Ableton DSP"
see_also: ["abl.dsp.meldfilter~"]
---
# abl.dsp.dfm~

Digitally modeled analog lowpass filter

## Description

A digitally modeled analog lowpass filter.

## Arguments

### frequency[number] optional

Frequency

### resonance[number] optional

Resonance

### pregain[number] optional

Pregain

## Attributes

### frequency[float]

Sets the cutoff frequency in Hz. [0., 20500.]

### pregain[float]

Sets the filter pre-gain macro. Internally, this is mapped from 0 to 24 dB. [0., 1.]

### resonance[float]

Sets the filter resonance. [0., 1.]

### ins[symbol]

Declares additional inlets that can be used to control float-type attributes at either event or
signal rate. Any declared attributes already mapped to inlets will be ignored. This attribute can only
be set when the object is instantiated.

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
