---
type: gen
name: "nearest"
summary: "Nearest neighbor sample a matrix"
signal: false
url: "https://docs.cycling74.com/reference/gen_jit_nearest/"
package: "Gen"
see_also: ["nearestpix", "sample", "samplepix"]
---
# nearest

Nearest neighbor sample a matrix

## Description

Nearest neighbor sample a matrix at a given coordinate (normalized).
Nearest has a boundmode attribute that can be set to wrap, mirror or
clamp.

## Constructors

- { arguments={}, inlets={sampler, coord} }

## Inlets

### coord[float]

normalized sample coordinate [0, 1]

### sampler[float]

input matrix to sample

## Attributes

### boundmode[enum]: wrap write-only

Sampling boundary condition

Possible values:

'wrap'

'clamp'

'mirror'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [nearestpix](https://docs.cycling74.com/reference/gen_jit_nearestpix) |  |
| [sample](https://docs.cycling74.com/reference/gen_jit_sample) | Sample a matrix |
| [samplepix](https://docs.cycling74.com/reference/gen_jit_samplepix) |  |
