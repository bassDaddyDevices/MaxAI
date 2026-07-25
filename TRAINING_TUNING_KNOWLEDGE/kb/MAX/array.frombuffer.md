---
type: max
name: "array.frombuffer"
summary: "Read audio buffer values into an array object"
signal: false
url: "https://docs.cycling74.com/reference/array.frombuffer/"
package: "Max"
see_also: ["array", "array.tobuffer", "peek~", "poke~"]
---
# array.frombuffer

Read audio buffer values into an array object

## Description

Determine the properties of a buffer that has been read into an array object.

## Arguments

### buffername[symbol] optional

The name of the buffer to reference

## Attributes

### buffername[symbol]:

The name of the buffer to reference

### channelcount[int]: -1

Number of Channels to Read From Buffer

### channelstart[int]: 0

First Channel To Read From Buffer

### flatsinglechannel[int]: 0

Flatten Single Channel Arrays

### framelength[int]: -1

Number of Frames to Read From Buffer

### frameoffset[int]: 0

Frame Offset into Buffer

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received buffer values and trigger output.

### list

Receive a list of messages

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [array.tobuffer](https://docs.cycling74.com/reference/array.tobuffer) | Write array object values to an audio buffer |
| [peek~](https://docs.cycling74.com/reference/peek~) | Read and write sample values |
| [poke~](https://docs.cycling74.com/reference/poke~) | Write sample values to a buffer by index |
