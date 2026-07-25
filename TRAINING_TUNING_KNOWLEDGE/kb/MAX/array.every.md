---
type: max
name: "array.every"
summary: "Tests all elements in the array"
signal: false
url: "https://docs.cycling74.com/reference/array.every/"
package: "Max"
see_also: ["array", "array.filter", "array.some"]
---
# array.every

Tests all elements in the array

## Description

Tests whether all elements in the array pass the provided test. While testing, return the value of the test to the right inlet.

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

### (inlet1)

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

When an array is received in the left inlet, [array.every](https://docs.cycling74.com/reference/array.every) will send each element of the array through the middle outlet, one at a time. If the element passes the test, return a 1 to the right inlet, otherwise return a 0. After receiving a test result for each element, [array.every](https://docs.cycling74.com/reference/array.every) will output an overall result.

### cancel

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
| [array.filter](https://docs.cycling74.com/reference/array.filter) | Output elements of an array matching a condition |
| [array.some](https://docs.cycling74.com/reference/array.some) | Test the elements of an array object for a matching condition |
