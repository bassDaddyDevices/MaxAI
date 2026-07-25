---
type: max
name: "acosh"
summary: "Hyperbolic arc-cosine function"
signal: false
url: "https://docs.cycling74.com/reference/acosh/"
package: "Max"
see_also: ["acos", "cos", "cosh"]
---
# acosh

Hyperbolic arc-cosine function

## Description

Use the [acosh](https://docs.cycling74.com/reference/acosh) object to calculate and output the hyperbolic arc-cosine of any given number.

## Arguments

### initial-value[float or int] optional

Sets the initial value for the hyperbolic arc-cosine function.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Calculates a hyperbolic arc-cosine of the number currently stored. If there is no argument, [acosh](https://docs.cycling74.com/reference/acosh) initially holds  0 .

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

The hyperbolic arc-cosine of the input.

### int

The hyperbolic arc-cosine of the input.

## See Also

| Name | Description |
| --- | --- |
| [acos](https://docs.cycling74.com/reference/acos) | Arc-cosine function |
| [cos](https://docs.cycling74.com/reference/cos) | Cosine function |
| [cosh](https://docs.cycling74.com/reference/cosh) | Hyperbolic cosine function |
