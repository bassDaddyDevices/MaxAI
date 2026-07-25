---
type: ableton
name: "abl.dsp.dualbasicshapes~"
summary: "Dual basic shape oscillator"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.dualbasicshapes~/"
package: "Ableton DSP"
see_also: ["abl.dsp.basicshapes~", "abl.dsp.noisyshapes~"]
---
# abl.dsp.dualbasicshapes~

Dual basic shape oscillator

## Description

A dual oscillator which fades between basic shapes (sine, triangle, saw, square).

## Arguments

### frequency[number] optional

Frequency

### shape[number] optional

Wave shape

### detune[number] optional

Detune

## Attributes

### detune[float]

Sets the amount the second oscillator is detuned from the first. For a value of 0, the second
oscillator chases the phase of the first oscillator so that they line up again. [0., 1.]

### frequency[float]

Sets the oscillator frequency in Hz. [0., 20500.]

### shape[float]

Fade between sine, triangle, saw, and pulse wave shapes. [0., 1.]

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
| [abl.dsp.basicshapes~](https://docs.cycling74.com/reference/abl.dsp.basicshapes~) | Basic shape oscillator |
| [abl.dsp.noisyshapes~](https://docs.cycling74.com/reference/abl.dsp.noisyshapes~) | Noisy dual basic shape oscillator |
