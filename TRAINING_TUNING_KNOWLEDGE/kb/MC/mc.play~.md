---
type: mc
name: "mc.play~"
summary: "Position-based sample playback (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.play~/"
package: "MC"
see_also: ["2d.wave~", "buffer~", "buffir~", "groove~", "record~", "wave~", "index~"]
---
# mc.play~

Position-based sample playback (multichannel)

## Description

Use the [play~](https://docs.cycling74.com/reference/play~) object as a playback interface for a [buffer~](https://docs.cycling74.com/reference/buffer~). that plays back samples based on an offset within the buffer. It is typically used with the [line~](https://docs.cycling74.com/reference/line~) object, but can be used with any signal that generates a changing position value in milliseconds. The [groove~](https://docs.cycling74.com/reference/groove~) object provides another option for sample playback.

When the [play~](https://docs.cycling74.com/reference/play~) object is created as [mcs.play~](https://docs.cycling74.com/reference/mcs.play~) all of its signal outlets are combined into a single multichannel outlet. The behavior of [mcs.play~](https://docs.cycling74.com/reference/mcs.play~) is otherwise identical to [play~](https://docs.cycling74.com/reference/play~).

## Arguments

### buffer-name[symbol] optional

The first argument names the [buffer~](https://docs.cycling74.com/reference/buffer~) object whose sample memory is used by [play~](https://docs.cycling74.com/reference/play~) for playback.

### number-of-output-channels[int] optional

Specifies the number of output channels. The default number of channels is one. If the [buffer~](https://docs.cycling74.com/reference/buffer~) being played has fewer channels than the number of [play~](https://docs.cycling74.com/reference/play~) output channels, the extra channels output a zero signal. If the [buffer~](https://docs.cycling74.com/reference/buffer~) has more channels, channels are mixed.

## Attributes

### interptime[float]

Sets the crossfade time for loop interpolation. If the value given is greater than the total loop duration, the total loop duration is used. The default crossfade duration is 50 milliseconds.

### loop[int]

In loop mode, when playback reaches the end time (see  start  message) it continues again from the start time. Loop mode is off by default.

### loopinterp[int]

Enables interpolation around the start and end points for a loop. By default, loop interpolation is off.

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: 1 (or non-zero value) begins playback of the currently set [buffer~](https://docs.cycling74.com/reference/buffer~) object, and 0 stops playback.

Arguments:

- start/stop-playback
  [int]

### (mouse)

Double-clicking on [buffer~](https://docs.cycling74.com/reference/buffer~) opens a display window where you can view the contents of the [buffer~](https://docs.cycling74.com/reference/buffer~). object that the [play~](https://docs.cycling74.com/reference/play~) object references.

### pause

In left inlet: Sending the message  pause  causes the playback to pause at its current playback position. Playback can be restarted with the  resume  message.

### resume

In left inlet: If playback was paused, playback resumes from the paused point in the audio buffer.

### set

The word  set , followed by the name of a [buffer~](https://docs.cycling74.com/reference/buffer~) object, uses that [buffer~](https://docs.cycling74.com/reference/buffer~) for playback.

Arguments:

- buffer-name
  [symbol]

### signal

In left inlet: The position (in milliseconds) into the sample memory of a [buffer~](https://docs.cycling74.com/reference/buffer~) object from which to play. If the signal is increasing over time, [play~](https://docs.cycling74.com/reference/play~) will play the sample forward. If it is decreasing, [play~](https://docs.cycling74.com/reference/play~) will play the sample backward. If it remains the same, [play~](https://docs.cycling74.com/reference/play~) outputs the same sample repeatedly, which is equivalent to a DC offset of the sample value.

The direction and speed of playback of a [play~](https://docs.cycling74.com/reference/play~) object can be set using integer messages provided to the [play~](https://docs.cycling74.com/reference/play~) object at signal rate. Typically, this is done using a [line~](https://docs.cycling74.com/reference/line~) object.

Integer messages come in pairs - an initial integer that specifies the position in the buffer (in milliseconds) at which to start, followed by a second pair of numbers that specify the ending position in the buffer and the time (in milliseconds) over which the playback will occur. These messages are often sent as messages separated by a comma. Here are some examples:

 0, 2000 2000 - Starting at the beginning of the buffer, play 2 seconds of audio at normal speed

 500, 0 500 - Play the first half second of a buffer backwards at normal speed.

 0, 1000 500 - Play the first second of a buffer at double speed (i.e. transpose it up an octave)

### start

In left inlet: The word  start , followed by a start time in milliseconds, moves to the specified position in the current [buffer~](https://docs.cycling74.com/reference/buffer~) and begins playing. After the start time, an optional end time can be specified, which will set a point for playback to stop. A third optional value can be provided to set the playback duration from the start point to the end point. When used without arguments, start will begin at the beginning of the [buffer~](https://docs.cycling74.com/reference/buffer~) and play to the end (equivalent to using the integer value 1 to start playback). The start time may be greater than the end time, in order to play a segment of the buffer in reverse.

Arguments:

- start-time
  [list]
- end-time
  [list]
- duration
  [list]

### stop

In left inlet: The  stop  message causes the playback to stop at its current playback position. (This is equivalent to sending the integer value 0 to stop playback).

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

Sample output read from a [buffer~](https://docs.cycling74.com/reference/buffer~). If [play~](https://docs.cycling74.com/reference/play~) has two or four output channels, the left outlet's signal contains the left channel of the sample, and the other outlets' signals contain the samples from the additional channels.

## See Also

| Name | Description |
| --- | --- |
| [2d.wave~](https://docs.cycling74.com/reference/2d.wave~) | Two-dimensional wavetable |
| [buffer~](https://docs.cycling74.com/reference/buffer~) | Store audio samples |
| [buffir~](https://docs.cycling74.com/reference/buffir~) | buffer-based FIR filter |
| [groove~](https://docs.cycling74.com/reference/groove~) | Variable-rate looping sample playback |
| [record~](https://docs.cycling74.com/reference/record~) | Record sound into a buffer |
| [wave~](https://docs.cycling74.com/reference/wave~) | Variable size wavetable |
| [index~](https://docs.cycling74.com/reference/index~) | Read from a buffer~ with no interpolation |
