---
type: msp
name: "line~"
summary: "Linear signal ramp generator"
signal: true
url: "https://docs.cycling74.com/reference/line~/"
package: "MSP"
see_also: ["adsr~", "click~", "curve~", "line", "transport", "zigzag~"]
---
# line~

Linear signal ramp generator

## Description

Use the [line~](https://docs.cycling74.com/reference/line~) object to generate a signal ramp or envelope. It uses the Max [time format](https://docs.cycling74.com/userguide/time_value_syntax) syntax; envelope times can be either single valued fixed or tempo-relative.

#### Discussion

The [line~](https://docs.cycling74.com/reference/line~) object is sample-accurate when Scheduler in Audio Interrupt is enabled. More details [here](https://docs.cycling74.com/userguide/sample_accurate_messages).

## Arguments

### initial-value[float or int] optional

Sets an initial value for the signal output. The default value is  0 .

## Attributes

### activeout[int]: 0

When activeout is 1, [line~](https://docs.cycling74.com/reference/line~) has a second signal outlet that outputs 1 when the ramp is active and 0 when it is not active. This signal can be connected to polyphonic voice allocator objects such as [thispoly~](https://docs.cycling74.com/reference/thispoly~) or [mc.noteallocator~](https://docs.cycling74.com/reference/mc.noteallocator~) to maintain a busy state while the line is active. activeout can only be set as a typed-in argument to [line~](https://docs.cycling74.com/reference/line~).

### maxpoints[int]

Specify the maximum number of user defined points allowed in the line. The default is 129 points. maxpoints can only be set as a typed-in argument to [line~](https://docs.cycling74.com/reference/line~).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: The number is the target value, to be arrived at in the time specified by the number in the right inlet. If no time has been specified since the last target value, the time is considered to be 0 and the output signal jumps immediately to the target value.

In right inlet: The number is the time, in milliseconds, in which the output signal will arrive at the target value.

Arguments:

- target-value/delta-time
  [int]

### float

In left inlet: The number is the target value, to be arrived at in the time specified by the number in the right inlet. If no time has been specified since the last target value, the time is considered to be 0 and the output signal jumps immediately to the target value.

In right inlet: The number is the time, in milliseconds, in which the output signal will arrive at the target value.

Arguments:

- target-value/delta-time
  [float]

### list

In left inlet: The first number specifies a target value and the second number specifies a total amount of time (in milliseconds) in which [line~](https://docs.cycling74.com/reference/line~) should reach the target value. In the specified amount of time, [line~](https://docs.cycling74.com/reference/line~) generates a ramp signal from its current value to the target value.

[line~](https://docs.cycling74.com/reference/line~) accepts up to 128 target-time pairs in a list, to generate compound ramps. (An example would be  0 1000 1 1000 , which would go from the current value to 0 in a second, then to 1 in a second.) Once one of the ramps has reached its target value, the next one starts. A subsequent  list ,  float , or  int  in the left inlet clears all ramps yet to be generated.

A list consisting of a number, followed by a comma and up to 128 target-time pairs, will set an initial value for the ramp. An example would be  0, 1 1000  which would set an initial value of 0, a new value of 1, and a target time of 1000 ms.

In right inlet: A list may be used to specify time in one of the Max [time formats](https://docs.cycling74.com/userguide/time_value_syntax).

Arguments:

- target-value
  [float]
- delta-time
  [number]

### anything

In left inlet: The first number specifies a target value and the second number specifies a total amount of time (in milliseconds) in which [line~](https://docs.cycling74.com/reference/line~) should reach the target value. In the specified amount of time, [line~](https://docs.cycling74.com/reference/line~) generates a ramp signal from its current value to the target value.

[line~](https://docs.cycling74.com/reference/line~) accepts up to 128 target-time pairs in a list, to generate compound ramps. (An example would be  0 1000 1 1000 , which would go from the current value to 0 in a second, then to 1 in a second.) Once one of the ramps has reached its target value, the next one starts. A subsequent  list ,  float , or  int  in the left inlet clears all ramps yet to be generated.

A list consisting of a number, followed by a comma and up to 128 target-time pairs, will set an initial value for the ramp. An example would be  0, 1 1000  which would set an initial value of 0, a new value of 1, and a target time of 1000 ms.

In right inlet: A list may be used to specify time in one of the Max [time formats](https://docs.cycling74.com/userguide/time_value_syntax).

Arguments:

- target-value
  [float]
- delta-time
  [number]

### pause

In left inlet: Pauses the internal ramp but does not change the target value nor clear pending target-time pairs. [line~](https://docs.cycling74.com/reference/line~) will continue outputting whatever value was its current value when the  pause  message was received, until either it receives a  resume  message or until a new ramp is input.

### resume

In left inlet: Resumes the internal ramp and subsequent pending target-time pairs if the [line~](https://docs.cycling74.com/reference/line~) object was paused as a result of the  pause  message.

### stop

In left inlet: Stops the internal ramp and clears pending target-time pairs. [line~](https://docs.cycling74.com/reference/line~) will continue outputting whatever value was its current value when the  stop  message was received, resetting its target value to that value.

## Output

### bang

Out right outlet: When [line~](https://docs.cycling74.com/reference/line~) has finished generating all of its ramps,  bang  is sent out.

### signal

Out left outlet: The current target value, or a ramp moving toward the target value according to the currently stored value and the target time.

### signal

Out middle outlet: If activeout is enabled, [line~](https://docs.cycling74.com/reference/line~) has an additional signal outlet that outputs 1 when the object's ramp is active.

## See Also

| Name | Description |
| --- | --- |
| [adsr~](https://docs.cycling74.com/reference/adsr~) | ADSR envelope generator |
| [click~](https://docs.cycling74.com/reference/click~) | Create an impulse |
| [curve~](https://docs.cycling74.com/reference/curve~) | Exponential ramp generator |
| [line](https://docs.cycling74.com/reference/line) | Generate timed ramp |
| [transport](https://docs.cycling74.com/reference/transport) | Control a clock |
| [zigzag~](https://docs.cycling74.com/reference/zigzag~) | Linked list function editor |
