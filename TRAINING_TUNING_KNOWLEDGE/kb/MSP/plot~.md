---
type: msp
name: "plot~"
summary: "Visualize two-dimensional data"
signal: true
url: "https://docs.cycling74.com/reference/plot~/"
package: "MSP"
see_also: ["filterdetail", "scope~", "multislider", "waveform~", "filtergraph~", "spectroscope~"]
---
# plot~

Visualize two-dimensional data

## Description

Use the [plot~](https://docs.cycling74.com/reference/plot~) object to graph sets of data as points across a domain. The source of the data to be visualized may be a Max list, an MSP [buffer~](https://docs.cycling74.com/reference/buffer~), or an audio signal. The number of plots may be changed with the @numplots attribute, and each of these "subplots" is addressed through a dedicated inlet. A variety of out-of-the-box configurations are provided as Max object prototypes.

## Arguments

None.

## Attributes

### applyfont[int]: 0

When applyfont is enabled, the current fontname and fontsize apply to all text labels drawn by [plot~](https://docs.cycling74.com/reference/plot~). When applyfont is disabled, the fontname and fontsize are used only for the domain and range labels (set by the domainlabel and rangelabel attributes).

### audioframerate[float]: 15.

Speed for display update when a plot~ is visualizing an audio signal. The drawing for such cases is driven by a clock operating at the specified number of frames per second.

### audioframesize[atom\_long]: 0

Number of samples collected from audio input to create a single frame of data. By default, audio signals will be visualized by collecting sample values until the number of points in the plot is full (audioframesize=0). Then all points will be updated and drawn. An alternate audioframesize value must be greater than the value of the
numpoints
attribute.

In some cases it is desirable to collect a larger set of samples and then visualize only a portion of those samples. To visualize the output of an FFT, for example, it is often desirable to only view either the first or second half of a frame because they are mirror images of each other. By setting the audioframesize, the number of points in @audioframesize will be collected, and only the first @numpoints will actually be drawn.

### bgcolor[4 floats]: 1. 1. 1. 1.

Background color

### domainlabel[symbol]:

Bottom (horizontal) text

### fillhorizontalspace[int]: 0

The fillhorizontalspace attribute, when enabled, spaces the X coordinates of plot points to fill the entire width of the [plot~](https://docs.cycling74.com/reference/plot~) object's box. When disabled, points are spaced to leave an extra margin at each end whose width is proportional to the space between each point.

### fontname[symbol]: Lato

The fontname attribute sets the font for the domain and range label. If applyfont is enabled, it also applied to all text shown by the object.

### fontsize[float]: 10.

The fontsize attribute sets the font size for the domain and range label. If applyfont is enabled, it also applied to all text shown by the object.

### gridcolor[4 floats]: 0.5 0.5 0.5 1.

Sets the grid color in RGBA format.

### gridorigincolor[4 floats]: 0. 0. 0. 1.

Sets the grid color at the origin in RGBA format.

### margins[4 floats]: 8. 8. 8. 8.

Indent margins (top, right, bottom, and left)

### numplots[int]: 1

Number of data sets to be plotted. The object will grow/absorb inlets as needed. Each 'subplot' will be addressed through its dedicated inlet.

### numpoints[int]: 4

Sets the number of points to be displayed across the domain of all plots

### rangelabel[symbol]:

Left-hand (vertical) text

### thinmode[symbol]: sample

Data-thinning behavior when the size of the data set (number of points) exceeds the number of pixels available to display each point discretely.

Possible values:

'none'
(
All points will be drawn, and will overlap as needed
)
'sample'
(
Number of points will be reduced according to
thinto
prior to drawing
)

### thinthresh[int]: 10

The point at which the
thinmode
is invoked to begin reducing the data set. By default this attribute is set to a value of 10, meaning that once there are 10 points being drawn at the same pixel location on the screen the
thinmode
will be invoked.

### thinto[float]: 0.2

Factor by which the data set is reduced when the
thinmode
is invoked. By default the factor is 0.2, which results in 5 values being overlapped at a given pixel location.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Set the first value of a subplot.

Arguments:

- input
  [int]

### float

Set the first value of a subplot.

Arguments:

- input
  [float]

### list

Data set to be plotted across the domain. The inlet at which the list is received determines which subplot graphs the data. If the list is larger than the number of points in the plot, then the list will be truncated.

Arguments:

- numbers-to-plot
  [list]

### definecolor

Define the color used for drawing the subplot associated with the inlet at which the message is received. The order of the color components is red, green, blue, and alpha.

Arguments:

- color
  [color]

### definedomain

Define the domain for the subplot associated with the inlet at which the message is received. The number of actual points will not change, as that is set with the @numpoints attribute. This message sets the domain of numbers spanned by those points. For example, there may be 256 points representing a domain of [0.0, 1.0]. In this case the domain is essentially a label for the points. An optional third argument specifies 'linear' vs 'log' scaling of the domain.

Arguments:

- domain-start
  [number]
- domain-end
  [number]
- domain-style
  [symbol]

### definefilter

Defines a filter to be applied to the data set before it is graphed. There are currently two options available ('none' and 'atodb').

Arguments:

- filter-name
  [symbol]

### defineline

Define the style used to display lines in the subplot associated with the inlet at which the message is received. Options are 'linear', 'lines', 'curve', 'origin', or 'none'.

While 'lines' will display more quickly than 'linear', the 'linear' option will look better in some cases (usually when working with high thickness values). The difference between the display styles is related to how line segments are joined at the elbows: 'lines' does nothing, while the 'linear' option makes smooth connections.

Arguments:

- line-style
  [symbol]

### definenumber

Define the style used displaying numbers in the subplot associated with the inlet at which the message is received. Options are 'above', 'below', 'center', or 'none'.

Arguments:

- number-style
  [symbol]

### definepoint

Define the style used to display points in the subplot associated with the inlet at which the message is received. Options are 'dot', 'circle', 'square', or 'none'.

Arguments:

- point-style
  [symbol]

### definerange

Define the range for the subplot associated with the inlet at which the message is received. Values in the displayed data sets that are out of this range will be out of range of the plot drawing.

Arguments:

- range-start
  [number]
- range-end
  [number]
- range-style
  [symbol]

### definethickness

Define the thickness of the lines for the subplot associated with the inlet at which the message is received. A thickness of 1 indicates a 1 'pixel' linewidth.

Arguments:

- line-thickness
  [number]

### definexgrid

Define the points along the domain at which a vertical marker-line should be drawn for the subplot associated with the inlet at which the message is received. The points along the domain should be within the range specified by the 'definedomain' message.

Arguments:

- x-axis-points
  [list]

### definexlabels

Defines the labels for points along the domain for the subplot associated with the inlet at which the message is received. For each point that you wish to be labeled, you must provide a float-symbol pair defining the location in the domain (as defined using the 'definedomain' message) and the label for that location.

Arguments:

- pairs-of-points-and-labels
  [list]

### definexorigin

Define the value across the domain to serve as the origin for the plot.

Arguments:

- origin
  [float]

### defineygrid

Define the points along the range at which a horizontal marker-line should be drawn for the subplot associated with the inlet at which the message is received. The points along the range should be within the range specified by the 'definerange' message.

Arguments:

- y-axis-points
  [list]

### defineylabels

Defines the labels for points along the range for the subplot associated with the inlet at which the message is received. For each point that you wish to be labeled, you must provide a float-symbol pair defining the location in the range (as defined using the 'definerange' message) and the label for that location.

Arguments:

- pairs-of-points-and-labels
  [list]

### defineyorigin

Define the value within the range to serve as the origin for the plot. This will affect where lines originate when the line style is set to 'origin'.

Arguments:

- origin
  [float]

### dictionary

Configure a subplot. The dictionary may contain the subplot's data, appearance, or both.

Arguments:

- dictionary-name
  [symbol]

### edit

Open a dictionary editor window for a subplot. After making edits to the plot, simply close the window and the changes will take effect.

### getdictionary

Retrieve the state of a subplot. The returned dictionary will contain the subplot's complete state including both data and appearance configuration.

Arguments:

- subplot-number
  [int]

### (mouse)

Send mouse position and behavior to the outlet

### refer

Set the subplot for the given inlet to reference the data in a named [buffer~](https://docs.cycling74.com/reference/buffer~) object. If a second argument is given to this message, it will determine the channel within the [buffer~](https://docs.cycling74.com/reference/buffer~) that should be displayed. The third and fouth arguments set the start and end time of the buffer in milliseconds. If these arguments are not present, the entire buffer is used.

Arguments:

- buffer-name
  [symbol]
- channel-number
  [number]
- start-time
  [number]
- end-time
  [number]

### signal

Signal whose samples will be collected and used as the dataset to display. The samples will be collected into blocks that are the same size as the
numpoints
attribute unless an
audioframesize
has been defined.

## Output

### list

The 'mouse' message is sent together with normalized mouse coordinates and the mouse button state.

## See Also

| Name | Description |
| --- | --- |
| [filterdetail](https://docs.cycling74.com/reference/filterdetail) | Detail the characteristics of a filter |
| [scope~](https://docs.cycling74.com/reference/scope~) | Visualize an audio signal |
| [multislider](https://docs.cycling74.com/reference/multislider) | Display data as sliders or a scrolling display |
| [waveform~](https://docs.cycling74.com/reference/waveform~) | buffer~ viewer and editor |
| [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) | Filter editor |
| [spectroscope~](https://docs.cycling74.com/reference/spectroscope~) | Signal spectrogram or sonogram |
