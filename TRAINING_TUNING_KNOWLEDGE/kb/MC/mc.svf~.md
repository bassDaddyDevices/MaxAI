---
type: mc
name: "mc.svf~"
summary: "State-variable filter with simultaneous outputs (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.svf~/"
package: "MC"
see_also: ["biquad~", "comb~", "cross~", "onepole~", "lores~", "reson~", "svf~"]
---
# mc.svf~

State-variable filter with simultaneous outputs (multichannel)

## Description

The [svf~](https://docs.cycling74.com/reference/svf~) object is an implementation of a state-variable filter algorithm described in Hal Chamberlin's book, "Musical Applications of Microprocessors." A unique feature of this filter object is that it produces lowpass, highpass, bandpass, and bandreject (notch) output simultaneously - all four are available as outlets.

## Arguments

### center-frequency[float]hz optional

Sets the initial center frequency for the filter. The default value is 0.

### resonance[float] optional

Sets the initial resonance value for the filter. The default value is 0.01.

### Hz[symbol] optional

Sets the frequency input mode to Hz (the default mode - hence this is the same as providing no mode argument).

### linear[symbol] optional

Sets the frequency input mode to linear (0 -1).

### radians[symbol] optional

Sets the frequency input mode to radians (0 -1).

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In middle and right inlets: Integer values are converted to floats and can be sent in the two right inlets to change the center frequency and resonance of the filter. By default, the center frequency is expressed in Hz, where the allowable range is from 0 to one quarter of the current sampling rate. If a signal is connected to one of the inlets, a number received in that inlet is ignored. The values are sampled once every signal vector.

Arguments:

- center-frequency/resonance
  [int]

### float

In middle and right inlets: A  float  can be sent in the two right inlets to change the center frequency and resonance of the filter. By default, the center frequency is expressed in Hz, where the allowable range is from 0 to one quarter of the current sampling rate. For convenience, [svf~](https://docs.cycling74.com/reference/svf~) has two additional input modes that use the more conventional input range, 0 - 1. (see the  linear  and  radians  messages). If a signal is connected to one of the inlets, a number received in that inlet is ignored. The values are sampled once every signal vector.

Arguments:

- center-frequency/resonance
  [float]

### Hz

In either inlet: Sets the frequency input mode to Hz (the default).

### clear

Clears the object's sample-memory in case of a blow-up.

### linear

In any inlet: Sets the frequency input mode to linear (0 - 1). Linear mode is simply a scaled version of the standard Hz mode, except that values in the 0-1 range traverse the full frequency range.

### radians

In any inlet: Sets the frequency input mode to radians (0 - 1). Radians mode lets you set the center frequency directly -- while the input has the same range (0-1), the output has a curved frequency response that is closer to the exponential pitch scale of the human ear.

### signal

In left inlet: Signal to be filtered.

In middle inlet: Sets the filter center frequency in Hz.

In right inlet: Sets the bandpass filter "Q" - roughly, the sharpness of the filter - where Q is defined as the filter bandwidth divided by the center frequency. Useful Q values for svf~ are typically between 0.01 and 1.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The filtered input signal.

## See Also

| Name | Description |
| --- | --- |
| [biquad~](https://docs.cycling74.com/reference/biquad~) | Two-pole, two-zero filter |
| [comb~](https://docs.cycling74.com/reference/comb~) | Apply a comb filter effect |
| [cross~](https://docs.cycling74.com/reference/cross~) | Third-order crossover filter |
| [onepole~](https://docs.cycling74.com/reference/onepole~) | Single-pole lowpass filter |
| [lores~](https://docs.cycling74.com/reference/lores~) | Resonant lowpass filter |
| [reson~](https://docs.cycling74.com/reference/reson~) | Resonant bandpass filter |
| [svf~](https://docs.cycling74.com/reference/svf~) | State-variable filter with simultaneous outputs |
