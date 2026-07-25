---
type: max
name: "keyup"
summary: "Report key information on release"
signal: false
url: "https://docs.cycling74.com/reference/keyup/"
package: "Max"
see_also: ["atoi", "hi", "itoa", "key", "mousestate", "numkey", "spell", "sprintf"]
---
# keyup

Report key information on release

## Description

Tracks and outputs the key-codes, ASCII values, and modifier-key values of key releases on the computer keyboard.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### (keyboard)

The input to [keyup](https://docs.cycling74.com/reference/keyup) comes directly from the computer keyboard. There are no inlets.

## Output

### int

Output is sent each time a key is released on the computer keyboard. For multi-key combinations (such as option-E followed by E on a Mac US keyboard), only the last key release will produce output.

Out left outlet: The Unicode value of the released key, in UTF-16. This outlet provides the ASCII value of the released key (i.e., it outputs the text character rather than the code for the key that was released).

Out second outlet: The platform-specific key code of the released key. The codes are specific to individual physical keyboards as well operating system. The values are derived from Apple's key-code definitions (e.g., a=0, s=1, d=2, f=3). This outlet is useful in situations where you want to identify the position of the key rather than the key which was released (for example, when implementing a musical keyboard using the computer keyboard). The values reported for a given key position will be fixed regardless of the language chosen, and regardless of the modifiers (e.g., the value reported when the key to the right of the left shift key is pressed will be 6 whether an English or a German keyboard layout is chosen.

Out third outlet: The output value is a set of bits representing the state of various modifier keys when the key was released. The value can be sent through the & object to create toggles set by each modifier key. The numerical output of the right outlet is listed along with the argument to the & object that will create a toggle:

Out left outlet: The ASCII value of the released key.

Out middle outlet: The key code of the released key.

Out right outlet: The output values can be sent through the [&](https://docs.cycling74.com/reference/bitand) object to create toggles set by each modifier key. The numerical output of the right outlet is listed along with the argument to the [&](https://docs.cycling74.com/reference/bitand) object that will create a toggle:

key events: Outputs 128. Toggle =  *& 128*  (reports 0 on Windows if a mouse button is down, always reports 0 on Macintosh)

Windows Control key: Outputs 384. Toggle =  *& 256*  (system uses this so it is not reported)

Macintosh Command key: Outputs 384. Toggle =  *& 256*  (system uses this so it is not reported)

Shift key: Outputs 640. Toggle =  *& 512*
Caps Lock key (on): Outputs 1152. Toggle =  *& 1024*
Windows Alt key: Outputs 2176. Toggle =  *& 2048*  (on Windows the system uses this so it is not reported)

Macintosh Option key: Outputs 2176. Toggle =  *& 2048*
Windows R. Mouse Button: Outputs 4224. Toggle =  *& 4096*
Macintosh Control key: Outputs 4224. Toggle =  *& 4096*
Out fourth outlet: keyboard-independent key code.

## See Also

| Name | Description |
| --- | --- |
| [atoi](https://docs.cycling74.com/reference/atoi) | Convert characters to integers |
| [hi](https://docs.cycling74.com/reference/hi) | Human Interface device input (legacy) |
| [itoa](https://docs.cycling74.com/reference/itoa) | Convert character codes to symbol |
| [key](https://docs.cycling74.com/reference/key) | Report keyboard presses |
| [mousestate](https://docs.cycling74.com/reference/mousestate) | Report the mouse information |
| [numkey](https://docs.cycling74.com/reference/numkey) | Interpret numbers typed on the keyboard |
| [spell](https://docs.cycling74.com/reference/spell) | Convert input to UTF-8 (Unicode) codes |
| [sprintf](https://docs.cycling74.com/reference/sprintf) | Format a message of words and numbers |
