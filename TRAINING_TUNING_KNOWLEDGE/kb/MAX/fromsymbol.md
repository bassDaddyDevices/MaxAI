---
type: max
name: "fromsymbol"
summary: "Convert a symbol into numbers/messages"
signal: false
url: "https://docs.cycling74.com/reference/fromsymbol/"
package: "Max"
see_also: ["regexp", "sprintf", "tosymbol", "zl"]
---
# fromsymbol

Convert a symbol into numbers/messages

## Description

[fromsymbol](https://docs.cycling74.com/reference/fromsymbol) will take the individual characters in a symbol and convert them from a symbol back to numbers/messages.

## Arguments

None.

## Attributes

### separator[symbol]: nothing

Define the separator character or symbol to be used when converting the symbol to a message. The default separator is a space.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

The word  bang  sent as a part of a symbol will be converted to a message. The message  bang  will simply pass through to the output.

### int

Any integer will simply pass through to the output.

Arguments:

- value
  [int]

### float

Any float will simply pass through to the output.

Arguments:

- value
  [float]

### anything

Any symbol will be converted to numbers/messages.

Arguments:

- any symbol
  [list]

## Output

### messages, lists, or numbers

A list of numbers or messages which correspond to the contents of the original symbol.

## See Also

| Name | Description |
| --- | --- |
| [regexp](https://docs.cycling74.com/reference/regexp) | Use regular expressions to process input |
| [sprintf](https://docs.cycling74.com/reference/sprintf) | Format a message of words and numbers |
| [tosymbol](https://docs.cycling74.com/reference/tosymbol) | Convert messages, numbers, or lists to a single symbol |
| [zl](https://docs.cycling74.com/reference/zl) | Process lists in many ways |
