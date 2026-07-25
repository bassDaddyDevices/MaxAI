---
type: mc
name: "mc.stepdiv~"
summary: "Generate Phasors for Each Step of a Function (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.stepdiv~/"
package: "MC"
see_also: ["stepfun~", "phasor~", "subdiv~", "function", "shape~"]
---
# mc.stepdiv~

Generate Phasors for Each Step of a Function (multichannel)

## Description

The [stepdiv~](https://docs.cycling74.com/reference/stepdiv~) object produces a signal output consisting of a sequence of phasors according to the delta times in a breakpoint function list produced by the [function](https://docs.cycling74.com/reference/function) object. When a phasor signal is connected to the left inlet, [stepdiv~](https://docs.cycling74.com/reference/stepdiv~) subdivides the phasor according to the relative times of the breakpoints. When no signal input is connected, [stepdiv~](https://docs.cycling74.com/reference/stepdiv~) produces phasors over the specified delta times. Connect the left and right outputs of [stepdiv~](https://docs.cycling74.com/reference/stepdiv~) to [stepfun~](https://docs.cycling74.com/reference/stepfun~) to generate the actual function data.

## Arguments

None.

## Attributes

### curvemode[int]: 2

Determine how list input is interpreted

Possible values:

0 = 'Off'
(
No curve data
)
When curvemode is set to Off, an incoming list is always interpeted as a series of value-time pairs.

1 = 'On'
(
Always interpret curve data
)
When curvemode is set to On, an incoming list is always interpeted as a series of three values: value, time, and curve parameter.

2 = 'Auto'
(
Use connected function object's curve mode
)
When curvemode is set to Auto, an incoming list is interpreted according to the current setting of the [function](https://docs.cycling74.com/reference/function) object that originally sent the data.

### loop[int]

When there is no signal input to [stepdiv~](https://docs.cycling74.com/reference/stepdiv~) the loop attribute, if enabled, loops the phasor sequence once it has been triggered with a  bang  message.

### pattern[atom]

You can set the relative or absolute durations of each output phasor~ by assigning one or more times to the pattern attribute. The pattern is also set via the  list  and  what  messages.

### syncupdate[int]

When syncupdate is enabled, changes to the pattern do not take effect until the input phasor resets (if a signal is connected to the left inlet) or the output sequence completes (if no signal is connected).

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

When a signal is not connected to the input, a  bang  messages starts the phasor output. If the loop attribute is enabled, output will restart from the beginning after all steps of the function have been sent out. The start of the output is sample-accurate when scheduler in audio interrupt is enabled.

### int

In left inlet: converted to  float

In right inlet: if no signal inlet is connected, sets the current step number

### float

In left inlet: sets a pattern of one step with the specified time.

### list

A list is interpreted as a breakpoint function in [line~](https://docs.cycling74.com/reference/line~) format as produced by [function](https://docs.cycling74.com/reference/function). The time values are used for absolute or relative phasor durations.

### signal

If a signal is connected, [stepdiv~](https://docs.cycling74.com/reference/stepdiv~) divides the input phasor into a sequence of output phasors whose duration time reflects the time of each step as a proportion of the entire function. For example, times of 50 and 25 would produce two phasors; the first will last the first 2/3 of the input phasor duration and the second the final 1/3.

### what

The message  what  followed a one or more numbers, creates a sequence of phasors defined by treating the values as offsets from the beginning rather than delta times. For example  what 0.25 0.5 0.75  will generate a sequence of three phasors that will reset at 25%, 50%, and 75% of the input phasor.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## See Also

| Name | Description |
| --- | --- |
| [stepfun~](https://docs.cycling74.com/reference/stepfun~) | Generate a Function Sequenced by Input Phasors |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [subdiv~](https://docs.cycling74.com/reference/subdiv~) | Integer Subdivision of a Phasor |
| [function](https://docs.cycling74.com/reference/function) | Breakpoint function editor |
| [shape~](https://docs.cycling74.com/reference/shape~) | Time-scaled Breakpoint Envelope Generator |
