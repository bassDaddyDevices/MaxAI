---
type: msp
name: "mute~"
summary: "Disable signal processing in a subpatch"
signal: true
url: "https://docs.cycling74.com/reference/mute~/"
package: "MSP"
see_also: ["pass~"]
---
# mute~

Disable signal processing in a subpatch

## Description

[mute~](https://docs.cycling74.com/reference/mute~) provides an easy way to disable only the signal objects in a subpatcher. (An alternative is to use [pcontrol](https://docs.cycling74.com/reference/pcontrol), but this disables all objects (i.e. MIDI) and is slightly slower.)

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

1 turns off the signal processing in all objects contained in the subpatch connected to the [mute~](https://docs.cycling74.com/reference/mute~) object's outlet, 0 turns it back on.

Arguments:

- behaviorial-flag
  [int]

### list

Sending the list  1 1  to the [mute~](https://docs.cycling74.com/reference/mute~) object will mute any subpatchers of the [patcher](https://docs.cycling74.com/reference/patcher) object to which the message is sent. Similarly, sending the list  0 1  to the [mute~](https://docs.cycling74.com/reference/mute~) object will unmute any subpatchers of the [patcher](https://docs.cycling74.com/reference/patcher) object.

Arguments:

- enable-flag
  [int]
- subpatcher-flag
  [int]

## Output

### Signal-Processing

Connect the [mute~](https://docs.cycling74.com/reference/mute~) object's outlet to any inlet of a subpatch you wish to control. You can connect [mute~](https://docs.cycling74.com/reference/mute~) to as many subpatch objects as you wish.

## See Also

| Name | Description |
| --- | --- |
| [pass~](https://docs.cycling74.com/reference/pass~) | Eliminate noise in a muted subpatcher |
