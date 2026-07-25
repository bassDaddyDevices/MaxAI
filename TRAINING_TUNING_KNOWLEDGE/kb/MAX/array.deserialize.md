---
type: max
name: "array.deserialize"
summary: "Parse a string, symbol or list to an array."
signal: false
url: "https://docs.cycling74.com/reference/array.deserialize/"
package: "Max"
see_also: ["array", "array.tolist", "array.tostring", "array.tosymbol", "dict.deserialize"]
---
# array.deserialize

Parse a string, symbol or list to an array.

## Description

A string/symbol/list representing an array in JSON format (e.g. "[ 25, 50, 75, 100 ]") will be converted into an array object.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received data and trigger output.

### int

Convert an incoming integer to an array, then process as described for the  array  message.

### float

Convert an incoming floating-point number to an array, then process as described for the  array  message.

### list

Convert or parse an incoming list to an array, then process as described for the  array  message.

### anything

Convert or parse an incoming list to an array, then process as described for the  array  message.

### array

An incoming array will be copied to the object's output array, which will be sent from the object's outlet.

### dictionary

Wrap an incoming dictionary object in an array, then process as described for the  array  message.

### string

A string object will be parsed to an array of possible, then processed as described for the  array  message.

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [array.tolist](https://docs.cycling74.com/reference/array.tolist) | Convert an array object to a list |
| [array.tostring](https://docs.cycling74.com/reference/array.tostring) | Convert an array object to a string object |
| [array.tosymbol](https://docs.cycling74.com/reference/array.tosymbol) | Convert an array object to a symbol |
| [dict.deserialize](https://docs.cycling74.com/reference/dict.deserialize) | Create a dictionary from text |
