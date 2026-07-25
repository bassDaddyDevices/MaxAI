---
type: max
name: "array.sect"
summary: "Return the elements of an array object which intersect with another array object"
signal: false
url: "https://docs.cycling74.com/reference/array.sect/"
package: "Max"
see_also: ["array", "array.union", "array.unique", "zl.sect", "zl.union", "zl.unique"]
---
# array.sect

Return the elements of an array object which intersect with another array object

## Description

Intersection means that the elements are identical or equivalent (in the case of array, dictionary and string objects).

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

In the left inlet, an incoming array will be compared with the right-hand array. The intersecting elements will be appended to a new array, which will be output. In the right inlet, set the right-hand array. Elements do not need to appear in the same order.

### dictionary

Wrap an incoming dictionary object in an array, then process as described for the  array  message.

### string

Wrap a string object in an array, then process as described for the  array  message.

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [array.union](https://docs.cycling74.com/reference/array.union) | Combine two arrays into a new array object containing non-duplicate entries of both arrays |
| [array.unique](https://docs.cycling74.com/reference/array.unique) | Filtering duplicates and subtract arrays |
| [zl.sect](https://docs.cycling74.com/reference/zl.sect) | Find common items between two lists |
| [zl.union](https://docs.cycling74.com/reference/zl.union) | Combine two lists without duplicating shared items |
| [zl.unique](https://docs.cycling74.com/reference/zl.unique) | Remove items from a list |
