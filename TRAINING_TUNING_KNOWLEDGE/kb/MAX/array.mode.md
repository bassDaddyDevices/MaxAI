---
type: max
name: "array.mode"
summary: "Calculate the mode of the numerical elements of an array"
signal: false
url: "https://docs.cycling74.com/reference/array.mode/"
package: "Max"
see_also: ["array", "array.max", "array.mean", "array.median", "array.mode", "array.stddev", "minimum"]
---
# array.mode

Calculate the minimum of the numerical elements of an array

## Description

Non-numerical elements (symbols, arrays, strings, dictionaries) are ignored.

## Arguments

None.

## Attributes

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

A single atom ( int  or  float , depending on the input) will be sent from the object's outlet. Non-numerical elements are ignored in the calculation.

### dictionary

Wrap an incoming dictionary object in an array, then process as described for the  array  message.

### string

Wrap a string object in an array, then process as described for the  array  message.

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [array.max](https://docs.cycling74.com/reference/array.max) | Calculate the maximum of the numerical elements of an array |
| [array.mean](https://docs.cycling74.com/reference/array.mean) | Calculate the mean of the numerical elements of an array |
| [array.median](https://docs.cycling74.com/reference/array.median) | Calculate the median of the numerical elements of an array |
| [array.mode](https://docs.cycling74.com/reference/array.mode) | Calculate the mode of the numerical elements of an array |
| [array.stddev](https://docs.cycling74.com/reference/array.stddev) | Calculate the standard deviation of the numerical elements of an array |
| [minimum](https://docs.cycling74.com/reference/minimum) | Output the smallest value |
