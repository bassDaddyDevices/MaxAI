---
type: mc
name: "mc.stepfun~"
summary: "Generate a Function Sequenced by Input Phasors (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.stepfun~/"
package: "MC"
see_also: ["stepdiv~", "function", "phasor~", "subdiv~", "shape~"]
---
# mc.stepfun~

Generate a Function Sequenced by Input Phasors (multichannel)

## Description

The [stepfun~](https://docs.cycling74.com/reference/stepfun~) object generates a breakpoint function whose timing is determined by a seqeuence of input phasor ramps. If the input ramps are non-linear, the output of [stepfun~](https://docs.cycling74.com/reference/stepfun~) will be similarly non-linear.

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

### curvepattern[atom]

An optional sequence of curve parameters for each step

### pattern[atom]

The sequence of output values; [stepfun~](https://docs.cycling74.com/reference/stepfun~) will generate ramps between these values.

### syncupdate[int]

When syncupdate is enabled, changes to the pattern do not take effect until either the input resets or output sequence completes.

Possible values:

0 = 'Off'
(
Change Immediately
)
1 = 'Input Reset'
(
Change When Input Resets
)
2 = 'After End Step'
(
Change When Output Sequence Completes
)

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  resets the sequence step to the beginning

### int

In left inlet: converted to  float

In right inlet: sets the current step number; this message has no effect if a signal is connected to the right inlet.

### float

float  received in the left inlet sets the sequence to a single constant value; if a  float  is followed by a list, it will be interpreted as the initial value of the sequence reflecting the convention of the breakpoint function format sent by the [function](https://docs.cycling74.com/reference/function) object.

### list

list  sets the sequence of output values; if the list has curve data and the curvemode attribute is set to parse curve values, the curve parameter will also be set for the corresponding step. The curve parameter varies between -1 and 1, a value of 0 means no curve. For more information see the [function](https://docs.cycling74.com/reference/function) object.

### signal

In left inlet: Phasor sequence input

In right inlet: Step number

### step

The message  step  followed by a number sets the current step. Steps are numbered starting at 0. If a signal is connected to the right inlet, the  step  message has no effect.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## See Also

| Name | Description |
| --- | --- |
| [stepdiv~](https://docs.cycling74.com/reference/stepdiv~) | Generate Phasors for Each Step of a Function |
| [function](https://docs.cycling74.com/reference/function) | Breakpoint function editor |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [subdiv~](https://docs.cycling74.com/reference/subdiv~) | Integer Subdivision of a Phasor |
| [shape~](https://docs.cycling74.com/reference/shape~) | Time-scaled Breakpoint Envelope Generator |
