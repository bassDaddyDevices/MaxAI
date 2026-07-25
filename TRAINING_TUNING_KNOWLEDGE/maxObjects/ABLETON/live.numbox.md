---
type: ableton
name: "live.numbox"
summary: "Display and output a number"
signal: false
url: "https://docs.cycling74.com/reference/live.numbox/"
package: "Max for Live"
see_also: ["live.dial", "live.slider", "number", "flonum"]
---
# live.numbox

Display and output a number

## Description

The [live.numbox](https://docs.cycling74.com/reference/live.numbox) object is a number box used to display, input, and output numbers.

## Arguments

None.

## Attributes

### active[int]: 1

Toggles the object's active mode. When the  active  attribute is set to 0, the mouse action does not cause output, and the inactive colors are used.

### activebgcolor[4 floats]

Sets the background color off displayed when the  active  attribute is set to 1.

### activeslidercolor[4 floats]

Sets the slider color displayed when the  active  attribute is set to 1.

### activetricolor[4 floats]

Sets the triangle color displayed when the actual value is equal to the  initial  value.

### activetricolor2[4 floats]

Sets the triangle color displayed when the actual value is different from the  initial  value and the  active  attribute is set to 1.

### annotation\_name[symbol]:

The string that is prepended to annotations. This shows up in the Info pane in Live, and the clue window in Max.

### appearance[int]: 0

Select different display modes:

 mode 0  (default): Standard display

 mode 1 : Triangle display

 mode 2 : Slider display

 mode 3 : Bipolar display

 mode 4 : LCD display

Possible values:

0 = 'Default'

1 = 'Triangle'

2 = 'Slider'

3 = 'Bipolar'

4 = 'LCD'

### bordercolor[4 floats]

Sets the display color for the [live.numbox](https://docs.cycling74.com/reference/live.numbox) object's border in RGBA format.

### focusbordercolor[4 floats]

Sets the border color in RGBA format to be used when the [live.numbox](https://docs.cycling74.com/reference/live.numbox) has the focus.

### inactivelcdcolor[4 floats] >= 8.0.0

Sets the display color for the [live.numbox](https://docs.cycling74.com/reference/live.numbox) object's text in RGBA format when the
active
attribute is set to 0.

### lcdbgcolor[4 floats] >= 8.0.0

Sets the background color in RGBA format when the
appearance
attribute is set to 'LCD'.

### lcdcolor[4 floats] >= 8.0.0

Sets the display color for the [live.numbox](https://docs.cycling74.com/reference/live.numbox) object's text when the
appearance
attribute is set to 'LCD'.

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### textcolor[4 floats]

Sets the display color for the [live.numbox](https://docs.cycling74.com/reference/live.numbox) object's text in RGBA format when the
active
attribute is set to 1.

### tricolor[4 floats]

Sets the triangle color displayed when the actual value is different from the  initial  value and the  active  attribute is set to 0.

### tricolor2[4 floats]

Sets the triangle color displayed when the actual value is different from the  initial  value and the  active  attribute is set to 0.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends the current value out the outlet.

### int

The number received in the inlet is stored and displayed by the [live.numbox](https://docs.cycling74.com/reference/live.numbox) object and sent out the outlet.

Arguments:

- input
  [int]

### float

The number received in the inlet is stored and displayed by the [live.numbox](https://docs.cycling74.com/reference/live.numbox) object and sent out the outlet.

Arguments:

- input
  [float]

### assign

The word  assign , followed by a floating point value, causes that value to be displayed and sent out the [live.numbox](https://docs.cycling74.com/reference/live.numbox) object's outlet. The value, however, will not be stored. If the Parameter Visibility attribute is set to Stored Only, the  assign  message will not add the new value to the Live application’s undo chain.

Arguments:

- assign-input
  [float]

### init

Restores and outputs the initial value.

### (mouse)

Click and drag the [live.numbox](https://docs.cycling74.com/reference/live.numbox) display to change the value. Hold down the Shift key for more precise mouse control.

If the [live.numbox](https://docs.cycling74.com/reference/live.numbox) object is set to store an initial value (set by checking the Initial Enable option in the object's Inspector), double-clicking in the triangle region will restore that value.

### outputvalue

Sends the current value out the outlet.

### rawfloat

A raw normalized value (between 0. and 1.) received in the inlet is converted to a real value, stored, displayed by [live.numbox](https://docs.cycling74.com/reference/live.numbox), and the current value is sent out the outlet.

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

Out right outlet: when an output is triggered, a raw normalized value (between 0. and 1.) is sent out this outlet.

### int/float

Out left outlet: Numbers received in the inlet, or produced by clicking or dragging on [live.numbox](https://docs.cycling74.com/reference/live.numbox) with the mouse, are sent out the outlet. The value sent is an integer if the  Parameter Type  is set to  INT  or  ENUM .

## See Also

| Name | Description |
| --- | --- |
| [live.dial](https://docs.cycling74.com/reference/live.dial) | Output numbers by moving a dial onscreen |
| [live.slider](https://docs.cycling74.com/reference/live.slider) | Output numbers by moving a slider onscreen |
| [number](https://docs.cycling74.com/reference/number) | Display and output numbers, lists, and messages |
| [flonum](https://docs.cycling74.com/reference/flonum) | Display and output a number |
