---
type: mc
name: "mc.unpack~"
summary: "Split a multichannel signal into single-channel signals"
signal: true
url: "https://docs.cycling74.com/reference/mc.unpack~/"
package: "MC"
see_also: ["MC Signal Manipulation Objects", "MC", "join", "mc.combine~", "mc.pack~", "mc.resize~", "mc.separate~", "pack", "pak", "unjoin", "unpack"]
---
# mc.unpack~

Split a multichannel signal into single-channel signals

## Description

The [mc.unpack~](https://docs.cycling74.com/reference/mc.unpack~) object splits a multichannel signal connected to its inlet into single-channel signals. The number of single-channel outputs is specified by its argument.

## Arguments

### size[int] optional

The argument specifies the number of single-channel signal outlets.

## Attributes

### replicate[int]

Replicate Inputs

### select[atom]

Selected Channels

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

Connect a multichannel signal that you want to separate into single-channel signals. If the number of channels in the input multichannel signal exceeds the number of outlets in [mc.unpack~](https://docs.cycling74.com/reference/mc.unpack~), the extra input channels are ignored. Conversely [mc.unpack~](https://docs.cycling74.com/reference/mc.unpack~) outputs zero signals for outlets that correspond to channels not present in the input multichannel signal.

## See Also

| Name | Description |
| --- | --- |
| [MC Signal Manipulation Objects](https://docs.cycling74.com/userguide/mc/mc_signals_newobjects) | MC Signal Manipulation Objects |
| [MC](https://docs.cycling74.com/userguide/mc) | MC |
| [join](https://docs.cycling74.com/reference/join) | Combine items into a list |
| [mc.combine~](https://docs.cycling74.com/reference/mc.combine~) | Combine inputs into a multichannel signal |
| [mc.pack~](https://docs.cycling74.com/reference/mc.pack~) | Combine single inputs into a multichannel signal |
| [mc.resize~](https://docs.cycling74.com/reference/mc.resize~) | Resize a multichannel signal using selected channels |
| [mc.separate~](https://docs.cycling74.com/reference/mc.separate~) | Split a multichannel signal |
| [pack](https://docs.cycling74.com/reference/pack) | Create a list |
| [pak](https://docs.cycling74.com/reference/pak) | Output a list when any element changes |
| [unjoin](https://docs.cycling74.com/reference/unjoin) | Break a list into messages |
| [unpack](https://docs.cycling74.com/reference/unpack) | Break a list into individual messages |
