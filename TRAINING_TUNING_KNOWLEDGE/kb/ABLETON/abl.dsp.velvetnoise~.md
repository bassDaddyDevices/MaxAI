---
type: ableton
name: "abl.dsp.velvetnoise~"
summary: "A velvet noise generator"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.velvetnoise~/"
package: "Ableton DSP"
---
# abl.dsp.velvetnoise~

A velvet noise generator

## Description

A noise generator useful for noise convolution.

Velvet noise is an impulse train where impulses are randomly positive and negative.
The spacing between the impulses is derived from the number of samples that defines a temporal slice in which
only one impulse exists. The impulse can be located anywhere within its slice. One characteristic of this
impulse train is that even with a relatively low density, it has a fairly even spectrum.

## Arguments

### spacing[number] optional

Impulse spacing

## Attributes

### spacing[float]

Sets the average spacing between impulses. [5, 100000]

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### float

Function depends on inlet

### reset

Reset

### signal

Function depends on inlet
