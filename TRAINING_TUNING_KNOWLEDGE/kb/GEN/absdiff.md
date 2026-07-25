---
type: gen
name: "absdiff"
summary: "Compute the absolute difference between two inputs"
signal: false
url: "https://docs.cycling74.com/reference/gen_common_absdiff/"
package: "Gen"
see_also: ["abs", "sign", "sub"]
---
# absdiff

Compute the absolute difference between two inputs

## Description

Compute the absolute difference between two inputs using the equation abs(in1-in2).

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
| [abs](https://docs.cycling74.com/reference/gen_common_abs) | The absolute value of the input |
| [sign](https://docs.cycling74.com/reference/gen_common_sign) | Return the sign of the input |
| [sub](https://docs.cycling74.com/reference/gen_common_sub) | Subtract inputs |
