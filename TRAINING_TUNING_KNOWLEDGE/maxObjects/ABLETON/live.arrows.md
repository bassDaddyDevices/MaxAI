---
type: ableton
name: "live.arrows"
summary: "Vectorized arrow(s) user interface object"
signal: false
url: "https://docs.cycling74.com/reference/live.arrows/"
package: "Max for Live"
see_also: ["live.button"]
---
# live.arrows

Vectorized arrow(s) user interface object

## Description

[live.arrows](https://docs.cycling74.com/reference/live.arrows) displays a variable number of directional arrow buttons.

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

Info View Title

### arrowcolor[4 floats]

Sets the arrow color of the [live.arrows](https://docs.cycling74.com/reference/live.arrows) object in RGBA format.

### blinkcolor[4 floats]

Sets the blink color of the [live.arrows](https://docs.cycling74.com/reference/live.arrows) object in RGBA format.

### blinktime[int]: 150

Sets the blink time in milliseconds.

### bordercolor[4 floats]

Sets the border color of the [live.arrows](https://docs.cycling74.com/reference/live.arrows) object in RGBA format.

### downarrow[int]: 1

Toggles the display of the down arrow. The default is 1 (on).

### leftarrow[int]: 1

Toggles the display of the left arrow. The default is 1 (on).

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_enable[int]

Parameter Mode Enable

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### rightarrow[int]: 1

Toggles the display of the right arrow. The default is 1 (on).

### uparrow[int]: 1

Toggles the display of the up arrow. The default is 1 (on).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Sending an integer value to the [live.arrows](https://docs.cycling74.com/reference/live.arrows) object will cause the displayed arrow whose number corresponds to those arrow(w) currently displayed to flash and will send a corresponding message out the [live.arrows](https://docs.cycling74.com/reference/live.arrows) object's outlet. Index numbering for arrows starts at 0 for the leftmost arrow. The indexing range will vary depending on the number of arrows displayed (using the  downarrow ,  leftarrow ,  rightarrow , and  uparrow  attributes).

Arguments:

- input
  [int]

### down

When the  down  message is received, the down arrow will flash and the message  down  will be sent to the [live.arrows](https://docs.cycling74.com/reference/live.arrows) object's outlet if the  downarrow  attribute is set to 1.

### left

When the  left  message is received, the left arrow will flash and the message  left  will be sent to the [live.arrows](https://docs.cycling74.com/reference/live.arrows) object's outlet if the  leftarrow  attribute is set to 1.

### (mouse)

Click to output the corresponding arrow symbol.

### right

When the  right  message is received, the right arrow will flash and the message  right  will be sent to the [live.arrows](https://docs.cycling74.com/reference/live.arrows) object's outlet if the  rightarrow  attribute is set to 1.

### up

When the  up  message is received, the up arrow will flash and the message  up  will be sent to the [live.arrows](https://docs.cycling74.com/reference/live.arrows) object's outlet if the  uparrow  attribute is set to 1.

## Output

### symbol

When a left, up, down, or right arrow is clicked or selected using a message, a corresponding message ( left ,  up ,  down  or  right ) is sent to the outlet

## See Also

| Name | Description |
| --- | --- |
| [live.button](https://docs.cycling74.com/reference/live.button) | Flash on any message, send a bang |
