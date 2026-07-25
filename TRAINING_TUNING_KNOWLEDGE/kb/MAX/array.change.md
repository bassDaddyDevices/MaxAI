---
type: max
name: "array.change"
summary: "Detect array changes"
signal: false
url: "https://docs.cycling74.com/reference/array.change/"
package: "Max"
see_also: ["array", "array.compare", "dict.compare", "zl.change"]
---
# array.change

Detect array changes

## Description

Output an array if the order or value of the elements if different from the previous.

## Arguments

None.

## Attributes

### unordered[int]: 0

When comparing arrays, the order of elements is normally taken into account. When enabled, comparison will be performed without regard for the element order, such that [ 1, 2, 3 ] and [ 2, 3, 1 ] are considered equivalent.

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

Compare an array. In the right inlet, the array is stored and no output is generated. In the left inlet, the array is compared to the previous array received in the left inlet, or to any array received in the right inlet since any previous array was received in the left inlet. If the arrays are different, the incoming array will be output from the left inlet. A result (0/1) is sent to the right outlet, depending on whether the two arrays were the same or different.

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
| [array.compare](https://docs.cycling74.com/reference/array.compare) | Compare two arrays for equality |
| [dict.compare](https://docs.cycling74.com/reference/dict.compare) | Compare two dictionaries for equivalence. |
| [zl.change](https://docs.cycling74.com/reference/zl.change) | Filter out list repetitions |
