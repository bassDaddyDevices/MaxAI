---
type: max
name: "s"
summary: "Send messages without patch cords"
signal: false
url: "https://docs.cycling74.com/reference/s/"
package: "Max"
see_also: ["forward", "message", "pattrforward", "pv", "pvar", "receive", "value"]
---
# s

Send messages without patch cords

## Description

[send](https://docs.cycling74.com/reference/send) will transmit given messages to [receive](https://docs.cycling74.com/reference/receive) objects which are named by the same argument and will allow you to send any kind of message between Patcher windows or within a window without using patch cords. A [send](https://docs.cycling74.com/reference/send) object can be instantiated simply by typing into an object box the short-form letter "s".

#### Discussion

The order of reception by two or more [receive](https://docs.cycling74.com/reference/receive) objects is not deterministic.

The [send](https://docs.cycling74.com/reference/send) object's [object action menu](https://docs.cycling74.com/userguide/object_action_menu) has two special entries on the bottom of the menu: Show others and Create receive.

Show others will bring up a contextual menu showing all instances of other same-named send and receive objects. This is the same as using the  (mouse)  method.

Create receive allows you to quickly create a same-named [receive](https://docs.cycling74.com/reference/receive) object.

 **Note:**  Communication between Max for Live devices using [send](https://docs.cycling74.com/reference/send) and [receive](https://docs.cycling74.com/reference/receive) is supported, but there may be some latency involved when sending data between devices.

## Arguments

### name[symbol] optional

Name the [send](https://docs.cycling74.com/reference/send) object. All [send](https://docs.cycling74.com/reference/send) objects that share the same name will send data to any [receive](https://docs.cycling74.com/reference/receive) objects that share their name.

If you want a named [send](https://docs.cycling74.com/reference/send) / [receive](https://docs.cycling74.com/reference/receive) object in a Max for Live device to be unique to the device, use three dashes (**---** ) to start the name of your [send](https://docs.cycling74.com/reference/send) / [receive](https://docs.cycling74.com/reference/receive) destination (e.g.  s ---filtercutoff ).

When your patch is initialized, it will replace the three dashes with a unique-to-Live number (e.g.  s 024filtercutoff );

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Performs the same function as  anything .

### int

Performs the same function as  anything .

Arguments:

- input
  [int]

### float

Performs the same function as  anything .

Arguments:

- input
  [float]

### list

Performs the same function as  anything .

Arguments:

- input
  [list]

### anything

A message received in the inlet is sent out the outlet of any [receive](https://docs.cycling74.com/reference/receive) object that has the same name, even if the [receive](https://docs.cycling74.com/reference/receive) is in another loaded patch.

Arguments:

- input
  [list]

### (mouse)

Double-clicking on a [send](https://docs.cycling74.com/reference/send) object opens all windows containing [receive](https://docs.cycling74.com/reference/receive) objects with the same name, and also lists the instance numbers of patches hosted in a [poly~](https://docs.cycling74.com/reference/poly~) object that share named [receive](https://docs.cycling74.com/reference/receive) objects.

## Output

### anything

There are no outlets. A message received in the inlet of [send](https://docs.cycling74.com/reference/send) is sent out the outlet of any [receive](https://docs.cycling74.com/reference/receive) with the same name, even if the [receive](https://docs.cycling74.com/reference/receive) is in another loaded patch.

## See Also

| Name | Description |
| --- | --- |
| [forward](https://docs.cycling74.com/reference/forward) | Send messages to specified receive objects |
| [message](https://docs.cycling74.com/reference/message) | Send any message |
| [pattrforward](https://docs.cycling74.com/reference/pattrforward) | Send any message to a named object |
| [pv](https://docs.cycling74.com/reference/pv) | Share data within a patch hierarchy |
| [pvar](https://docs.cycling74.com/reference/pvar) | Connect to a named object in a patcher |
| [receive](https://docs.cycling74.com/reference/receive) | Receive messages without patch cords |
| [value](https://docs.cycling74.com/reference/value) | Share data between other value objects |
