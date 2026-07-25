---
type: mc
name: "mc.dbtoa~"
summary: "Convert a deciBel value to a linear value at signal rate  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.dbtoa~/"
package: "MC"
see_also: ["expr", "atodb", "atodb~", "dbtoa"]
---
# mc.dbtoa~

Convert a deciBel value to a linear value at signal rate (multichannel)

## Description

[dbtoa~](https://docs.cycling74.com/reference/dbtoa~) takes any given signal representing a deciBel value and outputs a signal which is a linear value conversion of the input.

## Arguments

None.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

A signal representing a gain/attenuation, expressed in deciBels. It is converted to a linear value and output as a signal.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The linear value output as a signal.

## See Also

| Name | Description |
| --- | --- |
| [expr](https://docs.cycling74.com/reference/expr) | Evaluate a mathematical expression |
| [atodb](https://docs.cycling74.com/reference/atodb) | Convert a linear value to decibels |
| [atodb~](https://docs.cycling74.com/reference/atodb~) | Convert a linear value to a signal-rate deciBel value |
| [dbtoa](https://docs.cycling74.com/reference/dbtoa) | Convert decibels to a linear value |
