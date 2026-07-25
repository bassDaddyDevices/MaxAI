---
type: max
name: "maximum"
summary: "Output the highest value"
signal: false
url: "https://docs.cycling74.com/reference/maximum/"
package: "Max"
see_also: ["minimum", "past", "peak", ">"]
---
# maximum

Output the highest value

## Description

Watches an input stream for any numbers which are greater than its most recently set maximum. If the input value is less than or equal to the maximum, the maximum value is output. If the input value is greater, that value is output.

## Arguments

### initial[int or float] optional

Sets an initial value to be compared with numbers received in the left inlet. If the argument contains a decimal point, all numbers are compared as floats, and the output is a float. If there is no argument, the initial value is 0.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Sends the most recent output out the outlet again.

### int

In left inlet: If the number is greater than the value currently stored in [maximum](https://docs.cycling74.com/reference/maximum), it is sent out the outlet. Otherwise, the stored value is sent out.

Arguments:

- input
  [int]

### (inlet1)

In right inlet: The number is stored for comparison with subsequent numbers received in the left inlet.

Arguments:

- input
  [int]

### float

Converted to  int , unless there is a float argument, in which case all numbers are compared as floats.

Arguments:

- input
  [float]

### (inlet1)

Converted to  int , unless there is a float argument, in which case all numbers are compared as floats.

Arguments:

- input
  [float]

### list

In left inlet: The numbers in the list are all compared to each other, and the greatest value is sent out the outlet. The value stored in [maximum](https://docs.cycling74.com/reference/maximum) is replaced by the next greatest value in the list.The [maximum](https://docs.cycling74.com/reference/maximum) object accepts lists of up to 256 elements.

Arguments:

- input
  [list]

## Output

### float

The number received in the left inlet is compared with the value currently held by [maximum](https://docs.cycling74.com/reference/maximum) (or numbers received as a list are compared with each other), and the greatest of the numbers is sent out the outlet. Floats are output only if there is an argument with a decimal point.

### int

The number received in the left inlet is compared with the value currently held by [maximum](https://docs.cycling74.com/reference/maximum) (or numbers received as a list are compared with each other), and the greatest of the numbers is sent out the outlet.

## See Also

| Name | Description |
| --- | --- |
| [minimum](https://docs.cycling74.com/reference/minimum) | Output the smallest value |
| [past](https://docs.cycling74.com/reference/past) | Notify when a threshold is passed |
| [peak](https://docs.cycling74.com/reference/peak) | Output larger numbers |
| [>](https://docs.cycling74.com/reference/greaterthan) | Compare numbers for greater than condition |
