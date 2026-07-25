---
type: max
name: "inlet"
summary: "Receive messages from outside a patcher"
signal: false
url: "https://docs.cycling74.com/reference/inlet/"
package: "Max"
see_also: ["bpatcher", "outlet", "pcontrol", "receive", "send"]
---
# inlet

Receive messages from outside a patcher

## Description

Receive messages from outside the patcher wherever it is embedded. Each [inlet](https://docs.cycling74.com/reference/inlet) object in a patcher will show up as an inlet at the top of an object box when the patch is used inside another patcher (as an object or a subpatch). Messages sent into such an inlet will be received by the [inlet](https://docs.cycling74.com/reference/inlet) object in the subpatch.

#### Discussion

A patcher can have a maximum of 250 signal inlets. The number of data inlets is a much bigger number than that.

## Arguments

None.

## Attributes

### comment[object] >= 7.0.0

Sets the mouse-over Assistance message for the inlet. This value can only be set using the Comment setting in the [inlet](https://docs.cycling74.com/reference/inlet) object's Inspector.

### cool[int]: 0 >= 8.0.2

Show as Cold

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### tricolor[4 floats] >= 7.0.0

Sets the triangle color in RGBA format.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### (mouse)

Double-clicking on an [inlet](https://docs.cycling74.com/reference/inlet) object will open the parent patch or bring it to front.

## Output

### anything

In a subpatch [inlet](https://docs.cycling74.com/reference/inlet) sends out whatever messages it receives through patch cords from the patch that contains it.

## See Also

| Name | Description |
| --- | --- |
| [bpatcher](https://docs.cycling74.com/reference/bpatcher) | Embed a subpatch with a visible UI |
| [outlet](https://docs.cycling74.com/reference/outlet) | Send messages out of a patcher |
| [pcontrol](https://docs.cycling74.com/reference/pcontrol) | Open and close subwindows |
| [receive](https://docs.cycling74.com/reference/receive) | Receive messages without patch cords |
| [send](https://docs.cycling74.com/reference/send) | Send messages without patch cords |
