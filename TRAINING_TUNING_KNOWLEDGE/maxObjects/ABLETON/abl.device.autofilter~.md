---
type: ableton
name: "abl.device.autofilter~"
summary: "Classic analog filter emulation."
signal: true
url: "https://docs.cycling74.com/reference/abl.device.autofilter~/"
package: "Ableton DSP"
see_also: ["abl.device.channeleq~", "abl.dsp.dfm~", "abl.dsp.filther~", "abl.dsp.vowel~"]
---
# abl.device.autofilter~

Classic analog filter emulation.

## Arguments

### frequency[float] optional

Filter frequency

### resonance[float] optional

Filter resonance

### drive[float] optional

Filter drive

### frequency[float] optional

Filter frequency

### resonance[float] optional

Filter resonance

### drive[float] optional

Filter drive

## Attributes

### circuit[int]

Select the filter circuit used for the Low-pass, High-pass, Band-pass, Notch, and Morph filters.

Possible values:

0 = 'SVF'
(
State variable filter
)
A clean-sounding filter

1 = 'DFM'
(
DFM filter
)
The DFM filter internally feeds back more of its distortion for a broad range of
tones from subtle filter sweeps to warm drive.

### djcontrol[float]

Controls the transition between low-pass and high-pass filtering.
Values above 0.0 filter out low frequencies, while values below 0.0 filter out high
frequencies. The filter resonance also shifts as the filtering changes: values near 0.0%
result in only a slight boost of the emphasized frequencies; this boost grows
progressively as values near -1.0 or 1.0.

### drive[float]

Applies additional input drive to the signal before it reaches the filter to add distortion.
At 0.0, the signal remains clean and unaltered. As the drive value is increased,
most filter types will progressively blend in the distortion for a more saturated sound.

### envamount[float]

Determines the extent to which the envelope modulation affects the filter
frequency.

### envattack[float]

Sets how quickly the envelope responds to rising input levels.

### envhold[int]

When on, the envelope completes the entire attack phase before the release phase is started.

### envrelease[float]

Sets how quickly the envelope responds to falling input levels.

### filterslope[int]

Sets the filter slope for low-pass, high-pass, band-pass, notch, and notch + LP filters.

Possible values:

0 = '12dB'

1 = '24dB'

### filtertype[int]

Sets the filter type

Possible values:

0 = 'Low-pass'

1 = 'High-pass'

2 = 'Band-pass'

3 = 'Notch'

4 = 'Morph'

5 = 'DJ'

6 = 'Comb'

7 = 'Resampling'

8 = 'Notch+LP'

9 = 'Vowel'

### frequency[float]

Sets the filter cutoff frequency

### lfoamount[float]

Sets the amount of LFO modulation.

### lfomorph[float]

Morphs the LFO waveform.

### lfophase[float]

Adjusts the offset between the left and right LFO channels. At 180 degrees, the LFO
channels will be perfectly out of phase.

### lfophaseoffset[float]

Shifts the starting point of both LFO channels along their waveforms.

### lfoquantize[int]

Sets the quantization mode for the LFO.

Possible values:

0 = 'None'
(
None
)
No quantization

1 = 'Steps'
(
Steps
)
Divides the LFO cycle into a number of discrete intervals.

### lforate[float]

LFO Rate

### lfosmoothing[float]

Applies smoothing to the LFO Sample and Hold waveform.

### lfospin[float]

Detunes the left and right LFOs relative to each other.

### lfosteps[int]

Defines how many discrete steps are used to divide the LFO cycle.

### lfostereo[int]

Sets the LFO stereo offset mode.

Possible values:

0 = 'Phase'
(
Phase
)
Offsets the left and right modulation channels using degrees.

1 = 'Spin'
(
Spin
)
Progressively diverges the left and right channels of the LFO.

### lfowaveform[int]

Sets the waveform used by the LFO.

Possible values:

0 = 'Sine'

1 = 'Triangle'

2 = 'Analog Triangle'

3 = 'Triangle 8-Step'

4 = 'Triangle 16-Step'

5 = 'Saw Up'

6 = 'Saw Down'

7 = 'Square'

8 = 'Random'

9 = 'Random Sample and Hold'

10 = 'Wander'

11 = 'Ramp Up'

12 = 'Ramp Down'

13 = 'Sharktooth'

### mix[float]

Sets the dry/wet mix of the output signal.

### morph[float]

Sets the filter position in its morph cycle.

For the Morph filter, you can smoothly transition between low-pass, band-pass, and high-pass filtering.

For the Comb filter, you can shift the filter between either the peaks or notches that appear
at multiples of the set filter frequency.

For the Notch+LP filter, you can shift the position of the notch relative to
the low-pass cutoff. For the Vowel filter, you can increasingly normalize the gain of the
formants.

### morphslope[int]

Sets the filter slope for the Morph filter.

Possible values:

0 = '6dB'

1 = '12dB'

2 = '24dB'

3 = '48dB'

### output[float]

Defines the wet signal level at the output of the device in dB.

### oversample[int]

Activates oversampling hi-quality mode, which helps reduce unwanted artifacts.

### resonance[float]

Defines the amount of emphasis at the cutoff frequency specified by frequency.

### sceq[int]

When enabled, the internal envelope will only react to the range of frequencies
specified by the set filter type and Sidechain EQ controls. By default, a high-pass
filter is selected, so the envelope primarily responds to transients, while slower
components such as synth envelopes or kick drum tails are ignored.

### sceqtype[int]

Select the filter type used for the sidechain EQ.

Possible values:

0 = 'Low Shelf'

1 = 'Bell'

2 = 'High Shelf'

3 = 'Low-pass'

4 = 'Band-pass'

5 = 'High-pass'

### scfrequency[float]

Sets the frequency of sidechain input EQ filtering.

### scgain[float]

Adjusts the level of the external sidechain signal.

### sclisten[int]

Enable this switch to bypass the device's output so that only the sidechain input is
audible. This is useful for fine-tuning the sidechain settings.

### scmono[int]

Converts the sidechain signal to mono so that the envelope follower modulation is
identical across the left and right channels. When enabled, only the third inlet of the
object is used as a sidechain signal. When disabled, both the third and fourth inlets
will be used.

### scresonance[float]

Sets the resonance of the sidechain EQ filter.

### softclip[int]

Enable to apply soft clipping to the device output. This is useful for limiting
any peaks caused by high resonance values.

### vowelformant[float]

Morphs through the following vowels: a, e, i, o, and u.

### vowelpitch[float]

Shifts the formants up or down by the set number of semitones.

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

TEXT\_HERE

## See Also

| Name | Description |
| --- | --- |
| [abl.device.channeleq~](https://docs.cycling74.com/reference/abl.device.channeleq~) | Semi-parametric 3-band channel EQ |
| [abl.dsp.dfm~](https://docs.cycling74.com/reference/abl.dsp.dfm~) | Digitally modeled analog lowpass filter |
| [abl.dsp.filther~](https://docs.cycling74.com/reference/abl.dsp.filther~) | Distorted lowpass filter |
| [abl.dsp.vowel~](https://docs.cycling74.com/reference/abl.dsp.vowel~) | Vowel bandpass filter |
