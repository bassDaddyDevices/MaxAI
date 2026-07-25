---
type: max
name: "string.slice"
summary: "Generate a new string from a range of characters in an incoming string"
signal: false
url: "https://docs.cycling74.com/reference/string.slice/"
package: "Max"
see_also: ["string", "string.substring"]
---
# string.slice

Generate a new string from a range of characters in an incoming string

## Description

[string.slice](https://docs.cycling74.com/reference/string.slice) is similar to [string.substring](https://docs.cycling74.com/reference/string.substring), but attempts to conform to the JavaScript String.slice() behavior.

#### Discussion

In particular, the slice is from  slice-start  to  slice-end - 1  ([string.substring](https://docs.cycling74.com/reference/string.substring) slices from  slice-start  to  slice-end  inclusively). Unlike [string.substring](https://docs.cycling74.com/reference/string.substring), reverse slices are not permitted.  Unlike the JS String.slice(), [string.slice](https://docs.cycling74.com/reference/string.slice) will accept an optional  0  as a 2nd range argument to indicate that the slice should extend to the end of the array.

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

Set the range of values to output using the second inlet or the object arguments.

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [string.substring](https://docs.cycling74.com/reference/string.substring) | Generate a new string from a range of characters in an incoming string |
