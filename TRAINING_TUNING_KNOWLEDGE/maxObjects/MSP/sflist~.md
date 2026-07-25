---
type: msp
name: "sflist~"
summary: "Store audio file cues"
signal: true
url: "https://docs.cycling74.com/reference/sflist~/"
package: "MSP"
see_also: ["buffer~", "groove~", "play~", "sfinfo~", "sfplay~", "sfrecord~"]
---
# sflist~

Store audio file cues

## Description

[sflist~](https://docs.cycling74.com/reference/sflist~) stores a list of preloaded cues for sound files that can be accessed by multiple [sfplay~](https://docs.cycling74.com/reference/sfplay~) objects. Each [sflist~](https://docs.cycling74.com/reference/sflist~) object has a unique name that [sfplay~](https://docs.cycling74.com/reference/sfplay~) objects use to refer to its cues. Defining a cue is the same for [sflist~](https://docs.cycling74.com/reference/sflist~) as for [sfplay~](https://docs.cycling74.com/reference/sfplay~). You can preload cues for [sflist~](https://docs.cycling74.com/reference/sflist~) without the audio being on.

## Arguments

### object-name[symbol] optional

Names the [sflist~](https://docs.cycling74.com/reference/sflist~). [sfplay~](https://docs.cycling74.com/reference/sfplay~) objects use this name to refer to cues stored inside the object.

### buffer-size[int] optional

Sets the buffer size used to preload audio files. The default and minimum is 16384. Preloaded buffers are 4 times the buffer size per channel of the audio file.

## Attributes

### name[symbol]

Name

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### clear

The word  clear with  no arguments clears all defined cues. After a  clear  message is received, only the number  1  will play anything (assuming there's an open file). The word  clear  followed by one or more cue numbers removes them from the [sflist~](https://docs.cycling74.com/reference/sflist~) object's cue list.

Arguments:

- cue-numbers
  [list]

### embed

The message  embed , followed by any non-zero integer, causes [sflist~](https://docs.cycling74.com/reference/sflist~) to save all of its defined cues and the name of the current open file when the patcher file is saved. The message  embed   0  keeps [sflist~](https://docs.cycling74.com/reference/sflist~) from saving this information when the patcher is saved. By default, the current file name and the cue information is not saved in [sflist~](https://docs.cycling74.com/reference/sflist~) when the patcher is saved. If an [sflist~](https://docs.cycling74.com/reference/sflist~) object is saved with stored cues, they will all be preloaded when the patcher containing the object is loaded.

Arguments:

- saving-preference-flag
  [int]

### fclose

The word  fclose , followed by the name of an open file, closes the file and removes all cues associated with it. The word  fclose  by itself closes the current file.

Arguments:

- filename
  [symbol]

### open

The word  open , followed by the name of an AIFF, WAV, or NeXT/Sun audio file, opens the file if it is located in Max's search path. Without a filename,  open  brings up a standard open file dialog allowing you to choose a file. When a file is opened, its beginning is read into memory, and until another file is opened, playing from the beginning the file is defined as cue  1 . Subsequent cues can be defined referring to this file using the  preload  message without a filename argument. When the  open  message is received, the previous current file, if any, remains open and can be referred to by name when defining a cue with the  preload  message. If any cues were defined that used the previous current file, they are still valid even if the file is no longer current.

Arguments:

- filename
  [symbol]

### openraw

TEXT\_HERE

### preload

Defines a cue, an integer greater than or equal to 2, to refer to a specific region of a file. When that cue number is subsequently received by an [sfplay~](https://docs.cycling74.com/reference/sfplay~) object that is set to use cues from the [sflist~](https://docs.cycling74.com/reference/sflist~) object, the specified region of the file is played by [sfplay~](https://docs.cycling74.com/reference/sfplay~). Cue number 1 is always the beginning of the current file - the file last opened with the  open  message - and cannot be modified with the  preload  message.

There are a number of forms for the  preload  message. The word  preload  is followed by an obligatory cue number between 2 and 32767. If the cue number is followed by a filename - a file that is currently open or one that is in Max's search path - that cue number will henceforth play the specified file. Note that a file need not have been explicitly opened with the  open  message in order to be used in a cue. If no filename is specified, the currently open file is used.

After the optional filename, an optional start time in milliseconds can be specified. If no start time is specified, the beginning of the file is used as the cue start point. After the start time, an end time in milliseconds can be specified. If no end time is specified, or the end time is  0 , the cue will play to the end of the file. If the end time is less than the start time, the cue is defined but will not play. Eventually it may be possible to define cues that play in reverse.

After the start and/or end time arguments, a optional directional buffer flag is used to enable reverse playback of stored cues. Setting this flag to 1 enables reverse cue playback. The default setting is  0  (bidirectional buffering off).

A final optional argument is used to set the playback speed. A float value sets the playback speed for an [sfplay~](https://docs.cycling74.com/reference/sfplay~) object relative to the object's global playback speed -- set by the  speed  message. The default value is  1 .

Each cue that is defined requires approximately 40K of memory per [sfplay~](https://docs.cycling74.com/reference/sfplay~) channel at the default buffer size (40320), with bidirectional buffering turned off. With bidirectional buffering turned on, the amount of memory per cue is doubled.

Arguments:

- cue-number
  [int]
- filename
  [symbol]
- start-time
  [int]
- end-time
  [int]
- directional-flag
  [int]
- playback-speed
  [float]

### print

Prints a list of all the currently defined cues.

## Output

### Cues

Cues are stored within the object for reference by other soundfile objects. A listing of internally stored cues is sent out its outlet with the  cuedump  message.

## See Also

| Name | Description |
| --- | --- |
| [buffer~](https://docs.cycling74.com/reference/buffer~) | Store audio samples |
| [groove~](https://docs.cycling74.com/reference/groove~) | Variable-rate looping sample playback |
| [play~](https://docs.cycling74.com/reference/play~) | Position-based sample playback |
| [sfinfo~](https://docs.cycling74.com/reference/sfinfo~) | Report audio file information |
| [sfplay~](https://docs.cycling74.com/reference/sfplay~) | Play audio file from disk |
| [sfrecord~](https://docs.cycling74.com/reference/sfrecord~) | Record to audio file on disk |
