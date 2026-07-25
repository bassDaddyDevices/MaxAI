---
type: gen
name: "nearestpix"
summary: "Nearest neighbor sample a matrix"
signal: false
url: "https://docs.cycling74.com/reference/gen_jit_nearestpix/"
package: "Gen"
see_also: ["nearest", "sample", "samplepix"]
---
# nearestpix

Nearest neighbor sample a matrix

## Description

Nearest neighbor sample a matrix at a given coordinate (in pixels). Nearest has a boundmode attribute that can be set to wrap, mirror or clamp.

## Constructors

- { arguments={}, inlets={sampler, coord} }

## Inlets

### sampler[sampler]

input matrix to sample

### coord[float]

pixel coordinate

## Attributes

### boundmode[enum]: wrap write-only

Sampling boundary condition

Possible values:

0 = 'wrap'

1 = 'clamp'

2 = 'mirror'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [nearest](https://docs.cycling74.com/reference/gen_dsp_nearest) | Multi-channel lookup a data/buffer object (no interpolation) |
| [sample](https://docs.cycling74.com/reference/gen_dsp_sample) | Linear interpolated multi-channel lookup of a data/buffer object |
| [samplepix](https://docs.cycling74.com/reference/gen_jit_samplepix) | Sample a matrix |
