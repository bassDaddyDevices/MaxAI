---
type: mc
name: "mc.subdiv~"
summary: "Integer Subdivision of a Phasor (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.subdiv~/"
package: "MC"
see_also: ["phasor~", "kink~", "line~", "mc.snowphasor~", "pong~", "rate~", "swing~", "wrap~"]
---
# mc.subdiv~

Integer Subdivision of a Phasor (multichannel)

## Description

The [subdiv~](https://docs.cycling74.com/reference/subdiv~) object evenly subdivides an input phasor signal into any integer number of output phasor signals.

#### Discussion

The [subdiv~](https://docs.cycling74.com/reference/subdiv~) object is sample-accurate when Scheduler in Audio Interrupt is enabled. More details [here](https://docs.cycling74.com/userguide/sample_accurate_messages).

## Arguments

### subdivisions[int] optional

A typed-in argument sets the initial number of subdivisions of the input.

## Attributes

### div[int]

Sets the number of subdivisions (from 1 to 16384)

### lockprob[int]

When lockprob is enabled, the cyclic probability pattern is locked to the cyclic duration pattern, so a probability decision is made per duration event. When lockprob is disabled, the probabilities follow the subdivided phasor output. Stated another way, when lockprob is disabled, the probabilities maintain their position within a cyclic duration pattern.

### pattern[atom]

Establishes a cyclic duration pattern that can modify the duration the phasor output of each step. Patterns consist of integers 1 and above, permitting you to break up the input into unequal durations. For example, if you are subdividing the input by 3, setting the pattern to  1 2 , which will output a phasor that takes 1/3 of the input time followed by a second phasor of 2/3 of the input time.

Note that [subdiv~](https://docs.cycling74.com/reference/subdiv~) does not support duration patterns that do not line up with the current input subdivision. As an example, a pattern of  2 2 2  will not produce expected results because the middle element crosses the point where the input resets. You can often avoid this limitation by increasing the subdvision and reducing the rate of the input phasor. In general, patterns can span multiples of the current subdivision and will work properly as long as they always reset when the input resets. For example, with a subdivision of 3, you will see expected results with a pattern of  2 1 1 2 1 1 1  because the output ramps will always reset when the input resets.

If the pattern does not end at input reset boundary, it is padded with a last element. For example, if the subdivision is 5, setting the pattern to  1 2  will result in a third step of  2  before the pattern resets.

### prob[atom]

With the prob you can set a pattern of probabilities for each output ramp. Patterns consist of 0, 1, or a float between 0 and 1. When the pattern value is 0, the output of [subdiv~](https://docs.cycling74.com/reference/subdiv~) will be a constant 0 for that step. When the pattern value is 1, the output of [subdiv~](https://docs.cycling74.com/reference/subdiv~) is the normal phasor ramp. When the value is between 0 and 1, it is taken as a probability of the phasor occurring for that step. The pattern does not have to have the same length as the number of subdivisions. Example: a pattern of 0 1 0.5 will, over a cycle of three steps, never output the first time, always output the second time, and output the third step half the time. To clear the pattern (and always output every step), send the message  prob  the argument  none  or no arguments.

When both prob probability pattern and a pattern duration multiplier pattern are in use, the prob pattern is consulted whenver a new step in the duration pattern is started.

### silentmode[int]

Determines index output for when phasor output is skipped

Possible values:

0 = 'Hold Previous Step'
(
Don't change step number
)
When silentmode is set to Hold Previous Step (0), the index output of [subdiv~](https://docs.cycling74.com/reference/subdiv~) does not change from the previous step if the phasor output is zero.

1 = 'Output -1'
(
Output -1
)
When silentmode is set to Output -1 (1), the index output of [subdiv~](https://docs.cycling74.com/reference/subdiv~) is -1 if the phasor output is zero.

### syncupdate[int]

If syncupdate is enabled, changes to the subdivision value will only take effect when either the input or output resets, according to the value of the enum.

Possible values:

0 = 'Off'
(
No Update Synchronization
)
Changes to the subdivision value take effect immediately.

1 = 'Output Reset'
(
Update on Output Reset
)
Changes to the subdivision value take effect when the output phasor resets.

2 = 'Input Reset'
(
Update on Input Reset
)
Changes to the subdivision value take effect when the input phasor resets.

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Sets the number of subdivisions (from 1 to 16384)

Arguments:

- subdivisions
  [int]

### float

Converted to  int

Arguments:

- subdivisions
  [float]

### signal

Drive a [subdiv~](https://docs.cycling74.com/reference/subdiv~) object with a signal that ramps from 0 to 1.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## See Also

| Name | Description |
| --- | --- |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [kink~](https://docs.cycling74.com/reference/kink~) | Distort a sawtooth waveform |
| [line~](https://docs.cycling74.com/reference/line~) | Linear signal ramp generator |
| [mc.snowphasor~](https://docs.cycling74.com/reference/mc.snowphasor~) | Control a Population of Phasors |
| [pong~](https://docs.cycling74.com/reference/pong~) | Variable range signal folding |
| [rate~](https://docs.cycling74.com/reference/rate~) | Time-scale the output of a phasor~ |
| [swing~](https://docs.cycling74.com/reference/swing~) | Subdivide a phasor into two unequal phasors |
| [wrap~](https://docs.cycling74.com/reference/wrap~) |  |
