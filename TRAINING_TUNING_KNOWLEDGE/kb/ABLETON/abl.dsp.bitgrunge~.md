---
type: ableton
name: "abl.dsp.bitgrunge~"
summary: "Bit-grunge oscillator"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.bitgrunge~/"
package: "Ableton DSP"
see_also: ["abl.dsp.chip~", "abl.dsp.noisyshapes~"]
---
# abl.dsp.bitgrunge~

Bit-grunge oscillator

## Description

A gritty, lo-fi oscillator based on the parity of bits in an incrementing count.

The number of set bits in an unsigned int switches from odd to even in a self-similar non-repeating pattern.
Subsequent powers of two mean each bit will be switching at half the rate. Generating a square wave oscillator
from all the bits XORed together produces many sub-oscillators of the phasor frequency.

## Arguments

### frequency[number] optional

Frequency

### depth[number] optional

Depth

### mult[number] optional

Mult

## Attributes

### depth[float]

Limits the maximum speed of bitflips that create the square oscillator shape. [0., 1.]

### frequency[float]

Sets the oscillator frequency in Hz. [0., 20500.]

### mult[float]

Determines how many nested sub-octave flips are generated. [0., 1.]

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
| [abl.dsp.chip~](https://docs.cycling74.com/reference/abl.dsp.chip~) | Square wave chiptune oscillator |
| [abl.dsp.noisyshapes~](https://docs.cycling74.com/reference/abl.dsp.noisyshapes~) | Noisy dual basic shape oscillator |
