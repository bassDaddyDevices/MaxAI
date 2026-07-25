---
type: gen
name: "scale"
summary: "Map an input range of values to an output range"
signal: false
url: "https://docs.cycling74.com/reference/gen_common_scale/"
package: "Gen"
see_also: ["clamp", "fold", "gate", "mix", "selector", "smoothstep", "switch", "wrap"]
---
# scale

Map an input range of values to an output range

## Description

Similar to the Max scale and MSP scale~ objects. Inputs are: 1) value to scale, 2) input lower bound, 3), input upper bound, 4) output lower bound, 5) output upper bound, 6) exponential curve. Default lower and upper bounds are zero and one; default exponential curve is 1 (linear). No bound clamping is performed. The high and low values can be reversed for inverted mapping.

## Constructors

- { arguments={ilo, ihi, olo, ohi, exp}, inlets={input} }

- { arguments={ilo, ihi, olo, ohi}, inlets={input, exp} }

- { arguments={ilo, ihi, olo}, inlets={input, ohi, exp} }

- { arguments={ilo, ihi}, inlets={input, olo, ohi, exp} }

- { arguments={ilo}, inlets={input, ihi, olo, ohi, exp} }

- { arguments={}, inlets={input, ilo, ihi, olo, ohi, exp} }

## Inlets

### input[float]

value to scale

### ilo[float]

input range lower value

### ihi[float]

input range upper value

### olo[float]

output range lower value

### ohi[float]

output range upper value

### exp[float]

exponential curve

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [clamp](https://docs.cycling74.com/reference/gen_common_clamp) | Clamp values in a specified range |
| [fold](https://docs.cycling74.com/reference/gen_common_fold) | Fold input to a range within a low and high output value |
| [gate](https://docs.cycling74.com/reference/gen_common_gate) | Select between a number of outputs |
| [mix](https://docs.cycling74.com/reference/gen_common_mix) | Linear crossfade of inputs |
| [selector](https://docs.cycling74.com/reference/gen_common_selector) | Select between a number of inputs |
| [smoothstep](https://docs.cycling74.com/reference/gen_common_smoothstep) | Smoothed fade of inputs |
| [switch](https://docs.cycling74.com/reference/gen_common_switch) | Conditional ternary operator |
| [wrap](https://docs.cycling74.com/reference/gen_common_wrap) | Wrap input to a range within a low and high output value |
