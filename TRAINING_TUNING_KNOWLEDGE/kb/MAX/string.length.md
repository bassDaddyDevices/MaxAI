---
type: max
name: "string.length"
summary: "Determine the length of a string object"
signal: false
url: "https://docs.cycling74.com/reference/string.length/"
package: "Max"
see_also: ["string", "zl.len"]
---
# string.length

Determine the length of a string object

## Description

The length is the number of UTF-8 characters in the string, and might be different from the count of bytes in the string.

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

### clear

The previously stored string will be cleared, and the length reset to 0.

### string

The number of characters in the UTF-8 string will be sent to the outlet. As a UTF-8 character can require up to 4 bytes, the length may differ from the count of bytes in the string.

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [zl.len](https://docs.cycling74.com/reference/zl.len) | Get list length |
