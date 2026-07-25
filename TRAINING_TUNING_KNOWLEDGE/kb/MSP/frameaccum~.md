---
type: msp
name: "frameaccum~"
summary: "Compute 'running phase' of successive phase deviation frames"
signal: true
url: "https://docs.cycling74.com/reference/frameaccum~/"
package: "MSP"
see_also: ["framedelta~"]
---
# frameaccum~

Compute "running phase" of successive phase deviation frames

## Description

[frameaccum~](https://docs.cycling74.com/reference/frameaccum~) computes a running phase by keeping a sum of the values in each position of its incoming signal vectors. When used inside a [pfft~](https://docs.cycling74.com/reference/pfft~) object, it can keep a running phase of the FFT because the FFT size is equal to the signal vector size.

## Arguments

### phasewrap-flag (0 or nonzero)[int] optional

A non-zero integer argument will cause the accumulated values to be wrapped between -π and π. This optional feature is to reduce roundoff error when using [frameaccum~](https://docs.cycling74.com/reference/frameaccum~) to accumulate phase values. When the argument is set to one. [frameaccum~](https://docs.cycling74.com/reference/frameaccum~) object performs a phase warping (like the [phasewrap~](https://docs.cycling74.com/reference/phasewrap~) object). It is more efficient to use the non-zero argument than to use a combination of [frameaccum~](https://docs.cycling74.com/reference/frameaccum~) and [phasewrap~](https://docs.cycling74.com/reference/phasewrap~) objects.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### clear >= 8.3.0

Clears all of the [frameaccum~](https://docs.cycling74.com/reference/frameaccum~) object's internal buffers.

### signal

The input to be accumulated.

## Output

### signal

For each signal vector, the first sample of its output will be the sum of all of the first samples in each signal vector it has received, the second sample of its output will be the sum of all the second samples in each signal vector, and so on.

## See Also

| Name | Description |
| --- | --- |
| [framedelta~](https://docs.cycling74.com/reference/framedelta~) | Compute phase deviation between successive FFT frames |
