---
type: mc
name: "mc.curve~"
summary: "Exponential ramp generator (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.curve~/"
package: "MC"
see_also: ["line~", "transport"]
---
# mc.curve~

Exponential ramp generator (multichannel)

## Description

Use the [curve~](https://docs.cycling74.com/reference/curve~) object to produce a signal that goes from an initial to target value over a specified time. It is similar to the [line~](https://docs.cycling74.com/reference/line~) object, it produces non-linear ramps using a piecewise approximation of an exponential function.

#### Discussion

This object uses the Max [time formats](https://docs.cycling74.com/userguide/time_value_syntax) syntax; envelope times can be either single valued fixed or tempo-relative. The [curve~](https://docs.cycling74.com/reference/curve~) object produces non-linear ramps using a piecewise approximation of an exponential function. You specify the parameter to this exponential function in the curve~ object's right inlet. Values from 0 to 1 produce an "exponential" curve when increasing in value and values from -1 to 0 produce a "logarithmic" curve. The closer to 0 the curve parameter is, the closer the curve is to a straight line, and the farther away the parameter is from 0, the steeper the curve. [curve~](https://docs.cycling74.com/reference/curve~) can also accept a list of up to two or three arguments (the previous curve parameter is used if there are two arguments), or a list with two or more value, time, parameter triples. The [curve~](https://docs.cycling74.com/reference/curve~) is limited to 42 such triples in a single list. The object's approximation of the exponential becomes better when the vector size is smaller, but the object also becomes more computationally expensive.

The [curve~](https://docs.cycling74.com/reference/curve~) object is sample-accurate when Scheduler in Audio Interrupt is enabled. More details [here](https://docs.cycling74.com/userguide/sample_accurate_messages).

## Arguments

### initial-value[number] optional

The first argument sets an initial value for the signal output. The default value for the parameter is 0.

### curve-parameter[number] optional

The second argument sets the initial curve parameter. The default value for the curve parameter is 0.

## Attributes

### activeout[int]: 0

When activeout is 1, [curve~](https://docs.cycling74.com/reference/curve~) has a second signal outlet that outputs 1 when the ramp is active and 0 when it is not active. This signal can be connected to polyphonic voice allocator objects such as [thispoly~](https://docs.cycling74.com/reference/thispoly~) or [mc.noteallocator~](https://docs.cycling74.com/reference/mc.noteallocator~) to maintain a busy state while the line is active. activeout can only be set as a typed-in argument to [curve~](https://docs.cycling74.com/reference/curve~).

### maxpoints[int]

Specify the maximum number of user defined points allowed in the curve. The default is 129 points.

### shapemode[int]: 0

Preserve Curve Shape

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: The number is the target value, to be arrived at in the time specified by the number in the middle inlet. If no time has been specified since the last target value, the time is considered to be 0 and the output signal jumps immediately to the target value (ints are converted to floats).

Arguments:

- target-value
  [int]

### float

In left inlet: The number is the target value, to be arrived at in the time specified by the number in the middle inlet. If no time has been specified since the last target value, the time is considered to be 0 and the output signal jumps immediately to the target value.

Arguments:

- target-value
  [float]

### list

In left inlet: The first number specifies a target value; the second number specifies an amount of time, in milliseconds, to arrive at that value; and the optional third number specifies a curve parameter, for which values from 0 to 1 produce an exponential curve and values from -1 to 0 produce a logarithmic curve. The closer to 0 the curve parameter is, the more the curve resembles a straight line, and the farther away the parameter is from 0, the more the curve resembles a step. In the specified amount of time, [curve~](https://docs.cycling74.com/reference/curve~) generates an exponential ramp signal from the currently stored value to the target value.

In middle inlet: A list may be used to specify time in one of the Max [time formats](https://docs.cycling74.com/userguide/time_value_syntax).

Arguments:

- target-value
  [number]
- ramp-time
  [float]
- curve-parameter
  [float]

### anything

In left inlet: The first number specifies a target value; the second number specifies an amount of time, in milliseconds, to arrive at that value; and the optional third number specifies a curve parameter, for which values from 0 to 1 produce an exponential curve and values from -1 to 0 produce a logarithmic curve. The closer to 0 the curve parameter is, the more the curve resembles a straight line, and the farther away the parameter is from 0, the more the curve resembles a step. In the specified amount of time, [curve~](https://docs.cycling74.com/reference/curve~) generates an exponential ramp signal from the currently stored value to the target value.

In middle inlet: A list may be used to specify time in one of the Max [time formats](https://docs.cycling74.com/userguide/time_value_syntax).

Arguments:

- target-value
  [number]
- ramp-time
  [float]
- curve-parameter
  [float]

### factor

The word  factor  followed by a float will adjust the non-linear shaping parameters of [curve~](https://docs.cycling74.com/reference/curve~).

Arguments:

- nonlinear-factor
  [float]

### pause

In left inlet: Pauses the internal exponential ramp but does not change the target value nor clear pending target-time-parameter triples. [curve~](https://docs.cycling74.com/reference/curve~) will continue outputting whatever value was its current value when the  pause  message was received, until either it receives a  resume  message or until a new ramp is input.

### resume

In left inlet: Resumes the internal exponential ramp and subsequent pending target-time pairs if the [curve~](https://docs.cycling74.com/reference/curve~) object was paused as a result of the  pause  message.

### stop

In left inlet: Stops the internal exponential ramp and clears pending target-time parameter triples. [curve~](https://docs.cycling74.com/reference/curve~) will continue outputting whatever value was its current value when the  stop  message was received, resetting its target value to that value.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### bang

Out right outlet: When [curve~](https://docs.cycling74.com/reference/curve~) has finished generating all of its ramps,  bang  is sent out.

### signal

Out left outlet: The current target value, or an exponential curve moving toward the target value according to the most recently received target value, transition time, and curve parameter.

### signal

Out middle outlet: If activeout is enabled, [curve~](https://docs.cycling74.com/reference/curve~) has an additional signal outlet that outputs 1 when the object's ramp is active.

## See Also

| Name | Description |
| --- | --- |
| [line~](https://docs.cycling74.com/reference/line~) | Linear signal ramp generator |
| [transport](https://docs.cycling74.com/reference/transport) | Control a clock |
