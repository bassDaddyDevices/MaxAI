---
type: max
name: "string.prepend"
summary: "Prepend a string to another string object, with an optional separator"
signal: false
url: "https://docs.cycling74.com/reference/string.prepend/"
package: "Max"
see_also: ["string", "string.append", "string.concat", "append", "prepend"]
---
# string.prepend

Prepend a string to another string object, with an optional separator

## Arguments

### initial-string[list] optional

An initial string to prepend to incoming strings

## Attributes

### separator[atom]

TEXT\_HERE

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

In the left inlet, the prepend string will be applied to an incoming string, as well as any separator placed between them, and the result will be sent to the outlet. In the middle inlet, a string can be set to be prepended to another string without triggering output. In the right inlet, an optional string separator between the string and prepend string can be set without triggering output.

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
| [string.append](https://docs.cycling74.com/reference/string.append) | Append a string to another string object, with an optional separator |
| [string.concat](https://docs.cycling74.com/reference/string.concat) | Concatenate two string objects |
| [append](https://docs.cycling74.com/reference/append) | Append arguments to the end of a message |
| [prepend](https://docs.cycling74.com/reference/prepend) | Add a message in front of input |
