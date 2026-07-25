---
type: gen
name: "gate"
summary: "Select between a number of outputs"
signal: false
url: "https://docs.cycling74.com/reference/gen_common_gate/"
package: "Gen"
see_also: ["mix", "selector", "smoothstep", "switch"]
---
# gate

Select between a number of outputs

## Description

Similar to the MSP gate~ object. It takes an argument for number of outputs (one is the default) and lets you choose which the incoming signal (at the right inlet) is sent to according to the (integer) value in the left inlet. A value of zero or less to the left inlet will choose no output; a value greater than the number of outlets will select the last outlet. Like gate~, un-selected outlets will send zero.

## Constructors

- { arguments={choices}, inlets={choose, input} }

- { arguments={}, inlets={choose, input} }

## Inlets

### choose[int]

choose which output to forward to

### input[float]

input to pass through the gate

## Attributes

### choices[int]: 1 write-only

Number of outputs

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [mix](https://docs.cycling74.com/reference/gen_common_mix) | Linear crossfade of inputs |
| [selector](https://docs.cycling74.com/reference/gen_common_selector) | Select between a number of inputs |
| [smoothstep](https://docs.cycling74.com/reference/gen_common_smoothstep) | Smoothed fade of inputs |
| [switch](https://docs.cycling74.com/reference/gen_common_switch) | Conditional ternary operator |
