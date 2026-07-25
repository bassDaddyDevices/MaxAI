---
type: max
name: "array.sort"
summary: "Sort the elements of an array object according to a test"
signal: false
url: "https://docs.cycling74.com/reference/array.sort/"
package: "Max"
see_also: ["array", "array.filter", "array.map", "array.reverse", "coll", "zl.sort"]
---
# array.sort

Sort the elements of an array object according to a test

## Description

Each pair of entries is output, the user compares them and then passes a 1 (left is > right) or a 0 (left is <= right) to determine a final sorted order.

#### Discussion

Similar to [array.map](https://docs.cycling74.com/reference/array.map) and [array.reduce](https://docs.cycling74.com/reference/array.reduce), as the object iterates over the elements of the array, send a value to the rightmost inlet to finish processing each pair, until the final result is determined.

## Arguments

None.

## Attributes

### simple[int]

Simple sorting mode

Possible values:

0 = 'Off'

1 = 'Ascending'

2 = 'Descending'

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

### (inlet1)

As you compare each two elements of the array, send the comparison result to the rightmost inlet.

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

Pairs of array elements will be output from the second and third outlets. Compare them and send the result to the rightmost inlet, sending a 1 if the left is greater than the right, or a 0 if the right is greater than or equal to the left. Finally, the object will output the sorted result. The input array is not modified, but a sorted copy is output.

### cancel

TEXT\_HERE

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
| [array.filter](https://docs.cycling74.com/reference/array.filter) | Output elements of an array matching a condition |
| [array.map](https://docs.cycling74.com/reference/array.map) | Perform an operation on every element of an array object, replacing elements in-place |
| [array.reverse](https://docs.cycling74.com/reference/array.reverse) | Reverse the order of elements in an array object |
| [coll](https://docs.cycling74.com/reference/coll) | Store and edit a collection of data |
| [zl.sort](https://docs.cycling74.com/reference/zl.sort) | Arrange a list in alphanumeric order |
