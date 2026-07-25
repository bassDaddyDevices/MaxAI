---
type: ableton
name: "live.meter~"
summary: "Live-style visual peak level indicator"
signal: true
url: "https://docs.cycling74.com/reference/live.meter~/"
package: "Max for Live"
see_also: ["average~", "gridmeter~", "meter~", "scope~"]
---
# live.meter~

Live-style visual peak level indicator

## Description

[live.meter~](https://docs.cycling74.com/reference/live.meter~) is a simple mono Live-style signal level meter that can be attached to any signal whose level is between -1 and 1 (other signals should be scaled first).

#### Discussion

The visual output of the [live.meter~](https://docs.cycling74.com/reference/live.meter~) shows the current signal level, the recent peak level, and provides a red "over" indicator if the signal is greater than or equal to 1. You can change the redrawing interval with the Interval attribute, and the orientation of the meter is set using the Orientation attribute.

## Arguments

None.

## Attributes

### active[int]: 1

Enables (1) or disables (0) the meter display.

### bgcolor[4 floats]

Sets the background color in RGBA format.

### clip\_size[int]: 0

Sets the size of the region displaying the input greater than 1.0 (signal clipping).

Possible values:

0 = 'Normal'

1 = 'Extended'

2 = 'Disabled'

### coldcolor[4 floats]

Sets the Cold signal color in RGBA format.

### display\_range[2 floats]: -70. 6.

Sets the display range of the meter in dB.

### drawpeakhold[int]: 1

When enabled, short-term signal peaks are visually "held" momentarily.

### hotcolor[4 floats]

Sets the Warning signal color in RGBA format.

### inactivecoldcolor[4 floats]

Sets the Cold signal (inactive) color in RGBA format.

### inactivewarmcolor[4 floats]

Sets the Warm signal (inactive) color in RGBA format.

### interval[int]: 20

Sets the maximum update-time interval, in milliseconds, of the [live.meter~](https://docs.cycling74.com/reference/live.meter~) display. The minimum update-interval is 10 milliseconds, the maximum is 2 seconds, and the default is 50 milliseconds. This message also sets the rate at which [meter~](https://docs.cycling74.com/reference/meter~) sends out the peak value received in that time interval. The
threshold\_db
or
threshold\_linear
attributes are used to limit the refresh and the output, depending on the setting of the
mode
attribute.

### mode[int]: 0

Sets the display and output mode of the [live.meter~](https://docs.cycling74.com/reference/live.meter~) object.

Possible values:

0 = 'deciBel'

1 = 'Linear'

### orientation[int]: 0

Sets the orientation of the meter display. The options are Horizontal or Vertical

Possible values:

0 = 'Vertical'

1 = 'Horizontal'

### overloadcolor[4 floats]

Sets the Overload signal color in RGBA format.

### threshold\_db[float]: 1.

When the [live.meter~](https://docs.cycling74.com/reference/live.meter~) object's
mode
attribute is set to 0, this attribute sets the refresh threshold in deciBels. If the signal peak delta is greater than the threshold value, the object will be redrawn and the value sent out the outlet.

### threshold\_linear[float]: 0.01

When the [live.meter~](https://docs.cycling74.com/reference/live.meter~) object's
mode
attribute is set to 1, this attribute sets the refresh threshold in deciBels. If the signal peak delta is greater than the threshold value, the object will be redrawn and the value sent out the outlet.

### warmcolor[4 floats]

Sets the Warm signal color in RGBA format.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Converted to  float .

Arguments:

- signal-value
  [int]

### float

When no signal is connected to the [live.meter~](https://docs.cycling74.com/reference/live.meter~) object's inlet, a float number will set the meter to react as though a signal with equal amplitude peak-value has been passed to its input. Corresponding LEDs will light up and the peak-level value will be passed out the outlet (0.0 will show silence, 0.0 through 1.0 will light up to any but the overload LED, and anything above 1.0 will light all LEDs including overload).

Arguments:

- signal-value
  [float]

### db

The word  db , followed by a floating point number that specficies a deciBel value, will set the [live.meter~](https://docs.cycling74.com/reference/live.meter~) object to react as though a signal with that dB peak-value has been passed to its input. Corresponding LEDs will light up and the value will be passed out the outlet.

Arguments:

- db-value
  [float]

### signal

The peak amplitude of the incoming signal is displayed by the on-screen level meter.

## See Also

| Name | Description |
| --- | --- |
| [average~](https://docs.cycling74.com/reference/average~) | Multi-mode signal average |
| [gridmeter~](https://docs.cycling74.com/reference/gridmeter~) | Display signal levels as brightness |
| [meter~](https://docs.cycling74.com/reference/meter~) | Visual peak level indicator |
| [scope~](https://docs.cycling74.com/reference/scope~) | Visualize an audio signal |
