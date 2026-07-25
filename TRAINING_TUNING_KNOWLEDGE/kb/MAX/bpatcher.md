---
type: max
name: "bpatcher"
summary: "Embed a subpatch with a visible UI"
signal: false
url: "https://docs.cycling74.com/reference/bpatcher/"
package: "Max"
see_also: ["Search Path", "patcher", "patcherargs", "pcontrol", "thispatcher"]
---
# bpatcher

Embed a subpatch with a visible UI

## Description

The [bpatcher](https://docs.cycling74.com/reference/bpatcher) object holds the contents of a patcher or subpatcher, displaying only those visual elements that fall within its box rectangle. The number of inlets and outlets in a [bpatcher](https://docs.cycling74.com/reference/bpatcher) object is determined by the number of [inlet](https://docs.cycling74.com/reference/inlet) and [outlet](https://docs.cycling74.com/reference/outlet) objects contained in its contained subpatcher.

#### Discussion

The inlet to the [bpatcher](https://docs.cycling74.com/reference/bpatcher) object is used for sending messages to its contained patcher, not for sending messages to or setting attributes on the [bpatcher](https://docs.cycling74.com/reference/bpatcher) object itself. Setting an attribute or sending a message to the [bpatcher](https://docs.cycling74.com/reference/bpatcher) object must be done via scripting messages to the [thispatcher](https://docs.cycling74.com/reference/thispatcher) object. See the  replace  message for an example.

## Arguments

None.

## Attributes

### args[256 atoms]:

The args attribute lets you set arguments passed to your patcher that will be saved with the [bpatcher](https://docs.cycling74.com/reference/bpatcher) in its parent patcher. Arguments can replace  #1 - #9  in the contained patcher and/or parsed by the [patcherargs](https://docs.cycling74.com/reference/patcherargs) object.

### bgcolor[4 floats]: 1. 1. 1. 1.

Sets the background color of the patcher visible in the [bpatcher](https://docs.cycling74.com/reference/bpatcher) window.

### bgmode[int]: 0

Determines how the [bpatcher](https://docs.cycling74.com/reference/bpatcher) draws its background

Possible values:

0 = 'Transparent'
(
Don't draw the background
)
1 = 'Patcher Background Color'
(
Draw background using the contained patcher's bgcolor
)
2 = 'Override Background Color'
(
Use the [bpatcher](https://docs.cycling74.com/reference/bpatcher) object's bgcolor to draw the background
)

### border[int]: 0

When enabled, the border attribute draws a one pixel black border around the object's box

### clickthrough[int]: 0

When enabled, clicks on empty space in a [bpatcher](https://docs.cycling74.com/reference/bpatcher) are sent to any objects underneath the [bpatcher](https://docs.cycling74.com/reference/bpatcher) in the parent patcher. Turning on clickthrough only makes sense if the [bpatcher](https://docs.cycling74.com/reference/bpatcher) object's background is transparent.

### embed[int]: 0

When enabled, embed will save the contained patcher in its parent patcher. When disabled (the default), the contained patcher is loaded from a file specified by the name attribute.

### enablehscroll[int]: 0

Enables a horizontal scrollbar for scrolling the contents of the contained patcher

### enablevscroll[int]: 0

Enables a vertical scrollbar for scrolling the contents of the contained patcher

### lockeddragscroll[int]: 0

Determines whether you can scroll the contents of the bpatcher by holding down the shift and command (control on Windows) keys and dragging

Possible values:

0 = 'Unlocked Only'
(
Drag scrolling only works when the parent patcher is unlocked
)
1 = 'Locked and Unlocked'
(
Drag scrolling is always enabled
)
2 = 'Never'
(
Drag scrolling is never enabled
)

### lockedsize[int]: 0

When lockedsize is enabled, you cannot resize the [bpatcher](https://docs.cycling74.com/reference/bpatcher) object's rectangle by dragging its selection rectangle. You can change the size using the inspector however.

### name[symbol]: <none>

Designates the pathname of the patcher file for the [bpatcher](https://docs.cycling74.com/reference/bpatcher) to use. The name attribute can only be set using the inspector.

### offset[2 floats]: 0. 0.

Offset

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### (drag)

When a patcher file is dragged from the Max File Browser to a [bpatcher](https://docs.cycling74.com/reference/bpatcher) object, the file will be loaded.

### (mouse)

When the window containing the [bpatcher](https://docs.cycling74.com/reference/bpatcher) object is locked (or the Command key on Macintosh or Control key on Windows is held down) and the mouse is clicked inside the [bpatcher](https://docs.cycling74.com/reference/bpatcher) object’s box, the gesture is handled by the patch inside the box.

If the Shift and Command keys on Macintosh or Shift and Control keys on Windows are held down while clicking on a [bpatcher](https://docs.cycling74.com/reference/bpatcher) object, dragging the mouse moves the upper-left corner of the visible part of the patch inside the box. The Assistance area of the patcher window shows the pixel values of the offset. If Enable Drag-Scrolling is unchecked in the bpatcher Inspector window, this feature is disabled.

If the Command and Option keys on Macintosh or Control and Alt keys on Windows are held down while clicking in a [bpatcher](https://docs.cycling74.com/reference/bpatcher) object, a pop-up menu allows you to open the original file of the patch contained inside the box in its own window, or change the patch currently contained inside the box in its own window.

### replace

The  replace  message is intended for use in conjunction with scripting messages to the [thispatcher](https://docs.cycling74.com/reference/thispatcher) object. If you send a  replace  message via an inlet to the [bpatcher](https://docs.cycling74.com/reference/bpatcher) object, it will only work if there is no patcher inside the [bpatcher](https://docs.cycling74.com/reference/bpatcher); the inlet to the [bpatcher](https://docs.cycling74.com/reference/bpatcher) object is used for sending messages into its subpatcher, not for sending messages to the [bpatcher](https://docs.cycling74.com/reference/bpatcher) object itself.

To use the  replace  message feature via scripting messages, give your [bpatcher](https://docs.cycling74.com/reference/bpatcher) object a Scripting Name using the Inspector, then use the message  script sendbox  *<bpatcher-name>*  replace  *<patcher-name>*   to send the message to the named [bpatcher](https://docs.cycling74.com/reference/bpatcher) object.

Arguments:

- filename
  [symbol]

## Output

### (User-Defined)

If the patcher being used in a [bpatcher](https://docs.cycling74.com/reference/bpatcher) contains [outlet](https://docs.cycling74.com/reference/outlet) objects, they will appear in corresponding left-to-right order as outlets in the [bpatcher](https://docs.cycling74.com/reference/bpatcher) object's box.

## See Also

| Name | Description |
| --- | --- |
| [Search Path](https://docs.cycling74.com/userguide/search_path) | Search Path |
| [patcher](https://docs.cycling74.com/reference/patcher) | Create a subpatch within a patch |
| [patcherargs](https://docs.cycling74.com/reference/patcherargs) | Retrieve patcher arguments |
| [pcontrol](https://docs.cycling74.com/reference/pcontrol) | Open and close subwindows |
| [thispatcher](https://docs.cycling74.com/reference/thispatcher) | Send messages to a patcher |
