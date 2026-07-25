---
type: max
name: "funnel"
summary: "Tag data with its inlet number"
signal: false
url: "https://docs.cycling74.com/reference/funnel/"
package: "Max"
see_also: ["listfunnel", "spray"]
---
# funnel

Tag data with its inlet number

## Description

Identifies the inlet of incoming data. It can be used to store values into a [table](https://docs.cycling74.com/reference/table) or [coll](https://docs.cycling74.com/reference/coll) based on their source, or used to set a destination with an object such as [spray](https://docs.cycling74.com/reference/spray).

## Arguments

### inlets[int] optional

The first argument sets the number of inlets in the [funnel](https://docs.cycling74.com/reference/funnel). If there is no argument there will be two inlets.

### offset[int] optional

The second argument specifies an offset for the first inlet number. If no second argument is present, the inlets are numbered beginning with 0.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In any inlet: The number of the inlet and the stored (most recently received) number in that inlet are sent out as a two-item list.

### int

In any inlet: The number of the inlet and the received number are sent out as a list.

Arguments:

- input
  [int]

### float

In any inlet: The number of the inlet and the received number are sent out as a list.

Arguments:

- input
  [float]

### list

In any inlet: The number of the inlet is prepended to the list, and the new list is sent out. In a list floats are not converted to ints. The list may contain ints, floats, and symbols (provided that the first element of the list is not a symbol).

Arguments:

- inputs
  [list]

### anything

Functions the same as  list .

Arguments:

- inputs
  [list]

### offset

The word  offset  followed by a number will offset the numbering of inlets by the number given.

Arguments:

- offset
  [int]

### set

In any inlet: The word  set  followed by a list of numbers which correspond with the number of inlets, will set the input list of numbers without sending them through the outputs.

Arguments:

- inputs
  [list]

## Output

### list

When a number or list is received in any inlet, [funnel](https://docs.cycling74.com/reference/funnel) outputs a list consisting of the inlet number followed the input. [funnel](https://docs.cycling74.com/reference/funnel) can be useful in conjunction with other objects such as [coll](https://docs.cycling74.com/reference/coll), [funbuff](https://docs.cycling74.com/reference/funbuff) and [table](https://docs.cycling74.com/reference/table).

## See Also

| Name | Description |
| --- | --- |
| [listfunnel](https://docs.cycling74.com/reference/listfunnel) | Index and output list elements |
| [spray](https://docs.cycling74.com/reference/spray) | Distribute a value to a numbered outlet |
