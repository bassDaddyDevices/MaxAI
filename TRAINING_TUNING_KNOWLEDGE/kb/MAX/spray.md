---
type: max
name: "spray"
summary: "Distribute a value to a numbered outlet"
signal: false
url: "https://docs.cycling74.com/reference/spray/"
package: "Max"
see_also: ["cycle", "funnel", "gate", "listfunnel", "route", "unjoin", "unpack"]
---
# spray

Distribute a value to a numbered outlet

## Description

Accepts lists as input, where the first number is taken as the outlet number, and one or more values that follow are sent out that outlet and those to its right, in right-to-left order. The argument sets the number of outlets (there is no set limit). The default number of outlets is 2.

## Arguments

### outlets[int] optional

The first argument sets the number of outlets. If there is no argument present, the object has two outlets.

### offset[int] optional

The second argument sets an offset for the numbering of the outlets. If the second argument is not present, the outlets are numbered beginning with 0.

### listmode[int] optional

The third argument, if set to '1', sets the object to "list mode." In "list mode," an entire list is output through the indicated outlet (with the optional offset provided by the second object argument), instead of unpacking the list and sending the individual elements out sequential outlets. This argument defaults to '0'.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Posts an error-message in the Max Console stating that [spray](https://docs.cycling74.com/reference/spray) requires a list.

Arguments:

- input
  [int]

### list

The first number in the list is a number that specifies the outlet number starting at 0 for the leftmost outlet; the second is an int or float value to send out that outlet. If there are additional elements in the list, they are sent out the subsequent outlets to the right of the one specified by the first number in the list. The list may contain only ints or floats; symbols will be ignored. If the first number is -1, the remaining elements of the list will be repeated to all outlets.

Arguments:

- input
  [list]

### offset

The word  offset  followed by a number will offset the output of the object by the number of outlets given shifted to the left (a negative number will specify the number of outlets offset to the right).

Arguments:

- shift
  [int]

## Output

### int

When a list of is received by [spray](https://docs.cycling74.com/reference/spray), the first number is used to specify an outlet, and the second int or float is sent out that outlet. Any additional numbers in the list are sent out subsequent outlets to the right.

## See Also

| Name | Description |
| --- | --- |
| [cycle](https://docs.cycling74.com/reference/cycle) | Round-robin messages to outlets |
| [funnel](https://docs.cycling74.com/reference/funnel) | Tag data with its inlet number |
| [gate](https://docs.cycling74.com/reference/gate) | Pass input to an outlet |
| [listfunnel](https://docs.cycling74.com/reference/listfunnel) | Index and output list elements |
| [route](https://docs.cycling74.com/reference/route) | Select outlet based on input matching |
| [unjoin](https://docs.cycling74.com/reference/unjoin) | Break a list into messages |
| [unpack](https://docs.cycling74.com/reference/unpack) | Break a list into individual messages |
