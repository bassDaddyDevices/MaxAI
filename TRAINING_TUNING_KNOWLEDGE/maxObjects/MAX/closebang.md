---
type: max
name: "closebang"
summary: "Send a  bang on close"
signal: false
url: "https://docs.cycling74.com/reference/closebang/"
package: "Max"
see_also: ["active", "button", "freebang", "loadbang", "loadmess", "savebang"]
---
# closebang

Send a  bang  on close

## Description

Sends a  bang  whenever the patcher window within which it resides is closed.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sending a  bang  message to a [closebang](https://docs.cycling74.com/reference/closebang) object causes it to output a  bang  message.

### (mouse)

TEXT\_HERE

## Output

### bang

Sent automatically when the patcher window is closed.

## See Also

| Name | Description |
| --- | --- |
| [active](https://docs.cycling74.com/reference/active) | Send 1 when patcher window is active, 0 when inactive |
| [button](https://docs.cycling74.com/reference/button) | Blink and send a bang |
| [freebang](https://docs.cycling74.com/reference/freebang) | Send a bang when a patcher is freed |
| [loadbang](https://docs.cycling74.com/reference/loadbang) | Send a bang when a patcher is loaded |
| [loadmess](https://docs.cycling74.com/reference/loadmess) | Send a message when a patch is loaded |
| [savebang](https://docs.cycling74.com/reference/savebang) | Send a bang on save |
