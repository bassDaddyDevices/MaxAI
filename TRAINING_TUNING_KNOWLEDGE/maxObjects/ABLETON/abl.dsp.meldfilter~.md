---
type: ableton
name: "abl.dsp.meldfilter~"
summary: "Meta-filter"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.meldfilter~/"
package: "Ableton DSP"
see_also: ["abl.device.redux~", "abl.dsp.dfm~", "abl.dsp.filther~", "abl.dsp.modalresonator~", "abl.dsp.phaser~"]
---
# abl.dsp.meldfilter~

Meta-filter

## Description

The [abl.dsp.meldfilter~](https://docs.cycling74.com/reference/abl.dsp.meldfilter~) object wraps filters used in the Meld synthesizer.

## Arguments

### frequency[number] optional

Sets the filter cutoff frequency. Range: [0.0, 22050.0]

### macro1[number] optional

Sets the value of Macro 1. Range: [0.0, 1.0]

### macro2[number] optional

Sets the value of Macro 2. Range: [0.0, 1.0]

## Attributes

### frequency[float]

Sets the filter cutoff frequency in Hz. Range: [0.0, 20500.0]

### macro1[float]

Sets Macro 1. Function depends on filter. Range: [0.0, 1.0]

DFM, SVF, switched resistor, filther, vowel, plate resonator, and membrane resonator filter:
filter Q.

Phaser and comb filters: feedback amount.

Parametric EQ peak: boost.

Parametric EQ notch: cut.

Redux: amount of bitcrushing.

### macro2[float]

Sets Macro 2. Function depends on filter. Range: [0.0, 1.0]

DFM and filther: amount of drive.

SVF filters: morph between low-pass, band-pass, high-pass, and notch.

Switched resistor filter and redux: "lofi" amount.

Parametric EQ peak and notch filters: filter Q.

Phaser: spread amount.

Vowel: morph between AEIOU vowel sounds.

Comb filters and membrane resonator: damping amount.

Plate resonator: ratio the modeled plate's dimensions, ranging from a square to a thin bar.

### type[int]

Filter type

Possible values:

0 = 'Comb+'
(
Comb+
)
Comb filter

1 = 'Comb-'
(
Comb-
)
Inverted comb filter

2 = 'LP Crunch 12dB'
(
Low-pass crunch (12dB)
)
The DFM low-pass filter which feeds back
more of its distortion internally.

3 = 'Filther'
(
Filther
)
A filter that has both pre and post distortion
stages: a hard diode clipper on the input and
a soft saturation on the output.

4 = 'Membrane Resonator'
(
Membrane Resonator
)
A modal resonator tuned to the first 32
modes of a circular membrane. The size,
resonance, and high frequency damping of
the membrane can be altered.

5 = 'EQ Peak'
(
Parametric EQ Peak
)
A peak filter with gain and width.

6 = 'EQ Notch'
(
Parametric EQ Notch
)
A notch filter with gain and width.

7 = 'Phaser'
(
Phaser
)
A six stage delayless inverted-feedback phaser with
variable feedback and notch spacing.

8 = 'Plate Resonator'
(
Plate Resonator
)
A modal resonator tuned to the first 32
modes of a rectangular plate. The size,
resonance, and dimension-ratio of the plate
can be altered.

9 = 'Redux'
(
Redux
)
A resampler and bitcrusher with variable samplerate,
quantization, and control over the amount of
resampling artifacts.

10 = 'SVF 12dB'
(
SVF (12dB)
)
A 12dB per octave state variable filter which
can morph through these configurations:
low-pass, band-pass, high-pass, notch.

11 = 'SVF 24dB'
(
SVF (24dB)
)
A 24dB per octave state variable filter which
can morph through these configurations:
low-pass, band-pass, high-pass, notch.

12 = 'LP Switched Res'
(
Low-pass Switched Resistor
)
A low-pass filter where resistors are
replaced with fast switches to create
downsampling artifacts.

13 = 'Vowel'
(
Vowel
)
A formant filter with vowel characteristics.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### float

Second inlet: sets frequency.

Third inlet: sets macro 1.

Fourth inlet: sets macro 2.

### reset

Resets the filter processor

### signal

First inlet: signal to be filtered.

Second inlet: sets frequency.

Third inlet: sets macro 1.

Fourth inlet: sets macro 2.

## See Also

| Name | Description |
| --- | --- |
| [abl.device.redux~](https://docs.cycling74.com/reference/abl.device.redux~) | Downsampling and bit-reduction effect |
| [abl.dsp.dfm~](https://docs.cycling74.com/reference/abl.dsp.dfm~) | Digitally modeled analog lowpass filter |
| [abl.dsp.filther~](https://docs.cycling74.com/reference/abl.dsp.filther~) | Distorted lowpass filter |
| [abl.dsp.modalresonator~](https://docs.cycling74.com/reference/abl.dsp.modalresonator~) | Modal resonator |
| [abl.dsp.phaser~](https://docs.cycling74.com/reference/abl.dsp.phaser~) | Phaser |
