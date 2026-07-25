---
type: max
name: "messageview"
summary: "View a stream of messages"
signal: false
url: "https://docs.cycling74.com/reference/messageview/"
package: "Max"
see_also: ["dict.view", "message"]
---
# messageview

View a stream of messages

## Description

Use the [messageview](https://docs.cycling74.com/reference/messageview) object to view a stream of messages.

## Arguments

None.

## Attributes

### autoscroll[int]: 1

Automatic Scrolling

### bgcolor[4 floats]

Sets the display color for even numbered rows using the RGBA format in the range 0. - 1.

### stripe2[4 floats]

Sets the display color for odd numbered rows using the RGBA format in the range 0. - 1.

### style[symbol]:

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### textcolor[4 floats]

Sets the display color for text using the RGBA format in the range 0. - 1.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Add a bang message to the message stream

### int

Add an int message to the message stream

### float

Add a float message to the message stream

### list

Add a list message to the message stream

### anything

Add a message to the message stream

### append

Append a message to the message stream (useful for adding messages to the stream that are otherwise used by the messageview object)

### clear

Clear the message stream

### scrolltoend

Scroll to the end of the message stream

## See Also

| Name | Description |
| --- | --- |
| [dict.view](https://docs.cycling74.com/reference/dict.view) | View the contents of a dictionary |
| [message](https://docs.cycling74.com/reference/message) | Send any message |
