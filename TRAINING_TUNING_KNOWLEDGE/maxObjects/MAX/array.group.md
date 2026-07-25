---
type: max
name: "array.group"
summary: "Output an array when it reaches a certain size"
signal: false
url: "https://docs.cycling74.com/reference/array.group/"
package: "Max"
see_also: ["array", "array.iter", "array.stream", "array.tuplewise", "zl.group", "zl.iter"]
---
# array.group

Output an array when it reaches a certain size

## Description

Outputs an array after the number of elements specified by the group size are received. Incoming arrays larger than the group size are split into multiple output arrays.

## Arguments

### initial-size[int] optional

Specifies a number of elements from incoming arrays to be grouped and output.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Immediately outputs current array (even if it hasn't reached the maximum size).

### int

Convert an incoming integer to an array, then process as described for the  array  message.

### (inlet1)

Specifies a number of elements from incoming arrays to be grouped and output.

Arguments:

- array-size
  [int]

### float

Convert an incoming floating-point number to an array, then process as described for the  array  message.

### list

Convert an incoming list to an array, then process as described for the  array  message.

### anything

Convert an incoming list to an array, then process as described for the  array  message.

### array

Append elements to the output array. When the output array reaches the size specified as an argument (or as an  int  in the right inlet), it will be sent from the outlet. Upon output, the output array is reset to length 0.

### clear

Resets the length of the output array to 0

### dictionary

Wrap an incoming dictionary object in an array, then process as described for the  array  message.

### string

Wrap a string object in an array, then process as described for the  array  message.

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [array.iter](https://docs.cycling74.com/reference/array.iter) | Iterate every element of an array object |
| [array.stream](https://docs.cycling74.com/reference/array.stream) | Make an array of a certain size |
| [array.tuplewise](https://docs.cycling74.com/reference/array.tuplewise) | Make an array of a certain size (counting iterations) |
| [zl.group](https://docs.cycling74.com/reference/zl.group) | Store and output a list |
| [zl.iter](https://docs.cycling74.com/reference/zl.iter) | Successively output lists of specific size |
