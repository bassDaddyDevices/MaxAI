---
type: max
name: "sinh"
summary: "Hyperbolic sine function"
signal: false
url: "https://docs.cycling74.com/reference/sinh/"
package: "Max"
see_also: ["asin", "asinh", "sin"]
---
# sinh

Hyperbolic sine function

## Description

Use the [sinh](https://docs.cycling74.com/reference/sinh) object to calculate and output the hyperbolic sine of any given number.

## Arguments

### initial-value[float or int] optional

Sets the initial value for the hyperbolic sine function.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Calculates the hyperbolic sine of the number currently stored. If there is no argument, [sinh](https://docs.cycling74.com/reference/sinh) initially holds  0 .

### int

Input to the hyperbolic sine function

Arguments:

- input
  [int]

### float

Input to the hyperbolic sine function

Arguments:

- input
  [float]

## Output

### float

The hyperbolic sine of the input.

### int

The hyperbolic sine of the input.

## See Also

| Name | Description |
| --- | --- |
| [asin](https://docs.cycling74.com/reference/asin) | Arc-sine function |
| [asinh](https://docs.cycling74.com/reference/asinh) | Hyperbolic arc-sine function |
| [sin](https://docs.cycling74.com/reference/sin) | Sine function |
