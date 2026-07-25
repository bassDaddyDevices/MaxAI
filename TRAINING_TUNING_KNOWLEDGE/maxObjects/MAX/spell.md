---
type: max
name: "spell"
summary: "Convert input to UTF-8 (Unicode) codes"
signal: false
url: "https://docs.cycling74.com/reference/spell/"
package: "Max"
see_also: ["atoi", "itoa", "key", "keyup", "message", "sprintf"]
---
# spell

Convert input to UTF-8 (Unicode) codes

## Description

Accepts a numeric stream and outputs and outputs ASCII characters. Options arguments provide for forced-length messages.

#### Discussion

[spell](https://docs.cycling74.com/reference/spell) takes two optional arguments. The first is a minimum output size. The second is the UTF-8 number of a fill character to put between words and at the end of a word if it is less than the minimum output. The default minimum is 0 (none), and the default fill character is space (32), to use 0 as a fill character, supply a negative number as a second argument.

## Arguments

### size[int] optional

Sets the minimum output size. Any input that doesn't "spell" to the minimum length is followed by enough fill characters (the default is the space character, 32 in ASCII) to satisfy the minimum requirement.

### character[int] optional

Specifies the fill character to use instead of 32. If you want to use '0' as a fill character, use any negative number as a second argument to [spell](https://docs.cycling74.com/reference/spell).

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

The ASCII value of each of the digits of the number is sent out the outlet, one digit at a time.

Arguments:

- input
  [int]

### list

Each int in the list is converted to ASCII as described above, and a space character (32) is sent out between items in the list. Any float or symbol items in the list are ignored.

Arguments:

- input
  [list]

### anything

If the message begins with a symbol, all int and symbol items in the message are converted to ASCII one character at a time, and a space character (32) is placed between them. Any float items in the list are ignored. If the message begins with a float, both floats and symbols are ignored.

Arguments:

- input
  [list]

### symbol

The ASCII value of each letter, digit, or other character in the symbol is sent out the outlet, one character at a time.

Arguments:

- input
  [symbol]

## Outputs

### int

The ASCII representation of the input is sent out one character at a time.

## See Also

| Name | Description |
| --- | --- |
| [atoi](https://docs.cycling74.com/reference/atoi) | Convert characters to integers |
| [itoa](https://docs.cycling74.com/reference/itoa) | Convert character codes to symbol |
| [key](https://docs.cycling74.com/reference/key) | Report keyboard presses |
| [keyup](https://docs.cycling74.com/reference/keyup) | Report key information on release |
| [message](https://docs.cycling74.com/reference/message) | Send any message |
| [sprintf](https://docs.cycling74.com/reference/sprintf) | Format a message of words and numbers |
