---
type: max
name: "string.substring"
summary: "Generate a new string from a range of characters in an incoming string"
signal: false
url: "https://docs.cycling74.com/reference/string.substring/"
package: "Max"
see_also: ["string", "string.slice"]
---
# string.substring

Generate a new string from a range of characters in an incoming string

## Description

[string.substring](https://docs.cycling74.com/reference/string.substring) is similar to [string.slice](https://docs.cycling74.com/reference/string.slice), but doesn't conform to the JavaScript String.slice() behavior.

#### Discussion

In particular, the subarray is extracted from  subarray-start  to  subarray-end  inclusively ([string.slice](https://docs.cycling74.com/reference/string.slice) slices from  slice-start  to  slice-end - 1  exclusively). Unlike [string.slice](https://docs.cycling74.com/reference/string.slice), reverse slices are permitted.

## Arguments

### substring-indexes[list] optional

Set the range to extract when a string is received in the leftmost inlet. Negative values index from the end of the string, and a single value on its own implicitly stretches to the end of the string . If the end of the range is before the start, then the elements of the range will be reversed.

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

Set the range of values to output using the second inlet or the object arguments.

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [string.slice](https://docs.cycling74.com/reference/string.slice) | Generate a new string from a range of characters in an incoming string |
