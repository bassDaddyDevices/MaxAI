---
type: max
name: "string.tolist"
summary: "Construct a new list from a string object"
signal: false
url: "https://docs.cycling74.com/reference/string.tolist/"
package: "Max"
see_also: ["string", "string.bytes", "string.frombytes", "string.fromsymlist", "string.fromutf8", "string.toarray", "string.utf8"]
---
# string.tolist

Construct a new list from a string object

## Description

An optional separator string can be used to determine how the string is split into individual list entries (default = <space>).

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received values and trigger output.

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

### clear

Clear the separator string, so that the output list will contain one element: the entire string. This is not the same as setting the separator to "emptystring".

### string

An optional separator string can be used to determine how the string is split into individual list entries (default = <space>). The special separator value "emptystring" will separate on every character, resulting in a list where every element in a single character of the initial string.

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [string.bytes](https://docs.cycling74.com/reference/string.bytes) | Iterate the UTF-8 data in a string as bytes (ints) |
| [string.frombytes](https://docs.cycling74.com/reference/string.frombytes) | Construct a new string object from bytes (ints) |
| [string.fromsymlist](https://docs.cycling74.com/reference/string.fromsymlist) | Construct a new string from a list of symbols |
| [string.fromutf8](https://docs.cycling74.com/reference/string.fromutf8) | Construct a new string object from UTF-8 characters, as integer values |
| [string.toarray](https://docs.cycling74.com/reference/string.toarray) | Construct a new array object from a string object |
| [string.utf8](https://docs.cycling74.com/reference/string.utf8) | Iterate the UTF-8 characters in a string as integers |
