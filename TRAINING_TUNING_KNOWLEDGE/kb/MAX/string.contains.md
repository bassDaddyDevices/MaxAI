---
type: max
name: "string.contains"
summary: "Test whether a string object contains another string"
signal: false
url: "https://docs.cycling74.com/reference/string.contains/"
package: "Max"
see_also: ["string", "string.endswith", "string.startswith"]
---
# string.contains

Test whether a string object contains another string

## Description

The substring can occur at any point inside the test string object.

## Arguments

### search string[symbol] optional

initial string to search for (string2)

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

Perform a case-sensitive search for the target string. Output a 1 if the string to search for is contained in the larger string, 0 if not.

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [string.endswith](https://docs.cycling74.com/reference/string.endswith) | Test whether a string object ends with a substring |
| [string.startswith](https://docs.cycling74.com/reference/string.startswith) | Test whether a string object starts with a substring |
