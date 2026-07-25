---
type: max
name: "array.scramble"
summary: "Randomize the order of elements in an array object"
signal: false
url: "https://docs.cycling74.com/reference/array.scramble/"
package: "Max"
see_also: ["array", "zl.scramble"]
---
# array.scramble

Randomize the order of elements in an array object

## Description

When triggered, output the scrambled array and the reordered index list.

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

In the right inlet, set an internal array without triggering output. In the left inlet, the contents of the array are scrambled and triggers output. The scrambled array is sent out the left outlet, and the scrambled index is sent out the right outlet.

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
| [zl.scramble](https://docs.cycling74.com/reference/zl.scramble) | Scramble a list |
