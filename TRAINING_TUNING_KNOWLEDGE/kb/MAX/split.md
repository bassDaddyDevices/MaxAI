---
type: max
name: "split"
summary: "Look for a range of numbers"
signal: false
url: "https://docs.cycling74.com/reference/split/"
package: "Max"
see_also: ["route", "select", "<=", ">="]
---
# split

Look for a range of numbers

## Description

Check if input can fall within a specified range. If it falls within that range, it sends the number out the left outlet and if it does not, then it sends the number out the right outlet.

## Arguments

### minimum[number] optional

The first argument sets the minimum value to be sent out the left outlet. If the first argument is an int, then the [split](https://docs.cycling74.com/reference/split) object will convert all float values to ints.

### maximum[number] optional

The second argument sets the maximum value to be sent out the left outlet. If the first argument to split is an int, the output is int. If it is float, the output is float. This is true regardless of the type of the input.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: If the number is within a specified range, it is sent out the left outlet. Otherwise, it is sent out the right outlet.

In middle inlet: The number is stored as the minimum value in the range of numbers looked for by [split](https://docs.cycling74.com/reference/split). If the number is an int, then the [split](https://docs.cycling74.com/reference/split) object will convert all float values to ints.

In right inlet: The number is stored as the maximum value in the range of numbers looked for by [split](https://docs.cycling74.com/reference/split).

Arguments:

- input
  [int]

### float

In left inlet: If the number is within a specified range, it is sent out the left outlet. Otherwise, it is sent out the right outlet.

In middle inlet: The number is stored as the minimum value in the range of numbers looked for by [split](https://docs.cycling74.com/reference/split). If the number is an int, then the [split](https://docs.cycling74.com/reference/split) object will convert all float values to ints.

In right inlet: The number is stored as the maximum value in the range of numbers looked for by [split](https://docs.cycling74.com/reference/split).

Arguments:

- input
  [float]

## Output

### int

If the number received in the left inlet is greater than or equal to the specified minimum, and it is less than or equal to the specified maximum, it is sent out the left outlet. Otherwise, it is sent out the right outlet.

## See Also

| Name | Description |
| --- | --- |
| [route](https://docs.cycling74.com/reference/route) | Select outlet based on input matching |
| [select](https://docs.cycling74.com/reference/select) | Output bangs based on input matching |
| [<=](https://docs.cycling74.com/reference/lessthaneq) | Compare numbers as less than or equal to |
| [>=](https://docs.cycling74.com/reference/greaterthaneq) | Compare numbers for greater than or equal to condition |
