---
type: max
name: "minimum"
summary: "Output the smallest value"
signal: false
url: "https://docs.cycling74.com/reference/minimum/"
package: "Max"
see_also: ["maximum", "trough", "<"]
---
# minimum

Output the smallest value

## Description

Watches an input stream for any numbers which are less than its most recently set minimum. If the input value is greater than or equal to the minimum, the minimum value is output. If the input value is less, that value is output.

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

In left inlet: If the number is less than the value currently stored in [minimum](https://docs.cycling74.com/reference/minimum), it is sent out the outlet. Otherwise, the stored value is sent out.

Arguments:

- input
  [int]

### (inlet1)

In right inlet: The number is stored for comparison with subsequent numbers received in the left inlet.

Arguments:

- value
  [int]

### float

In left inlet: Converted to  int , unless there is a float argument, in which case all numbers are compared as floats.

Arguments:

- input
  [float]

### (inlet1)

In right inlet: Converted to  int , unless there is a float argument, in which case all numbers are compared as floats.

Arguments:

- comparison-value
  [float]

### list

In left inlet: The numbers in the list are all compared to each other, and the smallest value is sent out the outlet. The value stored in [minimum](https://docs.cycling74.com/reference/minimum) is replaced by the next smallest value in the list. The [minimum](https://docs.cycling74.com/reference/minimum) object accepts lists of up to 256 elements.

Arguments:

- input
  [list]

## Output

### float

Floats are output only if there is an argument with a decimal point.

### int

The number received in the left inlet is compared with the value currently held by [minimum](https://docs.cycling74.com/reference/minimum) (or numbers received as a list are compared with each other), and the smallest of the numbers is sent out the outlet.

## See Also

| Name | Description |
| --- | --- |
| [maximum](https://docs.cycling74.com/reference/maximum) | Output the highest value |
| [trough](https://docs.cycling74.com/reference/trough) | Output a number if it is less than previous numbers |
| [<](https://docs.cycling74.com/reference/lessthan) | Compare numbers for less than condition |
