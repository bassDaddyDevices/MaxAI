---
type: msp
name: "mcs.sig~"
summary: "Convert numbers to audio signals (multichannel output)"
signal: true
url: "https://docs.cycling74.com/reference/mcs.sig~/"
package: "MC"
see_also: ["line~", "sig~", "snapshot~"]
---
# mcs.sig~

Convert numbers to audio signals (multichannel output)

## Description

Use the [mcs.sig~](https://docs.cycling74.com/reference/mcs.sig~) object to convert a list of numbers into a multi-channel audio signal.

## Arguments

### initial-output-value[number] optional

One or more numbers set the initial output signal values. The number of values entered determines the number of channels in the multi-channel output signal.

## Attributes

### chans[int]

Sets the number of channels in the output multi-channel signal. If chans is changed while audio is on, the change takes effect after the audio is stopped and restarted.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Number to be output as a  signal

Arguments:

- input
  [int]

### float

Number to be output as a  signal

Arguments:

- input
  [float]

### list

A list sets values for each channel corresponding to the position of the number in the list.

Arguments:

- input
  [list]

### set

The message  set  followed by an int, then a float, sets the value for a specified channel in the output. The first  int  argument sets the channel. The second  float  argument sets the value for that channel. The index starts at 0 for the first channel.

Arguments:

- index
  [int]
- value
  [float]

### signal

Has no effect

## Output

### multi-channel signal

[mcs.sig~](https://docs.cycling74.com/reference/mcs.sig~) outputs a multi-channel signal with the values of its arguments or the most recently received  int  or  float  in its inlets.

## See Also

| Name | Description |
| --- | --- |
| [line~](https://docs.cycling74.com/reference/line~) | Linear signal ramp generator |
| [sig~](https://docs.cycling74.com/reference/sig~) | Convert numbers into audio signals |
| [snapshot~](https://docs.cycling74.com/reference/snapshot~) | Convert signal values to numbers |
