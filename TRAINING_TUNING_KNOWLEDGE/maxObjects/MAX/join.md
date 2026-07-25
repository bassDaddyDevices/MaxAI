---
type: max
name: "join"
summary: "Combine items into a list"
signal: false
url: "https://docs.cycling74.com/reference/join/"
package: "Max"
see_also: ["pack", "pak", "unjoin", "unpack"]
---
# join

Combine items into a list

## Description

Takes separate untyped items and combines them into an output list.

## Arguments

### inlets[int] optional

Specifies the number of inlets. If there is no argument, there will be two inlets, and the two list items will be set to (int) 0 initially.

## Attributes

### triggers[256 ints]

Define a list of inputs that will automatically trigger output (i.e. adding an input to this list will make the inlet "hot"). Setting the attribute value to -1 will cause the object to trigger output for any inlet (all inlets will be "hot").

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In either inlet: Causes [join](https://docs.cycling74.com/reference/join) to send out a list composed of the currently stored items.

### int

The number is stored in the [join](https://docs.cycling74.com/reference/join) object as an item in a list with its position in the list corresponding to the inlet in which it was received. If the inlet is a 'trigger' input, the entire list is sent out the outlet.

Arguments:

- input
  [int]

### float

The number is stored in the [join](https://docs.cycling74.com/reference/join) object as an item in a list with its position in the list corresponding to the inlet in which it was received. If the inlet is a 'trigger' input, the entire list is sent out the outlet.

Arguments:

- input
  [float]

### list

The list is stored in the [join](https://docs.cycling74.com/reference/join) object as an array of items in a list with its position in the list corresponding to the inlet in which it was received. If the inlet is a 'trigger' input, the entire list is sent out the outlet.

Arguments:

- values
  [list]

### anything

The message with its arguments is stored in the [join](https://docs.cycling74.com/reference/join) object as an array of items in a list with its position in the list corresponding to the inlet in which it was received. If the inlet is a 'trigger' input, the entire list is sent out the outlet.

Arguments:

- values
  [list]

### set

The list is stored in the [join](https://docs.cycling74.com/reference/join) object as an array of items in a list with its position in the list corresponding to the inlet in which it was received.

Arguments:

- values
  [list]

## See Also

| Name | Description |
| --- | --- |
| [pack](https://docs.cycling74.com/reference/pack) | Create a list |
| [pak](https://docs.cycling74.com/reference/pak) | Output a list when any element changes |
| [unjoin](https://docs.cycling74.com/reference/unjoin) | Break a list into messages |
| [unpack](https://docs.cycling74.com/reference/unpack) | Break a list into individual messages |
