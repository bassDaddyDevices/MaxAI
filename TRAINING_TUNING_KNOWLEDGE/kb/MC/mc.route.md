---
type: mc
name: "mc.route"
summary: "Direct output of messages based on an index received"
signal: false
url: "https://docs.cycling74.com/reference/mc.route/"
package: "MC"
see_also: ["MC Event Objects", "Processing Events from MC Objects", "mc.assign", "mc.target", "mc.makelist"]
---
# mc.route

Direct output of messages based on an index received

## Description

The [mc.route](https://docs.cycling74.com/reference/mc.route) objects works with the non-signal output of objects such as [mc.snapshot~](https://docs.cycling74.com/reference/mc.snapshot~), [mc.peakamp~](https://docs.cycling74.com/reference/mc.peakamp~), [poly~](https://docs.cycling74.com/reference/poly~) and [mc.poly~](https://docs.cycling74.com/reference/mc.poly~) (when non-signal outputs are used). These objects precede non-signal output with a voice index identifying the channel or patcher instance that produced the value. [mc.route](https://docs.cycling74.com/reference/mc.route) can use this index to direct the value to an outlet.

## Arguments

### Outlets[int] optional

The argument specifies the number of outlets the [mc.route](https://docs.cycling74.com/reference/mc.route) object will have. This determines the number of voices it supports. The maximum number of outlets is 128.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Repeated to the outlet specified by the voice index.

### int

In left inlet: Repeated to the outlet specified by the voice index.

In right inlet: Sets the voice index for routing subsequent messages received in the left inlet.

### float

In left inlet: Repeated to the outlet specified by the voice index.

In right inlet: Converted to  int , sets the voice index for routing subsequent messages received in the left inlet.

### list

In left inlet: Repeated to the outlet specified by the voice index.

### anything

In left inlet: Repeated to the outlet specified by the voice index.

### voice

In right inlet: The word  voice , followed by a number, sets the voice index for routing subsequent messages received in the left inlet.

Arguments:

- index
  [int]

## See Also

| Name | Description |
| --- | --- |
| [MC Event Objects](https://docs.cycling74.com/userguide/mc/mc_events_newobjects) | MC Event Objects |
| [Processing Events from MC Objects](https://docs.cycling74.com/userguide/mc/mc_events_newfunctions) | Processing Events from MC Objects |
| [mc.assign](https://docs.cycling74.com/reference/mc.assign) | Assign Messages to MC Objects |
| [mc.target](https://docs.cycling74.com/reference/mc.target) | Format messages to control MC objects |
| [mc.makelist](https://docs.cycling74.com/reference/mc.makelist) | Create a list from non-signal output of MC objects |
