---
type: ableton
name: "abl.device.delay~"
summary: "Stereo delay"
signal: true
url: "https://docs.cycling74.com/reference/abl.device.delay~/"
package: "Ableton DSP"
see_also: ["abl.device.echo~"]
---
# abl.device.delay~

Stereo delay

## Description

Stereo delay

## Arguments

### feedback[number] optional

Feedback

## Attributes

### delay[2 floats]

Sets the left and right delay time in seconds. [0.001, 5.]

### eco[int]

Enables/disables eco mode for cheaper processing.

### feedback[float]

Sets the gain of the feedback loops. [0., 0.95]

### filter[int]

Enables/disables the internal bandpass filter.

### filter\_frequency[float]

Sets the frequency of the internal bandpass filter. [50., 18000.]

### filter\_width[float]

Sets the width of the internal bandpass filter. [0.5, 9.]

### freeze[int]

Enables/disables delay freeze.

### mix[float]

Sets the dry/wet mix of the output signal. [0., 1.]

### modfilter[float]

Sets the amplitude of the internal filter modulation. [0., 1.]

### modfreq[float]

Sets the internal modulation oscillator frequency which can control the filter and delay times. [0.01,
40.]

### modtime[float]

Sets the amplitude of the internal delay time modulation. [0., 1.]

### pingpong[int]

Enables/disables ping-pong delay mode.

### smoothmode[int]

Sets the behavior of the delay when delay time is changed.

Possible values:

0 = 'Repitch'
(
Repitch
)
Repitch causes a pitch variation, similar to the behavior of old tape delay units.

1 = 'Fade'
(
Fade
)
Fade creates a crossfade between the old and new delay times. This sounds similar to
time stretching if the delay time is changed gradually.

2 = 'Jump'
(
Jump
)
Jump immediately changes to the new delay time (which can cause audible artifacts).

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

Clear delay lines

### reset

Reset

### signal

Function depends on inlet

## See Also

| Name | Description |
| --- | --- |
| [abl.device.echo~](https://docs.cycling74.com/reference/abl.device.echo~) | Modulation delay |
