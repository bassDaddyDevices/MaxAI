---
type: max
name: "unjoin"
summary: "Break a list into messages"
signal: false
url: "https://docs.cycling74.com/reference/unjoin/"
package: "Max"
see_also: ["join", "pack", "pak", "unpack"]
---
# unjoin

Break a list into messages

## Description

Separates a list's elements by group, and send each group of items out a separate outlet.

## Arguments

### outlets[int] optional

Specifies the number of outlets (in addition to the rightmost outlet, which is always present).

## Attributes

### outsize[atom\_long]: 1

Defines the number of items to be sent out the outlets.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

The number is sent out the left outlet.

Arguments:

- input
  [int]

### float

The number is sent out the left outlet.

Arguments:

- input
  [float]

### list

Items from the input list are separated into lists containing the number of elements specified by the
outsize
attribute and sent out the outlet corresponding to their group position in the list. Any remaining items are sent out the right outlet.

Arguments:

- input
  [list]

### anything

Performs the same function as  list .

Arguments:

- input
  [list]

## See Also

| Name | Description |
| --- | --- |
| [join](https://docs.cycling74.com/reference/join) | Combine items into a list |
| [pack](https://docs.cycling74.com/reference/pack) | Create a list |
| [pak](https://docs.cycling74.com/reference/pak) | Output a list when any element changes |
| [unpack](https://docs.cycling74.com/reference/unpack) | Break a list into individual messages |
