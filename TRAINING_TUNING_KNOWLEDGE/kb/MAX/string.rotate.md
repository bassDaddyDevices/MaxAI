---
type: max
name: "string.rotate"
summary: "Rotate the characters within a string object"
signal: false
url: "https://docs.cycling74.com/reference/string.rotate/"
package: "Max"
see_also: ["string", "array.rotate", "zl.rot"]
---
# string.rotate

Rotate the characters within a string object

## Description

Positive values rotate right, negative rotate left.

## Arguments

### rotations[int] optional

positions to rotate

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received values and trigger output.

### int

Convert an incoming integer to a string, then process as described for the  string  message.

Arguments:

- value
  [int]

### (inlet1)

Positive numbers rotate right, negative numbers rotate left.

### float

Convert an incoming floating-point number to a string, then process as described for the  string  message.

Arguments:

- value
  [float]

### list

Convert an incoming list to a string, then process as described for the  string  message.

Arguments:

- list-value
  [list]

### anything

Convert an incoming list to a string, then process as described for the  string  message.

Arguments:

- list-value
  [list]

### string

Characters will wrap back around, so rotating "string" by 2 will result in "ngstri".

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [array.rotate](https://docs.cycling74.com/reference/array.rotate) | Rotate the elements in any array object |
| [zl.rot](https://docs.cycling74.com/reference/zl.rot) | Rotate a list |
