---
type: max
name: "hslider"
summary: "Move a slider to output values"
signal: false
url: "https://docs.cycling74.com/reference/hslider/"
package: "Max"
see_also: ["dial", "kslider", "multislider", "nslider", "pictctrl", "pictslider", "rslider"]
---
# hslider

Move a slider to output values

## Description

Resembles a sliding potentiometer, outputting numbers restricted to a specified range, offset by a specified number, and multiplied by a specified number.

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

Info View Title

### bgcolor[4 floats]

Sets the slider background color in RGBA format.

### drawoffcolor[int]: 0

When drawoffcolor is enabled, the offcolor will be used to draw the [slider](https://docs.cycling74.com/reference/slider) object's range over the background. When disabled, only the bgcolor will be used for the background.

### elementcolor[4 floats] >= 7.0.0

Sets the slider off color in RGBA format.

### floatoutput[atom\_long]: 0

Toggles floating-point output from the [slider](https://docs.cycling74.com/reference/slider) object. The default is 0 (off).

### inputrangemode[int]: 0

Use Output Range for Input

### knobcolor[4 floats]

Sets the slider knob color in RGBA format. The  knobcolor  attribute is mapped to the  color  style color.

### knobshape[int]: 0 >= 7.0.0

Sets the shape of the slider knob.

Possible values:

0 = 'Indicator+'

1 = 'Less Rounded'

2 = 'Rounded'

3 = 'Triangle'

4 = 'Rectangle'

5 = 'Indicator'

6 = 'Narrow Rounded'

### min[float]: 0.

Sets value that will be added to the [slider](https://docs.cycling74.com/reference/slider) object's value before it is sent out the outlet.

### mult[float]: 1.

Multiplier

### orientation[int]: 0

Sets the [slider](https://docs.cycling74.com/reference/slider) object to a horizontal or vertical data display.

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

### relative[int]: 0

Sets the way that the [slider](https://docs.cycling74.com/reference/slider) object responds to mouse clicks. In relative mode (the default) the [slider](https://docs.cycling74.com/reference/slider) keeps its relative position when you click - Moving the mouse outputs higher or lower values in relation to that relative position. In absolute mode, the [slider](https://docs.cycling74.com/reference/slider) will automatically jump directly to the clicked location.

Possible values:

0 = 'Absolute'

1 = 'Relative'

### size[float]: 128.

Sets the range of the [slider](https://docs.cycling74.com/reference/slider) object. The default value is 128. When floatoutput is set to 0, any specified size less than 2 will be set to  2 . When floatoutput is set to 1, any specified size less than 1 will be set to  1 .

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### thickness[float]: 100. >= 7.0.0

Sets the thickness of the slider knob. The default value is 100.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends out the number currently stored in the [slider](https://docs.cycling74.com/reference/slider).

### int

The number received in the inlet is displayed graphically by [slider](https://docs.cycling74.com/reference/slider), and is passed out the outlet. Optionally, [slider](https://docs.cycling74.com/reference/slider) can multiply the number by some amount and add an offset to it, before sending it out the outlet.

Arguments:

- input
  [int]

### float

Converted to  int .

Arguments:

- input
  [float]

### (mouse)

Clicking and dragging with the mouse causes will change the position of the slider and send a number value out the object's outlet.

### set

The word  set , followed by a number, resets the value displayed by the [slider](https://docs.cycling74.com/reference/slider), without triggering output.

Arguments:

- input
  [list]

### setminmax

The word  setminmax , followed by two numbers, sets the low and high range values for the [slider](https://docs.cycling74.com/reference/slider) object. The  *floatoutput*  attribute will automatically be set.

Arguments:

- values
  [list]

## Output

### int

Numbers received in the inlet, or produced by dragging on [slider](https://docs.cycling74.com/reference/slider) with the mouse, are first multiplied by the multiplier, then have the offset added to them, then are sent out the outlet.

Although the numbers that can be output by dragging are limited by the range of the [slider](https://docs.cycling74.com/reference/slider), numbers received in the inlet are not limited before they are sent out the outlet.

## See Also

| Name | Description |
| --- | --- |
| [dial](https://docs.cycling74.com/reference/dial) | Output numbers using an onscreen dial |
| [kslider](https://docs.cycling74.com/reference/kslider) | Output numbers from an onscreen keyboard |
| [multislider](https://docs.cycling74.com/reference/multislider) | Display data as sliders or a scrolling display |
| [nslider](https://docs.cycling74.com/reference/nslider) | Output numbers from a notation display |
| [pictctrl](https://docs.cycling74.com/reference/pictctrl) | Picture-based control |
| [pictslider](https://docs.cycling74.com/reference/pictslider) | Picture-based slider control |
| [rslider](https://docs.cycling74.com/reference/rslider) | Display or change a range of numbers |
