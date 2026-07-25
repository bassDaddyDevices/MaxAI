---
type: max
name: "string.endswith"
summary: "Test whether a string object ends with a substring"
signal: false
url: "https://docs.cycling74.com/reference/string.endswith/"
package: "Max"
see_also: ["string", "string.contains", "string.startswith"]
---
# string.endswith

Test whether a string object ends with a substring

## Arguments

### comparison-string[list] optional

Comparison string for comparing to the end of the first string.

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

Test whether a string object ends with a substring. In the case that the comparison string matches the end of the string sent to the left inlet, a "1" will be printed out of the left outlet. A '0' will be printed if the end of the string does not match.

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [string.contains](https://docs.cycling74.com/reference/string.contains) | Test whether a string object contains another string |
| [string.startswith](https://docs.cycling74.com/reference/string.startswith) | Test whether a string object starts with a substring |
