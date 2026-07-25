---
type: ableton
name: "abl.device.drumsampler~"
summary: "Drum sampler"
signal: true
url: "https://docs.cycling74.com/reference/abl.device.drumsampler~/"
package: "Ableton DSP"
see_also: ["groove~", "play~", "wave~"]
---
# abl.device.drumsampler~

Drum sampler

## Description

A monophonic sampler with various effect processors.

## Arguments

### buffer-name[symbol] optional

Initial buffer~ from which to read.

### buffer-name[symbol] optional

Initial buffer~ from which to read.

## Attributes

### attack[float]

Sets the time needed to travel from the initial level to the peak level in seconds.

### cutoff[float]

Sets the filter cutoff frequency in Hz.

### decay[float]

Sets the amount of time in seconds for the envelope to travel from the peak level to zero.

### detune[float]

Sets the global detune amount in cents.

### eightbitdecay[float]

Sets the decay time for the internal low-pass filter of the 8-bit effect.

### eightbitrate[float]

Sets the sample rate to be used to play back the sample.

### envtype[int]

Sets the envelope mode

Possible values:

0 = 'ASR'
(
Attack-Sustain-Release
)
A gated envelope which releases after the note finishes

1 = 'AHD'
(
Attack-Hold-Decay
)
A triggered envelope which decays after a set hold time

### filter[int]

Enable or disable the filter section

### filtertype[int]

Sets the filter type

Possible values:

0 = 'Lowpass 12dB'

1 = 'Lowpass 24dB'

2 = 'Highpass 24dB'

3 = 'Peak'

### fm[float]

Sets the amount of frequency modulation applied to the sample.

### fmfreq[float]

Sets the frequency used to modulate the sample's pitch. Note that the frequency will be adjusted based
on
the global pitch controls and the MIDI note played.

### fx[int]

Enable or disable playback effects.

### fxtype[int]

Sets the type of playback effect.

Possible values:

0 = 'Stretch'

1 = 'Loop'

2 = 'Pitch Envelope'

3 = 'Punch'

4 = '8-Bit'

5 = 'FM'

6 = 'Ring Mod'

7 = 'SubOsc'

8 = 'Noise'

### gain[float]

Sets the sample gain in dB.

### hold[float]

Sets the amount of time in seconds that the amplitude will be kept at the peak level after reaching the
attack time. This has no effect when the envelope mode is set to gate.

### length[float]

Sets the length of the sample region that is played, calculated as a percentage of the sample's length.

### looplength[float]

Sets the length of the loop. Note that the loop length will be adjusted based on the global pitch
controls and the MIDI note played.

### loopoffset[float]

Sets the loop start point in relation to the sample start point. Note that the loop offset will be
adjusted based on the global pitch controls and MIDI note played.

### mod[float]

Sets the modulation amount.

### moddst[int]

Sets the modulation target/destination.

Possible values:

0 = 'Filter Cutoff'

1 = 'Attack'

2 = 'Hold'

3 = 'Decay'

4 = 'FX1'

5 = 'FX2'

### modsrc[int]

Sets the modulation source.

Possible values:

0 = 'Velocity'

1 = 'Slide'

### noise[float]

Sets the level of the noise oscillator. Note that the oscillator's envelope uses the global attack and
decay settings.

### noisecolor[float]

Sets the frequency used to filter the noise oscillator. Note that the frequency will be adjusted based
on
the global pitch controls and the MIDI note played.

### pan[float]

Sets the global panning.

### peak[float]

Sets the peak gain in dB for the peak filter.

### pitchenv[float]

Sets the amount of pitch modulation applied to the sample. Positive or negative values can be used,
resulting in higher or lower pitch, respectively.

### pitchenvdecay[float]

Sets the time required for the pitch to go back to the base value as determined by the pitch controls.

### punch[float]

Sets the amount of ducking applied to the sample.

### punchrelease[float]

Sets the time in seconds for the gain reduction to fall back to zero after the initial trigger.

### res[float]

Sets the filter resonance for the lowpass or highpass filter.

### rm[float]

Sets the amount of ring modulation applied to the sample.

### rmfreq[float]

Sets the frequency used to modulate the sample's amplitude. Low values create a tremolo effect while
high
values add typical ring modulation artifacts. Note that the frequency will be adjusted based on the
global pitch controls and the MIDI note played.

### start[float]

Sets the sample start point, calculated as a percentage of the sample length.

### stretchfactor[float]

Sets the amount of time-stretching as a factor of the original playback speed.

### stretchgrain[float]

Sets the the size of the grain (in seconds) used to time-stretch the sample.

### subosc[float]

Sets the level of the sub oscillator. Note that the oscillator's envelope uses the global attack and
decay settings.

### suboscfreq[float]

Sets the sub oscillator frequency. Note that the frequency will be adjusted based on the global pitch
controls and the MIDI note played.

### transpose[float]

Sets the global transposition amount in semitones.

### vel[float]

Sets how much the volume will be modulated by incoming MIDI note velocity.

### volume[float]

Sets the global volume in dB.

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

Function depends on inlet

### (mouse)

Double click to view associated buffer~

### reset

Reset the processor

### set

Sets a new associated buffer~

## See Also

| Name | Description |
| --- | --- |
| [groove~](https://docs.cycling74.com/reference/groove~) | Variable-rate looping sample playback |
| [play~](https://docs.cycling74.com/reference/play~) | Position-based sample playback |
| [wave~](https://docs.cycling74.com/reference/wave~) | Variable size wavetable |
