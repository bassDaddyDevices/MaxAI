---
type: max
name: "toggle"
summary: "Switch between off and on (0 and 1)"
signal: false
url: "https://docs.cycling74.com/reference/toggle/"
package: "Max"
see_also: ["led", "matrixctrl", "pictctrl", "radiogroup", "tab", "textbutton", "togedge", "ubutton"]
---
# toggle

Switch between off and on (0 and 1)

## Description

When clicked, [toggle](https://docs.cycling74.com/reference/toggle) outputs a 0 when turned off and a 1 when turned on. When giving input, a non-zero number will turn it on, a  0  will turn it off, and a  bang  will alternate the state of the toggle. All numbers are converted to integer and passed through unchanged.

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

Info View Title

### bgcolor[4 floats]

Sets the background color for the object in RGBA format.

### checkedcolor[4 floats]

Sets the checked color for the object in RGBA format.

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### size[float]: 41.67

Sets a scale factor as a percentage of the total area for drawing the X or SVG image when the [toggle](https://docs.cycling74.com/reference/toggle) is on.

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### svg[symbol]: <none>

The name of an SVG file in the search path that will be drawn in place of an X when the [toggle](https://docs.cycling74.com/reference/toggle) is on. The image will be scaled to fit inside the current rectangle as well as the value of the size attribute. Any black lines or shapes will be recolored with the current checkedcolor.

### thickness[float]: 50. >= 7.0.0

Sets the check thickness for the object.

### uncheckedcolor[4 floats] >= 7.0.0

Sets the unchecked color for the object in RGBA format. The  uncheckedcolor  attribute is mapped to the  elementcolor  style color.

#### Legacy

### elementcolor

Typelist (3 ints)

elementcolor  is a legacy RGB alias for the uncheckedcolor RGBA attribute.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Switches [toggle](https://docs.cycling74.com/reference/toggle) on if it is off; switches it off if it is on.

### int

The number is sent out the outlet. If the number is not 0, [toggle](https://docs.cycling74.com/reference/toggle) displays an X, showing it is on. If it is  0 , [toggle](https://docs.cycling74.com/reference/toggle) is blank, showing it is off.

Arguments:

- input
  [int]

### float

Converted to  int . See  int  listing.

Arguments:

- input
  [float]

### (drag)

When an SVG file is dragged onto toggle, it is assigned as the value of the svg attribute and used to draw the on state indicator instead of the default X.

### (mouse)

A mouse click on [toggle](https://docs.cycling74.com/reference/toggle) switches the object on if it is off and off if it is on.

### outputvalue >= 7.0.0

Output current value without changing state.

### read

Use the  read  to assign an SVG file to use to draw the on state instead of the default X.

Arguments:

- SVG-filename
  [symbol]

### set

Switches the [toggle](https://docs.cycling74.com/reference/toggle) on or off without sending anything out the outlet. The word  set , followed by any non-zero number, sets toggle to on;  set 0  sets it to off.

Arguments:

- set-input
  [int]

## Output

### int

A number received in the inlet is sent out the outlet. A  bang  or a mouse click sends  1  or  0  out the outlet, depending on whether [toggle](https://docs.cycling74.com/reference/toggle) is being turned on or off.

## See Also

| Name | Description |
| --- | --- |
| [led](https://docs.cycling74.com/reference/led) | Color on/off button |
| [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) | Matrix switch control |
| [pictctrl](https://docs.cycling74.com/reference/pictctrl) | Picture-based control |
| [radiogroup](https://docs.cycling74.com/reference/radiogroup) | Radio button or check box |
| [tab](https://docs.cycling74.com/reference/tab) | Tab control |
| [textbutton](https://docs.cycling74.com/reference/textbutton) | Button with text |
| [togedge](https://docs.cycling74.com/reference/togedge) | Report zero/non-zero transitions |
| [ubutton](https://docs.cycling74.com/reference/ubutton) | Transparent button |
