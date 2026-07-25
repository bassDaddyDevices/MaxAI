---
type: ableton
name: "abl.device.reverb~"
summary: "Plate reverb"
signal: true
url: "https://docs.cycling74.com/reference/abl.device.reverb~/"
package: "Ableton DSP"
see_also: ["abl.dsp.darkhall~", "abl.dsp.prism~", "abl.dsp.quartz~", "abl.dsp.shimmer~", "abl.dsp.tides~"]
---
# abl.device.reverb~

Plate reverb

## Description

A reverb which generates pseudo-stereo output from mono input.

## Arguments

### predelay[number] optional

Pre-delay

### damping[number] optional

Damping frequency

### decay[number] optional

Decay

## Attributes

### damping[float]

Sets the damping frequency in Hz. [20., 20000.]

### decay[float]

Sets the amount of decay. [0., 1.]

### mix[float]

Sets the dry/wet mix of the output signal. [0., 1.]

### predelay[float]

Sets the pre-delay in seconds. [0., 10.]

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

TEXT\_HERE

### signal

Function depends on inlet

## See Also

| Name | Description |
| --- | --- |
| [abl.dsp.darkhall~](https://docs.cycling74.com/reference/abl.dsp.darkhall~) | Dark hall reverb |
| [abl.dsp.prism~](https://docs.cycling74.com/reference/abl.dsp.prism~) | Prism reverb |
| [abl.dsp.quartz~](https://docs.cycling74.com/reference/abl.dsp.quartz~) | Quartz reverb |
| [abl.dsp.shimmer~](https://docs.cycling74.com/reference/abl.dsp.shimmer~) | Shimmer reverb |
| [abl.dsp.tides~](https://docs.cycling74.com/reference/abl.dsp.tides~) | Modulating algorithmic reverb |
