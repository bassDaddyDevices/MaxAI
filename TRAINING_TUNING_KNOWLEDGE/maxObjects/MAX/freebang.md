---
type: max
name: "freebang"
summary: "Send a bang when a patcher is freed"
signal: false
url: "https://docs.cycling74.com/reference/freebang/"
package: "Max"
see_also: ["active", "button", "closebang", "loadbang", "loadmess", "savebang"]
---
# freebang

Send a bang when a patcher is freed

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sending a  bang  message to a [freebang](https://docs.cycling74.com/reference/freebang) object causes it to output a  bang  message.

### (mouse)

Double-clicking on a  freebang  object causes it to output a  bang  message.

## Output

### bang

Sent automatically when the patcher is freed.

## See Also

| Name | Description |
| --- | --- |
| [active](https://docs.cycling74.com/reference/active) | Send 1 when patcher window is active, 0 when inactive |
| [button](https://docs.cycling74.com/reference/button) | Blink and send a bang |
| [closebang](https://docs.cycling74.com/reference/closebang) | Send a bang on close |
| [loadbang](https://docs.cycling74.com/reference/loadbang) | Send a bang when a patcher is loaded |
| [loadmess](https://docs.cycling74.com/reference/loadmess) | Send a message when a patch is loaded |
| [savebang](https://docs.cycling74.com/reference/savebang) | Send a bang on save |
