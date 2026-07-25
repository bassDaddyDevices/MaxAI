---
type: max
name: "string.toarray"
summary: "Construct a new array object from a string object"
signal: false
url: "https://docs.cycling74.com/reference/string.toarray/"
package: "Max"
see_also: ["string", "string.bytes", "string.frombytes", "string.fromsymlist", "string.fromutf8", "string.tolist", "string.utf8"]
---
# string.toarray

Construct a new array object from a string object

## Description

Construct a new array object from a string object. An optional separator string can be used to determine how the string is split into individual array entries (default = <space>).

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

Clear the separator string, so that the array will contain one element: the entire string. This is not the same as setting the separator to "emptystring".

### string

In the right inlet, a string will be stored as the separator string. In the left inlet, the string will be stored and then split into array elements, using the separator string to determine the splits (the separator characters are excluded from the resulting elements). Finally, a new array containing individual string elements will be sent to the outlet.

For instance, the string "peas porridge in the pot", with a separator string of " ", will generate the array  [ "peas", "porridge", "in", "the", "pot" ] , while a separator string of " ;po" would result in the array  [ "peas", "rridge in the", "t" ] . The special separator value "emptystring" will separate on every character, resulting in an array where every element in a single character of the initial string.

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [string.bytes](https://docs.cycling74.com/reference/string.bytes) | Iterate the UTF-8 data in a string as bytes (ints) |
| [string.frombytes](https://docs.cycling74.com/reference/string.frombytes) | Construct a new string object from bytes (ints) |
| [string.fromsymlist](https://docs.cycling74.com/reference/string.fromsymlist) | Construct a new string from a list of symbols |
| [string.fromutf8](https://docs.cycling74.com/reference/string.fromutf8) | Construct a new string object from UTF-8 characters, as integer values |
| [string.tolist](https://docs.cycling74.com/reference/string.tolist) | Construct a new list from a string object |
| [string.utf8](https://docs.cycling74.com/reference/string.utf8) | Iterate the UTF-8 characters in a string as integers |
