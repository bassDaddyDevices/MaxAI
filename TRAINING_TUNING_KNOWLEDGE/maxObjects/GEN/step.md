---
type: gen
name: "step"
summary: "Returns not(in1 < in2)"
signal: false
url: "https://docs.cycling74.com/reference/gen_common_step/"
package: "Gen"
see_also: ["bool", "lt", "mix", "smoothstep"]
---
# step

Returns not(in1 < in2)

## Description

Akin to the GLSL step operator: 0 is returned if in1 < in2, and 1 is returned otherwise.

## Constructors

- { arguments={value2}, inlets={value1} }

- { arguments={}, inlets={value1, value2} }

## Inlets

### value1[float]

input value 1

### value2[float]

input value 2

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [bool](https://docs.cycling74.com/reference/gen_common_bool) | constant boolean / convert to boolean |
| [lt](https://docs.cycling74.com/reference/gen_common_lt) | Less than operator |
| [mix](https://docs.cycling74.com/reference/gen_common_mix) | Linear crossfade of inputs |
| [smoothstep](https://docs.cycling74.com/reference/gen_common_smoothstep) | Smoothed fade of inputs |
