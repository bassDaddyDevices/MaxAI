---
type: ableton
name: "abl.dsp.pitchshifter~"
summary: "Pitch shifter"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.pitchshifter~/"
package: "Ableton DSP"
see_also: ["abl.dsp.ringmod~"]
---
# abl.dsp.pitchshifter~

Pitch shifter

## Description

Stereo pitch shifter effect

## Arguments

### shift[number] optional

Pitch shift

## Attributes

### mix[float]

Sets the dry/wet mix of the output signal.

### shift[float]

Sets the pitch shift in semitones. [-24., 24.]

### wide[int]

Inverts the polarity of the spread value for the right channel, creating a stereo effect.

### window[float]

Sets the window size (in ms) used by the pitch shifting algorithm. [10., 350.]

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
| [abl.dsp.ringmod~](https://docs.cycling74.com/reference/abl.dsp.ringmod~) | Ring modulator |
