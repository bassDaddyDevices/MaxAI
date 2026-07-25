---
type: max
name: "osc.codebox"
summary: "Display OSC packets as Dictionaries"
signal: false
url: "https://docs.cycling74.com/reference/osc.codebox/"
package: "Max"
see_also: ["param.osc", "dict.codebox", "udpsend", "udpreceive"]
---
# osc.codebox

Display OSC packets as Dictionaries

## Description

The [osc.codebox](https://docs.cycling74.com/reference/osc.codebox) object is a UI object for the display of OSC packets as dictionaries.

## Arguments

None.

## Attributes

### bgcolor[4 floats]

Sets the color for the object's background frame.

### editlocked[int]: 0

Allow editing of the codebox text while the patcher is locked.

### embed[int]: 0

Toggles the ability to embed the contents of the text editor with the patcher. Disable to allow for display of changing text contents that will not dirty the patcher, and prompting to save.

### linenumbers[int]: 1

Show lefthand column containing line numbers for non empty lines.

### linenumberwidth[int32]: 20

Set the width of lefthand line number column in pixels.

### margin[int32]: 4

Set the width of the left and righthand margin in pixels

### style[symbol]:

Style

### textcolor[4 floats]

The default textcolor (typically overridden by syntax coloring)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### FullPacket

TEXT\_HERE

### clear

TEXT\_HERE

### osc\_packet

TEXT\_HERE

## See Also

| Name | Description |
| --- | --- |
| [param.osc](https://docs.cycling74.com/reference/param.osc) | Control and report info about parameters using OSC. |
| [dict.codebox](https://docs.cycling74.com/reference/dict.codebox) | Create and access dictionaries |
| [udpsend](https://docs.cycling74.com/reference/udpsend) | Send messages over a network |
| [udpreceive](https://docs.cycling74.com/reference/udpreceive) | Receive messages over a network |
