---
type: msp
name: "sfinfo~"
summary: "Report audio file information"
signal: true
url: "https://docs.cycling74.com/reference/sfinfo~/"
package: "MSP"
see_also: ["info~", "sflist~", "sfplay~"]
---
# sfinfo~

Report audio file information

## Description

[sfinfo~](https://docs.cycling74.com/reference/sfinfo~) gives you the number of channels, sample size, sampling rate, sampletype, filename, and duration of a soundfile.

## Arguments

### filename[symbol] optional

Names a file that [sfinfo~](https://docs.cycling74.com/reference/sfinfo~) will report about when it receives a subsequent  bang  message. The file must exist in the Max search path.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

If a file has already been opened, either with the  open  message or specified by an argument to [sfinfo~](https://docs.cycling74.com/reference/sfinfo~),  bang  reports the number of channels, sample size, sample rate, and length in milliseconds out the [sfinfo~](https://docs.cycling74.com/reference/sfinfo~) object's outlets.

### (drag)

Drag supported audio files directly onto [sfinfo~](https://docs.cycling74.com/reference/sfinfo~) to report info.

### getnamed

In left inlet: The word  getnamed , followed by a symbol which specifies the name of an [sfplay~](https://docs.cycling74.com/reference/sfplay~) object, interrogates the named [sfplay~](https://docs.cycling74.com/reference/sfplay~) object and reports the number of channels, sample size, sample rate, file length in milliseconds, sample type, and filename out its outlets.

Arguments:

- object-name
  [symbol]

### open

The word  open , followed by a name of an audio file, opens the file if it exists in Max's search path. Without a filename,  open  brings up a standard open file dialog allowing you to choose a file. After the file is opened, [sfinfo~](https://docs.cycling74.com/reference/sfinfo~) interrogates the file and reports the number of channels, sample size, sample rate, file length in milliseconds, sample type, and filename out its outlets.

Arguments:

- filename
  [symbol]

## Output

### alaw

8-bit a-law encoding

Out 6th outlet: The filename of the audio file

### float

Out 3rd outlet: The audio file's sampling rate.

Out 4th outlet: The duration of the audio file in milliseconds.

### float32

32-bit floating-point

### float64

64-bit floating-point

### int

Out left outlet: The number of channels in the audio file.

Out 2nd outlet: The audio file's sample size in bits (typically 16).

### int16

16-bit integer

### int24

24-bit integer

### int32

32-bit integer

### int8

8-bit integer

### mulaw

8-bit "mu"-law encoding

### symbol

Out 5th outlet: the sample type of the audio file.

The following types of sample data are supported:

### uint8

unsigned 8-bit integer

## See Also

| Name | Description |
| --- | --- |
| [info~](https://docs.cycling74.com/reference/info~) | Report information about a sample |
| [sflist~](https://docs.cycling74.com/reference/sflist~) | Store audio file cues |
| [sfplay~](https://docs.cycling74.com/reference/sfplay~) | Play audio file from disk |
