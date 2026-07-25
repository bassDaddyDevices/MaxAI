---
type: ableton
name: "abl.dsp.swarm~"
summary: "Multi-oscillator swarm"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.swarm~/"
package: "Ableton DSP"
see_also: ["abl.dsp.basicshapes~", "abl.dsp.dualbasicshapes~"]
---
# abl.dsp.swarm~

Multi-oscillator swarm

## Description

A swarm of oscillators with modulation and frequency spacing.

## Arguments

### frequency[number] optional

Frequency

### motion[number] optional

Motion

### spacing[number] optional

Spacing

## Attributes

### frequency[float]

Sets the oscillator frequency in Hz. [0., 20500.]

### motion[float]

Sets the amount of random pitch modulation. [0., 1.]

### shape[int]

Sets the oscillator shape
Possible values:

0 = 'Saw'

1 = 'Sine'

2 = 'Square'

3 = 'Triangle'

### spacing[float]

Sets the spread and inharmonicity of the chord. [0., 1.]

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
| [abl.dsp.dualbasicshapes~](https://docs.cycling74.com/reference/abl.dsp.dualbasicshapes~) | Dual basic shape oscillator |
