---
type: ableton
name: "live.toggle"
summary: "Switch between off and on (0/1)"
signal: false
url: "https://docs.cycling74.com/reference/live.toggle/"
package: "Max for Live"
see_also: ["led", "live.tab", "matrixctrl", "pictctrl", "radiogroup", "live.text", "togedge", "toggle", "ubutton"]
---
# live.toggle

Switch between off and on (0/1)

## Description

[live.toggle](https://docs.cycling74.com/reference/live.toggle) sends a 0 as output when it is turned off and a 1 as output when it is turned on (when giving input, a non-zero number will turn it on, a  0  will turn it off, and a  bang  will alternate the state of the toggle).

## Arguments

None.

## Attributes

### active[int]: 1

Toggles the object's active mode. When  active  is set to 0, mouse action does not cause output and the inactive colors are used.

### activebgcolor[4 floats]

Sets the background color when off and active is set to 1.

### activebgoncolor[4 floats]

Sets the background color when on and active is set to 1.

### annotation\_name[symbol]:

The string that is prepended to annotations. This shows up in the Info pane in Live, and the clue window in Max.

### appearance[int]: 0 >= 8.0.0

Defines the display style.

Possible values:

0 = 'Default'

All attributes, except those with 'lcd' in the name, are functional.

1 = 'LCD'

To adjust the colors of the object you must use the attributes with 'lcd' in the name, such as inactivelcdcolor, and lcdcolor.

### bgcolor[4 floats]

Sets the background color when off and active is set to 0.

### bgoncolor[4 floats]

Sets the background color when on and active is set to 0.

### bordercolor[4 floats]

Sets the border color in RGBA format.

### focusbordercolor[4 floats]

Sets the border color for focused [live.toggle](https://docs.cycling74.com/reference/live.toggle) object in RGBA format.

### inactivelcdcolor[4 floats] >= 8.0.0

Sets the border and background color when the appearance attribute is set to 1:LCD, and the active attribute is set to 0.

### lcdcolor[4 floats] >= 8.0.0

Sets the border and background color when the appearance attribute is set to 1:LCD, and the active attribute is set to 1.

### outputmode[int]: 0 >= 8.0.0

Sets the output mode.

Possible values:

0 = 'Mouse down'

Send output on mouse down (default).

1 = 'Mouse up'

Send output on mouse up.

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### rounded[float]

Set the roundness of the border

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Switches [live.toggle](https://docs.cycling74.com/reference/live.toggle) on if it is off; switches it off if it is on.

### int

The number is sent out the outlet. If the number is not 0, [live.toggle](https://docs.cycling74.com/reference/live.toggle) displays an X, showing it is on. If it is  0 , [live.toggle](https://docs.cycling74.com/reference/live.toggle) is blank, showing it is off.

Arguments:

- input
  [int]

### float

Converted to  int . See  int  listing.

Arguments:

- input
  [float]

### assign

The word  assign , followed by a floating point value, causes that value to be displayed and sent out the [live.toggle](https://docs.cycling74.com/reference/live.toggle) object's outlet. The value, however, will not be stored. If the Parameter Visibility attribute is set to Stored Only, the  assign  message will not add the new value to the Live application’s undo chain.

Arguments:

- assign-input
  [float]

### init

Restores and outputs the initial value.

### (mouse)

A mouse click on [live.toggle](https://docs.cycling74.com/reference/live.toggle) switches the object on if it is off and off if it is on.

### outputvalue

Sends the current value out the outlet.

### set

Switches the [live.toggle](https://docs.cycling74.com/reference/live.toggle) on or off without sending anything out the outlet. The word  set , followed by any non-zero number, sets toggle to on;  set 0  sets it to off.

Arguments:

- set-input
  [int]

## Output

### int

A number received in the inlet is sent out the outlet. A  bang  or a mouse click sends  1  or  0  out the outlet, depending on whether [live.toggle](https://docs.cycling74.com/reference/live.toggle) is being turned on or off.

## See Also

| Name | Description |
| --- | --- |
| [led](https://docs.cycling74.com/reference/led) | Color on/off button |
| [live.tab](https://docs.cycling74.com/reference/live.tab) | A user interface tab/multiple button object in the style of Ableton Live. |
| [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) | Matrix switch control |
| [pictctrl](https://docs.cycling74.com/reference/pictctrl) | Picture-based control |
| [radiogroup](https://docs.cycling74.com/reference/radiogroup) | Radio button or check box |
| [live.text](https://docs.cycling74.com/reference/live.text) | A user interface button/toggle |
| [togedge](https://docs.cycling74.com/reference/togedge) | Report zero/non-zero transitions |
| [toggle](https://docs.cycling74.com/reference/toggle) | Switch between off and on (0 and 1) |
| [ubutton](https://docs.cycling74.com/reference/ubutton) | Transparent button |
