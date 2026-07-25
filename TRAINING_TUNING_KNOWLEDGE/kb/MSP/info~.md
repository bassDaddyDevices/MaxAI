---
type: msp
name: "info~"
summary: "Report information about a sample"
signal: true
url: "https://docs.cycling74.com/reference/info~/"
package: "MSP"
see_also: ["buffer~", "mstosamps~", "sfinfo~"]
---
# info~

Report information about a sample

## Description

Use the [info~](https://docs.cycling74.com/reference/info~) object to report the information in a file read into a [buffer~](https://docs.cycling74.com/reference/buffer~) object in response to a  bang . If the information is not present, it will be 0. [info~](https://docs.cycling74.com/reference/info~) does not require that the audio be turned on in order to work. Looping and tuning information is found in AIFF files.

## Arguments

### buffer-name[symbol] optional

Names the [buffer~](https://docs.cycling74.com/reference/buffer~) object for which [info~](https://docs.cycling74.com/reference/info~) will report information.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Causes a report of information about a sample contained in the associated [buffer~](https://docs.cycling74.com/reference/buffer~) object.

### (mouse)

Double-clicking on [info~](https://docs.cycling74.com/reference/info~) opens an editing window where you can view the contents of its associated [buffer~](https://docs.cycling74.com/reference/buffer~) object.

### set

The word  set  followed by the name of a [buffer~](https://docs.cycling74.com/reference/buffer~) object, sets which [buffer~](https://docs.cycling74.com/reference/buffer~) to which [info~](https://docs.cycling74.com/reference/info~) will refer.

Arguments:

- buffer-name
  [symbol]

## Output

### Sample Information

Most of the information reported by [info~](https://docs.cycling74.com/reference/info~) is taken from the audio file most recently read into the associated [buffer~](https://docs.cycling74.com/reference/buffer~). If this information is not present, only the sampling rate is sent out the left outlet. No output occurs for any item that's missing from the sound file.

### float

Out left outlet: The sampling rate of the sample.

Out 3rd outlet: Sustain loop start, in milliseconds.

Out 4th outlet: Sustain loop end, in milliseconds.

Out 5th outlet: Release loop start, in milliseconds.

Out 6th outlet: Release loop end, in milliseconds.

Out 7th outlet: Total time of the associated [buffer~](https://docs.cycling74.com/reference/buffer~) object, in milliseconds.

Out 8th outlet: Name of the most recently read audio file.

Out 9th outlet: Number of channels for the most recently read audio file.

Out 10th outlet: Full pathname of most recently read audio file.

### list

Out 2nd outlet: Instrument information about the sample, as follows:

1. The MIDI pitch of the sample.

2. The detuning from the original MIDI note number of the sample, in pitch bend units.

3. The lowest MIDI note number to use when playing this sample.

4. The highest MIDI note number to use when playing this sample.

5. The lowest MIDI velocity to use when playing this sample.

6. The highest MIDI velocity to use when playing this sample.

7. The gain of the sample (0-127).

## See Also

| Name | Description |
| --- | --- |
| [buffer~](https://docs.cycling74.com/reference/buffer~) | Store audio samples |
| [mstosamps~](https://docs.cycling74.com/reference/mstosamps~) | Convert milliseconds to samples |
| [sfinfo~](https://docs.cycling74.com/reference/sfinfo~) | Report audio file information |
