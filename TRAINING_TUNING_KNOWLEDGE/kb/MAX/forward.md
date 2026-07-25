---
type: max
name: "forward"
summary: "Send messages to specified receive objects"
signal: false
url: "https://docs.cycling74.com/reference/forward/"
package: "Max"
see_also: ["message", "pattrforward", "receive", "route", "send", "value"]
---
# forward

Send messages to specified receive objects

## Description

Relays messages to other objects remotely. Unlike the [send](https://docs.cycling74.com/reference/send) object, the destination receive object of forward can be changed with each message.

## Arguments

### receiver[symbol] optional

Sets the name for the [receive](https://docs.cycling74.com/reference/receive) object which will receive messages. This name can later be changed with the  send  message.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

See the  anything  entry.

### int

See the  anything  entry.

Arguments:

- input
  [int]

### float

See the  anything  entry.

Arguments:

- input
  [float]

### list

See the  anything  entry.

Arguments:

- input
  [list]

### anything

Sends any message to all [receive](https://docs.cycling74.com/reference/receive) objects which share the name currently referred to by [forward](https://docs.cycling74.com/reference/forward).

Arguments:

- any message
  [list]

### send

The word  send , followed by the name of a [receive](https://docs.cycling74.com/reference/receive) object, sets the destination for any subsequent messages received by the [forward](https://docs.cycling74.com/reference/forward) object. This ability to change the destination of messages on the fly distinguishes [forward](https://docs.cycling74.com/reference/forward) from the [send](https://docs.cycling74.com/reference/send) object.

Arguments:

- arguments
  [list]

## Output

### anything

There are no outlets. A message (other than  send ) received in the inlet of [forward](https://docs.cycling74.com/reference/forward) is sent out the outlet of each [receive](https://docs.cycling74.com/reference/receive) object of the same name, even if the [receive](https://docs.cycling74.com/reference/receive) is in another patch.

## See Also

| Name | Description |
| --- | --- |
| [message](https://docs.cycling74.com/reference/message) | Send any message |
| [pattrforward](https://docs.cycling74.com/reference/pattrforward) | Send any message to a named object |
| [receive](https://docs.cycling74.com/reference/receive) | Receive messages without patch cords |
| [route](https://docs.cycling74.com/reference/route) | Select outlet based on input matching |
| [send](https://docs.cycling74.com/reference/send) | Send messages without patch cords |
| [value](https://docs.cycling74.com/reference/value) | Share data between other value objects |
