---
type: msp
name: "filtergraph~"
summary: "Filter editor"
signal: true
url: "https://docs.cycling74.com/reference/filtergraph~/"
package: "MSP"
see_also: ["allpass~", "biquad~", "cascade~", "delay~", "filtercoeff~", "lores~", "reson~", "teeth~", "zplane~"]
---
# filtergraph~

Filter editor

## Description

Use the [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) object to generate filter coefficients for the [biquad~](https://docs.cycling74.com/reference/biquad~) or [cascade~](https://docs.cycling74.com/reference/cascade~) objects with a graphical interface.

#### Discussion

The horizontal axis of the [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) object's display represents frequency and the vertical axis represents amplitude. The curve displayed reflects the frequency response of the current filter model. The frequency response is the amount that the filter amplifies or attenuates the frequencies present in an audio signal. The [biquad~](https://docs.cycling74.com/reference/biquad~) (or [cascade~](https://docs.cycling74.com/reference/cascade~)) objects do the actual filtering based on the coefficients that [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) provides.

The cutoff frequency (or center frequency) is the focal frequency of a given filter's activity. Its specific meaning is different for each filter type, but it can generally be identified as a transitional point (or center of a peak/trough) in the graph's amplitude curve. It is marked in the display by a colored rectangle whose width corresponds to the bandwidth of the filter.

The bandwidth (the transitional band in Hz) is the principal range of a filter's effect, centered on the cutoff frequency. The edges of a filter's bandwidth are located where the frequency response has a 3dB change in amplitude from the cutoff or center frequency. Q (also known as resonance) describes filter "width" as the ratio of the center/cutoff frequency to the bandwidth. Using Q instead of bandwidth lets us move the center/cutoff frequency while keeping a constant bandwidth across octaves. The Q parameter for shelving filters is often called S (or slope), although it is ostensibly the same as Q.

The filter's gain is the linear amplitude at the center or cutoff frequency. The interpretation of the gain parameter depends somewhat on the type of filter. The gain may also affect a shelf or large region of the filter's response.

## Arguments

None.

## Attributes

### annotation\_name[symbol]:

Info View Title

### autoout[int]: 0

Toggles the output of coefficients on load.

### bgcolor[4 floats]

Sets the background color in RGBA format.

### curvecolor[4 floats]

Sets the curve color in RGBA format. The  curvecolor  attribute is mapped to the  color  style color.

### dbdisplay[int]: 1

Toggles db gain value display.

### display\_flat[int]: 1

Toggles flat sign display.

### domain[2 floats]: 20. 20000.

Sets frequency display span.

### edit\_Q[float]

Sets the bandwidth (Q) for the currently selected filter.

### edit\_amp[float]

Sets the amplitude for the currently selected filter.

### edit\_analog[int]

Toggles the analog filter prototype parameter for the currently selected filter when [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) is in bandpass or peaknotch mode. For more information on analog filter mode, see the  analog  message listing above.

For single filters, the filter type displayed by the [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) object is the currently selected filter; when dealing with multiple filters, the currently selected filter is set using the  edit\_filter  message (with the filters being numbered from 0).

### edit\_displaydot[int]

Toggles the display of the mousable bandwidth region for the currently selected filter when [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) is in display mode. For more information, see the  displaydot  message listing above.

For single filters, the filter type displayed by the [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) object is the currently selected filter; when dealing with multiple filters, the currently selected filter is set using the  edit\_filter  message (with the filters being numbered from 0).

### edit\_filter[int]: 0

Selects which filter to edit if
nfilters
is greater than 1. Filters are numbered from 0.

Possible values:

'0'

### edit\_freq[float]

Sets center/cutoff frequency for the currently selected filter.

### edit\_gainmode[int]

Tggles the gain parameter for the currently selected filter.

### edit\_maxQ[atom]

Sets the maximum Q of the currently selected filter.

### edit\_maxamp[atom]

Sets the maximum amplitude for the currently selected filter.

### edit\_maxfreq[atom]

Sets the upper bound for the frequency of the currently selected filter.

### edit\_minQ[atom]

Sets the minimum bandwidth (Q) for the currently selected filter.

### edit\_minamp[atom]

Sets the minimum amplitude for the currently selected filter.

### edit\_minfreq[atom]

Sets the minimum frequency for the currently selected filter.

### edit\_mode[int]

Sets the response shape for the currently selected filter.

Possible values:

0 = 'display'
(
None/arbitrary
)
1 = 'lowpass'
(
Low frequencies pass, high frequencies attenuated
)
2 = 'highpass'
(
High frequencies pass, low frequencies attenuated
)
3 = 'bandpass'
(
A band of frequencies pass, everything else is attenuated
)
4 = 'bandstop'
(
A band of frequencies are attenuated, everything else passes
)
5 = 'peaknotch'
(
A band of frequencies is attenuated or boosted depending on the gain
)
6 = 'lowshelf'
(
Low frequencies are attenuated or boosted depending on the gain
)
7 = 'highshelf'
(
High frequencies are attenuated or boosted depending on the gain
)
8 = 'resonant'
(
Another bandpass filter
)
9 = 'allpass'
(
All frequencies pass through but the phase is affected
)

### fullspect[int]: 0

Display the full frequency spectrum from -Nyquist to +Nyquist.

### hcurvecolor[4 floats]

Sets the selection color in RGBA format. The  hcurvecolor  attribute is mapped to the  selectioncolor  style color.

### linmarkers[64 floats]: 5512.5 11025. 16537.5

Marker positions for the linear frequency display. By default, the markers are set at ± SampleRate/4, SampleRate/2, and (3 \* SampleRate)/4.

### logamp[int]: 1

Sets the amplitude display mode.

Possible values:

0 = 'Linear'
(
Linear amplitude display
)
Displays amplitudes using a linear scale.

1 = 'Logarithmic'
(
Log amplitude display
)
Displays amplitudes using a logarithmic scale.

### logfreq[int]: 1

Sets the frequency display mode.

Possible values:

0 = 'Linear'
(
Linear frequency display
)
Displays frequencies using a linear scale.

1 = 'Logarithmic'
(
Log frequency display
)
Displays frequencies using a logarithmic scale.

### logmarkers[64 floats]: 10. 100. 1000. 10000.

Marker positions for the log frequency display. By default, the markers are set at± 50Hz, 500Hz and 5kHz at 44.1kHz. These values correspond to ± 0.007124, 0.071238, and 0.712379 radians for any sample rate.

### markercolor[4 floats]

Sets the grid color in RGBA format. The  markercolor  attribute is mapped to the  elementcolor  style color.

### nfilters[int]: 1

Number of cascaded biquad filters displayed. The range is between 1 and 24. When using more than one filter, the output of the [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) should be sent to a [cascade~](https://docs.cycling74.com/reference/cascade~) object instead of a [biquad~](https://docs.cycling74.com/reference/biquad~).

### numdisplay[int]: 1

Toggles numerical value display.

### param\_connect[symbol]:

Connect to Parameter

### parameter\_enable[int]

Enables use of this object with [Max for Live Parameters](https://docs.cycling74.com/userguide/m4l/live_parameters) and [setting initial values of parameters](https://docs.cycling74.com/userguide/parameter_mode) in Max.

### parameter\_mappable[int]: 1

When parameter\_mappable is enabled, the object will be available for mapping to keyboard or MIDI input using the [Mappings feature](https://docs.cycling74.com/userguide/mapping). (default = 1).

### phasespect[int]: 0

Toggles phase response display.

### range[2 floats]: 0.0625 16.

Sets the amplitude display range.

### style[symbol]: >= 7.0.0

Sets the [style](https://docs.cycling74.com/userguide/styles) to be applied to the object. Styles can be set using the [Format Palette](https://docs.cycling74.com/userguide/format_palette).

### textcolor[4 floats]

Sets the color of the labels in RGBA format. The  textcolor  attribute is mapped to the  textcolor\_inverse  style color.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: In display mode,  bang  causes the [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) object to send its internally-stored biquad coefficients out the leftmost outlet. In the interactive filter modes,  bang  additionally causes the current filter parameters to be sent out their respective outlets (see Output).

### int

All  int  values are converted to  float .

In 1st-5th inlets: When in display mode, a float in one of the first five inlets changes the current value of the corresponding biquad~ filter coefficient (a0, a1, a2, b1, and b2, respectively) for the selected filter in the UI, recalculates the filter's frequency response based on these coefficients and causes a list of the current filter coefficients to be output from the leftmost outlet.

In 6th inlet: Sets the center or cutoff frequency parameter for the selected filter in the UI and causes output.

In 7th inlet: Sets the gain parameter for the selected filter in the UI and causes output.

In 8th inlet: Sets the Q (resonance) or S (slope) parameter for the selected filter in the UI and causes output.

Note: Input to any one of the inlets will recalculate the current selected filter in the UI's graph and trigger the output.

Arguments:

- filter-parameter
  [int]

### float

In 1st-5th inlets: When in display mode, a float in one of the first five inlets changes the current value of the corresponding biquad~ filter coefficient (a0, a1, a2, b1, and b2, respectively), recalculates the filter's frequency response based on these coefficients and causes a list of the current filter coefficients to be output from the leftmost outlet.

In 6th inlet: Sets the center or cutoff frequency parameter for the filter and causes output.

In 7th inlet: Sets the gain parameter for the filter and causes output.

In 8th inlet: Sets the Q (resonance) or S (slope) parameter for the filter and causes output.

Note: Input to any one of the inlets will recalculate the current filter's graph and trigger the output.

Arguments:

- filter-parameter
  [float]

### list

In left inlet: A list of five float values which correspond to [biquad~](https://docs.cycling74.com/reference/biquad~) filter coefficients sets the [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) object's internal values for these coefficients and causes the object to output the list out its left outlet. If [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) is in display mode, it will display the frequency response of the filter obtained from these coefficients. If more than five values are sent, they are interpreted as sets of cascaded biquad coefficients (see the  cascade  message).

in 6th inlet: A list of three values which correspond to center/cutoff frequency, gain and Q/S (resonance/slope), sets these values, recalculates the new filter coefficients and causes output. This is equivalent to the  params  message.

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

### anything

Allows for backwards compatibility with these obsolete messages:  gainlpass ,  gainhpass ,  gainbpass ,  gainbstop ,  rgbcolor ,  freq ,  gain ,  Q ,  fconstrain ,  aconstrain ,  qconstrain ,  lin ,  log ,  log2 ,  scale ,  amp ,  phase , and  spectrum .

Arguments:

- messages
  [list]

### allpass

In left inlet: The word  allpass  sets the filter type of the [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) object to allpass mode.It is equivalent to the  mode 9  message. The frequency response of the filter is based on three parameters: cf (center frequency, or cutoff frequency) gain, and Q (resonance), although only the gain parameter has an effect on the amplitude response. An allpass filter is designed to modify the phase response (use the  phasespect 1  message to view the phase response).

Arguments:

- center-frequency
  [float]
- gain
  [float]
- Q
  [float]

### analog

In left inlet: The word  analog , followed by a  0  or  1 , toggles the analog filter prototype parameter for the bandpass, and peaknotch filters. Unlike the standard digital versions, these "imitation analog" filters do not have a notch at the nyquist frequency, and thus imitate the response of a analog filter. The imitation analog filters are slightly more computationally expensive, so this option is set to 0 (disabled) by default.

Arguments:

- analog-filter-prototype
  [list]

### bandpass

In left inlet: The word  bandpass  sets the filter type of the [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) object to bandpass mode. It is equivalent to the  mode 3  message. The frequency response of the filter is based on three parameters: cf (center frequency) gain, and Q (resonance).

Arguments:

- center-frequency
  [float]
- gain
  [float]
- Q
  [float]

### bandstop

In left inlet: The word  bandstop  sets the filter type of the [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) object to bandstop mode. It is equivalent to the  mode 4  message. The frequency response of the filter is based on three parameters: cf (center frequency) gain, and Q (resonance).

Arguments:

- cutoff-frequency
  [float]
- gain
  [float]
- Q
  [float]

### cascade

In left inlet: The  cascade  message works in display mode only. The word  cascade , followed by up to 24 groups of five float values corresponding to filter coefficients, will display a composite filter response which shows the multiplication of a group of biquad filters in cascade.

Arguments:

- filter-coefficient-list
  [list]

### constraints

In left inlet: The word  constraints , followed by seven numbers, allows you to constrain the frequency, amplitude and Q values within the specified ranges. This is useful to constrain values obtained by clicking and dragging. The first number should be an integer, and it specified the filter number whose constraints will be set. The remaining six numbers are floating-point values which set the minimum and maximum frequency values, the minimum and maximum amplitude values, and the minimum and maximum Q values, respectively. Specifying constraint values of zero will remove the constraints for that value. The  constrints  message causes the filter coefficients to be output.

Arguments:

- filter-index
  [int]
- minimum-frequency
  [float]
- maximum-frequency
  [float]
- minimum-gain
  [float]
- maximum-gain
  [float]
- minimum-Q
  [float]
- maximum-Q
  [float]

### dictionary

The word  dictionary , followed by a symbol that references a named [filterdesign](https://docs.cycling74.com/reference/filterdesign) object dictionary, will cause the [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) object to use the dictionary values for filter coefficients.

Arguments:

- dictionary-name
  [symbol]

### display

In left inlet: The word  display  sets the filter type of the [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) object to display only. It is equivalent to the  mode 0  message. In display mode, [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) simply displays the frequency response for a set of five [biquad~](https://docs.cycling74.com/reference/biquad~) filter coefficients.

Arguments:

- filter-type
  [list]

### displaydot

In left inlet: The  displaydot  message, followed by a  0  or  1 , toggles the display of the mousable bandwidth region when [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) is in display mode. This allows you to use [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) as an interface to design and display your own filter algorithms. The default is disabled (by default, display mode functions uniquely as a display).

Arguments:

- mousable-bandwidth-display
  [list]

### flat

The word  flat , followed by a list that specifies the indices of filters in a multifilter array, will set the designated filters to flat response (i.e. no resonance for filtering) The changes made to the filters vary depending on filter type:

Lowpass and highpass filters: Q values set to 0.707, and gain coefficients are set to 1. (0dB)

Band pass and band stop filters are ignored.

All other filter types: The gain coefficients are set to 1. (0dB)

Arguments:

- filter-indices
  [list]

### gainmode

In left inlet: The word  gainmode , followed by a  0  or  1 , toggles the gain parameter for the lowpass, highpass, bandpass, and bandstop filters. The traditional definitions of these filters have a fixed gain of 1.0, but by gain-enabling them, their amplitude response can be scaled without the additional use of a signal multiply at the filters output.The default is 0 (disabled).

Arguments:

- gain-parameter
  [list]

### highorder

The  highorder  message works in display mode only. The word  highorder , followed by a list of n groups of biquad filter "a" coefficients and n-1 groups of biquad filter "b" coefficients, will display the response of an nth order filter.

Arguments:

- a/b-grouped-filter-coefficients
  [list]

### highpass

In left inlet: The word  highpass  sets the filter type of the [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) object to highpass mode.It is equivalent to the  mode 2  message. The frequency response of the filter is based on three parameters: cf (cutoff frequency) gain, and Q (resonance) or S (slope - used for the shelving filters).

Arguments:

- cutoff-frequency
  [float]
- gain
  [float]
- Q
  [float]

### highshelf

In left inlet: The word  highshelf  sets the filter type of the [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) object to highshelf mode.It is equivalent to the  mode 7  message. The frequency response of the filter is based on three parameters: cf (cutoff frequency) gain, and S (slope).

Arguments:

- cutoff-frequency
  [float]
- gain
  [float]
- slope
  [float]

### lowpass

In left inlet: The word  lowpass  sets the filter type of the [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) object to lowpass mode.It is equivalent to the  mode 1  message. The frequency response of the filter is based on three parameters: cf (center frequency, or cutoff frequency) gain, and Q (resonance).

Arguments:

- cutoff-frequency
  [float]
- gain
  [float]
- Q
  [float]

### lowshelf

In left inlet: The word  lowshelf  sets the filter type of the [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) object to lowshelf mode.It is equivalent to the  mode 6  message. The frequency response of the filter is based on three parameters: cf (center frequency, or cutoff frequency) gain, and S (slope).

Arguments:

- center-frequency
  [float]
- gain
  [float]
- slope
  [float]

### markers

In left inlet: The word  markers , followed by a list of up to 64 frequency values will place visual markers (vertical lines) at these frequencies behind the graph. The  markers  message will set the markers used for both linear and logarithmic frequency displays.

Arguments:

- frequency-value-markers
  [list]

### mode

In left inlet: The word  mode , followed by a number from 0-9, sets the current filter type. The numbers and associated filter types are.

Number - Filter type

0 - display only

1 - lowpass

2 - highpass

3 - bandpass

4 - bandstop

5 - peaknotch

6 - lowshelf

7 - highshelf

8 - resonant

9 - allpass

In display mode, [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) displays the frequency response for a set of five [biquad~](https://docs.cycling74.com/reference/biquad~) filter coefficients. In the other modes, it graphs the frequency response of a filter based on three parameters: cf (center frequency, or cutoff frequency) gain, and Q (resonance) or S (slope - used for the shelving filters).

Arguments:

- filter-type
  [int]

### (mouse)

You can change the filter parameters by clicking and dragging on the [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) object's display. By default, horizontal mouse dragging is mapped to cutoff frequency, and vertical mouse movement is mapped to gain (if  gainmode  is enabled). If the cursor is located directly over the edge of a filter band, however, the band rectangle is highlighted, indicating that clicking and dragging will map x-axis movement to adjust filter bandwidth instead of cutoff frequency. .

If multiple bandwidth regions are overlapping, you can cycle through them by double-clicking on the topmost one. This is useful for accessing smaller bandwidth regions that might be otherwise "covered" by a larger region.

### options

In left inlet: The word  options , followed by five integers, allows you to set the filter-specific options for a given filter. The first number specifies the filter whose options will be set. The remaining four integers set the filter mode ( mode  message) gain-enabling flag ( gainmode  message), analog filter prototype flag ( analog  message) and interactive filter mode flag ( displaydot  message), respectively. The  options  message causes the filter coefficients to be re-evaluated and output.

Arguments:

- filter-number
  [int]
- filter-mode
  [int]
- gain-enable-flag
  [int]
- analog-filter-prototype-flag
  [int]
- interactive-filter-mode-flag
  [int]

### params

In left inlet: The word  params , when followed by three numbers specifying frequency, gain and Q, sets the filter parameters for the currently selected filter and triggers output. When followed by four numbers specifying filter number, frequency, gain and Q, this messages sets the filter parameters for the filter indicated and causes output.

Arguments:

- filter-index
  [int]
- frequency
  [float]
- gain
  [float]
- Q
  [float]

### peaknotch

In left inlet: The word  peaknotch  sets the filter type of the [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) object to peaknotch mode.It is equivalent to the  mode 5  message. The frequency response of the filter is based on three parameters: cf (center frequency, or cutoff frequency) gain, and Q (resonance).

Arguments:

- center-frequency
  [float]
- gain
  [float]
- Q
  [float]

### query

In left inlet: The word  query , followed by a float value, will cause the amplitude and phase response of the graph at that frequency to be sent out the sixth outlet of the [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) object as a list.

Arguments:

- frequency
  [float]

### resonant

In left inlet: The word  resonant  sets the filter type of the [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) object to resonant mode (resonant bandpass filter). It is equivalent to the  mode 8  message. The frequency response of the filter is based on three parameters: cf (center frequency) gain, and Q (resonance).

Arguments:

- center-frequency
  [float]
- gain
  [float]
- Q
  [float]

### selectfilt

Highlights a specific filter in the UI. To switch to a filter to edit it, use  whichfilt .

Arguments:

- filter-index
  [int]

### set

In left inlet: The word  set , followed by a list of five int values which correspond to [biquad~](https://docs.cycling74.com/reference/biquad~) filter coefficients, sets the [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) object's internal values for these coefficients but does not cause output. If [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) is in display mode, it will display the frequency response of the filter obtained from these coefficients.

in 6th inlet: A list of three values which correspond respectively to center/cutoff frequency, gain and Q/S (resonance/slope), sets these values, recalculates the new filter coefficients but does not cause output. In display mode this message has no effect.

Arguments:

- a0/center frequency
  [float]
- a1/gain
  [float]
- a2/Q
  [float]
- b1
  [float]
- b2
  [float]

### setconstraints

In left inlet: The word  setconstraints , followed by seven numbers, allows you to set the frequency, amplitude and Q constraint values within the specified ranges without causing output. This is useful to constrain values obtained by clicking and dragging. The first number should be an integer, and it specified the filter number whose constraints will be set. The remaining six numbers are floating-point values which set the minimum frequency, maximum frequency, minimum amplitude, maximum amplitude, minimum Q and maximum Q, respectively. Specifying constraint values of zero will remove the constraints for that value.

Arguments:

- filter-index
  [int]
- minimum-frequency
  [float]
- maximum-frequency
  [float]
- minimum-gain
  [float]
- maximum-gain
  [float]
- minimum-Q
  [float]
- maximum-Q
  [float]

### setfilter

In left inlet: The word  setfilter , followed by a number, specifies the filter, by number, which is the currently selected filter in a multiple filter array. Filters are numbered from 0.

Arguments:

- filter number
  [list]

### setoptions

In left inlet: The word  setoptions , followed by five integers, allows you to set the filter-specific options for a given filter without triggering output. The first number specifies the filter whose options will be set (filters are numbered from 0). The remaining four integers set the filter mode ( mode  message) gain-enabling flag ( gainmode  message), analog filter prototype flag ( analog  message) and interactive filter mode flag ( displaydot  message), respectively.

Arguments:

- filter-number
  [int]
- filter-mode
  [int]
- gain-enable-flag
  [int]
- analog-filter-prototype-flag
  [int]
- interactive-filter-mode-flag
  [int]

### setparams

In left inlet: The word  setparams , when followed by three numbers specifying frequency, gain and Q, sets the filter parameters for the currently selected filter without triggering output. When followed by four numbers specifying filter number, frequency, gain and Q, this messages sets the filter parameters for the filter indicated, without triggering output.

Arguments:

- filter-index
  [int]
- frequency
  [float]
- gain
  [float]
- Q
  [float]

### whichfilt

Selects a specific filter as the one actively being edited (without highlighting it in the display).

Arguments:

- filter-index
  [int]

## Output

### float

Out second through fifth outlets: Frequency, Gain (linear), Resonance (Q) and Bandwidth output in response to clicks on the [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) object.

### int

Out rightmost (seventh) outlet: Filter index. Outputs the index number for all cascaded biquad filters that are displayed, as determined by the nfilters attribute.

### list

Out leftmost outlet: a list of 5 floating-point filter coefficients for the [biquad~](https://docs.cycling74.com/reference/biquad~) object. Coefficients output in response to mouse clicks and changes in the coefficient or filter parameter inlets. They are also output when the audio is turned on, and optionally when the patch is loaded if the automatic output option is turned on (see  autoout  message).

Out sixth outlet: a list of 2 floating-point values (amplitude, phase) output in response to the  query  message (see above).

## See Also

| Name | Description |
| --- | --- |
| [allpass~](https://docs.cycling74.com/reference/allpass~) | Apply an allpass filter effect |
| [biquad~](https://docs.cycling74.com/reference/biquad~) | Two-pole, two-zero filter |
| [cascade~](https://docs.cycling74.com/reference/cascade~) | Cascaded series of biquad filters |
| [delay~](https://docs.cycling74.com/reference/delay~) | Delay a signal |
| [filtercoeff~](https://docs.cycling74.com/reference/filtercoeff~) | Signal-rate filter coefficient generator |
| [lores~](https://docs.cycling74.com/reference/lores~) | Resonant lowpass filter |
| [reson~](https://docs.cycling74.com/reference/reson~) | Resonant bandpass filter |
| [teeth~](https://docs.cycling74.com/reference/teeth~) | Comb filter with feedforward and feedback delay control |
| [zplane~](https://docs.cycling74.com/reference/zplane~) | Graph filter poles and zeros on the Z-plane |
