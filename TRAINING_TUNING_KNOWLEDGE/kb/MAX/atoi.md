---
type: max
name: "atoi"
summary: "Convert characters to integers"
signal: false
url: "https://docs.cycling74.com/reference/atoi/"
package: "Max"
see_also: ["itoa", "key", "keyup", "message", "regexp", "spell", "sprintf"]
---
# atoi

Convert characters to integers

## Arguments

None.

## Attributes

### utf8[int]: 0

The utf8 sets the output mode of [atoi](https://docs.cycling74.com/reference/atoi); when enabled, the numbers output, characters in the input are represented using UTF-8 encoding. When disabled, Unicode characters are represented using UTF-32. When utf8 is enabled, the size of the output list of character codes may be larger than the number of characters in the input. For characters with codes below 127 (ASCII) there is no difference between UTF-8 and UTF-32 encoding.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: a  bang  message can be used to trigger the output of the currently stored numerical list. A  bang  in the right two inlets is treated as a symbol.

### int

In left inlet: The character code value of each of the digits of the number is stored internally and sent out the outlet as a list.

Arguments:

- input
  [int]

### float

In left inlet: The character code value of each of the digits of the number is stored internally and sent out the outlet as a list.

Arguments:

- input
  [float]

### list

Each int in the list is converted to a character code as described above, and a space character (ASCII value 32) is inserted between items in the list. The middle inlet is used to append to the currently stored list, and the right inlet will set the contents of the internally stored list, without causing output.

Arguments:

- input
  [list]

### anything

In left inlet: The character code value of each letter, digit, or other character in the symbol is stored internally and sent out the outlet as a list.

In middle inlet: The character code value of each letter, digit, or other character in the symbol is appended to the currently stored list. No output is triggered.

In right inlet: The character code value of each letter, digit, or other character in the symbol is stored internally, replacing the previously stored list, but not output.

Arguments:

- input
  [list]

### clear

In left inlet: The  clear  message is used to clear the contents of the internally-stored numerical list. The word  clear  in the right two inlets is treated as a symbol.

## Output

### list

The character code representation of the input is sent out as a list of integers.

## See Also

| Name | Description |
| --- | --- |
| [itoa](https://docs.cycling74.com/reference/itoa) | Convert character codes to symbol |
| [key](https://docs.cycling74.com/reference/key) | Report keyboard presses |
| [keyup](https://docs.cycling74.com/reference/keyup) | Report key information on release |
| [message](https://docs.cycling74.com/reference/message) | Send any message |
| [regexp](https://docs.cycling74.com/reference/regexp) | Use regular expressions to process input |
| [spell](https://docs.cycling74.com/reference/spell) | Convert input to UTF-8 (Unicode) codes |
| [sprintf](https://docs.cycling74.com/reference/sprintf) | Format a message of words and numbers |
