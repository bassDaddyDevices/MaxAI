---
type: max
name: "array.foreach"
summary: "Iterate the elements of an array"
signal: false
url: "https://docs.cycling74.com/reference/array.foreach/"
package: "Max"
see_also: ["array", "array.iter", "array.stream", "array.tuplewise", "zl.iter"]
---
# array.foreach

Iterate the elements of an array

## Description

Iterate the elements of an array, with index and a done-iterating bang.

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

The array elements are sent out in order, along with the index of each element. A bang is output in the end, to indicate the end of the list.

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
| [array.iter](https://docs.cycling74.com/reference/array.iter) | Iterate every element of an array object |
| [array.stream](https://docs.cycling74.com/reference/array.stream) | Make an array of a certain size |
| [array.tuplewise](https://docs.cycling74.com/reference/array.tuplewise) | Make an array of a certain size (counting iterations) |
| [zl.iter](https://docs.cycling74.com/reference/zl.iter) | Successively output lists of specific size |
