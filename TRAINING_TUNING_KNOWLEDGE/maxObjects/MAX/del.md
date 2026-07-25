---
type: max
name: "del"
summary: "Delay a bang"
signal: false
url: "https://docs.cycling74.com/reference/del/"
package: "Max"
see_also: ["deferlow", "pipe", "setclock", "transport"]
---
# del

Delay a bang

## Description

Holds a bang for a specified amount of time before sending it to the next object. This object uses the Max [time format](https://docs.cycling74.com/userguide/time_value_syntax) syntax, so the delay time (which is normally specified in milliseconds) can also be set to other fixed or tempo-relative values.

## Arguments

### time[any] optional

Sets an initial amount of time to delay a  bang  received in the left inlet. This time interval can be either a number which specifies time in milliseconds (e.g. delay 200) or a [notevalue](https://docs.cycling74.com/userguide/time_value_syntax) (e.g. delay 4nd).

Note: While the [delay](https://docs.cycling74.com/reference/delay) object lets you specify time in any of Max's standard [time formats](https://docs.cycling74.com/userguide/time_value_syntax), the  delaytime  attribute argument should be used when specifying time in any other time unit besides milliseconds or notevalues (e.g.  delay @delaytime 11025 samples ).

If there is no argument, the initial time interval is 5 milliseconds. If notevalue, ticks, or bars.beats.units are specified for the delay interval, the object will not operate unless the transport is running.

## Attributes

### delaytime[Time Value]: 0 ms

Sets the delay time for the object. Delay time can be specified in any of the [time formats](https://docs.cycling74.com/userguide/time_value_syntax) used in Max.

### quantize[Time Value]: 0 ticks

Send output only on the specified time-boundary if appropriate. This is achieved by making internal adjustments to the times used for sending output. The quantization can be specified in the following [time formats](https://docs.cycling74.com/userguide/time_value_syntax): bars.beats.units, ticks or note values.

If the applicable time is a 'fixed' unit (for example: ms, seconds, hz, samples, etc.) then this attribute will have no effect.

### transport[symbol]: internal

The name of the [transport](https://docs.cycling74.com/reference/transport) object used to determine the delay time when using tempo-relative time units. The default is  internal  which is the global transport. In Max for Live, the default is the Live transport.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: A  bang  is delayed a certain number of milliseconds before being sent out the outlet.

### int

In right inlet: The number is stored as the number of milliseconds to delay a  bang  received in the left inlet. A number received in the right inlet changes the delay time of the next  bang  received -- it does not modify the time of a  bang  currently being delayed. In left inlet: The number is stored as the number of milliseconds to delay a  bang  received in the left inlet. It then automatically sends a bang message to itself to start the delay.

Arguments:

- time
  [int]

### float

In right inlet: The number is stored as the number of milliseconds to delay a  bang  received in the left inlet. A number received in the right inlet changes the delay time of the next  bang  received -- it does not modify the time of a  bang  currently being delayed. In left inlet: The number is stored as the number of milliseconds to delay a  bang  received in the left inlet. It then automatically sends a bang message to itself to start the delay.

Arguments:

- time
  [float]

### list

In right inlet: A list may be used to specify time in one of the Max [time formats](https://docs.cycling74.com/userguide/time_value_syntax).

Arguments:

- input
  [list]

### anything

Same as  list .

Arguments:

- time
  [list]

### clock

The word  clock , followed by the name of an existing  setclock  object, sets the [delay](https://docs.cycling74.com/reference/delay) object to be controlled by that  setclock  object rather than by Max’s internal millisecond clock. The word  clock  by itself sets the [delay](https://docs.cycling74.com/reference/delay) object back to using Max’s regular millisecond clock.

Arguments:

- setclock-object-name
  [symbol]

### stop

In left inlet: Stops [delay](https://docs.cycling74.com/reference/delay) from outputting the  bang  it is currently delaying.

## Output

### bang

bang  received in the left inlet is delayed by the number of milliseconds specified by the right inlet, then is sent out the outlet. Only one  bang  at a time can be delayed by [delay](https://docs.cycling74.com/reference/delay). If a  bang  is already in [delay](https://docs.cycling74.com/reference/delay) when a new  bang  is received in the left inlet, the first  bang  is forgotten.

## See Also

| Name | Description |
| --- | --- |
| [deferlow](https://docs.cycling74.com/reference/deferlow) | Defer the execution of a message (always) |
| [pipe](https://docs.cycling74.com/reference/pipe) | Delay numbers, lists or symbols |
| [setclock](https://docs.cycling74.com/reference/setclock) | Create and control an alternative clock |
| [transport](https://docs.cycling74.com/reference/transport) | Control a clock |
