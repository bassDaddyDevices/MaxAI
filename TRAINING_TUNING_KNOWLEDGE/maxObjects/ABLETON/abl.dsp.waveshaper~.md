---
type: ableton
name: "abl.dsp.waveshaper~"
summary: "Waveshaper"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.waveshaper~/"
package: "Ableton DSP"
see_also: ["abl.dsp.saturator~"]
---
# abl.dsp.waveshaper~

Waveshaper

## Description

A saturation effect with control over the waveshaping transfer function.

## Arguments

### drive[number] optional

Input drive

### gain[number] optional

Output gain

## Attributes

### curve[float]

Adds mostly third-order harmonics to the input signal. [0., 1.]

### damping[float]

Flattens signals near the origin of the waveshaper transfer curve. Damping behaves like an
ultra-fast noise gate. [0., 1.]

### dcblock[int]

Enable or disable DC blocking.

### depth[float]

Superimposes a sine wave onto the waveshaper transfer function curve and sets its amplitude.
[0., 1.]

### drive[float]

Sets the gain in dB of the input signal before saturation. [-36., 36.]

### gain[float]

Sets the output gain in dB after waveshaping. [-70.6, 0.]

### linearity[float]

Linearity works with the curve and depth parameters to alter the linear portion of the
waveshaper transfer function curve. [0., 1.]

### mix[float]

Sets the dry/wet mix of the output signal

### oversample[int]

Enable or disable oversampling.

### period[float]

Determines the number of ripples in the sine wave created by the depth attributes for the
waveshaper transfer function. [0., 1.]

### post\_clip[int]

Sets the post-waveshaping clipping mode.
Possible values:

0 = 'No Clip'

1 = 'Soft Clip'

2 = 'Hard Clip'

### shaper\_drive[float]

Determines how much the input signal will be influence by the other waveshaper parameters:
linearity, curve, damping, period, and depth. [0., 1.]

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
| [abl.dsp.saturator~](https://docs.cycling74.com/reference/abl.dsp.saturator~) | Saturator |
