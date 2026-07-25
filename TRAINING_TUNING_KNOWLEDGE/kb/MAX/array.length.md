---
type: max
name: "array.length"
summary: "Determine the length of an array object"
signal: false
url: "https://docs.cycling74.com/reference/array.length/"
package: "Max"
see_also: ["array", "zl.len"]
---
# array.length

Determine the length of an array object

## Description

Length is determined by sending a message to the left inlet.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received arrays and trigger output

### int

Convert an incoming floating-point number to an array, then process as described for the  array  message.

Arguments:

- value
  [int]

### float

Convert an incoming floating-point number to an array, then process as described for the  array  message.

Arguments:

- value
  [float]

### list

Convert an incoming list to an array, then process as described for the  array  message.

Arguments:

- list-value
  [list]

### anything

Convert an incoming list to an array, then process as described for the  array  message.

Arguments:

- array-value
  [list]

### array

Output the length of an array when and array is sent to the left inlet.

Arguments:

- dictionary-value
  [list]

### clear

Clear the recently stored array from the [array.legnth](https://docs.cycling74.com/reference/array.legnth) object.

Arguments:

- clear
  [list]

### dictionary

Wrap an incoming dictionary object in an array, then process as described for the  array  message.

Arguments:

- dictionary-value
  [list]

### string

Wrap a string object in an array, then process as described for the  array  message.

Arguments:

- string-value
  [list]

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [zl.len](https://docs.cycling74.com/reference/zl.len) | Get list length |
