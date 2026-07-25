---
type: mc
name: "mc.bands~"
summary: "Filter bank for MC"
signal: true
url: "https://docs.cycling74.com/reference/mc.bands~/"
package: "MC"
see_also: ["fffb~", "mc.reson~"]
---
# mc.bands~

Filter bank for MC

## Description

[mc.bands~](https://docs.cycling74.com/reference/mc.bands~) divides the spectrum of an audio signal into separate bands
with each band represented as it's own channel of audio.

## Arguments

### number-of-bands[int] optional

The number of bands, and thus channels of audio, into which the audio input will be split.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

Audio signal to be split into separate channels for each frequency band.

### float

In 2nd inlet: The lowest frequency, in hertz, for which to create a band of audio.

In 3rd inlet: The highest frequency, in hertz, for which to create a band of audio.

In 4th inlet: The number of bands to create, ranging from the low bound to the high bound.

In 5th inlet: The width of the bands as a percentage.
100% represents the ideal bandwidth for an even crossover between bands.
Higher numbers represent narrower bands with a more pronounced gap between the bands.
Lower numbers represent wider bands with more overlap.

Note: Input to any one of the inlets will recalculate the filters graph and may cause a glitch in the audio.

Changes to the number of bands will require a re-start of the DSP to take effect.

Arguments:

- parameter
  [float]

## See Also

| Name | Description |
| --- | --- |
| [fffb~](https://docs.cycling74.com/reference/fffb~) | Fast fixed filter bank |
| [mc.reson~](https://docs.cycling74.com/reference/mc.reson~) | Resonant bandpass filter (multichannel) |
