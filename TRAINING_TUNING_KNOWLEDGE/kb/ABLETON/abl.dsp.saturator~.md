---
type: ableton
name: "abl.dsp.saturator~"
summary: "Saturator"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.saturator~/"
package: "Ableton DSP"
see_also: ["abl.dsp.waveshaper~"]
---
# abl.dsp.saturator~

Saturator

## Description

A waveshaping saturation effect.

## Arguments

### drive[number] optional

Input drive

### gain[number] optional

Output gain

## Attributes

### curve[int]

Select the fixed curve mode. In the Analog Clip and Digital Clip modes, the signal is clipped
completely and immediately. Soft Sine, Medium Curve, and Hard Curve modes soften clipping to varying
degrees. Sinoid Fold mode can be good for special effects.

Possible values:

0 = 'Analog Clip'

1 = 'Soft Sine'

2 = 'Medium Curve'

3 = 'Hard Curve'

4 = 'Sinoid Fold'

5 = 'Digital Clip'

### dcblock[int]

Enable or disable DC blocking.

### drive[float]

Sets the gain in dB of the input signal before saturation. [-36., 36.]

### gain[float]

Sets the output gain in dB after waveshaping. [-70.6, 0.]

### mix[float]

Sets the dry/wet mix of the output signal

### oversample[int]

Enable or disable oversampling.

### post\_clip[int]

Sets the post-waveshaping clipping mode.
Possible values:

0 = 'No Clip'

1 = 'Soft Clip'

2 = 'Hard Clip'

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
| [abl.dsp.waveshaper~](https://docs.cycling74.com/reference/abl.dsp.waveshaper~) | Waveshaper |
