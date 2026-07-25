---
type: mc
name: "mc.allpass~"
summary: "Apply an allpass filter effect (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.allpass~/"
package: "MC"
see_also: ["biquad~", "comb~", "cross~", "lores~", "phaseshift~", "reson~", "svf~", "teeth~"]
---
# mc.allpass~

Apply an allpass filter effect (multichannel)

## Description

Use the [allpass~](https://docs.cycling74.com/reference/allpass~) object to filter an input with an allpass filter. The allpass filter has a flat magnitude response but a complex phase response, typically delaying sharp transients.

## Arguments

### max-delay[float]ms optional

The maximum delay time. Defaults to 10 ms if not specified.

### initial-delay[float]ms optional

Initial delay time

### gain[float] optional

Gain coefficient

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### float

Middle inlet: The delay time in milliseconds

Right inlet: The gain coefficient

Arguments:

- filter-parameter
  [float]

### clear

Reset the filter state

### signal

Left inlet: The signal to be filtered

Middle inlet: The delay time in milliseconds

Right inlet: The gain coefficient

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

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
| [phaseshift~](https://docs.cycling74.com/reference/phaseshift~) | Distort the phase of a signal |
| [reson~](https://docs.cycling74.com/reference/reson~) | Resonant bandpass filter |
| [svf~](https://docs.cycling74.com/reference/svf~) | State-variable filter with simultaneous outputs |
| [teeth~](https://docs.cycling74.com/reference/teeth~) | Comb filter with feedforward and feedback delay control |
