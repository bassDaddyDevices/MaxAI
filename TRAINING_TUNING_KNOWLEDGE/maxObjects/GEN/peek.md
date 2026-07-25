---
type: gen
name: "peek"
summary: "Read values from a data/buffer object"
signal: false
url: "https://docs.cycling74.com/reference/gen_dsp_peek/"
package: "Gen"
see_also: ["buffer", "channels", "cycle", "data", "dim", "lookup", "nearest", "peek", "poke", "sample", "splat", "wave"]
---
# peek

Read values from a data/buffer object

## Description

Read values from a data/buffer object. The first argument should be a name of a data or buffer object in the gen patcher. The second argument specifies the number of output channels. The first inlet specifes a sample index to read (no interpolation); indices out of range return zero. The last inlet specifies a channel offset (default 0).

## Constructors

- { arguments={name, channels}, inlets={index, channel\_offset} }

- { arguments={name}, inlets={index, channel\_offset} }

- { arguments={name, channels}, inlets={phase, channel\_offset} }

- { arguments={name}, inlets={phase, channel\_offset} }

- { arguments={name, channels}, inlets={signal, channel\_offset} }

- { arguments={name}, inlets={signal, channel\_offset} }

- { arguments={name, channels}, inlets={wave\_phase, wave\_start, wave\_end, channel\_offset} }

- { arguments={name}, inlets={wave\_phase, wave\_start, wave\_end, channel\_offset} }

## Inlets

### wave\_phase[float]

phase to read (between start and end indices)

### wave\_start[float]

wave start index (samples)

### wave\_end[float]

wave end index (samples)

### channel\_offset[int]

channel\_offset (zero-based)

### index[float]

sample index to read

### phase[float]

phase to read (between 0 and 1)

### signal[float]

value to lookup (between -1 and 1)

## Attributes

### boundmode[enum]: ignore write-only

Handle out-of-range indices: "ignore" returns zero, "wrap" wraps the indices back into the range of the buffer, "fold" and "mirror" wrap the indices back into range by alternating direction, "clip" and "clamp" constrain the indices to the buffer limits.

Possible values:

0 = 'clamp'

1 = 'ignore'

2 = 'wrap'

3 = 'clip'

4 = 'fold'

5 = 'mirror'

### channelmode[enum]: ignore write-only

Handle invalid channel indices: "ignore" returns zero, "wrap" wraps the indices back into channels of the buffer, "fold" and "mirror" wrap the indices back into range by alternating direction, "clip" and "clamp" constrain the indices to the channels available.

Possible values:

0 = 'clamp'

1 = 'ignore'

2 = 'wrap'

3 = 'clip'

4 = 'fold'

5 = 'mirror'

### channels[int]: 1 write-only

Specify the number of channels to read

### index[enum]: samples write-only

Specify how to index the buffer: "samples" indexes by sample offset into the buffer, "phase" converts a signal in the range of 0..1 to span the whole buffer, "lookup" or "signal" converts a signal in the range -1..1 to span the whole buffer, "wave" uses two additional inlets to specify start and end indices of a section of the buffer (in samples), and converts a signal in the range of 0..1 to span this section.

Possible values:

0 = 'phase'

1 = 'wave'

2 = 'samples'

3 = 'lookup'

4 = 'signal'

### interp[enum]: none write-only

Specify the interpolation mode: "none" and "step" perform no interpolation, "linear" performs two-point linear interpolation, "cosine" performs two-point cosine interpolation, "cubic" performs four-point cubic interpolation, "spline" performs four-point Catmull-Rom spline interpolation, and "spline6" performs six-point (5th order) B-spline interpolation.

Possible values:

0 = 'none'

1 = 'spline6'

2 = 'step'

3 = 'cosine'

4 = 'cubic'

5 = 'fastcubic'

6 = 'linear'

7 = 'spline'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [buffer](https://docs.cycling74.com/reference/gen_dsp_buffer) | A reference to an external buffer~ object |
| [channels](https://docs.cycling74.com/reference/gen_dsp_channels) | The number of channels of a data/buffer object |
| [cycle](https://docs.cycling74.com/reference/gen_dsp_cycle) | Sine / wavetable lookup oscillator |
| [data](https://docs.cycling74.com/reference/gen_dsp_data) | A locally stored array of 64-bit values |
| [dim](https://docs.cycling74.com/reference/gen_dsp_dim) | The length (in samples) of a data/buffer object |
| [lookup](https://docs.cycling74.com/reference/gen_dsp_lookup) | Index a data/buffer object using a signal, for waveshaping |
| [nearest](https://docs.cycling74.com/reference/gen_dsp_nearest) | Multi-channel lookup a data/buffer object (no interpolation) |
| [peek](https://docs.cycling74.com/reference/gen_dsp_peek) | Read values from a data/buffer object |
| [poke](https://docs.cycling74.com/reference/gen_dsp_poke) | Write values into a data/buffer object |
| [sample](https://docs.cycling74.com/reference/gen_dsp_sample) | Linear interpolated multi-channel lookup of a data/buffer object |
| [splat](https://docs.cycling74.com/reference/gen_dsp_splat) | Mix values into a data/buffer object, with linear interpolated overdubbing |
| [wave](https://docs.cycling74.com/reference/gen_dsp_wave) | Wavetable synthesis using a data/buffer object |
