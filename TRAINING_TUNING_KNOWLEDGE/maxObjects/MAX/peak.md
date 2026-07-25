---
type: max
name: "peak"
summary: "Output larger numbers"
signal: false
url: "https://docs.cycling74.com/reference/peak/"
package: "Max"
see_also: ["maximum", "past", "trough", ">"]
---
# peak

Output larger numbers

## Description

Compares a number to a previous peak-value and, if larger, it is sent out the output while the new peak-value is set to that number.

## Arguments

### format[float] optional

The initial value stored in [peak](https://docs.cycling74.com/reference/peak) is  0 . Providing a float argument will cause peak to operate with floating point numbers instead of integers.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends the currently stored peak value out the left outlet.

### int

In left inlet: If the input is greater than the value currently stored in [peak](https://docs.cycling74.com/reference/peak), it is stored as the new peak value and is sent out.

Arguments:

- input
  [int]

### (inlet1)

In right inlet: The number is stored in peak as the new peak value, and is sent out.

Arguments:

- input
  [int]

### float

In left inlet: If the input is greater than the value currently stored in [peak](https://docs.cycling74.com/reference/peak), it is stored as the new peak value and is sent out.

Arguments:

- input
  [float]

### (inlet1)

In right inlet: The number is stored in peak as the new peak value, and is sent out.

Arguments:

- input
  [float]

### list

In left inlet: The second number is stored as the new peak value and is sent out, then the first number is received in the left inlet.

Arguments:

- input
  [number]
- peak
  [number]

## Output

### int

Out left outlet: New peak values are sent out. (A number received in the right inlet is always the new peak value.)

Out middle outlet: If the number received is a new peak value, the output is  1 . If the number received in the left inlet is not a new peak value, the output is  0 .

Out right outlet: If the number received is a new peak value, the output is  0 . If the number received in the left inlet is not a new peak value, the output is  1 .

## See Also

| Name | Description |
| --- | --- |
| [maximum](https://docs.cycling74.com/reference/maximum) | Output the highest value |
| [past](https://docs.cycling74.com/reference/past) | Notify when a threshold is passed |
| [trough](https://docs.cycling74.com/reference/trough) | Output a number if it is less than previous numbers |
| [>](https://docs.cycling74.com/reference/greaterthan) | Compare numbers for greater than condition |
