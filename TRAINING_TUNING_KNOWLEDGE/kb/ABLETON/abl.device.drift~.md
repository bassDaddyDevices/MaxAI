---
type: ableton
name: "abl.device.drift~"
summary: "Drift synthesizer"
signal: true
url: "https://docs.cycling74.com/reference/abl.device.drift~/"
package: "Ableton DSP"
---
# abl.device.drift~

Drift synthesizer

## Description

Drift synthesizer

## Arguments

None.

## Attributes

### drift[float]

Sets the amount of variation per voice. The variation slightly affects different aspects of the
voice's sound, such as the pitch and filter cutoff. [0., 1.]

### env1attack[float]

Time in seconds needed to travel from the initial value to the peak. [0., 60.]

### env1decay[float]

Time in seconds needed to travel from the peak to the sustain level. [0., 60.]

### env1release[float]

Time in seconds needed to travel back to zero after a note ends. [0.01, 60.]

### env1sustain[float]

The level reached at the end of the decay stage until the note ends. [0., 1.]

### env2attack[float]

Time in seconds needed to travel from the initial value to the peak. [0., 60.]

### env2decay[float]

Time in seconds needed to travel from the peak to the sustain level. [0., 60.]

### env2freq[float]

Sets the frequency of the cycling envelope in Hz. [0.17, 1700.]

### env2hold[float]

Sets how long the cycling envelope will stay at its maximum level. [0., 1.]

### env2mode[int]

Enables/disables whether envelope 2 functions as a cycling envelope.

Possible values:

0 = 'Envelope'

1 = 'Cycling'

### env2release[float]

Time in seconds needed to travel back to zero after a note ends. [0.01, 60.]

### env2sustain[float]

The level reached at the end of the decay stage until the note ends. [0., 1.]

### env2tilt[float]

Sets the midpoint of the cycling envelope. At very low or high values, this also affects the
envelope's slopes. [0., 1.]

### filtermod1amount[float]

Modulates the low-pass filter frequency using the selected modulation source. If set to 1,
the modulation creates a frequency shift of approximately nine octaves. [-1., 1.]

### filtermod2amount[float]

Modulates the low-pass filter frequency using the selected modulation source. If set to 1,
the modulation creates a frequency shift of approximately nine octaves. [-1., 1.]

### filtermodsrc1[int]

Sets a modulation source to modulate the low-pass filter cutoff frequency.

Possible values:

0 = 'Env 1'

1 = 'Env 2 / Cyc'

2 = 'LFO'

3 = 'Key'

4 = 'Velocity'

5 = 'Modwheel'

6 = 'Pressure'

7 = 'Slide'

### filtermodsrc2[int]

Sets a modulation source to modulate the low-pass filter cutoff frequency.

Possible values:

0 = 'Env 1'

1 = 'Env 2 / Cyc'

2 = 'LFO'

3 = 'Key'

4 = 'Velocity'

5 = 'Modwheel'

6 = 'Pressure'

7 = 'Slide'

### filtertracking[float]

Sets the amount of filter modulation based on which note is played. [0., 1.]

### gain[float]

Sets the overall volume of the instrument in dB. [-70.6, 0.]

### glidetime[float]

Adjusts the time in seconds that overlapping notes take to slide their pitch to the next
incoming pitch. Glide is only available if the voice mode is set to mono and notes are played legato.
[0., 2.]

### hpfreq[float]

Defines the high-pass filter's cutoff frequency center. [10., 20500.]

### legato[int]

Enables/disables whether triggering a new voice will change its pitch without retriggering the
envelopes. Legato is only available if the voice mode is set to mono.

### lfoamount[float]

Adjusts the amount of LFO modulation applied to incoming signals. [0., 1.]

### lfofreq[float]

Sets the rate of the LFO in Hz. [0.17, 1700.]

### lfomodamount[float]

Sets how much the LFO amount if modulated by the selected modulation source. [0., 1.]

### lfomodsrc[int]

Sets a source to modulate the LFO amount.

Possible values:

0 = 'Env 1'

1 = 'Env 2 / Cyc'

2 = 'LFO'

3 = 'Key'

