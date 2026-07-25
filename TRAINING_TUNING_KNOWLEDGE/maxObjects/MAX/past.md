---
type: max
name: "past"
summary: "Notify when a threshold is passed"
signal: false
url: "https://docs.cycling74.com/reference/past/"
package: "Max"
see_also: ["maximum", "peak", ">"]
---
# past

Notify when a threshold is passed

## Description

Sends a bang when a number rises above a certain specified value.

## Arguments

### list[list] optional

Sets the numbers which must be exceeded by the numbers received in the inlet. Output will be triggered when any of the threshold values are met or exceeded.

### number[int] optional

Triggers output when the number is met or exceeded.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

If there is only one argument, and the input is greater than the argument, and the previous input was not greater than or equal to it, [past](https://docs.cycling74.com/reference/past) sends a  bang  out the outlet.

Arguments:

- input
  [int]

### float

If there is only one argument, and the input is greater than the argument, and the previous input was not greater than or equal to it, [past](https://docs.cycling74.com/reference/past) sends a  bang  out the outlet.

Arguments:

- input
  [float]

### list

The numbers in the list are compared to the arguments. If all of the numbers in the list are greater than or equal to the corresponding arguments, a  bang  is sent out the outlet. Before a  bang  is sent again, however, [past](https://docs.cycling74.com/reference/past) must receive a  clear  message, or must receive another list in which the number that equaled or exceeded its argument goes back below (is less than) its argument.

Arguments:

- input
  [list]

### clear

Causes [past](https://docs.cycling74.com/reference/past) to forget previously received input, readying it to send a  bang  message again.

### set

The word  set , followed by one or more numbers, sets the numbers which must be equaled or exceeded by the numbers received in the [past](https://docs.cycling74.com/reference/past) object's inlet.

Arguments:

- watch-list
  [list]

## Output

### bang

If all of the arguments are equaled or exceeded by the numbers received in the inlet, [past](https://docs.cycling74.com/reference/past) sends out a  bang . Otherwise, [past](https://docs.cycling74.com/reference/past) does nothing. If there is a single argument, a  bang  is sent only as a number increases past its threshold. Once the threshold has been passed, the number must go below the threshold again, then increase past it, before another  bang  will be sent.

## See Also

| Name | Description |
| --- | --- |
| [maximum](https://docs.cycling74.com/reference/maximum) | Output the highest value |
| [peak](https://docs.cycling74.com/reference/peak) | Output larger numbers |
| [>](https://docs.cycling74.com/reference/greaterthan) | Compare numbers for greater than condition |
