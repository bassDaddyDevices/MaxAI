---
type: mc
name: "mc.reson~"
summary: "Resonant bandpass filter (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.reson~/"
package: "MC"
see_also: ["biquad~", "comb~", "cross~", "onepole~", "lores~", "reson~", "svf~"]
---
# mc.reson~

Resonant bandpass filter (multichannel)

## Description

Use the [reson~](https://docs.cycling74.com/reference/reson~) object when you need a resonant bandpass filter.

#### Discussion

[reson~](https://docs.cycling74.com/reference/reson~) implements the following filter equation:

y[n] = a0 \* (x[n] - r \* x[n-2]) + b1 \* y[n-1] + b2 \* y[n-2]

where r, b1, and b2 are parameters calculated from the input center frequency cf and Q.

Q = cf/bandwidth.

Inputs can be floats or signals.

## Arguments

### initial-gain[float] optional

Sets the initial gain. The default value is 0.

### center-frequency[float]hz optional

Sets the initial center frequency for the filter. The default value is 0.

### Q[float] optional

Sets the initial Q value for the filter. The default value is 0.01.

## Attributes

### cf[float]

Alias:
freq

The center frequency for the filter, in hertz.

### gain[float]

Sets the bandpass filter gain. This value should generally be less than 1.

### q[float]

Sets the bandpass filter resonance, or "Q." Roughly, this is the sharpness of the filter, where Q is defined by the center-frequency divided by the filter-bandwidth. Useful Q values are typically between 0.01 and 500.

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

An  int  can be sent in the three right inlets to change the filter-gain, center-frequency, and Q. If a signal is connected to one of the inlets, a number received in that inlet is ignored.

Arguments:

- initial-gain
  [int]
- center-frequency
  [int]
- Q
  [int]

### float

float  can be sent in the three right inlets to change the filter-gain, center-frequency, and Q. If a signal is connected to one of the inlets, a number received in that inlet is ignored.

Arguments:

- initial-gain
  [float]
- center-frequency
  [float]
- Q
  [float]

### list

In left inlet: The first number sets the filter-gain. The second number sets the filter center-frequency. The third number sets the filter-Q. If any of the inlets corresponding to these parameters have signals connected, the corresponding value in the list is ignored.

Arguments:

- initial-gain
  [number]
- center-frequency
  [number]
- Q
  [number]

### clear

Clears the filter's memory. Since [reson~](https://docs.cycling74.com/reference/reson~) is a recursive filter, this message may be necessary to recover from blowups.

### signal

In left inlet: Any signal to be filtered.

In left-middle inlet: Sets the bandpass filter gain. This value should generally be less than 1.

In right-middle inlet: Sets the bandpass filter center frequency in hertz.

In right inlet: Sets the bandpass filter "Q"-roughly, the sharpness of the filter - where Q is defined by the center-frequency divided by the filter-bandwidth. Useful Q values are typically between 0.01 and 500.

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
