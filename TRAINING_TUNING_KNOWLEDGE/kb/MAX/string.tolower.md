---
type: max
name: "string.tolower"
summary: "Convert uppercase characters in a string object to lowercase"
signal: false
url: "https://docs.cycling74.com/reference/string.tolower/"
package: "Max"
see_also: ["string", "string.toupper"]
---
# string.tolower

Convert uppercase characters in a string object to lowercase

## Description

Note that this only works for ASCII letters, not for complex UTF-8 characters.

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

### string

When sent to the left inlet, a string will be converted to lowercase and sent out the left outlet.

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [string.toupper](https://docs.cycling74.com/reference/string.toupper) | Convert lowercase characters in a string object to uppercase |
