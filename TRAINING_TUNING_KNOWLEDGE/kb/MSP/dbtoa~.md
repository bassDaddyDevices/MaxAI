---
type: msp
name: "dbtoa~"
summary: "Convert a deciBel value to a linear value at signal rate"
signal: true
url: "https://docs.cycling74.com/reference/dbtoa~/"
package: "MSP"
see_also: ["expr", "atodb", "atodb~", "dbtoa"]
---
# dbtoa~

Convert a deciBel value to a linear value at signal rate

## Description

[dbtoa~](https://docs.cycling74.com/reference/dbtoa~) takes any given signal representing a deciBel value and outputs a signal which is a linear value conversion of the input.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

A signal representing a gain/attenuation, expressed in deciBels. It is converted to a linear value and output as a signal.

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
