---
type: msp
name: "gridmeter~"
summary: "Display signal levels as brightness"
signal: true
url: "https://docs.cycling74.com/reference/gridmeter~/"
package: "MSP"
see_also: ["average~", "levelmeter~", "live.meter~", "meter~", "scope~"]
---
# gridmeter~

Display signal levels as brightness

## Description

The [gridmeter~](https://docs.cycling74.com/reference/gridmeter~) object displays the RMS levels of multiple signals (usually from a multichannel Max object) as brightness, and will indicate the presence or absence of an input signal.

## Arguments

None.

## Attributes

### attack[float]: 300.

Sets the meter's attack time in milliseconds

### bgcolor[4 floats]

Sets the background color

### cellheight[int]: 12

Sets the meter cell height in pixels

### cellwidth[int]: 16

Sets the meter cell width in pixels

### color[4 floats]

Sets the Meter color

### columns[int]: 8

Sets the maximum number of columns

### contrast[float]: 0.7

Sets the brightness range of the signal level (default 0.5). The range of the contrast attribute is 0.1 - 0.9.

### dividersize[int]: 2

Sets the size, in pixels, of the horizontal and vertical dividers that separate the meters.

### elementcolor[4 floats]

Sets the color of each indicator when no signal is present

### hotcolor[4 floats]: 0.86275 0.39126 0.39126 1.

Sets the color displayed when the signal value exceeds 0 dB

### interval[float]: 20.

Sets the signal polling interval in milliseconds

### range[float]: 60.

Sets the displayed dB range; larger values can decrease the color contrast.

### release[float]: 300.

Sets the meter's release time in milliseconds

### shape[int]: 0

Sets the shape of the meter cells

Possible values:

0 = 'Square'
(
Rectangular shape
)
1 = 'Round'
(
Round or ellipse chape
)

### style[symbol]:

Sets the style to be used for the [gridmeter~](https://docs.cycling74.com/reference/gridmeter~) display.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Sets the amount of active grid cells

### float

Sets the amount of active grid cells

### list

Sets the grid cells state

### (mouse)

Mousing over the grid and clicking disables a meter cell

### mute

A mute 1 or Mute 0 sets the selected gridmeter cell On or Off

### muteall

A mute 1 or Mute 0 sets the entire gridmeter On or Off

### signal

Any MC audio signal into the input

### solo

Use the message solo followed by the number of the channel/cell you would like to solo

## See Also

| Name | Description |
| --- | --- |
| [average~](https://docs.cycling74.com/reference/average~) | Multi-mode signal average |
| [levelmeter~](https://docs.cycling74.com/reference/levelmeter~) | RMS level meter |
| [live.meter~](https://docs.cycling74.com/reference/live.meter~) | Live-style visual peak level indicator |
| [meter~](https://docs.cycling74.com/reference/meter~) | Visual peak level indicator |
| [scope~](https://docs.cycling74.com/reference/scope~) | Visualize an audio signal |
