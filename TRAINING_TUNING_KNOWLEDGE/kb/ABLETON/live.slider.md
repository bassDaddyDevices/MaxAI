---
type: ableton
name: "live.slider"
summary: "Output numbers by moving a slider onscreen"
signal: false
url: "https://docs.cycling74.com/reference/live.slider/"
package: "Max for Live"
see_also: ["live.numbox", "live.dial", "live.slider"]
---
# live.slider

Output numbers by moving a slider onscreen

## Description

[live.slider](https://docs.cycling74.com/reference/live.slider) is a user interface object that resembles a sliding potentiometer.

## Arguments

None.

## Attributes

### active[int]: 1

Toggles the object's active mode. When the  active  attribute is set to 0, the mouse action does not cause output and the inactive colors are used.

### annotation\_name[symbol]:

The string that is prepended to annotations. This shows up in the Info pane in Live, and the clue window in Max.

### focusbordercolor[4 floats]

Sets the border color in RGBA format to be used when the [live.slider](https://docs.cycling74.com/reference/live.slider) has the focus.

### modulationcolor[4 floats]

Sets the modulation color of the [live.slider](https://docs.cycling74.com/reference/live.slider) object in RGBA format.

### orientation[int]: 0

Defines the orientation of the [live.slider](https://docs.cycling74.com/reference/live.slider) object.

Possible values:

0 = 'Vertical'
(
Vertical
)
Vertical orientation (the default).

1 = 'Horizontal'
(
Horizontal
)
Horizontal orientation (the default).

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### relative[int]: 0

Sets the way that the [live.slider](https://docs.cycling74.com/reference/live.slider) object responds to mouse clicks.

Possible values:

0 = 'Absolute'
(
Absolute
)
In absolute mode, the [live.slider](https://docs.cycling74.com/reference/live.slider) object will automatically jump directly to the clicked location.

1 = 'Relative'
(
Relative
)
In relative mode (the default), the [live.slider](https://docs.cycling74.com/reference/live.slider) object keeps its relative position when you click on it. Moving the mouse outputs higher or lower values in relation to that relative position.

### showname[int]: 1

The word  showname , followed by the number 1 or 0, shows or hides the parameter name.

### shownumber[int]: 1

The word  shownumber , followed by the number 1 or 0, shows or hides the parameter value.

### slidercolor[4 floats]

Sets the slider color of the [live.slider](https://docs.cycling74.com/reference/live.slider) objectin RGBA format.

### textcolor[4 floats]

Sets the display color for the [live.slider](https://docs.cycling74.com/reference/live.slider) object's text in RGBA format.

### tribordercolor[4 floats]

Sets the triangle border color in RGBA format. This is only used when the [live.slider](https://docs.cycling74.com/reference/live.slider) object does not have the focus.

### tricolor[4 floats]

Sets the triangle color in RGBA format. This is only used when the [live.slider](https://docs.cycling74.com/reference/live.slider) object does not have the focus.

### trioncolor[4 floats]

Sets the triangle color in RGBA format. This is only used when the [live.slider](https://docs.cycling74.com/reference/live.slider) object does have the focus.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends the current value out the outlet.

### int

The number received in the inlet is stored and displayed by the [live.slider](https://docs.cycling74.com/reference/live.slider) object and sent out the outlet.

Arguments:

- input
  [int]

### float

The number received in the inlet is stored and displayed by the [live.slider](https://docs.cycling74.com/reference/live.slider) object and sent out the outlet.

Arguments:

- input
  [float]

### assign

The word  assign , followed by a floating point value, causes that value to be displayed and sent out the [live.slider](https://docs.cycling74.com/reference/live.slider) object's outlet. The value, however, will not be stored. If the Parameter Visibility attribute is set to Stored Only, the  assign  message will not add the new value to the Live application’s undo chain.

Arguments:

- assign-input
  [float]

### init

Restore and output the initial value.

### (mouse)

Click and drag in the slider to change the value. Hold down the Shift key for more precise mouse control.

### outputvalue

Sends the current value out the outlet.

### rawfloat

A raw normalized value (between 0. and 1.) received in the inlet is converted to a real value, stored, displayed by [live.slider](https://docs.cycling74.com/reference/live.slider), and the current value is sent out the outlet.

Arguments:

- input
  [float]

### set

Sets and displays the current value without triggering any output.

Arguments:

- set-input
  [float]

## Output

### float

Out right outlet: when an output is triggered, a raw normalized value (between 0. and 1.) is sent out this outlet.

### int/float

Out left outlet: Numbers received in the inlet or produced by clicking or dragging on [live.slider](https://docs.cycling74.com/reference/live.slider) with the mouse are sent out the outlet. The value sent is an integer if the  Parameter Type  is set to  INT  or  ENUM .

## See Also

| Name | Description |
| --- | --- |
| [live.numbox](https://docs.cycling74.com/reference/live.numbox) | Display and output a number |
| [live.dial](https://docs.cycling74.com/reference/live.dial) | Output numbers by moving a dial onscreen |
| [live.slider](https://docs.cycling74.com/reference/live.slider) | Output numbers by moving a slider onscreen |
