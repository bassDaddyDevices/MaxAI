---
type: max
name: "atanh"
summary: "Hyperbolic arc-tangent function"
signal: false
url: "https://docs.cycling74.com/reference/atanh/"
package: "Max"
see_also: ["atan", "atan2", "tan", "tanh"]
---
# atanh

Hyperbolic arc-tangent function

## Description

Use the [atanh](https://docs.cycling74.com/reference/atanh) object to calculate and output the hyperbolic arc-tangent of any given number.

## Arguments

### initial-value[float or int] optional

Sets the initial value for the hyperbolic arc-tangent function.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Calculates the hyperbolic arc-tangent of the number currently stored. If there is no argument, [atanh](https://docs.cycling74.com/reference/atanh) initially holds  0 .

### int

Input to the hyperbolic arc-tangent function

Arguments:

- input
  [int]

### float

Input to the hyperbolic arc-tangent function

Arguments:

- input
  [float]

## Output

### float

The hyperbolic arc-tangent of the input.

### int

The hyperbolic arc-tangent of the input.

## See Also

| Name | Description |
| --- | --- |
| [atan](https://docs.cycling74.com/reference/atan) | Arc-tangent function |
| [atan2](https://docs.cycling74.com/reference/atan2) | Two-variable arc-tangent function |
| [tan](https://docs.cycling74.com/reference/tan) | Tangent function |
| [tanh](https://docs.cycling74.com/reference/tanh) | Hyperbolic tangent function |
