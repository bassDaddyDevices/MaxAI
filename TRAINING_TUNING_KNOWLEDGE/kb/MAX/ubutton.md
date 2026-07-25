---
type: max
name: "ubutton"
summary: "Transparent button"
signal: false
url: "https://docs.cycling74.com/reference/ubutton/"
package: "Max"
see_also: ["button", "fpic", "led", "matrixctrl", "pictctrl", "radiogroup", "tab", "textbutton"]
---
# ubutton

Transparent button

## Description

Creates a transparant click-able region that can be placed over graphics or other objects. Produces a bang message when clicked.

#### Discussion

The left-middle outlet sends a  bang  when the mouse is clicked on the button, and left outlet sends a  bang  when the mouse button is released. Note that you can resize [ubutton](https://docs.cycling74.com/reference/ubutton) when you create a new one - just continue dragging the mouse after placing the button in the patcher window.

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

Info View Title

### dragtrack[int]: 0

The word  dragtrack , followed by a non-zero number, enables "Track Mouse While Dragging" mode. In this mode, positional and inside/outside messages (described above for mouse clicks) are sent continuously while the mouse button is held down after a click.  dragtrack 0  disables this behavior, which is off by default. Dragging the mouse will continue to generate these message pairs until the mouse button is released. Drag tracking is off by default. It can also be enabled in the [ubutton](https://docs.cycling74.com/reference/ubutton) object's Inspector.

### hilite[int]: 1

Toggles the display of a highlight when [ubutton](https://docs.cycling74.com/reference/ubutton) is clicked.

### hltcolor[4 floats]

Sets the Highlight Color in RGBA format.

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters).

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### rounded[float]

Highlight Round-ness

### stay[atom\_long]: 0

Selects the button mode. The modes are:

0 the [ubutton](https://docs.cycling74.com/reference/ubutton) object is in normal button mode. It does not look for any particular number.

(any non-zero number) the object is in button mode and waits for the specified non-zero number. When that number is received in the inlet, no output is sent, but [ubutton](https://docs.cycling74.com/reference/ubutton) stays highlighted until some other message (or a mouse click) is received.

### toggle[int]: 0

Selects the toggle mode. The modes are:

0 button mode

(any non-zero number) toggle mode

Possible values:

0 = 'Button'

1 = 'Toggle'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

The [ubutton](https://docs.cycling74.com/reference/ubutton) object can operate in one of two modes. When the [ubutton](https://docs.cycling74.com/reference/ubutton) is in button mode (the default mode), it responds to a  bang  in its inlet by becoming highlighted briefly and sending a  bang  out its left outlet. When ubutton is in toggle mode, a  bang  in its inlet causes it to become (and stay) highlighted and send a  bang  out its right outlet; or, if it is already highlighted, it becomes unhighlighted and sends a bang out its left outlet.

### int

If [ubutton](https://docs.cycling74.com/reference/ubutton) is waiting for a particular number (its Stay-on Value) and the incoming number matches it, the button is highlighted but nothing is sent out. If the incoming number does not match the number that [ubutton](https://docs.cycling74.com/reference/ubutton) is waiting for, the button is unhighlighted (or remains that way). If [ubutton](https://docs.cycling74.com/reference/ubutton) has a Stay-on Value of  0 , int is the same as  bang .

Arguments:

- input
  [int]

### float

Converted to  int .

Arguments:

- input
  [float]

### anything

Converted to  bang .

Arguments:

- input
  [list]

### (mouse)

In "button" mode, a mouse click on [ubutton](https://docs.cycling74.com/reference/ubutton) highlights it for as long as the mouse is held down, sending a  bang  out the right outlet when the mouse button is pressed down, and another  bang  out the left outlet when the mouse button is released. In "toggle" mode, a mouse click behaves the same as a  bang . When the mouse is clicked, [ubutton](https://docs.cycling74.com/reference/ubutton) will send a 1 out the right outlet if the cursor is inside of the [ubutton](https://docs.cycling74.com/reference/ubutton) object's rectangle, and 0 if it is not. It will also send these messages when the mouse button is released. When the object is in "Track Mouse While Dragging" mode, these messages are sent continuously while the mouse button is held down after a click.

### set

If [ubutton](https://docs.cycling74.com/reference/ubutton) is in toggle mode,  set 1  sets the [ubutton](https://docs.cycling74.com/reference/ubutton) object's toggle (highlights it) and  set 0  clears the [ubutton](https://docs.cycling74.com/reference/ubutton) object's toggle (unhighlights it). Other integer arguments for  set  will send the number to [ubutton](https://docs.cycling74.com/reference/ubutton), for comparison to its Stay-on Value, without causing any output.

Arguments:

- input
  [int]

## Output

### bang

Out 1st outlet: In button mode (with a Stay-on Value of  0 ), any input causes [ubutton](https://docs.cycling74.com/reference/ubutton) to flash and send a  bang  out the left outlet. A  bang  is also sent out the left outlet when the mouse button is released.

If the [ubutton](https://docs.cycling74.com/reference/ubutton) object is in toggle mode and is already highlighted, any input causes [ubutton](https://docs.cycling74.com/reference/ubutton) to become unhighlighted and send a  bang  out its left outlet.

### bang

Out 2nd outlet: In button mode (with a Stay-on Value of  0 ), a mouse click sends a  bang  when the mouse button is pressed.

If the object is in toggle mode, any input causes [ubutton](https://docs.cycling74.com/reference/ubutton) to become highlighted and send a  bang  out the outlet. If it is already highlighted, it becomes unhighlighted and no  bang  is sent.

### int

Out right outlet: When the mouse button is clicked and released, a  1  is sent out this outlet if the cursor is inside of the [ubutton](https://docs.cycling74.com/reference/ubutton) object's rectangular area. If the "Track Mouse While Dragging" option is enabled using the Inspector or the  dragtrack  message, a  0  will be output if the cursor moves outside of the [ubutton](https://docs.cycling74.com/reference/ubutton) object's rectangular area while the mouse button is pressed.

### list

Out 3rd outlet: When the mouse button is clicked and released, the [ubutton](https://docs.cycling74.com/reference/ubutton) object sends out a list composed of two numbers which specify the coordinates for the cursor position expressed as an offset, in pixels, from the upper left-hand corner of the [ubutton](https://docs.cycling74.com/reference/ubutton) object rectangle. If the "Track Mouse While Dragging" option is enabled using the Inspector or the  dragtrack  message, new coordinates will be reported as the mouse is moved until the mouse button is released.

## See Also

| Name | Description |
| --- | --- |
| [button](https://docs.cycling74.com/reference/button) | Blink and send a bang |
| [fpic](https://docs.cycling74.com/reference/fpic) | Display an image |
| [led](https://docs.cycling74.com/reference/led) | Color on/off button |
| [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) | Matrix switch control |
| [pictctrl](https://docs.cycling74.com/reference/pictctrl) | Picture-based control |
| [radiogroup](https://docs.cycling74.com/reference/radiogroup) | Radio button or check box |
| [tab](https://docs.cycling74.com/reference/tab) | Tab control |
| [textbutton](https://docs.cycling74.com/reference/textbutton) | Button with text |
