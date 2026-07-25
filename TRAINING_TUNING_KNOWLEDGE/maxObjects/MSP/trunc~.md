---
type: msp
name: "trunc~"
summary: "Truncate fractional signal values"
signal: true
url: "https://docs.cycling74.com/reference/trunc~/"
package: "MSP"
see_also: ["clip~", "round~"]
---
# trunc~

Truncate fractional signal values

## Description

[trunc~](https://docs.cycling74.com/reference/trunc~) converts signals with values such as 1.75 to 1.0. Negative values are modified so that -1.75 becomes -1.0. This object is very simple but computationally expensive.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

A signal whose values will be truncated. The [trunc~](https://docs.cycling74.com/reference/trunc~) object converts signals with fractional values to the nearest lower integer value (e.g., a value of 1.75 is truncated to 1.0, and -1.75 is truncated to -1.0). This object is simple but computationally expensive.

## Output

### signal

The truncated input signal.

## See Also

| Name | Description |
| --- | --- |
| [clip~](https://docs.cycling74.com/reference/clip~) | Limit signal amplitude |
| [round~](https://docs.cycling74.com/reference/round~) | Round an input signal value |
