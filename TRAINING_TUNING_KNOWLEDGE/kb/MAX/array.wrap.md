---
type: max
name: "array.wrap"
summary: "Wrap an array inside of an array"
signal: false
url: "https://docs.cycling74.com/reference/array.wrap/"
package: "Max"
see_also: ["array", "array.push", "array.unshift"]
---
# array.wrap

Wrap an array inside of an array

## Description

Among other things, you can use wrapped arrays in conjunction with [array.concat](https://docs.cycling74.com/reference/array.concat) to create multidimensional arrays.

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

Wrap an array in an array, then send it to the outlet.

### dictionary

Wrap an incoming dictionary object in an array, then process as described for the  array  message.

### string

Wrap a string object in an array, then process as described for the  array  message.

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [array.push](https://docs.cycling74.com/reference/array.push) | Add one or more elements to the end of an array |
| [array.unshift](https://docs.cycling74.com/reference/array.unshift) | Add one or more elements to the beginning of an array |
