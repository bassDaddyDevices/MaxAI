---
type: max
name: "string.tosymbol"
summary: "Convert a string to a symbol"
signal: false
url: "https://docs.cycling74.com/reference/string.tosymbol/"
package: "Max"
see_also: ["string"]
---
# string.tosymbol

Convert a string to a symbol

## Description

Adds a string to Max's symbol table (if not already present) and sends the symbol to the outlet.

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

If the string is not already in Max's symbol table, it will be added. Symbols are the usual way that Max works with strings (pre-string objects). In contrast to symbols, strings have no maximum length (a symbol cannot be longer than 32767 bytes) and aren't permanently allocated (a symbol's memory isn't freed until Max quits).

## See Also

| Name | Description |
| --- | --- |
| [string](https://docs.cycling74.com/reference/string) | Create or duplicate a string object |
