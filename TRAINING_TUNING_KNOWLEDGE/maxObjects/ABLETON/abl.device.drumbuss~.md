---
type: ableton
name: "abl.device.drumbuss~"
summary: "Analog-style drum processor"
signal: true
url: "https://docs.cycling74.com/reference/abl.device.drumbuss~/"
package: "Ableton DSP"
see_also: ["abl.device.compressor~", "abl.device.roar~", "abl.device.limiter~"]
---
# abl.device.drumbuss~

Analog-style drum processor

## Description

Drum-buss is designed to add body and character to a group of drums, while gluing them together in a
tight mix.

## Arguments

### drive[number] optional

Drive

### crunch[number] optional

Crunch

### boom[number] optional

Boom

## Attributes

### boom[float]

Adjusts the amount of low-frequency enhancement. [0., 1.]

### boomfreq[float]

Adjusts the frequency of the low-frequency enhancer. [30., 90.]

### boomsolo[int]

Auditions the result of the low-frequency enhancer.

### compressor[int]

Enables the compressor.

### crunch[float]

Adds extra distortion to the mid-high frequencies. [0., 1.]

### damping[float]

Sets the damping frequency in Hz for the output signal. [500., 20000.]

### decay[float]

Adjusts the decay rate of low frequencies. [0., 1.]

### distortion[long]

Sets the type of distortion applied to the input signal.
Possible values:

0 = 'Soft'
(
Soft
)
Waveshaping distortion

1 = 'Medium'
(
Medium
)
Limiting distortion

2 = 'Hard'
(
Hard
)
Clipping distortion with bass boost

### drive[float64]

Sets the drive amount. [0., 1.]

### input[float64]

Sets the gain of the input signal (in dB). [-70., 0.]

### mix[float64]

Sets the dry/wet mix of the output signal. [0., 1.]

### output[float64]

Sets the amount of gain applied to the processed signal (in dB). [-40., 3.]

### transients[float64]

Emphasize or de-emphasize the transients of mid-high frequencies. [-1., 1.]

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
| [abl.device.compressor~](https://docs.cycling74.com/reference/abl.device.compressor~) | Compressor |
| [abl.device.roar~](https://docs.cycling74.com/reference/abl.device.roar~) | Three-stage saturator |
| [abl.device.limiter~](https://docs.cycling74.com/reference/abl.device.limiter~) | Limiter |
