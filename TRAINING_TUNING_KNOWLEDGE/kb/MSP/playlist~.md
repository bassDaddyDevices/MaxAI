---
type: msp
name: "playlist~"
summary: "Play sound files"
signal: true
url: "https://docs.cycling74.com/reference/playlist~/"
package: "MSP"
see_also: ["mc.playlist~", "jit.playlist", "sfplay~", "mc.sfplay~", "waveform~"]
---
# playlist~

Play sound files

## Description

Use [playlist~](https://docs.cycling74.com/reference/playlist~) to organize sets of soundfiles and play them back. Each sound is given a visual representation in a clip where a selection from the entire sound file may be choosen. Clips may be dragged within a playlist~ to re-order them, or they may be dragged to other playlist~ objects by using the handle (dot) on the left side of the clip.

#### Discussion

Please note that [playlist~](https://docs.cycling74.com/reference/playlist~) is not intended for high performance random access needs, as the object reads samples from disk. For high performance random access needs, please see [buffer~](https://docs.cycling74.com/reference/buffer~) or [polybuffer~](https://docs.cycling74.com/reference/polybuffer~).

## Arguments

None.

## Attributes

### accentcolor[4 floats]

Set the color of the loop icon when turned off.

### allowreorder[int]: 1

Allow the re-ordering of clips in playlist~ by dragging the handle (dot on the left side) of a clip above or below other clips.

Possible values:

0 = 'Off'

1 = 'On'

2 = 'Automatic'

### annotation\_name[symbol]:

Info View Title

### basictuning[int]: 440 >= 7.0.0

Set a tuning standard based on a frequency for A for pitch correction operations (440 = default, range is 400 - 500). Both timestretch and pitchcorrection need to be enabled to adjust the basic tuning.

### bgcolor[4 floats]

Set the background color of [playlist~](https://docs.cycling74.com/reference/playlist~).

### candicane2[4 floats]: 0.498 0.5561 0.7451 1.

Candycane Color 1

### candicane3[4 floats]: 0.29392 0.41441 0.71583 1.

Candycane Color 2

### candicane4[4 floats]: 0.44088 0.62161 0.07375 1.

Candycane Color 3

### candicane5[4 floats]: 0.58784 0.82881 0.43166 1.

Candycane Color 4

### candicane6[4 floats]: 0.7348 0.03601 0.78958 1.

Candycane Color 5

### candicane7[4 floats]: 0.88176 0.24321 0.14749 1.

Candycane Color 6

### candicane8[4 floats]: 0.02872 0.45042 0.50541 1.

Candycane Color 7

### candycane[int]: 1

Alternating Candycane Colors

### channelcount[int]: 2

Number of audio channels to playback. Changing this attribute will clear the playlist~ content.

### clipheight[float]: 30.

Height alloted for each clip to be displayed. This value may be altered when dragging new clips into the playlist~ according to the expansion attribute.

### color[4 floats]

Set the color for the waveform and controls.

### elementcolor[4 floats]

Set the clip divider color.

### expansion[symbol]: squeeze

Style of accomodation for adding clips to a playlist~ with no empty space available.

Possible values:

'squeeze'
(
Maintain the size of the box and reduce the height of all clips to make room.
)
'static'
(
Maintain both the size of the box and the height of all clips. A scroll bar will need to be used to access clips out of view.
)
'grow'
(
Expand the size of the box downward, while maintaining the height of all clips.
)

### followglobaltempo[int]: 0 >= 7.0.0

When followgobaltempo is enabled for a clip in [playlist~](https://docs.cycling74.com/reference/playlist~), [sfplay~](https://docs.cycling74.com/reference/sfplay~) will calculate the current tempo out of the ratio between originaltempo and global tempo and adapt to global tempo changes.

### formant[float]: 1. >= 7.0.0

Set the amount of formant scaling when pitchshifting is performed. timestretch must be enabled to adjust the formant scaling.

### formantcorrection[int]: 0 >= 7.0.0

Turn on formant correction when pitch correction is performed. Both timestretch and pitchcorrection need to be enabled first.

### loop[int]

Turn looping on/off.

### loopreport[int]: 0

When enabled, the message "loopnotify", followed by the clip number and file name, is sent out the fourth outlet of [playlist~](https://docs.cycling74.com/reference/playlist~) every time a loop occurs.

### mode[symbol] >= 7.0.0

Set the timestretching mode to be used. Each mode is optimized for handling different kinds of audio material. All modes are zero latency. timestretch must be enabled first.

Possible values:

'basic'

'monophonic'

'rhythmic'

'general'

'extremestretch'

'efficient'

### name[symbol]

Name

### originallength[Time Value]: 0 ticks >= 7.0.0

The original length of the the audio file. This can be measured in ticks, bars.beats.units, or notevalues. Used by followglobaltempo to calculate the speed in relation to the global transport speed. Setting the originallength will calculate the originaltempo. followglobaltempo must be enabled first.

### originaltempo[float]: 120. >= 7.0.0

The original tempo of the the audio file. Used by followglobaltempo to calculate the speed in relation to the global transport speed. Setting the originaltempo will calculate the originallength. followglobaltempo must be enabled first.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### pitchcorrection[int]: 0 >= 7.0.0

Enable/disables the formant-corrected chromatic intonation correction. timestretch must be enabled first. For more extensive real-time intonation correction, use the [retune~](https://docs.cycling74.com/reference/retune~) object.

### pitchshift[float]: 1. >= 7.0.0

Specify pitchshift as a factor of the original pitch (i.e. 2.0 = doubling of pitch, .5 = halving of the original pitch, etc.). timestretch must be enabled first.

### pitchshiftcent[int]: 0 >= 7.0.0

Specify pitchshift as positive or negative cent values (i.e. 100 = semitone up, -1200 = octave down). Cents may be specified as ints or floats. timestretch must be enabled first.

### quality[symbol] >= 7.0.0

Choose the quality for timestretching output.

Possible values:

'basic'

'good'

'better'

'best'

### reportprogress[int]: 0

Report the progress (0. - 1.) of the currently playing media file via the notification output.

### selectioncolor[4 floats]

Set the color of selections.

### shadowalpha[float]: 0.

Shadow Alpha

### shadowblend[float]: 0.

Shadow Blend

### shadowproportion[float]: 0.

Shadow Proportion

### showname[int]: 1

Show the file name for each clip.

### slurtime[float]: 0. >= 7.0.0

Set the time it takes for the correction to reach the full corrected amount. Typically, notes are a bit unstable at the beginning, because the attack phase of a sound has a higher amount of noise, and because singers gradually adjust their tuning after the onset of the note. The slur time makes the pitch correction sound natural because it models this effect. Higher values will yield a slower adaptation time and it will take longer for the correction to produce the corrected pitch. However, longer slur times will also preserve vibrato better. timestretch and pitchcorrection must be enabled first.

### speed[float]

Set the playback speed. 1.0 = original speed, 0.5 = half-speed, etc.

### style[symbol]:

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### textcolor[4 floats]

Set the color of the file name text.

### timestretch[int]: 0 >= 7.0.0

Disable/enable timestretching. When timestretch is set to 1, you can control the quality of the conversion with the mode, quality, and formant attributes.

### waveformdisplay[int]: 1

Display style for waveforms that represent each clip.

Possible values:

0 = 'Bi-Polar'

1 = 'Rectified'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

0 stops soundfile playback. A number greater than zero begins playback of the clip with that index. Indices begin counting at 1.

Arguments:

- clip
  [int]

### append

Add a new soundfile to the list. First (optional) argument specifies the soundfile. Second (optional) argument specifies the slot number for the clip (starting at 1). If no arguments are listed, clicking the append message in a locked patcher will open a dialog box where you can choose a file to append.

Arguments:

- soundfile
  [symbol]
- clip-number
  [int]

### clear

Remove all clips from the playlist. To remove just one clip, right-click on the file you wish to remove in a locked patcher and choose "Remove" from the contextual menu.

### (drag)

Create a new [playlist~](https://docs.cycling74.com/reference/playlist~) object by dragging and dropping an audio file into an unlocked patch. To load additional audio files into a [playlist~](https://docs.cycling74.com/reference/playlist~) object, drag the new file onto the [playlist~](https://docs.cycling74.com/reference/playlist~) UI until a line appears above or below the currently loaded file. To rearrange tracks within [playlist~](https://docs.cycling74.com/reference/playlist~), click and drag the handle (dot on the left side) up or down in a locked patch. To replace a currently loaded file, drag the new file over the old one until the entire track is highlighted.

### getcontent

The word  getcontent  sends the contents and behavior of all clips out the last outlet of [playlist~](https://docs.cycling74.com/reference/playlist~) in dictionary format. Connect the last outlet to a [dict.view](https://docs.cycling74.com/reference/dict.view) object to see the contents. Please note that for the "absolutepath" entry, the full file path for each clip will only be displayed if the file is not in Max's search path. If the file is in Max's search path, only the file name will be displayed.

### (mouse)

Use your mouse to play and stop the playlist, also use it to select small parts of the sample for playback.

### next

Plays the next clip loaded in [playlist~](https://docs.cycling74.com/reference/playlist~).

### pause

Pause playback of the current clip at the current position.

### remove

The word  remove , followed by a clip number starting at 1, removes that clip from the list.

Arguments:

- clip-number
  [int]

### resume

Resume playback from the current position if playback has been paused. This message has no effect when using signal-driven playback.

### selection

Select playback endpoints for a clip using a normalized range (0.0 is the beginning, 1.0 is the end). The first argument specifies which clip (starting at 1). The second argument is the start point for the clip, and the third argument is the end point. If only two arguments are given, they serve as the start and end points for all clips in playlist~. If only one argument is given, it serves as the clip number and clears any selection from that clip.

Arguments:

- clip
  [int]
- start
  [float]
- end
  [float]

### selectionms

Select playback endpoints for a clip in milliseconds. The first argument specifies which clip (starting at 1). The second argument is the start point for the clip, and the third argument is the end point. If only two arguments are given, they serve as the start and end points for all clips in playlist~. If only one argument is given, it serves as the end point for all clips in playlist~.

Arguments:

- clip
  [int]
- start
  [float]
- end
  [float]

### setclip

[sfplay~](https://docs.cycling74.com/reference/sfplay~) attributes are available in playlist~. To control a specific clip, use the "setclip" message followed by the clip number, attribute name, and value. The message "setclip 2 loop 1" will turn looping on for clip 2.

Arguments:

- clip
  [int]
- attribute
  [symbol]
- value
  [anything]

### signal

An input signal may be used for the sample-accurate triggering of prestored cues. When a signal value is received in the left inlet, the integer portion of the signal value is monitored. When the integer portion of the input signal changes to a value equal to the index of a prestored cue, that cue is triggered. Indexes start at 1. A signal value of 0 stops audio. Negative values are ignored.

## Output

### dictionary

The rightmost outlet sends a dictionary summary of the playlist~ content in response to the 'getcontent' message.

### list

2nd from right outlet sends messages of the form 'start N clipname' or 'done N clipname' where N is the index and 'clipname' is the name of the clip.

### signal

There is one signal outlet for each of the [playlist~](https://docs.cycling74.com/reference/playlist~) object's output channels.

These are followed by a signal indicating the position of the playback head. The integer part of the number is the index of the clip that is playing. The fractional part of the number is the instantaneous position within that clip.

## See Also

| Name | Description |
| --- | --- |
| [mc.playlist~](https://docs.cycling74.com/reference/mc.playlist~) | Play sound files with multichannel output |
| [jit.playlist](https://docs.cycling74.com/reference/jit.playlist) | Play video files |
| [sfplay~](https://docs.cycling74.com/reference/sfplay~) | Play audio file from disk |
| [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) | Play audio file from disk (multi-channel) |
| [waveform~](https://docs.cycling74.com/reference/waveform~) | buffer~ viewer and editor |
