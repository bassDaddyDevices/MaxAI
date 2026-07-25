---
type: max
name: "clip"
summary: "Limit numbers to a range"
signal: false
url: "https://docs.cycling74.com/reference/clip/"
package: "Max"
see_also: ["maximum", "minimum", "split", "<", "<=", ">", ">="]
---
# clip

Limit numbers to a range

## Arguments

### minimum[number] optional

The minimum value is the lower limit to the range of output values allowed. If only one argument is present, it is used as both the minimum and maximum limit. If no argument is present, the minimum and maximum limit is 0.

### maximum[number] optional

The maximum value is the upper limit to the range of output values allowed. If only one argument is present, it is used as both the minimum and maximum limit. If no argument is present, the minimum and maximum limit is 0.

## Attributes

### mode[int]: 0

When the mode attribute is non-zero, [clip](https://docs.cycling74.com/reference/clip) outputs 0 for values above its maximum or below its minimum to 0. When mode is disabled, [clip](https://docs.cycling74.com/reference/clip) constrains its input between its minimum and maximum.

Possible values:

0 = 'Clip'
(
Clip input outside minimum and maxmimum
)
1 = 'Zero'
(
Zero input outside minimum and maxmimum
)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

The number is sent out the outlet, constrained within the minimum and maximum limits specified by the minimum and maximum limits. The [clip](https://docs.cycling74.com/reference/clip) object adapts the clipped output values to its input, so an integer input value will output an integer value regardless of the numeric type specified as an argument.

Arguments:

- input
  [int]

### float

The number is sent out the outlet, constrained within the minimum and maximum limits. The [clip](https://docs.cycling74.com/reference/clip) object adapts the clipped output values to its input, so a floating point input value will output a floating point value regardless of the numeric type specified as an argument.

Arguments:

- input
  [float]

### list

Each number in the list is constrained within the minimum and maximum limits, and the constrained numbers are sent out as a list.

Arguments:

- input
  [list]

### set

The word  set , followed by two numbers, resets the minimum and maximum limits.

Arguments:

- minimum/maximum
  [list]

## Output

### float

If the received number is a  float , it is constrained within the specified minimum and maximum limits, then sent out the outlet as a  float .

### int

When an  int  is received in the inlet, it is constrained within the specified minimum and maximum limits, then sent out the outlet. If the received number is less than the minimum limit, the minimum value is sent out; if the received number is greater than the maximum limit, the maximum value is sent out.

### list

When a  list  is received in the inlet, each number is constrained within the specified minimum and maximum limits, and the numbers are sent out as a list.

## See Also

| Name | Description |
| --- | --- |
| [maximum](https://docs.cycling74.com/reference/maximum) | Output the highest value |
| [minimum](https://docs.cycling74.com/reference/minimum) | Output the smallest value |
| [split](https://docs.cycling74.com/reference/split) | Look for a range of numbers |
| [<](https://docs.cycling74.com/reference/lessthan) | Compare numbers for less than condition |
| [<=](https://docs.cycling74.com/reference/lessthaneq) | Compare numbers as less than or equal to |
| [>](https://docs.cycling74.com/reference/greaterthan) | Compare numbers for greater than condition |
| [>=](https://docs.cycling74.com/reference/greaterthaneq) | Compare numbers for greater than or equal to condition |
