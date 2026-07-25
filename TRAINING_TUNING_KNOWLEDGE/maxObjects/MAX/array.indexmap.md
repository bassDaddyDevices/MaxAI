---
type: max
name: "array.indexmap"
summary: "Reorder the elements of an array object based on an indexed map"
signal: false
url: "https://docs.cycling74.com/reference/array.indexmap/"
package: "Max"
see_also: ["array", "zl.indexmap"]
---
# array.indexmap

Reorder the elements of an array object based on an indexed map

## Description

Use an array of integers (an index map) to reorder the elements of another array.

## Arguments

### index-map[list] optional

initial index map

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

Outputs the given array, but with the elements reordered according to the given index map. Indexes start at 0, and duplicates are allowed. For example, applying the index map [2, 1, 1, 0] to the array [A, B, C] would result in the array [C, B, B, A].

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
| [zl.indexmap](https://docs.cycling74.com/reference/zl.indexmap) | Create new list from list of indexes |
