---
type: max
name: "loadbang"
summary: "Send a bang when a patcher is loaded"
signal: false
url: "https://docs.cycling74.com/reference/loadbang/"
package: "Max"
see_also: ["active", "button", "closebang", "freebang", "loadmess", "thispatcher", "savebang"]
---
# loadbang

Send a bang when a patcher is loaded

## Description

Outputs a  bang  automatically when the file is opened or when the patch is part of another file that is opened.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sending a  bang  message to a [loadbang](https://docs.cycling74.com/reference/loadbang) object causes it to output a  bang  message.

### (mouse)

Double-clicking on a  loadbang  object causes it to output a  bang  message.

### loadbang

Same as  bang .

## Output

### bang

Sent automatically when the patch is loaded. You can also cause [loadbang](https://docs.cycling74.com/reference/loadbang) to send out a  bang  by double-clicking on it in a locked patcher, or by sending a  loadbang  message to a [thispatcher](https://docs.cycling74.com/reference/thispatcher) object in the same patcher. Holding down the Shift and Command keys on Macintosh or Shift and Control keys on Windows while a patch is loading prevents [loadbang](https://docs.cycling74.com/reference/loadbang) objects in that patch from sending any output.

## See Also

| Name | Description |
| --- | --- |
| [active](https://docs.cycling74.com/reference/active) | Send 1 when patcher window is active, 0 when inactive |
| [button](https://docs.cycling74.com/reference/button) | Blink and send a bang |
| [closebang](https://docs.cycling74.com/reference/closebang) | Send a bang on close |
| [freebang](https://docs.cycling74.com/reference/freebang) | Send a bang when a patcher is freed |
| [loadmess](https://docs.cycling74.com/reference/loadmess) | Send a message when a patch is loaded |
| [thispatcher](https://docs.cycling74.com/reference/thispatcher) | Send messages to a patcher |
| [savebang](https://docs.cycling74.com/reference/savebang) | Send a bang on save |
