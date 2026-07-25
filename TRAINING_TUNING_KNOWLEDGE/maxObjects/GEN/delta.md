---
type: gen
name: "delta"
summary: "The discrete derivative of the input"
signal: false
url: "https://docs.cycling74.com/reference/gen_dsp_delta/"
package: "Gen"
see_also: ["change", "delta", "sah", "slide"]
---
# delta

The discrete derivative of the input

## Description

Returns the difference between the current and previous input.

## Constructors

- { arguments={}, inlets={input} }

## Inlets

### input[float]

value to differentiate

## Attributes

### init[float]: 0 write-only

Specify the first value to compare against

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [change](https://docs.cycling74.com/reference/gen_dsp_change) | The sign of the derivative of the input |
| [delta](https://docs.cycling74.com/reference/gen_dsp_delta) | The discrete derivative of the input |
| [sah](https://docs.cycling74.com/reference/gen_dsp_sah) | Sample and hold operator (Schmitt trigger) |
| [slide](https://docs.cycling74.com/reference/gen_dsp_slide) | Filter a signal logarithmically |
