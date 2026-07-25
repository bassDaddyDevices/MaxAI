---
type: max
name: "asin"
summary: "Arc-sine function"
signal: false
url: "https://docs.cycling74.com/reference/asin/"
package: "Max"
see_also: ["asinh", "sin", "sinh"]
---
# asin

Arc-sine function

## Description

Use the [asin](https://docs.cycling74.com/reference/asin) object to calculate and output the arc-sine of any given number.

## Arguments

### initial-value[float or int] optional

Sets the initial value for the arc-sine function.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Calculates the arc-sine of the number currently stored. If there is no argument, [asin](https://docs.cycling74.com/reference/asin) initially holds  0 .

### int

Input to the arc-sine function

Arguments:

- input
  [int]

### float

Input to the arc-sine function

Arguments:

- input
  [float]

## Output

### float

The arc-sine of the input.

### int

The arc-sine of the input.

## See Also

| Name | Description |
| --- | --- |
| [asinh](https://docs.cycling74.com/reference/asinh) | Hyperbolic arc-sine function |
| [sin](https://docs.cycling74.com/reference/sin) | Sine function |
| [sinh](https://docs.cycling74.com/reference/sinh) | Hyperbolic sine function |
