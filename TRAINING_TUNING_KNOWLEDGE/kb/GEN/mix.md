---
type: gen
name: "mix"
summary: "Linear crossfade of inputs"
signal: false
url: "https://docs.cycling74.com/reference/gen_common_mix/"
package: "Gen"
see_also: ["gate", "selector", "smoothstep", "switch"]
---
# mix

Linear crossfade of inputs

## Description

Mixes (interpolates) between inputs a and b according to the value of the third input t, using linear interpolation. The factor (t) should vary between 0 (for a) and 1 (for b). If one argument is given, it specifies the mix (interpolation) factor.

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
| [selector](https://docs.cycling74.com/reference/gen_common_selector) | Select between a number of inputs |
| [smoothstep](https://docs.cycling74.com/reference/gen_common_smoothstep) | Smoothed fade of inputs |
| [switch](https://docs.cycling74.com/reference/gen_common_switch) | Conditional ternary operator |
