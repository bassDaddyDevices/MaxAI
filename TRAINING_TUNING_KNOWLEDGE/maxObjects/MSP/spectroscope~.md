---
type: msp
name: "spectroscope~"
summary: "Signal spectrogram or sonogram"
signal: true
url: "https://docs.cycling74.com/reference/spectroscope~/"
package: "MSP"
see_also: ["meter~", "scope~"]
---
# spectroscope~

Signal spectrogram or sonogram

## Description

[spectroscope~](https://docs.cycling74.com/reference/spectroscope~) serves as a visual spectrogram or sonogram interface for the analysis of signals.

## Arguments

None.

## Attributes

### bgcolor[4 floats]

Sets the background color of the [spectroscope~](https://docs.cycling74.com/reference/spectroscope~) object in RGBA format.

### displaychan[int]: 1

When displaying a multi-channel signal, define which channel will be displayed.

### domain[2 floats]: 0. 22050.

Sets the low and high domain (frequency) values.

### fgcolor[4 floats]

Sets the Spectrogram Foreground Color of the [spectroscope~](https://docs.cycling74.com/reference/spectroscope~) object in RGBA format. The  fgcolor  attribute is mapped to the  color  style color.

### interval[int]: 20

Sets the polling interval, in milliseconds.

### logamp[int]: 1

Toggles between linear (0) and logarithmic (1) amplitude display. By default it is set to logarithmic display.

Possible values:

0 = 'Linear Scale'

1 = 'Logarithmic Scale'

### logfreq[int]: 0

Toggles log frequency display. By default it is off, but when turned on, the spectrogram or sonogram's frequencies are shown on a logarithmic scale.

Possible values:

0 = 'Linear Scale'

1 = 'Logarithmic Scale'

### markercolor[4 floats]

Sets the marker color of the [spectroscope~](https://docs.cycling74.com/reference/spectroscope~) object in RGBA format. The  markercolor  attribute is mapped to the  elementcolor  style color.

### monochrome[int]: 1

Toggles monochrome display of the sonogram. When turned off, the sonogram display uses a series of five colors.

Possible values:

0 = 'Color'
(
Two-color sonogram display
)
Sets a two-color sonogram display. This the default setting.

1 = 'Monochrome'
(
Monochrome sonogram display
)
Sets a monochrome sonogram display.

### orientation[int]: 0

Sets the vertical or horizontal orientation of the [spectroscope~](https://docs.cycling74.com/reference/spectroscope~) object. By default it is horizontal, which means frequencies are displayed along the horizontal axis and amplitudes are displayed along the vertical axis in spectrogram mode, and time is displayed along the horizontal axis and frequency is displayed along the vertical axis in sonogram mode. In vertical mode the axes are reversed.

Possible values:

0 = 'Horizontal'
(
Horizontal display
)
Sets the horizontal display mode for sonogram and spectrogram displays. This is the default mode. In sonogram mode, frequencies are displayed along the horizontal axis and amplitudes are displayed along the vertical axis. In spectrogram mode, time is displayed along the horizontal axis and frequency is displayed along the vertical axis.

1 = 'Vertical'
(
Vertical display
)
Sets the vertical display mode for sonogram and spectrogram displays. In sonogram mode, frequencies are displayed along the vertical axis and amplitudes are displayed along the horizontal axis. In spectrogram mode, time is displayed along the vertical axis and frequency is displayed along the horizontal axis.

### phasespect[int]: 0

Toggles the Amplitude/Phase spectrum display.

Possible values:

0 = 'Amplitude'

1 = 'Phase'

### range[2 floats]: 0. 1.2

Sets the minimum and maximum displayed amplitudes of the spectrum. The default values are 0 and 1.2, for the minimum and maximum, respectively. If the word  range  is followed by only one number, then it is used as the maximum value, and the minimum range is set to zero.

### scroll[int]: 0

Sets the sonogram scrolling mode. By default the sonogram scrolling mode is set to Forward Draw.

Possible values:

0 = 'Forward Draw'

1 = 'Reverse Draw'

2 = 'Forward Scroll'

3 = 'Reverse Scroll'

### sono[int]: 0

Toggles sonogram mode. By default the sonogram display is off (meaning it displays a spectrogram, instead). N.B.: Although the terms "spectrogram" and "sonogram" are generally used interchangably to refer to a graph of the spectrum over time, we are using "spectrogram" in its literal sense - to refer to the drawing of a spectrum as an amplitude/frequency representation.

Possible values:

0 = 'Spectrogram'

1 = 'Sonogram'

### sonohicolor[4 floats]

Sets the color in RGBA format used by the [spectroscope~](https://docs.cycling74.com/reference/spectroscope~) for displaying frequencies in the high audio range when the object is in color sonogram mode.

### sonolocolor[4 floats]

Sets the color in RGBA format used by the [spectroscope~](https://docs.cycling74.com/reference/spectroscope~) for displaying frequencies in the low audio range when the object is in color sonogram mode.

### sonomedcolor[4 floats]

Sets the color in RGBA format used by the [spectroscope~](https://docs.cycling74.com/reference/spectroscope~) for displaying frequencies in the medium audio range when the object is in color sonogram mode.

### sonomedhicolor[4 floats]

Sets the color in RGBA format used by the [spectroscope~](https://docs.cycling74.com/reference/spectroscope~) for displaying frequencies in the medium high audio range when the object is in color sonogram mode.

### sonomedlocolor[4 floats]

Sets the color in RGBA format used by the [spectroscope~](https://docs.cycling74.com/reference/spectroscope~) for displaying frequencies in the low medium audio range when the object is in color sonogram mode.

### sonomonobgcolor[4 floats]

Sets the background color of the [spectroscope~](https://docs.cycling74.com/reference/spectroscope~) display in RGBA format when the object is displaying sonograms in monochrome mode.

### sonomonofgcolor[4 floats]

Sets the foreground color of the [spectroscope~](https://docs.cycling74.com/reference/spectroscope~) display in RGBA format when the object is displaying sonograms in monochrome mode.

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### (mouse)

In "spectrogram" mode, output the coordinates of the mouse within the objects' boundaries. The Y-axis will be provided in a linear range of 0.0 to 1.0. The X-axis will be providsed as the frequency of that location in Hertz. If the mouse has exited the object's bounds the pair of values -1, -1 will be returned. In other modes, the mouse does nothing.

### signal

In left inlet: The input signal is analyzed and its spectrum is displayed. If the object is placed inside a [pfft~](https://docs.cycling74.com/reference/pfft~) object's subpatcher, the left inlet is used for the real signal coming from the left outlet of a [fftin~](https://docs.cycling74.com/reference/fftin~) object.

In right inlet: If the object is placed inside a [pfft~](https://docs.cycling74.com/reference/pfft~) object's subpatcher, the right inlet is used for the imaginary signal coming from the second outlet of a [fftin~](https://docs.cycling74.com/reference/fftin~) object. When not inside a [pfft~](https://docs.cycling74.com/reference/pfft~) subpatcher, this inlet does nothing.

## Output

### Visual

The frequency/amplitude content of the signal is displayed.

## See Also

| Name | Description |
| --- | --- |
| [meter~](https://docs.cycling74.com/reference/meter~) | Visual peak level indicator |
| [scope~](https://docs.cycling74.com/reference/scope~) | Visualize an audio signal |
