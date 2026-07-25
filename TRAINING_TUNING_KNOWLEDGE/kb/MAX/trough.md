---
type: max
name: "trough"
summary: "Output a number if it is less than previous numbers"
signal: false
url: "https://docs.cycling74.com/reference/trough/"
package: "Max"
see_also: ["minimum", "peak", "<"]
---
# trough

Output a number if it is less than previous numbers

## Description

Compares an input value to the stored value and, if it's smaller it sends the input to the output and sets it as the new trough.

## Arguments

### value[float] optional

The initial value stored in [trough](https://docs.cycling74.com/reference/trough) is  128 . Providing a float argument will cause trough to operate on floating-point values instead of integers.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Sends the currently stored minimum value out the left outlet.

### int

In left inlet: If the input is less than the value currently stored in [trough](https://docs.cycling74.com/reference/trough), it is stored as the new minimum value and is sent out.

Arguments:

- input
  [int]

### (inlet1)

In right inlet: The input is stored in [trough](https://docs.cycling74.com/reference/trough) as the new minimum value, and is sent out.

Arguments:

- trough
  [int]

### float

In left inlet: If the input is less than the value currently stored in [trough](https://docs.cycling74.com/reference/trough), it is stored as the new minimum value and is sent out.

Arguments:

- input
  [float]

### (inlet1)

In right inlet: The input is stored in [trough](https://docs.cycling74.com/reference/trough) as the new minimum value, and is sent out.

Arguments:

- trough
  [float]

## Output

### int

Out left outlet: New minimum values are sent out. (Numbers received in the right inlet are always the new minimum value.)

Out middle outlet: If the number received is a new minimum value, the output is  1 . If the number received in the left inlet is not a new minimum value, the output is  0 .

Out right outlet: If the number received is a new minimum value, the output is  0 . If the number received in the left inlet is not a new minimum value, the output is  1 .

## See Also

| Name | Description |
| --- | --- |
| [minimum](https://docs.cycling74.com/reference/minimum) | Output the smallest value |
| [peak](https://docs.cycling74.com/reference/peak) | Output larger numbers |
| [<](https://docs.cycling74.com/reference/lessthan) | Compare numbers for less than condition |
