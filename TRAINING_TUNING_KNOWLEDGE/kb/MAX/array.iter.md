---
type: max
name: "array.iter"
summary: "Iterate every element of an array object"
signal: false
url: "https://docs.cycling74.com/reference/array.iter/"
package: "Max"
see_also: ["array", "array.foreach", "array.stream", "array.tuplewise", "zl.iter"]
---
# array.iter

Iterate every element of an array object

## Description

Outputs each element in an array object sequentially, as a series of messages.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received array and trigger output.

### int

Convert an incoming integer to an array, then process as described for the  array  message.

### float

Convert an incoming floating-point number to an array, then process as described for the  array  message.

### list

Convert an incoming list to an array, then process as described for the  array  message.

### anything

Convert an incoming list to an array, then process as described for the  array  message.

### array

Output each element of the array sequentially, as a series of individual messages.

### dictionary

Wrap an incoming dictionary object in an array, then process as described for the  array  message.

### string

Wrap a string object in an array, then process as described for the  array  message.

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [array.foreach](https://docs.cycling74.com/reference/array.foreach) | Iterate the elements of an array |
| [array.stream](https://docs.cycling74.com/reference/array.stream) | Make an array of a certain size |
| [array.tuplewise](https://docs.cycling74.com/reference/array.tuplewise) | Make an array of a certain size (counting iterations) |
| [zl.iter](https://docs.cycling74.com/reference/zl.iter) | Successively output lists of specific size |
