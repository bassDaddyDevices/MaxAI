---
type: max
name: "outlet"
summary: "Send messages out of a patcher"
signal: false
url: "https://docs.cycling74.com/reference/outlet/"
package: "Max"
see_also: ["bpatcher", "forward", "inlet", "patcher", "receive", "send"]
---
# outlet

Send messages out of a patcher

## Description

Show up as an outlet at the bottom of an object box when the patcher is used inside another patcher (as an object or a subpatch). Messages received by the [outlet](https://docs.cycling74.com/reference/outlet) object will come out of the corresponding outlet in the subpatch's object box.

## Arguments

None.

## Attributes

### comment[object] >= 7.0.0

Sets the mouse-over Assistance message for the outlet. This value can only be set using the Comment setting in the [inlet](https://docs.cycling74.com/reference/inlet) object's Inspector.

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### tricolor[4 floats] >= 7.0.0

Sets the triangle color in RGBA format.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### (mouse)

Double-clicking on an [outlet](https://docs.cycling74.com/reference/outlet) object will open the parent patch or bring it to front.

## Output

### anything

Any messages received by [outlet](https://docs.cycling74.com/reference/outlet) in a subpatch are sent out the outlet of that subpatch, through patch cords.

## See Also

| Name | Description |
| --- | --- |
| [bpatcher](https://docs.cycling74.com/reference/bpatcher) | Embed a subpatch with a visible UI |
| [forward](https://docs.cycling74.com/reference/forward) | Send messages to specified receive objects |
| [inlet](https://docs.cycling74.com/reference/inlet) | Receive messages from outside a patcher |
| [patcher](https://docs.cycling74.com/reference/patcher) | Create a subpatch within a patch |
| [receive](https://docs.cycling74.com/reference/receive) | Receive messages without patch cords |
| [send](https://docs.cycling74.com/reference/send) | Send messages without patch cords |
