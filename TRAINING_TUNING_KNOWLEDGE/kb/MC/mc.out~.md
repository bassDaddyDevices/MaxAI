---
type: mc
name: "mc.out~"
summary: "Signal output for a patcher loaded by poly~"
signal: true
url: "https://docs.cycling74.com/reference/mc.out~/"
package: "MC"
see_also: ["in", "in~", "mc.in~", "out", "out~", "poly~", "mc.poly~", "mcs.poly~", "thispoly~"]
---
# mc.out~

Signal outputs for a patcher loaded by [poly~](https://docs.cycling74.com/reference/poly~)

## Description

The mc.out~ object sends signals to multiple outlets of its [poly~](https://docs.cycling74.com/reference/poly~) object (or multiple channels within the output of [mcs.poly~](https://docs.cycling74.com/reference/mcs.poly~)). The number of signal outlets is determined by the chans attribute. The maximum number of channels for any single [mc.out~](https://docs.cycling74.com/reference/mc.out~) object is 128.

## Arguments

### starting-outlet-number[int] optional

Specifies the starting signal outlet number in a [poly~](https://docs.cycling74.com/reference/poly~) object (default 1). If an argument of 2 is given, signal outlets will start with the second outlet and continue based on the number of output channels specified with the chans attribute.

## Attributes

### attr\_comment[symbol]

Alias:
c

Comment to be displayed on [poly~](https://docs.cycling74.com/reference/poly~) object outlet mouseover.

### chans[int]

Sets the number of output channels (default 1). If an argument of 4 is given (@chans 4), four signal outlets will be created in the containing [poly~](https://docs.cycling74.com/reference/poly~) object. The maximum number of output channels is 128.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### comment

Sets a comment for display on [poly~](https://docs.cycling74.com/reference/poly~) object outlet mouseover.

Arguments:

- outlet-description
  [list]

### signal

Outputs signals to a loaded [poly~](https://docs.cycling74.com/reference/poly~) object. The number of signal outputs is determined by the chans attribute.

## See Also

| Name | Description |
| --- | --- |
| [in](https://docs.cycling74.com/reference/in) | Message input for a patcher loaded by poly~ or pfft~ |
| [in~](https://docs.cycling74.com/reference/in~) | Signal input for a patcher loaded by poly~ |
| [mc.in~](https://docs.cycling74.com/reference/mc.in~) | Signal inputs for a patcher loaded by poly~ |
| [out](https://docs.cycling74.com/reference/out) | Message output for a patcher loaded by poly~ or pfft~ |
| [out~](https://docs.cycling74.com/reference/out~) | Signal output for a patcher loaded by poly~ |
| [poly~](https://docs.cycling74.com/reference/poly~) | Manage polyphony/DSP for patchers |
| [mc.poly~](https://docs.cycling74.com/reference/mc.poly~) | Manage polyphony/DSP for patchers |
| [mcs.poly~](https://docs.cycling74.com/reference/mcs.poly~) | Manage polyphony/DSP for patchers |
| [thispoly~](https://docs.cycling74.com/reference/thispoly~) | Control poly~ voice allocation and muting |
