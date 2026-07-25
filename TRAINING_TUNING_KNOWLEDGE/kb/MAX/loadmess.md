---
type: max
name: "loadmess"
summary: "Send a message when a patch is loaded"
signal: false
url: "https://docs.cycling74.com/reference/loadmess/"
package: "Max"
see_also: ["active", "button", "closebang", "defer", "freebang", "loadbang", "thispatcher", "savebang"]
---
# loadmess

Send a message when a patch is loaded

## Description

Outputs a message automatically when the file is opened, or when the patch is part of another file that is opened.

## Arguments

### message[symbol] optional

Any arguments you type into a [loadmess](https://docs.cycling74.com/reference/loadmess) object are treated as a message to be sent when output is triggered.

## Attributes

### defer[int]: 0

When enabled, the output of [loadmess](https://docs.cycling74.com/reference/loadmess) is deferred through the lower priority main thread.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sending a  bang  message to a [loadmess](https://docs.cycling74.com/reference/loadmess) object causes it to output its typed message.

### (mouse)

Double-clicking on a [loadmess](https://docs.cycling74.com/reference/loadmess) object causes it to output its typed message.

### set

The word  set  followed by any message will set the message held by [loadmess](https://docs.cycling74.com/reference/loadmess) without any output. (Can be used for output in conjunction with  bang .)

Arguments:

- message
  [list]

## Output

### symbol

The [loadmess](https://docs.cycling74.com/reference/loadmess) object's typed message is sent automatically when the patch is loaded. As with the [loadbang](https://docs.cycling74.com/reference/loadbang) object, you can also cause [loadmess](https://docs.cycling74.com/reference/loadmess) to send out its message by double-clicking on it in a locked patcher, or by sending a  loadbang  message to a [thispatcher](https://docs.cycling74.com/reference/thispatcher) object in the same patcher. Holding down the Shift and Command keys on Macintosh or Shift and Control keys on Windows while a patch is loading prevents [loadmess](https://docs.cycling74.com/reference/loadmess) objects in that patch from sending any output.

## See Also

| Name | Description |
| --- | --- |
| [active](https://docs.cycling74.com/reference/active) | Send 1 when patcher window is active, 0 when inactive |
| [button](https://docs.cycling74.com/reference/button) | Blink and send a bang |
| [closebang](https://docs.cycling74.com/reference/closebang) | Send a bang on close |
| [defer](https://docs.cycling74.com/reference/defer) | Defer execution of a message |
| [freebang](https://docs.cycling74.com/reference/freebang) | Send a bang when a patcher is freed |
| [loadbang](https://docs.cycling74.com/reference/loadbang) | Send a bang when a patcher is loaded |
| [thispatcher](https://docs.cycling74.com/reference/thispatcher) | Send messages to a patcher |
| [savebang](https://docs.cycling74.com/reference/savebang) | Send a bang on save |
