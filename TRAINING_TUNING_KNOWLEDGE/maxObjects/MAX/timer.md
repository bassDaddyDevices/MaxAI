---
type: max
name: "timer"
summary: "Report elapsed time between two events"
signal: false
url: "https://docs.cycling74.com/reference/timer/"
package: "Max"
see_also: ["clocker", "cpuclock", "delay", "pipe", "setclock", "transport"]
---
# timer

Report elapsed time between two events

## Description

[timer](https://docs.cycling74.com/reference/timer) starts keeping time when a  bang  is sent to the left inlet. The right outlet can report elapsed time in milliseconds or one of the Max [time format](https://docs.cycling74.com/userguide/time_value_syntax) options, with the exception of notevalues.

## Arguments

None.

## Attributes

### format[symbol]

Set the time format to use for output (defult = milliseconds). Output may also be specified in one of the Max [time format](https://docs.cycling74.com/userguide/time_value_syntax) options with the exception of notevalues.

Possible values:

'ticks'

'ms'

'bars.beats.units'

'samples'

'hz'

'notevalues'

'hh:mm:ss'

### transport[symbol]

The name of a [transport](https://docs.cycling74.com/reference/transport) object with which to associate. By default, the global transport is used. This is used in the output format conversion. The transport does not need to be running for the conversion.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Starts or restarts the [timer](https://docs.cycling74.com/reference/timer).

In right inlet: Sends out the time elapsed since the [timer](https://docs.cycling74.com/reference/timer) was started.

### clock

Use the clock message to specify a named  setclock  object for timing rather than by Max’s internal millisecond clock. The word  clock  by itself sets the [timer](https://docs.cycling74.com/reference/timer) object back to using Max’s regular millisecond clock.

Arguments:

- setclock-name
  [symbol]

## Output

### float

Out left outlet: When a  bang  is received in the right inlet, the time elapsed (in milliseconds) since the [timer](https://docs.cycling74.com/reference/timer) was started is sent out the outlet.

Out right outlet: When a  bang  is received in the right inlet, the time elapsed (in the time format specified by the format attribute) since the [timer](https://docs.cycling74.com/reference/timer) was started is sent out the outlet.

## See Also

| Name | Description |
| --- | --- |
| [clocker](https://docs.cycling74.com/reference/clocker) | Report elapsed time, at regular intervals |
| [cpuclock](https://docs.cycling74.com/reference/cpuclock) | Retrieve the CPU time |
| [delay](https://docs.cycling74.com/reference/delay) | Delay a bang |
| [pipe](https://docs.cycling74.com/reference/pipe) | Delay numbers, lists or symbols |
| [setclock](https://docs.cycling74.com/reference/setclock) | Create and control an alternative clock |
| [transport](https://docs.cycling74.com/reference/transport) | Control a clock |
