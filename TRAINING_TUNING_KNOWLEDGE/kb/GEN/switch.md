---
type: gen
name: "switch"
summary: "Conditional ternary operator"
signal: false
url: "https://docs.cycling74.com/reference/gen_common_switch/"
package: "Gen"
see_also: ["gate", "mix", "selector", "smoothstep"]
---
# switch

Conditional ternary operator

## Description

Selects between the second and third inputs according to the boolean value of the first. If the first argument is true, the second argument will be output. Otherwise, the third argument will be output.

## Constructors

- { arguments={condition, iftrue, iffalse}, inlets={} }

- { arguments={iftrue, iffalse}, inlets={condition} }

- { arguments={iftrue}, inlets={condition, iffalse} }

- { arguments={}, inlets={condition, iftrue, iffalse} }

## Inlets

### condition[float]

condition to test

### iftrue[float]

value if true

### iffalse[float]

value if false

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [gate](https://docs.cycling74.com/reference/gen_common_gate) | Select between a number of outputs |
| [mix](https://docs.cycling74.com/reference/gen_common_mix) | Linear crossfade of inputs |
| [selector](https://docs.cycling74.com/reference/gen_common_selector) | Select between a number of inputs |
| [smoothstep](https://docs.cycling74.com/reference/gen_common_smoothstep) | Smoothed fade of inputs |
