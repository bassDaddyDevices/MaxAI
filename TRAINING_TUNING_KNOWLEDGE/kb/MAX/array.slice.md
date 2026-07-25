---
type: max
name: "array.slice"
summary: "Output a range of elements of an array object as a new array object"
signal: false
url: "https://docs.cycling74.com/reference/array.slice/"
package: "Max"
see_also: ["array", "array.subarray", "zl.ecils", "zl.slice"]
---
# array.slice

Output a range of elements of an array object as a new array object

## Description

[array.slice](https://docs.cycling74.com/reference/array.slice) is similar to [array.subarray](https://docs.cycling74.com/reference/array.subarray), but attempts to conform to the JavaScript Array.slice() behavior.

#### Discussion

In particular, the slice is from  slice-start  to  slice-end - 1  ([array.subarray](https://docs.cycling74.com/reference/array.subarray) slices from  slice-start  to  slice-end  inclusively). Unlike [array.subarray](https://docs.cycling74.com/reference/array.subarray), reverse slices are not permitted.  Unlike the JS Array.slice(), [array.slice](https://docs.cycling74.com/reference/array.slice) will accept an optional  0  as a 2nd range argument to indicate that the slice should extend to the end of the array.

## Arguments

### slice-indeces[list] optional

Set the range to slice when an array is received in the leftmost inlet. Negative values index from the end of the array, and a single value on its own implicitly stretches to the end of the array. If the end of the range is before the start, then the elements of the range will be reversed.

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

TEXT\_HERE

### array

Set the range of values to output using the second inlet or the object arguments.

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
| [array.subarray](https://docs.cycling74.com/reference/array.subarray) | Output a range of elements of an array object as a new array object |
| [zl.ecils](https://docs.cycling74.com/reference/zl.ecils) | Slice a list in reverse order |
| [zl.slice](https://docs.cycling74.com/reference/zl.slice) | Slice a list in two |
