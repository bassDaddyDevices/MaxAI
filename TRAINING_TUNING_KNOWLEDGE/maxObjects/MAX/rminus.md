---
type: max
name: "rminus"
summary: "Subtraction object (inlets reversed)"
signal: false
url: "https://docs.cycling74.com/reference/rminus/"
package: "Max"
see_also: ["-", "expr"]
---
# rminus

Subtraction object (inlets reversed)

## Description

Subtracts the input from a specified value The [!-](https://docs.cycling74.com/reference/rminus) object functions just like the [-](https://docs.cycling74.com/reference/minus) object, but the inlets' functions are reversed.

## Arguments

### value[int or float] optional

Sets the initial value, to be subtracted from a number received in the left inlet. A  float  argument causes the numbers to be subtracted as floats.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Performs the subtraction with the numbers currently stored. If there is no argument, [!-](https://docs.cycling74.com/reference/rminus) initially holds 0.

### int

In left inlet: The number is stored, and will be subtracted from a number received in the right inlet.

Arguments:

- input
  [int]

### (inlet1)

In right inlet: The number in the left inlet is subtracted from the number, and the result is sent out the outlet.

Arguments:

- input
  [int]

### float

Converted to  int , unless [!-](https://docs.cycling74.com/reference/rminus) has a float argument.

Arguments:

- input
  [float]

### (inlet1)

Converted to  int , unless [!-](https://docs.cycling74.com/reference/rminus) has a float argument.

Arguments:

- input
  [float]

## Output

### float

Only if there is an argument with a decimal point.

### int

The difference between the two numbers received in the inlets.

## See Also

| Name | Description |
| --- | --- |
| [-](https://docs.cycling74.com/reference/minus) | Subtract two numbers, output the result |
| [expr](https://docs.cycling74.com/reference/expr) | Evaluate a mathematical expression |
