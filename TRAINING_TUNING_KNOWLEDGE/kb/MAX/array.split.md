---
type: max
name: "array.split"
summary: "Split an array object into two new array objects at a specified index"
signal: false
url: "https://docs.cycling74.com/reference/array.split/"
package: "Max"
see_also: ["array", "array.slice", "array.subarray", "zl.ecils", "zl.slice"]
---
# array.split

Split an array object into two new array objects at a specified index

## Description

The position set as an argument or

## Arguments

### position[int] optional

Element Index position of the array where the split will occur.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received arrays and trigger output.

### int

Convert an incoming integer to an array from the left inlet, then process as described for the  array  message.

Set the index position where to split the array from the left inlet.

### (inlet1)

TEXT\_HERE

### float

Convert an incoming floating-point number to an array, then process as described for the  array  message.

### list

Convert an incoming list to an array, then process as described for the  array  message.

### anything

Convert an incoming list to an array, then process as described for the  array  message.

### array

In the left inlet,an array will trigger output of two separate arrays separated by a determined index position. Elements to the left of the position will be sent out the left outlet. Elements to the right of the position will be sent out the right outlet.

### dictionary

Wrap an incoming dictionary object in an array, then process as described for the  array  message.

### string

Wrap a string object in an array, then process as described for the  array  message.

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [array.slice](https://docs.cycling74.com/reference/array.slice) | Output a range of elements of an array object as a new array object |
| [array.subarray](https://docs.cycling74.com/reference/array.subarray) | Output a range of elements of an array object as a new array object |
| [zl.ecils](https://docs.cycling74.com/reference/zl.ecils) | Slice a list in reverse order |
| [zl.slice](https://docs.cycling74.com/reference/zl.slice) | Slice a list in two |
