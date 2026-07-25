---
type: gen
name: "sample"
summary: "Sample a matrix"
signal: false
url: "https://docs.cycling74.com/reference/gen_jit_sample/"
package: "Gen"
see_also: ["nearest", "nearestpix", "samplepix"]
---
# sample

Sample a matrix

## Description

Sample a matrix at a given coordinate (normalized) with linear
interpolation. Sample has a boundmode attribute that can be set to wrap,
mirror or clamp.

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
| [nearest](https://docs.cycling74.com/reference/gen_jit_nearest) | Nearest neighbor sample a matrix |
| [nearestpix](https://docs.cycling74.com/reference/gen_jit_nearestpix) |  |
| [samplepix](https://docs.cycling74.com/reference/gen_jit_samplepix) |  |
