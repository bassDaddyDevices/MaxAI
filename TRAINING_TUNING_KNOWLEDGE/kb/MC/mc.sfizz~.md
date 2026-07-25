---
type: mc
name: "mc.sfizz~"
summary: "Sfz format sample player (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.sfizz~/"
package: "MC"
see_also: ["makenote", "midiformat", "mc.midiplayer~", "mtof~"]
---
# mc.sfizz~

Sfz format sample player (multichannel)

## Description

[sfizz~](https://docs.cycling74.com/reference/sfizz~) is a player for files in the Sfz format. The format uses simple text files that specify how audio sample files are triggered by MIDI notes and controllers. (Information on the format is available at
[sfzformat.com](https://sfzformat.com)
.) The object accepts MIDI messages and produces two or more audio outputs. [sfizz~](https://docs.cycling74.com/reference/sfizz~) makes use of the open source
[Sfizz library project](https://sfz.tools/sfizz/)
that supports a
[large subset of standard Sfz opcodes](https://sfz.tools/sfizz/development/status/opcodes/)

## Arguments

### filename[symbol] optional

Sets an initial file to load and use.

## Attributes

### base[float]

Sets the "base frequency" used when calculating frequency values (e.g., A = 440.) from MIDI notes. The default base frequency is 440 Hz.

### defaultpathname[symbol]:

Note:
defaultpathname
applies exclusively to dictionaries not standard Sfz format files.

When the
pathmode
attribute is set to 1, the value of the
defaultpathname
is used as the base path for sample references in a dictionary.

### filename[symbol]:

SFZ File

### map[atom]

Keyboard Map

### mapname[symbol]

A set of values, given as a list, for a keyboard map in Scala format:

- Size of map; the pattern repeats every so many keys (example: 12)
- First MIDI note number to retune (example: 0)
- Last MIDI note number to retune (example: 127)
- Middle note where the first entry of the mapping is mapped to (example: 60)
- Reference note for which frequency is given (example: 69)
- Frequency for reference note, as a float (example: 440.0)
- Frequency for reference note, as a float (example: 440.0)
- Scale degree to consider as formal octave, determines difference in pitch between adjacent mapping patterns (example: 12)
- Mapping (example: 0 1 2 3 4 5 6 7 8 9 10 11)

Note: to indicate an unmapped key, you can use either an "x" or "-1". At the end of the list, unmapped keys may be left out. For more information about keyboard mappings, visit
[the Scala documentation.](https://www.huygens-fokker.org/scala/help.htm#mappings)

### mid[int]

The note number where a Scala scale begins (default 60).

### outputs[int]: 2

Sets the number of audio output channels. The minimum is 2 and the maximum is 1024. If you want more than the default stereo outputs, the Sfz file can specify a stereo output pair for a sample or region of samples using the  **output**  opcode. A value of 0 for the  **output**  opcode means output channels 1 and 2 in the [sfizz~](https://docs.cycling74.com/reference/sfizz~) object.  **output**  1 uses channels 3 and 4. If you created an object with 1024 audio output channels, the highest allowable value of the  **output**  opcode would be 511 (for channels 1023 and 1024). With any larger value of the
outputs
attribute you'll want to use the [mcs.sfizz~](https://docs.cycling74.com/reference/mcs.sfizz~) object that combines all outputs into a single multi-channel patch cord.

### pathmode[int]: 0

Alias:
defaultpathmode

Determines how [sfizz~](https://docs.cycling74.com/reference/sfizz~) locates sample files when using a dictionary. Note that
defaultpath
does not apply when reading in Sfz format files. For Sfz files, all samples must be specified as paths relative to the location of the Sfz file.

Possible values:

0 = 'Default'
(
Use Search Path
)
In this mode, [sfizz~](https://docs.cycling74.com/reference/sfizz~) locates sample files in the Max search path.

1 = 'Max Library'
(
Use Max Library folder
)
In this mode [sfizz~](https://docs.cycling74.com/reference/sfizz~) prepends the full pathname of the Max library folder to any sample filename.

2 = 'Last Opened Sfz File'
(
Use the location of the most recently opened Sfz file
)
In this mode [sfizz~](https://docs.cycling74.com/reference/sfizz~) prepends the full pathname of the most recently opened Sfz file to any sample filename.

3 = 'Patcher File'
(
Use the location of the patcher file containing the [sfizz~](https://docs.cycling74.com/reference/sfizz~) object.
)
In this mode [sfizz~](https://docs.cycling74.com/reference/sfizz~) prepends the full pathname of the patcher containing the object to any sample filename.

4 = 'default\_path Opcode'
(
Use a  **default\_path**  opcode in the dictionary
)
In this mode [sfizz~](https://docs.cycling74.com/reference/sfizz~) prepends the pathname of any  **default\_path**  opcode contained in the dictionary to any sample filename.

### ref[int]

The MIDI note number assigned to the base frequency (default 69).

### scale[atom]

A set of values, given as a list, for a scale described using the Scala format. The first value is the count of notes, followed either by floats defining a value in cents (example: 579.47057) or a ratio of two ints (example: 5/4). For more information, see the
[the Scala documentation.](https://www.huygens-fokker.org/scala/scl_format.html)

### scalename[symbol]

A valid scale name from the
[Scala archive](https://www.huygens-fokker.org/docs/scalesdir.txt)
, will cause [sfizz~](https://docs.cycling74.com/reference/sfizz~) to use the tuning described in that scale for its MIDI to frequency conversion. For this purposes of this attribute, the file extension (.scl) can be omitted.

### silent[int]: 0

Suppress Informational Messages

### voices[int]: 64

Sets the maximum number of simultaneously sounding voices. The default is 64.

### volume[float]: 0.

Sets the global output volume in dB; 0 is the default while -70 is close to silence.

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

You can trigger samples to play with a MIDI note number in the left inlet preceded by a non-zero MIDI velocity in the right inlet. This allows you to connect a [makenote](https://docs.cycling74.com/reference/makenote) object directly to [sfizz~](https://docs.cycling74.com/reference/sfizz~) to trigger notes.

### float

Converted to  int

### list

TEXT\_HERE

### (drag)

TEXT\_HERE

### (mouse)

Double-click to open a text editor to display and edit the contents of the currently loaded Sfz file.

### dictionary

The [sfizz~](https://docs.cycling74.com/reference/sfizz~) object accepts Max dictionaries to define the current sample mapping. For examples of the dictionary format refer to the  **dictionaries**  tab of the [sfizz~](https://docs.cycling74.com/reference/sfizz~) help file. The location of audio sample files referenced by a dictionary is more flexible than the Sfz file relative paths used by the standard Sfz format. Refer to the description of the
defaultpathmode
and
defaultpathname
attributes for more details.

The ability to generate sample data dynamically with a patch is one use case for the dictionary feature. You can even send dictionaries to [sfizz~](https://docs.cycling74.com/reference/sfizz~) while it is playing notes; the new data will be utilized once all sounding notes have turned off.

### midievent

midievent  followed by two or more numbers, sends a MIDI note or control event to the plug-in. The first two to three numbers are bytes of the MIDI message. [sfizz~](https://docs.cycling74.com/reference/sfizz~) supports an extension to standard MIDI with the third velocity value: if this is a  float  instead of an  int , it will be interpreted as a "high resolution" velocity value between 0 (note-off) and 1 (maximum velocity).

[sfizz~](https://docs.cycling74.com/reference/sfizz~) supports audio-rate MIDI connections from the [mc.midiplayer~](https://docs.cycling74.com/reference/mc.midiplayer~) object.

### read

When  read  is followed by a filename, [sfizz~](https://docs.cycling74.com/reference/sfizz~) will locate the file in the Max search path and load it as the current sample player specification. With no arguments,  read  will show an open file dialog prompting you to choose an Sfz file.

If there are errors in the file they will be reported in the Max window. A sample file referenced in the Sfz file is not a fatal error; missing samples are displayed as warnings.

Arguments:

- filename
  [symbol]

### readagain

The  readagain  message will reload the previously loaded Sfz file (using the  read  message).  readagain  is useful after editing Sfz files with an external text editor.

### signal

The [sfizz~](https://docs.cycling74.com/reference/sfizz~) object accepts a signal connection to [mc.midiplayer~](https://docs.cycling74.com/reference/mc.midiplayer~) for sending audio-rate sample-accurate MIDI events. Connections from other signal objects to [sfizz~](https://docs.cycling74.com/reference/sfizz~) are ignored.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## See Also

| Name | Description |
| --- | --- |
| [makenote](https://docs.cycling74.com/reference/makenote) | Generate a note-on/note-off pair |
| [midiformat](https://docs.cycling74.com/reference/midiformat) | Prepare data in the form of a MIDI message |
| [mc.midiplayer~](https://docs.cycling74.com/reference/mc.midiplayer~) | Generate MIDI Events from Audio Signals |
| [mtof~](https://docs.cycling74.com/reference/mtof~) | Convert a MIDI note number to frequency at signal rate |
