---
type: max
name: "tan"
summary: "Tangent function"
signal: false
url: "https://docs.cycling74.com/reference/tan/"
package: "Max"
see_also: ["atan", "atan2", "atanh", "tanh"]
---
# tan

Tangent function

## Description

Use the [tan](https://docs.cycling74.com/reference/tan) object to calculate and output the tangent of any given number.

## Arguments

### initial-value[float or int] optional

Sets the initial value for the tangent function.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Calculates the tangent of the number currently stored. If there is no argument, [tan](https://docs.cycling74.com/reference/tan) initially holds  0 .

### int

Input to the tangent function

Arguments:

- input
  [int]

### float

Input to the tangent function

Arguments:

- input
  [float]

## Output

### float

The tangent of the input.

### int

The tangent of the input.

## See Also

| Name | Description |
| --- | --- |
| [atan](https://docs.cycling74.com/reference/atan) | Arc-tangent function |
| [atan2](https://docs.cycling74.com/reference/atan2) | Two-variable arc-tangent function |
| [atanh](https://docs.cycling74.com/reference/atanh) | Hyperbolic arc-tangent function |
| [tanh](https://docs.cycling74.com/reference/tanh) | Hyperbolic tangent function |
