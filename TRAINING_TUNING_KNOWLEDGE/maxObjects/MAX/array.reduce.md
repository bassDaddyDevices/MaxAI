---
type: max
name: "array.reduce"
summary: "Combine array elements based on a custom function"
signal: false
url: "https://docs.cycling74.com/reference/array.reduce/"
package: "Max"
see_also: ["array", "array.filter", "array.map", "zl.median", "zl.sum"]
---
# array.reduce

Combine array elements based on a custom function

## Description

Perform an operation on every element of an array object, outputting the accumulated response.

#### Discussion

Two of the most useful, flexible operations on an array are map (see [array.map](https://docs.cycling74.com/reference/array.map)) and reduce. The map function performs an operation on each element of the array, returning a new array as a result. For example, a function "double" when mapped to an array might double each element. A reduce function applies some operation across the whole array, accumulating the result. A typical reduce operation would be "sum", a function that adds together all the elements of the array. In Max, the [array.reduce](https://docs.cycling74.com/reference/array.reduce) object iterates over each element of the array, and you generate a result by sending the accumulated value to the right inlet.

## Arguments

None.

## Attributes

### initial[atom]: 0

The value of the accumulator for the first iteration of the array (default = 0).

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

The object will iterate over the array, outputting each element, the index of each element, and the accumulated value. Send a value back to the rightmost inlet to accumulate the result. After iterating through each element, the object will output the final accumulated value.

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
| [zl.median](https://docs.cycling74.com/reference/zl.median) | Get the median value of a list of numbers |
| [zl.sum](https://docs.cycling74.com/reference/zl.sum) | Sum a list of numbers |
