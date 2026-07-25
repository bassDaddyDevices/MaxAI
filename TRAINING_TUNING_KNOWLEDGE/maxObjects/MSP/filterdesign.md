---
type: msp
name: "filterdesign"
summary: "Create a filter specification"
signal: false
url: "https://docs.cycling74.com/reference/filterdesign/"
package: "MSP"
see_also: ["filterdetail", "plot~", "cascade~"]
---
# filterdesign

Create a filter specification

## Description

Use the [filterdesign](https://docs.cycling74.com/reference/filterdesign) object to create a [dictionary](https://docs.cycling74.com/reference/dict) containing a specification for a filter that can be realized by several other objects including the [cascade~](https://docs.cycling74.com/reference/cascade~) object.

## Arguments

None.

## Attributes

### frequency[2 floats]

Filter cutoff frequencies specified in units defined by the
units
attribute. For lowpass and highpass filters a single frequency will be used to define the cutoff. For bandpass and bandstop filters two frequencies are required.

### name[symbol]

Name to which the output dictionary is bound

### order[int]

The order of the filter, which is to say the number of poles and zeroes. For reference, the [biquad~](https://docs.cycling74.com/reference/biquad~) object is a second-order filter (2 poles and 2 zeroes).

### passband\_ripple[float]

Magnitude ripple in the passband for Chebyshev Type 1 filters in decibels. Higher amounts of ripple will provide a narrower transition band given a constant order for the filter.

### response[symbol]

Filter response shape

Possible values:

'lowpass'
(
Low frequencies pass through, high frequencies are attenuated
)
'highpass'
(
High frequencies pass through, low frequencies are attenuated
)
'bandpass'
(
A band of frequencies pass through, low and high frequencies are attenuated
)
'bandstop'
(
A band of frequencies are attenuated, low and high frequencies pass through
)

### samplerate[int]

Samplerate used when
unit
attribute is set to hertz. If the samplerate is set to zero then MSP's samplerate will be used.

### sos\_output[int]

Inclusion of coefficients for second-order-sections in the output dictionary. This is the native format used by [cascade~](https://docs.cycling74.com/reference/cascade~), [zplane~](https://docs.cycling74.com/reference/zplane~), and [filtergraph~](https://docs.cycling74.com/reference/filtergraph~).

### stopband\_attenuation[float]

Minimum attenuation in Chebyshev Type 2 filter stopband in decibels. For given order of filter, greater attenuation results in a wider transition band and less attenuation in the stopband results in a narrower transition band.

### tf\_output[int]

Include single-section transfer function coefficients in the output dictionary. This representation works well for low-ordered filters but quickly becomes subject to floating-point precision roundoff as the order of the filter increases.

### topology[symbol]

The organization of the zeroes and poles used to realize the filter.

Possible values:

'butterworth'
(
Gentle transition, flat passband, monotonically decreasing stopband
)
'chebyshev-1'
(
Steepest transition, definable ripple in passband, monotonically decreasing stopband
)
'chebyshev-2'
(
Moderate transition, flat passband, definable ripple in the stopband
)

### units[symbol]

Units of measurement for specifying frequencies

Possible values:

'hertz'
(
Cycles per second, based on the
samplerate
attribute
)
'normalized'
(
Range from 0.0 to 1.0; 1.0 is the nyquist frequency
)
'radians'
(
Range from 0.0 to pi; pi is the nyquist frequency
)

### zpk\_output[int]

Include zeroes-poles-gain representation in the output dictionary. Zeroes-poles-gain (ZPK) provides a more accurate representation of the filter's response than the single-section transfer function (see
tf\_output
attribute) for higher-order filters. If calculating coefficients for second-order-sections (see
sos\_output
attribute) the ZPK representation is calculated as an intermediary stage.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sending a  bang  will generate the filterdesign dictionary using current attributes and send it out the first outlet.

### (mouse)

Double-click the [filterdesign](https://docs.cycling74.com/reference/filterdesign) object to open a dictionary editor window and view or edit the current attributes.

## Output

### dictionary

A filterdesign dictionary containing the specified filter characteristics.

## See Also

| Name | Description |
| --- | --- |
| [filterdetail](https://docs.cycling74.com/reference/filterdetail) | Detail the characteristics of a filter |
| [plot~](https://docs.cycling74.com/reference/plot~) | Visualize two-dimensional data |
| [cascade~](https://docs.cycling74.com/reference/cascade~) | Cascaded series of biquad filters |
