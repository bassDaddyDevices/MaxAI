---
type: max
name: "listfunnel"
summary: "Index and output list elements"
signal: false
url: "https://docs.cycling74.com/reference/listfunnel/"
package: "Max"
see_also: ["funnel", "spray"]
---
# listfunnel

Index and output list elements

## Description

Outputs the elements of an incoming list in the format:

[index] [element]

for each element of the list.

## Arguments

### offset[int] optional

An integer argument is used to specify an offset for the first index value. If no argument is present, the list elements are numbered beginning with the default index of 0.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

The low index value and the received number are sent out as a two-element list.

Arguments:

- input
  [int]

### float

The low index value and the received number are sent out as a two-element list.

Arguments:

- input
  [float]

### list

Each element of the list is indexed and this index is prepended to the list element and sent out the outlet as a two-element list. The input list may contain ints, floats, and symbols (provided that the first element of the list is not a symbol).

Arguments:

- input
  [list]

### anything

Performs the same as  list .

Arguments:

- input
  [list]

### offset

The word  offset  followed by an integer argument is used to specify an offset for the first index value.

Arguments:

- offset
  [int]

## Output

### list

When a list is received in the inlet, [listfunnel](https://docs.cycling74.com/reference/listfunnel) outputs a two-element list for each element of the input list, consisting of the elements index followed the list element. [listfunnel](https://docs.cycling74.com/reference/listfunnel) is designed for conveniently replacing a combination of [unpack](https://docs.cycling74.com/reference/unpack) and [funnel](https://docs.cycling74.com/reference/funnel) objects.

## See Also

| Name | Description |
| --- | --- |
| [funnel](https://docs.cycling74.com/reference/funnel) | Tag data with its inlet number |
| [spray](https://docs.cycling74.com/reference/spray) | Distribute a value to a numbered outlet |
