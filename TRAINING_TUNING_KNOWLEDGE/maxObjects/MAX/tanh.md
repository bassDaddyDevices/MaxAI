---
type: max
name: "tanh"
summary: "Hyperbolic tangent function"
signal: false
url: "https://docs.cycling74.com/reference/tanh/"
package: "Max"
see_also: ["atan", "atan2", "atanh", "tan"]
---
# tanh

Hyperbolic tangent function

## Description

Use the [tanh](https://docs.cycling74.com/reference/tanh) object to calculate and output the hyperbolic tangent of any given number.

## Arguments

### initial-value[float or int] optional

Sets the initial value for the hyperbolic tangent function.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Calculates the hyperbolic tangent of the number currently stored. If there is no argument, [tanh](https://docs.cycling74.com/reference/tanh) initially holds  0 .

### int

Input to the hyperbolic tangent function

Arguments:

- input
  [int]

### float

Input to the hyperbolic tangent function

Arguments:

- input
  [float]

## Output

### float

The hyperbolic tangent of the input.

### int

The hyperbolic tangent of the input.

## See Also

| Name | Description |
| --- | --- |
| [atan](https://docs.cycling74.com/reference/atan) | Arc-tangent function |
| [atan2](https://docs.cycling74.com/reference/atan2) | Two-variable arc-tangent function |
| [atanh](https://docs.cycling74.com/reference/atanh) | Hyperbolic arc-tangent function |
| [tan](https://docs.cycling74.com/reference/tan) | Tangent function |
