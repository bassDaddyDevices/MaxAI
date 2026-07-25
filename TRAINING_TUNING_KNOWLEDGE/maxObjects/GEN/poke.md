---
type: gen
name: "poke"
summary: "Write values into a data/buffer object"
signal: false
url: "https://docs.cycling74.com/reference/gen_dsp_poke/"
package: "Gen"
see_also: ["buffer", "channels", "cycle", "data", "dim", "lookup", "nearest", "peek", "poke", "sample", "splat", "wave"]
---
# poke

Write values into a data/buffer object

## Description

Write values into a data/buffer object. The first argument should be a name of a data or buffer object in the gen patcher. The second argument (or third inlet if omitted) specifies which channel to use. The first inlet specifies a value to write, while the second inlet specifies the sample index within the data/buffer. If the index is out of range, no value is written.

## Constructors

- { arguments={name, value, position, channel, overdub}, inlets={} }

- { arguments={name, value, position, channel}, inlets={overdub} }

- { arguments={name, position, channel}, inlets={value, overdub} }

- { arguments={name, channel}, inlets={value, position, overdub} }

- { arguments={name}, inlets={value, position, channel, overdub} }

## Inlets

### value[float]

value to write

### position[float]

position to write (units depend on @index attribute)

### channel[int]

channel to write (zero-based)

### overdub[float]

overdub mix: amount of original signal to preserve

## Attributes

### boundmode[enum]: ignore write-only

Handle out-of-range indices: "ignore" prevents writing, "wrap" wraps the indices back into the range of the buffer, "fold" and "mirror" wrap the indices back into range by alternating direction, "clip" and "clamp" constrain the indices to the buffer limits.

Possible values:

0 = 'clamp'

1 = 'ignore'

2 = 'wrap'

3 = 'clip'

4 = 'fold'

5 = 'mirror'

### channelmode[enum]: ignore write-only

Handle invalid channel indices: "ignore" prevents writing, "wrap" wraps the indices back into channels of the buffer, "fold" and "mirror" wrap the indices back into range by alternating direction, "clip" and "clamp" constrain the indices to the channels available.

Possible values:

0 = 'clamp'

1 = 'ignore'

2 = 'wrap'

3 = 'clip'

4 = 'fold'

5 = 'mirror'

### index[enum]: samples write-only

Specify how to index the buffer: "samples" indexes by sample offset into the buffer, "phase" converts a signal in the range of 0..1 to span the whole buffer, "lookup" or "signal" converts a signal in the range -1..1 to span the whole buffer.

Possible values:

0 = 'samples'

1 = 'phase'

2 = 'lookup'

3 = 'signal'

### overdubmode[enum]: accum write-only

How overdubbing is applied: "mix" crossfades between current and new sample according to the overdub factor, "accum" scales the new sample by the overdub factor and adds it to the current sample.

Possible values:

0 = 'accum'

1 = 'mix'

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
