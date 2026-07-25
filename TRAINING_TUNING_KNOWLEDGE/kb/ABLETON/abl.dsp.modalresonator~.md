---
type: ableton
name: "abl.dsp.modalresonator~"
summary: "Modal resonator"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.modalresonator~/"
package: "Ableton DSP"
see_also: ["abl.dsp.meldfilter~"]
---
# abl.dsp.modalresonator~

Modal resonator

## Description

A physically model resonator using a modal filter bank.

## Arguments

### frequency[number] optional

Frequency

### decay[number] optional

Decay

## Attributes

### damping[float]

Sets the membrane resonator damping amount. [0., 1.]

### decay[float]

Sets the resonator decay amount. [0., 1.]

### frequency[float]

Sets the resonator frequency. [20., 20480.]

### ratio[float]

Sets the plate resonator ratio amount. [0., 1.]

### resonator\_type[int]

Sets the resonator type.
Possible values:

0 = 'Plate'

1 = 'Membrane'

### ins[symbol]

Declares additional inlets that can be used to control float-type attributes at either event or
signal rate. Any declared attributes already mapped to inlets will be ignored. This attribute can only
be set when the object is instantiated.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### float

Function depends on inlet

### reset

Reset

### signal

Function depends on inlet

## See Also

| Name | Description |
| --- | --- |
| [abl.dsp.meldfilter~](https://docs.cycling74.com/reference/abl.dsp.meldfilter~) | Meta-filter |
