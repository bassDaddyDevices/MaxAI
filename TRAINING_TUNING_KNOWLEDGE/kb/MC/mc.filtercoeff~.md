---
type: mc
name: "mc.filtercoeff~"
summary: "Signal-rate filter coefficient generator (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.filtercoeff~/"
package: "MC"
see_also: ["allpass~", "biquad~", "cascade~", "delay~", "filtergraph~", "lores~", "reson~", "teeth~"]
---
# mc.filtercoeff~

Signal-rate filter coefficient generator (multichannel)

## Description

The [filtercoeff~](https://docs.cycling74.com/reference/filtercoeff~) object is a signal-rate filter coefficient calculator for the [biquad~](https://docs.cycling74.com/reference/biquad~) object. It calculates the filter coefficients from three higher-level parameters: frequency, amplitude and resonance (Q) or slope (S). Its internal calculations are based on those of the [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) object.

## Arguments

### default-filter-type[symbol] optional

A symbol argument may be used to set the default filter type (highpass, lowpass, etc...).

### resampling-factor[int] optional

An optional second argument can be used to specify a resampling factor.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Integer values are converted to  float .

In 1st inlet: Sets the center or cutoff frequency parameter for the filter and causes output.

In 2nd inlet: Sets the gain parameter for the filter and causes output.

In 3rd inlet: Sets the Q (resonance) or S (slope) parameter for the filter and causes output. (note that the term slope is only used for the third parameter of shelving filters, and is roughly equivalent to resonance).

Arguments:

- filter-parameters
  [int]

### float

In 1st inlet: Sets the center or cutoff frequency parameter for the filter and causes output.

In 2nd inlet: Sets the gain parameter for the filter and causes output.

In 3rd inlet: Sets the Q (resonance) or S (slope) parameter for the filter and causes output. (note that the term slope is only used for the third parameter of shelving filters, and is roughly equivalent to resonance)

Arguments:

- filter-parameters
  [float]

### list

A list of up to 3 floats will specify the center-frequency, the gain, and the Q-factor respectively. A signal connected to any inlet where these parameters would normally be received will override any input from a  list  and the effects of these parameters are completely dependent on what type of filter is chosen.

Arguments:

- center-frequency
  [float]
- initial-gain
  [float]
- Q
  [float]

### allpass

In left inlet: The word  allpass  sets the filter type to allpass mode. The frequency response of the filter is based on two parameters: center/cutoff frequency and Q (resonance). The gain parameter is set to unity gain (1.0). An allpass filter is designed to modify the phase response, leaving a flat amplitude response

Arguments:

- center-frequency
  [float]
- Q
  [float]

### bandpass

In left inlet: The word  bandpass  sets the filter type to bandpass mode. The frequency response of the filter is based on two parameters: center frequency and Q (resonance). The gain parameter is set to unity gain (1.0).

Arguments:

- center-frequency
  [float]
- Q
  [float]

### bandstop

In left inlet: The word  bandstop  sets the filter type to bandstop mode. The frequency response of the filter is based on two parameters: center frequency and Q (resonance). The gain parameter is set to unity gain (1.0).

Arguments:

- center-frequency
  [float]
- Q
  [float]

### gainapass

In left inlet: The word  gainapass  sets the filter type to allpass mode with user-controllable gain. The frequency response of the filter is based on three parameters: center/cutoff frequency, gain, and Q (resonance), although only the gain parameter has an effect on the amplitude response. An allpass filter is designed to modify the phase response, leaving a flat amplitude response

Arguments:

- center-frequency
  [float]
- initial-gain
  [float]
- Q
  [float]

### gainbpass

In left inlet: The word  gainbpass  sets the filter type to bandpass mode with user-controllable gain. The frequency response of the filter is based on three parameters: center frequency, gain, and Q (resonance).

Arguments:

- center-frequency
  [float]
- initial-gain
  [float]
- Q
  [float]

### gainbstop

In left inlet: The word  gainbstop  sets the filter type to bandstop mode with user-controllable gain. The frequency response of the filter is based on three parameters: center frequency, gain, and Q (resonance).

Arguments:

- center-frequency
  [float]
- initial-gain
  [float]
- Q
  [float]

### gainhpass

In left inlet: The word  gainhpass  sets the filter type to highpass mode with user-controllable gain. The frequency response of the filter is based on three parameters: cf (cutoff frequency) gain, and Q (resonance).

Arguments:

- center-frequency
  [float]
- initial-gain
  [float]
- Q
  [float]

### gainlpass

In left inlet: The word  gainlpass  sets the filter type to lowpass mode with user-controllable gain. The frequency response of the filter is based on three parameters: cf (cutoff frequency) gain, and Q (resonance).

Arguments:

- center-frequency
  [float]
- initial-gain
  [float]
- Q
  [float]

### gainresonant

In left inlet: The word  gainrtesonant  sets the filter type to resonant mode (resonant bandpass filter) with user-controllable gain. The frequency response of the filter is based on three parameters: center frequency, gain, and Q (resonance).

Arguments:

- center-frequency
  [float]
- initial-gain
  [float]
- Q
  [float]

### highpass

In left inlet: The word  highpass  sets the filter type to highpass mode. The frequency response of the filter is based on two parameters: cf (cutoff frequency) and Q (resonance). The gain parameter is set to unity gain (1.0).

Arguments:

- center-frequency
  [float]
- Q
  [float]

### highshelf

In left inlet: The word  highshelf  sets the filter type to highshelf mode. The frequency response of the filter is based on three parameters: cutoff frequency, gain, and S (slope).

Arguments:

- center-frequency
  [float]
- initial-gain
  [float]
- Q
  [float]

### lowpass

In left inlet: The word  lowpass  sets the filter type to lowpass mode. The frequency response of the filter is based on two parameters: cf (cutoff frequency) and Q (resonance). The gain parameter is set to unity gain (1.0).

Arguments:

- center-frequency
  [float]
- Q
  [float]

### lowshelf

In left inlet: The word  lowshelf  sets the filter type to lowshelf mode. The frequency response of the filter is based on three parameters: cutoff frequency, gain, and S (slope).

Arguments:

- center-frequency
  [float]
- initial-gain
  [float]
- Q
  [float]

### off

In left inlet: The word  off  sets the filter type to off mode whereby the dry, unfiltered signal is passed to the outputs.

Arguments:

- filter-type
  [list]

### peaknotch

In left inlet: The word  peaknotch  sets the filter type to peaknotch mode. The frequency response of the filter is based on three parameters: center/cutoff frequency, gain, and Q (resonance).

Arguments:

- center-frequency
  [float]
- initial-gain
  [float]
- Q
  [float]

### resamp

Set the resampling factor

Arguments:

- resampling-factor
  [int]

### resonant

In left inlet: The word  resonant  sets the filter type to resonant mode (resonant bandpass filter). The frequency response of the filter is based on two parameters: center frequency and Q (resonance). The gain parameter is set to unity gain (1.0).

Arguments:

- center-frequency
  [float]
- Q
  [float]

### signal

In 1st inlet: Sets the center or cutoff frequency parameter for the filter and causes output.

In 2nd inlet: Sets the gain parameter for the filter and causes output.

In 3rd inlet: Sets the Q (resonance) or S (slope) parameter for the filter and causes output. (note that the term slope is only used for the third parameter of shelving filters, and is roughly equivalent to resonance)

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The five signal outlets output signal-rate filter coefficients for the [biquad~](https://docs.cycling74.com/reference/biquad~) object.

## See Also

| Name | Description |
| --- | --- |
| [allpass~](https://docs.cycling74.com/reference/allpass~) | Apply an allpass filter effect |
| [biquad~](https://docs.cycling74.com/reference/biquad~) | Two-pole, two-zero filter |
| [cascade~](https://docs.cycling74.com/reference/cascade~) | Cascaded series of biquad filters |
| [delay~](https://docs.cycling74.com/reference/delay~) | Delay a signal |
| [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) | Filter editor |
| [lores~](https://docs.cycling74.com/reference/lores~) | Resonant lowpass filter |
| [reson~](https://docs.cycling74.com/reference/reson~) | Resonant bandpass filter |
| [teeth~](https://docs.cycling74.com/reference/teeth~) | Comb filter with feedforward and feedback delay control |
