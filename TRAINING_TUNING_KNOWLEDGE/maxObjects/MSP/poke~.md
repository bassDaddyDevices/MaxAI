---
type: msp
name: "poke~"
summary: "Write sample values to a buffer by index"
signal: true
url: "https://docs.cycling74.com/reference/poke~/"
package: "MSP"
see_also: ["buffer~", "buffir~", "peek~"]
---
# poke~

Write sample values to a buffer by index

## Description

[poke~](https://docs.cycling74.com/reference/poke~) allows you to write samples into a [buffer~](https://docs.cycling74.com/reference/buffer~) at sample locations specified by a signal.

## Arguments

### buffer-object-name[symbol] optional

Obligatory. Names the [buffer~](https://docs.cycling74.com/reference/buffer~) where [poke~](https://docs.cycling74.com/reference/poke~) will write its incoming samples.

### channel-number[int] optional

Sets the channel number of a multichannel [buffer~](https://docs.cycling74.com/reference/buffer~) where the samples will be written. The default channel is 1.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: Converted to float.

In middle inlet: Sets the sample index for writing subsequent sample values coming in the left inlet. If there is a signal connected to this inlet, a float is ignored.

Arguments:

- value/sample-index
  [int]

### float

Like the [peek~](https://docs.cycling74.com/reference/peek~) object, [poke~](https://docs.cycling74.com/reference/poke~) can write float values into a [buffer~](https://docs.cycling74.com/reference/buffer~). Note, however, that the left two inlets are reversed on the [poke~](https://docs.cycling74.com/reference/poke~) object compared to the [peek~](https://docs.cycling74.com/reference/peek~) object.

In left inlet: Sets the value to be written into the [buffer~](https://docs.cycling74.com/reference/buffer~) at the specified sample index. If the sample index is not -1 , the value is written.

In middle inlet: Converted to  int .

In right inlet: Converted to  int .

Arguments:

- value/sample-index/channel-number
  [float]

### list

In left inlet: A list of two or more values will write the first value at the sample index specified by the second value. If a third value is present, it specifies the audio channel within the [buffer~](https://docs.cycling74.com/reference/buffer~) for writing the sample value.

Arguments:

- value, sample-index, and channel-number
  [list]

### (mouse)

Double-clicking on [poke~](https://docs.cycling74.com/reference/poke~) opens an editing window where you can view the contents of its associated [buffer~](https://docs.cycling74.com/reference/buffer~) object.

### set

The word  set , followed by the name of a [buffer~](https://docs.cycling74.com/reference/buffer~), changes the [buffer~](https://docs.cycling74.com/reference/buffer~) where [poke~](https://docs.cycling74.com/reference/poke~) will write its incoming samples.

Arguments:

- buffer-object-name
  [symbol]

### signal

In left inlet: Signal values you want to write into a [buffer~](https://docs.cycling74.com/reference/buffer~).

In middle inlet: The sample index where values from the signal in the left inlet will be written. If the signal coming into the middle inlet has a value of -1, no samples are written.

## See Also

| Name | Description |
| --- | --- |
| [buffer~](https://docs.cycling74.com/reference/buffer~) | Store audio samples |
| [buffir~](https://docs.cycling74.com/reference/buffir~) | buffer-based FIR filter |
| [peek~](https://docs.cycling74.com/reference/peek~) | Read and write sample values |
