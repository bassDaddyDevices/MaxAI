---
type: max
name: "array.tosymbol"
summary: "Convert an array object to a symbol"
signal: false
url: "https://docs.cycling74.com/reference/array.tosymbol/"
package: "Max"
see_also: ["array", "array.tostring", "dict.view", "tosymbol"]
---
# array.tosymbol

Convert an array object to a symbol

## Description

This object is particularly useful for visualization of an array object's contents.

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

A single symbol is output containing a serialized version of the entire array.

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
| [array.tostring](https://docs.cycling74.com/reference/array.tostring) | Convert an array object to a string object |
| [dict.view](https://docs.cycling74.com/reference/dict.view) | View the contents of a dictionary |
| [tosymbol](https://docs.cycling74.com/reference/tosymbol) | Convert messages, numbers, or lists to a single symbol |
