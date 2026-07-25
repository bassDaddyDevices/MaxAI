---
type: max
name: "atan"
summary: "Arc-tangent function"
signal: false
url: "https://docs.cycling74.com/reference/atan/"
package: "Max"
see_also: ["atan2", "atanh", "tan", "tanh"]
---
# atan

Arc-tangent function

## Description

Use the [atan](https://docs.cycling74.com/reference/atan) object to calculate and output the arc-tangent of any given number.

## Arguments

### initial-value[float or int] optional

Sets the initial value for the arc-tangent function.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Calculates the arc-tangent of the number currently stored. If there is no argument, [atan](https://docs.cycling74.com/reference/atan) initially holds  0 .

### int

Input to the arc-tangent function

Arguments:

- input
  [int]

### float

Input to the arc-tangent function

Arguments:

- input
  [float]

## Output

### float

The arc-tangent of the input.

### int

The arc-tangent of the input.

## See Also

| Name | Description |
| --- | --- |
| [atan2](https://docs.cycling74.com/reference/atan2) | Two-variable arc-tangent function |
| [atanh](https://docs.cycling74.com/reference/atanh) | Hyperbolic arc-tangent function |
| [tan](https://docs.cycling74.com/reference/tan) | Tangent function |
| [tanh](https://docs.cycling74.com/reference/tanh) | Hyperbolic tangent function |
