---
type: max
name: "string.fromutf8"
summary: "Construct a new string object from UTF-8 characters, as integer values"
signal: false
url: "https://docs.cycling74.com/reference/string.fromutf8/"
package: "Max"
see_also: ["string", "string.bytes", "string.frombytes", "string.fromsymlist", "string.toarray", "string.tolist", "string.utf8"]
---
# string.fromutf8

Construct a new string object from UTF-8 characters, as integer values

## Description

Multibyte characters are expected to arrive as a single large value.

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

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [string.bytes](https://docs.cycling74.com/reference/string.bytes) | Iterate the UTF-8 data in a string as bytes (ints) |
| [string.frombytes](https://docs.cycling74.com/reference/string.frombytes) | Construct a new string object from bytes (ints) |
| [string.fromsymlist](https://docs.cycling74.com/reference/string.fromsymlist) | Construct a new string from a list of symbols |
| [string.toarray](https://docs.cycling74.com/reference/string.toarray) | Construct a new array object from a string object |
| [string.tolist](https://docs.cycling74.com/reference/string.tolist) | Construct a new list from a string object |
| [string.utf8](https://docs.cycling74.com/reference/string.utf8) | Iterate the UTF-8 characters in a string as integers |
