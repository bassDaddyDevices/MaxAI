---
type: max
name: "string.toupper"
summary: "Convert lowercase characters in a string object to uppercase"
signal: false
url: "https://docs.cycling74.com/reference/string.toupper/"
package: "Max"
see_also: ["string", "string.tolower"]
---
# string.toupper

Convert lowercase characters in a string object to uppercase

## Description

Note that this only works for ASCII letters, not for complex UTF-8 characters.

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

Convert lowercase characters in a string object to uppercase. Note that this only works for ASCII letters, not for complex UTF-8 characters.

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [string.tolower](https://docs.cycling74.com/reference/string.tolower) | Convert uppercase characters in a string object to lowercase |
