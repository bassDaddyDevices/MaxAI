---
type: max
name: "string.reverse"
summary: "Reverse a string"
signal: false
url: "https://docs.cycling74.com/reference/string.reverse/"
package: "Max"
see_also: ["string", "array.reverse", "zl.rev"]
---
# string.reverse

Reverse a string

## Description

The output string will contain the characters of the incoming string, but backward.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received string and trigger output.

### int

Convert an incoming integer to a string, then process as described for the  string  message.

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
| [array.reverse](https://docs.cycling74.com/reference/array.reverse) | Reverse the order of elements in an array object |
| [zl.rev](https://docs.cycling74.com/reference/zl.rev) | Reverse a list |
