---
type: gen
name: "selector"
summary: "Select between a number of inputs"
signal: false
url: "https://docs.cycling74.com/reference/gen_common_selector/"
package: "Gen"
see_also: ["gate", "mix", "smoothstep", "switch"]
---
# selector

Select between a number of inputs

## Description

Similar to the MSP selector~ object. In a Gen patcher it takes an argument for number of choices (one is the default). In GenExpr, the number of choices is determined by the number of arguments. The first input lets you choose which of the remaining inputs is sent to the output. A value of zero or less to the first input will result in a zero signal at the output; a value greater than the number of choices will select the last input.

## Constructors

- { arguments={choices}, inlets={...} }

- { arguments={}, inlets={...} }

## Inlets

### ...[float]

inputs to choose from

## Attributes

### choices[int]: 1 write-only

Number of inputs

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [gate](https://docs.cycling74.com/reference/gen_common_gate) | Select between a number of outputs |
| [mix](https://docs.cycling74.com/reference/gen_common_mix) | Linear crossfade of inputs |
| [smoothstep](https://docs.cycling74.com/reference/gen_common_smoothstep) | Smoothed fade of inputs |
| [switch](https://docs.cycling74.com/reference/gen_common_switch) | Conditional ternary operator |
