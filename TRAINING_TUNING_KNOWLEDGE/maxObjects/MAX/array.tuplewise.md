---
type: max
name: "array.tuplewise"
summary: "Make an array of a certain size (counting iterations)"
signal: false
url: "https://docs.cycling74.com/reference/array.tuplewise/"
package: "Max"
see_also: ["array", "array.stream", "zl.iter", "zl.queue"]
---
# array.tuplewise

Make an array of a certain size (counting iterations)

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received arrays and trigger output

### int

Convert an incoming floating-point number to an array, then process as described for the  array  message.

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

Add a list of elements sequentially (one element at a time) to the output array.

Arguments:

- array-value
  [list]

### array

In the right inlet, a number specifies the length of the output array. Following the receipt of this number, the object will collect this number of elements input through the left inlet. After the array-length is complete, and with each subsequent input, the array will be output from the left outlet. An index (0-based) will be output from the right outlet along with each array sent from the left outlet, counting upward since the creation of the object, or since the last  clear  was received.

Arguments:

- array-value
  [list]

### clear

Use the  clear  message to reset the index to 0.

### dictionary

Add a dictionary object to the output array.

Arguments:

- dictionary-value
  [list]

### string

Add a string object to the output array.

Arguments:

- string-value
  [list]

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [array.stream](https://docs.cycling74.com/reference/array.stream) | Make an array of a certain size |
| [zl.iter](https://docs.cycling74.com/reference/zl.iter) | Successively output lists of specific size |
| [zl.queue](https://docs.cycling74.com/reference/zl.queue) | Output elements of a list in the order they are received |
