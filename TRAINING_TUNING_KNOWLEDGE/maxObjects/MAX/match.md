---
type: max
name: "match"
summary: "Watch for a message match, then output the message"
signal: false
url: "https://docs.cycling74.com/reference/match/"
package: "Max"
see_also: ["iter", "join", "pack", "select"]
---
# match

Watch for a message match, then output the message

## Description

Watches an incoming stream of ints, floats, symbols, lists, or messages, and outputs the stream after it has met the specification of its arguments.

## Arguments

### match-list[list] optional

The arguments specify numbers to look for, in the proper order. The word  nn  can be used as a wild card that will match any number.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

If the numbers match the arguments, in the proper order, they are sent out as a list.

Arguments:

- input
  [int]

### float

If the numbers match the arguments, in the proper order, they are sent out as a list.

Arguments:

- input
  [float]

### list

If the input-list matches the arguments, in the proper order, they are sent out as a list.

Arguments:

- input
  [list]

### anything

Performs the same as  list .

Arguments:

- input
  [list]

### clear

Causes [match](https://docs.cycling74.com/reference/match) to forget all numbers it has received up to that time.

### set

The word  set , followed by a list of numbers, specifies a new series of numbers [match](https://docs.cycling74.com/reference/match) will look for.

Arguments:

- match-list
  [list]

## Output

### list

The numbers received in the inlet are compared with the arguments. If the numbers are the same, and in the same order, they are sent out the outlet as a list.

## See Also

| Name | Description |
| --- | --- |
| [iter](https://docs.cycling74.com/reference/iter) | Break a list into individual messages |
| [join](https://docs.cycling74.com/reference/join) | Combine items into a list |
| [pack](https://docs.cycling74.com/reference/pack) | Create a list |
| [select](https://docs.cycling74.com/reference/select) | Output bangs based on input matching |
