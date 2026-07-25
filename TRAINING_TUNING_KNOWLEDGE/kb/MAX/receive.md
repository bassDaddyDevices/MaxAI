---
type: max
name: "receive"
summary: "Receive messages without patch cords"
signal: false
url: "https://docs.cycling74.com/reference/receive/"
package: "Max"
see_also: ["float", "forward", "int", "message", "pattrforward", "pvar", "route", "send", "value"]
---
# receive

Receive messages without patch cords

## Description

Receives and outputs messages from [send](https://docs.cycling74.com/reference/send) objects sharing the same name. This allows you to send any kind of message between Patcher windows or within a window without using patch cords. A [receive](https://docs.cycling74.com/reference/receive) object can be instantiated with its short-form: the letter "r".

#### Discussion

The order of reception by two or more [receive](https://docs.cycling74.com/reference/receive) objects is not deterministic.

The [receive](https://docs.cycling74.com/reference/receive) object's [object action menu](https://docs.cycling74.com/userguide/object_action_menu) has two special entries on the bottom of the menu: Show others and Create send.

Show others will bring up a contextual menu showing all instances of other same-named send and receive objects. This is the same as using the  (mouse)  method.

Create receive allows you to quickly create a same-named [send](https://docs.cycling74.com/reference/send) object.

 **Note:**  Communication between Max for Live devices using [send](https://docs.cycling74.com/reference/send) and [receive](https://docs.cycling74.com/reference/receive) is supported, but there may be some latency involved when sending data between devices.

## Arguments

### name[symbol] optional

Name the [receive](https://docs.cycling74.com/reference/receive) object. If there is no argument, [receive](https://docs.cycling74.com/reference/receive) has one inlet, and a name must be provided by a  set  message before anything can be received. All [receive](https://docs.cycling74.com/reference/receive) objects that share the same name will receive data from any [send](https://docs.cycling74.com/reference/send) objects that share their name.

If you want a named [send](https://docs.cycling74.com/reference/send) / [receive](https://docs.cycling74.com/reference/receive) object in a Max for Live device to be unique to the device, use three dashes (**---** ) to start the name of your [send](https://docs.cycling74.com/reference/send) / [receive](https://docs.cycling74.com/reference/receive) destination (e.g.  s ---filtercutoff ).

When your patch is initialized, it will replace the three dashes with a unique-to-Live number (e.g.  s 024filtercutoff );

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### (mouse)

Double-clicking on a [receive](https://docs.cycling74.com/reference/receive) object looks for and opens a loaded patcher window containing a [send](https://docs.cycling74.com/reference/send) object with the same name. Repeatedly double-clicking on the [receive](https://docs.cycling74.com/reference/receive) object looks for and opens more such windows.

### set

The word  set , followed by a symbol, provides a name for [receive](https://docs.cycling74.com/reference/receive), as if that name had been typed in as an argument.

Arguments:

- name
  [symbol]

## Output

### anything

Any message received in the inlet of any [send](https://docs.cycling74.com/reference/send) or [forward](https://docs.cycling74.com/reference/forward) object with the same name, or sent explicitly from an [int](https://docs.cycling74.com/reference/int), [float](https://docs.cycling74.com/reference/float), [grab](https://docs.cycling74.com/reference/grab), or [message](https://docs.cycling74.com/reference/message) box, is passed out the outlet of [receive](https://docs.cycling74.com/reference/receive), even if the sending object is in a different loaded patch.

## See Also

| Name | Description |
| --- | --- |
| [float](https://docs.cycling74.com/reference/float) | Store a decimal number |
| [forward](https://docs.cycling74.com/reference/forward) | Send messages to specified receive objects |
| [int](https://docs.cycling74.com/reference/int) | Store an integer value |
| [message](https://docs.cycling74.com/reference/message) | Send any message |
| [pattrforward](https://docs.cycling74.com/reference/pattrforward) | Send any message to a named object |
| [pvar](https://docs.cycling74.com/reference/pvar) | Connect to a named object in a patcher |
| [route](https://docs.cycling74.com/reference/route) | Select outlet based on input matching |
| [send](https://docs.cycling74.com/reference/send) | Send messages without patch cords |
| [value](https://docs.cycling74.com/reference/value) | Share data between other value objects |
