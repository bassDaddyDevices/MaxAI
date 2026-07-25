---
type: msp
name: "biquad~"
summary: "Two-pole, two-zero filter"
signal: true
url: "https://docs.cycling74.com/reference/biquad~/"
package: "MSP"
see_also: ["buffir~", "cascade~", "comb~", "cross~", "filtercoeff~", "filtergraph~", "lores~", "onepole~", "reson~", "svf~", "teeth~"]
---
# biquad~

Two-pole, two-zero filter

## Description

[biquad~](https://docs.cycling74.com/reference/biquad~) implements a two-pole, two-zero filter using the following equation:

y[n] = a0 \* x[n] + a1 \* x[n-1] + a2 \* x[n-2] - b1 \* y[n-1] - b2 \* y[n-2]

You can specify the coefficients a0, a1, a2, b1, and b2 as signals or floats (if you make the filter explode by making the b coefficients too high, you can recover (after lowering them) with the  clear  message, or by turning the audio on and off).

## Arguments

### a0[float] optional

Set the initial value for the a0 filter coefficient. If a signal is connected to the second inlet, the coefficient supplied as an argument is ignored.

### a1[float] optional

Set the initial value for the a1 filter coefficient. If a signal is connected to the third inlet, the coefficient supplied as an argument is ignored.

### a2[float] optional

Set the initial value for the a2 filter coefficient. If a signal is connected to the fourth inlet, the coefficient supplied as an argument is ignored.

### b1[float] optional

Set the initial value for the b1 filter coefficient. If a signal is connected to the fifth inlet, the coefficient supplied as an argument is ignored.

### b2[float] optional

Set the initial value for the b2 filter coefficient. If a signal is connected to the sixth inlet, the coefficient supplied as an argument is ignored.

## Attributes

### smooth[int]: 1

Toggles the smoothing of filter coeffient changes.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Converted to  float .

The coefficients in inlets 2 to 6 may be specified by a number instead of a signal. If a signal is also connected to the inlet, the number value is ignored.

Arguments:

- filter-coefficient
  [int]

### float

The coefficients in inlets 2 to 6 may be specified by a  float  instead of a signal. If a signal is also connected to the inlet, the  float  is ignored.

Arguments:

- filter-coefficient
  [float]

### list

The five filter coefficients can be provided as a  list  in the left inlet. The first number in the  list  is coefficient a0, the next is a1, and so on. If a signal is connected to a given inlet, the coefficient supplied in the  list  for that inlet is ignored.

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

### clear

Clears the [biquad~](https://docs.cycling74.com/reference/biquad~) object's memory of previous inputs and outputs, resetting xn-1, xn-2, yn-1, and yn-2 to 0.

### dictionary

The word  dictionary , followed by a symbol that references a named [filterdesign](https://docs.cycling74.com/reference/filterdesign) object dictionary (set via the  name  attribute), will cause the [biquad~](https://docs.cycling74.com/reference/biquad~) object to use the dictionary values for filter coefficients.

Arguments:

- dictionary-name
  [symbol]

### signal

In left inlet: Signal to be filtered. The filter mixes the current input sample with the two previous input samples and the two previous output samples according to the formula:

yn = a0xn + a1xn-1 + a2xn-2 - b1yn-1 - b2yn-2.

In 2nd inlet: Amplitude coefficient a0, for scaling the amount of the current input to be passed directly to the output.

In 3rd inlet: Amplitude coefficient a1, for scaling the amount of the previous input sample to be added to the output.

In 4th inlet: Amplitude coefficient a2, for scaling the amount of input sample n-2 to be added to the output.

In 5th inlet: Amplitude coefficient b1, for scaling the amount of the previous output sample to be added to the current output.

In right inlet: Amplitude coefficient b2, for scaling the amount of output sample n-2 to be added to the current output. .

### stoke

The word  stoke , followed by a list that specifies a set of filter coefficient values, will preload the filter so that it starts in a given initial state, allowing the filter to be used for purposes such as a ringing oscillator.

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

## Output

### signal

The filtered signal.

## See Also

| Name | Description |
| --- | --- |
| [buffir~](https://docs.cycling74.com/reference/buffir~) | buffer-based FIR filter |
| [cascade~](https://docs.cycling74.com/reference/cascade~) | Cascaded series of biquad filters |
| [comb~](https://docs.cycling74.com/reference/comb~) | Apply a comb filter effect |
| [cross~](https://docs.cycling74.com/reference/cross~) | Third-order crossover filter |
| [filtercoeff~](https://docs.cycling74.com/reference/filtercoeff~) | Signal-rate filter coefficient generator |
| [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) | Filter editor |
| [lores~](https://docs.cycling74.com/reference/lores~) | Resonant lowpass filter |
| [onepole~](https://docs.cycling74.com/reference/onepole~) | Single-pole lowpass filter |
| [reson~](https://docs.cycling74.com/reference/reson~) | Resonant bandpass filter |
| [svf~](https://docs.cycling74.com/reference/svf~) | State-variable filter with simultaneous outputs |
| [teeth~](https://docs.cycling74.com/reference/teeth~) | Comb filter with feedforward and feedback delay control |
