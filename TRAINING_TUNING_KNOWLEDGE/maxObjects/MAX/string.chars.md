---
type: max
name: "string.chars"
summary: "Iterate the UTF-8 characters of a string object as individual symbols"
signal: false
url: "https://docs.cycling74.com/reference/string.chars/"
package: "Max"
see_also: ["string", "string.tolist", "iter"]
---
# string.chars

Iterate the UTF-8 characters of a string object as individual symbols

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

A string sent to the [string.iter](https://docs.cycling74.com/reference/string.iter) inlet iterates each UTF-8 character in a string and triggers output. Each character is sent out as a separate string.

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [string.tolist](https://docs.cycling74.com/reference/string.tolist) | Construct a new list from a string object |
| [iter](https://docs.cycling74.com/reference/iter) | Break a list into individual messages |
