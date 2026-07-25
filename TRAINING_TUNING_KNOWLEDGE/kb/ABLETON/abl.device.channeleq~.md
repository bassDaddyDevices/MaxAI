---
type: ableton
name: "abl.device.channeleq~"
summary: "Semi-parametric 3-band channel EQ"
signal: true
url: "https://docs.cycling74.com/reference/abl.device.channeleq~/"
package: "Ableton DSP"
see_also: ["abl.device.autofilter~", "abl.dsp.meldfilter~"]
---
# abl.device.channeleq~

Semi-parametric 3-band channel EQ

## Description

Semi-parametric 3-band channel EQ

## Arguments

### lowgain[number] optional

Low gain

### midgain[number] optional

Mid gain

### midfreq[number] optional

Mid frequency

### highgain[number] optional

High gain

None.

## Attributes

### gain[float]

Sets the overall gain of the EQ in dB. [-12., 12]

### highgain[float]

Sets the gain amplitude of the high-shelf filter in dB. [-15., 15.]

### highpass[int]

Enables the optional highpass filter at 80 Hz.

### lowgain[float]

Sets the gain amplitude of the low-shelf filter in dB. [-15., 15.]

### midfreq[float]

Sets the frequency of the mid-peak filter in Hz. [120., 75,000.]

### midgain[float]

Sets the gain amplitude of mid-peak filter in dB. [-12., 12.]

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
| [abl.device.autofilter~](https://docs.cycling74.com/reference/abl.device.autofilter~) | Classic analog filter emulation. |
| [abl.dsp.meldfilter~](https://docs.cycling74.com/reference/abl.dsp.meldfilter~) | Meta-filter |
