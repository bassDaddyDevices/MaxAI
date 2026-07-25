---
type: gen
name: "slide"
summary: "Filter a signal logarithmically"
signal: false
url: "https://docs.cycling74.com/reference/gen_dsp_slide/"
package: "Gen"
see_also: ["change", "dcblock", "delta", "sah", "slide"]
---
# slide

Filter a signal logarithmically

## Description

Use the slide operator for envelope following and lowpass filtering. Related to the MSP slide~ object.

## Constructors

- { arguments={up, down}, inlets={input} }

- { arguments={}, inlets={input, up, down} }

## Inlets

### input[float]

input to filter

### up[float]

slide up value (samples)

### down[float]

slide down value (samples)

## Attributes

### init[float]: 0 write-only

Specify the initially held value

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [change](https://docs.cycling74.com/reference/gen_dsp_change) | The sign of the derivative of the input |
| [dcblock](https://docs.cycling74.com/reference/gen_dsp_dcblock) | DC blocking filter |
| [delta](https://docs.cycling74.com/reference/gen_dsp_delta) | The discrete derivative of the input |
| [sah](https://docs.cycling74.com/reference/gen_dsp_sah) | Sample and hold operator (Schmitt trigger) |
| [slide](https://docs.cycling74.com/reference/gen_dsp_slide) | Filter a signal logarithmically |
