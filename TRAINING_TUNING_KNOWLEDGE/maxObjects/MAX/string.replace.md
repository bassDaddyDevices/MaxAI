---
type: max
name: "string.replace"
summary: "Replace the first instance of a substring with a substitution string"
signal: false
url: "https://docs.cycling74.com/reference/string.replace/"
package: "Max"
see_also: ["string", "string.replaceall"]
---
# string.replace

Replace the first instance of a substring with a substitution string

## Description

Will only replace the first instance of the substring, if any. To replace all occurences of a given string, use [string.replaceall](https://docs.cycling74.com/reference/string.replaceall).

## Arguments

### search string[anything] optional

look for this string

### replacement[anything] optional

replace with this string

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

Search this string for a given substring and, when found, replace it with the given substitution. Stop after the first substring. To replace all occurences of a given string, use [string.replaceall](https://docs.cycling74.com/reference/string.replaceall).

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [string.replaceall](https://docs.cycling74.com/reference/string.replaceall) | Replace all instances of a substring with a substitution string |
