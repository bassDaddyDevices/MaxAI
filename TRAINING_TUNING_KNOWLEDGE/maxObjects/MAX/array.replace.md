---
type: max
name: "array.replace"
summary: "Replace elements in an array"
signal: false
url: "https://docs.cycling74.com/reference/array.replace/"
package: "Max"
see_also: ["array", "array.foreach", "array.map", "array.remove"]
---
# array.replace

Replace elements in an array

## Arguments

None.

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

### (inlet2)

TEXT\_HERE

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

In the right inlet, set the start index at which to replace elements (0-based). In the middle inlet, set an array to operate upon (the base array). In the left inlet, an array will trigger output of the base array with elements replaced by the elements of the incoming array (the replacement array), beginning at the start index. An index of -2 will ignore the replacement array and output a copy of the base array. An index of -1 will ignore the base array and output a copy of the replacement array.

Arguments:

- array-value
  [list]

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
| [array.foreach](https://docs.cycling74.com/reference/array.foreach) | Iterate the elements of an array |
| [array.map](https://docs.cycling74.com/reference/array.map) | Perform an operation on every element of an array object, replacing elements in-place |
| [array.remove](https://docs.cycling74.com/reference/array.remove) | Remove a range of elements from an array object |
