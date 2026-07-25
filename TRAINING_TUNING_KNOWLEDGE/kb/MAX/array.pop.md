---
type: max
name: "array.pop"
summary: "Remove an element from the end of an array"
signal: false
url: "https://docs.cycling74.com/reference/array.pop/"
package: "Max"
see_also: ["array", "array.concat", "array.push", "array.shift", "array.unshift", "zl.queue", "zl.stack"]
---
# array.pop

Remove an element from the end of an array

## Description

A bang sent to the left inlet will shift elements from the end of the output array (the remaining array from the right outlet and the popped element is sent via the middle outlet) until the array is empty, at which point a bang is sent from the left outlet. Unlike the JavaScript implementation, the input array is not changed in place.

## Arguments

None.

## Attributes

### wrapmode[int]: 0

Wrap elements in array

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Pop off the last element in an array from the right inlet. The updated array will appear out the right outlet. The popped element will print out the middle outlet.

If no elements are remaining in the array, a bang will be sent out the leftmost outlet.

### int

Convert an integer to an array from the right inlet, then process as described for the  array  message.

Arguments:

- value
  [int]

### float

Convert an incoming floating-point number to an array from the right inlet, then process as described for the  array  message.

Arguments:

- value
  [float]

### list

Convert an incoming list to an array from the right inlet, then process as described for the  array  message.

Arguments:

- list-value
  [list]

### anything

Convert an incoming list to an array from the right inlet, then process as described for the  array  message.

Arguments:

- list-value
  [list]

### array

Set the internal array to pop from the right inlet.

Arguments:

- array-value
  [list]

### clear

All internal arrays will be cleared when the  clear  message is sent to the left inlet.

### dictionary

Wrap an incoming dictionary object in an array from the right inlet, then process as described for the  array  message.

Arguments:

- dictionary-value
  [list]

### string

Wrap a string object in an array from the right inlet, then process as described for the  array  message.

Arguments:

- string-value
  [list]

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [array.concat](https://docs.cycling74.com/reference/array.concat) | Concatenate two array objects |
| [array.push](https://docs.cycling74.com/reference/array.push) | Add one or more elements to the end of an array |
| [array.shift](https://docs.cycling74.com/reference/array.shift) | Remove an element from the beginning of an array |
| [array.unshift](https://docs.cycling74.com/reference/array.unshift) | Add one or more elements to the beginning of an array |
| [zl.queue](https://docs.cycling74.com/reference/zl.queue) | Output elements of a list in the order they are received |
| [zl.stack](https://docs.cycling74.com/reference/zl.stack) | Output elements of a list in reverse order |
