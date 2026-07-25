---
type: max
name: "onecopy"
summary: "Prevent multiple copies of the same patcher from being opened"
signal: false
url: "https://docs.cycling74.com/reference/onecopy/"
package: "Max"
see_also: ["thispatcher", "pcontrol"]
---
# onecopy

Prevent multiple copies of the same patcher from being opened

## Description

Use the [onecopy](https://docs.cycling74.com/reference/onecopy) object inside a patcher that you want to place in the extras folder for inclusion in the Extras menu. When the patcher's name is chosen using the Extras menu, its window will be brought to the front instead of opened a second time if it has already been loaded. The patch will be loaded if it is not currently open. The [onecopy](https://docs.cycling74.com/reference/onecopy) object cooperates with the Extras menu to ensure that only one copy of the patcher is opened at a time. However, opening the patcher containing a [onecopy](https://docs.cycling74.com/reference/onecopy) object by choosing  **Open...**  from the File menu will open additional copies.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Output

### (Behavioral)

[onecopy](https://docs.cycling74.com/reference/onecopy) includes the patcher, within which it resides, in the Extras menu and ensures that only one copy of the patcher is opened at a time.

## See Also

| Name | Description |
| --- | --- |
| [thispatcher](https://docs.cycling74.com/reference/thispatcher) | Send messages to a patcher |
| [pcontrol](https://docs.cycling74.com/reference/pcontrol) | Open and close subwindows |
