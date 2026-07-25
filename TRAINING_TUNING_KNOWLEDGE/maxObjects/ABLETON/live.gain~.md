---
type: ableton
name: "live.gain~"
summary: "Decibel volume slider and monitor"
signal: true
url: "https://docs.cycling74.com/reference/live.gain~/"
package: "Max for Live"
see_also: ["gain~", "meter~"]
---
# live.gain~

Decibel volume slider and monitor

## Description

[live.gain~](https://docs.cycling74.com/reference/live.gain~) is a slider that scales input audio signals and provides a visual indication of the current sound level on a deciBel scale.

## Arguments

None.

## Attributes

### active[int]: 1

Toggles the object's active mode. When the  active  attribute is set to 0, mouse action does not cause output and the inactive colors are used.

### annotation\_name[symbol]:

The string that is prepended to annotations. This shows up in the Info pane in Live, and the clue window in Max.

### channels[int]: 2

Sets the number of channels (up to 64). For more channels, you can use [mc.live.gain~](https://docs.cycling74.com/reference/mc.live.gain~).

### clip\_size[int]: 0

Sets the clipping zone size.

Possible values:

0 = 'Normal'
(
Normal
)
Normal (the default)

1 = 'Extended'
(
Extended
)
Extended

### coldcolor[4 floats]

Sets the Cold signal color in RGBA format.

### display\_range[2 floats]: -70. 6.

Sets the range, in deciBels, displayed by the [live.gain~](https://docs.cycling74.com/reference/live.gain~) object. By default, the the display range is set to the same values as the range of the object itself (-70dB - +6dB).

### focusbordercolor[4 floats]

Sets the display color for the [live.gain~](https://docs.cycling74.com/reference/live.gain~) object's border in RGBA format.

### hotcolor[4 floats]

Sets the Warning signal color in RGBA format.

### inactivecoldcolor[4 floats]

Sets the Cold signal (inactive) color in RGBA format.

### inactivewarmcolor[4 floats]

Sets the Warm signal (inactive) color in RGBA format.

### interp[float]: 10.

Sets the ramp time in milliseconds. The default is 10 milliseconds.

### interval[int]: 20

Sets the update time interval of the meter display, in milliseconds. The minimum update interval is 10 milliseconds, the maximum is 2 seconds. This message also sets the rate at which the [live.gain~](https://docs.cycling74.com/reference/live.gain~) object sends out the list of peak values (in dB) for each channel received in that time interval.

### livemode[int]

When enabled, the live.gain~ UI displays a db level label.

### metering[int]: 1

Specifies whether the [live.gain~](https://docs.cycling74.com/reference/live.gain~) object displays and outputs the signal level pre-fader (0) or post-fader (1).

Possible values:

0 = 'Pre Fader'

1 = 'Post Fader'

### mode[int]: 0

The mode attribute allows you to specify metering to be displayed.

Possible values:

0 = 'deciBel'
(
DeciBel display
)
Set deciBel metering display.

1 = 'Linear'
(
Linear display
)
Set linear metering display.

### modulationcolor[4 floats]

Sets the modulation color of [live.gain~](https://docs.cycling74.com/reference/live.gain~) object in RGBA format.

### orientation[int]: 0

Sets the [slider](https://docs.cycling74.com/reference/slider) object to a horizontal or vertical data display.

Possible values:

0 = 'Vertical'
(
Vertical display
)
Set the object for vertical display.

1 = 'Horizontal'
(
Horizontal display
)
Set the object for horizontal display.

### overloadcolor[4 floats]

Sets the Overload signal color in RGBA format.

### param\_connect[symbol]:

Establishes a two-way connection between the object and a parameter of a compatible object with parameters such as [gen~](https://docs.cycling74.com/reference/gen~) or [jit.gl.slab](https://docs.cycling74.com/reference/jit.gl.slab). The object can be used to change the value of the parameter and will update if the parameter value changes. The easiest way to set param\_connect is with the attribute's menu in the [inspector](https://docs.cycling74.com/userguide/inspector) or the Connect submenu of the [Object Action menu](https://docs.cycling74.com/userguide/action_menu). The menu displays all available parameters of compatible objects.

Setting the param\_connect attribute with a message requires the target parameter's path, which is the host object's scriping name followed by two colons and the parameter name. For example, for a [gen~](https://docs.cycling74.com/reference/gen~) object with scripting name  gen~\_AB , the path of the  freq  parameter would be  gen~\_AB::freq . You can set a value for the param\_connect before the host object or parameter exists, and the object will connect to the parameter once it exists. Refer to the user guide entry for [param\_connect](https://docs.cycling74.com/userguide/param_connect) for more details.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping).

### relative[int]: 0

Sets the mode for mouse behavior.

Possible values:

0 = 'Absolute'
(
Absolute mode
)
The [live.gain~](https://docs.cycling74.com/reference/live.gain~) will automatically jump directly to the clicked location.

1 = 'Relative'
(
Relative mode
)
The [live.gain~](https://docs.cycling74.com/reference/live.gain~) keeps its relative position when you click on it. Moving the mouse outputs higher or lower values in relation to that relative position (the default).

### showname[int]: 1

Toggles the display of the parameter name. The default is 1 (on).

### shownumber[int]: 1

Toggles the display of the gain parameter value. The default is 1 (on).

### slidercolor[4 floats]

Sets the slider background color in RGBA format.

### textcolor[4 floats]

Sets the display color for the [live.gain~](https://docs.cycling74.com/reference/live.gain~) object's text in RGBA format.

### thickness[int]: 5

Sets the thickness (width or height, depending on the orientation) of each channel's meter in pixels. The default is 5, the minimum is 1, and the maximum is 40 pixels. Reducing the thickness can be helpful when working with large numbers of channels.

### threshold\_db[float]: 1.

Sets the redraw threshold for dB display. This allows you to balance the redrawing / efficiency. The maximum refresh rate is set by the interval attribute.

### threshold\_linear[float]: 0.01

Sets the redraw threshold for linear display. This allows you to balance the redrawing / efficiency. The maximum refresh rate is set by the interval attribute.

### tribordercolor[4 floats]

Sets the triangle border color in RGBA format. This is only used when the [live.gain~](https://docs.cycling74.com/reference/live.gain~) object does not have the focus.

### tricolor[4 floats]

Sets the triangle color in RGBA format. This is only used when the [live.gain~](https://docs.cycling74.com/reference/live.gain~) object does not have the focus.

### trioncolor[4 floats]

Sets the triangle color in RGBA format. This is only used when the [live.gain~](https://docs.cycling74.com/reference/live.gain~) object does have the focus.

### warmcolor[4 floats]

Sets the Warm signal color in RGBA format.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends the current value out the outlet.

### int

The number received in the inlet sets the level (in dB).

Arguments:

- db-input
  [int]

### float

The number received in the inlet sets the level (in dB).

Arguments:

- db-input
  [float]

### assign

The word  assign , followed by a floating point value, causes that value to be displayed and sent out the [live.gain~](https://docs.cycling74.com/reference/live.gain~) object's outlet. The value, however, will not be stored. If the Parameter Visibility attribute is set to Stored Only, the  assign  message will not add the new value to the Live application’s undo chain.

Arguments:

- assign-input
  [float]

### init

Restore and output the initial value.

### (mouse)

Click and drag the slider to change the amplification. Hold down the Shift key for more precise mouse control.

### outputvalue

Sends the current value out the outlet.

### rawfloat

A raw normalized value (between 0. and 1.) received in the inlet is converted to a real value, stored, displayed by [live.gain~](https://docs.cycling74.com/reference/live.gain~) object, and the current value is sent out the outlet.

Arguments:

- input
  [float]

### set

Sets the current value without causing output.

Arguments:

- set-slider-value
  [float]

### signal

In left inlet: The input signal (left channel) to be scaled.

In right inlet: The input signal (right channel) to be scaled.

## Output

### float

Out third outlet: The current slider value in dB, when dragging on the slider with the mouse or when [live.gain~](https://docs.cycling74.com/reference/live.gain~) receives an int or float.

Out fourth outlet: When an output is triggered, a raw normalized value (between 0. and 1.) is sent out this outlet.

### list

Out fifth outlet: The amplitude of the two channels (in dB) is sent out this outlet.

### signal

Out first and second outlet: The input signal, scaled by the current slider value.

## See Also

| Name | Description |
| --- | --- |
| [gain~](https://docs.cycling74.com/reference/gain~) | Gain control |
| [meter~](https://docs.cycling74.com/reference/meter~) | Visual peak level indicator |
