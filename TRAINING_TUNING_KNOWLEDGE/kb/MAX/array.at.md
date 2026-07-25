---
type: max
name: "array.at"
summary: "Output the indexed element of an array object"
signal: false
url: "https://docs.cycling74.com/reference/array.at/"
package: "Max"
see_also: ["array", "zl.mth", "zl.nth"]
---
# array.at

Output the indexed element of an array object

## Description

Extract an element from an incoming array object, based on the index specified (0-based).

## Arguments

### index[int] optional

The index to look up for incoming arrays. By default, this is 0 (the first element).

## Attributes

### remainder[int]: 1

Output remainder array

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received array and trigger output.

### int

Convert an incoming integer to an array, then process as described for the  array  message.

### (inlet1)

Set the index used to extract an element from an incoming array object. Indices begin at 0 for the first element.

### float

Convert an incoming floating-point number to an array, then process as described for the  array  message.

### list

Convert an incoming list to an array, then process as described for the  array  message.

### anything

Convert an incoming list to an array, then process as described for the  array  message.

### array

Output the element of the array at the provided index.

### dictionary

Wrap an incoming dictionary object in an array, then process as described for the  array  message.

### string

Wrap a string object in an array, then process as described for the  array  message.

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [zl.mth](https://docs.cycling74.com/reference/zl.mth) | Extract item from list |
| [zl.nth](https://docs.cycling74.com/reference/zl.nth) | Extract item from list |
