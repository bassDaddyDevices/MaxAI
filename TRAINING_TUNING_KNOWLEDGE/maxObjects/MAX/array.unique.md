---
type: max
name: "array.unique"
summary: "Filtering duplicates and subtract arrays"
signal: false
url: "https://docs.cycling74.com/reference/array.unique/"
package: "Max"
see_also: ["array", "array.sect", "array.union", "zl.sect", "zl.union", "zl.unique"]
---
# array.unique

Filtering duplicates and subtract arrays

## Description

Combine two arrays into a new array object containing non-duplicate entries of the first array which do not appear in the second array.

#### Discussion

The object combines two operations: removing duplicates and filtering. Duplicate entries from the first array are removed, and then any entries in the first array that appear in the second are also removed. For instance, the arrays [ 0, 1, 1, 2, 8 ] and [ 2, 2, 3, 3, 5 ] would become a new array [ 0, 1, 8 ].

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

The output will be a new array containing non-duplicate entries of the first array which do not appear in the second array.

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
| [array.sect](https://docs.cycling74.com/reference/array.sect) | Return the elements of an array object which intersect with another array object |
| [array.union](https://docs.cycling74.com/reference/array.union) | Combine two arrays into a new array object containing non-duplicate entries of both arrays |
| [zl.sect](https://docs.cycling74.com/reference/zl.sect) | Find common items between two lists |
| [zl.union](https://docs.cycling74.com/reference/zl.union) | Combine two lists without duplicating shared items |
| [zl.unique](https://docs.cycling74.com/reference/zl.unique) | Remove items from a list |
