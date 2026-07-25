---
type: max
name: "array.rotate"
summary: "Rotate the elements in any array object"
signal: false
url: "https://docs.cycling74.com/reference/array.rotate/"
package: "Max"
see_also: ["array", "zl.rot"]
---
# array.rotate

Rotate the elements in any array object

## Description

Move elements forward or backwards in the array. Values will wrap around.

#### Discussion

Positive values rotate forwards, pushing values towards the end of the array. Values pushed past the last index will wrap around to the beginning of the array. Negative values rotate backwards, moving values towards the start of the array. A value of 0 will perform no rotation.

## Arguments

### rotation amount[int] optional

Number of positions to rotate. Negative to rotate left.

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

### (inlet1)

Positive values rotate forwards, pushing values towards the end of the array. Values pushed past the last index will wrap around to the beginning of the array. Negative values rotate backwards, moving values towards the start of the array. A value of 0 will perform no rotation.

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

Use the second inlet or an initial argument to set the number of positions to rotate. Positive values rotate forwards, pushing values towards the end of the array. Values pushed past the last index will wrap around to the beginning of the array. Negative values rotate backwards, moving values towards the start of the array. A value of 0 will perform no rotation.

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
| [zl.rot](https://docs.cycling74.com/reference/zl.rot) | Rotate a list |
