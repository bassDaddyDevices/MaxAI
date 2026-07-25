---
type: max
name: "logor"
summary: "Perform a logical OR"
signal: false
url: "https://docs.cycling74.com/reference/logor/"
package: "Max"
see_also: ["&", "&&", "|"]
---
# logor

Perform a logical OR

## Description

Compares one number to another and outputs a  1  if the either number is non-zero or a  0  if both number are 0.

## Arguments

### comparison-value[int] optional

Sets an initial value to be stored by [||](https://docs.cycling74.com/reference/logor). A number in the right inlet changes the value set by the argument.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Performs the operation with the numbers currently stored. If there is no argument, [||](https://docs.cycling74.com/reference/logor) initially holds  0 .

### int

If the number in either inlet is not 0, then the output is  1 . If the number in both of the inlets is 0, then the output is  0 . A number in the left inlet triggers the output.

Arguments:

- input
  [int]

### (inlet1)

In right inlet: The number is compared to the number in the left inlet to determine output but only a number in the left inlet will trigger output.

Arguments:

- comparison-value
  [int]

### float

Converted to  int .

Arguments:

- input
  [float]

### set

The word  set  followed by a number will set the input value without causing output.

Arguments:

- set-input
  [int]

## Output

### int

If either the number in the left inlet or the number in the right inlet (or specified by the argument) is not 0, then the output is  1 . Otherwise, the output is  0 .

## See Also

| Name | Description |
| --- | --- |
| [&](https://docs.cycling74.com/reference/bitand) | Bitwise intersection of two numbers |
| [&&](https://docs.cycling74.com/reference/logand) | Perform a logical AND |
| [|](https://docs.cycling74.com/reference/bitor) | Bitwise union of two numbers |
