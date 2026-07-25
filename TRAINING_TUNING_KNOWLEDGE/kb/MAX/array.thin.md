---
type: max
name: "array.thin"
summary: "Remove duplicated entries from an array object"
signal: false
url: "https://docs.cycling74.com/reference/array.thin/"
package: "Max"
see_also: ["array", "zl.thin"]
---
# array.thin

Remove duplicated entries from an array object

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

In the left inlet, the contents of the array are filtered for duplicates and a new array with no duplicates is sent to the outlet.

Arguments:

- array-value
  [list]

### dictionary

Wrap an incoming dictionary object in an array, then process as described for the  array  message.

Arguments:

- dictionary-value
  [list]

### string

Wrap a string object in an array.

Arguments:

- string-value
  [list]

## See Also

| Name | Description |
| --- | --- |
| [array](https://docs.cycling74.com/reference/array) | Create or duplicate an array object |
| [zl.thin](https://docs.cycling74.com/reference/zl.thin) | Remove duplicates from list |
