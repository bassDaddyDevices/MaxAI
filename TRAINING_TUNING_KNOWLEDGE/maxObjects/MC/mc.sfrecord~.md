---
type: mc
name: "mc.sfrecord~"
summary: "Record to audio file on disk"
signal: true
url: "https://docs.cycling74.com/reference/mc.sfrecord~/"
package: "MC"
see_also: ["sfplay~", "mc.sfplay~", "sfrecord~"]
---
# mc.sfrecord~

Record to audio file on disk (multi-channel)

## Description

Use the [mc.sfrecord~](https://docs.cycling74.com/reference/mc.sfrecord~) object to record and save multi-channel MSP output as an audio file.

## Arguments

### number-of-channels[int] optional

Sets the number of channels to record via the one multi-channel inlet. The maximum number of channels is 64, and the default is 1. The audio file created will have the same number of channels as this argument, unless you set a lower number with the nchans attribute. Whether you can actually record the maximum number of channels is dependent on the speed of your processor and hard disk.

### buffer-size[int] optional

An optional second argument sets the buffer size. The defult value is 20160.

## Attributes

### beginramp[float]

Beginning Ramp Time (ms)

### bitdepth[int]

Alias:
format

Bits Per Sample

### dither[int]: 0

Enable triangular dithering (TPDF) when writing PCM (integer) files.

Possible values:

0 = 'Off'

1 = 'Dither'

2 = 'Dither + Noise Shaping'

### endramp[float]

Ending Ramp Time (ms)

### nchans[int]

Sets the number of channels to record, from 1-64. The default is 1. In order to record more than 1 channel, the maximum number of channels must first be set via the  number-of-channels  argument. Using the nchans attribute you can then specify any number of channels to record that is equal to or less than the  number-of-channels  argument.

### quantization[int]: 0

Select the quantization rule when writing PCM (integer) files.

Possible values:

0 = 'Round'
(
Round when quantizing to integer values.
)
1 = 'Floor'
(
Floor when quantizing to integer values.
)

### resample[float]

Resample Factor

### sortloop[int]: 0

Save Loop Recording In Order

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

If a file has been opened with the  open  message, a non-zero value begins recording, and  0  stops recording and closes the file. [mc.sfrecord~](https://docs.cycling74.com/reference/mc.sfrecord~) requires another  open  message to record again if a  0  has been sent.

Recording may also stop spontaneously if there is an error, such as running out of space on your hard disk.

Arguments:

- recording-start/stop-flag (0 or nonzero)
  [int]

### loop

If a file has been opened with the  open  message, the word  loop , followed by a number that specifies the loop length in milliseconds, begins recording for the specified amount of time, repeating within the specified area.  loop 0  turns off recording.

Arguments:

- looping-flag (0 or 1)
  [float]

### open

In left inlet: Opens a file for recording. By default, the file type is AIFF, but [sfrecord~](https://docs.cycling74.com/reference/sfrecord~) also supports WAVE, OGG, FLAC, and Raw Data. The word  open , without an argument, brings up a standard Save As dialog allowing you to choose a filename. The optional symbols  aiff ,  wave ,  ogg ,  flac , or  raw  specify the file format (which can also be set in the Save As dialog with a Format pop-up menu). If  open  is followed by a second symbol, it creates a file in the current default volume. An existing file with the same name will be overwritten. The format symbol (e.g.,  aiff ) can follow the optional filename argument. If only one argument is given to the  open  message, which is a filename, the file type is determined from the file extension (e.g., "open test.wav" sets the file type to  wave ).

Arguments:

- file-type
  [symbol]
- filename
  [symbol]

### print

Outputs cryptic status information about the progress of the recording.

### record

If a file has been opened with the  open  message, the word  record , followed by a time in milliseconds, begins recording for the specified amount of time. The recording can be stopped before it reaches the end by sending [mc.sfrecord~](https://docs.cycling74.com/reference/mc.sfrecord~) a  0 .

Arguments:

- recording-time
  [float]

### samptype

The word  samptype , followed by a symbol, specifies the sample type to use when recording the audio file. The following types of sample data are supported:

 int8 : 8-bit integer

 int16 : 16-bit integer

 int24 : 24-bit integer

 int32 : 32-bit integer

 float32 : 32-bit floating-point

 float64 : 64-bit floating-point

 mulaw : 8-bit "mu"-law encoding

 alaw : 8-bit a-law encoding

The optional second argument, a 0 or 1, specifies whether or not byte-swapping should be used, which is only useful when writing a 'raw' audio file.

Arguments:

- sample-type
  [symbol]
- byte-swap-flag
  [int]

### signal

[mc.sfrecord~](https://docs.cycling74.com/reference/mc.sfrecord~) accepts a multi-channel signal via the one inlet, which is recorded to an audio file when recording is turned on.

## Output

### signal

The time, in milliseconds, since recording of the file began. If recording has stopped, the signal value will remain at the length of the last recording until a new recording is started.

## See Also

| Name | Description |
| --- | --- |
| [sfplay~](https://docs.cycling74.com/reference/sfplay~) | Play audio file from disk |
| [mc.sfplay~](https://docs.cycling74.com/reference/mc.sfplay~) | Play audio file from disk (multi-channel) |
| [sfrecord~](https://docs.cycling74.com/reference/sfrecord~) | Record to audio file on disk |
