---
type: max
name: "asinh"
summary: "Hyperbolic arc-sine function"
signal: false
url: "https://docs.cycling74.com/reference/asinh/"
package: "Max"
see_also: ["asin", "sin", "sinh"]
---
# asinh

Hyperbolic arc-sine function

## Description

Use the [asinh](https://docs.cycling74.com/reference/asinh) object to calculate and output the hyperbolic arc-sine of any given number.

## Arguments

### initial-value[float or int] optional

Sets the initial value for the hyperbolic arc-sine function.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Calculates the hyperbolic arc-sine of the number currently stored. If there is no argument, [asin](https://docs.cycling74.com/reference/asin) initially holds  0 .

### int

Input to the hyperbolic arc-cosine function

Arguments:

- input
  [int]

### float

Input to the hyperbolic arc-cosine function

Arguments:

- input
  [float]

## Output

### float

The hyperbolic arc-sine of the input.

### int

The hyperbolic arc-sine of the input.

## See Also

| Name | Description |
| --- | --- |
| [asin](https://docs.cycling74.com/reference/asin) | Arc-sine function |
| [sin](https://docs.cycling74.com/reference/sin) | Sine function |
| [sinh](https://docs.cycling74.com/reference/sinh) | Hyperbolic sine function |
