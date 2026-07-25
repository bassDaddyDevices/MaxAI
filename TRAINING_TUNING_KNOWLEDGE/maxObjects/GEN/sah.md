---
type: gen
name: "sah"
summary: "Sample and hold operator (Schmitt trigger)"
signal: false
url: "https://docs.cycling74.com/reference/gen_dsp_sah/"
package: "Gen"
see_also: ["change", "delta", "latch", "sah", "slide", "train"]
---
# sah

Sample and hold operator (Schmitt trigger)

## Description

The first inlet is the 'input' and the second inlet is the 'control'. When the control makes a transition from being at or below the trigger value to being above the trigger threshold, the input is sampled. The sampled value is output until another control transition occurs, at which point the input is sampled again. The default threshold value is 0, but can be specified as the last inlet/argument. The @init attribute sets the initial previous value to compare to (default 0).

## Constructors

- { arguments={input, thresh}, inlets={control} }

- { arguments={thresh}, inlets={input, control} }

- { arguments={}, inlets={input, control, thresh} }

## Inlets

### input[float]

input to sample

### control[float]

control signal

### thresh[float]

threshold

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
| [latch](https://docs.cycling74.com/reference/gen_dsp_latch) | Conditionally pass or hold input |
| [sah](https://docs.cycling74.com/reference/gen_dsp_sah) | Sample and hold operator (Schmitt trigger) |
| [slide](https://docs.cycling74.com/reference/gen_dsp_slide) | Filter a signal logarithmically |
| [train](https://docs.cycling74.com/reference/gen_dsp_train) | Pulse train generator |
