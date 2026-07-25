---
type: mc
name: "mc.s~"
summary: "Send signals without patch cords"
signal: true
url: "https://docs.cycling74.com/reference/mc.s~/"
package: "MC"
see_also: ["receive~"]
---
# mc.s~

Send signals without patch cords

## Description

The [send~](https://docs.cycling74.com/reference/send~) object lets you send a signal to another patcher window or to another location within the same patcher window without using a patch cord. A [send~](https://docs.cycling74.com/reference/send~) object can be instantiated simply by typing into an object box the short-form letter "s~".

#### Discussion

The destination of the signal can be changed on the fly using the  set  message. A [receive~](https://docs.cycling74.com/reference/receive~) object with the same name receives the output of [send~](https://docs.cycling74.com/reference/send~). When two or more [send~](https://docs.cycling74.com/reference/send~) objects are aimed at the same [receive~](https://docs.cycling74.com/reference/receive~) object, the signals add together.

Note: The use of a [send~](https://docs.cycling74.com/reference/send~) object can introduce a delay of varying lengths. This delay is dependent on a large number of factors including, but not limited to, how many [send~](https://docs.cycling74.com/reference/send~) and [receive~](https://docs.cycling74.com/reference/receive~) objects are involved, if a feedback loop is detected, and the use of different top-level patchers with multiprocessing enabled.

## Arguments

### object-name[symbol] optional

Sets the name of the [send~](https://docs.cycling74.com/reference/send~) object.

## Attributes

### name[symbol]

Name the [send~](https://docs.cycling74.com/reference/send~) object. All [send~](https://docs.cycling74.com/reference/send~) objects that share the same name will send data to any [receive~](https://docs.cycling74.com/reference/receive~) objects that share their name.

If you want a named [send~](https://docs.cycling74.com/reference/send~) / [receive~](https://docs.cycling74.com/reference/receive~) object in a Max for Live device to be unique to the device, use three dashes (**---** ) to start the name of your [send~](https://docs.cycling74.com/reference/send~) / [receive~](https://docs.cycling74.com/reference/receive~) destination (e.g.  s ---filtercutoff ).

When your patch is initialized, it will replace the three dashes with a unique-to-Live number (e.g.  s 024filtercutoff );

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### clear

The  clear  message clears all of the [receive~](https://docs.cycling74.com/reference/receive~) buffers associated with the [send~](https://docs.cycling74.com/reference/send~) object. This message is only used with patchers which are being muted inside a subpatch loaded by the [poly~](https://docs.cycling74.com/reference/poly~) object.

### (mouse)

Double-clicking on a [send~](https://docs.cycling74.com/reference/send~) object opens all windows containing [receive~](https://docs.cycling74.com/reference/receive~) objects with the same name, and also lists the instance numbers of patches hosted in a [poly~](https://docs.cycling74.com/reference/poly~) object that share named [receive~](https://docs.cycling74.com/reference/receive~) objects.

### set

The word  set , followed by a  symbol , changes the name of the [send~](https://docs.cycling74.com/reference/send~) so that it connects to different [receive~](https://docs.cycling74.com/reference/receive~) objects that have the  symbol  as a name. (If no [receive~](https://docs.cycling74.com/reference/receive~) objects with the same name exist, [send~](https://docs.cycling74.com/reference/send~) does nothing.)

Arguments:

- object-name
  [symbol]

### signal

The [send~](https://docs.cycling74.com/reference/send~) object sends its input signal to all [receive~](https://docs.cycling74.com/reference/receive~) objects that share its name. The [send~](https://docs.cycling74.com/reference/send~) object need not be in the same patch as the corresponding [receive~](https://docs.cycling74.com/reference/receive~) object(s).

## Output

### Signal-Routing

Signals are routed remotely (i.e., sans patch-cord-connection).

## See Also

| Name | Description |
| --- | --- |
| [receive~](https://docs.cycling74.com/reference/receive~) | Signals can be received from any loaded patcher, without patch cords |
