---
type: gen
name: "eqp"
summary: "Equal/pass operator"
signal: false
url: "https://docs.cycling74.com/reference/gen_common_eqp/"
package: "Gen"
see_also: ["gtep", "gtp", "ltep", "ltp", "neqp"]
---
# eqp

Equal/pass operator

## Description

Returns in1 if it equals in2, else returns zero. Equivalent to in1\*(in1 == in2).

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
| [gtep](https://docs.cycling74.com/reference/gen_common_gtep) | Pass greater than or equals operator |
| [gtp](https://docs.cycling74.com/reference/gen_common_gtp) | Pass greater than operator |
| [ltep](https://docs.cycling74.com/reference/gen_common_ltep) | Pass less than or equals operator |
| [ltp](https://docs.cycling74.com/reference/gen_common_ltp) | Pass less than operator |
| [neqp](https://docs.cycling74.com/reference/gen_common_neqp) | Not equal/pass operator |
