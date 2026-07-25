---
type: max
name: "sin"
summary: "Sine function"
signal: false
url: "https://docs.cycling74.com/reference/sin/"
package: "Max"
see_also: ["asin", "asinh", "sinh"]
---
# sin

Sine function

## Description

Use the [sin](https://docs.cycling74.com/reference/sin) object to calculate and output the sine of any given number.

## Arguments

### initial-value[float or int] optional

Sets the initial value for the sine function.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Calculates the sine of the number currently stored. If there is no argument, [sin](https://docs.cycling74.com/reference/sin) initially holds  0 .

### int

Input to the sine function in radians

Arguments:

- input
  [int]

### float

Input to the sine function in radians

Arguments:

- input
  [float]

## Output

### float or int

The sine of the input in radians.

## See Also

| Name | Description |
| --- | --- |
| [asin](https://docs.cycling74.com/reference/asin) | Arc-sine function |
| [asinh](https://docs.cycling74.com/reference/asinh) | Hyperbolic arc-sine function |
| [sinh](https://docs.cycling74.com/reference/sinh) | Hyperbolic sine function |
