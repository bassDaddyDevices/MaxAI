---
type: max
name: "pak"
summary: "Output a list when any element changes"
signal: false
url: "https://docs.cycling74.com/reference/pak/"
package: "Max"
see_also: ["bondo", "buddy", "join", "match", "swap", "thresh", "unjoin", "unpack", "zl"]
---
# pak

Output a list when any element changes

## Description

The [pak](https://docs.cycling74.com/reference/pak) object (pronounced "pock") offers much of the functionality of [pack](https://docs.cycling74.com/reference/pack), but outputs the entire list whenever input is received in any inlet.

## Arguments

### list-elements[any] optional

The number of inlets is determined by the number of arguments. Each argument sets an initial type and value for an item in the list produced by [pak](https://docs.cycling74.com/reference/pak). If there are no arguments, the object will be created with two inlets, and the two list elements will be set to (int) 0 initially.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Output currently stored list

### int

The number is stored as an item in a list, with its position in the list corresponding to the inlet in which it was received, then the entire list is output. If the inlet has been initialized with a float or symbol argument, the incoming number will be converted to a float or a blank symbol.

Arguments:

- input
  [int]

### float

The number is stored as an item in a list, with its position in the list corresponding to the inlet in which it was received, then the entire list is output. If the inlet has been initialized with an int or symbol argument, the incoming number will be converted to an int or a (blank) symbol.

Arguments:

- input
  [float]

### list

Any multi-item message is treated as a list. The first item in the incoming list is stored in in the location that corresponds to the inlet in which it was received. Each subsequent item is stored as if it had arrived in subsequent inlets (limited to the number of inlets available). After all values are stored, the list is output.

Arguments:

- input
  [list]

### anything

Performs the same function as  list .

Arguments:

- input
  [list]

### set

Set data without output

Arguments:

- message
  [list]

## Output

### list

The length of the list is determined by the number of arguments. When input is received in any inlet, the stored list is sent out the outlet.

## See Also

| Name | Description |
| --- | --- |
| [bondo](https://docs.cycling74.com/reference/bondo) | Synchronize a group of messages |
| [buddy](https://docs.cycling74.com/reference/buddy) | Synchronize arriving data |
| [join](https://docs.cycling74.com/reference/join) | Combine items into a list |
| [match](https://docs.cycling74.com/reference/match) | Watch for a message match, then output the message |
| [swap](https://docs.cycling74.com/reference/swap) | Swap position of two numbers |
| [thresh](https://docs.cycling74.com/reference/thresh) | Combine numbers, symbols and lists when received close together |
| [unjoin](https://docs.cycling74.com/reference/unjoin) | Break a list into messages |
| [unpack](https://docs.cycling74.com/reference/unpack) | Break a list into individual messages |
| [zl](https://docs.cycling74.com/reference/zl) | Process lists in many ways |
