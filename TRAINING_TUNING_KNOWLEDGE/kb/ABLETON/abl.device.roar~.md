---
type: ableton
name: "abl.device.roar~"
summary: "Three-stage saturator"
signal: true
url: "https://docs.cycling74.com/reference/abl.device.roar~/"
package: "Ableton DSP"
see_also: ["abl.device.redux~", "abl.dsp.saturator~", "abl.dsp.waveshaper~"]
---
# abl.device.roar~

Three-stage saturator

## Description

A three-stage saturation effect with flexible modulation.

## Arguments

None.

## Attributes

### blend[float]

Creates a blend between the first and second stages when in serial, parallel, or mid/side
routing mode. [0., 1.]

### compressor\_amount[float]

Sets the amount of main bus compression. [0., 1.]

### compressor\_highpass[int]

Activates a highpass filter for the analysis signal used in the compressor's sidechain. This is
useful to reduce the amount of gain reduction for low frequency signals.

### crossover\_high[float]

Sets the frequency of the higher crossover band. [200., 18000.]

### crossover\_low[float]

Sets the frequency of the lower crossover band. [20., 5000.]

### enable\_filter\_1[int]

Enables/disables filter 1.

### enable\_filter\_2[int]

Enables/disables filter 2.

### enable\_filter\_3[int]

Enables/disables filter 3.

### enable\_shaper\_1[int]

Enables/disables shaper 1.

### enable\_shaper\_2[int]

Enables/disables shaper 2.

### enable\_shaper\_3[int]

Enables/disables shaper 3.

### enable\_stage\_1[int]

Enables/disables stage 1.

### enable\_stage\_2[int]

Enables/disables stage 2.

### enable\_stage\_3[int]

Enables/disables stage 3.

### envelope\_attack[float]

Sets the envelope attack time in seconds. [0., 0.1]

### envelope\_filter\_frequency[float]

Sets the envelope filter frequency in Hz. [50., 18000.]

### envelope\_filter\_width[float]

Sets the envelope filter bandwidth. [0.5, 9.]

### envelope\_gain[float]

Sets the amplitude of the envelope follower modulator in dB. [-70.6, 36.]

### envelope\_release[float]

Sets the envelope release time in seconds. [0.01, 3.]

### envelope\_threshold[float]

Sets the envelope threshold in dB. [-70.6, 0.]

### feedback\_amount[float]

Sets the amount of feedback. [0., 1.]

### feedback\_delay[float]

Sets the delay time of the feedback stage in seconds. [0.001, 0.5]

### feedback\_frequency[float]

Sets the frequency in Hz of the feedback filter. [50., 18000.]

### feedback\_gate[int]

Enables/disables the feedback gate. The feedback gate ensures that feedback is silenced once no
signal is detected at the input of the object.

### feedback\_invert[int]

Enables/disables inverting the phase of the feedback signal.

### feedback\_width[float]

Sets the width of the bandpass filter in the feedback path. [0.5, 9.]

### filter\_frequency\_1[float]

Filter 1 cutoff frequency (Hz). [20., 20000.]

### filter\_frequency\_2[float]

Filter 2 cutoff frequency (Hz). [20., 20000.]

### filter\_frequency\_3[float]

Filter 3 cutoff frequency (Hz). [20., 20000.]

### filter\_morph\_1[float]

Sets the filter's position in its morph cycle. The morph filter can be continuously morphed
between low-pass, high-pass, band-pass, and notch filtering. [0., 1.]

### filter\_morph\_2[float]

Sets the filter's position in its morph cycle. The morph filter can be continuously morphed
between low-pass, high-pass, band-pass, and notch filtering. [0., 1.]

### filter\_morph\_3[float]

Sets the filter's position in its morph cycle. The morph filter can be continuously morphed
between low-pass, high-pass, band-pass, and notch filtering. [0., 1.]

### filter\_peak\_gain\_1[float]

Boost or attenuate a specific frequency range for the stage 1 peak filter. [-12., 12.]

### filter\_peak\_gain\_2[float]

Boost or attenuate a specific frequency range for the stage 2 peak filter. [-12., 12.]

