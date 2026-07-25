---
type: max
name: "string.trimend"
summary: "Trim whitespace from the end of a string object"
signal: false
url: "https://docs.cycling74.com/reference/string.trimend/"
package: "Max"
see_also: ["string", "string.trim", "string.trimstart"]
---
# string.trimend

Trim whitespace from the end of a string object

## Description

Whitespace at the beginning of the string is ignored. Whitespace includes space, tab and newline characters.

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

Whitespace at the beginning of the string is ignored (see [string.trimstart](https://docs.cycling74.com/reference/string.trimstart) and [string.trim](https://docs.cycling74.com/reference/string.trim)). Whitespace includes space, tab and newline characters.

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [string.trim](https://docs.cycling74.com/reference/string.trim) | Trim whitespace from the beginning and end of a string object |
| [string.trimstart](https://docs.cycling74.com/reference/string.trimstart) | Remove whitespace from the beginning of a string object |
