---
type: max
name: "array.tolist"
summary: "Convert an array object to a list"
signal: false
url: "https://docs.cycling74.com/reference/array.tolist/"
package: "Max"
see_also: ["array", "array.foreach", "array.iter", "array.join", "iter"]
---
# array.tolist

Convert an array object to a list

## Description

Nested arrays (arrays within arrays) can be automatically flattened with the flatten attribute.

## Arguments

None.

## Attributes

### flatten[int]: 0

When enabled (disabled is default), attempt to flatten subarrays in the list output. For instance,  [1, 2, 3], [4, 5, 6]  would become  1 2 3 4 5 6 , rather than a list like  obj:array:u123456789 obj:array:u987654321 .

### stringmode[int]: 1

Alias:
prefersym

Output strings as symbols or atoms if possible

Possible values:

0 = 'Strings'
(
Output string objects
)
1 = 'Symbols'
(
Output symbols
)
2 = 'Atoms'
(
Output numbers (if the string can be parsed as a number), or symbols.
)

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

If the flatten attribute is enabled, all nested arrays will be collapsed into a single list.

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
| [array.foreach](https://docs.cycling74.com/reference/array.foreach) | Iterate the elements of an array |
| [array.iter](https://docs.cycling74.com/reference/array.iter) | Iterate every element of an array object |
| [array.join](https://docs.cycling74.com/reference/array.join) | Convert an array object to a string object with an optional separator string |
| [iter](https://docs.cycling74.com/reference/iter) | Break a list into individual messages |
