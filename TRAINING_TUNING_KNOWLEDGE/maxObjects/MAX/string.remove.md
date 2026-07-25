---
type: max
name: "string.remove"
summary: "Remove a range of characters from a string object"
signal: false
url: "https://docs.cycling74.com/reference/string.remove/"
package: "Max"
see_also: ["string", "string.slice"]
---
# string.remove

Remove a range of characters from a string object

## Description

The range is 0-based and inclusive (a range of 2 4 removes character 2, 3 and 4 of the incoming string).

## Arguments

### remove-start[int] optional

The range is from 0 to (the number of characters in the string - 1)

### remove-end[int] optional

The range is from 0 to (the number of characters in the string - 1)

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received string and trigger output.

### int

Convert an incoming integer to a string, then process as described for the  string  message.

### (inlet1)

The range is from 0 to (the number of characters in the string - 1)

Arguments:

- remove-start
  [int]

### (inlet2)

The range is from 0 to (the number of characters in the string - 1)

Arguments:

- remove-end
  [int]

### float

Convert an incoming floating-point number to a string, then process as described for the  string  message.

### list

Convert an incoming list to a string, then process as described for the  string  message.

### anything

Convert an incoming list to a string, then process as described for the  string  message.

### string

The specified range of characters is removed, and the resulting string is sent to the outlet.

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [string.slice](https://docs.cycling74.com/reference/string.slice) | Generate a new string from a range of characters in an incoming string |
