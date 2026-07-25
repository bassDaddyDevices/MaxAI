---
type: ableton
name: "abl.device.utility~"
summary: "Swiss army knife for audio"
signal: true
url: "https://docs.cycling74.com/reference/abl.device.utility~/"
package: "Ableton DSP"
---
# abl.device.utility~

Swiss army knife for audio

## Description

This object can be used to change the gain, separate a single channel from a stereo signal, widen or
narrow the stereo image or suppress DC offsets.

## Arguments

### gain[number] optional

Gain

### balance[number] optional

Balance

## Attributes

### audition\_bass\_mono[int]

Solos the mono bass frequencies. When enabled, only the low frequencies can be heard. This can
help to tune bass\_mono\_frequency.

### balance[float]

Pans the input signal anywhere within the stereo field. [-1., 1.]

### bass\_mono[int]

Converts low frequencies of the input signal to mono. This is useful for avoiding coloration of
low frequencies when they are replayed in mono.

### bass\_mono\_frequency[float]

Sets the bass mono threshold frequency (in Hz). Signals below this frequency are converted to
mono when the bassmono attribute is on. [50., 500.]

### channelmode[int]

Sets the channel mode

Possible values:

0 = 'Left'
(
Left
)
Only pass the left channel of the input

1 = 'Stereo'
(
Stereo
)
Pass input to the output as normal

2 = 'Right'
(
Right
)
Only pass the right channel of the input

3 = 'Swap'
(
Swap
)
Swap the left and right channels of input

### dcblock[int]

Enables/disables the DC blocking filter.

### gain[float]

Boosts or attenuates signal gain in dB. If you want to mute the output signal entirely, see the
mute
attribute. [-70.6, 6.]

### invert\_phase\_l[int]

Inverts the phase of the left inlet signal.

### invert\_phase\_r[int]

Inverts the phase of the right inlet signal.

### midside[2 floats]

Sets the gain of the mid and side stereo fields. [0., 1.]

### mono[int]

Converts stereo input to mono.

### mute[int]

Mutes the input signal.

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
