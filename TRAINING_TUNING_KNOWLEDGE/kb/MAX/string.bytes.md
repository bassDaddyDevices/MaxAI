---
type: max
name: "string.bytes"
summary: "Iterate the UTF-8 data in a string as bytes (ints)"
signal: false
url: "https://docs.cycling74.com/reference/string.bytes/"
package: "Max"
see_also: ["string", "string.frombytes", "string.fromsymlist", "string.fromutf8", "string.toarray", "string.tolist", "string.utf8"]
---
# string.bytes

Iterate the UTF-8 data in a string as bytes (ints)

## Description

Multibyte characters are output as a series of up to 4 bytes.

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

The UTF-8 string is decomposed into a list of bytes, and output as a Max list (ints). Multibyte characters are output as a series of up to 4 numbers.

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [string.frombytes](https://docs.cycling74.com/reference/string.frombytes) | Construct a new string object from bytes (ints) |
| [string.fromsymlist](https://docs.cycling74.com/reference/string.fromsymlist) | Construct a new string from a list of symbols |
| [string.fromutf8](https://docs.cycling74.com/reference/string.fromutf8) | Construct a new string object from UTF-8 characters, as integer values |
| [string.toarray](https://docs.cycling74.com/reference/string.toarray) | Construct a new array object from a string object |
| [string.tolist](https://docs.cycling74.com/reference/string.tolist) | Construct a new list from a string object |
| [string.utf8](https://docs.cycling74.com/reference/string.utf8) | Iterate the UTF-8 characters in a string as integers |
