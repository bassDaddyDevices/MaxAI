---
type: max
name: "string.concat"
summary: "Concatenate two string objects"
signal: false
url: "https://docs.cycling74.com/reference/string.concat/"
package: "Max"
see_also: ["string", "string.append", "string.prepend"]
---
# string.concat

Concatenate two string objects

## Description

The string received in the right inlet will be appended to the string received in the left inlet, and a new string will be set to the outlet. The original string objects are not modified.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reprocess previously received string and trigger output.

### int

Convert an incoming integer to a string, then process as described for the  string  message.

### float

Convert an incoming floating-point number to a string, then process as described for the  string  message.

### list

Convert an incoming list to a string, then process as described for the  string  message.

### anything

Convert an incoming list to a string, then process as described for the  string  message.

### string

In the right inlet, the string is stored and no output is generated. In the left inlet, the string is concatenated with any string received in the right inlet and a new string is sent to the outlet.

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [string.append](https://docs.cycling74.com/reference/string.append) | Append a string to another string object, with an optional separator |
| [string.prepend](https://docs.cycling74.com/reference/string.prepend) | Prepend a string to another string object, with an optional separator |
