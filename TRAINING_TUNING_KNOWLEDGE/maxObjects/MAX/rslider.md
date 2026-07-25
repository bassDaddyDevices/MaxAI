---
type: max
name: "rslider"
summary: "Display or change a range of numbers"
signal: false
url: "https://docs.cycling74.com/reference/rslider/"
package: "Max"
see_also: ["multislider", "nslider", "pictctrl", "pictslider", "slider", "split"]
---
# rslider

Display or change a range of numbers

## Description

Set a value range from the lowest to highest value.

#### Discussion

In the right inlet, the number is taken as one end of the range. The left inlet sets the other end. Drawing the range with the mouse always outputs the lowest value out the left outlet and the highest out the right.

Shift-clicking extends the range instead of replacing it. Command-clicking (Macintosh) or Control-double-clicking (Windows) and dragging shifts the current range values up or down. Option-clicking (Macintosh) or Alt-clicking (Windows) and dragging up or down expands or shrinks the currently selected range. Command-double-clicking (Macintosh) or Control-double-clicking (Windows) selects the entire range.

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

Info View Title

### bgcolor[4 floats]

Sets the background color of the [rslider](https://docs.cycling74.com/reference/rslider) object in RGBA format.

### bordercolor[4 floats]

Sets the border color of the [rslider](https://docs.cycling74.com/reference/rslider) object in RGBA format.

### drawline[int]: 1

Toggles the drawing of a center line on the [rslider](https://docs.cycling74.com/reference/rslider) display. The default value is 1 (on).

### fgcolor[4 floats]

Sets the range color of the [rslider](https://docs.cycling74.com/reference/rslider) object in RGBA format.

### floatoutput[atom\_long]: 0

Toggles floating-point output from the [slider](https://docs.cycling74.com/reference/slider) object. The default is 0 (off).

### listmode[int]: 0

Toggles the list output mode. When it is on, the [rslider](https://docs.cycling74.com/reference/rslider) object will output the min and max values as a list out the left outlet. Otherwise, the values are sent out the right and left outlets. The default value is 0 (off).

### min[float]: 0.

Sets value that will be added to the [rslider](https://docs.cycling74.com/reference/rslider) object's lower value before it is sent out the outlet.

### mult[float]: 1.

Sets a multiplier value. The [rslider](https://docs.cycling74.com/reference/rslider) object's value will be multiplied by this number before it is sent out the outlet. The default value is 1.

### orientation[int]: 0

Sets the [rslider](https://docs.cycling74.com/reference/rslider) object to a horizontal or vertical data display.

 Automatic : (the default) sets the display dependent on the size of the slider - longest side of the rectangle that describes the slider sets the orientation.

 Horizontal
 Vertical

Possible values:

0 = 'Automatic'

1 = 'Horizontal'

2 = 'Vertical'

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### size[float]: 128.

Sets the total range of the [rslider](https://docs.cycling74.com/reference/rslider). The [rslider](https://docs.cycling74.com/reference/rslider) will range from 0 to one less than the specified size. A  size  message smaller than 1 will be automatically set to 2. By default, the size of an [rslider](https://docs.cycling74.com/reference/rslider) is  128 .

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### thickness[float]: 80.

Sets the thickness of the rslider knob. The default value is 80.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Sends out the minimum and maximum values of the currently displayed range.

### int

In left inlet: The number sets the minimum limit of a range displayed as a colored region on the [rslider](https://docs.cycling74.com/reference/rslider), and causes the minimum and maximum values of that range to be sent out. A number that exceeds the limits of the [rslider](https://docs.cycling74.com/reference/rslider) itself will be limited to stay within the [rslider](https://docs.cycling74.com/reference/rslider).

The minimum and maximum values can also be set (and sent out) by dragging with the mouse across a range in the [rslider](https://docs.cycling74.com/reference/rslider).

Arguments:

- minimum
  [int]

### (inlet1)

In right inlet: The number is stored as the maximum limit of the range displayed in color on the [rslider](https://docs.cycling74.com/reference/rslider). A number that exceeds the limits of the [rslider](https://docs.cycling74.com/reference/rslider) itself will be limited to stay within the [rslider](https://docs.cycling74.com/reference/rslider).

The minimum and maximum values can also be set (and sent out) by dragging with the mouse across a range in the [rslider](https://docs.cycling74.com/reference/rslider).

Arguments:

- maximum
  [int]

### float

Converted to  int .

Arguments:

- minimum
  [float]

### (inlet1)

In right inlet: The number is stored as the maximum limit of the range displayed in color on the [rslider](https://docs.cycling74.com/reference/rslider). A number that exceeds the limits of the [rslider](https://docs.cycling74.com/reference/rslider) itself will be limited to stay within the [rslider](https://docs.cycling74.com/reference/rslider).

The minimum and maximum values can also be set (and sent out) by dragging with the mouse across a range in the [rslider](https://docs.cycling74.com/reference/rslider).

Arguments:

- maximum
  [float]

### list

In left inlet: The first two numbers in the list are used to set the minimum and maximum values of the displayed range, and are sent out.

Arguments:

- minimum
  [int]
- maximum
  [int]

### (mouse)

Clicking on the [rslider](https://docs.cycling74.com/reference/rslider) object and dragging sets the minimum and maximum values and sends them out the object's outlets (or left outlet in list mode). or setting attributes.

### set

In left inlet: The word  set , followed by two numbers, sets the minimum and maximum values of the currently displayed range, without sending them out the outlets.

Arguments:

- minimum
  [int]
- maximum
  [int]

### setminmax

The word  setminmax , followed by two numbers, sets the low and high range values for the [rslider](https://docs.cycling74.com/reference/rslider) object. The  *floatoutput*  attribute will automatically be set.

Arguments:

- low
  [int]
- high
  [int]

## Output

### int

The maximum value of the displayed range is sent out the right outlet, and the minimum value is sent out the left outlet. Output is triggered by a new minimum value (or a  bang ) received in the left inlet, or by clicking or dragging the mouse in the [rslider](https://docs.cycling74.com/reference/rslider).

## See Also

| Name | Description |
| --- | --- |
| [multislider](https://docs.cycling74.com/reference/multislider) | Display data as sliders or a scrolling display |
| [nslider](https://docs.cycling74.com/reference/nslider) | Output numbers from a notation display |
| [pictctrl](https://docs.cycling74.com/reference/pictctrl) | Picture-based control |
| [pictslider](https://docs.cycling74.com/reference/pictslider) | Picture-based slider control |
| [slider](https://docs.cycling74.com/reference/slider) | Move a slider to output values |
| [split](https://docs.cycling74.com/reference/split) | Look for a range of numbers |
