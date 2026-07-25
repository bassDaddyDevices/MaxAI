---
type: max
name: "append"
summary: "Append arguments to the end of a message"
signal: false
url: "https://docs.cycling74.com/reference/append/"
package: "Max"
see_also: ["combine", "join", "pack", "pak", "prepend", "zl"]
---
# append

Append arguments to the end of a message

## Description

[append](https://docs.cycling74.com/reference/append) will add arguments to the end of any message you input.

## Arguments

### appended-message[anything] optional

Sets message that will be appended

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  will cause [append](https://docs.cycling74.com/reference/append) to output the message which was most recently stored in memory ( bang  is particularly useful for triggering output following the  set  message).

### int

The incoming integer value(s) will be appended by the message stored in [append](https://docs.cycling74.com/reference/append), preceded by a space, and the combined message is sent out the outlet.

Arguments:

- input
  [int]

### float

The incoming floating-point value(s) will be appended by the message stored in [append](https://docs.cycling74.com/reference/append), preceded by a space, and the combined message is sent out the outlet.

Arguments:

- input
  [float]

### list

The incoming list values will be appended by the message stored in [append](https://docs.cycling74.com/reference/append), preceded by a space, and the combined message is sent out the outlet.

Arguments:

- input
  [list]

### anything

The incoming message or list will be appended by the message stored in [append](https://docs.cycling74.com/reference/append), preceded by a space, and the combined message is sent out the outlet.

Arguments:

- input-message
  [list]

### set

The word  set , followed by any message, will replace the message stored in [append](https://docs.cycling74.com/reference/append), without triggering output.

Arguments:

- set
  [list]

## Output

### anything

The message received in the inlet is combined with the message stored in [append](https://docs.cycling74.com/reference/append), and then sent out the outlet.

## See Also

| Name | Description |
| --- | --- |
| [combine](https://docs.cycling74.com/reference/combine) | Combine multiple items into a single symbol |
| [join](https://docs.cycling74.com/reference/join) | Combine items into a list |
| [pack](https://docs.cycling74.com/reference/pack) | Create a list |
| [pak](https://docs.cycling74.com/reference/pak) | Output a list when any element changes |
| [prepend](https://docs.cycling74.com/reference/prepend) | Add a message in front of input |
| [zl](https://docs.cycling74.com/reference/zl) | Process lists in many ways |
