---
type: msp
name: "onepole~"
summary: "Single-pole lowpass filter"
signal: true
url: "https://docs.cycling74.com/reference/onepole~/"
package: "MSP"
see_also: ["biquad~", "comb~", "cross~", "lores~", "reson~", "svf~"]
---
# onepole~

Single-pole lowpass filter

## Description

The [onepole~](https://docs.cycling74.com/reference/onepole~) object implements the simplest of IIR filters, providing a 6dB per octave attenuation. This filter is very efficient and useful for gently rolling off harsh high end and for smoothing out control signals.

#### Discussion

The standard difference equation for this filter is

y(n) = a\_{0} x(n) + b\_{1} y(n-1)

Where

b\_{1} = 1 - a\_{0}

which can be factored down to

y(n) = y(n-1) + a\_{0}[ x(n) - y(n-1) ]

As the value of the a\_{0} coefficient is lowered (b\_{1} increases) the input will be increasingly smoothed and the effective cutoff frequency (f\_c) lowered. Calculating the a\_0 coefficient from the f\_c cutoff frequency is performed with the equation

a\_{0} = sin(f\_c \* (pi/nyquist))

where f\_s is the sampling frequency and f\_c the cutoff frequency expressed in Hertz. [onepole~](https://docs.cycling74.com/reference/onepole~) is a more efficient implementation of a [biquad~](https://docs.cycling74.com/reference/biquad~) object with the following coefficients:

a\_{0} &= a\_{0}

a\_{1} &= 0

a\_{2} &= 0

b\_{1} &= -b\_{1}

b\_{2} &= 0

Note the sign flip for b\_{1} as biquad uses flipped signs for the feedback coefficients.

## Arguments

### center-frequency[float]hz optional

Sets the center frequency for the filter, as described above.

### Hz/linear/radians[symbol] optional

Using the symbols  Hz ,  linear , or  radians  for an optional second argument sets the frequency input mode. The default mode is Hz (which is the same as providing no mode argument). Using the  linear  argument sets the frequency input mode to linear (0 - 1). Using the  radians  argument sets the frequency input mode to radians (0 - 1).

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In right inlet: Sets the frequency for the filter (if no signal is connected). By default, frequency is expressed in Hz, where the allowable range is from 0 to one fourth of the current sampling rate. For convenience, [onepole~](https://docs.cycling74.com/reference/onepole~) has two additional input modes that use the more conventional input range, 0 - 1 (see the  linear  and  radians  messages).

Arguments:

- center-frequency (Hz)
  [int]

### float

In right inlet: Sets the frequency for the filter (if no signal is connected). By default, frequency is expressed in Hz, where the allowable range is from 0 to one fourth of the current sampling rate. For convenience, [onepole~](https://docs.cycling74.com/reference/onepole~) has two additional input modes that use the more conventional input range, 0 - 1 (see the  linear  and  radians  messages).

Arguments:

- center-frequency (Hz or 0 through 1 specified by object-argument)
  [float]

### Hz

In either inlet: Sets the frequency input mode to Hz (the default).

### clear

In either inlet: Clears the internal state of onepole~. Since onepole~ does not have the inherent instability of other filter types, this should never be necessary.

### linear

In either inlet: Sets the frequency input mode to linear (0 - 1). Linear mode is simply a scaled version of the standard Hz mode, except that values in the 0-1 range traverses the full frequency range.

### radians

In either inlet: Sets the frequency input mode to radians (0 - 1). Radians mode lets you set the center frequency (f\_c) of the equation directly, while the input has the same range (0-1), the output has a curved frequency response that is closer to the exponential pitch scale of the human ear.

### signal

In left inlet: Signal to be filtered.

In right inlet: A signal can be used to set the frequency for the filter, with the same effect as a float. If a signal is connected to this inlet, its value is sampled once every signal vector.

## Output

### signal

The filtered signal.

## See Also

| Name | Description |
| --- | --- |
| [biquad~](https://docs.cycling74.com/reference/biquad~) | Two-pole, two-zero filter |
| [comb~](https://docs.cycling74.com/reference/comb~) | Apply a comb filter effect |
| [cross~](https://docs.cycling74.com/reference/cross~) | Third-order crossover filter |
| [lores~](https://docs.cycling74.com/reference/lores~) | Resonant lowpass filter |
| [reson~](https://docs.cycling74.com/reference/reson~) | Resonant bandpass filter |
| [svf~](https://docs.cycling74.com/reference/svf~) | State-variable filter with simultaneous outputs |
