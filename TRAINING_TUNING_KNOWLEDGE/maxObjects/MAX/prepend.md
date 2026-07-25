---
type: max
name: "prepend"
summary: "Add a message in front of input"
signal: false
url: "https://docs.cycling74.com/reference/prepend/"
package: "Max"
see_also: ["append", "message", "route"]
---
# prepend

Add a message in front of input

## Description

Prepends any input messages with a stored message.

## Arguments

### message[symbol] optional

Sets the message to be prepended at the beginning of incoming messages. The first argument must be a symbol.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

The message stored in [prepend](https://docs.cycling74.com/reference/prepend) is attached to the beginning of the message received in the inlet, and the combined message is sent out its outlet followed by the word "bang").

### int

The integer stored in [prepend](https://docs.cycling74.com/reference/prepend) is attached to the beginning of the message received in the inlet, and the combined message is sent out its outlet.

Arguments:

- input
  [int]

### float

The float stored in [prepend](https://docs.cycling74.com/reference/prepend) is attached to the beginning of the message received in the inlet, and the combined message is sent out its outlet.

Arguments:

- input
  [float]

### list

The list stored in [prepend](https://docs.cycling74.com/reference/prepend) is attached to the beginning of the message received in the inlet, and the combined message is sent out its outlet.

Arguments:

- input
  [list]

### anything

The message stored in [prepend](https://docs.cycling74.com/reference/prepend) is attached to the beginning of the message received in the inlet, and the combined message is sent out its outlet.

Arguments:

- input
  [list]

### set

The word  set , followed by any message, will replace the message stored in [prepend](https://docs.cycling74.com/reference/prepend), without triggering output.

Arguments:

- message
  [list]

## Output

### anything

The message received in the inlet is combined with the message stored in [prepend](https://docs.cycling74.com/reference/prepend), and then sent out the outlet. The maximum allowed length of any constructed message is 256 items.

## See Also

| Name | Description |
| --- | --- |
| [append](https://docs.cycling74.com/reference/append) | Append arguments to the end of a message |
| [message](https://docs.cycling74.com/reference/message) | Send any message |
| [route](https://docs.cycling74.com/reference/route) | Select outlet based on input matching |
