---
type: max
name: "pack"
summary: "Create a list"
signal: false
url: "https://docs.cycling74.com/reference/pack/"
package: "Max"
see_also: ["bondo", "buddy", "join", "match", "pak", "swap", "thresh", "unjoin", "unpack", "zl"]
---
# pack

Create a list

## Description

Combine items into an output list. The arguments determine the list format and types of the list elements. The number of inlets is based on the number of arguments.

## Arguments

### list-elements[any] optional

The number of inlets is determined by the number of arguments. Each argument sets an initial type and value for an item in the list produced by [pack](https://docs.cycling74.com/reference/pack). If there are no arguments, the object will be created with two inlets, and the two list elements will be set to (int) 0 initially.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Output currently stored list

### int

The number is stored as an item in a list, with its position in the list corresponding to the inlet in which it was received. A number in the left inlet also causes the list to be output. If the inlet has been initialized with a float or symbol argument, the incoming number will be converted to a float or a blank symbol.

Arguments:

- input
  [int]

### float

The number is stored as an item in a list, with its position in the list corresponding to the inlet in which it was received. A number in the left inlet also causes the entire list to be the output. If the inlet has been initialized with an int or symbol argument, the incoming number will be converted to an int or a (blank) symbol.

Arguments:

- input
  [float]

### list

Any multi-item message is treated as a list. The first item in the incoming list is stored in in the location that corresponds to the inlet in which it was received. Each subsequent item is stored as if it had arrived in subsequent inlets (limited to the number of inlets available). A list received in the left inlet causes the entire stored list to be sent out the outlet.

Arguments:

- input
  [list]

### anything

Performs the same function as  list .

Arguments:

- input
  [list]

### nth

The  nth  message will output the stored list element at the index. Output is sent from the first outlet.

Arguments:

- index
  [int]

### send

Sends the stored list to all [receive](https://docs.cycling74.com/reference/receive) objects with a matching name.

Arguments:

- receive-name
  [list]

### set

Sets the values without causing list output. Although the  set  message works with any inlet, it is only meaningful in the left inlet, which is the only inlet that will trigger output.

Arguments:

- input
  [list]

### symbol

Stores the symbol in the list at the position corresponding to the inlet it was received. If the list element was initialized as a number, the symbol is converted to 0 before being stored. A symbol in the left inlet triggers output of the list.

Arguments:

- input
  [symbol]

## Output

### any

When the  nth  message is received, the value of the specified item is sent out.

### list

The length of the list is determined by the number of arguments. When input is received in the left inlet, the stored list is sent out the outlet.

## See Also

| Name | Description |
| --- | --- |
| [bondo](https://docs.cycling74.com/reference/bondo) | Synchronize a group of messages |
| [buddy](https://docs.cycling74.com/reference/buddy) | Synchronize arriving data |
| [join](https://docs.cycling74.com/reference/join) | Combine items into a list |
| [match](https://docs.cycling74.com/reference/match) | Watch for a message match, then output the message |
| [pak](https://docs.cycling74.com/reference/pak) | Output a list when any element changes |
| [swap](https://docs.cycling74.com/reference/swap) | Swap position of two numbers |
| [thresh](https://docs.cycling74.com/reference/thresh) | Combine numbers, symbols and lists when received close together |
| [unjoin](https://docs.cycling74.com/reference/unjoin) | Break a list into messages |
| [unpack](https://docs.cycling74.com/reference/unpack) | Break a list into individual messages |
| [zl](https://docs.cycling74.com/reference/zl) | Process lists in many ways |
