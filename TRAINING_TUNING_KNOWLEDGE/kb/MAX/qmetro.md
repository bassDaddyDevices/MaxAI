---
type: max
name: "qmetro"
summary: "Queue-based metronome"
signal: false
url: "https://docs.cycling74.com/reference/qmetro/"
package: "Max"
see_also: ["clocker", "counter", "cpuclock", "delay", "setclock", "tempo", "transport", "uzi"]
---
# qmetro

Output a bang message at regular intervals

## Description

Acts as a metronome which outputs  bang  s at a regular, specified interval. This object uses the Max [time format](https://docs.cycling74.com/userguide/time_value_syntax) syntax, so the interval that the [metro](https://docs.cycling74.com/reference/metro) object uses can be either fixed or tempo-relative.

#### Discussion

The object's output can be quantized using tempo-relative syntax, and if the  *autostarttime*  attribute is set, the object can also start at a tempo-relative point.

## Arguments

### interval[number]ms optional

The optional first argument sets an initial value for the time interval at which [metro](https://docs.cycling74.com/reference/metro) sends its output. This time interval can be either a number which specifies time in milliseconds (e.g. metro 100) or [notevalue](https://docs.cycling74.com/userguide/time_value_syntax) (e.g. metro 4n).

Note: While the [metro](https://docs.cycling74.com/reference/metro) object lets you specify time in any of Max's standard [time formats](https://docs.cycling74.com/userguide/time_value_syntax), the  interval  attribute argument should be used when specifying time in any other time unit besides milliseconds or notevalues (e.g.  metro @interval 11025 samples ).

If there is no argument, the initial time interval is 5 milliseconds.

## Attributes

### active[int]: 0

Turns the metro on and off.

### autostart[int]: 0

If turned on (non-zero) the metro will begin running automatically at the time specified with the autostarttime attribute.

### autostarttime[Time Value]: 0 ticks

If the autostart attribute is enabled (non-zero) the metro will begin running automatically at the time specified with the this attribute. The autostart operates as a [timepoint](https://docs.cycling74.com/reference/timepoint) object that is internal to metro.

### defer[float]: 0.

Turn this on to send output in the low-priority queue.

### interval[Time Value]: 5 ms

Sets the The time interval at which [metro](https://docs.cycling74.com/reference/metro) sends out a  bang . Time can be specified in any of the [time formats](https://docs.cycling74.com/userguide/time_value_syntax) used in Max.

### quantize[Time Value]: 0 ticks

Send output only on the specified time-boundary if appropriate. This is achieved by making internal adjustments to the times used for sending output. The quantization can be specified in the following [time formats](https://docs.cycling74.com/userguide/time_value_syntax): bars.beats.units, ticks or note values.

If the applicable time is a 'fixed' unit (for example: ms, seconds, hz, samples, etc.) then this attribute will have no effect.

### transport[symbol]: internal

The name of the [transport](https://docs.cycling74.com/reference/transport) object used to determine the [metro](https://docs.cycling74.com/reference/metro) interval when using tempo-relative time units. The default is  internal  which is the global transport. In Max for Live, the default is the Live transport.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: starts the [metro](https://docs.cycling74.com/reference/metro) object.

### int

In left inlet: Any number other than 0 starts the [metro](https://docs.cycling74.com/reference/metro) object. At regular intervals, [metro](https://docs.cycling74.com/reference/metro) sends a  bang  out the outlet.  0  stops [metro](https://docs.cycling74.com/reference/metro).

In right inlet: The number is the time interval, in milliseconds, at which [metro](https://docs.cycling74.com/reference/metro) sends out a  bang . A new number in the right inlet does not take effect until the next output is sent.

Arguments:

- input
  [int]

### float

Performs the same function as  int .

Arguments:

- input
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

The word  clock , followed by the name of an existing  setclock  object, sets the [metro](https://docs.cycling74.com/reference/metro) object to be controlled by that  setclock  object rather than by Max’s internal millisecond clock. The word  clock  by itself sets the [metro](https://docs.cycling74.com/reference/metro) object back to using Max’s regular millisecond clock.

Arguments:

- name
  [symbol]

### stop

In left inlet: Stops [metro](https://docs.cycling74.com/reference/metro).

## Output

### bang

bang  is sent immediately when [metro](https://docs.cycling74.com/reference/metro) is started, and at regular intervals thereafter.

## See Also

| Name | Description |
| --- | --- |
| [clocker](https://docs.cycling74.com/reference/clocker) | Report elapsed time, at regular intervals |
| [counter](https://docs.cycling74.com/reference/counter) | Keep count based on bang messages |
| [cpuclock](https://docs.cycling74.com/reference/cpuclock) | Retrieve the CPU time |
| [delay](https://docs.cycling74.com/reference/delay) | Delay a bang |
| [setclock](https://docs.cycling74.com/reference/setclock) | Create and control an alternative clock |
| [tempo](https://docs.cycling74.com/reference/tempo) | Output numbers at a metronomic tempo |
| [transport](https://docs.cycling74.com/reference/transport) | Control a clock |
| [uzi](https://docs.cycling74.com/reference/uzi) | Send many bang messages |
