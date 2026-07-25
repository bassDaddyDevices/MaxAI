---
type: ableton
name: "abl.device.echo~"
summary: "Modulation delay"
signal: true
url: "https://docs.cycling74.com/reference/abl.device.echo~/"
package: "Ableton DSP"
see_also: ["abl.device.delay~"]
---
# abl.device.echo~

Modulation delay

## Description

A modulation delay effect that allows setting the delay time on two independent delay lines, while also
giving control over envelope and filter modulation.

## Arguments

None.

## Attributes

### channel\_mode[int]

Sets the channel mode.

Possible values:

0 = 'Stereo'

1 = 'Ping-pong'

2 = 'Mid/Side'

### clip[int]

Applies the input gain to the dry signal as well, allowing distortion for an authentic hardware feel.

### delay[2 floats]

Delay Time

### drywetmode[int]

Sets the way processed and dry signals are balanced.

Possible values:

0 = 'Linear'
(
Linear
)
Uses linear dry/wet mixing

1 = 'Equal-loudness'
(
Equal-loudness
)
Makes a 50/50 mix to sound equally loud for most signals

### duck[int]

When enabled, the wet signal will be proportionally reduced as long as there is an input signal.

### duck\_release[float]

Sets the ducking release time in seconds. [0.02, 1.5]

### duck\_threshold[float]

Sets the ducking threshold in dB. [-60., 0.]

### fbinvert[int]

Enables/disables inverting the feedback signal before adding it back to the input. This can
change the sound significantly for short delay times.

### feedback[float]

Sets the amount of each channel's output that is fed back into its input. [0., 1.5]

### gate[int]

Enables/disables the output gate.

### gate\_release[float]

Sets the gate release time in seconds. [0.05, 3.]

### gate\_threshold[float]

Sets the gate threshold in dB. [-60., 0.]

### input[float]

Sets the input gain in dB. [-40., 40.]

### mix[float]

Sets the dry/wet mix of the output signal.

### mod\_delay[float]

Adjust the amount of modulation that is applied to the delay time. [0., 1.]

### mod\_envelope[float]

Blend between the modulation oscillator and an envelope follower. [0., 1.]

### mod\_freq[float]

Sets the frequency of the modulation oscillator in Hz. [0.01, 40.]

### mod\_mult[int]

Enables/disables scaling the delay time modulation depth by a factor of four. With short delay
times, this produces deep flanging sounds.

### mod\_phase[float]

Adjusts the amount of offset between the waveforms for the left and right channel. At 180
degrees, the channels will be perfectly out of phase. [0., 180.]

### mod\_waveform[int]

Sets the modulation waveform.

Possible values:

0 = 'Sine'

1 = 'Triangle'

2 = 'Saw up'

3 = 'Saw down'

4 = 'Square'

5 = 'Random'

### noise[float]

Sets the amount of noise added to the signal. [0., 1.]

### noise\_morph[float]

Morph between different types of noise. [0., 1.]

### output[float]

Sets the output gain in dB. [-76., 12.]

### repitch[int]

This causes a pitch variation when changing the delay time, similar to the behavior of hardware
delay units. When disabled, changing the delay time creates a crossfade between the new and old delay
times.

### repitch\_smoothing\_time[float]

Adjust how quickly a new pitch variation is applied when changing the delay time. [0.01, 1.]

### reverb[float]

Sets the amount of reverb. [0., 1.]

### reverb\_decay[float]

Sets the length of the reverb tail. [0., 1.]

### reverb\_location[int]

Sets the location in the processing chain where reverb is added.

Possible values:

0 = 'Pre'
(
Pre
)
Before the delay

1 = 'Post'
(
Post
)
After the delay

2 = 'Feedback'
(
Feedback
)
Within the delay feedback loop

### width[float]

Sets the stereo width of the wet signal. 0 yields a mono signal whereas values from 1 to 2
create a widened stereo panorama. [0., 2.]

### wobble[float]

Sets the amount of wobble added to the signal. This adds irregular modulation of the delay
time, simulating tape delays. [0., 1.]

### wobble\_morph[float]

Morph between different types of wobble modulation. [0., 1.]

### ins[symbol]

Declares additional inlets that can be used to control float-type attributes at either event or
signal rate. Any declared attributes already mapped to inlets will be ignored. This attribute can only
be set when the object is instantiated.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### float

Function depends on inlet

### clear

Clear delay line feedback

### reset

Reset

### signal

Function depends on inlet

## See Also

| Name | Description |
| --- | --- |
| [abl.device.delay~](https://docs.cycling74.com/reference/abl.device.delay~) | Stereo delay |
