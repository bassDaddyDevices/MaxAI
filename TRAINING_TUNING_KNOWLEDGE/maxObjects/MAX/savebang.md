---
type: max
name: "savebang"
summary: "Send a  bang on save"
signal: false
url: "https://docs.cycling74.com/reference/savebang/"
package: "Max"
see_also: ["active", "button", "freebang", "loadbang", "loadmess", "closebang"]
---
# savebang

Send a  bang  on save

## Description

Sends a  bang  whenever the patcher window within which it resides is saved.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sending a  bang  message to a [savebang](https://docs.cycling74.com/reference/savebang) object causes it to output a  bang  message.

### (mouse)

Double-clicking the savebang object causes it to output a bang.

## Output

### bang

Sent automatically when the patcher window is saved.

## See Also

| Name | Description |
| --- | --- |
| [active](https://docs.cycling74.com/reference/active) | Send 1 when patcher window is active, 0 when inactive |
| [button](https://docs.cycling74.com/reference/button) | Blink and send a bang |
| [freebang](https://docs.cycling74.com/reference/freebang) | Send a bang when a patcher is freed |
| [loadbang](https://docs.cycling74.com/reference/loadbang) | Send a bang when a patcher is loaded |
| [loadmess](https://docs.cycling74.com/reference/loadmess) | Send a message when a patch is loaded |
| [closebang](https://docs.cycling74.com/reference/closebang) | Send a bang on close |
