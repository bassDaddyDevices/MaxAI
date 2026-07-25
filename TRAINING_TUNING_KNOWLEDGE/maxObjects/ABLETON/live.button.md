---
type: ableton
name: "live.button"
summary: "Flash on any message, send a  bang"
signal: false
url: "https://docs.cycling74.com/reference/live.button/"
package: "Max for Live"
see_also: ["button", "trigger"]
---
# live.button

Flash on any message, send a  bang

## Description

[live.button](https://docs.cycling74.com/reference/live.button) is used to trigger other messages and processes.

## Arguments

None.

## Attributes

### active[int]: 1

Toggles the object's active mode. When  active  is set to 0, mouse action does not cause output and the inactive colors are used.

### activebgcolor[4 floats]

When the  active  attribute is set to 1, this attribute sets the background color displayed when the button is off in RGBA format.

### activebgoncolor[4 floats]

When the  active  attribute is set to 1, this attribute sets the background color displayed when the button is on in RGBA format.

### annotation\_name[symbol]:

The string that is prepended to annotations. This shows up in the Info pane in Live, and the clue window in Max.

### bgcolor[4 floats]

When the  active  attribute is set to 0, this attribute sets the background color displayed when the button is off in RGBA format.

### bgoncolor[4 floats]

When the  active  attribute is set to 0, this attribute sets the background color displayed when the button is on in RGBA format.

### blinktime[int]: 100

Sets the blink time in milliseconds.

### bordercolor[4 floats]

Sets the border color of [live.button](https://docs.cycling74.com/reference/live.button) object in RGBA format. Note that this color is only used in the  assignment  mode within Live.

### focusbordercolor[4 floats]

Sets the display color for the focused [live.button](https://docs.cycling74.com/reference/live.button) object's border in RGBA format. Note that this color is only used in  assignment  mode within Live.

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### transition[int]: 0

The parameter automation of [live.button](https://docs.cycling74.com/reference/live.button) stores 0 and 1 values. The  transition  attribute specifies when a  bang  message will be sent to the outlet.

 0 Zero->One : output a  bang  when the parameter value changes from 0. to 1.

 1 One->Zero : output a  bang  when the parameter value changes from 1. to 0.

 2 Both : output a  bang  when the parameter value changes from 0. to 1. and when it changes from 1. to 0.

Possible values:

0 = 'Zero->One'
(
Output a  bang  on 0. to 1. transitions
)
Outputs a  bang  when the parameter value changes from 0. to 1.

1 = 'One->Zero'
(
Output a  bang  on 1. to 0. transitions
)
Outputs a  bang  when the parameter value changes from 1. to 0.

2 = 'Both'
(
Output a  bang  on 0. to 1. and 1. to 0. transitions
)
Outputs a  bang  when the parameter value changes from 0. to 1. and when it changes from 1. to 0.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Performs the same function as  anything .

### int

Performs the same function as  anything .

Arguments:

- input
  [int]

### float

Performs the same function as  anything .

Arguments:

- input
  [float]

### anything

When any message is received in the inlet, the button flashes briefly and a  bang  is sent out the outlet.

Arguments:

- input
  [list]

### assign

The word  assign , followed by a floating point value, causes that value to be displayed and sent out the [live.button](https://docs.cycling74.com/reference/live.button) object's outlet. The value, however, will not be stored. If the Parameter Visibility attribute is set to Stored Only, the  assign  message will not add the new value to the Live application’s undo chain.

Arguments:

- assign-input
  [float]

### (mouse)

Clicking on the [live.button](https://docs.cycling74.com/reference/live.button) object will cause it to flash briefly and send a  bang  message out the outlet.

## Output

### bang

A mouse click or any message in the inlet causes the [live.button](https://docs.cycling74.com/reference/live.button) object to flash and send a  bang  message.

## See Also

| Name | Description |
| --- | --- |
| [button](https://docs.cycling74.com/reference/button) | Blink and send a bang |
| [trigger](https://docs.cycling74.com/reference/trigger) | Send input to many places |
