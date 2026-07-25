---
type: ableton
name: "abl.device.redux~"
summary: "Downsampling and bit-reduction effect"
signal: true
url: "https://docs.cycling74.com/reference/abl.device.redux~/"
package: "Ableton DSP"
see_also: ["abl.dsp.distortion~", "abl.dsp.fuzz~"]
---
# abl.device.redux~

Downsampling and bit-reduction effect

## Description

An effect for creating a wide range of jagged and edgy sounds.

## Arguments

### rate[number] optional

Resampling rate

### shape[number] optional

Quantizer shape

### jitter[number] optional

Resampling jitter

## Attributes

### bitdepth[int]

Sets the bit depth of the output. [1, 16]

### jitter[float]

Sets the amount of resampling jitter. [0., 1.]

### mix[float]

Sets the dry/wet mix of the output signal

### post\_filter[int]

Enables or disables post-filtering to reduce aliasing.

### post\_filter\_octave[float]

Tunes the position of the post-filter with respect to the resampling frequency. When zero, the
filter is located at half the resampling rate. [0., 1.]

### prefilter[int]

Enables or disables pre-filtering a little below half the resampling frequency to
avoid imaging.

### quantizer\_dc\_shift[int]

Enables or disables DC shift during quantization in order to produce symmetrical output.

### rate[float]

Sets the resampling frequency in Hz. [40., 40000.]

### resamplingquality[int]

Sets the quality of resampling.

Possible values:

0 = 'eco'
(
Eco
)
Lower quality resampling for cheaper processing

1 = 'high'
(
High
)
Higher quality resampling

### shape[float]

Morphs between linear quantization and A-Law compressed quantization. [0., 1.]

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
| [abl.dsp.distortion~](https://docs.cycling74.com/reference/abl.dsp.distortion~) | Guitar pedal distortion |
| [abl.dsp.fuzz~](https://docs.cycling74.com/reference/abl.dsp.fuzz~) | Fuzz guitar pedal |
