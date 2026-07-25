---
type: msp
name: "lores~"
summary: "Resonant lowpass filter"
signal: true
url: "https://docs.cycling74.com/reference/lores~/"
package: "MSP"
see_also: ["biquad~", "buffir~", "comb~", "cross~", "onepole~", "svf~", "reson~"]
---
# lores~

Resonant lowpass filter

## Description

[lores~](https://docs.cycling74.com/reference/lores~) implements an inexpensive lowpass with an adjustment that lets you add a specified resonance. The middle inlet sets a kind of cutoff frequency, but the sharpness of the filter depends on the resonance passed in through the right inlet (0 is a little bit sharp and 1 as sharp as possible).

## Arguments

### cutoff[number] optional

A number sets the initial cutoff frequency. The default value is 0. If a signal is connected to the inlet, the argument corresponding to the inlet is ignored.

### resonance[number] optional

A number sets the filter resonance. The default value is 0. If a signal is connected to the inlet, the argument corresponding to the inlet is ignored. A resonance of 0 is a little bit sharp and 1 is as sharp as possible.

## Attributes

### cutoff[float]

Alias:
freq

Sets the initial cutoff frequency.

### resonance[float]

Alias:
q

Sets the filter resonance. A resonance of 0 is a little bit sharp and 1 is as sharp as possible.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

An  int  can be sent in the middle or right inlets to change the cutoff frequency or resonance. If a signal is connected one of the inlets, a number received in that inlet is ignored. A resonance of 0 is a little bit sharp and 1 is as sharp as possible.

Arguments:

- cutoff-frequency/resonance
  [int]

### float

float  can be sent in the middle or right inlets to change the cutoff frequency or resonance. If a signal is connected one of the inlets, a number received in that inlet is ignored. A resonance of 0 is a little bit sharp and 1 is as sharp as possible.

Arguments:

- cutoff-frequency/resonance
  [float]

### clear

Clears the filter's memory. Since [lores~](https://docs.cycling74.com/reference/lores~) is a recursive filter, this message may be necessary to recover from blowups.

### signal

In left inlet: Any signal to be filtered.

In middle inlet: Sets the lowpass filter cutoff frequency.

In right inlet: Sets a "resonance factor" between 0 (minimum resonance) and 1 (maximum resonance). Values very close to 1 may produce clipping with certain types of input signals.

## Output

### signal

The filtered input signal. The equation of the filter is

yn = scale \* xn - c1 \* yn-1 + c2 \* yn-2

where scale, c1, and c2 are parameters calculated from the cutoff frequency and resonance factor.

## See Also

| Name | Description |
| --- | --- |
| [biquad~](https://docs.cycling74.com/reference/biquad~) | Two-pole, two-zero filter |
| [buffir~](https://docs.cycling74.com/reference/buffir~) | buffer-based FIR filter |
| [comb~](https://docs.cycling74.com/reference/comb~) | Apply a comb filter effect |
| [cross~](https://docs.cycling74.com/reference/cross~) | Third-order crossover filter |
| [onepole~](https://docs.cycling74.com/reference/onepole~) | Single-pole lowpass filter |
| [svf~](https://docs.cycling74.com/reference/svf~) | State-variable filter with simultaneous outputs |
| [reson~](https://docs.cycling74.com/reference/reson~) | Resonant bandpass filter |
