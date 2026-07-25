---
type: max
name: "string.trimstart"
summary: "Remove whitespace from the beginning of a string object"
signal: false
url: "https://docs.cycling74.com/reference/string.trimstart/"
package: "Max"
see_also: ["string", "string.trim", "string.trimend"]
---
# string.trimstart

Remove whitespace from the beginning of a string object

## Description

Whitespace includes spaces, newlines, tabs, and carriage returns.

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

Whitespace includes spaces, newlines, tabs, and carriage returns.

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [string.trim](https://docs.cycling74.com/reference/string.trim) | Trim whitespace from the beginning and end of a string object |
| [string.trimend](https://docs.cycling74.com/reference/string.trimend) | Trim whitespace from the end of a string object |
