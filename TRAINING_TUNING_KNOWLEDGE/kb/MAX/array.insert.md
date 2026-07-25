---
type: max
name: "array.insert"
summary: "Insert elements into an array object"
signal: false
url: "https://docs.cycling74.com/reference/array.insert/"
package: "Max"
see_also: ["array", "array.concat", "array.index", "zl.mth", "zl.nth"]
---
# array.insert

Insert elements into an array object

## Description

Elements can be inserted at the beginning, the end, or in the middle, based on the index specified (0-based).

## Arguments

### index[int] optional

The index at which to insert elements into incoming arrays. By default, this is 0 (insert before the first element).

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received array and trigger output.

### int

Convert an incoming integer to an array, then process as described for the  array  message.

### (inlet2)

Set the index at which to insert an element or elements into an incoming array object. Indices begin at 0 for the first element, and elements are inserted  *previous*  to the specified index. However, negative indices can also be to insert  *after*  elements, counting from the back of the array -- an index of -1  will insert elements at the end of the array, a la [array.concat](https://docs.cycling74.com/reference/array.concat).

Arguments:

- index
  [int]

### float

Convert an incoming floating-point number to an array, then process as described for the  array  message.

### list

Convert an incoming list to an array, then process as described for the  array  message.

### anything

Convert an incoming list to an array, then process as described for the  array  message.

### array

In the middle inlet, an element or multiple elements can be specified for insertion. In the left inlet, the provided elements will be inserted into the incoming array at the specified index, and the resulting array sent to the output.

### dictionary

Wrap an incoming dictionary object in an array, then process as described for the  array  message.

### string

Wrap a string object in an array, then process as described for the  array  message.

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [array.concat](https://docs.cycling74.com/reference/array.concat) | Concatenate two array objects |
| [array.index](https://docs.cycling74.com/reference/array.index) | Output the indexed element of an array object |
| [zl.mth](https://docs.cycling74.com/reference/zl.mth) | Extract item from list |
| [zl.nth](https://docs.cycling74.com/reference/zl.nth) | Extract item from list |
