---
type: max
name: "array.join"
summary: "Convert an array object to a string object with an optional separator string"
signal: false
url: "https://docs.cycling74.com/reference/array.join/"
package: "Max"
see_also: ["array", "array.tolist"]
---
# array.join

Convert an array object to a string object with an optional separator string

## Description

Join the elements of an array together to form a string. The optional separator string will be placed between each element.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received arrays and trigger output.

### int

Convert an incoming integer to an array, then process as described for the  array  message.

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

- list-value
  [list]

### array

The optional separator string will be placed between each two elements of the array.

### clear

Resets the separator string to an empty string.

### string

Wrap a string object in an array, then process as described for the  array  message.

Arguments:

- string-value
  [list]

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [array.tolist](https://docs.cycling74.com/reference/array.tolist) | Convert an array object to a list |
