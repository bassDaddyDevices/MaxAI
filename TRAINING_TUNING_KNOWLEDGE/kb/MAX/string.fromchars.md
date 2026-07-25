---
type: max
name: "string.fromchars"
summary: "Construct a new string object from bytes (ints)"
signal: false
url: "https://docs.cycling74.com/reference/string.fromchars/"
package: "Max"
see_also: ["string", "string.bytes", "string.fromsymlist", "string.fromutf8", "string.toarray", "string.tolist", "string.utf8"]
---
# string.fromchars

Construct a new string object from bytes (ints)

## Description

Construct a new string object from bytes (ints). Similar to [itoa](https://docs.cycling74.com/reference/itoa).

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Output the previously composed string

### int

The byte received will be interpreted as a (one-byte long) UTF-8 string.

### float

The floating-point number received will be truncated, and then interpreted as a (one-byte long) UTF-8 string.

### list

The list will be interpreted as a series of bytes comprising a UTF-8 string.

### anything

The list will be interpreted as a series of bytes comprising a UTF-8 string.

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [string.bytes](https://docs.cycling74.com/reference/string.bytes) | Iterate the UTF-8 data in a string as bytes (ints) |
| [string.fromsymlist](https://docs.cycling74.com/reference/string.fromsymlist) | Construct a new string from a list of symbols |
| [string.fromutf8](https://docs.cycling74.com/reference/string.fromutf8) | Construct a new string object from UTF-8 characters, as integer values |
| [string.toarray](https://docs.cycling74.com/reference/string.toarray) | Construct a new array object from a string object |
| [string.tolist](https://docs.cycling74.com/reference/string.tolist) | Construct a new list from a string object |
| [string.utf8](https://docs.cycling74.com/reference/string.utf8) | Iterate the UTF-8 characters in a string as integers |
