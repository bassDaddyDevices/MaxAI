---
type: ableton
name: "abl.device.limiter~"
summary: "Limiter"
signal: true
url: "https://docs.cycling74.com/reference/abl.device.limiter~/"
package: "Ableton DSP"
see_also: ["abl.device.compressor~"]
---
# abl.device.limiter~

Limiter

## Description

A mastering-quality dynamic range processor that ensures that the output does not exceed a specified
level.

## Arguments

### gain[number] optional

Gain

## Attributes

### autorelease[int]

Enable or disable whether to analyze the incoming signal and set the release time
automatically.

### ceiling[float]

Sets the limiter ceiling in dB. [-24., 0.]

### gain[float]

Input gain in dB. [-24., 24.]

### link[float]

Sets how much of the gain reduction is shared across the two channels. When fully linked (1.0),
limiting is applied to both channels whenever either requires compression. [0., 1.]

### lookahead[int]

Sets the lookahead time in milliseconds, determining how quickly Limiter responds to peaks. Shorter
lookahead times result in more compression but can also increase distortion.

Possible values:

0 = '1.5 ms'

1 = '3 ms'

2 = '6 ms'

### maximize[int]

Enables/disables maximizer mode. When on, lowering the threshold will reduce the dynamic range
and increase the loudness of the signal. This is achieved by amplifying the limiter stage output by the
inverse of the threshold value.

### mode[int]

Sets the limiter mode.

Possible values:

0 = 'Standard'

1 = 'Soft clip'

2 = 'True peak'

### output[float]

Sets the target maximum output level in decibels when maximize mode is enabled. [-24., 0.]

### release[float]

Sets the release time in seconds. [.00001, 3.]

### routing[int]

Sets the routing mode.

Possible values:

0 = 'Left/Right'

1 = 'Mid/Side'

### threshold[float]

In maximizer mode, set the level the input signal must reach for gain reduction to be applied. [-24.,
24.]

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
| [abl.device.compressor~](https://docs.cycling74.com/reference/abl.device.compressor~) | Compressor |
