---
type: max
name: "fontlist"
summary: "List system fonts"
signal: false
url: "https://docs.cycling74.com/reference/fontlist/"
package: "Max"
see_also: ["umenu"]
---
# fontlist

List system fonts

## Description

Outputs a list of system fonts and, optionally, their system identification numbers. Optionally filters the list by font-family.

## Arguments

### font-type[symbol] optional

Font types (see above) may be used as arguments to specify font types the [fontlist](https://docs.cycling74.com/reference/fontlist) object will recognize.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends the names of all currently installed fonts out the [fontlist](https://docs.cycling74.com/reference/fontlist) object's outlet as a series of messages. The messages are formatted for use by the [umenu](https://docs.cycling74.com/reference/umenu) menu display objects. The list begins with a single line containing the message  clear , followed by single line messages in the form append font-name.

## See Also

| Name | Description |
| --- | --- |
| [umenu](https://docs.cycling74.com/reference/umenu) | Pop-up menu |
