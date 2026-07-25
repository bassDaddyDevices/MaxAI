---
type: ableton
name: "live.text"
summary: "A user interface button/toggle"
signal: false
url: "https://docs.cycling74.com/reference/live.text/"
package: "Max for Live"
see_also: ["live.button", "live.tab", "live.toggle", "textbutton"]
---
# live.text

A user interface button/toggle

## Description

[live.text](https://docs.cycling74.com/reference/live.text) object is a user interface object used to create buttons and toggles.

## Arguments

None.

## Attributes

### active[int]: 1

Toggles the object's active mode. When  active  is set to 0, the mouse action does not cause output and the inactive colors are used.

### activebgcolor[4 floats]

Sets the background color off displayed when the  active  attribute is set to 1.

### activebgoncolor[4 floats]

Sets the background color on displayed when the  active  attribute is set to 1.

### activetextcolor[4 floats]

Sets the display color for the [live.text](https://docs.cycling74.com/reference/live.text) object's text in RGBA format.

### activetextoncolor[4 floats]

Sets the display color for the [live.text](https://docs.cycling74.com/reference/live.text) object's text when it is on.

### annotation\_name[symbol]:

The string that is prepended to annotations. This shows up in the Info pane in Live, and the clue window in Max.

### appearance[int]: 0

Defines the display style. The options are:

0: Default. The text appears with the boundaries of the text box.

1: Label. The text box appears as a square button, with the text appearing to the right.

2: LCD. The text appears with the boundaries of the text box.

Possible values:

0 = 'Default'

1 = 'Label'

2 = 'LCD'

### automation[symbol]: val1

Sets the automation "off" label that will appear in Live.

### automationon[symbol]: val2

Sets the automation on label that will appear in Live.

### bgcolor[4 floats]

Sets the background color "off" displayed when the  active  attribute is set to 0.

### bgoncolor[4 floats]

Sets the background color on displayed when the  active  attribute is set to 0.

### blinktime[int]: 100

Blink Time in Milliseconds

### bordercolor[4 floats]

Sets the display color for the [live.text](https://docs.cycling74.com/reference/live.text) object's border in RGBA format.

### focusbordercolor[4 floats]

Sets the display color for the [live.text](https://docs.cycling74.com/reference/live.text) object's border in RGBA format.

### inactivelcdcolor[4 floats] >= 8.0.0

Sets the display color in the RGBA format for the [live.text](https://docs.cycling74.com/reference/live.text) object in LCD mode when the  active  attribute is set to 0. In the off state this sets the text color, while in the on state it sets the background color.

### labeltextcolor[4 floats] >= 8.0.0

Sets the display color for the [live.text](https://docs.cycling74.com/reference/live.text) object's text when it is in the label display mode.

### lcdbgcolor[4 floats] >= 8.0.0

Sets the display color in the RGBA format for the [live.text](https://docs.cycling74.com/reference/live.text) object in LCD mode. In the off state this sets the background color, while in the on state it sets the text color.

### lcdcolor[4 floats] >= 8.0.0

Sets the display color in the RGBA format for the [live.text](https://docs.cycling74.com/reference/live.text) object in LCD mode when the  active  attribute is set to 1. In the off state this sets the text color, while in the on state it sets the background color.

### mode[int]: 1

Sets the button mode. Button modes are:

0: Button mode

1: Toggle (switch) mode

Possible values:

0 = 'Button'

1 = 'Toggle'

### outputmode[int]: 0 >= 8.0.0

Sets the output mode for the [live.text](https://docs.cycling74.com/reference/live.text) object when it's  mode  attribute is set to 1 (toggle). When  outputmode  is set to 0, output occurs on mousedown, when set to 1, output occurs on mouseup.

Possible values:

0 = 'Mouse down'

1 = 'Mouse up'

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### pictures[2 symbols]: <none> <none>

Sets the paths for pictures used when the  usepicture  attribute is set to 1. Bitmap images such as PNG or vectorized images (SVG) can be used.

### remapsvgcolors[int]: 0 >= 8.0.0

Sets the SVG image colors to use when drawing the image. If  remapsvgcolors  is set to 0, the colors supplied by the SVG file are used; if set to 1, the color attributes for the appropriate display mode are used.

### rounded[float]

Set the roundness of the border

### text[symbol]: A

Sets the button label when the button is in the off state.

### textcolor[4 floats]

Sets the display color for the [live.text](https://docs.cycling74.com/reference/live.text) object's text when the  active  attribute is set to 0.

### textoffcolor[4 floats] >= 8.0.0

Sets the display color for the [live.text](https://docs.cycling74.com/reference/live.text) object's text when it is in the off state and the  active  attribute is set to 0.

### texton[symbol]: B

Sets the button label when the button is in the "on" state.

### transition[int]: 0

The parameter automation of [live.text](https://docs.cycling74.com/reference/live.text) stores 0 and 1 values. The  transition  attribute specifies when a  bang  will be sent to the outlet.

Possible values:

0 = 'Zero->One'

1 = 'One->Zero'

2 = 'Both'

### usepicture[int]: 0

Toggles the use of pictures instead of text for display. Note that you need to provide enough pictures by setting the  pictures  attribute properly.

### usesvgviewbox[int]: 0 >= 8.0.0

Sets the viewbox for the svg files when  usepicture  is set to 1. If  usesvgviewbox  is set to 0, Max determines the viewbox; if set to 1, uses the viewbox flag supplied by the svg file.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

A bang message will toggle the state of the object. If it is off, it will switch on and output a 1. If it is on, it will switch off and output a 0.

### int

In the  toggle  mode, any non-zero number will toggle the button to the "on" position, send the button text out the middle outlet and send a 1 out the left outlet. A zero sets the toggle to the "off" position, sends the button text out the middle outlet and sends a 0 out the left outlet.

Arguments:

- input
  [int]

### float

Converted to  int .

Arguments:

- input
  [float]

### assign

The word  assign , followed by a floating point value, causes that value to be displayed and sent out the [live.text](https://docs.cycling74.com/reference/live.text) object's outlet. The value, however, will not be stored. If the Parameter Visibility attribute is set to Stored Only, the  assign  message will not add the new value to the Live application’s undo chain.

Arguments:

- assign-input
  [float]

### init

Restore and output the initial value.

### (mouse)

In  button  mode, a mouse click on [live.text](https://docs.cycling74.com/reference/live.text) highlights it for as long as the mouse is held down, sending the text out the second outlet and a  bang  message out the left outlet.

In  toggle  mode, a mouse click behaves the same as a [live.toggle](https://docs.cycling74.com/reference/live.toggle). When the mouse is clicked, the [live.text](https://docs.cycling74.com/reference/live.text) object will send a 1 out the left outlet if the cursor is inside of the [live.text](https://docs.cycling74.com/reference/live.text) object's rectangle, and a 0 if it is not. The button text is also sent out the second outlet on mouse click.

### outputvalue

Sends the current value out the outlet.

### rawfloat

A raw normalized value (between 0. and 1.) received in the inlet is converted to a real value, and then functions like any other received int value in toggle mode.

Arguments:

- input-value
  [float]

### set

In the  toggle  mode, the  set  messages toggles the "on" or "off" state without sending anything out the outlets. The word  set , followed by any non-zero number, sets toggle to on. The message  set 0  sets it to "off".

Arguments:

- set-input
  [float]

### setsymbol

In the  toggle  mode, the word  setsymbol , followed by a symbol that specifies a button text item, causes [live.text](https://docs.cycling74.com/reference/live.text) to display that symbol and act as though the object were toggled to that state.

Arguments:

- button-text-item
  [list]

### symbol

In the  toggle  mode, the word  symbol , followed by a symbol that specifies a button text item, causes [live.text](https://docs.cycling74.com/reference/live.text) to display that symbol and sends the current values out the outlets.

Arguments:

- button-text-item
  [list]

## See Also

| Name | Description |
| --- | --- |
| [live.button](https://docs.cycling74.com/reference/live.button) | Flash on any message, send a bang |
| [live.tab](https://docs.cycling74.com/reference/live.tab) | A user interface tab/multiple button object in the style of Ableton Live. |
| [live.toggle](https://docs.cycling74.com/reference/live.toggle) | Switch between off and on (0/1) |
| [textbutton](https://docs.cycling74.com/reference/textbutton) | Button with text |
