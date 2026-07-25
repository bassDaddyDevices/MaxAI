---
type: mc
name: "mc.line"
summary: "Generate timed ramp  (multichannel)"
signal: false
url: "https://docs.cycling74.com/reference/mc.line/"
package: "Max"
see_also: ["bline", "funbuff", "line~", "setclock", "uzi"]
---
# mc.line

Generate timed ramp (multichannel)

## Description

Generate ramps and line segments from one value to another within a specified amount of time.

## Arguments

### initial[number] optional

Sets the initial value to be stored in [line](https://docs.cycling74.com/reference/line) and the output type for the object (floating-point or integer). If there is no argument, the initial value is  0  and the output type is  int .

### grain[number] optional

Sets an initial value for the grain: the time interval at which numbers are sent out. If the grain is not specified, [line](https://docs.cycling74.com/reference/line) outputs a number every 20 milliseconds. The minimum grain allowed is 1 millisecond; any number less than 1 will be set to  20 .

## Attributes

### compatmode[int]: 0

Provides compatibility when importing patches created with versions 7.x and earlier of Max. Set compatmode to 1 to use legacy behavior.

### floatoutput[int]: 2

Sets the floating-point output mode for the [line](https://docs.cycling74.com/reference/line) object. The default is 2 (auto).

Possible values:

0 = 'Off'
(
Floating-Point Output off
)
Does not output float values. If the  initial  argument is an integer, the floatoutput is set to off.

1 = 'On'
(
Floating-Point Output on
)
Outputs float values if specified in the  initial  argument.

2 = 'Auto'
(
Floating-Point Output Auto
)
Ouputs float values if distance is <= 1, line does not have a float argument, and step size is < 0.4.

### grain[float]: 20.

Sets the grain value: the time interval at which numbers are sent out. The default is 20 milliseconds. The minimum grain allowed is 1 millisecond.

### maxpoints[int]: 129

Sets the maximum number of user defined points. The default is 129. To allow a greater number of points, use the maxpoints attribute.

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: The number is the target value, to be arrived at in the time specified by the number in the middle inlet. If no time has been specified since the last target value, the time is considered 0 and [line](https://docs.cycling74.com/reference/line) immediately outputs the target value.

Note: the output type for the [line](https://docs.cycling74.com/reference/line) object is set by using the first argument to the object (see Arguments).

In middle inlet: The number is the time, in milliseconds, in which to arrive at the target value.

In right inlet: The number is the interval (in milliseconds) at which intermediary numbers are regularly sent out.

Arguments:

- input
  [int]

### float

Performs the same function as  int  but with floats only if the object-argument is a float.

Arguments:

- input
  [float]

### list

Use various list combinations to reach a target value.

In one list combination, the first number specifies a starting value, followed by a comma and a number pair. The first number in the pair specifies the target value. The second number of the pair specifies the total amount of time (in milliseconds) in which [line](https://docs.cycling74.com/reference/line) should reach the target value. In that amount of time, numbers are output regularly in a line from the currently stored value to the target value.

An example of this type of list is  0, 1 1000 0 1000 . In this example, line would go from the starting value of 0 to 1 in one second, then back down to 0 in one second. Once the first ramp has reached its target value, the next one starts. A subsequent  list ,  float , or  int  in the left inlet clears all ramps yet to be generated.

In another combination, the first number specifies a target value, not followed a comma, and the second number specifies a total amount of time (in milliseconds) in which [line](https://docs.cycling74.com/reference/line) should reach the target value. The third number, which is optional, sets the grain. Grain will affect the time interval at which numbers are sent out. Once grains are set in a list, they will override the default until manually reset.

An example of this type of list is  1 1000 100 . In this example, line would go from the current value to 1 in a second, outputting a value every 100 milliseconds.

If the list has an even number of elements greater than three, each pair of elements is considered a destination-ramptime pair in a breakpoint function. If the list has an odd number of elements greater than three, the last element will be ignored.

Arguments:

- input
  [list]

### clock

The word  clock , followed by the name of an existing  setclock  object, sets the [line](https://docs.cycling74.com/reference/line) object to be controlled by that  setclock  object rather than by Max’s internal millisecond clock. The word  clock  by itself sets the [line](https://docs.cycling74.com/reference/line) object back to using Max’s regular millisecond clock.

Arguments:

- setclock object name
  [symbol]

### pause

In left inlet: Pauses the internal ramp but does not change the target value nor clear pending target-time pairs. [line](https://docs.cycling74.com/reference/line) will continue outputting whatever value was its current value when the  pause  message was received, until either it receives a  resume  message or until a new ramp is input.

### resume

In left inlet: Resumes the internal ramp and subsequent pending target-time pairs if the [line](https://docs.cycling74.com/reference/line) object was paused as a result of the  pause  message.

### set

In left inlet: The word  set , followed by a number, makes that number the new starting value from which to proceed to the next received target value. The  set  message also stops [line](https://docs.cycling74.com/reference/line) if it is in the process of sending out numbers.

Arguments:

- input
  [float]

### stop

In left inlet: Stops [line](https://docs.cycling74.com/reference/line) from sending out numbers, until a new target value is received.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### bang

Out right outlet: When [line](https://docs.cycling74.com/reference/line) has arrived at its target value,  bang  is sent out.

Note: In practice, the target value is arrived at in just under the amount of time specified (time minus grain).

### int

Out left outlet: Numbers are sent out at regular intervals, describing a straight line toward a target value. If a new target value and time are specified before the line is completed, the new line starts from the most recent output value, in order to avoid discontinuities.

If a value is received in the left inlet without an accompanying time value, it is sent out immediately (time is considered 0).

## See Also

| Name | Description |
| --- | --- |
| [bline](https://docs.cycling74.com/reference/bline) | Generate ramps using bang |
| [funbuff](https://docs.cycling74.com/reference/funbuff) | Store pairs of numbers |
| [line~](https://docs.cycling74.com/reference/line~) | Linear signal ramp generator |
| [setclock](https://docs.cycling74.com/reference/setclock) | Create and control an alternative clock |
| [uzi](https://docs.cycling74.com/reference/uzi) | Send many bang messages |
