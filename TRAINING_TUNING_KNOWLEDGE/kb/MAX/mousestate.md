---
type: max
name: "mousestate"
summary: "Report the mouse information"
signal: false
url: "https://docs.cycling74.com/reference/mousestate/"
package: "Max"
see_also: ["modifiers", "mousefilter"]
---
# mousestate

Report the mouse information

## Description

Provides button status and cursor position information about the mouse/cursor when the cursor is positioned within a Max patcher window. The mouse buttons are sampled every 50ms, while the mouse position is sampled every input bang.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends out the current horizontal and vertical coordinates of the location of the mouse, as well as the change in location since the last output.

### mode

The word  mode , followed by a long value specifices the type of reference to use for the mouse coordinates from the second and third outlets. A value of 0 specifies to use screen-relative coordinates where 0,0 is the top left corner of the primary display. A value of 1 specifies patcher-relative coordinates where 0,0 is the top left corner of the content area of the [mousestate](https://docs.cycling74.com/reference/mousestate) object's patcher. A value of 2 specifies front-most patcher relative coordinates where 0,0 is the top left corner of the content area of the top patcher window.

Arguments:

- input
  [int]

### (mouse)

TEXT\_HERE

### nopoll

Undoes a  poll  message, reverting [mousestate](https://docs.cycling74.com/reference/mousestate) to its normal condition of waiting for a  bang  before reporting.

### poll

Causes [mousestate](https://docs.cycling74.com/reference/mousestate) to send out the mouse location, and the change in mouse location, whenever the mouse is moved, as well as when a  bang  is received.

### reset

Resets the 0,0 point to its default setting, in the upper left corner of the screen.

### zero

Resets the point [mousestate](https://docs.cycling74.com/reference/mousestate) considers as the 0,0 point from which to measure the mouse location. The current location of the mouse is considered the new 0,0 point.

## Output

### int

[mousestate](https://docs.cycling74.com/reference/mousestate) must have received at least one  bang  or  poll  message in its inlet before any output is sent out.

Out left outlet: Each time the left mouse button is pressed,  1  is sent out. Each time the left mouse button is released,  0  is sent out.

Out 2nd outlet: The horizontal location of the mouse, measured in terms of the number of pixels the mouse is to the right of the 0 point.

Out 3rd outlet: The vertical location of the mouse, measured in terms of the number of pixels the mouse is below the 0 point.

Out 4th outlet: The change in horizontal location of the mouse, since the last time the mouse location was reported.

Out 5th outlet: The change in vertical location of the mouse, since the last time the mouse location was reported.

Out 6th outlet: Each time the middle mouse button is pressed,  1  is sent out. Each time the middle mouse button is released,  0  is sent out.

Out 7th outlet: Each time the right mouse button is pressed,  1  is sent out. Each time the right mouse button is released,  0  is sent out.

Out 8th outlet: The change in horizontal motion of the mouse scroll wheel, since the last time the mouse scroll wheel delta was reported.

Out 9th outlet: The change in vertical motion of the mouse scroll wheel, since the last time the mouse scroll wheel delta was reported.

Out right outlet: A list of mouse scroll wheel flags, indicating whether the scroll wheel is in smooth/continuous mode ( 0  /  1 ), and whether the current motion is part of an inertial motion phase ( 0  /  1 ). Not all mice support these flags.

## See Also

| Name | Description |
| --- | --- |
| [modifiers](https://docs.cycling74.com/reference/modifiers) | Report modifier key presses |
| [mousefilter](https://docs.cycling74.com/reference/mousefilter) | Gate messages with the mouse |
