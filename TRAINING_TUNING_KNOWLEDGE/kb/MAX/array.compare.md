---
type: max
name: "array.compare"
summary: "Compare two arrays for equality"
signal: false
url: "https://docs.cycling74.com/reference/array.compare/"
package: "Max"
see_also: ["array", "array.change", "dict.compare", "zl.change"]
---
# array.compare

Compare two arrays for equality

## Description

Arrays are compared for their value and order.

## Arguments

None.

## Attributes

### unordered[int]: 0

When comparing arrays, the order of elements is normally taken into account.

When  @unordered  is set to 1, comparison will be performed without regard for the element order, such that [ 1, 2, 3 ] and [ 2, 3, 1 ] are considered equivalent.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Compare the left and right inputs again and output the result (0 - Unequal/ 1 - Equal)

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

Compare an array . Set the array to be compared in the right inlet without triggering output. In the left inlet, set the array to compare to and immediately trigger the array out. In the right inlet, the array is stored and no output is generated. In the left inlet, the array is compared to any array received in the right inlet and a result (0/1) is sent to the outlet.

Arguments:

- array-value
  [list]

### dictionary

Wrap a dictionary object in an array for comparison.

Arguments:

- dictionary-value
  [dictionary]

### string

Wrap a string object in an array for comparison.

Arguments:

- string-value
  [string]

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [array.change](https://docs.cycling74.com/reference/array.change) | Detect array changes |
| [dict.compare](https://docs.cycling74.com/reference/dict.compare) | Compare two dictionaries for equivalence. |
| [zl.change](https://docs.cycling74.com/reference/zl.change) | Filter out list repetitions |
