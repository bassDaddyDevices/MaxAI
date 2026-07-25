---
type: max
name: "array.reverse"
summary: "Reverse the order of elements in an array object"
signal: false
url: "https://docs.cycling74.com/reference/array.reverse/"
package: "Max"
see_also: ["array", "zl.reverse"]
---
# array.reverse

Reverse the order of elements in an array object

## Description

The output array will contain the elements of the incoming array, but backward.

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

Output the array with elements in reverse order.

### dictionary

Wrap an incoming dictionary object in an array, then process as described for the  array  message.

### string

Wrap a string object in an array, then process as described for the  array  message.

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [zl.reverse](https://docs.cycling74.com/reference/zl.reverse) |  |
