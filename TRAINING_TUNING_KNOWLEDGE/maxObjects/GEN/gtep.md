---
type: gen
name: "gtep"
summary: "Pass greater than or equals operator"
signal: false
url: "https://docs.cycling74.com/reference/gen_common_gtep/"
package: "Gen"
see_also: ["eqp", "gtp", "ltep", "ltp", "neqp"]
---
# gtep

Pass greater than or equals operator

## Description

Returns in1 if in1 is equal to or greater than in2, else returns zero. Equivalent to in1\*(in1 >= in2).

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
| [gtp](https://docs.cycling74.com/reference/gen_common_gtp) | Pass greater than operator |
| [ltep](https://docs.cycling74.com/reference/gen_common_ltep) | Pass less than or equals operator |
| [ltp](https://docs.cycling74.com/reference/gen_common_ltp) | Pass less than operator |
| [neqp](https://docs.cycling74.com/reference/gen_common_neqp) | Not equal/pass operator |
