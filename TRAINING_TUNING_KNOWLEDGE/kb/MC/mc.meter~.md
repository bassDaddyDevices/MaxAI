---
type: mc
name: "mc.meter~"
summary: "Visual peak level indicator"
signal: true
url: "https://docs.cycling74.com/reference/mc.meter~/"
package: "MC"
see_also: ["average~", "gridmeter~", "scope~"]
---
# mc.meter~

Visual peak level indicator

## Description

Use the [meter~](https://docs.cycling74.com/reference/meter~) object to monitor any signal in the range -1 and 1 (other signals should be scaled first).

#### Discussion

Each "LED" on the meter represents a change of 3dB from the previous step, by default. The red "over" LED comes on if the signal is greater than or equal to 1, and lasts for about a second. You can change the redrawing interval with the interval message. Resizing the meter gives its vertical or horizontal orientation, depending on whether its height is greater than its width or vice versa. [meter~](https://docs.cycling74.com/reference/meter~) outputs the peak signal value received every redrawing interval. Additional appearance settings, such as number of LEDs, and their colors can be set using the object's Inspector. mc.meter~ can be used to monitor multichannel signals, and automatically adapts to the number of channels received.

## Arguments

None.

## Attributes

### bgcolor[4 floats]

Sets the RGBA values for the background color of the [meter~](https://docs.cycling74.com/reference/meter~) object.

### dbperled[int]: 3

Sets the amount of signal level in deciBels represented by each LED. By default each LED represents a 3dB change in volume from its neighboring LEDs.

### interval[atom\_long]: 50

Sets the update-time interval, in milliseconds, of the [meter~](https://docs.cycling74.com/reference/meter~) display. The minimum update-interval is 10 milliseconds, the maximum is 2 seconds, and the default is 50 milliseconds. This message also sets the rate at which [meter~](https://docs.cycling74.com/reference/meter~) sends out the peak value received in that time interval.

### monotone[int]: 0 >= 7.0.0

Toggles single-color display for level indicators

### nhotleds[int]: 3

Sets the total number "hot" warning LEDs displayed on the [meter~](https://docs.cycling74.com/reference/meter~) object (corresponding to the color set by the  rgba2  message).

### ntepidleds[int]: 3

Sets the total number "tepid" mid-range LEDs displayed on the [meter~](https://docs.cycling74.com/reference/meter~) object (corresponding to the color set by the  rgba5  message).

### numleds[int]: 12

The word  numleds , followed by a number between 10 and 20, sets the total number of LEDs displayed on the [meter~](https://docs.cycling74.com/reference/meter~) object. The range is 10-20 LEDs.

### nwarmleds[int]: 3

Sets the total number "warm" lower-mid-range LEDs displayed on the [meter~](https://docs.cycling74.com/reference/meter~) object (corresponding to the color set by the  rgba4  message).

### offcolor[4 floats] >= 7.0.0

Sets the color for the "off" level indicators. The  offcolor  attribute is mapped to the  elementcolor  style color.

### oncolor[4 floats] >= 7.0.0

Sets the color for the "on" level indicators. The  oncolor  attribute is mapped to the  color  style color.

### orientation[int]: 0 >= 8.0.0

Sets the orientation of the [meter~](https://docs.cycling74.com/reference/meter~) object. When set to 0 (automatic), the orientation will automatically change based on the dimensions of the object.

Possible values:

0 = 'Automatic'

1 = 'Horizontal'

2 = 'Vertical'

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Converted to  float . A value will set the meter to react as though a signal with equal amplitude peak-value has been passed to its input. Corresponding LEDs will light up and the peak-level value will be passed out the outlet (0.0 will show silence, 0.0 through 1.0 will light up to any but the overload LED, and anything above 1.0 will light all LEDs including overload).

Arguments:

- input-peak-value
  [int]

### float

A float value will set the meter to react as though a signal with equal amplitude peak-value has been passed to its input. Corresponding LEDs will light up and the peak-level value will be passed out the outlet (0.0 will show silence, 0.0 through 1.0 will light up to any but the overload LED, and anything above 1.0 will light all LEDs including overload).

Arguments:

- input-peak-value
  [float]

### (mouse)

When the patcher window is unlocked, you can reorient a [meter~](https://docs.cycling74.com/reference/meter~) from horizontal to vertical by dragging its resize area and changing its shape.

### signal

The peak amplitude of the incoming signal is displayed by the LEDs of the on-screen level meter. When a multichannel signal is received, the peak amplitude of each channel will be displayed.

## Output

### float

The peak (absolute) value received in the previous update interval is sent out the outlet when audio processing is on. For [mc.meter~](https://docs.cycling74.com/reference/mc.meter~) only the peak value for the first channel is output.

## See Also

| Name | Description |
| --- | --- |
| [average~](https://docs.cycling74.com/reference/average~) | Multi-mode signal average |
| [gridmeter~](https://docs.cycling74.com/reference/gridmeter~) | Display signal levels as brightness |
| [scope~](https://docs.cycling74.com/reference/scope~) | Visualize an audio signal |
