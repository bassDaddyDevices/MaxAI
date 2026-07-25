---
type: ableton
name: "live.scope~"
summary: "Visualize an audio signal"
signal: true
url: "https://docs.cycling74.com/reference/live.scope~/"
package: "maxforlive-elements"
see_also: ["scope~", "meter~", "live.meter~"]
---
# live.scope~

Visualize an audio signal

## Description

Use [live.scope~](https://docs.cycling74.com/reference/live.scope~) to visualize an audio signal. This object can be used as an alternative to [scope~](https://docs.cycling74.com/reference/scope~).

## Arguments

None.

## Attributes

### active[long]

Toggles the object's active mode. When the active attribute is set to 0, waveform drawing stops.
When the active attribute is set to 1, waveform drawing is enabled and the active colors are used.

### line\_width[float64]

The width of the waveform line. The defult value is 1.

### grid\_line\_width[float64]

The width of the grid lines. The defult value is 1.

### vertical\_divisions[long]

The amount of grid divisions on the y-axis. To view these divisions, the grid attribute must be set to
either 'vertical' or 'horizontal and vertical'.

### grid[long]

Sets which grid lines to display. Possible values are:
0: off
1: horizontal
2: vertical
3: horizontal and vertical

If 1 (horizontal) is selected, the x-axis is segmented, giving you horizontal divisions of the grid. If 2 (vertical)
is selected, the y-axis is segmented, giving you vertical divisions of the grid.

### smooth[long]

The smooth attribute allows you to visually smooth a waveform's lines. There are three values for this attribute: off, type 1, and type 2.
Off: No smoothing applied. Without smoothing, low frequency waveforms might look rough. However, for high and complex frequency waveforms, not
using any smoothing will show the most accurate results.
Type 1: Improves visual appearance while also retaining as much accuracy as possible.
Type 2: The most visually pleasing at low frequencies, however, at higher frequencies, the accuracy decreases significantely.

### trigger\_direction[long]

The direction the trigger signal needs to be traveling, when passing the trigger threshold, in order to trigger a new waveform drawing.
i.e. if the direction is set to 'up', and the treshold is set to '0', a new waveform will be drawn when the signal passes 0,
while moving towards +1. This attribute works in conjunction with the trigger\_threshold attribute. mode must be set
to 'trigger' for either attribute to function.

### active[long]

The active state

### trigger\_threshold[float64]

Sets the trigger threshold value. This is the value the trigger signal (connected to the second inlet of [live.scope~](https://docs.cycling74.com/reference/live.scope~)) must pass
in order to trigger a new waveform drawing. This attribute works in conjunction with the trigger\_direction attribute. mode
must be set to 'trigger' for either attribute to function.

### samples[float64]

Sets the number of samples to capture.

### range[float64]

The minimum and maximum amplitude that is displayed in the [live.scope~](https://docs.cycling74.com/reference/live.scope~) object. When the amplitude exceeds the specified range, the
visual display is clipped.

### decay\_time[float64]

Sets the time in milliseconds that the waveform line takes to fade out.

### mode[long]

Sets the drawing mode for [live.scope~](https://docs.cycling74.com/reference/live.scope~). There are two possible modes: history and trigger. History mode captures and displays the
last N samples, whereas trigger mode captures and displays based on an external trigger signal that is sent to the second inlet.
When in trigger mode, you can adjust the attributes trigger\_direction and trigger\_threshold. When the signal in the second
inlet passes the trigger\_threshold value, live.scope~ will start capturing the signal from the first inlet.

### interval[float64]

Sets the time in milliseconds that the waveform drawing is updated.

### horizontal\_divisions[long]

The amount of grid divisions on the x-axis. To view these divisions, the grid attribute must be set to
either 'horizontal' or 'horizontal and vertical'.

### rounded[float64]

The amount the corners of the [live.scope~](https://docs.cycling74.com/reference/live.scope~) object are rounded. Possible values are 0-10.

### bgcolor[4 floats]

Sets the background color in RGBA format, when the active attribute is set to 0.

### activebgcolor[4 floats]

Sets the background color in RGBA format, when the active attribute is set to 1.

### linecolor[4 floats]

Sets the color of the waveform line in RGBA format, when the active attribute is set to 0.

### activelinecolor[4 floats]

Sets the color of the waveform line in RGBA format, when the active attribute is set to 1.

### gridcolor[4 floats]

Sets the grid color in RGBA format, when the active attribute is set to 0.

### activegridcolor[4 floats]

Sets the grid color in RGBA format, when the active attribute is set to 1.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

When sent to either inlet of [live.scope~](https://docs.cycling74.com/reference/live.scope~), a bang will trigger a new waveform drawing.

### signal

Left inlet: signal to display in [live.scope~](https://docs.cycling74.com/reference/live.scope~)
Right inlet: trigger signal

## See Also

| Name | Description |
| --- | --- |
| [scope~](https://docs.cycling74.com/reference/scope~) | Visualize an audio signal |
| [meter~](https://docs.cycling74.com/reference/meter~) | Visual peak level indicator |
| [live.meter~](https://docs.cycling74.com/reference/live.meter~) | Live-style visual peak level indicator |
