---
type: max
name: "bline"
summary: "Generate ramps using  bang"
signal: false
url: "https://docs.cycling74.com/reference/bline/"
package: "Max"
see_also: ["funbuff", "line", "uzi"]
---
# bline

Generate ramps using  bang

## Description

Generates a linear ramp driven by incoming  bang  messages. It takes a list of breakpoint segments (and the number of events to span) and outputs a smooth ramp between values.

#### Discussion

[bline](https://docs.cycling74.com/reference/bline) is similar to the Max [line](https://docs.cycling74.com/reference/line) object, except that it is driven by  bang  messages sent to its left inlet. This gives the object a flexible timebase, which is useful when working with events that have a variable processing time (such as rendering matrices in Jitter). It works with integer and floating point numbers, can be stopped (with the  stop  message), and can use multi-segment lists (similar to the MSP [line~](https://docs.cycling74.com/reference/line~) object).

## Arguments

### initial-value[number] optional

Optional. An argument may be used to set the initial value to be stored and the output type for the object--if the first argument is an int, the [bline](https://docs.cycling74.com/reference/bline) object outputs integer values, and a float will set the [bline](https://docs.cycling74.com/reference/bline) object to output floating point values. If there is no argument, the initial value is  0  and the output type is  int .

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends a new step in the breakpoint list out the left outlet. If the current list of ramp segments is finished, a  bang  message will be sent out the right outlet

### int

Sets the [bline](https://docs.cycling74.com/reference/bline) object to the specified integer value. Any and all pending breakpoint segments are forgotten (i.e. the time is considered 0 and [bline](https://docs.cycling74.com/reference/bline) outputs the target value when it receives a  bang ).

Arguments:

- input
  [int]

### float

Sets the [bline](https://docs.cycling74.com/reference/bline) object to the specified float value. Any and all pending breakpoint segments are forgotten (i.e. the time is considered 0 and [bline](https://docs.cycling74.com/reference/bline) outputs the target value when it receives a  bang ).

Arguments:

- input
  [float]

### list

The [bline](https://docs.cycling74.com/reference/bline) object sets breakpoint segment values using lists of data composed of pairs of numbers. The first number in each pair can be either an int or a float specifying a target value, followed by an integer that specifies the number of  bang  messages that will have to be received before reaching the target value--note that this differs from other Max breakpoint objects like [line](https://docs.cycling74.com/reference/line), which specify a time-to-target value in milliseconds.

Arguments:

- segment-pairs
  [list]

### set

Sets the [bline](https://docs.cycling74.com/reference/bline) object to the specified value. Any and all pending breakpoint segments are forgotten (i.e. the time is considered 0 and [bline](https://docs.cycling74.com/reference/bline) outputs the target value when it receives a  bang ).

Arguments:

- input
  [number]

### stop

Stops [bline](https://docs.cycling74.com/reference/bline) from sending out numbers, until a new list of ramp segments is received.

## Output

### bang

Out right outlet: When [bline](https://docs.cycling74.com/reference/bline) has arrived at its target value,  bang  is sent out.

### int

Out left outlet: Numbers are sent out in response to received  bang  messages, describing a straight line toward a target value. If a list of breakpoint segments is specified before the line is completed, the new line starts from the most recent output value in order to avoid discontinuities.

If a value is received in the left inlet without an accompanying time value, it is sent out immediately.

## See Also

| Name | Description |
| --- | --- |
| [funbuff](https://docs.cycling74.com/reference/funbuff) | Store pairs of numbers |
| [line](https://docs.cycling74.com/reference/line) | Generate timed ramp |
| [uzi](https://docs.cycling74.com/reference/uzi) | Send many bang messages |