### filter\_peak\_gain\_3[float]

Boost or attenuate a specific frequency range for the stage 3 peak filter. [-12., 12.]

### filter\_resonance\_1[float]

Filter 1 resonance. [0., 1.]

### filter\_resonance\_2[float]

Filter 2 resonance. [0., 1.]

### filter\_resonance\_3[float]

Filter 3 resonance. [0., 1.]

### filter\_type\_1[int]

Filter 1 Type

Possible values:

0 = 'Lowpass'

1 = 'Bandpass'

2 = 'Highpass'

3 = 'Notch'

4 = 'Peak'

5 = 'Morph'

6 = 'Comb'

7 = 'Resampling'

### filter\_type\_2[int]

Filter 2 Type

Possible values:

0 = 'Lowpass'

1 = 'Bandpass'

2 = 'Highpass'

3 = 'Notch'

4 = 'Peak'

5 = 'Morph'

6 = 'Comb'

7 = 'Resampling'

### filter\_type\_3[int]

Filter 3 Type

Possible values:

0 = 'Lowpass'

1 = 'Bandpass'

2 = 'Highpass'

3 = 'Notch'

4 = 'Peak'

5 = 'Morph'

6 = 'Comb'

7 = 'Resampling'

### filterpre1[int]

Sets whether the filter processes the input before (1) or after (0) the shaper.

### filterpre2[int]

Sets whether the filter processes the input before (1) or after (0) the shaper.

### filterpre3[int]

Sets whether the filter processes the input before (1) or after (0) the shaper.

### input\_gain[float]

Sets the input gain in dB. [-24., 24.]

### lfo1waveform[int]

Sets the waveform for the LFO 1 modulator.

Possible values:

0 = 'Sine'

1 = 'Triangle'

2 = 'Square'

3 = 'Ramp up'

4 = 'Ramp down'

### lfo2waveform[int]

Sets the waveform for the LFO 2 modulator.

Possible values:

0 = 'Sine'

1 = 'Triangle'

2 = 'Square'

3 = 'Ramp up'

4 = 'Ramp down'

### lfo\_frequency\_1[float]

Sets the LFO 1 frequency in Hz. [0.01, 10.]

### lfo\_frequency\_2[float]

Sets the LFO 2 frequency in Hz. [0.01, 10.]

### lfo\_morph\_1[float]

Sets the amount of morph of the LFO 1 shape. [0., 1.]

### lfo\_morph\_2[float]

Sets the amount of morph of the LFO 2 shape. [0., 1.]

### lfo\_smooth\_1[float]

Sets the amount of smoothing of the LFO 1 shape. [0., 1.]

### lfo\_smooth\_2[float]

Sets the amount of smoothing of the LFO 2 shape. [0., 1.]

### mix[float]

Sets the dry/wet mix of the output signal.

### modmatrixname[symbol]

Sets the name of the dictionary that contains the modulation matrix state.

### noise\_frequency[float]

Sets the noise frequency in Hz. [0.01, 10.]

### noise\_smoothing[float]

Sets the noise smoothing. Only affects noise when in sample and hold mode. [0., 1.]

### noise\_type[int]

Sets the type of noise used in the noise modulator.

Possible values:

0 = 'Simplex'

1 = 'Wander'

2 = 'Sample and hold'

3 = 'Brown'

### output\_gain[float]

Sets the gain of the output signal in dB. [-48., 12.]

### routing[int]

Sets the stage routing.

Possible values:

0 = 'Single'

1 = 'Serial'

2 = 'Parallel'

3 = 'Multiband'

4 = 'Mid-Side'

5 = 'Feedback'

6 = 'Delay'

### shaper\_amount\_1[float]

Shaper 1 amount. [0., 1.]

### shaper\_amount\_2[float]

Shaper 2 amount. [0., 1.]

### shaper\_amount\_3[float]

Shaper 3 amount. [0., 1.]

### shaper\_bias\_1[float]

Shaper 1 amount. [0., 1.]

### shaper\_bias\_2[float]

Shaper 2 amount. [0., 1.]

### shaper\_bias\_3[float]

Shaper 3 amount. [0., 1.]

### shaper\_level\_1[float]

