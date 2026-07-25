---
type: max
name: "clocker"
summary: "Output a bang message at regular intervals"
signal: false
url: "https://docs.cycling74.com/reference/clocker/"
package: "Max"
see_also: ["counter", "cpuclock", "delay", "setclock", "tempo", "transport", "uzi"]
---
# clocker

Report elapsed time, at regular intervals

## Description

The [clocker](https://docs.cycling74.com/reference/clocker) object is a metronome that reports the time elapsed since it was started. This object uses the Max [time format](https://docs.cycling74.com/userguide/time_value_syntax) syntax, so the interval that the [clocker](https://docs.cycling74.com/reference/clocker) object uses can be either fixed or tempo-relative. Its output can be quantized using tempo-relative syntax, and if the  *autostarttime*  attribute is set, the object can also start at a tempo-relative point.

## Arguments

### time-interval[int, float, symbol] optional

The first argument sets an initial value for the time interval at which [clocker](https://docs.cycling74.com/reference/clocker) sends out its output. This time interval can be either a number which specifies time in milliseconds (e.g. clocker 200) or a [notevalue](https://docs.cycling74.com/userguide/time_value_syntax) (e.g. clocker 4nd).

Note: While the [clocker](https://docs.cycling74.com/reference/clocker) object lets you specify time in any of Max's standard [time formats](https://docs.cycling74.com/userguide/time_value_syntax), the  Interval  attribute argument should be used when specifying time in any other time unit besides milliseconds or notevalues.

If there is no argument, the initial time interval is set to 5 milliseconds. If notevalue, ticks, or bars.beats.units are specified for the delay interval, the [clocker](https://docs.cycling74.com/reference/clocker) object will not operate unless the transport is running.

## Attributes

### active[int]: 0

Turns the [clocker](https://docs.cycling74.com/reference/clocker) object on and off.

### autostart[int]: 0

If turned on (non-zero) the [clocker](https://docs.cycling74.com/reference/clocker) object will begin running automatically at the time specified with the autostarttime attribute.

### autostarttime[Time Value]: 0 ticks

If the autostart attribute is enabled (non-zero) the [clocker](https://docs.cycling74.com/reference/clocker) object will begin running automatically at the time specified with the this attribute. The autostart operates as a [timepoint](https://docs.cycling74.com/reference/timepoint) object that is internal to the [clocker](https://docs.cycling74.com/reference/clocker) object.

### defer[float]: 0.

Turn this on to send output in the low-priority queue.

### interval[Time Value]: 5 ms

Sets the The time interval at which the [clocker](https://docs.cycling74.com/reference/clocker) object sends out a  bang . Time can be specified in any of the [time formats](https://docs.cycling74.com/userguide/time_value_syntax) used in Max.

### quantize[Time Value]: 0 ticks

Send output only on the specified time-boundary if appropriate. This is achieved by making internal adjustments to the times used for sending output. The quantization can be specified in the following [time formats](https://docs.cycling74.com/userguide/time_value_syntax): bars.beats.units, ticks or note values.

### transport[symbol]: internal

This attribute names a transport. If the time is specified using a 'relative' unit (for example: ticks, bars.beats.units, or notevalues), then the named transport is used to determine delay times based on tempo, time-signature, and other related information.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Starts the [clocker](https://docs.cycling74.com/reference/clocker) object. If the [clocker](https://docs.cycling74.com/reference/clocker) object is not running, a  bang  message will start the count. If the [clocker](https://docs.cycling74.com/reference/clocker) object is running, a  bang  message will reset the count.

### int

In left inlet: Any non-zero number starts the [clocker](https://docs.cycling74.com/reference/clocker) object. The time elapsed since [clocker](https://docs.cycling74.com/reference/clocker) was started is sent out the outlet at regular intervals. 0 stops the [clocker](https://docs.cycling74.com/reference/clocker) object.

Arguments:

- non-zero-to-start
  [int]

### float

Same as  int .

Arguments:

- non-zero-to-start
  [float]

### list

In right inlet: A list may be used to specify time in one of the Max [time formats](https://docs.cycling74.com/userguide/time_value_syntax).

Arguments:

- input
  [list]

### anything

Same as  list .

Arguments:

- interval
  [list]

### clock

The word  clock , followed by the name of an existing  setclock  object, sets the [clocker](https://docs.cycling74.com/reference/clocker) object to be controlled by that  setclock  object rather than by Max’s internal millisecond clock. The word  clock  by itself sets the [clocker](https://docs.cycling74.com/reference/clocker) object back to using Max’s regular millisecond clock.

Arguments:

- setclock object name
  [symbol]

### reset

In left inlet: Resets the elapsed time to 0 without stopping or restarting the clock; [clocker](https://docs.cycling74.com/reference/clocker) continues to report the new elapsed time at the same regular interval. This message is meaningless when the [clocker](https://docs.cycling74.com/reference/clocker) is not running, since it always resets to 0 anyway when stopped.

### stop

In left inlet: Stops the [clocker](https://docs.cycling74.com/reference/clocker) object.

## See Also

| Name | Description |
| --- | --- |
| [counter](https://docs.cycling74.com/reference/counter) | Keep count based on bang messages |
| [cpuclock](https://docs.cycling74.com/reference/cpuclock) | Retrieve the CPU time |
| [delay](https://docs.cycling74.com/reference/delay) | Delay a bang |
| [setclock](https://docs.cycling74.com/reference/setclock) | Create and control an alternative clock |
| [tempo](https://docs.cycling74.com/reference/tempo) | Output numbers at a metronomic tempo |
| [transport](https://docs.cycling74.com/reference/transport) | Control a clock |
| [uzi](https://docs.cycling74.com/reference/uzi) | Send many bang messages |
