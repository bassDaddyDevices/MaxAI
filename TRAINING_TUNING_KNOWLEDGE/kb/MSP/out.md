---
type: msp
name: "out"
summary: "Message output for a patcher loaded by poly~ or pfft~"
signal: false
url: "https://docs.cycling74.com/reference/out/"
package: "MSP"
see_also: ["in", "in~", "out", "out~", "pfft~", "poly~", "thispoly~"]
---
# out

Message output for a patcher loaded by poly~ or pfft~

## Description

[out](https://docs.cycling74.com/reference/out) defines a message outlet for a patcher loaded by [poly~](https://docs.cycling74.com/reference/poly~) or [pfft~](https://docs.cycling74.com/reference/pfft~).

## Arguments

None.

## Attributes

### attr\_comment[symbol]

Alias:
c

Comment to be displayed on [poly](https://docs.cycling74.com/reference/poly) object outlet mouseover

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends bangs out the corresponding outlet of the [pfft~](https://docs.cycling74.com/reference/pfft~) or [poly~](https://docs.cycling74.com/reference/poly~) object in which it is embedded.

### int

Sends integer values out the corresponding outlet of the [pfft~](https://docs.cycling74.com/reference/pfft~) or [poly~](https://docs.cycling74.com/reference/poly~) object in which it is embedded.

Arguments:

- output
  [int]

### float

Sends floating-point values out the corresponding outlet of the [pfft~](https://docs.cycling74.com/reference/pfft~) or [poly~](https://docs.cycling74.com/reference/poly~) object in which it is embedded.

Arguments:

- output
  [float]

### list

Sends lists out the corresponding outlet of the [pfft~](https://docs.cycling74.com/reference/pfft~) or [poly~](https://docs.cycling74.com/reference/poly~) object in which it is embedded.

Arguments:

- output
  [list]

### anything

Sends input out the corresponding outlet of the [pfft~](https://docs.cycling74.com/reference/pfft~) or [poly~](https://docs.cycling74.com/reference/poly~) object in which it is embedded.

Arguments:

- output
  [list]

### comment

Sets a comment for display on [poly](https://docs.cycling74.com/reference/poly) object outlet mouseover

Arguments:

- outlet-description
  [list]

## Output

### (patcher)

Any messages received by an [out](https://docs.cycling74.com/reference/out) object in a loaded patcher appear at the signal outlet of the [poly~](https://docs.cycling74.com/reference/poly~) or [pfft~](https://docs.cycling74.com/reference/pfft~) object which corresponds to the number argument of the [out](https://docs.cycling74.com/reference/out) object. The signal outputs in a [poly~](https://docs.cycling74.com/reference/poly~) or [pfft~](https://docs.cycling74.com/reference/pfft~) object are a mix of the outputs of all instances of the patcher's outputs which correspond to that number.

## See Also

| Name | Description |
| --- | --- |
| [in](https://docs.cycling74.com/reference/in) | Message input for a patcher loaded by poly~ or pfft~ |
| [in~](https://docs.cycling74.com/reference/in~) | Signal input for a patcher loaded by poly~ |
| [out](https://docs.cycling74.com/reference/out) | Message output for a patcher loaded by poly~ or pfft~ |
| [out~](https://docs.cycling74.com/reference/out~) | Signal output for a patcher loaded by poly~ |
| [pfft~](https://docs.cycling74.com/reference/pfft~) | Spectral processing manager for patchers |
| [poly~](https://docs.cycling74.com/reference/poly~) | Manage polyphony/DSP for patchers |
| [thispoly~](https://docs.cycling74.com/reference/thispoly~) | Control poly~ voice allocation and muting |
