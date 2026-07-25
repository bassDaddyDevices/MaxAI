---
type: max
name: "led"
summary: "Color on/off button"
signal: false
url: "https://docs.cycling74.com/reference/led/"
package: "Max"
see_also: ["button", "pictctrl", "togedge", "toggle"]
---
# led

Color on/off button

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

Info View Title

### bgcolor[4 floats]

Sets the background color of the [led](https://docs.cycling74.com/reference/led) object in RGBA format.

### blinktime[int]: 150

Specifies the duration (in milliseconds) that the [led](https://docs.cycling74.com/reference/led) object will flash when it is clicked upon or receives a  bang  message.

### offcolor[4 floats]

Sets the inactive LED color in RGBA format.

### oncolor[4 floats]

Sets the active LED color in RGBA format.

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### thickness[float]: 95. >= 7.0.0

Sets the size of the LED in proportion to the size of the object.

### useoffcolor[int]: 1 >= 7.0.0

When set to 1, the inactive LED color is used, as defined by the offcolor attribute.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Flashes [led](https://docs.cycling74.com/reference/led) on and off quickly, and outputs  0 .

Clicking on an [led](https://docs.cycling74.com/reference/led) toggles it back and forth between bright and dark, outputting  1  and  0 .

### int

If the number is  0 , [led](https://docs.cycling74.com/reference/led) shows its darkened state, and outputs  0 . If the number is not 0, [led](https://docs.cycling74.com/reference/led) shows its brightened state and outputs  1 .

Arguments:

- input
  [int]

### float

Converted to  int .

Arguments:

- input
  [float]

### (mouse)

Clicking on an [led](https://docs.cycling74.com/reference/led) object toggles it back and forth between bright and dark, outputting 1 and 0.

### pict

In left inlet: the word  pict , followed by an integer, changes the color used by [led](https://docs.cycling74.com/reference/led).

Arguments:

- color
  [int]

### set

The word  set , followed by a non-zero number causes [led](https://docs.cycling74.com/reference/led) to show its brightened state, but causes no output;  set 0  shows the [led](https://docs.cycling74.com/reference/led) object in a darkened state, but causes no output.

Arguments:

- on/off-flag (0 or non-zero)
  [int]

### toggle

Switches the [led](https://docs.cycling74.com/reference/led) from dark to bright and sends  1  out the outlet; or vice-versa, from bright to dark, sending  0  out the outlet.

## Output

### int

The output is  1  when [led](https://docs.cycling74.com/reference/led) is bright,  0  when it is dark. A  bang  in the inlet flashes [led](https://docs.cycling74.com/reference/led) on and off and sends  0  out the outlet.

## See Also

| Name | Description |
| --- | --- |
| [button](https://docs.cycling74.com/reference/button) | Blink and send a bang |
| [pictctrl](https://docs.cycling74.com/reference/pictctrl) | Picture-based control |
| [togedge](https://docs.cycling74.com/reference/togedge) | Report zero/non-zero transitions |
| [toggle](https://docs.cycling74.com/reference/toggle) | Switch between off and on (0 and 1) |
