---
type: max
name: "array.stream"
summary: "Make an array of a certain size"
signal: false
url: "https://docs.cycling74.com/reference/array.stream/"
package: "Max"
see_also: ["array", "array.group", "array.tuplewise", "zl.iter", "zl.queue"]
---
# array.stream

Make an array of a certain size

## Description

array.stream accepts a number in the right inlet which specifies the length of the output array. Following the receipt of this number, the object will collect this number of elements input through the left inlet. After the array-length is complete, and with each subsequent input, the array will be output from the left outlet. A  1  or a  0  will be output from the right outlet depending on whether the array-length has been reached or not. A  1  signifies that the array-length has been reached and that the object is now collecting the stream. Use the  clear  message to reset the array.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received array and trigger output.

### int

If the output array length is negative, elements are added to the front of the output array, otherwise they are added to the end.

Arguments:

- array-length
  [int]

### float

If the output array length is negative, elements are added to the front of the output array, otherwise they are added to the end.

Arguments:

- array-length
  [int/float]

### list

Convert an incoming list to an array, then process as described for the  array  message.

### anything

Convert an incoming list to an array, then process as described for the  array  message.

### array

Add a list of elements sequentially (one element at a time) to the output array.

### clear

Resets the streaming process.

### dictionary

Wrap an incoming dictionary object in an array, then process as described for the  array  message.

### string

Wrap a string object in an array, then process as described for the  array  message.

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [array.group](https://docs.cycling74.com/reference/array.group) | Output an array when it reaches a certain size |
| [array.tuplewise](https://docs.cycling74.com/reference/array.tuplewise) | Make an array of a certain size (counting iterations) |
| [zl.iter](https://docs.cycling74.com/reference/zl.iter) | Successively output lists of specific size |
| [zl.queue](https://docs.cycling74.com/reference/zl.queue) | Output elements of a list in the order they are received |
