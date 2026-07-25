---
type: max
name: "array.remove"
summary: "Remove a range of elements from an array object"
signal: false
url: "https://docs.cycling74.com/reference/array.remove/"
package: "Max"
see_also: ["array", "array.slice", "array.subarray", "zl.ecils", "zl.slice"]
---
# array.remove

Remove a range of elements from an array object

## Arguments

### index-range[list] optional

The index range for removal includes the start index value and the end index value (0-based).

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

TEXT\_HERE

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

In the middle inlet, set the start index for removal. In the right inlet, set the end index for removal . The index range for removal includes the start index value and the end index value (0-based). In the left inlet, setting an array will trigger output of the array with the specified range of elements removed.

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
| [array.slice](https://docs.cycling74.com/reference/array.slice) | Output a range of elements of an array object as a new array object |
| [array.subarray](https://docs.cycling74.com/reference/array.subarray) | Output a range of elements of an array object as a new array object |
| [zl.ecils](https://docs.cycling74.com/reference/zl.ecils) | Slice a list in reverse order |
| [zl.slice](https://docs.cycling74.com/reference/zl.slice) | Slice a list in two |
