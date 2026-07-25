---
type: max
name: "multislider"
summary: "Display data as sliders or a scrolling display"
signal: false
url: "https://docs.cycling74.com/reference/multislider/"
package: "Max"
see_also: ["itable", "kslider", "matrixctrl", "pictslider", "rslider", "slider"]
---
# multislider

Display data as sliders or a scrolling display

## Description

Displays data as either an array of sliders or a scrolling display. When configured as sliders, the values are set (and output) as numeric lists. When configured as a scrolling display, [multislider](https://docs.cycling74.com/reference/multislider) receives numbers, plots them, and scrolls the display area.

#### Discussion

Slider values are set by sending lists to the [multislider](https://docs.cycling74.com/reference/multislider) object, which automatically reconfigures itself to have the same the number of sliders as elements in the list. The number of sliders, their range, style and additional attributes can all be set from the object's Inspector. The drawing styles include bar or thin-line slider handles (when using it as a slider), or point-value or zero-to-point in scrolling mode.

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

Info View Title

### bgcolor[4 floats]

Specifies the background color of the [multislider](https://docs.cycling74.com/reference/multislider) in RGBA format. object.

### candicane2[4 floats]: 0.498 0.5561 0.7451 1.

Specifies the 2nd slider color in candycane mode in RGBA format.

### candicane3[4 floats]: 0.29392 0.41441 0.71583 1.

Specifies the 3rd slider color in candycane mode in RGBA format.

### candicane4[4 floats]: 0.44088 0.62161 0.07375 1.

Specifies the 4th slider color in candycane mode in RGBA format.

### candicane5[4 floats]: 0.58784 0.82881 0.43166 1.

Specifies the 5th slider color in candycane mode in RGBA format.

### candicane6[4 floats]: 0.7348 0.03601 0.78958 1.

Specifies the 6th slider color in candycane mode in RGBA format.

### candicane7[4 floats]: 0.88176 0.24321 0.14749 1.

Specifies the 7th slider color in candycane mode in RGBA format.

### candicane8[4 floats]: 0.02872 0.45042 0.50541 1.

Specifies the 8th slider color in candycane mode in RGBA format.

### candycane[int]: 1

Enables the [multislider](https://docs.cycling74.com/reference/multislider) object to use multiple colors for adjacent sliders, with the color pattern repeating (like the stripes in a candycane) every N sliders (indicated by the integer argument). The first eight colors can be set with the  frgba  and  rgba4 -  rgba10  messages, the next fifteen colors are taken from the Max application's color palette. The number of stripes in the candycane can also be set using the Inspector.

### compatibility[int]: 0

Toggles the backwards-compatibility mode for the  maximum ,  minimum  and  sum  messages. If this mode is enabled, the [multislider](https://docs.cycling74.com/reference/multislider) object will output the single-value results of these messages out the left outlet, otherwise the values will be output out the right (single slider value) outlet, just like the  fetch  message. Patches saved before Max 4.6 will automatically open with compatibility mode enabled.

### contdata[int]: 0

Sets the mouse output mode for non-scrolling display styles. If this mode is set to  1  ( Mouse-Down + Continuous Data , the [multislider](https://docs.cycling74.com/reference/multislider) object will output a list of its current slider values each time the mouse is clicked and dragged. If this mode is set to  0  ( Mouse-Down/Up , the [multislider](https://docs.cycling74.com/reference/multislider) object will output a list when the mouse button is pressed and again when it is released. When set to  2  ( Mouse-Up Only ), the [multislider](https://docs.cycling74.com/reference/multislider) object will only output a list when the mouse button is released. The mouse output mode can also be set using the Inspector.

Possible values:

0 = 'Mouse-Down/Up'
(
Output on Mouse-Down and Mouse-Up
)
Output when the mouse button is pressed and again when it is released.

1 = 'Mouse-Down + Continuous Data'
(
Output on Mouse-Down and Mouse-Drag
)
Output when the mouse button is pressed and dragged.

2 = 'Mouse-Up Only'
(
Output on Mouse-Up Only
)
Output only when the mouse button is released.

### drawpeaks[int]: 0

Toggles setting the [multislider](https://docs.cycling74.com/reference/multislider) to draw peak-output lines when displaying slider values. When followed by a 0, the sliders will not show any peaks.

### ghostbar[int]: 0

When followed by a percentage value from 1 to 100, enables the drawing of a "ghost" bar when mode the [multislider](https://docs.cycling74.com/reference/multislider) object is in Thin Line mode. A percentage value of 1 will draw a very light bar behind the Thin Line line, a value of 50 will draw a half-dark bar, and a value of 100 will draw a bar the same color as the Thin Line slider. When the word  ghostbar  is followed by a zero, this drawing mode is disabled (which it is by default).

### listresize[int]: 1

When enabled (default), the number of sliders will change in response to an incoming list, resizing to match the list length. When disabled, the number of sliders remains stable, without regard for the length of incoming lists.

### orientation[int]: 1

The word  orientation  followed by a non-zero number will set the sliders to be drawn with a vertical orientation. When followed by a 0, [multislider](https://docs.cycling74.com/reference/multislider) will be set to draw with a horizontal orientation.

Possible values:

0 = 'Horizontal'

1 = 'Vertical'

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial parameter values](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### peakcolor[4 floats]

Specifies the peak indicators when Peak-Hold display is turned on (see  peakhold  and  peakreset  messages). The default value is grey ( rgb2 127 127 127 ).

### setminmax[2 floats]: -1. 1.

Sets the low and high range values for the [multislider](https://docs.cycling74.com/reference/multislider) object. The default values are -1.0 and 1.0 for floating point sliders and 0 and 127 for integer sliders.

### setstyle[int]: 0

Sets the display style of the [multislider](https://docs.cycling74.com/reference/multislider) object. The default value is Thin Line ( setstyle 0 ).

Possible values:

0 = 'Thin Line'

1 = 'Bar'
(
Display slider values as bars
)
2 = 'Point Scroll'

3 = 'Line Scroll'

4 = 'Reverse Point Scroll'

5 = 'Reverse Line Scroll'

### settype[int]: 1

Sets the [multislider](https://docs.cycling74.com/reference/multislider) object for integer (0) or floating point (1) operation. The Inspector can also be used to set the [multislider](https://docs.cycling74.com/reference/multislider) object's type. The default is integer ( settype 0 ).

Possible values:

0 = 'Integer'
(
Use integer values for operation
)
1 = 'Floating-point'
(
Use integer values for operation
)

### shadowalpha[float]: 0.

The shadowalpha attribute sets the opacity of the gradient shadow used to draw bars. At 0 (the default), the gradient is invisible; at 1 it is completely opaque. shadowalpha must be non-zero for the other shadow drawing attributes to have an effect on the object's appearance.

### shadowblend[float]: 0.

Sets the amount of black blended with the object's linecolor to create the shadow. Values of shadowblend closer to 0 will be darker; values closer to 1 will be lighter.

### shadoworientation[int]: 0

Shadow Orientation

Possible values:

0 = 'Same'

1 = 'Opposite'

2 = 'Orthogonal'

3 = 'Orthogonal Opposite'

4 = 'Diagonal from Top Left'

5 = 'Diagonal from Bottom Left'

6 = 'Diagonal from Top Right'

7 = 'Diagonal from Bottom Right'

### shadowperbar[int]: 1

Individual Bar Shadows

### shadowproportion[float]: 0.5

Sets the vertical mid point within the shadow gradient. 0 is at the bottom, 1 is at the top.

### signed[int]: 0

Sets the signed or unsigned display mode for bar sliders. The default is 0 (off), and bar sliders are drawn from the minimum value. When this mode is set to 1 (on) sliders are drawn from zero to either a positive or negative slider value.

### size[atom\_long]: 1

Sets the number of sliders the [multislider](https://docs.cycling74.com/reference/multislider) object has. The default is 1, and the maximum number of sliders is 4096.

### slidercolor[4 floats]

Specifies the slider color of the [multislider](https://docs.cycling74.com/reference/multislider) object. The default value is black ( frgb 0 0 0 ).

### spacing[int]: 0

Sets the amount of space (in pixels) between sliders. The default is 0 (all sliders touching one another).

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### thickness[int]: 2

Sets the pen thickness of "thin line"style sliders. The default thickness is 2 pixels.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Outputs the current slider values as a list.

### int

Sets all slider values and positions to the number received and outputs a list reflecting the current values. If the [multislider](https://docs.cycling74.com/reference/multislider) data type is set to float, the values in the incoming list are converted to floats.

Arguments:

- input
  [int]

### float

Sets all slider values and positions to the number received and outputs a list reflecting the current values. If the [multislider](https://docs.cycling74.com/reference/multislider) data type is set to int, the values in the incoming list are truncated and converted to ints.

Arguments:

- input
  [float]

### list

Sets each slider to a corresponding value in the list from left to right, with the first value in the list setting the first slider. If the [multislider](https://docs.cycling74.com/reference/multislider) has a different number of sliders than is present in the list, the number of sliders is changed to the number of items in the list. In such a case, the outside dimensions of the [multislider](https://docs.cycling74.com/reference/multislider) will not change, only the width or height of the sliders.

Arguments:

- input
  [list]

### anything

anything  is used to offer backwards compatibility in conjunction with the  compatibility  message.

Arguments:

- list
  [list]

### copy

The  copy  message copies the values of a multislider, including the settype, setstyle, and setminmax attributes.

### drawbars

The word  drawbars  followed by a non-zero number will set the [multislider](https://docs.cycling74.com/reference/multislider) to draw bars when displaying slider values. When followed by a 0, the sliders' values will not be drawn in bars.

Arguments:

- flag
  [int]

### drawlines

The word  drawlines  followed by a non-zero number will set the [multislider](https://docs.cycling74.com/reference/multislider) to draw lines when displaying slider values. When followed by a 0, the sliders' values will not be drawn in lines.

Arguments:

- flag
  [int]

### echo

Toggles echo mode on and off. When echo mode is on, the [multislider](https://docs.cycling74.com/reference/multislider) object will output any list received in its inlet. The default is on (1).

Arguments:

- flag
  [int]

### fetch

The word  fetch , followed by a number, sends the value of the numbered slider out the right (single slider value) outlet. Slider numbering starts at 1. Any number less than 1 will report the first slider's value.

Arguments:

- slider
  [int]

### interp

Sending the word  interp , followed by a one or zero, enables or disables interpolation mode. When interpolation mode is on (the default), the [multislider](https://docs.cycling74.com/reference/multislider) object will output interpolated values when a slider is moved. In most cases you probably will not want to disable interpolation mode.

Arguments:

- mode
  [int]

### max

Sets all sliders to their maximum values.

### maximum

The word  maximum  causes the value of the slider with the largest value to be sent out the right outlet.

### min

Sets all sliders to their minimum values.

### minimum

The word  minimum  causes the value of the slider with the smallest value to be sent out the right outlet.

### normalize

The word  normalize , followed by a float, will scale the sample values in the [multislider](https://docs.cycling74.com/reference/multislider) so that the highest number matches the value given by the argument. Every value is scaled, and this activity cannot be undone. Although the  normalize  message calculates a normalized list based on the value passed as its argument, the message does not update the values in the [multislider](https://docs.cycling74.com/reference/multislider) object itself or display them.

Arguments:

- number
  [float]

### paste

The  paste  message pastes [multislider](https://docs.cycling74.com/reference/multislider) values that were previously copied if the settype, setstyle, and setminmax attributes are the same. Pasting will fail if the [multislider](https://docs.cycling74.com/reference/multislider) that you paste into does not have the same settype, setstyle, and setminmax attributes.

### pastereplace

The  pastereplace  message pastes [multislider](https://docs.cycling74.com/reference/multislider) values that were previously copied and sets the settype, setstyle, and setminmax attributes so that they are the same as what was copied.

### peakreset

Reset peak values to current slider values

### quantiles

In left inlet: The word  quantiles , followed by a list of floats between 0 and 1.0, multiplies each list element by the sum of all the values in the [multislider](https://docs.cycling74.com/reference/multislider). This result is then divided by 215 (32,768). Then, [multislider](https://docs.cycling74.com/reference/multislider) sends out the address at which the sum of all values up to that address is greater than or equal to the result for each list element.

Arguments:

- numbers
  [list]

### range

The word  range  followed by a minimum number and a maximum number will set all sliders to operate within that range.

Arguments:

- minimum
  [number]
- maximum
  [number]

### scrollclear

Clear the [multislider](https://docs.cycling74.com/reference/multislider) object in scrolling mode.

### select

Selectively sets slider values. For example,  select 1 30 2 4 5 50  sets the first slider to 30, the second to 4, and the fifth slider to 50 (the top or leftmost slider is always number 1).

Arguments:

- value-pairs
  [list]

### set

The word  set , followed by a slider number and a value, sets the numbered slider to that value without triggering any output.

Arguments:

- slider
  [number]
- value
  [number]

### setlist

The word  setlist , followed by a list of slider values, sets the sliders to the listed values without triggering any output.

Arguments:

- values
  [list]

### setmax

The word  setmax , followed by a number, sets the high values for the [multislider](https://docs.cycling74.com/reference/multislider) object.

Arguments:

- value
  [float]

### setmin

The word  setmin , followed by a number, sets the low values for the [multislider](https://docs.cycling74.com/reference/multislider) object.

Arguments:

- value
  [float]

### sum

Outputs a sum of all current slider values as a float.

## Output

### float

Out right outlet: The value of a numbered slider specified by the  fetch  message. The output reflects the current data type settings (see the  settype  message).

### int

Out right outlet: The value of a numbered slider specified by the  fetch  message. The output reflects the current data type settings (see the  settype  message).

### list

Out left outlet: When a [multislider](https://docs.cycling74.com/reference/multislider) receives a list, int, or float in its inlet, it outputs a list of its current values. The list is also sent out when the sliders are changed with the mouse.

## See Also

| Name | Description |
| --- | --- |
| [itable](https://docs.cycling74.com/reference/itable) | Data table editor |
| [kslider](https://docs.cycling74.com/reference/kslider) | Output numbers from an onscreen keyboard |
| [matrixctrl](https://docs.cycling74.com/reference/matrixctrl) | Matrix switch control |
| [pictslider](https://docs.cycling74.com/reference/pictslider) | Picture-based slider control |
| [rslider](https://docs.cycling74.com/reference/rslider) | Display or change a range of numbers |
| [slider](https://docs.cycling74.com/reference/slider) | Move a slider to output values |
