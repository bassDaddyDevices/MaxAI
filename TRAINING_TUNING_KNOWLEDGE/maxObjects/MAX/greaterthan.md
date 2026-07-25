---
type: max
name: "greaterthan"
summary: "Compare numbers for greater than condition"
signal: false
url: "https://docs.cycling74.com/reference/greaterthan/"
package: "Max"
see_also: ["!=", "<", "<=", "==", ">="]
---
# greaterthan

Compare numbers for greater than condition

## Description

Compares two values to see if one value is greater than a second. Outputs a 1 if the number is greater than the comparison-number or 0 if it is less than or equal to it.

## Arguments

### initial-comparison-value[number] optional

Sets the initial value, to be compared with a number received in the left inlet. A float argument forces a float comparison.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Performs the comparison with the numbers currently stored. If there is no argument, [>](https://docs.cycling74.com/reference/greaterthan) initially holds  0  for comparison.

### int

In left inlet: If the number is greater than the number in the right inlet, [>](https://docs.cycling74.com/reference/greaterthan) outputs  1 . Otherwise, [>](https://docs.cycling74.com/reference/greaterthan) outputs  0 .

Arguments:

- input
  [int]

### (inlet1)

In right inlet: The number is stored to be compared with a number received in the left inlet.

Arguments:

- comparison-value
  [int]

### float

Converted to  int  before comparison, unless [>](https://docs.cycling74.com/reference/greaterthan) has a float argument.

Arguments:

- input
  [float]

### set

The word  set  followed by a number will set the input number to the object without causing output.

Arguments:

- set-input
  [int]

## Output

### int

1 if the number in the left inlet is greater than the number in the right inlet.  0  if the number in the left inlet is less than or equal to the number in the right inlet.

## See Also

| Name | Description |
| --- | --- |
| [!=](https://docs.cycling74.com/reference/notequals) | Compare numbers for not-equal-to condition |
| [<](https://docs.cycling74.com/reference/lessthan) | Compare numbers for less than condition |
| [<=](https://docs.cycling74.com/reference/lessthaneq) | Compare numbers as less than or equal to |
| [==](https://docs.cycling74.com/reference/equals) | Compare numbers for equal-to condition |
| [>=](https://docs.cycling74.com/reference/greaterthaneq) | Compare numbers for greater than or equal to condition |
