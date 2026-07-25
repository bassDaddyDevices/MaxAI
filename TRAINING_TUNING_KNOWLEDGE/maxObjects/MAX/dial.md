---
type: max
name: "dial"
summary: "Output numbers using an onscreen dial"
signal: false
url: "https://docs.cycling74.com/reference/dial/"
package: "Max"
see_also: ["pictctrl", "pictslider", "rslider", "slider"]
---
# dial

Output numbers using an onscreen dial

## Description

Outputs numbers according to its degree of rotation. [dial](https://docs.cycling74.com/reference/dial) can be set with a certain range, offset, multiplier, as well as numerous visual settings.

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

Info View Title

### bgcolor[4 floats]

Sets the background color of the [dial](https://docs.cycling74.com/reference/dial) object in RGBA format.

### clip[int]: 1

Causes the [dial](https://docs.cycling74.com/reference/dial) object's vertical mouse tracking to operate with or without clipping within the specified output range. Clipping is enabled with a non-zero (the default) or disabled with a zero.

### degrees[int]: 270

Sets the limits of [dial](https://docs.cycling74.com/reference/dial) object's rotation.

### floatoutput[atom\_long]: 0

Toggles floating-point output from the [dial](https://docs.cycling74.com/reference/dial) object. The default is 0 (off).

### inputrangemode[int]: 0

Use Output Range for Input

### min[float]: 0.

Sets an offset value that will be added to the [dial](https://docs.cycling74.com/reference/dial) object's value before it is sent out the outlet. The default is 0.

### mode[int]: 0 >= 7.0.0

Drawing Style

Possible values:

0 = 'Arc'

1 = 'Indicator'

2 = 'Pie Slice'

3 = 'Classic'

4 = 'Needle'

5 = 'Live'

6 = 'Pan'

### mult[float]: 1.

Sets a multiplier value for the [dial](https://docs.cycling74.com/reference/dial) object. The object's value will be multiplied by this number before it is sent out the outlet. The multiplication happens before the addition of the offset value.

### needlecolor[4 floats]

Sets the indicator color of the dial in RGBA format.

### outlinecolor[4 floats]

Sets the outline color of the dial in RGBA format.

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### size[float]: 128.

Sets the range of the [dial](https://docs.cycling74.com/reference/dial) object. The default value is 128. When floatoutput is set to 0, any specified size less than 2 will be set to  2 . When floatoutput is set to 1, any specified size less than 1 will be set to  1 .

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### thickness[float]: 50. >= 7.0.0

Sets the thickness of the [dial](https://docs.cycling74.com/reference/dial) object.

### vtracking[int]: 1

Selects the mouse tracking mode.

 circular : Causes the  dial  to use circular tracking. Moving the mouse clockwise in a circular arc relative to the control's center increases the control’s value, and moving it counterclockwise decreases its value.

 vertical : (the default) Causes the  dial  to use vertical tracking. Moving the mouse up increases the object’s value, and moving it down decreases the value.

Possible values:

0 = 'Circular'

1 = 'Vertical'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends out the number currently stored in [dial](https://docs.cycling74.com/reference/dial).

### int

The number received in the inlet is displayed graphically by [dial](https://docs.cycling74.com/reference/dial), and is passed out its outlet. Optionally, [dial](https://docs.cycling74.com/reference/dial) can multiply the number by some amount and add an offset to it before sending it out the outlet.

The [dial](https://docs.cycling74.com/reference/dial) will also send out numbers in response to clicking or dragging on it directly with the mouse.

Arguments:

- input
  [int]

### float

Converted to  int .

Arguments:

- input
  [float]

### (mouse)

The  dial  object will send out numbers in response to clicking or dragging on it directly with the mouse.

### resize

The word  resize , followed by a number, changes the size of the [dial](https://docs.cycling74.com/reference/dial) dial object in pixels.

Arguments:

- input
  [int]

### set

The word  set , followed by a number, changes the displayed value of the [dial](https://docs.cycling74.com/reference/dial), without triggering output.

Arguments:

- input
  [int]

### setminmax

The word  setminmax , followed by two numbers, sets the low and high range values for the [dial](https://docs.cycling74.com/reference/dial) object. If the number list consists of floating point values, the  *floatoutput*  attribute will automatically be set.

Arguments:

- min-max-values
  [list]

## Output

### int

Numbers received in the inlet, or produced by clicking or dragging on [dial](https://docs.cycling74.com/reference/dial) with the mouse, are first multiplied by the multiplier, then have the offset added to them, then are sent out the outlet.

## See Also

| Name | Description |
| --- | --- |
| [pictctrl](https://docs.cycling74.com/reference/pictctrl) | Picture-based control |
| [pictslider](https://docs.cycling74.com/reference/pictslider) | Picture-based slider control |
| [rslider](https://docs.cycling74.com/reference/rslider) | Display or change a range of numbers |
| [slider](https://docs.cycling74.com/reference/slider) | Move a slider to output values |
