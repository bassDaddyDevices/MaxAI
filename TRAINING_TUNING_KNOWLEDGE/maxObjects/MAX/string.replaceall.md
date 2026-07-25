---
type: max
name: "string.replaceall"
summary: "Replace all instances of a substring with a substitution string"
signal: false
url: "https://docs.cycling74.com/reference/string.replaceall/"
package: "Max"
see_also: ["string", "string.replace"]
---
# string.replaceall

Replace all instances of a substring with a substitution string

## Arguments

### substitution-string[list] optional

Substitution string to replace substrings.

## Attributes

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

In the left inlet, a string can be set for replacement and trigger output. In the right inlet, a replacement string can be set without triggering output. In the middle inlet, the string to be replaced can be set without triggering output.

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [string.replace](https://docs.cycling74.com/reference/string.replace) | Replace the first instance of a substring with a substitution string |
