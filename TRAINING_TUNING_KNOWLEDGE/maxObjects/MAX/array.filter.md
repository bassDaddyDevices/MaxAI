---
type: max
name: "array.filter"
summary: "Output elements of an array matching a condition"
signal: false
url: "https://docs.cycling74.com/reference/array.filter/"
package: "Max"
see_also: ["array", "array.map", "array.reduce", "zl.filter"]
---
# array.filter

Output elements of an array matching a condition

## Description

If the condition set for the object is '0' the element is excluded in the filtered array output. In the case the condition is '1' it is included in the array.

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

### (inlet1)

TEXT\_HERE

### float

Convert an incoming floating-point number to an array, then process as described for the  array  message.

### list

Convert an incoming list to an array, then process as described for the  array  message.

### anything

Convert an incoming list to an array, then process as described for the  array  message.

### array

In the left inlet, sending an array will trigger output of the filtered array, element value and the index element. Entries are output sequentially.

### cancel

TEXT\_HERE

### dictionary

Wrap an incoming dictionary object in an array, then process as described for the  array  message.

### string

Wrap a string object in an array, then process as described for the  array  message.

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [array.map](https://docs.cycling74.com/reference/array.map) | Perform an operation on every element of an array object, replacing elements in-place |
| [array.reduce](https://docs.cycling74.com/reference/array.reduce) | Combine array elements based on a custom function |
| [zl.filter](https://docs.cycling74.com/reference/zl.filter) | Remove items in a list |
