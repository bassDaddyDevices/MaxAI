---
type: mc
name: "mc.cross~"
summary: "Third-order crossover filter  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.cross~/"
package: "MC"
see_also: ["allpass~", "biquad~", "filtergraph~", "lores~", "onepole~", "reson~", "svf~"]
---
# mc.cross~

Third-order crossover filter (multichannel)

## Description

Use the [cross~](https://docs.cycling74.com/reference/cross~) object as a pair of symmetrical low+high pass 3rd order filters with lowpass and highpass outlets you can use separately or in combination to form a crossover filter.

## Arguments

### cutoff-frequency[float]hz optional

Obligatory. The argument sets the initial cutoff frequency for the lowpass and the highpass parts of the output signal.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In right inlet: Converted to  float . Sets the filter cutoff frequency for both the lowpass and the highpass parts of the output signal.

Arguments:

- cutoff-frequency
  [int]

### float

In right inlet: Sets the filter cutoff frequency for both the lowpass and the highpass parts of the output signal.

Arguments:

- cutoff-frequency
  [float]

### clear

Sets the filters' output memories to 0(this is helpful in case you blow it up).

### signal

In left inlet: Any signal to be filtered.

In right inlet: Sets the filter cutoff frequency for both the lowpass and the highpass parts of the output signal.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

Out left inlet: The lowpass-filtered input signal.

In right inlet: The highpass-filtered input signal.

Together the lowpass and highpass filtered signals combine to produce a flat frequency response equivalent to the input signal. The phase response for the filtered output is, however, slightly altered.

## See Also

| Name | Description |
| --- | --- |
| [allpass~](https://docs.cycling74.com/reference/allpass~) | Apply an allpass filter effect |
| [biquad~](https://docs.cycling74.com/reference/biquad~) | Two-pole, two-zero filter |
| [filtergraph~](https://docs.cycling74.com/reference/filtergraph~) | Filter editor |
| [lores~](https://docs.cycling74.com/reference/lores~) | Resonant lowpass filter |
| [onepole~](https://docs.cycling74.com/reference/onepole~) | Single-pole lowpass filter |
| [reson~](https://docs.cycling74.com/reference/reson~) | Resonant bandpass filter |
| [svf~](https://docs.cycling74.com/reference/svf~) | State-variable filter with simultaneous outputs |
