---
type: max
name: "change"
summary: "Filter out repetitions of a number"
signal: false
url: "https://docs.cycling74.com/reference/change/"
package: "Max"
see_also: ["peak", "togedge", "trough"]
---
# change

Filter out repetitions of a number

## Description

Output a number only if it is different from the stored number and will reset the stored number to that differing input number. Alternate modes of operation also identify greater-than or less-than the conditions.

## Arguments

### initial-value[int or float] optional

Sets the initial value for comparison to incoming numbers. If there is no argument, the initial value is  0 .

### mode[symbol] optional

A second argument may be  +  or - , a change to  mode +  or  mode - . Subsequent  mode  messages can change this behavior.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

The number is sent out the outlet only if it is different from the currently stored value. Replaces the stored value.

Arguments:

- input
  [int]

### float

Outputs the number only if it is different from the currently stored value. Replaces the stored value.

Arguments:

- input
  [float]

### mode

Sets the detection mode of [change](https://docs.cycling74.com/reference/change). The word  mode , followed by a  + , causes [change](https://docs.cycling74.com/reference/change) to send a  1  out its left outlet if the received number is greater than the previously received number.

The word  mode , followed by a - , causes [change](https://docs.cycling74.com/reference/change) to send out a -1  if the received number is less than the previously received number.

The word  mode  by itself returns [change](https://docs.cycling74.com/reference/change) to its default mode of sending out received values that differ from the previously received input.

Arguments:

- flag (+ or -)
  [symbol]

### set

Replaces the stored value without triggering output.

Arguments:

- stored value
  [number]

## Output

### int

Out left outlet: The number received in the inlet is sent out only if it is different from the stored value.

Out middle outlet: If the stored value is 0 and the input is not 0,  1  is sent out; otherwise nothing is sent out.

Out right outlet: If the stored value is not 0 and the input is 0,  1  is sent out; otherwise nothing is sent out.

## See Also

| Name | Description |
| --- | --- |
| [peak](https://docs.cycling74.com/reference/peak) | Output larger numbers |
| [togedge](https://docs.cycling74.com/reference/togedge) | Report zero/non-zero transitions |
| [trough](https://docs.cycling74.com/reference/trough) | Output a number if it is less than previous numbers |
