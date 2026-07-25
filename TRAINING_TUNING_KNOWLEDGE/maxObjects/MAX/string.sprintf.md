---
type: max
name: "string.sprintf"
summary: "Generate a string using C-style message formatting"
signal: false
url: "https://docs.cycling74.com/reference/string.sprintf/"
package: "Max"
see_also: ["array", "string.concat", "sprintf"]
---
# string.sprintf

Generate a string using C-style message formatting

## Description

Uses the common C-language "printf" function to generate strings. You can combine symbols, organize lists of numbers, or format messages or menu items. For complete documentation, refer to a standard C library reference manual.

## Arguments

### format[symbol] optional

The arguments form a message to be sent out, in a format resembling the C programming language. The arguments may be words, numbers, or changeable arguments for incoming symbols ( %s), ints  ( %ld ), floats ( %f ), and ints that are to be formatted as ASCII characters ( %c ). The number of inlets is determined by the number of changeable arguments, with each inlet corresponding to a changeable argument, in order.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received values and trigger output.

### int

Convert an incoming integer to a string, then process as described for the  string  message.

Arguments:

- value
  [int]

### float

Convert an incoming floating-point number to a string, then process as described for the  string  message.

Arguments:

- value
  [float]

### list

Convert an incoming list to a string, then process as described for the  string  message.

Arguments:

- list-value
  [list]

### anything

Convert an incoming list to a string, then process as described for the  string  message.

Arguments:

- list-value
  [list]

### string

Replace any available %-arguments typed into the [string.sprintf](https://docs.cycling74.com/reference/string.sprintf) with formatted text. Incoming strings in non-left inlets will not trigger output.

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [string.concat](https://docs.cycling74.com/reference/string.concat) | Concatenate two string objects |
| [sprintf](https://docs.cycling74.com/reference/sprintf) | Format a message of words and numbers |
