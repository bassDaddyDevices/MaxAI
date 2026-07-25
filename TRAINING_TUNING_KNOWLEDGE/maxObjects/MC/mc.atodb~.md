---
type: mc
name: "mc.atodb~"
summary: "Convert a linear value to a signal-rate deciBel value  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.atodb~/"
package: "MC"
see_also: ["expr", "atodb", "dbtoa", "dbtoa~"]
---
# mc.atodb~

Convert a linear value to a signal-rate deciBel value (multichannel)

## Description

Use the [atodb~](https://docs.cycling74.com/reference/atodb~) to convert a signal representing a linear value to a deciBel equivalent.

## Arguments

None.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

A signal representing a linear value. It is converted to a gain/attenuation, expressed in deciBels, and output as a signal.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The gain or attenuation from unity gain, expressed in deciBels, is output as a signal.

## See Also

| Name | Description |
| --- | --- |
| [expr](https://docs.cycling74.com/reference/expr) | Evaluate a mathematical expression |
| [atodb](https://docs.cycling74.com/reference/atodb) | Convert a linear value to decibels |
| [dbtoa](https://docs.cycling74.com/reference/dbtoa) | Convert decibels to a linear value |
| [dbtoa~](https://docs.cycling74.com/reference/dbtoa~) | Convert a deciBel value to a linear value at signal rate |
