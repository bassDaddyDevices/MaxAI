---
type: gen
name: "latch"
summary: "Conditionally pass or hold input"
signal: false
url: "https://docs.cycling74.com/reference/gen_dsp_latch/"
package: "Gen"
see_also: ["change", "delta", "sah", "slide"]
---
# latch

Conditionally pass or hold input

## Description

Conditionally passes or holds input. The first inlet is the 'input' and the second inlet is the 'control'. When the control is non-zero, the input value is passed through. When the control is zero, the previous input value is output. It can be used to periodically sample & hold a source signal with a simpler trigger logic than the sah operator.

## Constructors

- { arguments={}, inlets={input, control} }

## Inlets

### input[float]

input to sample

### control[float]

control: allows input through when non-zero

## Attributes

### init[float]: 0 write-only

Specify the initially held value

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [change](https://docs.cycling74.com/reference/gen_dsp_change) | The sign of the derivative of the input |
| [delta](https://docs.cycling74.com/reference/gen_dsp_delta) | The discrete derivative of the input |
| [sah](https://docs.cycling74.com/reference/gen_dsp_sah) | Sample and hold operator (Schmitt trigger) |
| [sah](https://docs.cycling74.com/reference/gen_dsp_sah) | Sample and hold operator (Schmitt trigger) |
| [slide](https://docs.cycling74.com/reference/gen_dsp_slide) | Filter a signal logarithmically |
