---
type: msp
name: "atan2~"
summary: "Signal arc-tangent function (two variables)"
signal: true
url: "https://docs.cycling74.com/reference/atan2~/"
package: "MSP"
see_also: ["atan~", "atanh~", "tanx~"]
---
# atan2~

Signal arc-tangent function (two variables)

## Description

Use the [acosh~](https://docs.cycling74.com/reference/acosh~) object to take two given x and y values and output a signal which is their arc-tangent function, calculated as follows:

Arc-tangent (y/x)

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Instead of a signal, [atan2~](https://docs.cycling74.com/reference/atan2~) can also take integers in either inlet to specify the x and y values in the same way a signal would but without sample-accurate timing.

Arguments:

- y/x-values
  [int]

### float

Instead of a signal, [atan2~](https://docs.cycling74.com/reference/atan2~) can also take floats in either inlet to specify the y and x values in the same way a signal would but without sample-accurate timing.

Arguments:

- y/x-values
  [float]

### signal

In left input: y value input to an arc-tangent function.

In right input: x value input to an arc-tangent function.

## Output

### signal

The arc-tangent input values (i.e. Arc-tangent (y/x)).

## See Also

| Name | Description |
| --- | --- |
| [atan~](https://docs.cycling74.com/reference/atan~) | Signal arc-tangent function |
| [atanh~](https://docs.cycling74.com/reference/atanh~) | Signal hyperbolic arc-tangent function |
| [tanx~](https://docs.cycling74.com/reference/tanx~) | Signal tangent function |
