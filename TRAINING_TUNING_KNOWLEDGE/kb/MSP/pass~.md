---
type: msp
name: "pass~"
summary: "Eliminate noise in a muted subpatcher"
signal: true
url: "https://docs.cycling74.com/reference/pass~/"
package: "MSP"
see_also: ["mute~", "pcontrol"]
---
# pass~

Eliminate noise in a muted subpatcher

## Description

[pass~](https://docs.cycling74.com/reference/pass~) is used above any outlet object that will handle a signal. When the audio in the subpatch is enabled, the [pass~](https://docs.cycling74.com/reference/pass~) object will pass its input to its output. However, when the audio in the subpatch is disabled using [mute~](https://docs.cycling74.com/reference/mute~) or the enable 0 message to [pcontrol](https://docs.cycling74.com/reference/pcontrol), [pass~](https://docs.cycling74.com/reference/pass~) will send a zero signal out its outlet.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

The signal input is passed to the object's output unless a signal network is disabled using [mute~](https://docs.cycling74.com/reference/mute~) or the  enable 0  message sent to [pcontrol](https://docs.cycling74.com/reference/pcontrol), in which case, [pass~](https://docs.cycling74.com/reference/pass~) ensures that the signal network to which it is attached is turned off (outputs a 0-signal).

## Output

### signal

When the audio in a subpatch containing [pass~](https://docs.cycling74.com/reference/pass~) is enabled, the output is the same as the input. When the audio is disabled using [mute~](https://docs.cycling74.com/reference/mute~) or the  enable 0  message to [pcontrol](https://docs.cycling74.com/reference/pcontrol), the output is a zero signal.

## See Also

| Name | Description |
| --- | --- |
| [mute~](https://docs.cycling74.com/reference/mute~) | Disable signal processing in a subpatch |
| [pcontrol](https://docs.cycling74.com/reference/pcontrol) | Open and close subwindows |
