---
type: mc
name: "mc.groove~"
summary: "Variable-rate looping sample playback (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.groove~/"
package: "MC"
see_also: ["2d.wave~", "buffer~", "mcs.groove~", "play~", "phasegroove~", "wave~", "index~", "record~", "transport"]
---
# mc.groove~

Variable-rate looping sample playback (multichannel)

## Description

The [groove~](https://docs.cycling74.com/reference/groove~) object is a variable-rate, looping, sample-playback object which references the audio information stored in a [buffer~](https://docs.cycling74.com/reference/buffer~) object having the same name. When the [groove~](https://docs.cycling74.com/reference/groove~) object is instantiated as [mcs.groove~](https://docs.cycling74.com/reference/mcs.groove~) its audio outputs are combined into a single multichannel output.

#### Discussion

The interpolation for groove~ is cubic unless the timestretching attribute is set to 1. When timestretching is set to 1, you can control the quality of the conversion with the mode, quality, and formant attributes. The [wave~](https://docs.cycling74.com/reference/wave~) object provides additional interpolation options for buffer playback.

## Arguments

### buffer-name[symbol] optional

Names the [buffer~](https://docs.cycling74.com/reference/buffer~) object containing the sample to be used by [groove~](https://docs.cycling74.com/reference/groove~) for playback.

### number-of-outputs[int] optional

A second argument may specify the number of output channels. The default number of channels is 1. If the [buffer~](https://docs.cycling74.com/reference/buffer~) being played has fewer channels than the number of [groove~](https://docs.cycling74.com/reference/groove~) output channels, the extra channels output a zero signal. If the [buffer~](https://docs.cycling74.com/reference/buffer~) has more channels and is a multiple of 2 or 4, channels are mixed. For groove~ and mc.groove~, channels and sent out of separate outlets. For mcs.groove~, all channels are output from the first outlet as a multi-channel signal.

## Attributes

### basictuning[int]: 440 >= 7.0.0

Set a tuning standard based on a frequency for A for pitchshifting operations (440 = default, range is 400 - 500)

### followglobaltempo[int]: 0 >= 7.0.0

When followgobaltempo is enabled, [groove~](https://docs.cycling74.com/reference/groove~) will calculate the current tempo out of the ratio between originaltempo and global tempo and adapt to global tempo changes.

### formant[float]: 1. >= 7.0.0

The word  formant , followed by floating point value, sets the amount of formant scaling when pitchshifting is performed.

### formantcorrection[int]: 0 >= 7.0.0

The word  formantcorrection , followed by a zero or one, disables/enables formant correction when pitch correction is performed.

### lock[int]: 0 >= 7.0.0

Lock to transport

### loop[int]: 0

The word  loop , followed by a zero or one, disables/enables looping.

Possible values:

0 = 'Off'

1 = 'On'

2 = 'Pendulum'

### loopend[Time Value]: 0 ms

Sets the loop end point. The end point time can be specified in any of the Max [time formats](https://docs.cycling74.com/userguide/time_value_syntax).

### loopinterp[int]: 0

The word  loopinterp , followed by  1 , enables interpolation about start and end points for a loop.  loop 0  turns off loop interpolation. By default, loop interpolation is off. Turning loop interpolation on disables resampling.

### loopstart[Time Value]: 0 ms

Sets the loop start point. The start point time can be specified in any of the Max [time formats](https://docs.cycling74.com/userguide/time_value_syntax).

### mode[symbol]: basic >= 7.0.0

Set the timestretching mode to be used. Each mode is optimized for handling different kinds of audio material. All modes are zero latency. The interpolation for groove~ is cubic unless the timestretching attribute is set to 1. When timestretching is set to 1, you can control the quality of the conversion with the mode, quality, and formant attributes.

Possible values:

'basic'
(
Default mode of operation
)
This is the default mode of operation.

'monophonic'
(
Monophonic sources (voice, flute)
)
This mode is best for monophonic instruments (e.g. solo voice, flute, etc.)

'rhythmic'
(
Optimizes for transient preservation
)
This mode is for time stretched percussion. It provides optimal transient preservation.

'general'
(
Balance spectral integrity with transient preservaton
)
This mode balances spectral integrity and transient preservation for general cases.

'extremestretch'
(
For stretch ratios greater than 2.0
)
This mode is intended for stretch ratios greater 2.0, a more artistic effect is intended.

'efficient'
(
Good CPU performance
)
This mode is intended for a good CPU performance/quality tradeoff.

### name[symbol]

Sets the name of a [buffer~](https://docs.cycling74.com/reference/buffer~) object to use for sample playback.

### originallength[Time Value]: 0 ticks >= 7.0.0

The original length of the the audio file in beats. Used by  followglobaltempo  to calculate the speed in relation to the global transport speed. Set  originallength  to calculate the  originaltempo .

### originaltempo[float]: 120. >= 7.0.0

The original tempo of the the audio file. Used by  followglobaltempo  to calculate the speed relative to the global transport speed. Setting the  originaltempo  will calculate the  originallength .

### phase[Time Value]: 0 ticks >= 7.0.0

Phase

### pitchcorrection[int]: 0 >= 7.0.0

The word  pitchcorrection , followed by a zero or one, enable/disables the formant-corrected chromatic intonation correction. For more extensive real-time intonation correction, use the [retune~](https://docs.cycling74.com/reference/retune~) object.

### pitchshift[float]: 1. >= 7.0.0

Specifies pitchshift as a factor of the original pitch (i.e. 2.0 = doubling of pitch, .5 = halving of the original pitch, etc.).

### pitchshiftcent[int]: 0 >= 7.0.0

Specifies pitchshift as positive or negative cent values (i.e. 100 = semitone up, -1200 = octave down). Cents may be specified as ints or floats.

### quality[symbol]: basic >= 7.0.0

Timestretching output quality. Possible values are listed below in order of quality.

Possible values:

'basic'
(
Basic quality (the default)
)
'good'
(
Good quality (a step up from basic)
)
'better'
(
Better quality
)
'best'
(
Highest quality
)

### slurtime[float]: 0. >= 7.0.0

Set the time it takes for the correction to reach the full correction amount. Typically, notes are a bit unstable at the beginning, because the attack phase of a sound has a higher amount of noise, and because singers gradually adjust their tuning after the onset of the note. The slur time makes the pitch correction sound natural because it models this effect. Higher values will yield a slower adaptation time and it will take longer for the correction to produce the corrected pitch. However, longer slur times will also preserve vibrato better.

### timestretch[int]: 0 >= 7.0.0

The word  timestretch , followed by a zero or one, disables/enables timestretching.

### transport[symbol]: internal

Sets the name of a [transport](https://docs.cycling74.com/reference/transport) object with which to associate. By default, the global transport is used. When the [groove~](https://docs.cycling74.com/reference/groove~) object is associated with a transport, loop points are specified using 3-item lists which correspond to time in bars, beats, and units.

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In all inlets: Converted to  float .

In left inlet: Sets the sample playback position in milliseconds.  0  sets the playback position to the beginning.

In middle inlet: Sets the sample playback start position in milliseconds.

In right lnlet: Sets the sample playback start position in milliseconds.

Arguments:

- playback-position
  [int]

### float

In left inlet: Sets the sample playback position in milliseconds.  0  sets the playback position to the beginning.

In middle inlet: Sets the sample playback start position in milliseconds.

In right lnlet: Sets the sample playback start position in milliseconds.

Arguments:

- playback-position
  [float]

### list

In middle inlet: A list composed of three integers specifying bars, beats, and units may be used to specify the loop start point when the [groove~](https://docs.cycling74.com/reference/groove~) object is set to follow a named transport (set using the  transport  attribute).

In right inlet: A list composed of three integers specifying bars, beats, and units may be used to specify the loop end point when the [groove~](https://docs.cycling74.com/reference/groove~) object is set to follow a named transport (set using the  transport  attribute).

Arguments:

- bars
  [int]
- beats
  [int]
- units
  [int]

### anything

In middle inlet: A list composed of three integers specifying bars, beats, and units may be used to specify the loop start point when the [groove~](https://docs.cycling74.com/reference/groove~) object is set to follow a named transport (set using the  transport  attribute).

In right inlet: A list composed of three integers specifying bars, beats, and units may be used to specify the loop end point when the [groove~](https://docs.cycling74.com/reference/groove~) object is set to follow a named transport (set using the  transport  attribute).

Arguments:

- bars
  [int]
- beats
  [int]
- units
  [int]

### clearspeedcues >= 7.0.0

Clear the speed cues that have been defined via a dictionary.

### (mouse)

Double-clicking on a [groove~](https://docs.cycling74.com/reference/groove~) object opens the sample display window of the [buffer~](https://docs.cycling74.com/reference/buffer~) object associated with the [groove~](https://docs.cycling74.com/reference/groove~) object.

### dictionary >= 7.0.0

Use a dictionary to define more complex stretching and pitch shifting. Define a point in time (sourcetime, sourcetimesample or sourcetimebbu) and define where this point should be transformed to (desttime, desttimesample or desttimebbu). For example, the dictionary below will

- create marker01 which will stretch the file so that the audio at 500 ms will be on the first bar, will pitch-shift the audio down by 100 cents until the next marker
- create marker02 which will stretch so the material at 1000 ms will be at 1.2.0 bbu, will pitch-shift the audio by a factor of 1.1 up until the next marker
- create marker03 which will stretch the whole sample (“end”) to be twice as long

```
					{ "marker01" : { "sourcetime" : "500", "desttimebbu" : "1.0.0", "pitchshiftcent" : -100 } , "marker02" : { "sourcetime" : 1000, "desttime" : 1.2.0, "pitchshift" : 1.1 } , "marker03" : { "sourcetime" : “end”, "desttime" : “*2”, } }

```

Arguments:

- dictionary-name
  [symbol]

### endloop

Sets the playback position to the ending point of the loop.

### printspeedcues >= 7.0.0

Print the currently active speed cues that have been defined via a dictionary.

### reset

Clear the start and end loop points

### set

The word  set , followed by a symbol, switches the [buffer~](https://docs.cycling74.com/reference/buffer~) object containing the sample to be used by [groove~](https://docs.cycling74.com/reference/groove~) for playback.

Arguments:

- buffer-name
  [symbol]

### setloop

The word  setloop , followed by two numbers, sets the start and end loop points in milliseconds.

Arguments:

- start-point
  [list]
- end-point
  [list]

### signal

In left inlet: Defines the sample increment for playback of a sound from a [buffer~](https://docs.cycling74.com/reference/buffer~). A sample increment of 0 stops playback. A sample increment of 1 plays the sample at normal speed. A sample increment of -1 plays the sample backwards at normal speed. A sample increment of 2 plays the sample at twice the normal speed. A sample increment of .5 plays the sample at half the normal speed. The sample increment can change over time for vibrato or other types of speed effects. The [groove~](https://docs.cycling74.com/reference/groove~) object uses the [buffer~](https://docs.cycling74.com/reference/buffer~) sampling rate to determine playback speed.

If a loop start and end have been defined for [groove~](https://docs.cycling74.com/reference/groove~) and looping is turned on, when the sample playback reaches the loop end the sample position is set to the loop start and playback continues at the current sample increment.

In middle inlet: Sets the starting point of the loop in milliseconds.

In right inlet: Sets the end point of the loop in milliseconds.

### startloop

Causes [groove~](https://docs.cycling74.com/reference/groove~) to begin sample playback at the starting point of the loop. If no loop has been defined, [groove~](https://docs.cycling74.com/reference/groove~) begins playing at the beginning.

### stop

The word  stop  will cause [groove~](https://docs.cycling74.com/reference/groove~) to stop playback until the next  int ,  float , or  startloop  message is received.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

Out left outlet: Sample output. If [groove~](https://docs.cycling74.com/reference/groove~) or [mc.groove~](https://docs.cycling74.com/reference/mc.groove~) has two or four output channels, the left outlet plays the left channel of the sample. For [mcs.groove~](https://docs.cycling74.com/reference/mcs.groove~), all channels are output from the left outlet.

Out middle outlets: Sample output. If [groove~](https://docs.cycling74.com/reference/groove~) or [mc.groove~](https://docs.cycling74.com/reference/mc.groove~) has two or four output channels, the middle outlets play the channels other than the left channel. [mcs.groove~](https://docs.cycling74.com/reference/mcs.groove~) does not have middle outlets, so this does not apply for that object.

Out right outlet: Sync output. During the loop portion of the sample, this outlet outputs a  signal  that goes from 0. when the loop starts to 1. when the loop ends.

Note: In order for buffer playback to begin (and consequently for sync output), one of the [groove~](https://docs.cycling74.com/reference/groove~) object's output channels must be connected to another signal object.

## See Also

| Name | Description |
| --- | --- |
| [2d.wave~](https://docs.cycling74.com/reference/2d.wave~) | Two-dimensional wavetable |
| [buffer~](https://docs.cycling74.com/reference/buffer~) | Store audio samples |
| [mcs.groove~](https://docs.cycling74.com/reference/mcs.groove~) | Variable-rate looping sample playback |
| [play~](https://docs.cycling74.com/reference/play~) | Position-based sample playback |
| [phasegroove~](https://docs.cycling74.com/reference/phasegroove~) | Control groove~ With phasor~ |
| [wave~](https://docs.cycling74.com/reference/wave~) | Variable size wavetable |
| [index~](https://docs.cycling74.com/reference/index~) | Read from a buffer~ with no interpolation |
| [record~](https://docs.cycling74.com/reference/record~) | Record sound into a buffer |
| [transport](https://docs.cycling74.com/reference/transport) | Control a clock |
