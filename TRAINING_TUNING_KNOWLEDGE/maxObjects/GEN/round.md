---
type: gen
name: "round"
summary: "round to nearest integer"
signal: false
url: "https://docs.cycling74.com/reference/gen_dsp_round/"
package: "Gen"
see_also: ["ceil", "floor"]
---
# round

round to nearest integer

## Description

Returns the integral value that is nearest to the input, with halfway cases rounded away from zero.

## Constructors

- { arguments={base}, inlets={input} }

- { arguments={}, inlets={input, base} }

## Inlets

### input[float]

value to round

### base[float]

round to a multiple of

## Attributes

### mode[enum]: nearest write-only

Determines whether rounding is to nearest multiple in either direction, or the closest multiple toward negative infinity (floor), toward zero (trunc) or toward positive infinity (ceil).

Possible values:

0 = 'ceil'

1 = 'trunc'

2 = 'floor'

3 = 'nearest'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [ceil](https://docs.cycling74.com/reference/gen_common_ceil) | Round the value up to the next higher integer |
| [floor](https://docs.cycling74.com/reference/gen_common_floor) | Round the value down to the next lower integer (toward negative infinity) |
