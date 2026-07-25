---
type: msp
name: "peek~"
summary: "Read and write sample values"
signal: true
url: "https://docs.cycling74.com/reference/peek~/"
package: "MSP"
see_also: ["buffer~", "buffir~", "index~", "poke~", "table"]
---
# peek~

Read and write sample values

## Description

Use [peek~](https://docs.cycling74.com/reference/peek~) to read and write sample values to a named [buffer~](https://docs.cycling74.com/reference/buffer~). Unlike related objects [index~](https://docs.cycling74.com/reference/index~) and [poke~](https://docs.cycling74.com/reference/poke~), values and indices are specified as Max messages, and the object will function even when the audio is not turned on.

## Arguments

### buffer-name[symbol] optional

Buffer name

### buffer-channel[int] optional

Buffer channel to read/write

### clipping-enable-flag[int] optional

If set to 1, then values written to the [buffer~](https://docs.cycling74.com/reference/buffer~) will be clipped to within -1.0 to 1.0. See the  clip  message.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

The value stored at the specified sample-index is sent out the [peek~](https://docs.cycling74.com/reference/peek~) object's outlet. However, if a value has just been received in the middle inlet, [peek~](https://docs.cycling74.com/reference/peek~) stores that value in the [buffer~](https://docs.cycling74.com/reference/buffer~) at the specified sample index instead. If the sample-index is out of range for the [buffer~](https://docs.cycling74.com/reference/buffer~), no data is read or written.

Arguments:

- sample-index
  [int]

### float

Floating-point values are converted to  int  values.

In left inlet: Set the sample to be stored.

In right inlet: Set the buffer channel.

Arguments:

- sample-index/buffer-channel
  [float]

### list

The value is stored in the [buffer~](https://docs.cycling74.com/reference/buffer~) at the specified sample-index and buffer-channel. If the buffer-channel is omitted, the most recent channel is used. If the sample-index is out of range for the [buffer~](https://docs.cycling74.com/reference/buffer~), no data is written.

Arguments:

- sample-index
  [int]
- value
  [number]
- buffer-channel
  [int]

### clip

If set to 1, then values written to the [buffer~](https://docs.cycling74.com/reference/buffer~) will be clipped to within -1.0 to 1.0. Disable by setting to 0.

Arguments:

- clipping-enable-flag
  [int]

### (mouse)

Double-click to view the [buffer~](https://docs.cycling74.com/reference/buffer~) contents

### set

Set [buffer~](https://docs.cycling74.com/reference/buffer~) to read/write

Arguments:

- buffer-name
  [symbol]

## Output

### float

The sample value in a [buffer~](https://docs.cycling74.com/reference/buffer~), located at the table index specified by a  float  or  int  received in the left inlet, is sent out the [peek~](https://docs.cycling74.com/reference/peek~) object's outlet.

## See Also

| Name | Description |
| --- | --- |
| [buffer~](https://docs.cycling74.com/reference/buffer~) | Store audio samples |
| [buffir~](https://docs.cycling74.com/reference/buffir~) | buffer-based FIR filter |
| [index~](https://docs.cycling74.com/reference/index~) | Read from a buffer~ with no interpolation |
| [poke~](https://docs.cycling74.com/reference/poke~) | Write sample values to a buffer by index |
| [table](https://docs.cycling74.com/reference/table) | Store and edit an array of numbers |
