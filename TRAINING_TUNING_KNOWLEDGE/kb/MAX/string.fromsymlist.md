---
type: max
name: "string.fromsymlist"
summary: "Construct a new string from a list of symbols"
signal: false
url: "https://docs.cycling74.com/reference/string.fromsymlist/"
package: "Max"
see_also: ["string", "string.bytes", "string.frombytes", "string.fromutf8", "string.toarray", "string.tolist", "string.utf8"]
---
# string.fromsymlist

Construct a new string from a list of symbols

## Description

The individual symbols are concatenated together to create a new string, without any separator.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received values and trigger output.

### int

The [string.fromsymlist](https://docs.cycling74.com/reference/string.fromsymlist) object works on lists and will not handle ints.

Arguments:

- value
  [int]

### float

The [string.fromsymlist](https://docs.cycling74.com/reference/string.fromsymlist) object works on lists and will not handle floats.

Arguments:

- value
  [float]

### list

Treat each element of the list as a symbol, concatenating these symbols together to form a new string.

Arguments:

- list-value
  [list]

### anything

Treat each element of the list as a symbol, concatenating these symbols together to form a new string.

Arguments:

- list-value
  [list]

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [string.bytes](https://docs.cycling74.com/reference/string.bytes) | Iterate the UTF-8 data in a string as bytes (ints) |
| [string.frombytes](https://docs.cycling74.com/reference/string.frombytes) | Construct a new string object from bytes (ints) |
| [string.fromutf8](https://docs.cycling74.com/reference/string.fromutf8) | Construct a new string object from UTF-8 characters, as integer values |
| [string.toarray](https://docs.cycling74.com/reference/string.toarray) | Construct a new array object from a string object |
| [string.tolist](https://docs.cycling74.com/reference/string.tolist) | Construct a new list from a string object |
| [string.utf8](https://docs.cycling74.com/reference/string.utf8) | Iterate the UTF-8 characters in a string as integers |
