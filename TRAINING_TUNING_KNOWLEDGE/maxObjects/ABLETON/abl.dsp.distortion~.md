---
type: ableton
name: "abl.dsp.distortion~"
summary: "Guitar pedal distortion"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.distortion~/"
package: "Ableton DSP"
see_also: ["abl.dsp.fuzz~", "abl.dsp.overdrive~", "abl.dsp.saturator~", "abl.dsp.waveshaper~"]
---
# abl.dsp.distortion~

Guitar pedal distortion

## Description

Tight and aggressive guitar pedal distortion.

## Arguments

### gain[number] optional

Gain

### bass[number] optional

Bass amount

### mid[number] optional

Mid amount

### treble[number] optional

Treble amount

## Attributes

### bass[float]

Boost or attenuate bass frequencies. [-1., 1.]

### gain[float]

Boosts or attenuates the gain. [0., 1.]

### mid[float]

Boost or attenuate middle frequencies. [-1., 1]

### midfreq[int]

Sets the frequency of the mid control.
Possible values:

0 = 'Low'

1 = 'Mid'

2 = 'High'

### mix[float]

Sets the dry/wet mix of the output signal

### sub[int]

Enable or disable an additional low-frequency boost.

### treble[float]

Boost or attenuate treble frequencies. [-1., 1.]

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
| [abl.dsp.fuzz~](https://docs.cycling74.com/reference/abl.dsp.fuzz~) | Fuzz guitar pedal |
| [abl.dsp.overdrive~](https://docs.cycling74.com/reference/abl.dsp.overdrive~) | Overdriven guitar pedal |
| [abl.dsp.saturator~](https://docs.cycling74.com/reference/abl.dsp.saturator~) | Saturator |
| [abl.dsp.waveshaper~](https://docs.cycling74.com/reference/abl.dsp.waveshaper~) | Waveshaper |
