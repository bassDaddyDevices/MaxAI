---
type: gen
name: "smoothstep"
summary: "Smoothed fade of inputs"
signal: false
url: "https://docs.cycling74.com/reference/gen_common_smoothstep/"
package: "Gen"
see_also: ["gate", "mix", "selector", "switch"]
---
# smoothstep

Smoothed fade of inputs

## Description

Smoothstep is a scalar interpolation function commonly used in computer graphics. The function interpolates smoothly between two input values based on a third one that should be between the first two. The returned value is clamped between 0 and 1. The slope (i.e. derivative) of the smoothstep function starts at 0 and ends at 0.

## Constructors

- { arguments={loval, hival, interp}, inlets={} }

- { arguments={loval, hival}, inlets={interp} }

- { arguments={interp}, inlets={loval, hival} }

- { arguments={}, inlets={loval, hival, interp} }

## Inlets

### loval[float]

output if interp is 0

### hival[float]

output if interp is 1

### interp[float]

interpolation factor between inputs

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [gate](https://docs.cycling74.com/reference/gen_common_gate) | Select between a number of outputs |
| [mix](https://docs.cycling74.com/reference/gen_common_mix) | Linear crossfade of inputs |
| [selector](https://docs.cycling74.com/reference/gen_common_selector) | Select between a number of inputs |
| [switch](https://docs.cycling74.com/reference/gen_common_switch) | Conditional ternary operator |
