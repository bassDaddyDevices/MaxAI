---
type: mc
name: "mc.sflist~"
summary: "Play audio file from disk (multi-channel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.sflist~/"
package: "MC"
see_also: ["sfplay~", "buffer~", "groove~", "play~", "sfinfo~", "sflist~", "sfrecord~", "mc.sfrecord~"]
---
# mc.sflist~

Play audio file from disk (multi-channel)

## Description

Use the [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) object to play audio files from disk. Supported formats include AIFF, WAVE, MP3, OGG, FLAC, M4A, CAF, WF64, WAVE64, and Raw Data.

#### Discussion

To play a file, you send [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) the  open  message, then send it a  1  to start and a  0  to stop.  open  takes an argument to specify a filename in the search path. You can also create additional cues with the  preload  message. These can reference other files, all of which are simultaneously accessible. The  open  message sets the "current" file: the one that plays back from the beginning when  1  is sent and is used as the default for the  preload  message. [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) can also connect to the cues defined in an [sflist~](https://docs.cycling74.com/reference/sflist~) object. Since multiple [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) objects can reference the same [sflist~](https://docs.cycling74.com/reference/sflist~), this allows you to store a global list of cues.

## Arguments

### sflist-object-name[symbol] optional

If the first argument is a  symbol , it names an [sflist~](https://docs.cycling74.com/reference/sflist~) that the [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) object will use for playing cues. If no symbol argument is given, [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) plays its own internally defined cues.

### number-of-output-channels[int] optional

Sets the number of channels to output as one multi-channel signal. The maximum number of channels is 64. The default is 1. If the audio file being played has more output channels than the [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) object, higher-numbered channels will not be played. If the audio file has fewer channels than the [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) object, those channels not being used will be zeroed.

### buffer-size[int] optional

An additional optional argument can be used to specify the disk buffer size in samples. In general, we recommend using the default buffer size unless you are experiencing dropouts during playback.

The default disk buffer size is 483840 for instances with up to 8 channels, and 80640 times the number of channels for instances with more than 8 channels.

Disk buffer sizes will be rounded to the nearest multiples of 20160. If this argument has a value of 0, the default disk buffer size will be used.

### position-outlet-flag[int] optional

An additional optional argument can be used to create outlets to the mc.sfplay~ object which display positioning information. Specifying a final argument of  1  creates a single outlet to the left of the rightmost "bang on finish or halt" outlet which outputs a signal value which corresponds to the current playback position in milliseconds.

Like all MSP audio signals, this playback position is a 32-bit single precision floating-point signal. If greater precision is desired, specifying a final argument of 2 creates a second outlet which outputs a second 32-bit single precision floating-point signal containing the single precision roundoff error. Together these signals provide near double precision floating-point accuracy. (Note: after several minutes a single precision floating-point value is no longer sample accurate) Using the two signals together with objects such as the unsupported Max/ MSP high resolution signal processing objects like  **hr.+~** , one may perform sample-accurate calculations based on file position

### object-reference-name[symbol] optional

If the last argument is a symbol, it specifies a name by which other objects can refer to the [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) object to access its contents.

## Attributes

### audiofile[symbol] >= 7.0.0

Specifies the name/pathname of an audio file to be loaded by the [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) object.

### basictuning[int]: 440 >= 7.0.0

Sets a tuning standard based on a frequency for A for pitch correction operations (440 = default, range is 400 - 500)

### chans[int]

Sets the number of output channels in the multichannel output. If chans is sent to the object when audio is on, the number of output channels will not change until the audio is turned off and back on again.

### followglobaltempo[int]: 0 >= 7.0.0

When followgobaltempo is enabled, [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) will calculate the current tempo out of the ratio between originaltempo and global tempo and adapt to global tempo changes.

### formant[float]: 1. >= 7.0.0

The word  formant , followed by floating point value, sets the amount of formant scaling when pitchshifting is performed.

### formantcorrection[int]: 0 >= 7.0.0

The word  formantcorrection , followed by a zero or one, disables/enables formant correction when pitch correction is performed.

### loop[int]

Turn looping on or off.

### mode[symbol] >= 7.0.0

Sets the timestretching mode to be used. Each mode is optimized for handling different kinds of audio material. All modes are zero latency.

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

Name

### originallength[Time Value]: 0 ticks >= 7.0.0

The original length of the the audio file in beats. Used by  followglobaltempo  to calculate the speed in relation to the global transport speed. Setting the  originallength  will calculate the  originaltempo .

### originaltempo[float]: 120. >= 7.0.0

The original tempo of the the audio file. Used by  followglobaltempo  to calculate the speed in relation to the global transport speed. Setting the  originaltempo  will calculate the  originallength .

### pitchcorrection[int]: 0 >= 7.0.0

The word  pitchcorrection , followed by a zero or one, enable/disables the formant-corrected chromatic intonation correction. For more extensive real-time intonation correction, use the [mc.retune~](https://docs.cycling74.com/reference/mc.retune~) object.

### pitchshift[float]: 1. >= 7.0.0

Specify pitchshift as a factor of the original pitch (i.e. 2.0 = doubling of pitch, .5 = halving of the original pitch, etc.).

### pitchshiftcent[int]: 0 >= 7.0.0

Specify pitchshift as positive or negative cent values (i.e. 100 = semitone up, -1200 = octave down). Cents may be specified as ints or floats.

### quality[symbol] >= 7.0.0

Choose the quality for timestretching output.

Possible values:

'basic'
(
Basic quality (the default)
)
'good'
(
Good quality
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

### speed[float]

Playback speed

### timestretch[int]: 0 >= 7.0.0

The word  timestretch , followed by a zero or one, disables/enables timestretching.

With  timestretch  enabled in a standalone application, output of [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) is limited to 2 channels of output.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: If a file has been opened with the  open  message,  1  begins playback (of the most recently opened file), and  0  stops playback. Numbers greater than 1 trigger cues that have been defined with the  preload  message, or that were defined based on the saved state of the [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) object. When the file is played, the audio data in the file is sent out the signal outlets according to the number of channels the object has. When the cue is completed or [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) is stopped with a  0 , a  bang  is sent out the right outlet. If the object is currently assigned to an [sflist~](https://docs.cycling74.com/reference/sflist~) object (using the  set  message or with a typed-in argument), an  int  will trigger cues stored in the [sflist~](https://docs.cycling74.com/reference/sflist~) object rather than inside the [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~). To reset [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) to use its own cues, send it the  set  message with no arguments.

Arguments:

- start/stop-playback-of-cue-number
  [int]

### float

In right inlet: Defines the playback rate of an audio file. A value of 1.0 plays the audio file at normal speed. A playback rate of -1 plays the audio file backwards at normal speed. A playback rate of 2 plays the audio file at twice the normal speed. A playback rate of .5 plays the audio file at half the normal speed. The playback rate cannot be changed when playback is off.

To initiate starting from a cue point with a negative speed, bidirectional cues must be used.

Arguments:

- playback-rate
  [float]

### list

In left inlet: Gives a set of cues for [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) to play, one after the other. The maximum number of cues in a list is 128. Cue numbers (set using the  preload  message) can be any integer greater than or equal to 2. If a cue number in a list has not been defined, it is skipped and the next cue, if any, is tried. If the object is currently assigned to an [sflist~](https://docs.cycling74.com/reference/sflist~) object, a list uses cues stored in the [sflist~](https://docs.cycling74.com/reference/sflist~) object. Otherwise, cues stored inside the [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) object are used.

Arguments:

- cues
  [list]

### anything

In left inlet: If the name of an [sflist~](https://docs.cycling74.com/reference/sflist~) object is sent to [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~), followed by a number, the numbered cue from the [sflist~](https://docs.cycling74.com/reference/sflist~) is played if it exists.

Arguments:

- sflist-object-name
  [symbol]
- cue-number
  [int]

### (drag)

When an audio file is dragged from the Max File Browser to an [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) object, the file will be loaded.

### clear

In left inlet: The word  clear  with no arguments clears all defined cues. After a  clear  message is received, only the number  1  will play anything (assuming there's an open file). The word  clear  followed by one or more cue numbers removes them from the [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) object's cue list.  clear  requires the DSP chain to be off.

Arguments:

- cue-numbers
  [list]

### dictionary >= 7.0.0

Use a dictionary to define more complex time stretching. Define a point in time (sourcetime) and define where this point should be transformed to (desttime). For example, the dictionary below will

- create marker01 which will stretch the whole sample (“end”) to be twice as long

```
					{ "marker01" : { "sourcetime" : “end”, "desttime" : “*2”, } }

```

Arguments:

- dictionary-name
  [symbol]

### embed

In left inlet: The message  embed , followed by any non-zero integer, causes [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) to save all of its defined cues and the name of the current open file when the patcher file is saved. The message  embed   0  keeps [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) from saving this information when the patcher is saved. By default, the current file name and the cue information is not saved in [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) when the patcher is saved. If an [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) object is saved with stored cues, they will all be preloaded when the patcher containing the object is loaded.

Arguments:

- saving-preference-flag (0 or nonzero)
  [int]

### fclose

In left inlet: The word  fclose , followed by the name of an open file, closes the file and removes all cues associated with it. The word  fclose  by itself closes the current file.

Arguments:

- filename
  [symbol]

### loopone

In left inlet: The word  loopone , followed by a cue-number, will set only the cue specified to loop.

Arguments:

- cue-number
  [int]

### modout

In left inlet: The word  modout , followed by 1, turns on modulo output. If the number of channels in a audio file is less than the number of channels for the [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) object, the [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) object will reduplicate the audio file's channels across all of the [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) channels (rather than outputting zero) if modulo output is enabled. For example, a mono audio file loaded into an [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) object with two channels will be played in both channels if modulo output is enabled. Similarly a stereo audio file will be played on an [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) object with four outlets with the left channel played on channels 1 and 3, while the right will be played on channels 2 and 4. The message  modout 0  disables this feature.

Arguments:

- modulo-output-flag
  [int]

### offset

In left inlet: The word  offset , followed by a number, specifies the sample start offset in bytes. The default value is 0. This value useful for aligning samples and avoiding playback of header information.

Arguments:

- sample-start-offset (bytes)
  [int]

### open

In left inlet: followed by the name of an AIFF, WAVE, MP3, OGG, FLAC, M4A, CAF, WF64, WAVE64, or Raw format audio file or CD-audio track, opens the file for playback and makes it the current file. The word  open , followed by a filename, opens the file if it exists in Max's search path. Without a filename,  open  brings up a standard open file dialog allowing you to choose a file. When a file is opened, its beginning is read into memory, and until another file is opened, you can play the file from the beginning by sending [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) the message  1 . When the  open  message is received, the previous current file, if any, remains open and can be referred to by name when defining a cue with the  preload  message. If any cues were defined that used the previous current file, they are still valid even if the file is no longer current.

Arguments:

- filename
  [symbol]

### openraw

In left inlet: The  openraw  message functions exactly like  open , but allows you to open any type of file for playback and make it the current file. The  openraw  message assumes that the file being opened is a 16-bit stereo file sampled at a rate of 44100 Hz, and assumes that there is no header information to ignore (i.e., an offset of 0). The file types can be explicitly specified using the  samptype ,  offset ,  srate , and  srchans  messages.

Arguments:

- filename
  [symbol]

### pause

In left inlet: The  pause  message causes the audio file playback to pause at its current playback position. Playback can be restarted with the  resume  message.

### preload

In left inlet: Defines a cue - an integer greater than or equal to 2 - to refer to a specific region of a file. When that cue number is subsequently received, [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) plays that region of that file. Cue number 1 is always the beginning of the current file - the file last opened with the  open  message - and cannot be modified with the  preload  message.

There are a number of forms for the  preload  message. The word  preload  is followed by an obligatory cue number between 2 and 32767. If the cue number is followed by a filename of a file in Max's search path, or a full file pathname, that cue number will play the specified file. Note that a file need not have been explicitly opened with the  open  message in order to be used in a cue. If no filename is specified, the currently open file is used.

After the optional filename, an optional start time in milliseconds can be specified. If no start time is specified, the beginning of the file is used as the cue start point. After the start time, an end time in milliseconds can be specified. If no end time is specified, or the end time is  0 , the cue will play to the end of the file. If the end time is less than the start time, the cue is defined but will not play. Eventually it may be possible to define cues that play in reverse.

After the start and/or end time arguments, a optional directional buffer flag is used to enable reverse playback of stored cues. Setting this flag to 1 enables reverse cue playback. The default setting is  0  (bidirectional buffering off).

A final optional argument is used to set the playback speed. A float value sets the [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) object's playback speed relative to the object's global playback speed -- set set by either the  speed  message or the [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) object's right inlet. The default value is  1 .

Each cue that is defined requires approximately 40K of memory per [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) channel at the default buffer size (40320), with bidirectional buffering turned off. With bidirectional buffering turned on, the amount of memory per cue is doubled.

The  preload  message is always deferred to low priority. The  pause ,  resume , and  int  messages are not. If you have problems with these messages arriving before you want them to in overdrive mode (i.e., before you've preloaded the most recent cue), use the [defer](https://docs.cycling74.com/reference/defer) object.

Arguments:

- cue-number
  [int]
- filename
  [symbol]
- start-time
  [number]
- end-time
  [number]
- directional-flag
  [int]
- playback-speed
  [float]

### preloadn >= 7.0.0

The  preloadn  message works in precisely the same manner as the  preloadn  message, but normalized values in the range 0. - 1.0 are to specify start and end times for the cue.

Arguments:

- cue-number
  [int]
- filename
  [symbol]
- start-time
  [float]
- end-time
  [float]
- directional-flag
  [int]
- playback-speed
  [float]

### print

In left inlet: Prints information about the state of the object, plus a list of all the currently defined cues.

### resume

In left inlet: If playback was paused, playback resumes from the paused point in the file.

### samptype

In left inlet: The word  samptype , followed by a symbol, specifies the sample type to use when interpreting the audio file's sample data (thus overriding the audio file's actual sample type). This is sometimes called "header munging." When reading files in response to the  openraw  message, the assumed sample type is 16-bit integer. Modifications using  samptype  make no changes to the file on disk.

The following types of sample data are supported:

 int8 : 8-bit integer

 int16 : 16-bit integer

 int24 : 24-bit integer

 int32 : 32-bit integer

 float32 : 32-bit floating-point

 float64 : 64-bit floating-point

 mulaw : 8-bit "mu"-law encoding

 alaw : 8-bit a-law encoding

Arguments:

- sample-type
  [symbol]
- bit-depth
  [int]

### seek

In left inlet: The word  seek , followed by a start time in milliseconds, moves to the specified position in the current file and begins playing. After the start time, an optional end time can be specified, which will set a point for playback to stop. The  seek  message is intended to allow you to preview and adjust the start and end points of a cue.

NOTE: The  seek  message is always deferred to low priority. If you have problems with these messages arriving before you want them to in overdrive mode (i.e. before you've finished seeking to a new location), then use the [defer](https://docs.cycling74.com/reference/defer) object.

Arguments:

- start-time
  [number]
- end-time
  [number]

### set

In left inlet: The message  set , followed by a name of an [sflist~](https://docs.cycling74.com/reference/sflist~) object, will cause [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) to play cues stored in the [sflist~](https://docs.cycling74.com/reference/sflist~) when it receives an  int  or  list . The message  set  with no arguments resets [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) to use its own internally defined cues when receiving an  int  or  list .

Arguments:

- sflist-object-name
  [symbol]

### signal

In left inlet: An input signal may be used for the sample-accurate triggering of prestored cues. When a signal value is received in the left inlet, the integer portion of the signal value is monitored. When the integer portion of the input signal changes to a value equal to the index of a prestored cue, that cue is triggered. Negative values are ignored.

### srate

In left inlet: The word  srate , followed by a number, specifies the sampling rate (Hertz) at which to interpret the audio file's sample data (thus overriding the audio file's actual sampling rate). This is sometimes called "header munging." When reading files in response to the openraw message, the assumed sampling rate is 44,100 Hz. Modifications using  srate  make no changes to the file on disk.

Arguments:

- sample-rate
  [float]

### srcchans

In left inlet: The word  srcchans , followed by a number, specifies the number of channels in which to interpret the audio file's sample data (thus overriding the audio file's actual number of channels). This is sometimes called "header munging." When reading files in response to the  openraw  message, the assumed number of channels is 2. Modifications using  srcchans  make no changes to the file on disk.

Arguments:

- number-of-channels
  [int]

## Output

### bang

Out right outlet: When the file is done playing, or when playback is stopped with a  0  message, a  bang  is sent out.

### multi-channel signal

There is one signal outlet for [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~), which outputs a multi-channel signal. The number of channels output is specified as an argument to the [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) object.

If the optional output position argument is specified, there will be one or two signal outputs following the multi-channel output, whose signal outputs display positioning information. If the argument is  1 , a single outlet to the left of the rightmost "bang on finish or halt" outputs a signal containing the current playback position in milliseconds. Specifying a final argument of  2  creates a second outlet which outputs a signal containing the playback position single precision roundoff error in milliseconds (see Arguments for a more detailed description of the [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) object's position outlets).

## See Also

| Name | Description |
| --- | --- |
| [sfplay~](https://docs.cycling74.com/reference/sfplay~) | Play audio file from disk |
| [buffer~](https://docs.cycling74.com/reference/buffer~) | Store audio samples |
| [groove~](https://docs.cycling74.com/reference/groove~) | Variable-rate looping sample playback |
| [play~](https://docs.cycling74.com/reference/play~) | Position-based sample playback |
| [sfinfo~](https://docs.cycling74.com/reference/sfinfo~) | Report audio file information |
| [sflist~](https://docs.cycling74.com/reference/sflist~) | Store audio file cues |
| [sfrecord~](https://docs.cycling74.com/reference/sfrecord~) | Record to audio file on disk |
| [mc.sfrecord~](https://docs.cycling74.com/reference/mc.sfrecord~) | Record to audio file on disk (multi-channel) |
