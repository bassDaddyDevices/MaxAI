---
type: max
name: "button"
summary: "Blink and send a  bang"
signal: false
url: "https://docs.cycling74.com/reference/button/"
package: "Max"
see_also: ["bangbang", "loadbang", "loadmess", "matrixctrl", "pictctrl", "trigger", "ubutton"]
---
# button

Blink and send a  bang

## Description

[button](https://docs.cycling74.com/reference/button) blinks when you send it any message, and it sends out a bang when you click on it.

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

Info View Title

### bgcolor[4 floats]

Sets the background color of the [button](https://docs.cycling74.com/reference/button) object in RGBA format.

### blinkcolor[4 floats]

Sets the blink color of the [button](https://docs.cycling74.com/reference/button) object in RGBA format. The  blinkcolor  attribute is mapped to the  color  style color.

### blinktime[int]: 200

The time in milliseconds that the button will light up when clicked or triggered by a message.

### outlinecolor[4 floats]

Sets the outline color of the [button](https://docs.cycling74.com/reference/button) object in RGBA format. The  outlinecolor  attribute is mapped to the  elementcolor  style color.

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

See the  anything  listing

### int

See the  anything  listing

Arguments:

- input
  [int]

### float

See the  anything  listing

Arguments:

- input
  [float]

### list

See the  anything  listing

Arguments:

- input
  [list]

### anything

When any message is received in the inlet, button flashes briefly and a  bang  is sent out the outlet.

Arguments:

- input
  [list]

### (mouse)

Clicking on the [button](https://docs.cycling74.com/reference/button) object will cause it to blink briefly and send a bang out the outlet.

## Output

### bang

A mouse click or any message in the inlet causes [button](https://docs.cycling74.com/reference/button) to blink and output a  bang .

## See Also

| Name | Description |
| --- | --- |
| [bangbang](https://docs.cycling74.com/reference/bangbang) | Output a bang from many outlets |
| [loadbang](https://docs.cycling74.com/reference/loadbang) | Send a bang when a patcher is loaded |
| [loadmess](https://docs.cycling74.com/reference/loadmess) | Send a message when a patch is loaded |
| [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) | Matrix switch control |
| [pictctrl](https://docs.cycling74.com/reference/pictctrl) | Picture-based control |
| [trigger](https://docs.cycling74.com/reference/trigger) | Send input to many places |
| [ubutton](https://docs.cycling74.com/reference/ubutton) | Transparent button |
