---
type: max
name: "string.indexof"
summary: "Search for the index of a string"
signal: false
url: "https://docs.cycling74.com/reference/string.indexof/"
package: "Max"
see_also: ["string", "array.indexof"]
---
# string.indexof

Search for the index of a string

## Description

Output the position of a substring within a longer string as an integer index. Output -1 if the substring cannot be found.

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

### string

This search is case-insensitive. Will output the position of the substring in the larger string if found, otherwise will output -1.

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [array.indexof](https://docs.cycling74.com/reference/array.indexof) | Search for the index of an array element |
