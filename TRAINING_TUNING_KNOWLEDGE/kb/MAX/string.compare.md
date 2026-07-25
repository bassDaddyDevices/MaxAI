---
type: max
name: "string.compare"
summary: "Compare two string objects for equality"
signal: false
url: "https://docs.cycling74.com/reference/string.compare/"
package: "Max"
see_also: ["string", "string.change", "dict.compare", "zl.change"]
---
# string.compare

Compare two string objects for equality

## Description

When triggered, the object will reveal a '0' if unequal and a '1' if equal.

## Arguments

### initial-string[list] optional

Initial string to compare with comparison string.

## Attributes

### casemode[int]

Compare the strings and ignore whether elements of strings are different in terms of their case (lowercase or uppercase). When  @casemode  is set to 0, case is sensitive. With  @casemode  set to 1, comparison is case insensitive.

### cmpmode[int]

Compare the strings using the same method as C's strcmp: the result is either 0 (strings are equivalent), negative (the left string is lexicographically "less" than the right string), or positive (the right string is lexicographically "less" than the left string). The negative/positive values represent the lexicographic distance of the first divergent characters. For instance, the strings  aa  and  ac  in the left and right inlets, respectively, would result in -2  because  a  is two letters "less" than  c .

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received string and trigger output.

### int

Convert an incoming integer to a string, then process as described for the  string  message.

Arguments:

- value
  [int]

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

Compare two strings for equality of value and order. In the right inlet, the string is stored and no output is generated. In the left inlet, the string is stored and compared to any array received in the right inlet. In the case that

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [string.change](https://docs.cycling74.com/reference/string.change) | Detect string changes |
| [dict.compare](https://docs.cycling74.com/reference/dict.compare) | Compare two dictionaries for equivalence. |
| [zl.change](https://docs.cycling74.com/reference/zl.change) | Filter out list repetitions |
