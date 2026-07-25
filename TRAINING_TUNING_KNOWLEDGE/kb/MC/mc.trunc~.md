---
type: mc
name: "mc.trunc~"
summary: "Truncate fractional signal values  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.trunc~/"
package: "MC"
see_also: ["clip~", "round~"]
---
# mc.trunc~

Truncate fractional signal values (multichannel)

## Description

[trunc~](https://docs.cycling74.com/reference/trunc~) converts signals with values such as 1.75 to 1.0. Negative values are modified so that -1.75 becomes -1.0. This object is very simple but computationally expensive.

## Arguments

None.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

A signal whose values will be truncated. The [trunc~](https://docs.cycling74.com/reference/trunc~) object converts signals with fractional values to the nearest lower integer value (e.g., a value of 1.75 is truncated to 1.0, and -1.75 is truncated to -1.0). This object is simple but computationally expensive.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The truncated input signal.

## See Also

| Name | Description |
| --- | --- |
| [clip~](https://docs.cycling74.com/reference/clip~) | Limit signal amplitude |
| [round~](https://docs.cycling74.com/reference/round~) | Round an input signal value |
