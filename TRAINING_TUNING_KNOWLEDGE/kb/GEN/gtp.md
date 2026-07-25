---
type: gen
name: "gtp"
summary: "Pass greater than operator"
signal: false
url: "https://docs.cycling74.com/reference/gen_common_gtp/"
package: "Gen"
see_also: ["eqp", "gtep", "ltep", "ltp", "neqp"]
---
# gtp

Pass greater than operator

## Description

Returns in1 if in1 is greater than in2, else returns zero. Equivalent to in1\*(in1 > in2).

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
| [eqp](https://docs.cycling74.com/reference/gen_common_eqp) | Equal/pass operator |
| [gtep](https://docs.cycling74.com/reference/gen_common_gtep) | Pass greater than or equals operator |
| [ltep](https://docs.cycling74.com/reference/gen_common_ltep) | Pass less than or equals operator |
| [ltp](https://docs.cycling74.com/reference/gen_common_ltp) | Pass less than operator |
| [neqp](https://docs.cycling74.com/reference/gen_common_neqp) | Not equal/pass operator |
