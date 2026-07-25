---
type: max
name: "itoa"
summary: "Convert character codes to symbol"
signal: false
url: "https://docs.cycling74.com/reference/itoa/"
package: "Max"
see_also: ["atoi", "key", "keyup", "message", "regexp", "spell", "sprintf"]
---
# itoa

Convert character codes to symbol

## Description

Convert a stream or list of up to 256 integer character codes into a symbol.

#### Discussion

The leftmost inlet accepts either a list of integer character codes or an individual character code, and produces output immediately. It also responds to  bang , outputting the currently stored symbol. The rightmost inlet is used to set the output symbol, but unlike the left inlet it does not cause output. The middle inlet appends characters to the currently-stored symbol, either by list or one character at a time.

## Arguments

None.

## Attributes

### utf8[int]: 0

When utf8 is enabled, the input character codes are interpreted as UTF-8, otherwise they are interpreted as UTF-32. When character codes are less than 128 (ASCII), the two encodings are identical.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: a  bang  message can be used to trigger the output of the currently stored string as a symbol.

### int

In left inlet: The integer is interpreted as a character code which is stored internally and sent out the outlet as a symbol.

In middle inlet: The integer is interpreted as a character code which is appended to the internally stored character string. No output is triggered.

In right inlet: The integer is interpreted as a character code which is stored internally, replacing the previously stored character string, but not output.

Arguments:

- input
  [int]

### float

Converted to  int .

Arguments:

- input
  [float]

### list

In left inlet: Each value in list of integers sent to the left inlet is interpreted as a character and stored internally as a character string, replacing the previously stored character string, and output as a symbol.

In middle inlet: A list of integers sent to the middle inlet will be converted to characters and appended to the current internally-stored character string, without causing output.

In right inlet: A list of integers sent to the right inlet will be converted to characters and stored internally as a character string, replacing the previously stored character string, without triggering output .

Arguments:

- input
  [list]

### clear

In left inlet: The  clear  message is used to clear the contents of the internally-stored string of characters.

Arguments:

- input
  [list]

## Output

### symbol

The character string converted from the input is sent out as a symbol.

## See Also

| Name | Description |
| --- | --- |
| [atoi](https://docs.cycling74.com/reference/atoi) | Convert characters to integers |
| [key](https://docs.cycling74.com/reference/key) | Report keyboard presses |
| [keyup](https://docs.cycling74.com/reference/keyup) | Report key information on release |
| [message](https://docs.cycling74.com/reference/message) | Send any message |
| [regexp](https://docs.cycling74.com/reference/regexp) | Use regular expressions to process input |
| [spell](https://docs.cycling74.com/reference/spell) | Convert input to UTF-8 (Unicode) codes |
| [sprintf](https://docs.cycling74.com/reference/sprintf) | Format a message of words and numbers |
