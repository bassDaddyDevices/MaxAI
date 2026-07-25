---
type: max
name: "abs"
summary: "Calculate an absolute value"
signal: false
url: "https://docs.cycling74.com/reference/abs/"
package: "Max"
see_also: ["expr"]
---
# abs

Calculate an absolute value

## Description

Outputs the absolute (non-negative) value of any given number. Floats will be output only if the argument to [abs](https://docs.cycling74.com/reference/abs) is a float.

## Arguments

### format[number] optional

Float argument forces a float output.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

The absolute (non-negative) value of the input is sent out the output.

Arguments:

- input
  [int]

### float

Converted to  int , unless [abs](https://docs.cycling74.com/reference/abs) has a float argument.

Arguments:

- input
  [float]

## Output

### float

Floats are output only if there is an argument with a decimal point.

### int

The absolute value of the input.

## See Also

| Name | Description |
| --- | --- |
| [expr](https://docs.cycling74.com/reference/expr) | Evaluate a mathematical expression |
