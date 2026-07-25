---
type: ableton
name: "abl.dsp.ringmod~"
summary: "Ring modulator"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.ringmod~/"
package: "Ableton DSP"
see_also: ["abl.dsp.pitchshifter~"]
---
# abl.dsp.ringmod~

Ring modulator

## Description

Stereo ring modulator effect

## Arguments

None.

## Attributes

### drive[float]

Sets the level of drive distortion in dB. [0., 24.]

### enable\_drive[int]

Turns drive distortion on or off.

### frequency[float]

Sets the ring modulation frequency in Hz which will be added and subtracted from the input.
[1., 10000.]

### mix[float]

Sets the dry/wet mix of the output signal

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
| [abl.dsp.pitchshifter~](https://docs.cycling74.com/reference/abl.dsp.pitchshifter~) | Pitch shifter |
