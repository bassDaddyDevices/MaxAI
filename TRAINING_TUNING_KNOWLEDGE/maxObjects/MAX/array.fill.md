---
type: max
name: "array.fill"
summary: "Generate an array of a specified length"
signal: false
url: "https://docs.cycling74.com/reference/array.fill/"
package: "Max"
see_also: ["array", "array.expr"]
---
# array.fill

Generate an array of a specified length

## Description

Creates a new array object of a specified length, pre-filled with elements.

## Arguments

### length[int] optional

The length of the generated array.

### initial-contents[list] optional

Any data to be used to populate the array (without any initial data, the array will be filled with  0  s).

## Attributes

### mode[int]: 0

The mode determines how to resize data which doesn't match the length of the output array. Several options are available.

Possible values:

0 = 'Repeat'
(
Repeat elements
)
All elements of the array will be repeated to reach the required length. If the incoming left-inlet array has a length of 3, the array  [ 2 ]  would become  [ 2, 2, 2 ] ;  [ 2 1 ]  would become  [ 2 1 2 ] .

1 = 'Repeat Last'
(
Repeat the last element
)
The last element of the array will be repeated to reach the required length. If the incoming left-inlet array has a length of 3, the array  [ 2 ]  would become  [ 2, 2, 2 ] ;  [ 2, 1 ]  would become  [ 2, 1, 1 ] .

2 = 'Repeat Zero'
(
Repeat zero
)
The integer  0  will be repeated to reach the required length. If the incoming left-inlet array has a length of 3, the array  [ 2 ]  would become  [ 2, 0, 0 ] ;  [ 2, 1 ]  would become  [ 2, 1, 0 ] .

3 = 'Interpolate (Linear)'
(
Linear-interpolate
)
Linear interpolation will be performed on the array to reach the required length. If the incoming left-inlet array has a length of 3, the array  [ 1, 3 ]  would become  [ 1, 2, 3 ] ;  [ 5, 1 ]  would become  [ 5, 3, 1 ] . If all elements are  ints , the interpolation will be performed using integers; if any element is a  float , the interpolation will return floating-point numbers.

### range[atom]: 0 1

Range of Generated Values

### seed[int]

Random Seed

### urn[int]: 0

Urn Mode

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

The length of the generated array.

Arguments:

- length
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

A new array object will be created at the length specified by the object's first argument, or by a number received in the rightmost inlet. The object will then be filled with (by default)  0 , or by the contents specifed by additional arguments to the [array.fill](https://docs.cycling74.com/reference/array.fill) object, or an incoming array in the left inlet.

If the initial contents are not the same length as the output array, the mode will be used to determine how to handle the length discrepancy.

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
| [array.expr](https://docs.cycling74.com/reference/array.expr) | Evaluate a math expression for an array |
