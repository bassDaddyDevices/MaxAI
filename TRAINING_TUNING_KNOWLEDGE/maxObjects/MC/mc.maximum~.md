---
type: mc
name: "mc.maximum~"
summary: "Compare two signals, output the maximum  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.maximum~/"
package: "MC"
see_also: ["<=~", ">~", ">=~", "==~", "!=~", "minimum~"]
---
# mc.maximum~

Compare two signals, output the maximum (multichannel)

## Description

[maximum~](https://docs.cycling74.com/reference/maximum~) outputs a signal which is the maximum of two input signals.

## Arguments

### initial-comparison-value[number] optional

Sets an initial comparison value for the signal coming into the left inlet. If a signal is connected to the right inlet, the argument is ignored.

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

In left inlet: The signal is compared to a signal coming into the right inlet, or a constant value received in the right inlet. The greater of the two values is sent out the outlet.

In right inlet: The signal is used for comparison with the signal coming into the left inlet.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The greater of the two signal values received in the left and right inlets is sent out.

## See Also

| Name | Description |
| --- | --- |
| [<=~](https://docs.cycling74.com/reference/lessthaneq~) | Is less than or equal to, comparison of two signals |
| [>~](https://docs.cycling74.com/reference/greaterthan~) | Is greater than, comparison of two signals |
| [>=~](https://docs.cycling74.com/reference/greaterthaneq~) | Is greater than or equal to, comparison of two signals |
| [==~](https://docs.cycling74.com/reference/equals~) | Is equal to, comparison of two signals |
| [!=~](https://docs.cycling74.com/reference/notequals~) | Not equal to, comparison of two signals |
| [minimum~](https://docs.cycling74.com/reference/minimum~) | Compare two signals, output the minimum |
