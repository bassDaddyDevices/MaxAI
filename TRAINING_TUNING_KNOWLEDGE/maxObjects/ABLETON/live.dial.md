---
type: ableton
name: "live.dial"
summary: "Output numbers by moving a dial onscreen"
signal: false
url: "https://docs.cycling74.com/reference/live.dial/"
package: "Max for Live"
see_also: ["live.numbox", "live.slider", "dial"]
---
# live.dial

Output numbers by moving a dial onscreen

## Description

[live.dial](https://docs.cycling74.com/reference/live.dial) works like a circular slider that outputs numbers according to its degree of rotation.

## Arguments

None.

## Attributes

### active[int]: 1

Toggles the object's active mode. When the  active  attribute is set to 0, the mouse action does not cause output and the inactive colors are used.

### activedialcolor[4 floats]

Sets the dial color in RGBA format to be used when the  active  attribute is set to 1.

### activefgdialcolor[4 floats] >= 8.0.0

Sets the foreground dial color in RGBA format to be used when the  active  attribute is set to 1.

### activeneedlecolor[4 floats]

Sets the needle color in RGBA format to be used when the  active  attribute is set to 1.

### annotation\_name[symbol]:

The string that is prepended to annotations. This shows up in the Info pane in Live, and the clue window in Max.

### appearance[int]: 0

The word  appearance  followed by a number, sets the display style for the [live.dial](https://docs.cycling74.com/reference/live.dial) object.

Possible values:

0 = 'Vertical'
(
Vertical dial display
)
Sets a vertical display (the default).

1 = 'Tiny'
(
Tiny dial display
)
Sets a very tiny dial display.

2 = 'Panel'
(
Panel dial display
)
Sets a dial display that includes a labeled panel.

3 = 'Large'
(
Large dial display
)
Sets a large dial display.

### bordercolor[4 floats]

Sets the display color for the [live.dial](https://docs.cycling74.com/reference/live.dial) object's border in RGBA format.

### dialcolor[4 floats]

Sets the dial color in RGBA format displayed when the  active  attribute is set to 0.

### fgdialcolor[4 floats] >= 8.0.0

Sets the foreground dial color in RGBA format displayed when the  active  attribute is set to 0.

### focusbordercolor[4 floats]

Sets the display color for the focused [live.dial](https://docs.cycling74.com/reference/live.dial) object's border in RGBA format.

### needlecolor[4 floats]

Sets the needle color in RGBA format. This is only used when the  active  attribute is set to 0.

### needlemode[int]: 0 >= 8.6.0

Needle Drawing Mode

Possible values:

0 = 'Automatic'

1 = 'Unipolar'

2 = 'Bipolar'

### panelcolor[4 floats]

Sets the panel color in RGBA format. This is only used when the  appearance  attribute is set to  panel  mode.

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### showname[int]: 1

Toggles the display of the parameter name. The default is 1 (displayed).

### shownumber[int]: 1

Toggles the display of the parameter value. The default is 1 (displayed).

### textcolor[4 floats]

Sets the display color for the [live.dial](https://docs.cycling74.com/reference/live.dial) object's text in RGBA format.

### triangle[int]: 0

Toggles the display of a triangle in the dial display. When the  triangle  attribute is set to 1 and the triangle is displayed, clicking on it will restore the dial's initial value.

### tricolor[4 floats]

Sets the display color for the [live.dial](https://docs.cycling74.com/reference/live.dial) object's triangle in RGBA format when the dial is in the default position.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends the current value out the outlet.

### int

The number received in the inlet is stored and displayed by the [live.dial](https://docs.cycling74.com/reference/live.dial) object and sent out the outlet.

Arguments:

- input
  [int]

### float

The number received in the inlet is stored and displayed in the [live.dial](https://docs.cycling74.com/reference/live.dial) and sent out the outlet.

Arguments:

- input
  [float]

### assign

The word  assign , followed by a floating point value, causes that value to be displayed and sent out the [live.dial](https://docs.cycling74.com/reference/live.dial) object's outlet. The value, however, will not be stored. If the Parameter Visibility attribute is set to Stored Only, the  assign  message will not add the new value to the Live application’s undo chain.

Arguments:

- assign-input
  [float]

### init

Restores and outputs the initial value.

### (mouse)

Click and drag in the dial to change the value. Hold down the Shift key for more precise mouse control.

### outputvalue

Sends the current value out the outlet.

### rawfloat

A raw normalized value (between 0. and 1.) received in the inlet is converted to a real value, stored, displayed by [live.dial](https://docs.cycling74.com/reference/live.dial), and the current value is sent out the outlet.

Arguments:

- input
  [float]

### set

Sets the current value without causing any output.

Arguments:

- set-input
  [float]

## Output

### float

Out right outlet: When an output is triggered, a raw normalized value (between 0. and 1.) is sent out this outlet.

### int/float

Out left outlet: Numbers received in the object's inlet or produced by clicking or dragging on the [live.dial](https://docs.cycling74.com/reference/live.dial) object with the mouse are sent out the outlet. The value sent is an integer if the  Parameter Type  is set to  INT  or  ENUM .

## See Also

| Name | Description |
| --- | --- |
| [live.numbox](https://docs.cycling74.com/reference/live.numbox) | Display and output a number |
| [live.slider](https://docs.cycling74.com/reference/live.slider) | Output numbers by moving a slider onscreen |
| [dial](https://docs.cycling74.com/reference/dial) | Output numbers using an onscreen dial |
