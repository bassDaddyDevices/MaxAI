---
type: gen
name: "fixnan"
summary: "Replace NaN (Not a Number) values with zero."
signal: false
url: "https://docs.cycling74.com/reference/gen_dsp_fixnan/"
package: "Gen"
see_also: ["dcblock", "fixdenorm", "fixnan", "isdenorm", "isnan"]
---
# fixnan

Replace NaN (Not a Number) values with zero.

## Description

This operator replaces NaNs with zero. A NaN (Not a Number) is a floating point data value which represents an undefined or unrepresentable value, such as the result of dividing by zero. Computations on NaNs produce more NaNs, and so it is often preferable to replace the NaN with a zero value. Note that division and modulo operators in gen~ protect against generating NaNs by default.

## Constructors

- { arguments={}, inlets={input} }

## Inlets

### input[float]

value to fix

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [dcblock](https://docs.cycling74.com/reference/gen_dsp_dcblock) | DC blocking filter |
| [fixdenorm](https://docs.cycling74.com/reference/gen_dsp_fixdenorm) | Replace denormal values with zero. |
| [fixnan](https://docs.cycling74.com/reference/gen_dsp_fixnan) | Replace NaN (Not a Number) values with zero. |
| [isdenorm](https://docs.cycling74.com/reference/gen_dsp_isdenorm) | Return 1 if the input is denormal, else return zero. |
| [isnan](https://docs.cycling74.com/reference/gen_dsp_isnan) | Return 1 if the input is NaN (Not a Number), else return zero. |