4 = 'Velocity'

5 = 'Modwheel'

6 = 'Pressure'

7 = 'Slide'

### lforetrigger[int]

Enables/disables LFO retrigger. When enabled, the LFO restarts at the same phase position each
time a note is triggered.

### lfoshape[int]

Select from among several LFO waveforms. The one-shot waveforms turn the LFO into a one-shot
decay envelope.

Possible values:

0 = 'Sine'

1 = 'Triangle'

2 = 'Saw Up'

3 = 'Saw Down'

4 = 'Square'

5 = 'Sample & hold'

6 = 'Wander'

7 = 'Linear env'

8 = 'Exponential env'

### lpfreq[float]

Defines the low-pass filter's cutoff frequency center. [20., 20000.]

### lpres[float]

Sets the resonance of the low-pass filter. [0., 1.1]

### modamt1[float]

Sets the amount of modulation from modulator 1 [-1., 1.]

### modamt2[float]

Sets the amount of modulation from modulator 2 [-1., 1.]

### modamt3[float]

Sets the amount of modulation from modulator 3 [-1., 1.]

### moddst1[int]

Sets the target of modulator 1

Possible values:

0 = 'None'

1 = 'Osc 1 Gain'

2 = 'Osc 1 Shape'

3 = 'Osc 2 Gain'

4 = 'Osc 2 Detune'

5 = 'Noise Gain'

6 = 'LP Frequency'

7 = 'LP Resonance'

8 = 'HP Frequency'

9 = 'LFO Rate'

10 = 'Cyc Env Rate'

11 = 'Main Volume'

### moddst2[int]

Sets the target of modulator 2

Possible values:

0 = 'None'

1 = 'Osc 1 Gain'

2 = 'Osc 1 Shape'

3 = 'Osc 2 Gain'

4 = 'Osc 2 Detune'

5 = 'Noise Gain'

6 = 'LP Frequency'

7 = 'LP Resonance'

8 = 'HP Frequency'

9 = 'LFO Rate'

10 = 'Cyc Env Rate'

11 = 'Main Volume'

### moddst3[int]

Sets the target of modulator 3

Possible values:

0 = 'None'

1 = 'Osc 1 Gain'

2 = 'Osc 1 Shape'

3 = 'Osc 2 Gain'

4 = 'Osc 2 Detune'

5 = 'Noise Gain'

6 = 'LP Frequency'

7 = 'LP Resonance'

8 = 'HP Frequency'

9 = 'LFO Rate'

10 = 'Cyc Env Rate'

11 = 'Main Volume'

### modsrc1[int]

Sets the source for modulator 1.

Possible values:

0 = 'Env 1'

1 = 'Env 2 / Cyc'

2 = 'LFO'

3 = 'Key'

4 = 'Velocity'

5 = 'Modwheel'

6 = 'Pressure'

7 = 'Slide'

### modsrc2[int]

Sets the source for modulator 2.

Possible values:

0 = 'Env 1'

1 = 'Env 2 / Cyc'

2 = 'LFO'

3 = 'Key'

4 = 'Velocity'

5 = 'Modwheel'

6 = 'Pressure'

7 = 'Slide'

### modsrc3[int]

Sets the source for modulator 3.

Possible values:

0 = 'Env 1'

1 = 'Env 2 / Cyc'

2 = 'LFO'

3 = 'Key'

4 = 'Velocity'

5 = 'Modwheel'

6 = 'Pressure'

7 = 'Slide'

### noiseenable[int]

Enables/disables the noise generator.

### noisefilter[int]

Enables/disables filter for the noise generator.

### noisegain[float]

Sets the gain of the noise generator in dB. [-70.6, 6.]

### notepitchbend[int]

Enables/disables per-note pitch bend.

### osc1enable[int]

Enables/disables oscillator 1

### osc1filter[int]

Enables/disables filter for oscillator 1

### osc1gain[float]

Sets the Oscillator 1 gain in dB. If filter processing is on, high oscillator gain values can
cause the filters to recreate some of the behaviors found in analog circuits. [-70.6, 6.]

### osc1octave[int]

Transpose oscillator 1 in octave increments. [-2, 3]

