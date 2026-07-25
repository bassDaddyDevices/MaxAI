---
type: ableton
name: "abl.dsp.chorus~"
summary: "Chorus"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.chorus~/"
package: "Ableton DSP"
see_also: ["abl.dsp.ensemble~", "abl.dsp.vibrato~"]
---
# abl.dsp.chorus~

Chorus

## Description

Stereo chorus effect

## Arguments

### rate[number] optional

Modulation rate

### mod[number] optional

Modulation amount

### feedback[number] optional

Feedback

## Attributes

### feedback[float]

Sets the amount of feedback from the output to the input. [0., 1.]

### gain[float]

Sets the gain in dB. [-70.6, 6.]

### invert[int]

Invert the feedback polarity.

### mix[float]

Sets the dry/wet mix of the output signal

### mod[float]

Sets the modulation depth. [0., 1.]

### rate[float]

Sets the frequency of modulation in Hz. [0.1, 15.]

### warmth[float]

Sets the amount of distortion and filtering. [0., 1.]

### width[float]

Sets the stereo width where 0 is mono, 0.5 is unchanged, and 1 is the maximum increased width.
[0., 1.]

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
| [abl.dsp.ensemble~](https://docs.cycling74.com/reference/abl.dsp.ensemble~) | Ensemble |
| [abl.dsp.vibrato~](https://docs.cycling74.com/reference/abl.dsp.vibrato~) | Stereo vibrato effect |
