---
type: gen
name: "data"
summary: "A locally stored array of 64-bit values"
signal: false
url: "https://docs.cycling74.com/reference/gen_dsp_data/"
package: "Gen"
see_also: ["buffer", "channels", "cycle", "data", "dim", "lookup", "nearest", "peek", "poke", "sample", "splat", "wave"]
---
# data

A locally stored array of 64-bit values

## Description

Stores an array of sample data (64-bit floats) usable for sampling, wavetable synthesis and other purposes. The first argument specifies a name by which to refer to this data in other objects in the gen patcher (such as peek and poke); the second optional argument specifies the length of the array (default 512 samples); and the third optional argument specifies the number of channels (default 1). The first outlet sends the length of the buffer in samples; the second outlet sends the number of channels.

## Constructors

- { arguments={name, dim, channels}, inlets={} }

- { arguments={name, dim}, inlets={} }

- { arguments={name}, inlets={} }

## Inlets

## Attributes

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
