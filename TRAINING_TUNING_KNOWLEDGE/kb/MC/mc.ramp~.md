---
type: mc
name: "mc.ramp~"
summary: "Trigger a Single Ramp With an Audio Signal (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.ramp~/"
package: "MC"
see_also: ["click~", "line~", "mc.snowphasor~", "rate~", "phasor~", "pong~", "trapezoid~", "triangle~", "zigzag~"]
---
# mc.ramp~

Trigger a Single Ramp With an Audio Signal (multichannel)

## Description

The [ramp~](https://docs.cycling74.com/reference/ramp~) object generates a single signal ramp between a start and end value when it detects a change in an audio signal connected to its left inlet. The duration of the ramp can be a fixed value or based on the signal in [ramp~](https://docs.cycling74.com/reference/ramp~) 's second inlet.

## Arguments

### duration[float] optional

If a float argument to [ramp](https://docs.cycling74.com/reference/ramp) is present, it sets the initial value of the duration attribute. If a signal is connected to the second inlet, the duration attribute value is ignored in favor of the value of the signal.

## Attributes

### curve[float]

The curve attribute sets the parameters of the exponential function that generates the non-linear output. It can range between -1 and 1. For ascending ramps, values of curve less than 1 produce values above the linear input and values of curve greater than 1 produce values below the linear input. As curve values near -1 or 1, the curavture becomes more extreme.

### duration[atom]

Sets the duration of the ramp in milliseconds. The [ramp](https://docs.cycling74.com/reference/ramp) object uses this value only when a signal is  *not*  connected to the second inlet.

### end[float]

Set the final value of the ramp.

### interval[int]

The curved output is a piecewise linear approximation of the exponential function. The interval attribute sets the number of samples used for each line segement. Values of interval must be a power of 2 between 2 and 64 samples. Larger values will produce a less accurate approximation but could be more efficient. If the signal vector size is less than interval, the actual segment length will be the signal vector size.

Possible values:

'2'
(
2 sample segment length
)
'4'
(
4 sample segment length
)
'8'
(
8 sample segment length
)
'16'
(
16 sample segment length
)
'32'
(
32 sample segment length
)
'64'
(
64 sample segment length
)

### mode[int]

Sets whether the duration of the ramp is recomputed if the value of the signal connected to the second (duration) inlet changes.

Possible values:

0 = 'Set Duration at Start'
(
Duration is set at the start of the ramp and remains constant
)
1 = 'Update Duration Continuously'
(
Duration can change if the signal value connected to the right inlet changes.
)
The total duration of the ramp is recomputed to take into account the elapsed time. For example, if the original ramp was 1000 ms, and the duration signal changes to 1500 ms after the ramp has been going for 400 ms, the ramp will continue for another 1100 ms. In this case the slope of the ramp will be reduced so it takes the extra time to reach the end value.

### reset[int]

Sets whether the value of the ramp resets to zero after it completes (reset equal to 1) or remains at the end value (reset equal to 0).

### retrigger[int]

When retrigger is set to 0 (off), it is not possible to retrigger a ramp while a current ramp is in progress. When set to 1 (on), you may retrigger a ramp during the current ramp. The default value is 0 (off).

### start[float]

Set the initial value of the ramp.

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Converted to  float

### float

In left or second inlet: sets the ramp duration (only used if no signal is connected to the second inlet)

In third inlet: Sets the ramp start value

In right inlet: Sets the ramp end value

### anything

TEXT\_HERE

### signal

A signal connected to the left inlet triggers the ramp when it goes from zero to non-zero

A signal connected to the second inlet sets the ramp duration

A signal connected the third inlet sets the ramp start value

A signal connected the right inlet sets the ramp end value

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## See Also

| Name | Description |
| --- | --- |
| [click~](https://docs.cycling74.com/reference/click~) | Create an impulse |
| [line~](https://docs.cycling74.com/reference/line~) | Linear signal ramp generator |
| [mc.snowphasor~](https://docs.cycling74.com/reference/mc.snowphasor~) | Control a Population of Phasors |
| [rate~](https://docs.cycling74.com/reference/rate~) | Time-scale the output of a phasor~ |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [pong~](https://docs.cycling74.com/reference/pong~) | Variable range signal folding |
| [trapezoid~](https://docs.cycling74.com/reference/trapezoid~) | Trapezoidal wavetable |
| [triangle~](https://docs.cycling74.com/reference/triangle~) | Triangle/ramp wavetable |
| [zigzag~](https://docs.cycling74.com/reference/zigzag~) | Linked list function editor |
