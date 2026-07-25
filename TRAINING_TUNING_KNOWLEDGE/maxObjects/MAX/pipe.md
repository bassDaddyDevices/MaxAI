---
type: max
name: "pipe"
summary: "Delay numbers, lists or symbols"
signal: false
url: "https://docs.cycling74.com/reference/pipe/"
package: "Max"
see_also: ["delay"]
---
# pipe

Delay numbers, lists or symbols

## Description

Delays numbers, lists of numbers or symbols. [pipe](https://docs.cycling74.com/reference/pipe) uses the Max [time format](https://docs.cycling74.com/userguide/time_value_syntax) syntax, so the delay interval can be either fixed or tempo-relative.

## Arguments

### initialization[list] optional

The number of arguments to the [pipe](https://docs.cycling74.com/reference/pipe) object depends on the number of items in a list you wish to delay, but the final argument is always used to set the initial value for the delay time.

If no argument is specified, the initial value is 0 and the delay time is 0 ms.

If there is one argument, this sets the delay time.

If there are two arguments, the first argument sets an initial value to be stored in [pipe](https://docs.cycling74.com/reference/pipe), and the second argument sets the delay time.

If more than two arguments are present, [pipe](https://docs.cycling74.com/reference/pipe) creates additional inlets and outlets for delaying additional numbers.

The [pipe](https://docs.cycling74.com/reference/pipe) object allows you to specify time intervals using either a number which specifies time in milliseconds (e.g. pipe 200) or a [notevalue](https://docs.cycling74.com/userguide/time_value_syntax) (e.g. pipe 2n).

Note: While the [pipe](https://docs.cycling74.com/reference/pipe) object lets you specify time in any of Max's standard [time formats](https://docs.cycling74.com/userguide/time_value_syntax), the delaytime attribute argument should be used when specifying time in any other time unit besides milliseconds or notevalues (e.g. [pipe](https://docs.cycling74.com/reference/pipe) @ delaytime 11025 samples).

If notevalue, ticks, or bars.beats.units are specified for the delay interval, the object will not operate unless the transport is running.

## Attributes

### clock[symbol]

Use the clock attribute to specify a named  setclock  object for timing rather than by Max’s internal millisecond clock. The word  clock  by itself sets the [pipe](https://docs.cycling74.com/reference/pipe) object back to using Max’s regular millisecond clock.

### delaytime[Time Value]: 0 ms

Sets the delay time for this object using any of Max's [time formats](https://docs.cycling74.com/userguide/time_value_syntax).

### quantize[Time Value]: 0 ticks

Quantizes the output of [pipe](https://docs.cycling74.com/reference/pipe) to a specified time-boundary. This is achieved by making internal adjustments to the times used for sending output. The quantization can be specified in the following [time formats](https://docs.cycling74.com/userguide/time_value_syntax): bars.beats.units, ticks or note values.

Fixed time units (for example: ms, seconds, hz, samples, etc.) will have no effect.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Re-triggers the numbers currently stored in the [pipe](https://docs.cycling74.com/reference/pipe) to be output again after the specified time (in addition to any numbers already being delayed).

### int

In left inlet: Sets value and triggers delay

In middle inlets: Sets value without triggering delay

In right inlet: Sets the delay time

Arguments:

- delay
  [int]

### float

Float is converted to  int  unless the inlet was initialized with a  float  argument.

In left inlet: Sets value and triggers delay

In middle inlets: Sets value without triggering delay

In right inlet: Sets the delay time

Arguments:

- delay
  [float]

### list

In left inlet: For each element in the list, a value will be set for the corresponding input and trigger a delay.

In middle inlets: When a list is sent to one of the middle inlets of [pipe](https://docs.cycling74.com/reference/pipe), the first element in the list sets the corresponding input. Subsequent elements set the subsequent inputs. These values are stored until a bang is sent to the first inlet of [pipe](https://docs.cycling74.com/reference/pipe).

In right inlet: Specify time in one of the Max [time formats](https://docs.cycling74.com/userguide/time_value_syntax).

### anything

See the  list  listing

### clear

Halts all output

### flush

Immediately sends out all values currently being delayed by [pipe](https://docs.cycling74.com/reference/pipe), and clears the [pipe](https://docs.cycling74.com/reference/pipe) object's memory. Values are sent out each outlet in reverse order from that in which they were received in the corresponding inlet.

### stop

Halts all output

## Output

### int

When a value is received in the [pipe](https://docs.cycling74.com/reference/pipe) object's left inlet, it is delayed by the time specified, then sent out the left outlet. If there are middle inlets, the values in those inlets are also delayed and sent out their corresponding outlet, in response to a value is received in the left inlet. Unlike [delay](https://docs.cycling74.com/reference/delay), more than one value at a time can be delayed in a [pipe](https://docs.cycling74.com/reference/pipe). When a new delay time is received in the right inlet, it does not affect when the values already being delayed by [pipe](https://docs.cycling74.com/reference/pipe) will come out.

## See Also

| Name | Description |
| --- | --- |
| [delay](https://docs.cycling74.com/reference/delay) | Delay a bang |
