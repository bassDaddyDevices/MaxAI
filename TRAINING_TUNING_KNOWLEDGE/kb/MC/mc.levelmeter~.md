---
type: mc
name: "mc.levelmeter~"
summary: "RMS level meter"
signal: true
url: "https://docs.cycling74.com/reference/mc.levelmeter~/"
package: "MC"
see_also: ["average~", "gridmeter~", "meter~", "scope~"]
---
# mc.levelmeter~

RMS level meter

## Description

Use the [levelmeter~](https://docs.cycling74.com/reference/levelmeter~) when you need a signal level-meter with ballistics. The [meter~](https://docs.cycling74.com/reference/meter~) object provides metering in a simpler and more compact form.

## Arguments

None.

## Attributes

### attack[atom\_long]: 300

The word  attack , followed by a number, sets the [levelmeter~](https://docs.cycling74.com/reference/levelmeter~) object attack time, in milliseconds. The default is 0.

### bgcolor[4 floats]

Sets the background color in RGBA format.

### coolcolor[4 floats]: 0.70588 0.82353 0.39126 1.

Sets the RGBA values for the color for the lower “cool” range of the [levelmeter~](https://docs.cycling74.com/reference/levelmeter~) object.

### displaychan[int]: 1

Display Channel

### hotcolor[4 floats]: 0.86275 0.39126 0.39126 1.

Sets the RGBA values for the color for the hot “overload” range of the [levelmeter~](https://docs.cycling74.com/reference/levelmeter~) object.

### inactivealpha[float]: 0.3

When a multichannel signal is sent to [levelmeter~](https://docs.cycling74.com/reference/levelmeter~), the inactivealpha attribute sets the alpha of the needle color color for non-focused channels.

### interval[atom\_long]: 20

Sets the update time interval in milliseconds, of the [levelmeter~](https://docs.cycling74.com/reference/levelmeter~) display. The minimum update interval is 10 milliseconds, the maximum is 2 seconds, and the default is 100 milliseconds. This message also sets the rate at which [levelmeter~](https://docs.cycling74.com/reference/levelmeter~) sends out the peak value received in that time interval.

### markercolor[4 floats]

Sets the marker color in RGBA format. The  markercolor  attribute is mapped to the  accentcolor  style color.

### markers[8 ints]: -60 -48 -36 -24 -12 -6 0 6 12

Sets the numerical location for markers in the [levelmeter~](https://docs.cycling74.com/reference/levelmeter~) display (e.g. -60 -48 -36 -24 -12 -6 0 6 12).

### markersused[int]: 9

Sets the number of markers in the [levelmeter~](https://docs.cycling74.com/reference/levelmeter~) display.

### needlecolor[4 floats]

Sets the RGBA values for the color for the needle of the [levelmeter~](https://docs.cycling74.com/reference/levelmeter~) object. The  needlecolor  attribute is mapped to the  color  style color.

### offset[atom\_long]: 0

Sets the [levelmeter~](https://docs.cycling74.com/reference/levelmeter~) object display's deciBel offset.

### range[2 atom\_longs]: -60 12

Sets the display range of the [levelmeter~](https://docs.cycling74.com/reference/levelmeter~) object. The default range is -40 dB to 12 dB.

### release[atom\_long]: 300

Sets the [levelmeter~](https://docs.cycling74.com/reference/levelmeter~) object release time, in milliseconds. The default is 0.

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### warmcolor[4 floats]: 0.86275 0.58824 0.31373 1.

Sets the RGBA values for the color for the middle “warm” range of the [levelmeter~](https://docs.cycling74.com/reference/levelmeter~) object.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

The RMS amplitude most recently calculated for an input signal is displayed and output by the needle of the on-screen level meter.

### int

An  int  sets dB value displayed and output by [levelmeter~](https://docs.cycling74.com/reference/levelmeter~).

Arguments:

- input
  [int]

### clear

The word  clear  clears the FB delay stage memory.

### mode

The word  mode  followed by an integer between 0 and 5 will set the operational mode of [levelmeter~](https://docs.cycling74.com/reference/levelmeter~) as follows:

0 = "fast"(no ballistics or dB-offset)

1 = "VU" (attack = 330; release = 330; dB-offset = -20)

2 = "DIN 45 406(IEC PPM type IIb)"(attack = 10; release = 1500; dB-offset = -14)

3 = "BBC (IEC PPM type IIa)" (attack = 10; release = 3000; dB-offset = -14)

4 = "Nordic (IEC PPM type I)" (attack = 5; release = 2000; dB-offset = -14)

5 = "EBU Digital" (attack = 0; release = 1500; dB-offset = -14)

(Object defaults to "fast" mode.)

Arguments:

- operational-mode
  [int]

### (mouse)

If the input is an MC signal, click the dots below the number to choose a channel value to display.

### signal

The RMS amplitude of the incoming signal is displayed by the needle of the on-screen level meter. When a multichannel signal is received, the RMS amplitude of each channel will be displayed on individual channel selectors.

## Output

### int

The RMS (root mean square) value in deciBels of the signal for the current update interval is sent out the outlet when audio processing is on.

## See Also

| Name | Description |
| --- | --- |
| [average~](https://docs.cycling74.com/reference/average~) | Multi-mode signal average |
| [gridmeter~](https://docs.cycling74.com/reference/gridmeter~) | Display signal levels as brightness |
| [meter~](https://docs.cycling74.com/reference/meter~) | Visual peak level indicator |
| [scope~](https://docs.cycling74.com/reference/scope~) | Visualize an audio signal |
