---
type: gen
name: "fixdenorm"
summary: "Replace denormal values with zero."
signal: false
url: "https://docs.cycling74.com/reference/gen_dsp_fixdenorm/"
package: "Gen"
see_also: ["dcblock", "fixdenorm", "fixnan", "isdenorm", "isnan"]
---
# fixdenorm

Replace denormal values with zero.

## Description

This operator detects denormal numbers and replaces them with zero. Note: As of Max 6.0 the x87 control flags are set to flush to zero and disable exception handling in audio processing, so denormal fixing should only be required for exported code. A denormal number is a floating point value very close to zero (filling the underflow gap). Calculations with denormal values can be up to 100 times more expensive, so it is often beneficial to replace them with zeroes. Denormals often occur in feedback loops with multipliers, such as filters, delays and exponential decays. Denormal detection is based on a bitmask. Note that feedback operators in gen~ (delay, history) apply fixdenorm to their input signals by default.

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
