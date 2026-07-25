---
type: max
name: "cos"
summary: "Cosine function"
signal: false
url: "https://docs.cycling74.com/reference/cos/"
package: "Max"
see_also: ["acos", "acosh", "cosh"]
---
# cos

Cosine function

## Description

Use the [cos](https://docs.cycling74.com/reference/cos) object to calculate and output the cosine of any given number.

## Arguments

### initial-value[float or int] optional

Sets the initial value for the cosine function.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Calculates the cosine of the number currently stored. If there is no argument, [cos](https://docs.cycling74.com/reference/cos) initially holds  0 .

### int

Input to the cosine function

Arguments:

- input
  [int]

### float

Input to the cosine function

Arguments:

- input
  [float]

## Output

### float

The cosine of the input.

## See Also

| Name | Description |
| --- | --- |
| [acos](https://docs.cycling74.com/reference/acos) | Arc-cosine function |
| [acosh](https://docs.cycling74.com/reference/acosh) | Hyperbolic arc-cosine function |
| [cosh](https://docs.cycling74.com/reference/cosh) | Hyperbolic cosine function |
