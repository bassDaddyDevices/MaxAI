---
type: max
name: "unpack"
summary: "Break a list into individual messages"
signal: false
url: "https://docs.cycling74.com/reference/unpack/"
package: "Max"
see_also: ["iter", "listfunnel", "join", "pack", "pak", "spray", "unjoin", "zl"]
---
# unpack

Break a list into individual messages

## Description

Breaks a list into its elements, and sends each item out a separate outlet.

## Arguments

### list-elements[any] optional

The number of outlets is determined by the number of arguments. The arguments can be any combination of ints, floats, and symbols. The argument specifies the output of the [unpack](https://docs.cycling74.com/reference/unpack) object's outlets; the input type is forced to the outlet type that is defined. If no argument is typed in, [unpack](https://docs.cycling74.com/reference/unpack) will have two int outlets.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Causes each stored item of a list to be sent out the corresponding outlet.

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

Each item in the list (up to the number of outlets) is sent out the outlet corresponding to its position in the list.

Arguments:

- input
  [list]

### anything

Performs the same function as  list .

Arguments:

- input
  [any]

## Output

### float

If the outlet has been initialized with a float argument, then an int or a symbol from the input list will be converted to float before being sent out that outlet.

### int

Each item of the list received in the inlet is sent out the corresponding outlet. The first item in the list is sent out the leftmost outlet, and so on.

### symbol

A symbol in the input list will be sent out the corresponding outlet if that outlet has been initialized with a symbol argument.

## See Also

| Name | Description |
| --- | --- |
| [iter](https://docs.cycling74.com/reference/iter) | Break a list into individual messages |
| [listfunnel](https://docs.cycling74.com/reference/listfunnel) | Index and output list elements |
| [join](https://docs.cycling74.com/reference/join) | Combine items into a list |
| [pack](https://docs.cycling74.com/reference/pack) | Create a list |
| [pak](https://docs.cycling74.com/reference/pak) | Output a list when any element changes |
| [spray](https://docs.cycling74.com/reference/spray) | Distribute a value to a numbered outlet |
| [unjoin](https://docs.cycling74.com/reference/unjoin) | Break a list into messages |
| [zl](https://docs.cycling74.com/reference/zl) | Process lists in many ways |
