---
type: max
name: "array.tobuffer"
summary: "Write array object values to an audio buffer"
signal: false
url: "https://docs.cycling74.com/reference/array.tobuffer/"
package: "Max"
see_also: ["array", "array.frombuffer", "peek~", "poke~"]
---
# array.tobuffer

Write array object values to an audio buffer

## Description

Values are assumed to be between -1  and  1 . If the array contains multichannel data, each channel should be wrapped inside of a subarray (e.g.  [ [ -1, 0, 1 ], [ -1, 0, -1 ] ] ).

## Arguments

### buffer-name[symbol] optional

The name of the target [buffer~](https://docs.cycling74.com/reference/buffer~) object

## Attributes

### buffername[symbol]:

The name of the target [buffer~](https://docs.cycling74.com/reference/buffer~) object

### channelstart[int]: 0

The 0-based channel index to which to write array values.

### framelength[int]: -1

The number of samples (per channel) to write from the array values.

### frameoffset[int]: 0

The 0-based frame offset to which to write array values.

### resize[int]: 0

When enabled, the buffer will be resized to accommodate the incoming data.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received array and trigger output.

### int

Convert an incoming integer to an array, then process as described for the  array  message.

### float

Convert an incoming floating-point number to an array, then process as described for the  array  message.

### list

Convert an incoming list to an array, then process as described for the  array  message.

### anything

Convert an incoming list to an array, then process as described for the  array  message.

### array

The [buffer~](https://docs.cycling74.com/reference/buffer~) object expects floating-point values between -1  and  1 .

### dictionary

Wrap an incoming dictionary object in an array, then process as described for the  array  message.

### string

Wrap a string object in an array, then process as described for the  array  message.

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [array.frombuffer](https://docs.cycling74.com/reference/array.frombuffer) | Read audio buffer values into an array object |
| [peek~](https://docs.cycling74.com/reference/peek~) | Read and write sample values |
| [poke~](https://docs.cycling74.com/reference/poke~) | Write sample values to a buffer by index |
