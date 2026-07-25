---
type: max
name: "modifiers"
summary: "Report modifier key presses"
signal: false
url: "https://docs.cycling74.com/reference/modifiers/"
package: "Max"
see_also: ["key", "keyup", "modifiers", "numkey"]
---
# modifiers

Report modifier key presses

## Description

Polls and reports the state of the keyboard's modifier keys.

## Arguments

### rate[int]ms optional

Specifies a polling rate in milliseconds. The default value is  0  (no polling).

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends out a report of the current modifier key states.

### (keyboard)

The keyboard input to [modifiers](https://docs.cycling74.com/reference/modifiers) comes directly from the computer keyboard.

### interval

The word  interval  followed by a number, specifies the rate, in milliseconds, used when polling the state of the modifier keys. A value of zero disables polling.

Arguments:

- rate
  [int]

## Output

### int

Output is sent whenever a modifier key is pressed down on the computer keyboard. Modifier key states are reported as  0  (not pressed) or  1  (pressed).

Out left outlet: The on/off state of the Shift key.

Out second outlet: The on/off state of the Caps Lock key.

Out third outlet: the on/off state of the Option key on Macintosh or the Alt key on Windows.

Out fourth outlet: the on/off state of the Control key.

Out fifth outlet: the on/off state of the Command key on Macintosh or the Control key on Windows.

Note: The fourth and fifth outlets both report the on/off state of the Control key on Windows, since the Command key on Macintosh is equivalent to the Control key on Windows. For cross-platform uses, Windows users should use the fifth outlet of the [modifiers](https://docs.cycling74.com/reference/modifiers) object for reporting the Control key state. The fourth outlet also reports the Control key on Windows so that (older) Macintosh patches that use this key can be opened on Windows systems. The Macintosh Control key normally corresponds to the right-hand mouse button on Windows. See the section on file and key mappings in the Max Tutorials for a complete discussion of cross-platform keyboard issues.

## See Also

| Name | Description |
| --- | --- |
| [key](https://docs.cycling74.com/reference/key) | Report keyboard presses |
| [keyup](https://docs.cycling74.com/reference/keyup) | Report key information on release |
| [modifiers](https://docs.cycling74.com/reference/modifiers) | Report modifier key presses |
| [numkey](https://docs.cycling74.com/reference/numkey) | Interpret numbers typed on the keyboard |
