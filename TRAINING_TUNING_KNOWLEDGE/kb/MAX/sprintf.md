---
type: max
name: "sprintf"
summary: "Format a message of words and numbers"
signal: false
url: "https://docs.cycling74.com/reference/sprintf/"
package: "Max"
see_also: ["atoi", "combine", "fromsymbol", "itoa", "key", "keyup", "message", "regexp", "spell", "tosymbol"]
---
# sprintf

Format a message of words and numbers

## Description

Uses the common C-language "printf" function inside Max. You can combine symbols, organize lists of numbers, or format messages or menu items. For complete documentation, refer to a standard C library reference manual.

## Arguments

### symout[symbol] optional

If the first argument is the word  symout , the [sprintf](https://docs.cycling74.com/reference/sprintf) object outputs the string it generates as a single symbol. Otherwise the output is a list of symbols and/or numbers. The word  symout  itself is not included in the output of sprintf.

### format[symbol] optional

The arguments form a message to be sent out, in a format resembling the C programming language. The arguments may be words, numbers, or changeable arguments for incoming symbols ( %s), ints  ( %ld ), floats ( %f ), and ints that are to be formatted as ASCII characters ( %c ). The number of inlets is determined by the number of changeable arguments, with each inlet corresponding to a changeable argument, in order.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Formats the message using the values currently stored.

Any of the above messages in the left inlet will format the message and send it out. If no value has been received for a changeable number argument ( %ld  or  %f ), 0 will be substituted for that argument. If no value has been received for a  %s  or  %c  argument, that argument will be left blank.

### int

May be received in any inlet that corresponds to a  %ld  or  %c  argument. The number will be stored in place of that argument. A  %c  argument will convert the int to its ASCII character equivalent.

Arguments:

- input
  [int]

### float

May be received in any inlet that corresponds to a  %f  argument. The number will be stored in place of that argument.

Arguments:

- input
  [float]

### list

In left inlet: Each item in the list is treated as if it had been received in a separate inlet, up to the number of inlets.

Arguments:

- input
  [list]

### anything

Performs the same function as a  list .

Arguments:

- input
  [list]

### symbol

May be received in any inlet that corresponds to a  %s  argument. The symbol will be stored in place of that argument.

Arguments:

- input
  [symbol]

## Output

### anything

The message specified by the typed-in argument(s) is formatted and sent out with substitutions made for the changeable arguments.

## See Also

| Name | Description |
| --- | --- |
| [atoi](https://docs.cycling74.com/reference/atoi) | Convert characters to integers |
| [combine](https://docs.cycling74.com/reference/combine) | Combine multiple items into a single symbol |
| [fromsymbol](https://docs.cycling74.com/reference/fromsymbol) | Convert a symbol into numbers/messages |
| [itoa](https://docs.cycling74.com/reference/itoa) | Convert character codes to symbol |
| [key](https://docs.cycling74.com/reference/key) | Report keyboard presses |
| [keyup](https://docs.cycling74.com/reference/keyup) | Report key information on release |
| [message](https://docs.cycling74.com/reference/message) | Send any message |
| [regexp](https://docs.cycling74.com/reference/regexp) | Use regular expressions to process input |
| [spell](https://docs.cycling74.com/reference/spell) | Convert input to UTF-8 (Unicode) codes |
| [tosymbol](https://docs.cycling74.com/reference/tosymbol) | Convert messages, numbers, or lists to a single symbol |
