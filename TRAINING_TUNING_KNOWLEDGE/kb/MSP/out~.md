---
type: msp
name: "out~"
summary: "Signal output for a patcher loaded by poly~"
signal: true
url: "https://docs.cycling74.com/reference/out~/"
package: "MSP"
see_also: ["in", "in~", "out", "poly~", "thispoly~"]
---
# out~

Signal output for a patcher loaded by poly~

## Description

Use the [out~](https://docs.cycling74.com/reference/out~) object inside a patcher loaded by the [poly~](https://docs.cycling74.com/reference/poly~) object to create a patcher signal outlet.

## Arguments

### outlet-number[int] optional

Specifies the signal outlet number in a [poly](https://docs.cycling74.com/reference/poly) object. The first outlet is 1.

## Attributes

### attr\_comment[symbol]

Alias:
c

Comment to be displayed on [poly](https://docs.cycling74.com/reference/poly) object outlet mouseover

### chans[int]

Output Channels

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### comment

Sets a comment for display on [poly](https://docs.cycling74.com/reference/poly) object outlet mouseover

Arguments:

- outlet-description
  [list]

### signal

Outputs a signal to a loaded [poly](https://docs.cycling74.com/reference/poly) object.

## Output

### (patcher)

Any signals received by an [out~](https://docs.cycling74.com/reference/out~) object in a loaded patcher appear at the signal outlet of the [poly~](https://docs.cycling74.com/reference/poly~) object which corresponds to the number argument of the [out~](https://docs.cycling74.com/reference/out~) object. The signal outputs in a [poly~](https://docs.cycling74.com/reference/poly~) object are a mix of the outputs of all instances of the patcher's outputs which correspond to that number.

## See Also

| Name | Description |
| --- | --- |
| [in](https://docs.cycling74.com/reference/in) | Message input for a patcher loaded by poly~ or pfft~ |
| [in~](https://docs.cycling74.com/reference/in~) | Signal input for a patcher loaded by poly~ |
| [out](https://docs.cycling74.com/reference/out) | Message output for a patcher loaded by poly~ or pfft~ |
| [poly~](https://docs.cycling74.com/reference/poly~) | Manage polyphony/DSP for patchers |
| [thispoly~](https://docs.cycling74.com/reference/thispoly~) | Control poly~ voice allocation and muting |
