---
type: max
name: "sqrt"
summary: "Square root function"
signal: false
url: "https://docs.cycling74.com/reference/sqrt/"
package: "Max"
see_also: ["expr"]
---
# sqrt

Square root function

## Description

Calculates and outputs the square-root of any given number.

## Arguments

### initial[int or float] optional

An optional argument specifies the value whose square root is to be output.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Outputs the currently stored square root value.

### int

A given number will cause the object to output the square root of that number. A negative input has no real solution, so it causes an output of  NaN  (Not a Number).

Arguments:

- input
  [int]

### float

A given number will cause the object to output the square root of that number. A negative input has no real solution, so it causes an output of  NaN  (Not a Number).

Arguments:

- input
  [float]

## Output

### float

The square root of the input.

## See Also

| Name | Description |
| --- | --- |
| [expr](https://docs.cycling74.com/reference/expr) | Evaluate a mathematical expression |
