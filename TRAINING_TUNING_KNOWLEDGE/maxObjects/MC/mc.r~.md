---
type: mc
name: "mc.r~"
summary: "Signals can be received from any loaded patcher, without patch cords"
signal: true
url: "https://docs.cycling74.com/reference/mc.r~/"
package: "MC"
see_also: ["mc.receive~", "send~"]
---
# mc.r~

Signals can be received from any loaded patcher, without patch cords

## Description

Use the [receive~](https://docs.cycling74.com/reference/receive~) object to grab signals put out by [send~](https://docs.cycling74.com/reference/send~) objects and outputs them out its signal outlet. A [receive~](https://docs.cycling74.com/reference/receive~) object can be instantiated simply by typing into an object box the short-form letter "r~".

#### Discussion

You can switch between all current [receive~](https://docs.cycling74.com/reference/receive~) objects using the  set  message. To turn off the audio coming from a [receive~](https://docs.cycling74.com/reference/receive~), use  set  with the name of a [send~](https://docs.cycling74.com/reference/send~) that doesn't currently exist.

Note: The use of a [receive~](https://docs.cycling74.com/reference/receive~) object can introduce a delay of varying lengths. This delay is dependent on a large number of factors including, but not limited to, how many [send~](https://docs.cycling74.com/reference/send~) and [receive~](https://docs.cycling74.com/reference/receive~) objects are involved, if a feedback loop is detected, and the use of different top-level patchers with multiprocessing enabled.

## Arguments

### object-name[symbol] optional

Sets the name of the [receive~](https://docs.cycling74.com/reference/receive~) object.

## Attributes

### chans[int]

The chans attribute is disabled in the [receive~](https://docs.cycling74.com/reference/receive~) object. It is available in [mc.receive~](https://docs.cycling74.com/reference/mc.receive~).

### name[symbol]

Name the [receive~](https://docs.cycling74.com/reference/receive~) object. If there is no argument, [receive~](https://docs.cycling74.com/reference/receive~) has one inlet, and a name must be provided by a  set  message before anything can be received. All [receive~](https://docs.cycling74.com/reference/receive~) objects that share the same name will receive data from any [send~](https://docs.cycling74.com/reference/send~) objects that share their name.

If you want a named [send~](https://docs.cycling74.com/reference/send~) / [receive~](https://docs.cycling74.com/reference/receive~) object in a Max for Live device to be unique to the device, use three dashes (**---** ) to start the name of your [send~](https://docs.cycling74.com/reference/send~) / [receive~](https://docs.cycling74.com/reference/receive~) destination (e.g.  s ---filtercutoff ).

When your patch is initialized, it will replace the three dashes with a unique-to-Live number (e.g.  s 024filtercutoff );

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### (mouse)

Double-clicking on a [receive~](https://docs.cycling74.com/reference/receive~) object looks for and opens a loaded patcher window containing a [send~](https://docs.cycling74.com/reference/send~) object with the same name. Repeatedly double-clicking on the [receive~](https://docs.cycling74.com/reference/receive~) object looks for and opens more such windows.

### set

The word  set , followed by a  symbol , changes the name of the [receive~](https://docs.cycling74.com/reference/receive~) so that it connects to different [send~](https://docs.cycling74.com/reference/send~) objects that have the  symbol  as a name. If no [send~](https://docs.cycling74.com/reference/send~) objects exist with the name, the output of [receive~](https://docs.cycling74.com/reference/receive~) is 0.

Arguments:

- object-name
  [symbol]

### signal

The [receive~](https://docs.cycling74.com/reference/receive~) object receives signals from all [send~](https://docs.cycling74.com/reference/send~) objects that share its name. It adds them together and sends the sum out its outlet. If no [send~](https://docs.cycling74.com/reference/send~) objects share the current name, the output of [receive~](https://docs.cycling74.com/reference/receive~) is 0. The [send~](https://docs.cycling74.com/reference/send~) objects need not be in the same patch as the corresponding [receive~](https://docs.cycling74.com/reference/receive~).

## Output

### signal

The combination of all signals coming into all [send~](https://docs.cycling74.com/reference/send~) objects with the same name as the [receive~](https://docs.cycling74.com/reference/receive~).

## See Also

| Name | Description |
| --- | --- |
| [mc.receive~](https://docs.cycling74.com/reference/mc.receive~) | TEXT\_HERE |
| [send~](https://docs.cycling74.com/reference/send~) | Send signals without patch cords |
