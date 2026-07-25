---
type: ableton
name: "abl.dsp.ramp~"
summary: "Ramp generator"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.ramp~/"
package: "Ableton DSP"
see_also: ["abl.dsp.alternate~", "abl.dsp.euclid~", "abl.dsp.modulator~", "abl.dsp.pulsate~", "abl.dsp.transform~", "abl.dsp.wander~"]
---
# abl.dsp.ramp~

Ramp generator

## Description

A ramping modulation source.

## Arguments

### frequency[number] optional

Frequency

### phase[number] optional

Phase

### shape[number] optional

Shape

### slope[number] optional

Slope

## Attributes

### frequency[float]

Sets the frequency of the modulator (in Hz). [0.01, 200.]

### fx1[float]

Applies a transformer to the modulator. [0., 1.]

### fx1\_type[int]

Sets the type of the first modulator transformation.
Possible values:

0 = 'None'
(
None
)
No transformation

1 = 'Offset'
(
Offset
)
Offsets the input

2 = 'Attenuverter'
(
Attenuverter
)
Scales the input

3 = 'Gate'
(
Gate
)
Passes the input through for certain amount of time

4 = 'Skew unipolar'
(
Skew unipolar
)
Skews values towards -1 or 1

5 = 'Skew bipolar'
(
Skew bipolar
)
Skews values towards 0 or -1 and 1.

6 = 'Unipolarizer'
(
Unipolarizer
)
Restricts output to be unipolar. This transformer interpolates between three behaviors:
scaling from [-1, 1] to [0, 1], half-wave rectifying, and fully rectifying.

7 = 'Quantizer'
(
Quantizer
)
Quantizes steps to have equal height.

8 = 'Sample and hold'
(
Sample and hold
)
Captures and holds a value for a certain length of time

9 = 'Independent sample and hold'
(
Independent sample and hold
)
Captures and holds a value for a certain length of time, independent of the modulator's
frequency

10 = 'Clipper'
(
Clipper
)
Hard clips a signal in various ways. The transformer switches between three behaviors
depending on the macro value:

Less than 0.5: everything below threshold is zero, and the remainder is scaled

Equal to 0.5: no clipping

Greater than 0.5: boosts and clamps everything above abs(x) = 1

11 = 'Fade in'
(
Fade in
)
Fades the signal out over the length of the ramp. To restart the ramp, use the reset
message.

12 = 'Fade out'
(
Fade out
)
Fades the signal out over the length of the ramp. To restart the ramp, use the reset
message.

13 = 'Slew down'
(
Slew down
)
Limits the speed at which values decrease

14 = 'Slew up'
(
Slew up
)
Limits the speed at which values increase

15 = 'Slew up and down'
(
Slew up and down
)
Limits the speed at which values increase or decrease

16 = 'Triggered envelope'
(
Triggered envelope
)
Turns the input signal into an exponentially decaying envelope. The decay time is
controlled by the associated FX macro value. The envelope is triggered when a zero
crossing is detected in the input signal.

17 = 'Comparator'
(
Comparator
)
Outputs -1 or 1 depending on whether the input threshold has been reached. The
associated FX macro value sets the threshold.

### fx2[float]

Apply a second transformer to the modulator. [0., 1.]

### fx2\_type[int]

Sets the type of the second modulator transformation.
Possible values:

0 = 'None'
(
None
)
No transformation

1 = 'Offset'
(
Offset
)
Offsets the input

2 = 'Attenuverter'
(
Attenuverter
)
Scales the input

3 = 'Gate'
(
Gate
)
Passes the input through for certain amount of time

4 = 'Skew unipolar'
(
Skew unipolar
)
Skews values towards -1 or 1

5 = 'Skew bipolar'
(
Skew bipolar
)
Skews values towards 0 or -1 and 1.

6 = 'Unipolarizer'
(
Unipolarizer
)
Restricts output to be unipolar. This transformer interpolates between three behaviors:
scaling from [-1, 1] to [0, 1], half-wave rectifying, and fully rectifying.

7 = 'Quantizer'
(
Quantizer
)
Quantizes steps to have equal height.

8 = 'Sample and hold'
(
Sample and hold
)
Captures and holds a value for a certain length of time

9 = 'Independent sample and hold'
(
Independent sample and hold
)
Captures and holds a value for a certain length of time, independent of the modulator's
frequency

10 = 'Clipper'
(
Clipper
)
Hard clips a signal in various ways. The transformer switches between three behaviors
depending on the macro value:

Less than 0.5: everything below threshold is zero, and the remainder is scaled

Equal to 0.5: no clipping

Greater than 0.5: boosts and clamps everything above abs(x) = 1

11 = 'Fade in'
(
Fade in
)
Fades the signal out over the length of the ramp. To restart the ramp, use the reset
message.

12 = 'Fade out'
(
Fade out
)
Fades the signal out over the length of the ramp. To restart the ramp, use the reset
message.

13 = 'Slew down'
(
Slew down
)
Limits the speed at which values decrease

14 = 'Slew up'
(
Slew up
)
Limits the speed at which values increase

15 = 'Slew up and down'
(
Slew up and down
)
Limits the speed at which values increase or decrease

16 = 'Triggered envelope'
(
Triggered envelope
)
Turns the input signal into an exponentially decaying envelope. The decay time is
controlled by the associated FX macro value. The envelope is triggered when a zero
crossing is detected in the input signal.

17 = 'Comparator'
(
Comparator
)
Outputs -1 or 1 depending on whether the input threshold has been reached. The
associated FX macro value sets the threshold.

### phase[float]

Sets the normalized phase. [0., 1.]

### shape[float]

Shape [0., 1.]

### slope[float]

Slope [0., 1.]

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
| [abl.dsp.alternate~](https://docs.cycling74.com/reference/abl.dsp.alternate~) | Alternating modulator |
| [abl.dsp.euclid~](https://docs.cycling74.com/reference/abl.dsp.euclid~) | Euclidean rhythm ramp generator |
| [abl.dsp.modulator~](https://docs.cycling74.com/reference/abl.dsp.modulator~) | Modulation signal generator |
| [abl.dsp.pulsate~](https://docs.cycling74.com/reference/abl.dsp.pulsate~) | Random pulse emitter |
| [abl.dsp.transform~](https://docs.cycling74.com/reference/abl.dsp.transform~) | Signal transformer |
| [abl.dsp.wander~](https://docs.cycling74.com/reference/abl.dsp.wander~) | Wandering modulator |
