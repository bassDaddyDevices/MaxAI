---
type: max
name: "modulo"
summary: "Divide two numbers, output the remainder"
signal: false
url: "https://docs.cycling74.com/reference/modulo/"
package: "Max"
see_also: ["expr", "!/", "/"]
---
# modulo

Divide two numbers, output the remainder

## Description

[%](https://docs.cycling74.com/reference/modulo) takes two numbers, divides one by the other and outputs the remainder of the division.

## Arguments

### initial-value[int] optional

Sets an initial value for the divisor. If there is no argument, the divisor is set to  1  initially.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Performs the operation with the numbers currently stored.

### int

In left inlet: The number is divided by the number in the right inlet, and the remainder is sent out the outlet.

Arguments:

- input
  [int]

### (inlet1)

In right inlet: The number is stored as the divisor (the number to be divided into the number in the left inlet) for calculating the remainder.

Arguments:

- divisor
  [int]

### float

Converted to  int .

Arguments:

- input
  [float]

### set

Sets the number to be divided without causing output ( bang  will output it).

Arguments:

- set-input
  [int]

### list

In left inlet: The first number is divided by the second number, and the remainder is sent out the outlet.

Arguments:

- number-divided and divisor
  [list]

## Output

### int

When the two numbers in the inlets are divided, the remainder is sent out the outlet. [%](https://docs.cycling74.com/reference/modulo) is called the modulo operator.

## See Also

| Name | Description |
| --- | --- |
| [expr](https://docs.cycling74.com/reference/expr) | Evaluate a mathematical expression |
| [!/](https://docs.cycling74.com/reference/rdiv) | Divide input from a number |
| [/](https://docs.cycling74.com/reference/div) | Divide two numbers |
