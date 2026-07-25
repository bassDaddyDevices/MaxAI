---
type: max
name: "array.shift"
summary: "Remove an element from the beginning of an array"
signal: false
url: "https://docs.cycling74.com/reference/array.shift/"
package: "Max"
see_also: ["array", "array.concat", "array.pop", "array.push", "array.unshift", "zl.queue", "zl.stack"]
---
# array.shift

Remove an element from the beginning of an array

## Description

Set the array to shift, then send bangs repeatedly to output the elements of the array one at a time. The remainder of the array is sent out the right outlet, and a bang is sent out the leftmost outlet when the array is empty.

#### Discussion

Send an array to the right inlet to set the array to shift. Then, as you send bangs to the first inlet, the object will output the first element of the array, removing the element each time, until the array is empty. Unlike the JavaScript implementation, the input array is not changed in place.

## Arguments

None.

## Attributes

### wrapmode[int]: 0

Wrap elements in array

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Remove the first element from the stored array and output it, sending the remainder out the rightmost outlet.

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

TEXT\_HERE

### clear

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
| [array.concat](https://docs.cycling74.com/reference/array.concat) | Concatenate two array objects |
| [array.pop](https://docs.cycling74.com/reference/array.pop) | Remove an element from the end of an array |
| [array.push](https://docs.cycling74.com/reference/array.push) | Add one or more elements to the end of an array |
| [array.unshift](https://docs.cycling74.com/reference/array.unshift) | Add one or more elements to the beginning of an array |
| [zl.queue](https://docs.cycling74.com/reference/zl.queue) | Output elements of a list in the order they are received |
| [zl.stack](https://docs.cycling74.com/reference/zl.stack) | Output elements of a list in reverse order |
