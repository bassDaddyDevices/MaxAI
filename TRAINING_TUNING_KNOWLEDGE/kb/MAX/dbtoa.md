---
type: max
name: "dbtoa"
summary: "Convert decibels to a linear value"
signal: false
url: "https://docs.cycling74.com/reference/dbtoa/"
package: "Max"
see_also: ["expr", "atodb", "atodb~", "dbtoa~"]
---
# dbtoa

Convert decibels to a linear value

## Description

Converts a decibel value to its corresponding linear value.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

The most recently stored linear amplitude value is sent out the outlet.

### int

Converts a gain/attenuation in deciBels into its corresponding linear amplitude.

Arguments:

- dB-gain
  [int]

### float

Converts a gain/attenuation in deciBels into its corresponding linear amplitude.

Arguments:

- dB-gain
  [float]

### list

Converts a list of gain/attenuation values in deciBels into their corresponding linear amplitude values.

Arguments:

- gain-values
  [list]

### set

Converts a gain/attenuation in deciBels into its corresponding linear amplitude, but no output is sent.

Arguments:

- dB-gain
  [number]

## Output

### float

A linear amplitude value.

## See Also

| Name | Description |
| --- | --- |
| [expr](https://docs.cycling74.com/reference/expr) | Evaluate a mathematical expression |
| [atodb](https://docs.cycling74.com/reference/atodb) | Convert a linear value to decibels |
| [atodb~](https://docs.cycling74.com/reference/atodb~) | Convert a linear value to a signal-rate deciBel value |
| [dbtoa~](https://docs.cycling74.com/reference/dbtoa~) | Convert a deciBel value to a linear value at signal rate |
