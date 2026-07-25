---
type: mc
name: "mc.scope~"
summary: "Visualize an audio signal"
signal: true
url: "https://docs.cycling74.com/reference/mc.scope~/"
package: "MC"
see_also: ["gridmeter~", "meter~"]
---
# mc.scope~

Visualize an audio signal

## Description

Use the [scope~](https://docs.cycling74.com/reference/scope~) object to visualize an audio signal using an oscilloscope-style display.

## Arguments

None.

## Attributes

### automatic[int]: 0

Automatic Mode

### bgcolor[4 floats]

Sets the background color in RGBA format.

### bufsize[atom\_long]: 128

Number of samples stored in the buffer

### calccount[atom\_long]: 256

Sets the number of samples per pixel to display

### delay[float]: 0.

Delay between each "trace" of oscilloscope in milliseconds

### displaychan[int]: 1

Display Channel

### displaysinglechannel[int]: 0

Single Channel

### drawstyle[int]: 0

Toggles an alternate drawing style which may make some waveforms more easily visible

### fgcolor[4 floats]

Sets the phosphor color in RGBA format. The  fgcolor  attribute is mapped to the  color  style color.

### gridcolor[4 floats]

Sets the grid color in RGBA format. The gridcolor attribute is mapped to the  elementcolor  style color.

### inactivealpha[float]: 0.3

When [scope~](https://docs.cycling74.com/reference/scope~) shows multiple channels, inactivealpha sets the opacity used to draw channels other than the currently highlighted channel.

### mctrigchan[int]: 0

When [scope~](https://docs.cycling74.com/reference/scope~) shows multiple channels and trigger is enabled, mctrigchan sets the channel used for the trigger input. When mctrigchan is 0, all channels are used for the trigger. When mctrigchan is a non-zero value, it sets the channel that will be used for the trigger. If you wish to use a Y input as a trigger channel, add the total number of X input channels to the channel number. For example, if there are 4 X channels and 4 Y channels, channel 5 represents the first Y channel to use as a triger.

### range[2 floats]: -1. 1.

Minimum/maximum amplitudes displayed vertically

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### trigger[int]: 0

Trigger mode determines when a new waveform trace begins (following the
delay
).

 trigger 1  sets an upward trigger in which the signal must go from being below the
triglevel
to being equal to it or above it.

 trigger 2  sets a downward trigger in which the signal must go from being above the
triglevel
level to being equal to it or below it.

The default trigger mode is 0, which does not wait after a non-zero delay period before collecting samples again.

Possible values:

0 = 'None'

1 = 'Up'

2 = 'Down'

### triglevel[float]: 0.

Threshold to trip trigger mode. When
trigger
mode is 1 or 2, the waveform must increase or decrease past this value to trigger a new trace. If you are displaying a periodic waveform, slight changes to the trigger level will shift the waveform to the left or right.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Left inlet: Number of samples collected for each value in the display buffer. Smaller numbers expand the image but make it scroll by on the screen faster. The minimum value is 2, the maximum is 8092, and the default initial value is 256. In X or Y mode, the most maximum or minimum value seen within this period is used. In X-Y mode, a representative sample from this period is used.

Right inlet: Size of the display buffer. This controls the rate at which [scope~](https://docs.cycling74.com/reference/scope~) redisplays new information as well as the scaling of that information. If the buffer size is larger, the signal image will stay on the screen longer and be visually compressed. If the buffer size is smaller, the signal image will stay on the screen a shorter time before it is refreshed and will be visually expanded.

It might appear that the samples per display buffer element and the display buffer size controls do the same thing but they have subtly different effects. You may need to experiment with both controls to find the optimum display parameters for your application.

Arguments:

- object-settings
  [int]

### (mouse)

Click to freeze the display for as long as you hold the click

### signal

Left inlet: signal to display on the X axis of the oscilloscope

Right inlet: signal to display on the Y axis of the oscilloscope

If signal objects are connected to both the left and right inlets, [scope~](https://docs.cycling74.com/reference/scope~) operates in X-Y mode, plotting points whose horizontal position corresponds to the value of the signal coming into the left (X) inlet and whose vertical position corresponds to the value of the signal coming into the right (Y) inlet. If the two signals are identical and in phase, a straight line increasing from left to right will be seen. If the two signals are identical and 180 degrees out of phase, a straight line decreasing from left to right will be seen. Other combinations may produce circles, ellipses, and
[Lissajous](http://en.wikipedia.org/wiki/Lissajous_curve)
figures.

## Output

### visual

The waveform of the incoming signal is displayed within the oscilloscope display.

## See Also

| Name | Description |
| --- | --- |
| [gridmeter~](https://docs.cycling74.com/reference/gridmeter~) | Display signal levels as brightness |
| [meter~](https://docs.cycling74.com/reference/meter~) | Visual peak level indicator |
