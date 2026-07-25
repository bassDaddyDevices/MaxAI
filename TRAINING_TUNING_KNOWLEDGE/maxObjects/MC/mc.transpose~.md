---
type: mc
name: "mc.transpose~"
summary: "Reorganize multichannel signals"
signal: true
url: "https://docs.cycling74.com/reference/mc.transpose~/"
package: "MC"
see_also: ["MC Mixing and Panning", "MC Signal Manipulation Objects", "mc.deinterleave~", "mc.resize~", "mc.separate~", "mc.unpack~"]
---
# mc.transpose~

Reorganize multichannel signals

## Description

The [mc.transpose~](https://docs.cycling74.com/reference/mc.transpose~) object groups one or more multichannel signal inputs into multichannel signal outputs where channels in the outputs share the same channel index in the inputs.

#### Discussion

Note that the term "transpose" in [mc.transpose~](https://docs.cycling74.com/reference/mc.transpose~) refers to matrix transposition, not musical transposition.

## Arguments

### inlets[int] optional

The first argument specifies the number of inlets. If no argument is given, the default is 2 inlets.

### outlets[int] optional

The second argument specifies the number of outlets. If the second argument is not present, 2 outlets will be created.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

Connect a multichannel signal to any inlet. The index of each channel in the input signals determines its output multichannel signal.

## See Also

| Name | Description |
| --- | --- |
| [MC Mixing and Panning](https://docs.cycling74.com/userguide/mc/mc_mixing_panning) | MC Mixing and Panning |
| [MC Signal Manipulation Objects](https://docs.cycling74.com/userguide/mc/mc_signals_newobjects) | MC Signal Manipulation Objects |
| [mc.deinterleave~](https://docs.cycling74.com/reference/mc.deinterleave~) | Deinterleave a multichannel audio signal |
| [mc.resize~](https://docs.cycling74.com/reference/mc.resize~) | Resize a multichannel signal using selected channels |
| [mc.separate~](https://docs.cycling74.com/reference/mc.separate~) | Split a multichannel signal |
| [mc.unpack~](https://docs.cycling74.com/reference/mc.unpack~) | Split a multichannel signal into single-channel signals |
