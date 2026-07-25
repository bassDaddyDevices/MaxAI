---
type: msp
name: "stretch~"
summary: "Ztx-based pitch/time modification of an audio buffer"
signal: true
url: "https://docs.cycling74.com/reference/stretch~/"
package: "MSP"
see_also: ["buffer~", "groove~", "pitchshift~"]
---
# stretch~

Ztx-based pitch/time modification of an audio buffer

## Description

Use the [stretch~](https://docs.cycling74.com/reference/stretch~) object to perform destructive pitch and time modifications to the contents of a [buffer~](https://docs.cycling74.com/reference/buffer~). object.

## Arguments

### buffer-name[symbol] optional

Specifies the name of the buffer which contains the result of destructive pitch/time modifications.

## Attributes

### basictuning[int]: 440

Sets a tuning standard based on a frequency for A for pitch-correction operations (440 = default, range is 400 - 500)

### followglobaltempo[int]: 0

When followgobaltempo is enabled, stretch~ will calculate the current tempo out of the ratio between originaltempo and the current global tempo.

### formant[float]: 1.

The word  formant , followed by floating point value, sets the amount of formant scaling when pitch shifting is performed.

### formantcorrection[int]: 0

The word  formantcorrection , followed by a zero or one, disables/enables formant correction when pitch correction is performed.

### mode[symbol]

Sets the timestretching mode to be used. Each mode is optimized for handling different kinds of audio material

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

'polyphonic'
(
Polyphonic sources (piano, guitar)
)
Polyphonic mode is a better choice for instruments such as piano or guitar.

'pads'
(
Emphasize spectral quality over transient preservation
)
This mode emphasizes spectral quality over transient preservation.

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

### originallength[Time Value]: 0 ticks

The original length of the the audio file in beats. Used by  followglobaltempo  to calculate the speed in relation to the global transport speed. Setting the  originallength  will calculate the  originaltempo .

### originaltempo[float]: 120.

The original tempo of the the audio file. Used by  followglobaltempo  to calculate the speed in relation to the global transport speed. Setting the  originaltempo  will calculate the  originallength .

### pitchcorrection[int]: 0

The word  pitchcorrection , followed by a zero or one, enable/disables the formant-corrected chromatic intonation correction. For more extensive real-time intonation correction, use the [retune~](https://docs.cycling74.com/reference/retune~) object.

### pitchshift[float]: 1.

Specifies pitchshift as a factor of the original pitch (i.e. 2.0 = doubling of pitch, .5 = halving of the original pitch, etc.).

### pitchshiftcent[int]: 0

Specify pitchshift as positive or negative cent values (i.e. 100 = semitone up, -1200 = octave down). Cents may be specified as ints or floats.

### progress\_enable[int]: 1

Enable/disable progress bar display when calculating pitch/time shifting.

### quality[symbol]: better

Choose the quality for the timestretching output.

Possible values:

'basic'

'good'

'better'

'best'

### readagain[int]: 1

Process audio from original buffer rather than current buffer when pitch or timestretching is done

### slurtime[float]: 0.

Set the time it takes for the correction to reach the full correction amount. Typically, notes are a bit unstable at the beginning, because the attack phase of a sound has a higher amount of noise, and because singers gradually adjust their tuning after the onset of the note. The slur time makes the pitch correction sound natural because it models this effect. Higher values will yield a slower adaptation time and it will take longer for the correction to produce the corrected pitch. However, longer slur times will also preserve vibrato better.

### stretch[float]: 1.

Set the timestretching as a factor in relation to the length of the current buffer (e.g. 2.0 = double the length, .5 = half the length, etc.).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  message starts processing to modify the contents of the currently referenced buffer.

### apply

same as  bang

### cancel

Cancels the currently running operation.

### (mouse)

Double-clicking on [stretch~](https://docs.cycling74.com/reference/stretch~) opens a display window where you can view the results of the pitch/time modifications you have made. The contents of the display window are updated when a modification is completed.

### dictionary

You can use a dictionary to define more complex stretching and pitch shifting. You define a point in time (sourcetime, sourcetimesample or sourcetimebbu) and define where this point should be transformed to (desttime, desttimesample or desttimebbu). For expample the dictionary below will

- create marker01 which will stretch the file so that the audio at 500 ms will be on the first bar, will pitch-shift the audio down by 100 cents until the next marker
- create marker02 which will stretch so the material at 1000 ms will be at 1.2.0 bbu, will pitch-shift the audio by a factor of 1.1 up until the next marker
- create marker03 which will stretch the whole sample (“end”) to be twice as long

```
					{ "marker01" : { "sourcetime" : "500", "desttimebbu" : "1.0.0", "pitchshiftcent" : -100 } , "marker02" : { "sourcetime" : 1000, "desttime" : 1.2.0, "pitchshift" : 1.1 } , "marker03" : { "sourcetime" : “end”, "desttime" : “*2”, } }

```

Arguments:

- dictionary-name
  [symbol]

### set

The word  set , followed by the name of an audio buffer, sets the name of the audio buffer referenced by the [stretch~](https://docs.cycling74.com/reference/stretch~) object.

Arguments:

- buffer-name
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [buffer~](https://docs.cycling74.com/reference/buffer~) | Store audio samples |
| [groove~](https://docs.cycling74.com/reference/groove~) | Variable-rate looping sample playback |
| [pitchshift~](https://docs.cycling74.com/reference/pitchshift~) | Ztx-based real-time pitchshifting |