### osc1shape[float]

Morphs the shape of the Oscillator 1 waveform. The shaping effect changes depending on the
selected waveform. [0., 1.]

### osc1shapemod[float]

Sets the amount of modulation of osc1\_shape by osc1shapemodsrc. [0., 1.]

### osc1shapemodsrc[int]

Select the modulation source for osc1\_shape.

Possible values:

0 = 'Env 1'

1 = 'Env 2 / Cyc'

2 = 'LFO'

3 = 'Key'

4 = 'Velocity'

5 = 'Modwheel'

6 = 'Pressure'

7 = 'Slide'

### osc1type[int]

Sets the oscillator 1 waveform shape.

Possible values:

0 = 'Saw'

1 = 'Shark tooth'

2 = 'Triangle'

3 = 'Rectangle'

4 = 'Pulse'

5 = 'Quadratic sine'

6 = 'Saturated'

### osc2detune[float]

Sets the pitch of Oscillator 2 in semitones in relation to the global transpose attribute.
[-7., 7.]

### osc2enable[int]

Enables/disables oscillator 2

### osc2filter[int]

Enables/disables filter for oscillator 2

### osc2gain[float]

Sets the Oscillator 2 gain in dB. If filter processing is on, high oscillator gain values can
cause the filters to recreate some of the behaviors found in analog circuits. [-70.6, 6.]

### osc2octave[int]

Transpose oscillator 2 in octave increments. [-2, 3]

### osc2type[int]

Sets the oscillator 2 waveform shape.

Possible values:

0 = 'Saw'

1 = 'Shark tooth'

2 = 'Triangle'

3 = 'Rectangle'

4 = 'Pulse'

5 = 'Quadratic sine'

6 = 'Saturated'

### oscmod1amount[float]

Sets the amount of modulation of both oscillators from oscmod1src. [-1., 1.]

### oscmod2amount[float]

Sets the amount of modulation of both oscillators from oscmod2src. [-1., 1.]

### oscmodsrc1[int]

Select a modulation source to modulate the pitch of both oscillators.

Possible values:

0 = 'Env 1'

1 = 'Env 2 / Cyc'

2 = 'LFO'

3 = 'Key'

4 = 'Velocity'

5 = 'Modwheel'

6 = 'Pressure'

7 = 'Slide'

### oscmodsrc2[int]

Select a modulation source to modulate the pitch of both oscillators.

Possible values:

0 = 'Env 1'

1 = 'Env 2 / Cyc'

2 = 'LFO'

3 = 'Key'

4 = 'Velocity'

5 = 'Modwheel'

6 = 'Pressure'

7 = 'Slide'

### pitchbendrange[float]

Sets the global pitch bend range in semitones. [0, 12]

### retrigger[int]

Enables/disables restarting both oscillators at the same phase position each time a note is
triggered.

### stereospread[float]

Sets how much panning variation is applied across individual voices. [0., 1.]

### thickness[float]

Adjusts the relative volume of the 4 mono voices associated with each note. [0., 1.]

### transpose[float]

Transpose the instrument's global pitch in semitones. [-48, 48]

### unison[float]

Sets how much pitch variation is applied across individual voices. [0., 1.]

### velocityvolume[float]

Sets how much the volume is modulated by incoming MIDI note velocity. [0., 1.]

### voicemode[int]

Sets the instrument's voice mode. Poly offers polyphonic voicing. Mono offers monophonic
voicing. Stereo spreads the voices across the stereo field. Unison slightly detunes each voice
independently from one another.

Possible values:

0 = 'Poly'

1 = 'Mono'

2 = 'Stereo'

3 = 'Unison'

### voices[int]

Sets the maximum number of voices that can be played back at the same time. Note that certain
voice modes can utilize more voices than notes played.

Possible values:

0 = '4'

1 = '8'

2 = '16'

3 = '24'

4 = '32'

### ins[symbol]

Declares additional inlets that can be used to control float-type attributes at either event or
signal rate. Any declared attributes already mapped to inlets will be ignored. This attribute can only
be set when the object is instantiated.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

MIDI Input

### float

MIDI Input

### reset

Reset
