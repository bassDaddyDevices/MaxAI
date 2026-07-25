---
type: msp
name: "record~"
summary: "Record sound into a buffer"
signal: true
url: "https://docs.cycling74.com/reference/record~/"
package: "MSP"
see_also: ["2d.wave~", "buffer~", "groove~", "play~", "transport"]
---
# record~

Record sound into a buffer

## Description

[record~](https://docs.cycling74.com/reference/record~) records a signal into a [buffer~](https://docs.cycling74.com/reference/buffer~) object. You can specify how many channels to record with the optional  input-channels  argument. Recording stops when the [buffer~](https://docs.cycling74.com/reference/buffer~) is filled.

## Arguments

### buffer-name[symbol] optional

Obligatory. Names the [buffer~](https://docs.cycling74.com/reference/buffer~) where [record~](https://docs.cycling74.com/reference/record~) will write the recorded samples.

### input-channels[int] optional

Specifies the number of input channels (1, 2, 4, 50, etc). This determines the number of inlets [record~](https://docs.cycling74.com/reference/record~) has. The two rightmost inlets always set the record start and end points.

## Attributes

### append[int]

The word  append , followed by a non-zero number, enables  append  mode. In this mode, when recording is turned on, it continues from where it was last stopped.  append 0  disables append mode. In this case, recording always starts at the start point when it is turned on. Append mode is off initially by default.

### loop[int]

The word  loop , followed by a non-zero number, enables loop recording mode. In loop mode, when recording reaches the end point of the recording (see above) it continues at the start point.  loop 0  disables loop recording mode. In this case, recording stops when it reaches the end point. Loop mode is off initially by default. The [record~](https://docs.cycling74.com/reference/record~) object also takes into account any changes in the [buffer~](https://docs.cycling74.com/reference/buffer~) object's sampling rate if the [buffer~](https://docs.cycling74.com/reference/buffer~) object's length is modified for the purpose of establishing loop points.

### loopend[Time Value]: 0 ms

Sets the loop end point for the object. The sampling interval can be specified in any of the [time formats](https://docs.cycling74.com/userguide/time_value_syntax) used in Max.

### loopstart[Time Value]: 0 ms

Sets the loop start point for the object. The sampling interval can be specified in any of the [time formats](https://docs.cycling74.com/userguide/time_value_syntax) used in Max.

### transport[symbol]

The name of a [transport](https://docs.cycling74.com/reference/transport) object with which to associate. By default the global transport is used.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: Any non-zero number starts recording; 0 stops recording. Recording starts at the start point unless append mode is on.

In the inlet to the left of the right inlet: Set the start point within the [buffer~](https://docs.cycling74.com/reference/buffer~) (in milliseconds) for the recording. By default, the start point is 0 (the beginning of the [buffer~](https://docs.cycling74.com/reference/buffer~)).

In right inlet: Sets the end point of the recording. By default, the end point is the end of the [buffer~](https://docs.cycling74.com/reference/buffer~) object's allocated memory.

Arguments:

- recording-flag (0 or nonzero)
  [int]

### float

In left inlet: Any non-zero number starts recording; 0 stops recording. Recording starts at the start point unless append mode is on.

In the inlet to the left of the right inlet: Set the start point within the [buffer~](https://docs.cycling74.com/reference/buffer~) (in milliseconds) for the recording. By default, the start point is 0 (the beginning of the [buffer~](https://docs.cycling74.com/reference/buffer~)).

In right inlet: Sets the end point of the recording. By default, the end point is the end of the [buffer~](https://docs.cycling74.com/reference/buffer~) object's allocated memory.

Arguments:

- recording-flag (0 or nonzero)
  [float]

### list

list  can be used to specify loop-start and loop-end points or timing/synchronization settings for [transport](https://docs.cycling74.com/reference/transport).

Arguments:

- loop-start/loop-end/timing-parameters
  [list]

### anything

list  can be used to specify loop-start and loop-end points or timing/synchronization settings for [transport](https://docs.cycling74.com/reference/transport).

Arguments:

- loop-start/loop-end/timing-parameters
  [list]

### (mouse)

Double-clicking on [record~](https://docs.cycling74.com/reference/record~) opens an editing window where you can view the contents of its associated [buffer~](https://docs.cycling74.com/reference/buffer~) object.

### reset

The word  reset  resets the record-loop points to the default values (which record through the whole duration of the assigned [buffer~](https://docs.cycling74.com/reference/buffer~)).

### set

The word  set , followed by the name of a [buffer~](https://docs.cycling74.com/reference/buffer~), changes the [buffer~](https://docs.cycling74.com/reference/buffer~) where [record~](https://docs.cycling74.com/reference/record~) will write the recorded samples.

Arguments:

- buffer-name
  [symbol]

### signal

In left inlet: When recording is turned on, the signal is recorded into the sample memory of a [buffer~](https://docs.cycling74.com/reference/buffer~) at the current sampling rate.

In middle inlets: If [record~](https://docs.cycling74.com/reference/record~) has more than one input channel, these inlets record the additional channels into the [buffer~](https://docs.cycling74.com/reference/buffer~).

## Output

### signal

Sync output. During recording, this outlet outputs a  signal  that goes from 0 when recording at the start point to 1 when recording reaches the end point. When not recording, a zero signal is output.

## See Also

| Name | Description |
| --- | --- |
| [2d.wave~](https://docs.cycling74.com/reference/2d.wave~) | Two-dimensional wavetable |
| [buffer~](https://docs.cycling74.com/reference/buffer~) | Store audio samples |
| [groove~](https://docs.cycling74.com/reference/groove~) | Variable-rate looping sample playback |
| [play~](https://docs.cycling74.com/reference/play~) | Position-based sample playback |
| [transport](https://docs.cycling74.com/reference/transport) | Control a clock |
