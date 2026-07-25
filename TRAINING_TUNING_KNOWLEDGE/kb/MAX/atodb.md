---
type: max
name: "atodb"
summary: "Convert a linear value to decibels"
signal: false
url: "https://docs.cycling74.com/reference/atodb/"
package: "Max"
see_also: ["expr", "atodb~", "dbtoa", "dbtoa~"]
---
# atodb

Convert a linear value to decibels

## Description

Converts any given linear value to its corresponding decibel value.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

The most recently calculated decibel value is sent out the outlet.

### int

A linear amplitude value. The corresponding gain/attenuation in decibels is sent out the outlet.

Arguments:

- linear-amplitude
  [int]

### float

A linear amplitude value. The corresponding gain/attenuation in decibels is sent out the outlet.

Arguments:

- linear-amplitude
  [float]

### list

A list of linear amplitude values. Corresponding gain/attenuation values in decibels for each list item are sent out the outlet.

Arguments:

- amplitude-list
  [list]

### set

The message  set  followed by a linear amplitude value will set the next value to be calculated into decibels without sending anything out the outlet.

Arguments:

- linear-amplitude
  [float]

## Output

### float

The gain or attenuation from unity gain, expressed in decibels.

### int

The gain or attenuation from unity gain, expressed in decibels.

## See Also

| Name | Description |
| --- | --- |
| [expr](https://docs.cycling74.com/reference/expr) | Evaluate a mathematical expression |
| [atodb~](https://docs.cycling74.com/reference/atodb~) | Convert a linear value to a signal-rate deciBel value |
| [dbtoa](https://docs.cycling74.com/reference/dbtoa) | Convert decibels to a linear value |
| [dbtoa~](https://docs.cycling74.com/reference/dbtoa~) | Convert a deciBel value to a linear value at signal rate |
