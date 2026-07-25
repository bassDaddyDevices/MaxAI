---
type: msp
name: "gain~"
summary: "Gain control"
signal: true
url: "https://docs.cycling74.com/reference/gain~/"
package: "MSP"
see_also: ["linedrive"]
---
# gain~

Gain control

## Description

[gain~](https://docs.cycling74.com/reference/gain~) is a slider that scales signals. It can also make a smooth transition as you move from one value of the slider to the next.

#### Discussion

Parameters of line's formula that translates between slider values and the signal scalar can be changed via messages or by selecting the object and choosing  Get Info...  from the Max menu. The formula values are the same as for the [linedrive](https://docs.cycling74.com/reference/linedrive) object.

The default values of range (158), base value (7.94231), and increment (1.071519) provide for a slider where 128 is full scale (multiplying by 1.0), 0 produces a zero signal, and 1 is 75.6 dB below the value at 127. A change of 10 in the slider produces a 6 dB change in the output. In addition, since the range is 158, slider values from 129 to 157 provide 17.4 dB of headroom. When the slider is at 157, the output signal is 17.4 dB louder than the input signal.

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

Info View Title

### bgcolor[4 floats]

Sets the first interior color (background) of the [gain~](https://docs.cycling74.com/reference/gain~) object in RGBA format.

### inc[float]: 1.071519

Sets the increment value used to calculate the output scale factor based on the input value. The default value is 1.071519.

### interp[float]: 10.

Sets the interpolation ramp time in milliseconds for the [gain~](https://docs.cycling74.com/reference/gain~) object. The default is 10.

### interpinlet[int]: 0 >= 7.0.0

Toggles the display of the interpolation inlet.

### knobcolor[4 floats]

Sets the color of the knob and the stripes of the value color in RGBA format. The  knobcolor  attribute is mapped to the  color  style color.

### multislider[int]: 0

This attribute only applies to [mc.gain~](https://docs.cycling74.com/reference/mc.gain~). If multislider is enabled, the [mc.gain~](https://docs.cycling74.com/reference/mc.gain~) object will create a slider for each channel in its input multichannel signal, permitting independent level control of each channel. If the object is not wide or tall enough to show all the sliders, it remains in single slider mode until its size is adjusted.

### orientation[int]: 0

Sets the [gain~](https://docs.cycling74.com/reference/gain~) object to a horizontal or vertical data display.

 Automatic : (the default for [gain~](https://docs.cycling74.com/reference/gain~) and [mc.gain~](https://docs.cycling74.com/reference/mc.gain~)) sets the display dependent on the size of the slider - longest side of the rectangle that describes the slider sets the orientation.

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

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial values of parameters](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### relative[int]: 0

Sets way that the [gain~](https://docs.cycling74.com/reference/gain~) object responds to mouse clicks.

Possible values:

0 = 'Absolute'
(
Absolute mode
)
In absolute mode, the [gain~](https://docs.cycling74.com/reference/gain~) will automatically jump directly to the clicked location.

1 = 'Relative'
(
Relative mode
)
In relative mode (the default) the [gain~](https://docs.cycling74.com/reference/gain~) keeps its relative position when you click - Moving the mouse outputs higher or lower values in relation to that relative position.

### scale[float]: 7.94321

Sets the base output value used to calculate the output scale factor based on the input value. The default value is 7.94231. See the "Inspector" section for an explanation of the calculation. The word  size , followed by a number, sets the range of [gain~](https://docs.cycling74.com/reference/gain~) to the number. The values of the slider will then be 0 to the range value minus 1. The default value is 158.

### size[int]: 158

Sets the number of steps (range) of the [gain~](https://docs.cycling74.com/reference/gain~) object. The default value is 158.

### stripecolor[4 floats]

Sets the "off" color for the slider in RGBA format. The  stripecolor  attribute is mapped to the  elementcolor  style color.

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends current slider value out right outlet.

### int

In left inlet: Sets the value of the slider, ramps the output signal to the level corresponding to the new value over the specified ramp time, and outputs the slider's value out the right outlet.

Arguments:

- slider-value
  [int]

### float

In left inlet: Converted to  int . Sets the value of the slider, ramps the output signal to the level corresponding to the new value over the specified ramp time, and outputs the slider's value out the right outlet.

Arguments:

- slider-value
  [float]

### (inlet1)

In right inlet: Sets the ramp time in milliseconds. The default is 10 milliseconds.

Arguments:

- ramp-time
  [float]

### list

The object takes  list  messages in conjunction with [pattr](https://docs.cycling74.com/reference/pattr) objects.

Arguments:

- slider-value
  [list]

### color >= 7.0.0

Sets the bgcolor to a legacy color (from the 1990s) by index 0 - 15.

Arguments:

- value
  [int]

### (mouse)

Clicking and dragging with the mouse sets the value of the slider, ramps the output signal to the level corresponding to the new value over the specified ramp time, and outputs the slider’s value out the right outlet.

### set

In left inlet: The word  set , followed by a number, sets the value of the slider, ramps the output signal to the level corresponding to the new value over the specified ramp time, but does not output the slider's value out the right outlet.

Arguments:

- set-slider-value
  [int]

### setvalue

TEXT\_HERE

### signal

In left inlet: The input signal to be scaled by the slider.

## Output

### int

Out right outlet: The current slider value, when dragging on the slider with the mouse or when [gain~](https://docs.cycling74.com/reference/gain~) receives an  int  or  float  in its left inlet.

### signal

Out left outlet: The input signal, scaled by the current slider value as x in the equation shown above.

## See Also

| Name | Description |
| --- | --- |
| [linedrive](https://docs.cycling74.com/reference/linedrive) | Scale numbers exponentially |