Shaper 1 level in dB. [-24., 24.]

### shaper\_level\_2[float]

Shaper 2 level in dB. [-24., 24.]

### shaper\_level\_3[float]

Shaper 3 level in dB. [-24., 24.]

### shaper\_type\_1[int]

Shaper 1 Type

Possible values:

0 = 'Soft sine'

1 = 'Hard clip'

2 = 'Bit crusher'

3 = 'Diode clipper'

4 = 'Tube preamp'

5 = 'Half wave rectifier'

6 = 'Full wave rectifier'

7 = 'Polynomial'

8 = 'Fractal'

9 = 'Fold tri'

10 = 'Noise inject'

11 = 'Shards'

### shaper\_type\_2[int]

Shaper 2 Type

Possible values:

0 = 'Soft sine'

1 = 'Hard clip'

2 = 'Bit crusher'

3 = 'Diode clipper'

4 = 'Tube preamp'

5 = 'Half wave rectifier'

6 = 'Full wave rectifier'

7 = 'Polynomial'

8 = 'Fractal'

9 = 'Fold tri'

10 = 'Noise inject'

11 = 'Shards'

### shaper\_type\_3[int]

Shaper 3 Type

Possible values:

0 = 'Soft sine'

1 = 'Hard clip'

2 = 'Bit crusher'

3 = 'Diode clipper'

4 = 'Tube preamp'

5 = 'Half wave rectifier'

6 = 'Full wave rectifier'

7 = 'Polynomial'

8 = 'Fractal'

9 = 'Fold tri'

10 = 'Noise inject'

11 = 'Shards'

### tone\_amount[float]

A positive tone amount boosts high frequencies and attenuates low frequencies when the amount.
For negative tone amounts, high frequencies are attenuated and low frequencies are boosted. [-1., 1.]

### tone\_color\_compensation[int]

Compensate the effect of the Tone attribute by applying an inverted version of the same filter
to the output. When tone\_color\_compensation 1, positive Tone values are attenuated before the
Shaper and then boosted again at the output to prevent high frequencies from distorting. When tone\_color\_compensation 0, negative Tone values boost low frequencies before the Shaper, while
positive values boost high frequencies.

### tone\_frequency[float]

Sets the tone frequency for the low shelving filter used in tone control. [80., 2000.]

### ins[symbol]

Declares additional inlets that can be used to control float-type attributes at either event or
signal rate. Any declared attributes already mapped to inlets will be ignored. This attribute can only
be set when the object is instantiated.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### float

Function depends on inlet

### getmod

The modulation matrix state will be output as a dictionary from the third outlet of the object.

### mod

Sets a modulation source, target, and amount.

Available sources are: 'lfo1', 'lfo2', 'env', and 'noise'. Modulation targets are 'input',
'tone\_amount', 'tone\_frequency', 'blend', 'stage1\_amount', 'stage1\_bias', 'stage1\_level',
'stage1\_frequency', 'stage1\_resonance', 'stage1\_morph', 'stage1\_peak', 'stage2\_amount', 'stage2\_bias',
'stage2\_level', 'stage2\_frequency', 'stage2\_resonance', 'stage2\_morph',
'stage2\_peak', 'stage3\_amount', 'stage3\_bias', 'stage3\_level', 'stage3\_frequency', 'stage3\_resonance',
'stage3\_morph', 'stage3\_peak', 'lfo1\_rate', 'lfo1\_morph', 'lfo2\_rate', 'lfo2\_morph', 'noise\_rate',
'feedback\_amount', 'feedback\_time','feedback\_frequency', 'feedback\_bandwidth', 'output', and 'drywet'.

### reset

Reset

### signal

Function depends on inlet

## See Also

| Name | Description |
| --- | --- |
| [abl.device.redux~](https://docs.cycling74.com/reference/abl.device.redux~) | Downsampling and bit-reduction effect |
| [abl.dsp.saturator~](https://docs.cycling74.com/reference/abl.dsp.saturator~) | Saturator |
| [abl.dsp.waveshaper~](https://docs.cycling74.com/reference/abl.dsp.waveshaper~) | Waveshaper |
