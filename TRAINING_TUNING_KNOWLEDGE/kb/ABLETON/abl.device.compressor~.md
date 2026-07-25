---
type: ableton
name: "abl.device.compressor~"
summary: "Compressor"
signal: true
url: "https://docs.cycling74.com/reference/abl.device.compressor~/"
package: "Ableton DSP"
---
# abl.device.compressor~

Compressor

## Description

Compressor

## Arguments

### attack[number] optional

Attack time

### release[number] optional

Release time

### threshold[number] optional

Threshold

### ratio[number] optional

Ratio

### gain[number] optional

Make-up gain

## Attributes

### attack[float]

Sets how long it takes (in seconds) to reach maximum compression once the input signal exceeds the
threshold. [0., 10.]

### gain[float]

Sets the output gain in dB. [-70.6, 36.]

### ratio[float]

Sets the ratio of compression between the input and output level. For example, a ratio of 3 means that
for every 3 dB of input above the threshold level, the output level will only increase by 1 dB. A ratio
of 1 results in no compression. [1., 64.]

### release[float]

Sets how long it takes (in seconds) for compression to stop after the input signal drops below
the threshold. [0., 10.]

### threshold[float]

Sets the input level (in dB) at which compression will begin. [-70.6, 6.]

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
