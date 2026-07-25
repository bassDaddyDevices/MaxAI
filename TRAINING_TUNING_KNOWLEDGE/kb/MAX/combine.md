---
type: max
name: "combine"
summary: "Combine multiple items into a single symbol"
signal: false
url: "https://docs.cycling74.com/reference/combine/"
package: "Max"
see_also: ["join", "pack", "pak", "sprintf", "transport"]
---
# combine

Combine multiple items into a single symbol

## Description

Combines a list of items into a single symbol. It works similar to [pack](https://docs.cycling74.com/reference/pack) and [sprintf](https://docs.cycling74.com/reference/sprintf). The behavior can be modified with attributes that provide number padding and triggered output.

## Arguments

### inlets[anything] optional

The number of inlets is determined by the number of arguments. Each argument sets an initial type and value for an item in the list stored by the [combine](https://docs.cycling74.com/reference/combine) object. If a number argument contains a decimal point, that item will be stored as a float. If the argument is a symbol, that item will be stored as a symbol.

## Attributes

### padding[256 ints]

A list that determines the number of zeros to add to a number if appropriate.

### triggers[256 ints]

Define a list of inputs that will automatically trigger output (i.e. adding an input to this list will make the inlet "hot"). Setting the attribute value to -1 will cause the object to trigger output for any inlet (all inlets will be "hot").

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Causes [combine](https://docs.cycling74.com/reference/combine) to send out a list of the items currently stored.

### int

The number is stored in [combine](https://docs.cycling74.com/reference/combine) as an item in a list, with its position in the list corresponding to the inlet in which it was received. The combined output is then generated from this list and sent out the outlet.

Arguments:

- input
  [int]

### float

The number is stored in [combine](https://docs.cycling74.com/reference/combine) as an item in a list, with its position in the list corresponding to the inlet in which it was received. The combined output is then generated from this list and sent out the outlet.

Arguments:

- input
  [float]

### list

When a list is sent into any inlet of the [combine](https://docs.cycling74.com/reference/combine) object, each item in the list is converted to symbols and stored. Its position in the list corresponds to the inlet in which it was received. If the list is sent to the left inlet, the combined output is then generated and sent out the outlet.

Arguments:

- input
  [list]

### anything

The symbol is stored in [combine](https://docs.cycling74.com/reference/combine) as an item in a list, with its position in the list corresponding to the inlet in which it was received. The combined output is then generated from this list and sent out the outlet.

Arguments:

- input
  [list]

## See Also

| Name | Description |
| --- | --- |
| [join](https://docs.cycling74.com/reference/join) | Combine items into a list |
| [pack](https://docs.cycling74.com/reference/pack) | Create a list |
| [pak](https://docs.cycling74.com/reference/pak) | Output a list when any element changes |
| [sprintf](https://docs.cycling74.com/reference/sprintf) | Format a message of words and numbers |
| [transport](https://docs.cycling74.com/reference/transport) | Control a clock |
