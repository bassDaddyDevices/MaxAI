---
type: max
name: "string.split"
summary: "Split a string object"
signal: false
url: "https://docs.cycling74.com/reference/string.split/"
package: "Max"
see_also: ["string", "zl.slice"]
---
# string.split

Split a string object

## Description

Two new string objects will be generated from the characters in the incoming string, one from the beginning up to the split point (0-indexed, but not including the split point character itself), and one from the split point to the end.

## Arguments

### split-point[int] optional

The 0-based index of the first character of the right-hand output string.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received string and trigger output.

### int

Convert an incoming integer to a string, then process as described for the  string  message.

### (inlet1)

The 0-based index of the first character of the right-hand output string.

### float

Convert an incoming floating-point number to a string, then process as described for the  string  message.

### list

Convert an incoming list to a string, then process as described for the  string  message.

### anything

Convert an incoming list to a string, then process as described for the  string  message.

### string

Output the string with characters in reverse order.

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [zl.slice](https://docs.cycling74.com/reference/zl.slice) | Slice a list in two |
