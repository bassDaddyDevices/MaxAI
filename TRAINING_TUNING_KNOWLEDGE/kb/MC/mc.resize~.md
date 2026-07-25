---
type: mc
name: "mc.resize~"
summary: "Resize a multichannel signal using selected channels"
signal: true
url: "https://docs.cycling74.com/reference/mc.resize~/"
package: "MC"
see_also: ["mc.dup~", "mc.combine~", "mc.pack~", "mc.separate~", "mc.unpack~"]
---
# mc.resize~

Resize a multichannel signal using selected channels

## Description

The [mc.resize~](https://docs.cycling74.com/reference/mc.resize~) object changes the number of channels in a connected single- or multichannel signal, producing an output multichannel signal with a number of channels specified by its argument. Optionally, the output can consist of selected channels of the input, or, when increasing the number of channels, the additional output channels can replicate the existing inputs.

## Arguments

### channels[int] optional

The argument sets the number of channels in the output multichannel signal.

## Attributes

### chans[int]

Sets the number of output channels in the multichannel output. If chans is sent to the object when audio is on, the number of output channels will not change until the audio is turned off and back on again.

### replicate[int]

When replicate is 0, any channels in the output signal not in the input signal will be set to zero. When replicate is 1, input channels will repeat, cyclically if necessary, in the output.

### select[atom]

The select attribute contains a list of channels in the input to be assigned to successive channels of the output starting at the first output channel. For example, an [mc.resize~](https://docs.cycling74.com/reference/mc.resize~) object of size 3 with its select attribute set to 5 7 9 will copy channel 5 of an input multichannel signal to output channel 1, channel 7 to output channel 2, and channel 9 to output channel 3. When select is 0, it has no effect and input channels are copied to the output in order.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

Single- or multichannel signal to be resized.

## See Also

| Name | Description |
| --- | --- |
| [mc.dup~](https://docs.cycling74.com/reference/mc.dup~) | Create a multichannel signal that duplicates a single-channel input |
| [mc.combine~](https://docs.cycling74.com/reference/mc.combine~) | Combine inputs into a multichannel signal |
| [mc.pack~](https://docs.cycling74.com/reference/mc.pack~) | Combine single inputs into a multichannel signal |
| [mc.separate~](https://docs.cycling74.com/reference/mc.separate~) | Split a multichannel signal |
| [mc.unpack~](https://docs.cycling74.com/reference/mc.unpack~) | Split a multichannel signal into single-channel signals |
