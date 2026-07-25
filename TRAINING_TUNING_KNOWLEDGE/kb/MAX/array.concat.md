---
type: max
name: "array.concat"
summary: "Concatenate two array objects"
signal: false
url: "https://docs.cycling74.com/reference/array.concat/"
package: "Max"
see_also: ["array", "array.push", "array.unshift", "append", "prepend"]
---
# array.concat

Concatenate two array objects

## Description

The data in the array received in the right inlet will be appended to the data in the array received in the left inlet and a new array will be output. The original array objects are not modified.

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

In the right inlet, the array is stored and no output is generated. In the left inlet, the contents of the array are concatenated with the contents of any array received in the right inlet, and a new array is sent to the outlet.

Arguments:

- array-value
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
| [array.push](https://docs.cycling74.com/reference/array.push) | Add one or more elements to the end of an array |
| [array.unshift](https://docs.cycling74.com/reference/array.unshift) | Add one or more elements to the beginning of an array |
| [append](https://docs.cycling74.com/reference/append) | Append arguments to the end of a message |
| [prepend](https://docs.cycling74.com/reference/prepend) | Add a message in front of input |
