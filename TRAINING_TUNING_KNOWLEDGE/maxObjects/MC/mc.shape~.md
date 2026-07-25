---
type: mc
name: "mc.shape~"
summary: "Time-scaled Breakpoint Envelope Generator (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.shape~/"
package: "MC"
see_also: ["function", "curve~", "line~", "mc.pattern~", "phasor~", "ramp~", "techno~", "zigzag~"]
---
# mc.shape~

Time-scaled Breakpoint Envelope Generator (multichannel)

## Description

An envelope for the [shape~](https://docs.cycling74.com/reference/shape~) object can be defined using the same format as the [line~](https://docs.cycling74.com/reference/line~) or [zigzag~](https://docs.cycling74.com/reference/zigzag~) objects (and edited graphically by connecting a [function](https://docs.cycling74.com/reference/function) object). Unlike [line~](https://docs.cycling74.com/reference/line~) the time values of [shape~](https://docs.cycling74.com/reference/shape~) are normalized so that the output occurs within signal ramp of a phasor from 0 to 1 (or 1 to 0). This means you can trigger the output sample-accurately and determine the time of the function by using different ramp durations (or [phasor~](https://docs.cycling74.com/reference/phasor~) frequencies).

## Arguments

None.

## Attributes

### constant[int]

Sets the number of initial segments of the envelope that will be played at a constant time based on their millisecond time values independent of the input ramp duration. The default value for constant is zero, meaning none of the segments will be played with a constant time -- all segments will be scaled. If constant is 1, the first ("attack) segment will have a constant time and the remaining segments will be scaled to occupy the part of the incoming ramp starting when the input value when the constant portion of the output ends. For example, if the first segment is constant and it ends when the input is equal to 0.5, the remaining part of the envelope will be re-normalized to fit into the space between 0.5 and 1.

Note that the constant attribute only works with ascending ramps and can only designate segments at the beginning of an envelope.

### curvemode[int]

Sets whether [shape~](https://docs.cycling74.com/reference/shape~) plays curved breakpoints and how it interprets incoming lists.

Possible values:

0 = 'Off'
(
No curved breakpoints
)
When curvemode is disabled (Off), [shape~](https://docs.cycling74.com/reference/shape~) interprets incoming lists to set its breakpoints as  time, alue  pairs. If any curved breakpionts were previously set, they are played as linear ramps.

1 = 'On'
(
Use curved breakpoints
)
When curvemode is enabled (On), [shape~](https://docs.cycling74.com/reference/shape~) interprets incoming lists to be triplets consisting of  time, value, curvature . All curved breakpoints are output with their curvature.

2 = 'Auto'
(
Use connected function mode setting
)
When curvemode is set to Auto, [shape~](https://docs.cycling74.com/reference/shape~) determines how to interpret incoming lists on the basis of the mode attribute of a connected [function](https://docs.cycling74.com/reference/function) or [mc.function](https://docs.cycling74.com/reference/mc.function) object. If mode is set to 0 (Linear), lists are interpreted as  time, value  pairs. If mode is set to 1 (Curve), lists are interpreted as  time, value, curvature  triplets. If any segments contain non-zero curvature, they are played with their curvature.

In order for Auto mode to work properly, the [function](https://docs.cycling74.com/reference/function) object must have its second outlet directly connected to the left inlet of [shape](https://docs.cycling74.com/reference/shape).

### syncupdate[int]: 0

When syncupdate is enabled, changes to the breakpoint function do not affect the output of [shape~](https://docs.cycling74.com/reference/shape~) until the input phasor or ramp resets. When syncupdate is disabled, changes happen immediately when [shape~](https://docs.cycling74.com/reference/shape~) receives a new list of breakpoints.

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Converted to  float

### float

float  in the left inlet defines the the initial value of the function. Without a subsequent  list  message, a single  float  does not cause a new function to be defined (or the existing function to be replaced).

Arguments:

- initial-value
  [float]

### list

list  message defines the breakpoint function used by [shape~](https://docs.cycling74.com/reference/shape~). There are two options for the format of the list, depending on the setting of the curvemode attribute. When curvemode is disabled, the format of the list is in  value, time  pairs where the first number is a destination value and the second number is the time in milliseconds it takes to get to that value from the previous value. This format (along with an initial  float  value0) is produced by the second outlet of the [function](https://docs.cycling74.com/reference/function) object. The millisecond time values are normalized; in other words, they are divided by the total length of the function. Longer times between breakpoints will be longer than shorter times but the exact times will be dependent on the duration of the incoming ramp.

When curvemode is enabled, the list format starts with the initial  float  followed by triplets of numbers --  value, time, curvature -- for each breakpoint. The curvature value ranges from -1 to 1.

Arguments:

- breakpoints
  [list]

### signal

[shape~](https://docs.cycling74.com/reference/shape~) starts its output when the input ramp either turns on or resets.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## See Also

| Name | Description |
| --- | --- |
| [function](https://docs.cycling74.com/reference/function) | Breakpoint function editor |
| [curve~](https://docs.cycling74.com/reference/curve~) | Exponential ramp generator |
| [line~](https://docs.cycling74.com/reference/line~) | Linear signal ramp generator |
| [mc.pattern~](https://docs.cycling74.com/reference/mc.pattern~) | Signal Pattern Sequencer and Recorder |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [ramp~](https://docs.cycling74.com/reference/ramp~) | Trigger a Single Ramp With an Audio Signal |
| [techno~](https://docs.cycling74.com/reference/techno~) | Signal-driven step sequencer |
| [zigzag~](https://docs.cycling74.com/reference/zigzag~) | Linked list function editor |
