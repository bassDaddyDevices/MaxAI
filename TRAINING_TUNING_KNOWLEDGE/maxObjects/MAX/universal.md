---
type: max
name: "universal"
summary: "Send messages to all objects of the same type"
signal: false
url: "https://docs.cycling74.com/reference/universal/"
package: "Max"
see_also: ["forward", "receive", "send", "value"]
---
# universal

Send messages to all objects of the same type

## Description

Sends a input message to all instances of the same class of object in a patcher. The order in which the messages arrive is not defined.

## Arguments

### mode[int] optional

If a 1 is present as an argument, [universal](https://docs.cycling74.com/reference/universal) will send messages it receives to objects of the specified class in subpatchers of its patcher as well as in the patcher containing the [universal](https://docs.cycling74.com/reference/universal) object.

## Attributes

### descend[int]: 0

If descend is set to 1, [universal](https://docs.cycling74.com/reference/universal) will send messages it receives to objects of the specified class in subpatchers of its patcher as well as in the patcher containing the [universal](https://docs.cycling74.com/reference/universal) object.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends a  bang  to all instances of the same class of object within the patcher.

### int

Sends an  int  to all instances of the same class of object within the patcher.

Arguments:

- input
  [int]

### float

Sends a  float  to all instances of the same class of object within the patcher.

Arguments:

- input
  [float]

### list

Sends a  list  to all instances of the same class of object within the patcher.

Arguments:

- input
  [list]

### anything

Sends the message after the word  anything  to all instances of any object that it can be applied to within the patcher.

Arguments:

- input
  [list]

### send

To send messages to certain objects whose class names are also reserved Max message names (such as  int  and  float ), you need to start the message with the  send  message.  send  can be used with any class.

Arguments:

- input
  [list]

## Input

###

The [universal](https://docs.cycling74.com/reference/universal) object expects as input a symbol that names an object class (for example, [table](https://docs.cycling74.com/reference/table) or [dspstate~](https://docs.cycling74.com/reference/dspstate~)), followed by a message selector and any number of arguments for that message. The message and its arguments (if any) are sent to all instances of the class within the same patcher (and possibly its subpatchers).

## Output

###

The object has no outlets, but objects receiving the message(s) it sends may have some form of output from their outlets. However, the order in which the message is sent to various objects is not guaranteed. This is also true when using the send and receive objects.

## See Also

| Name | Description |
| --- | --- |
| [forward](https://docs.cycling74.com/reference/forward) | Send messages to specified receive objects |
| [receive](https://docs.cycling74.com/reference/receive) | Receive messages without patch cords |
| [send](https://docs.cycling74.com/reference/send) | Send messages without patch cords |
| [value](https://docs.cycling74.com/reference/value) | Share data between other value objects |
