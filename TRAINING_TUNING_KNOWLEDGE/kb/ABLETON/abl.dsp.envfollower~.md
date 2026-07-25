---
type: ableton
name: "abl.dsp.envfollower~"
summary: "Envelope follower"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.envfollower~/"
package: "Ableton DSP"
see_also: ["abl.device.compressor~"]
---
# abl.dsp.envfollower~

Envelope follower

## Description

An envelope follower with attack and release control

## Arguments

### attack[number] optional

(optional) Attack time in seconds.

### release[number] optional

(optional) Release time in seconds.

## Attributes

### attack[float]

Sets how long (in seconds) it takes the envelope to reach the maximum value.

### release[float]

Sets how long (in seconds) it takes the envelope to fall from the maximum value.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### float

Function depends on inlet

### signal

Function depends on inlet

## See Also

| Name | Description |
| --- | --- |
| [abl.device.compressor~](https://docs.cycling74.com/reference/abl.device.compressor~) | Compressor |
