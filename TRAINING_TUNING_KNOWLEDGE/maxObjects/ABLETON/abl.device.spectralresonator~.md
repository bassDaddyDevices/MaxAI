---
type: ableton
name: "abl.device.spectralresonator~"
summary: "Spectral resonator"
signal: true
url: "https://docs.cycling74.com/reference/abl.device.spectralresonator~/"
package: "Ableton DSP"
see_also: ["abl.device.spectraltime~"]
---
# abl.device.spectralresonator~

Spectral resonator

## Description

A spectral processor which uses spectral resonances and pitched overtones to add tonal character to any
audio source.

## Arguments

None.

## Attributes

### decay[float]

Sets the decay length in seconds. [0.001, 20.]

### frequency[float]

Sets the fundamental frequency of the resonator. [20., 20000.]

### gain[float]

Sets the amount of gain applied to the processed signal in dB. [-24., 24.]

### harmonics[int]

Sets the number of harmonics in the spectrum. A higher number results in more CPU use. [1, 256]

### hf\_damp[float]

Sets the amount of damping of high frequencies. [0., 1.]

### lf\_damp[float]

Sets the amount of damping of low frequencies. [0., 1.]

### mix[float]

Sets the dry/wet mix of the output signal. [0., 1.]

### mod\_rate[float]

Sets the modulation rate. [0., 1.]

### mod\_type[int]

Sets the mode that determines how harmonics are modulated.

Possible values:

0 = 'None'
(
None
)
Applies no modulation

1 = 'Chorus'
(
Chorus
)
Applies triangle wave modulation at different frequencies for every partial.

2 = 'Wandering'
(
Wandering
)
Ramps to random levels at random intervals.

3 = 'Granular'
(
Granular
)
Randomly triggers exponential envelopes.

### pitch\_mod[float]

Sets the pitch modulation amount in semitones. [0., 4.]

### shift[float]

Shift the input spectrum up or down in semitones. [-48., 48.]

### stretch[float]

Stretch (positive values) or compress (negative values) the spacing of the harmonics. [-1., 1.]

### unison[float]

Sets the intensity of the unison effect. [0., 1.]

### voices[int]

Sets the intensity of the unison effect. [1, 8]

### ins[symbol]

Declares additional inlets that can be used to control float-type attributes at either event or
signal rate. Any declared attributes already mapped to inlets will be ignored. This attribute can only
be set when the object is instantiated.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### float

Function depends on inlet

### reset

Reset

### signal

Function depends on inlet

## See Also

| Name | Description |
| --- | --- |
| [abl.device.spectraltime~](https://docs.cycling74.com/reference/abl.device.spectraltime~) | Spectral delay |
