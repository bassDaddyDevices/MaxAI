---
type: ableton
name: "abl.dsp.compander~"
summary: "Compressor/expander"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.compander~/"
package: "Ableton DSP"
see_also: ["abl.device.compressor~"]
---
# abl.dsp.compander~

Compressor/expander

## Description

An ALaw compression/expanding compander.

## Arguments

None.

## Attributes

### mode[int]

Mode

Possible values:

0 = 'Compress'

1 = 'Expand'

### shape[float]

Sets the compression parameter. For shape = 0, no effect occurs, for shape = 1, the standard
A-Law parameter is used.

### ins[symbol]

Declares additional inlets that can be used to control float-type attributes at either event or
signal rate. Any declared attributes already mapped to inlets will be ignored. This attribute can only
be set when the object is instantiated.

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
