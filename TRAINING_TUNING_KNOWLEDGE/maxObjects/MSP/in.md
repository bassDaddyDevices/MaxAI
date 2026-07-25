---
type: msp
name: "in"
summary: "Message input for a patcher loaded by poly~ or pfft~"
signal: false
url: "https://docs.cycling74.com/reference/in/"
package: "MSP"
see_also: ["in~", "inlet", "out", "out~", "outlet", "pfft~", "poly~", "thispoly~"]
---
# in

Message input for a patcher loaded by poly~ or pfft~

## Description

[in](https://docs.cycling74.com/reference/in) defines a message inlet for a patcher loaded by [poly~](https://docs.cycling74.com/reference/poly~) or [pfft~](https://docs.cycling74.com/reference/pfft~).

## Arguments

### inlet-number/positioning[int] optional

Obligatory. Each in object is identified by a unique index number which specifies which message inlet in a [poly~](https://docs.cycling74.com/reference/poly~) or [pfft~](https://docs.cycling74.com/reference/pfft~) object it corresponds to. The first outlet is 1.

## Attributes

### attr\_comment[symbol]

Alias:
c

Defines the comment displayed whenever the mouse is rolled over the inlet which corresponds to the [in](https://docs.cycling74.com/reference/in) of the actual [poly~](https://docs.cycling74.com/reference/poly~) or [pfft~](https://docs.cycling74.com/reference/pfft~) object.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### comment

Sets a comment for display on [poly](https://docs.cycling74.com/reference/poly) object inlet mouseover

Arguments:

- inlet-description
  [list]

## Output

### message

Each [in](https://docs.cycling74.com/reference/in) object in a patcher loaded by the [poly~](https://docs.cycling74.com/reference/poly~) or [pfft~](https://docs.cycling74.com/reference/pfft~) objects appears as an inlet at the top of the object. Messages received at the first message inlet of the [poly~](https://docs.cycling74.com/reference/poly~) or [pfft~](https://docs.cycling74.com/reference/pfft~) object are sent to the first [in](https://docs.cycling74.com/reference/in) object (i.e., the  in 1  object) in the loaded patcher, and so on. The number of total inlets in a [poly~](https://docs.cycling74.com/reference/poly~) or [pfft~](https://docs.cycling74.com/reference/pfft~) object is determined by whether there are a greater number of [in~](https://docs.cycling74.com/reference/in~) or [in](https://docs.cycling74.com/reference/in) objects in the loaded patch (e.g., if your loaded [poly~](https://docs.cycling74.com/reference/poly~) patcher has three [in~](https://docs.cycling74.com/reference/in~) objects and only two [in](https://docs.cycling74.com/reference/in) objects, the [poly~](https://docs.cycling74.com/reference/poly~) object will have three inlets, two of which will accept both signals and anything else, and a third inlet which only takes signal input).

## See Also

| Name | Description |
| --- | --- |
| [in~](https://docs.cycling74.com/reference/in~) | Signal input for a patcher loaded by poly~ |
| [inlet](https://docs.cycling74.com/reference/inlet) | Receive messages from outside a patcher |
| [out](https://docs.cycling74.com/reference/out) | Message output for a patcher loaded by poly~ or pfft~ |
| [out~](https://docs.cycling74.com/reference/out~) | Signal output for a patcher loaded by poly~ |
| [outlet](https://docs.cycling74.com/reference/outlet) | Send messages out of a patcher |
| [pfft~](https://docs.cycling74.com/reference/pfft~) | Spectral processing manager for patchers |
| [poly~](https://docs.cycling74.com/reference/poly~) | Manage polyphony/DSP for patchers |
| [thispoly~](https://docs.cycling74.com/reference/thispoly~) | Control poly~ voice allocation and muting |
