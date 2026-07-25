---
type: mc
name: "mc.<~"
summary: "Is less than, comparison of two signals (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.%3C~/"
package: "MC"
see_also: ["<=~", ">~", ">=~", "==~", "!=~"]
---
# mc.<~

Is less than, comparison of two signals (multichannel)

## Description

[<~](https://docs.cycling74.com/reference/lessthan~) outputs a 1 signal when the left input is less-than the right input and a 0 when it is greater-than or equal-to the right input. The right input can be a signal or a float.

## Arguments

### initial-comparison-value[float or int] optional

Sets an initial comparison value for the signal coming into the left inlet.  1  is sent out if the signal is less than the argument; otherwise,  0  is sent out. If a signal is connected to the right inlet, the argument is ignored. If no argument is present, and no signal is connected to the right inlet, the initial value is  0  by default.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In right inlet: A number to be used for comparison with the signal coming into the left inlet. If a signal is also connected to the right inlet, a  float  or  int  is ignored.

Arguments:

- comparison-value
  [int]

### float

In right inlet: A number to be used for comparison with the signal coming into the left inlet. If a signal is also connected to the right inlet, a  float  or  int  is ignored.

Arguments:

- comparison-value
  [float]

### signal

In left inlet: The signal is compared to a signal coming into the right inlet, or a constant value received in the right inlet. If it is less than the value in the right inlet, 1 is sent out; otherwise, 0 is sent out.

In right inlet: The signal is used for comparison with the signal coming into the left inlet.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

If the signal in the left inlet is less than the value in the right inlet,  1  is sent out; otherwise,  0  is sent out.

## See Also

| Name | Description |
| --- | --- |
| [<=~](https://docs.cycling74.com/reference/lessthaneq~) | Is less than or equal to, comparison of two signals |
| [>~](https://docs.cycling74.com/reference/greaterthan~) | Is greater than, comparison of two signals |
| [>=~](https://docs.cycling74.com/reference/greaterthaneq~) | Is greater than or equal to, comparison of two signals |
| [==~](https://docs.cycling74.com/reference/equals~) | Is equal to, comparison of two signals |
| [!=~](https://docs.cycling74.com/reference/notequals~) | Not equal to, comparison of two signals |
