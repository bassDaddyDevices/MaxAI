---
type: max
name: "string.startswith"
summary: "Test whether a string object starts with a substring"
signal: false
url: "https://docs.cycling74.com/reference/string.startswith/"
package: "Max"
see_also: ["string", "string.contains", "string.endswith"]
---
# string.startswith

Test whether a string object starts with a substring

## Arguments

### comparison string[anything] optional

Initial string for comparison (string2)

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

Test whether a string object starts with a substring.

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [string.contains](https://docs.cycling74.com/reference/string.contains) | Test whether a string object contains another string |
| [string.endswith](https://docs.cycling74.com/reference/string.endswith) | Test whether a string object ends with a substring |
