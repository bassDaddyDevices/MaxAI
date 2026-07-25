---
type: max
name: "plus"
summary: "Add two numbers, output the result"
signal: false
url: "https://docs.cycling74.com/reference/plus/"
package: "Max"
see_also: ["expr"]
---
# plus

Add two numbers, output the result

## Arguments

### initial[int or float] optional

Sets the initial value, to be added to a number received in the left inlet. A float argument causes the numbers to be added as floats.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Performs the addition with the numbers currently stored. If there is no argument, [+](https://docs.cycling74.com/reference/plus) initially holds  0 .

### int

The number is added to the number in the right inlet, and the result is sent out the outlet.

Arguments:

- input
  [int]

### (inlet1)

The number is stored for addition to a number received in the left inlet.

Arguments:

- value-added-to
  [int]

### float

Converted to  int , unless [+](https://docs.cycling74.com/reference/plus) has a float argument.

Arguments:

- input
  [float]

### set

In left inlet: The word  set , followed by a number, adds that number to the number in the right inlet but nothing is sent out. A subsequent  bang  sends out the result.

Arguments:

- set-input
  [int]

### list

In left inlet: The first number is added to the second number, and the result is sent out the outlet.

Arguments:

- input
  [list]

## Output

### float

Only if there is an argument with a decimal point.

### int

The sum of the two numbers received in the inlets.

## See Also

| Name | Description |
| --- | --- |
| [expr](https://docs.cycling74.com/reference/expr) | Evaluate a mathematical expression |
