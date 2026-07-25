---
type: max
name: "array.union"
summary: "Combine two arrays into a new array object containing non-duplicate entries of both arrays"
signal: false
url: "https://docs.cycling74.com/reference/array.union/"
package: "Max"
see_also: ["array", "array.sect", "array.unique", "zl.sect", "zl.union", "zl.unique"]
---
# array.union

Combine two arrays into a new array object containing non-duplicate entries of both arrays

## Description

Combine two arrays into a new array object containing non-duplicate entries of both arrays. For instance, the arrays [ 0, 1, 1, 2, 8 ] and [ 2, 2, 3, 3, 5 ] would become a new array [ 0, 1, 2, 8, 3, 5 ].

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

In the left inlet, an incoming array will be compared with the right-hand array. A new array will be generated containing non-duplicate entries of both arrays, which will be output. In the right inlet, set the right-hand array.

### dictionary

Wrap an incoming dictionary object in an array, then process as described for the  array  message.

### string

Wrap a string object in an array, then process as described for the  array  message.

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [array.sect](https://docs.cycling74.com/reference/array.sect) | Return the elements of an array object which intersect with another array object |
| [array.unique](https://docs.cycling74.com/reference/array.unique) | Filtering duplicates and subtract arrays |
| [zl.sect](https://docs.cycling74.com/reference/zl.sect) | Find common items between two lists |
| [zl.union](https://docs.cycling74.com/reference/zl.union) | Combine two lists without duplicating shared items |
| [zl.unique](https://docs.cycling74.com/reference/zl.unique) | Remove items from a list |
