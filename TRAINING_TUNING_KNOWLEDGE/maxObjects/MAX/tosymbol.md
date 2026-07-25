---
type: max
name: "tosymbol"
summary: "Convert messages, numbers, or lists to a single symbol"
signal: false
url: "https://docs.cycling74.com/reference/tosymbol/"
package: "Max"
see_also: ["conformpath", "fromsymbol", "regexp", "zl"]
---
# tosymbol

Convert messages, numbers, or lists to a single symbol

## Description

[tosymbol](https://docs.cycling74.com/reference/tosymbol) accepts any message, number, or list, and converts it into a single symbol. The symbol has a maximum length of 2048 characters.

## Arguments

None.

## Attributes

### separator[symbol]

Specifies the separator character or symbol to be used when concatenating. The message separator with no arguments removes all spaces when creating a symbol (e.g.,  1 2 3 4  becomes  1234 ). When used with slash or colon separators, the separator attribute can be used to construct pathnames (e.g., ./patches myjunk myfile  becomes ./patches/myjunk/myfile ). The default separator is a space.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

See the  anything  listing

### int

See the  anything  listing

Arguments:

- input
  [int]

### float

See the  anything  listing

Arguments:

- input
  [float]

### list

See the  anything  listing

Arguments:

- input
  [list]

### anything

The [tosymbol](https://docs.cycling74.com/reference/tosymbol) object accepts any message, number, or list for an input, and sends a single symbol out its output. The symbol can have a maximum length of 2048 characters.

Arguments:

- input-for-conversion
  [list]

## Output

### symbol

A single symbol consisting of the concatenated messages, numbers, or lists. If the output symbol contains any spaces or special characters, it will be surrounded by double quotes.

## See Also

| Name | Description |
| --- | --- |
| [conformpath](https://docs.cycling74.com/reference/conformpath) | Convert file paths styles |
| [fromsymbol](https://docs.cycling74.com/reference/fromsymbol) | Convert a symbol into numbers/messages |
| [regexp](https://docs.cycling74.com/reference/regexp) | Use regular expressions to process input |
| [zl](https://docs.cycling74.com/reference/zl) | Process lists in many ways |
