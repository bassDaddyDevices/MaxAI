---
type: ableton
name: "live.tab"
summary: "A user interface tab/multiple button object in the style of Ableton Live."
signal: false
url: "https://docs.cycling74.com/reference/live.tab/"
package: "Max for Live"
see_also: ["live.text", "live.toggle", "tab"]
---
# live.tab

A user interface tab/multiple button object in the style of Ableton Live.

## Description

[live.tab](https://docs.cycling74.com/reference/live.tab) is used to create multiple-button and multi-column displays and interfaces.

## Arguments

None.

## Attributes

### active[int]: 1

Toggles the object's active state. When  active  is set to 0, the mouse action does not cause output and the inactive colors are used.

### activebgcolor[4 floats]

Sets the background color off displayed when the  active  attribute is set to 1.

### activebgoncolor[4 floats]

Sets the background color on displayed when the  active  attribute is set to 1.

### annotation\_name[symbol]:

The string that is prepended to annotations. This shows up in the Info pane in Live, and the clue window in Max.

### appearance[int]: 0

Display Style

Possible values:

0 = 'Default'
(
Default appearance
)
1 = 'LCD'
(
LCD display style
)

### bgcolor[4 floats]

Sets the background color off displayed when the  active  attribute is set to 0.

### bgoncolor[4 floats]

Sets the background color on displayed when the  active  attribute is set to 0.

### blinktime[int]: 150

Sets the blink time in milliseconds.

### bordercolor[4 floats]

Sets the display color for the [live.tab](https://docs.cycling74.com/reference/live.tab) object's border in RGBA format.

### button[int]: 0

Toggles button mode for the [live.tab](https://docs.cycling74.com/reference/live.tab) object.

### focusbordercolor[4 floats]

Sets the border color in RGBA format to be used when the [live.tab](https://docs.cycling74.com/reference/live.tab) object has the focus.

### inactivelcdcolor[4 floats] >= 8.0.0

Sets the background color on displayed when the active attribute is set to 0, and the  appearance  attribute is set to 1 (LCD).

### inactivetextoffcolor[4 floats] >= 8.0.0

Sets the text color off displayed when the active attribute is set to 0.

### inactivetextoncolor[4 floats] >= 8.0.0

Sets the text color on displayed when the active attribute is set to 0.

### lcdbgcolor[4 floats] >= 8.0.0

Sets the background color off displayed when the appearance attribute is set to 1 (LCD).

### lcdcolor[4 floats] >= 8.0.0

Sets the background color on displayed when the appearance attribute is set to 1 (LCD).

### livemode[int] >= 8.0.0

Adjusted margins and padding to match Live 10

### mode[int]: 0

Sets the text tab layout mode.

Possible values:

0 = 'Equal Spaced'

1 = 'Proportional'
(
Proportional spacing
)
Separate tab entries are proportionally spaced according to the text.

Note: to add multiple words, use the backslash before a space (e.g. "one\ down")

### multiline[int]: 1

Toggles allowing multiple lines of text in a tab. When set, you can resize the object to create multi-column displays.

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping). (default = 1).

### pictures[64 symbols]

Sets the paths for pictures used when the  usepicture  attribute is set to 1. Bitmap images such as PNG or vectorized images (SVG) can be used.

### remapsvgcolors[int]: 0 >= 8.0.0

Remap SVG Colors to use textcolor value

### rounded[float]

Set the roundness of the border

### spacing\_x[float]: 6.

Sets the horizontal spacing for the [live.tab](https://docs.cycling74.com/reference/live.tab) object in pixels.

### spacing\_y[float]: 6.

Sets the vertical spacing for the [live.tab](https://docs.cycling74.com/reference/live.tab) object in pixels.

### textcolor[4 floats]

Sets the display color for the [live.tab](https://docs.cycling74.com/reference/live.tab) object's text in RGBA format.

### textoncolor[4 floats]

Sets the display color for the [live.tab](https://docs.cycling74.com/reference/live.tab) object's text when the tab is on in RGBA format.

### usepicture[int]: 0

Toggles the use of the pictures instead of text display. Note that you need to provide enough pictures by setting the  pictures  attribute properly.

### usesvgviewbox[int]: 0 >= 8.0.0

Use ViewBox attribute from the SVG file for formatting

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends the current item out the outlets.

### int

The number specifies a tab item to be sent out, and causes [live.tab](https://docs.cycling74.com/reference/live.tab) to display that item. The items are numbered starting at 0.

Arguments:

- input
  [int]

### float

The number specifies a tab item to be sent out, and causes [live.tab](https://docs.cycling74.com/reference/live.tab) to display that item. The items are numbered starting at 0.

Arguments:

- input
  [float]

### assign

The word  assign , followed by a floating point value, causes that value to be displayed and sent out the [live.tab](https://docs.cycling74.com/reference/live.tab) object's outlet. The value, however, will not be stored. If the Parameter Visibility attribute is set to Stored Only, the  assign  message will not add the new value to the Live application’s undo chain.

Arguments:

- assign-input
  [float]

### init

Restore and output the initial value.

### (mouse)

Clicking on a tab button will highlight and set the selection and send the tab text out the second outlet and the index out the first outlet.

### outputvalue

Sends the current value out the outlet.

### rawfloat

A raw normalized value (between 0. and 1.) received in the inlet is converted to a real value, stored, displayed by [live.tab](https://docs.cycling74.com/reference/live.tab), and the current value is sent out the outlet.

Arguments:

- input
  [float]

### set

The word  set , followed by a number, specifies a menu item to be displayed by [live.tab](https://docs.cycling74.com/reference/live.tab) without triggering any output.

Arguments:

- tab index
  [float]

### setsymbol

The word  setsymbol , followed by a symbol that specifies a tab item, causes [live.tab](https://docs.cycling74.com/reference/live.tab) to display that item, but does not cause any output.

Arguments:

- tab item
  [list]

### symbol

The word  symbol , followed by a symbol that specifies a tab item, causes [live.tab](https://docs.cycling74.com/reference/live.tab) to display that item and send the tab text out the second outlet and the index out the first outlet.

Arguments:

- tab item
  [list]

## See Also

| Name | Description |
| --- | --- |
| [live.text](https://docs.cycling74.com/reference/live.text) | A user interface button/toggle |
| [live.toggle](https://docs.cycling74.com/reference/live.toggle) | Switch between off and on (0/1) |
| [tab](https://docs.cycling74.com/reference/tab) | Tab control |
