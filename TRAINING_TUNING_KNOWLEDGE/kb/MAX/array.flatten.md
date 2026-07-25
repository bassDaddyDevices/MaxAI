---
type: max
name: "array.flatten"
summary: "Flatten a multi-dimensional array object to a single dimension"
signal: false
url: "https://docs.cycling74.com/reference/array.flatten/"
package: "Max"
see_also: ["array"]
---
# array.flatten

Flatten a multi-dimensional array object to a single dimension

## Description

Flattening can be simple sequential, or recursive sequential, depending on mode.

## Arguments

None.

## Attributes

### mode[int]: 0

Flatten Mode

Possible values:

0 = 'Recursive Sequential'
(
Flatten sequentially and recursively
)
For example,

 [ 1, 2, 3, [ 4, 5, 6, [ 7, 8, 9 ] ] ]  is flattened to

 [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] .

1 = 'Simple Sequential'
(
Flatten sequentially, only recurse one level
)
For example,

 [ 1, 2, 3, [ 4, 5, 6, [ 7, 8, 9 ] ] ]  is flattened to

 [ 1, 2, 3, 4, 5, 6, [ 7, 8, 9 ] ] .

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received array and trigger output.

### int

Convert an incoming integer to an array, then process as described for the  array  message.

### float

Convert an incoming floating-point number to an array, then process as described for the  array  message.

### list

Convert an incoming list to an array, then process as described for the  array  message.

### anything

Convert an incoming list to an array, then process as described for the  array  message.

### array

Performs array flattening as described for the mode attribute, then outputs the flattened array.

### dictionary

Wrap an incoming dictionary object in an array, then process as described for the  array  message.

### string

Wrap a string object in an array, then process as described for the  array  message.

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
