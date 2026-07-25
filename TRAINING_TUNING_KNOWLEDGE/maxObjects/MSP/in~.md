---
type: msp
name: "in~"
summary: "Signal input for a patcher loaded by poly~"
signal: true
url: "https://docs.cycling74.com/reference/in~/"
package: "MSP"
see_also: ["mc.in~", "in", "out", "out~", "mc.out~", "poly~", "mc.poly~", "mcs.poly~", "thispoly~"]
---
# in~

Signal input for a patcher loaded by poly~

## Description

Use the [in~](https://docs.cycling74.com/reference/in~) object inside a patcher loaded by the [poly~](https://docs.cycling74.com/reference/poly~) object to create a patcher signal inlet.

## Arguments

### inlet-number[int] optional

Specifies the signal inlet number in a [poly](https://docs.cycling74.com/reference/poly) object. The first inlet is 1.

## Attributes

### attr\_comment[symbol]

Alias:
c

Comment to be displayed on [poly](https://docs.cycling74.com/reference/poly) object inlet mouseover

### chans[int]

Input Channels

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### comment

Sets a comment for display on [poly](https://docs.cycling74.com/reference/poly) object inlet mouseover

Arguments:

- inlet-description
  [list]

### signal

Receives a signal sent to a loaded [poly](https://docs.cycling74.com/reference/poly) object.

## Output

### signal

Each [in~](https://docs.cycling74.com/reference/in~) object in a patcher loaded by the [poly~](https://docs.cycling74.com/reference/poly~) object appears as an inlet at the top of the [poly~](https://docs.cycling74.com/reference/poly~) object. Signals received at the first message inlet of the [poly~](https://docs.cycling74.com/reference/poly~) object are sent to the first [in~](https://docs.cycling74.com/reference/in~) object (i.e., the [in~](https://docs.cycling74.com/reference/in~)  1  object) in the loaded patcher, and so on. The number of total inlets in a [poly~](https://docs.cycling74.com/reference/poly~) object is determined by whether there are a greater number of [in~](https://docs.cycling74.com/reference/in~) or [in](https://docs.cycling74.com/reference/in) objects in the loaded patch (e.g., if your loaded patcher has three [in~](https://docs.cycling74.com/reference/in~) objects and only two [in](https://docs.cycling74.com/reference/in) objects, the [poly~](https://docs.cycling74.com/reference/poly~) object will have three inlets, two of which will accept both signals and anything else, and a third inlet which only takes signal input).

## See Also

| Name | Description |
| --- | --- |
| [mc.in~](https://docs.cycling74.com/reference/mc.in~) | Signal inputs for a patcher loaded by poly~ |
| [in](https://docs.cycling74.com/reference/in) | Message input for a patcher loaded by poly~ or pfft~ |
| [out](https://docs.cycling74.com/reference/out) | Message output for a patcher loaded by poly~ or pfft~ |
| [out~](https://docs.cycling74.com/reference/out~) | Signal output for a patcher loaded by poly~ |
| [mc.out~](https://docs.cycling74.com/reference/mc.out~) | Signal outputs for a patcher loaded by poly~ |
| [poly~](https://docs.cycling74.com/reference/poly~) | Manage polyphony/DSP for patchers |
| [mc.poly~](https://docs.cycling74.com/reference/mc.poly~) | Manage polyphony/DSP for patchers |
| [mcs.poly~](https://docs.cycling74.com/reference/mcs.poly~) | Manage polyphony/DSP for patchers |
| [thispoly~](https://docs.cycling74.com/reference/thispoly~) | Control poly~ voice allocation and muting |
