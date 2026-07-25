---
type: jitter
name: "jit.scope"
summary: "Visual matrix analysis tools"
signal: false
url: "https://docs.cycling74.com/reference/jit.scope/"
package: "Jitter"
see_also: ["jit.grab", "jit.histogram", "jit.movie"]
---
# jit.scope

Visual matrix analysis tools

## Description

[jit.scope](https://docs.cycling74.com/reference/jit.scope) lets you visually inspecting matrix values and display them as waveform, vectorscope, histogram or parade visual data.

## Arguments

None.

## Attributes

### accum[int]: 25

Sets the amount of data, per pixel, to accumulate for display.

### accum\_desat[float]: 0.35

When the [jit.scope](https://docs.cycling74.com/reference/jit.scope) object is set to parade mode, this attribute sets the desaturation for the display (expressed as a float in the range 0. 1.0).

### bgcolor[4 floats] >= 7.0.0

Sets the background color of the object in RGBA format

### colormode[symbol]: argb

Sets the color mode. The options are:

argb (the default)

uyvy

Possible values:

'argb'

'uyvy'

### dstrect[4 ints]

Specifies the portion of the output matrix written to by the input frame (default = 0 0 (matrix width) (matrix height)) The proportions of the rectangle are expressed in the form  *left top right bottom* . All values are relative to the top left corner of the object's viewing area.

### graphcolor[4 floats]

Sets the Graph Color in RGBA format. The  graphcolor  attribute is mapped to the  elementcolor  style color.

### graphmode[symbol]: luminance

When the [jit.scope](https://docs.cycling74.com/reference/jit.scope) object is set to histogram mode, this attribute sets the data to be displayed. The options are:

luminance: displays a luminance (monochrome) display of histogram values

rgb: displays an overlaid set of histograms for R, G, and B values.

Possible values:

'luminance'

'rgb'

### hgraphcolor[4 floats]

Sets the Graph Color displayed on hover in RGBA format. The  hgraphcolor  attribute is mapped to the  selectioncolor  style color.

### interp[int]: 0

Interpolation flag (default = 0) When the flag is set, the incoming matrix is interpolated when scaling to display.

### mode[symbol]: waveform

Sets the display mode of the [jit.scope](https://docs.cycling74.com/reference/jit.scope) object. The modes are:

waveform: signal values (y) plotted over time (x)

vectorscope: an x-y plot of two signals

histogram: a plot of the disbribution of values for an input signal

parade: a scrolling display of R, G, and B values shown on a single screen

Possible values:

'waveform'

'vectorscope'

'histogram'

'parade'

### planemap[4 ints]

Sets input plane to output plane mapping (default = 0 1 2 3 ...)

### size[2 ints]

Sets the window size (width and height) (default = 320 240)

### srcrect[4 ints]

Specifies Specifies the portion of the input matrix used when copying an input matrix to the internal matrix. (default = 0 0 (matrix width) (matrix height)) The proportions of the rectangle are expressed in the form  *left top right bottom* . All values are relative to the top left corner of the viewing area of the input matrix.

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Outputs the current matrix.

### jit\_matrix

Displays the input matrix by scaling to the window size.

Arguments:

- window-size
  [list]

### (mouse)

Clicking with the mouse will display a horizontal or vertical line trace and numerical cursor.

## See Also

| Name | Description |
| --- | --- |
| [jit.grab](https://docs.cycling74.com/reference/jit.grab) | Digitize video from an external source |
| [jit.histogram](https://docs.cycling74.com/reference/jit.histogram) | Calculate matrix histogram |
| [jit.movie](https://docs.cycling74.com/reference/jit.movie) | Play a movie file |
