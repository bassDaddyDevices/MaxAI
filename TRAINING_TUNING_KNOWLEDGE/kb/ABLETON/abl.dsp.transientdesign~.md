---
type: ableton
name: "abl.dsp.transientdesign~"
summary: "Transient designer"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.transientdesign~/"
package: "Ableton DSP"
see_also: ["abl.device.drumbuss~"]
---
# abl.dsp.transientdesign~

Transient designer

## Description

Applies transient shaping on a signal given a reference signal.

## Arguments

### attack[number] optional

(optional) Attack time in seconds.

### sustain[number] optional

(optional) Release time in seconds.

## Attributes

### attack[float]

Sets how long (in seconds) it takes the envelope to reach the maximum value.

### sustain[float]

Sets the amount of sustain envelope applied to the signal.

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
| [abl.device.drumbuss~](https://docs.cycling74.com/reference/abl.device.drumbuss~) | Analog-style drum processor |
