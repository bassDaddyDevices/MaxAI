---
type: max
name: "array.indexof"
summary: "Search for the index of an array element"
signal: false
url: "https://docs.cycling74.com/reference/array.indexof/"
package: "Max"
see_also: ["array", "array.foreach", "zl.sub"]
---
# array.indexof

Search for the index of an array element

## Description

Output the position of an array element within a longer array as an integer index (0-based). Output -1  if the element cannot be found.

## Arguments

None.

## Attributes

### all[int]: 0

All matching indices will be output as a list. If there are no matches, a single -1  will be output.

### offset[int]: 0

Offsets are 0-based. If you want to sequentially search an array for an element, pass the (previous match + 1) as the offset and send a  bang  to get the next match. A -1  will be output when there are no more matches.

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

This search is case-sensitive. Will output the position of the provided element (left inlet) in the larger array (right inlet) if found, otherwise will output -1 .

A multiple-element input in the left inlet will match an array (e.g.  a b c  will find index 2 of  [ 1, 2, [ a, b, c ], 4] ), but does not match a sequence of individual elements (that is,  a b c  will not find anything in  [ 1, 2, a, b, c, 4 ] ).

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
| [array.foreach](https://docs.cycling74.com/reference/array.foreach) | Iterate the elements of an array |
| [zl.sub](https://docs.cycling74.com/reference/zl.sub) | Output position for each occurance of right list in left |
