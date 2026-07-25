---
type: max
name: "string.index"
summary: "Output the character at an index in a string object (0-based)"
signal: false
url: "https://docs.cycling74.com/reference/string.index/"
package: "Max"
see_also: ["string", "zl.nth", "zl.mth"]
---
# string.index

Output the character at an index in a string object (0-based)

## Description

Extract a character from an incoming string object, based on the index specified (0-based). Indices can be negative to refer to characters starting from the end of the string (-1 refers to the last character, -2 the next to last character, etc.).

## Arguments

### index[int] optional

This index to look up for incoming strings. By default, this is 0 (the first character).

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received string and trigger output.

### int

Convert an incoming integer to a string, then process as described for the  string  message.

### (inlet1)

Set the index used to extract a chacter from an incoming string object. Indices begin at 0 for the first character, or can be negative to count from the end of the string.

### float

Convert an incoming floating-point number to a string, then process as described for the  string  message.

### list

Convert an incoming list to a string, then process as described for the  string  message.

### anything

Convert an incoming list to a string, then process as described for the  string  message.

### string

Output the character of the string at the provided index.

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [zl.nth](https://docs.cycling74.com/reference/zl.nth) | Extract item from list |
| [zl.mth](https://docs.cycling74.com/reference/zl.mth) | Extract item from list |
