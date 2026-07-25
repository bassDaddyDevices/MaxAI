---
type: ableton
name: "abl.dsp.transform~"
summary: "Signal transformer"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.transform~/"
package: "Ableton DSP"
see_also: ["abl.dsp.alternate~", "abl.dsp.euclid~", "abl.dsp.modulator~", "abl.dsp.pulsate~", "abl.dsp.ramp~", "abl.dsp.wander~"]
---
# abl.dsp.transform~

Signal transformer

## Description

A collection of common signal modifiers.

## Arguments

### macro[number] optional

Macro control. Function depends on type. Range: [0.0, 1.0]

## Attributes

### macro[float]

Macro control. Function depends on type. Range: [0.0, 1.0]

### type[int]

Sets the type of signal transformation.

Possible values:

0 = 'Offset'
(
Offset
)
Offsets the input

1 = 'Attenuverter'
(
Attenuverter
)
Scales the input

2 = 'Gate'
(
Gate
)
Passes the input through for a certain amount of time

3 = 'Skew unipolar'
(
Skew unipolar
)
Skews values towards -1 or 1

4 = 'Skew bipolar'
(
Skew bipolar
)
Skews values towards 0 or -1 and 1.

5 = 'Unipolarizer'
(
Unipolarizer
)
Restricts output to be unipolar. This transformer interpolates between three behaviors:
scaling from [-1, 1] to [0, 1], half-wave rectifying, and fully rectifying.

6 = 'Quantizer'
(
Quantizer
)
Quantizes steps to have equal height.

7 = 'Sample and hold'
(
Sample and hold
)
Captures and holds a value for a certain length of time

8 = 'Clipper'
(
Clipper
)
Hard clips a signal in various ways. The transformer switches between three behaviors
depending on the macro value:

Less than 0.5: everything below threshold is zero, and the remainder is scaled

Equal to 0.5: no clipping

Greater than 0.5: boosts and clamps everything above abs(x) = 1

9 = 'Fade in'
(
Fade in
)
Fades the signal out over the length of the ramp. To restart the ramp, use the reset
message.

10 = 'Fade out'
(
Fade out
)
Fades the signal out over the length of the ramp. To restart the ramp, use the reset
message.

11 = 'Slew down'
(
Slew down
)
Limits the speed at which values decrease

12 = 'Slew up'
(
Slew up
)
Limits the speed at which values increase

13 = 'Slew up and down'
(
Slew up and down
)
Limits the speed at which values increase or decrease

14 = 'Triggered envelope'
(
Triggered envelope
)
Turns the input signal into an exponentially decaying envelope. The decay time is
controlled by the associated FX macro value. The envelope is triggered when a zero
crossing is detected in the input signal.

15 = 'Comparator'
(
Comparator
)
Outputs -1 or 1 depending on whether the input threshold has been reached. The
associated FX macro value sets the threshold.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### float

In the second inlet, sets the macro value.

### reset

Resets transformation phase

### signal

Inlet 1: Signal to transform

Inlet 2: Macro value

## See Also

| Name | Description |
| --- | --- |
| [abl.dsp.alternate~](https://docs.cycling74.com/reference/abl.dsp.alternate~) | Alternating modulator |
| [abl.dsp.euclid~](https://docs.cycling74.com/reference/abl.dsp.euclid~) | Euclidean rhythm ramp generator |
| [abl.dsp.modulator~](https://docs.cycling74.com/reference/abl.dsp.modulator~) | Modulation signal generator |
| [abl.dsp.pulsate~](https://docs.cycling74.com/reference/abl.dsp.pulsate~) | Random pulse emitter |
| [abl.dsp.ramp~](https://docs.cycling74.com/reference/abl.dsp.ramp~) | Ramp generator |
| [abl.dsp.wander~](https://docs.cycling74.com/reference/abl.dsp.wander~) | Wandering modulator |
