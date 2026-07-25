---
type: msp
name: "zplane~"
summary: "Graph filter poles and zeros on the Z-plane"
signal: true
url: "https://docs.cycling74.com/reference/zplane~/"
package: "MSP"
see_also: ["biquad~", "cascade~", "filtercoeff~", "filtergraph~"]
---
# zplane~

Graph filter poles and zeros on the Z-plane

## Description

The [zplane~](https://docs.cycling74.com/reference/zplane~) object provides a way to graph filter poles and zeros in the Z-plane for display. Use the [zplane~](https://docs.cycling74.com/reference/zplane~) object in conjunction with the [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) object, or provide it with a list of [biquad~](https://docs.cycling74.com/reference/biquad~) coefficients.

#### Discussion

Like the [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) object, it does not process audio signals by itself, but it does react internally to the current MSP sampling rate. The [zplane~](https://docs.cycling74.com/reference/zplane~) object is designed to help in digital filter design and visualization for MSP, and to provide a basic pedagogical tool which may be used to help explain digital filter theory.

You can change the filter parameters by clicking and dragging on the [zplane~](https://docs.cycling74.com/reference/zplane~) object’s display. Clicking and dragging on any of the poles (shown as an x in the display) or zeros (shown as an o in the display) will modify the filter coefficients and output the new filter coefficient values.

## Arguments

None.

## Attributes

### bgcolor[4 floats]

Sets the background color of the [zplane~](https://docs.cycling74.com/reference/zplane~) object in RGBA format.

### gridlinecolor[4 floats]

Sets the colors for the grids and lines in RGBA format. The  gridlinecolor  attribute is mapped to the  elementcolor  style color.

### order[int]: 2

The word  order , followed by an even number between 2 and 24, sets the number of poles and zeros.

### pconstrain[int]: 0

When set to 1, poles will be constrained inside the unit circle, and thus yield a stable filter. An argument of zero will turn this feature off (the default).

### polezerocolor[4 floats]

Sets the pole zero color in RGBA format. The  polezerocolor  attribute is mapped to the  color  style color.

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Causes the current pole and zero values to be re-output.

### float

In 1st-5th inlets: A float in one of the first five inlets changes the current value of the corresponding [biquad~](https://docs.cycling74.com/reference/biquad~) filter coefficients (a0, a1, a2, b1, and b2, respectively), recalculates and displays the filter's pole-zero graph on the Z-plane and causes a lists of poles and zeros be output.

Arguments:

- biquad-filter-coefficients
  [float]

### (inlet1)

In 2nd inlet: Sets the current value of the [biquad~](https://docs.cycling74.com/reference/biquad~) filter's  *a1*  coefficient.

Arguments:

- coefficient value
  [float]

### (inlet2)

In 3rd inlet: Sets the current value of the [biquad~](https://docs.cycling74.com/reference/biquad~) filter's  *a2*  coefficient.

Arguments:

- coefficient value
  [float]

### (inlet3)

In 4th inlet: Sets the current value of the [biquad~](https://docs.cycling74.com/reference/biquad~) filter's  *b1*  coefficient.

Arguments:

- coefficient value
  [float]

### (inlet4)

In 5th inlet: Sets the current value of the [biquad~](https://docs.cycling74.com/reference/biquad~) filter's  *b2*  coefficient.

Arguments:

- coefficient value
  [float]

### list

In left inlet: A list of five float values which correspond to [biquad~](https://docs.cycling74.com/reference/biquad~) filter coefficients sets the [zplane~](https://docs.cycling74.com/reference/zplane~) object's internal values for these coefficients and causes the object to visually display the poles and zeros for the filter(s) and to output the pole and zero data.

If more than five values are sent, they are interpreted as sets of cascaded biquad coefficients. The zplane~ object will display a composite pole-zero graph which shows the multiplication of a group of biquad filters in cascade. Up to 24 groups of five float values may be cascaded.

Arguments:

- a0
  [float]
- a1
  [float]
- a2
  [float]
- b1
  [float]
- b2
  [float]

### dictionary

The word  dictionary , followed by a symbol that references a named [filterdesign](https://docs.cycling74.com/reference/filterdesign) object dictionary (set via the  name  attribute), will cause the [zplane~](https://docs.cycling74.com/reference/zplane~) object to use the dictionary values for filter coefficients.

Arguments:

- dictionary-name
  [symbol]

### logscale

The word  logscale , followed by a zero or one, toggles between linear (the default) and log frequency display.

Arguments:

- logscale-flag
  [int]

### (mouse)

You can change the filter parameters by clicking and dragging on the [zplane~](https://docs.cycling74.com/reference/zplane~) object’s display. Clicking and dragging on any of the poles (shown as an x in the display) or zeros (shown as an o in the display) will modify the filter coefficients and output the new filter coefficient values.

### range

The word  range , followed by a floating point value, changes the visual scaling of the zplane~ object's display. The default is 1.5.

Arguments:

- visual scaling amount
  [float]

## Output

### list

Out left outlet: a list of 5 floating-point filter coefficients for the [biquad~](https://docs.cycling74.com/reference/biquad~) object. Coefficients output in response to mouse clicks and changes in the coefficient inlets.

Out second outlet: a list of "zero" location values expressed as complex numbers (real, imaginary). These correspond to the "a" coefficients of the filter. A 2nd order (biquad) filter will have 2 zeros, a 4th order filter will have four, etc...

Out third outlet: a list of "pole" location values expressed as complex numbers (real, imaginary). These correspond to the "b" coefficients of the filter. A 2nd order (biquad) filter will have 2 zeros, a 4th order filter will have four, etc...

Out fourth outlet: a list of floating-point values representing the overall gain of each cascaded filter.

## See Also

| Name | Description |
| --- | --- |
| [biquad~](https://docs.cycling74.com/reference/biquad~) | Two-pole, two-zero filter |
| [cascade~](https://docs.cycling74.com/reference/cascade~) | Cascaded series of biquad filters |
| [filtercoeff~](https://docs.cycling74.com/reference/filtercoeff~) | Signal-rate filter coefficient generator |
| [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) | Filter editor |
