---
type: max
name: "acos"
summary: "Arc-cosine function"
signal: false
url: "https://docs.cycling74.com/reference/acos/"
package: "Max"
see_also: ["acosh", "cos", "cosh"]
---
# acos

Arc-cosine function

## Description

Use the [acos](https://docs.cycling74.com/reference/acos) object to calculate and output the arc-cosine of any given number.

## Arguments

### initial-value[float or int] optional

Sets the initial value for the arc-cosine function.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Calculates the arc-cosine of the number currently stored. If there is no argument, [acos](https://docs.cycling74.com/reference/acos) initially holds  0 .

### int

Input to the arc-cosine function

Arguments:

- input
  [int]

### float

Input to the arc-cosine function

Arguments:

- input
  [float]

## Output

### float

The arc-cosine of the input.

### int

The arc-cosine of the input.

## See Also

| Name | Description |
| --- | --- |
| [acosh](https://docs.cycling74.com/reference/acosh) | Hyperbolic arc-cosine function |
| [cos](https://docs.cycling74.com/reference/cos) | Cosine function |
| [cosh](https://docs.cycling74.com/reference/cosh) | Hyperbolic cosine function |
