---
type: max
name: "textbutton"
summary: "Button with text"
signal: false
url: "https://docs.cycling74.com/reference/textbutton/"
package: "Max"
see_also: ["matrixctrl", "message", "pictctrl", "pictslider", "tab", "ubutton"]
---
# textbutton

Button with text

## Arguments

None.

## Attributes

### active[int]: 1

When active mode is set to 0, the [textbutton](https://docs.cycling74.com/reference/textbutton) object will not respond to mouse clicks, and the object is grayed out. This attribute is enabled by default.

### align[atom] renamed

Sets the text alignment.

### annotation\_name[symbol]:

Info View Title

### bgcolor[4 floats]

Sets the background color of the [textbutton](https://docs.cycling74.com/reference/textbutton) object when the button is in the "off" state in RGBA format.

### bgoncolor[4 floats]

Sets the background color of the [textbutton](https://docs.cycling74.com/reference/textbutton) object when the button is in the "on" state in RGBA format.

### blinktime[int]: 150

Specifies the duration (in milliseconds) that the [textbutton](https://docs.cycling74.com/reference/textbutton) object will flash when it is clicked upon or receives a  bang  message.

### fontlink[int]: 0

Toggles setting the size of the button to the currently selected font size and character width.

### legacytextcolor[int]: 0 >= 7.0.0

Toggles legacy behavior for text and the selection of a text color for "off" states. The text off color is set using the  textcolor  attribute.

### mode[int]: 0

Sets the button mode.

Possible values:

0 = 'Button'

1 = 'Toggle'

### outputmode[int]: 1

Sets the output mode. Output modes are:

0: Send output on mouse down

1: Send output on mouse up (default)

Possible values:

0 = 'Mouse down'

1 = 'Mouse up'

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping). (default = 1).

### rounded[float]: 0.

Sets the amount in pixels by which to round the textbutton shape.

### spacing\_x[float]: 4.

Sets the horizontal spacing for the [textbutton](https://docs.cycling74.com/reference/textbutton) object in pixels.

### spacing\_y[float]: 4.

Sets the vertical spacing for the [textbutton](https://docs.cycling74.com/reference/textbutton) object in pixels.

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### text[symbol]: Button

Sets the button label, and sets the "off" state label when mode is set to 1 (toggle). When no argument is set, the button label will be cleared.

### textcolor[4 floats]

Sets the text color for the [textbutton](https://docs.cycling74.com/reference/textbutton) object when the button is in the "off" state in RGBA format. The  textcolor  attribute is mapped to the  accentcolor  style color.

### texton[symbol]: Button On

Button label in "on" state . When no argument is set, the button label will be cleared.

### textoncolor[4 floats]

Sets the text color for the [textbutton](https://docs.cycling74.com/reference/textbutton) object when the button is in the "on" state in RGBA format. The  textoncolor  attribute is mapped to the  color  style color.

### textovercolor[4 floats]

Sets the text color for the [textbutton](https://docs.cycling74.com/reference/textbutton) object on mouseover when the button is in the "off" state in RGBA format. The  textovercolor  attribute is mapped to the  selectioncolor  style color.

### tosymbol[int]: 1

Output text as a single symbol

### truncate[int]: 1

Sets the text truncation mode. Alignment modes are:

0: no truncation

1: truncate from the right (e.g.  *abcdef...* . This is the default.

2: truncate from center (e.g.  *abcd...wxyz*

Possible values:

0 = 'No truncation'

1 = 'Truncate from the right'

2 = 'Truncate from the middle'

### underline[int]: 0

The word  underline , followed by a zero or one, toggles the underlining of text in the [textbutton](https://docs.cycling74.com/reference/textbutton) object. The default is 0 (no underlining).

### usebgoncolor[int]: 0 >= 7.0.0

Toggles the use of a background "on" color.

### usetextovercolor[int]: 0 >= 7.0.0

Toggles the use of a different color when hovering over the text.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

The behavior depends on the current mode settings.

mode 0 (button): A  bang  message will re-trigger the object's output.

mode 1 (trigger): A  bang  message will switch the object's state and trigger the output.

### int

If the mode attribute is set to 0 (button), a bang is sent out the left outlet, and the text message is displayed and set out the middle outlet.

If the mode attribute is set to 1 (toggle), and the number input is 1, [textbutton](https://docs.cycling74.com/reference/textbutton) is set to 'on', a 1 is sent out the left outlet and the texton message is displayed and set out the middle outlet.

If the number input is 0, [textbutton](https://docs.cycling74.com/reference/textbutton) is set to 'off', a 0 is sent out the left outlet and the text message is displayed and set out the middle outlet.

Arguments:

- input
  [int]

### float

At float message is converted to  int . See the  int  listing for usage.

Arguments:

- input
  [float]

### (mouse)

If the mode attribute is set to 0 (button), a mouse click on [textbutton](https://docs.cycling74.com/reference/textbutton) highlights it for as long as the mouse is held down, sending a  bang  out the left outlet when the mouse button is pressed down, and another  bang  out the left outlet when the mouse button is released. The button text is also sent out the middle outlet on mouse click.

If the mode attribute is set to 1 (toggle), and the initial state of the toggle is 0, [textbutton](https://docs.cycling74.com/reference/textbutton) is set to 'on', a 1 is sent out the left outlet and the texton message is displayed and set out the middle outlet.

If initial state of the toggle is 1, [textbutton](https://docs.cycling74.com/reference/textbutton) is set to 'off', a 0 is sent out the left outlet and the text message is displayed and set out the middle outlet.

### set

If the mode attribute is set to 1 (toggle), the  set  message toggles the on or off state without sending anything out the outlets. The word  set , followed by any non-zero number, sets toggle to on;  set 0  sets it to off.

Arguments:

- set-input
  [int]

### setsymbol

If the mode attribute is set to 1 (toggle), the word  setsymbol , followed by either the texton or text symbol, causes the [textbutton](https://docs.cycling74.com/reference/textbutton) to display that symbol, but does not cause any output. The symbol is case-sensitive.

Arguments:

- button-text-item
  [list]

### symbol

If the mode attribute is set to 1 (toggle), the word  symbol , followed by either the texton or text symbol, causes [textbutton](https://docs.cycling74.com/reference/textbutton) to display that symbol, switch to the toggle state, and trigger the corresponding output.

Arguments:

- button-text-item
  [list]

## See Also

| Name | Description |
| --- | --- |
| [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) | Matrix switch control |
| [message](https://docs.cycling74.com/reference/message) | Send any message |
| [pictctrl](https://docs.cycling74.com/reference/pictctrl) | Picture-based control |
| [pictslider](https://docs.cycling74.com/reference/pictslider) | Picture-based slider control |
| [tab](https://docs.cycling74.com/reference/tab) | Tab control |
| [ubutton](https://docs.cycling74.com/reference/ubutton) | Transparent button |
