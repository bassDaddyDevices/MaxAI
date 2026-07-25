---
type: max
name: "string.change"
summary: "Detect string changes"
signal: false
url: "https://docs.cycling74.com/reference/string.change/"
package: "Max"
see_also: ["string", "string.compare", "dict.compare", "zl.change"]
---
# string.change

Detect string changes

## Description

Output a string if it is different from the previous string received. Use the right inlet to set the test string without output.

## Arguments

### comparison-string[list] optional

Set the test/comparison string for comparison

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

If the string has changed, then a 1 will be sent out the right outlet, and the string will be sent out of the left outlet. Otherwise, a 0 is sent out the right outlet only. In either case, the internal value of the previous string will update. Use the right inlet to update the value of the previous string without output.

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [string.compare](https://docs.cycling74.com/reference/string.compare) | Compare two string objects for equality |
| [dict.compare](https://docs.cycling74.com/reference/dict.compare) | Compare two dictionaries for equivalence. |
| [zl.change](https://docs.cycling74.com/reference/zl.change) | Filter out list repetitions |
