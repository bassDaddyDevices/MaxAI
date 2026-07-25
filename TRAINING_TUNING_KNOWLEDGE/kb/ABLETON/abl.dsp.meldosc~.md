---
type: ableton
name: "abl.dsp.meldosc~"
summary: "Meta-oscillator"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.meldosc~/"
package: "Ableton DSP"
see_also: ["abl.dsp.basicshapes~", "abl.dsp.bitgrunge~", "abl.dsp.bubble~", "abl.dsp.chip~", "abl.dsp.crackle~", "abl.dsp.dualbasicshapes~", "abl.dsp.filterednoise~", "abl.dsp.fmbass~", "abl.dsp.foldfm~", "abl.dsp.harmonicfm~", "abl.dsp.noiseloop~", "abl.dsp.noisyshapes~", "abl.dsp.rain~", "abl.dsp.shepard~", "abl.dsp.simplefm~", "abl.dsp.squarefifth~", "abl.dsp.squaresync~", "abl.dsp.subosc~", "abl.dsp.swarm~", "abl.dsp.tarp~"]
---
# abl.dsp.meldosc~

Meta-oscillator

## Description

The [abl.dsp.meldosc~](https://docs.cycling74.com/reference/abl.dsp.meldosc~) object wraps oscillators used in Live's Meld synthesizer.

## Arguments

### frequency[number] optional

Sets the oscillator frequency. Range: [0.0, 22050.0]

### macro1[number] optional

Sets the value of Macro 1. Range: [0.0, 1.0]

### macro2[number] optional

Sets the value of Macro 2. Range: [0.0, 1.0]

## Attributes

### frequency[float]

Sets the oscillator frequency in Hz. Range: [0.0, 20500.0]

### macro1[float]

Sets Macro 1. Function depends on type. Range: [0.0, 1.0]

Basic shapes: shape.

Bitgrunge: frequency.

Bubble: density.

Chip: tone.

Crackle: density.

Dual basic shapes: shape.

Extratone: pitch.

Filtered noise: frequency.

FM bass (squelch): FM amount.

Fold FM: FM amount.

Harmonic FM: FM amount.

Noiseloop: rate.

Noisy shapes: shape.

Rain: tone.

Shepard's Pi: rate.

Simple FM: FM amount.

Square 5th: 5th amount.

Square sync: freq 1.

Subosc: tone.

Swarm oscillators: motion.

Tarp: decay.

### macro2[float]

Sets Macro 2. Function depends on type. Range: [0.0, 1.0]

Basic shapes: tone.

Bitgrunge: mult.

Bubble: spread.

Chip: rate.

Crackle: intensity.

Dual basic shapes: detune.

Extratone: env amount.

Filtered noise: narrowness.

FM bass (squelch): feedback.

Fold FM: shape.

Harmonic FM: FM ratio.

Noiseloop: fade.

Noisy shapes: rough.

Rain: rate.

Shepard's Pi: width.

Simple FM: FM ratio.

Square 5th: pulse width.

Square sync: freq 2.

Sub: aux.

Swarm oscillators: spacing.

Tarp: tone.

### type[int]

Oscillator type

Possible values:

0 = 'Basic Shapes'
(
Basic Shapes
)
Morphs through classic synth waveforms,
adds overtones or changes the pulse width.

1 = 'Bitgrunge'
(
Bitgrunge
)
A pseudo-random lo-fi square wave
oscillator reminiscent of loading an old
computer game from a tape.

2 = 'Bubble'
(
Bubble
)
A synthesized bubble generator.

3 = 'Chip'
(
Chip
)
A chiptune oscillator which provides pitch,
pulse width and interval.

4 = 'Crackle'
(
Crackle
)
A synthesized crackle generator.

5 = 'Dual Basic Shapes'
(
Dual Basic Shapes
)
Morphs through classic synth waveforms,
adds overtones or changes the pulse width.

6 = 'Extratone'
(
Extratone
)
An oscillator that retriggers a kick drum
oscillator at fast rates to produce
granular-esque tonal sounds.

7 = 'Filtered Noise'
(
Filtered Noise
)
A noise generator with a resonant band-pass
filter.

8 = 'Fold Fm'
(
Fold FM
)
A harmonic FM oscillator with modulation
amounts and wave folding.

9 = 'Harmonic Fm'
(
Harmonic FM
)
A harmonic FM oscillator with modulation
ratio and amount.

10 = 'Noise Loop'
(
Noise Loop
)
An oscillator that loops a noise buffer at fast
rates to produce granular-esque tonal
sounds.

11 = 'Noisy Shapes'
(
Noisy Shapes
)
Morphs through classic synth waveforms
and defines the amount of noise injection.

12 = 'Rain'
(
Rain
)
A rain generator with synthesized drops and
wind.

13 = 'Shepard's Pi'
(
Shepard's Pi
)
A Shepard tone oscillator with depth and
direction.

14 = 'Simple Fm'
(
Simple FM
)
A simple FM oscillator with modulation index
and amount.

15 = 'Square 5th'
(
Square 5th
)
Morphs a square to a square pitched a fifth
above with pulse width adjustment.

16 = 'Square Sync'
(
Square Sync
)
Two synced square waves where the
frequency of each can be defined.

17 = 'Squelch'
(
FM Bass
)
A FM oscillator with modulation index
amount and operator feedback.

18 = 'Sub'
(
Sub
)
A sub oscillator with waveform morphing and
an additional sub (aux).

19 = 'Swarm Saw'
(
Swarm Saw
)
A swarm of saw waves with modulation and
frequency spacing.

20 = 'Swarm Sine'
(
Swarm Sine
)
A swarm of sine waves with modulation and
frequency spacing.

21 = 'Swarm Square'
(
Swarm Square
)
A swarm of square waves with modulation and
frequency spacing.

22 = 'Swarm Triangle'
(
Swarm Triangle
)
A swarm of triangle waves with modulation and
frequency spacing.

23 = 'Tarp'
(
Tarp
)
An impulse/drum oscillator with decay and
tone controls.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### float

First inlet: sets frequency.

Second inlet: sets macro 1.

Third inlet: sets macro 2.

### reset

Resets the oscillator.

### signal

First inlet: sets frequency.

Second inlet: sets macro 1.

Third inlet: sets macro 2.

## See Also

| Name | Description |
| --- | --- |
| [abl.dsp.basicshapes~](https://docs.cycling74.com/reference/abl.dsp.basicshapes~) | Basic shape oscillator |
| [abl.dsp.bitgrunge~](https://docs.cycling74.com/reference/abl.dsp.bitgrunge~) | Bit-grunge oscillator |
| [abl.dsp.bubble~](https://docs.cycling74.com/reference/abl.dsp.bubble~) | Bubble generator |
| [abl.dsp.chip~](https://docs.cycling74.com/reference/abl.dsp.chip~) | Square wave chiptune oscillator |
| [abl.dsp.crackle~](https://docs.cycling74.com/reference/abl.dsp.crackle~) | Crackle sound generator |
| [abl.dsp.dualbasicshapes~](https://docs.cycling74.com/reference/abl.dsp.dualbasicshapes~) | Dual basic shape oscillator |
| [abl.dsp.filterednoise~](https://docs.cycling74.com/reference/abl.dsp.filterednoise~) | Filtered noise generator |
| [abl.dsp.fmbass~](https://docs.cycling74.com/reference/abl.dsp.fmbass~) | Three operator FM oscillator |
| [abl.dsp.foldfm~](https://docs.cycling74.com/reference/abl.dsp.foldfm~) | Wavefolding FM oscillator |
| [abl.dsp.harmonicfm~](https://docs.cycling74.com/reference/abl.dsp.harmonicfm~) | Harmonic FM oscillator |
| [abl.dsp.noiseloop~](https://docs.cycling74.com/reference/abl.dsp.noiseloop~) | Noise buffer looper |
| [abl.dsp.noisyshapes~](https://docs.cycling74.com/reference/abl.dsp.noisyshapes~) | Noisy dual basic shape oscillator |
| [abl.dsp.rain~](https://docs.cycling74.com/reference/abl.dsp.rain~) | Rain sound generator |
| [abl.dsp.shepard~](https://docs.cycling74.com/reference/abl.dsp.shepard~) | Shepard tone oscillator |
| [abl.dsp.simplefm~](https://docs.cycling74.com/reference/abl.dsp.simplefm~) | Two-operator FM oscillator |
| [abl.dsp.squarefifth~](https://docs.cycling74.com/reference/abl.dsp.squarefifth~) | Morphing square wave oscillator |
| [abl.dsp.squaresync~](https://docs.cycling74.com/reference/abl.dsp.squaresync~) | Dual square wave oscillator |
| [abl.dsp.subosc~](https://docs.cycling74.com/reference/abl.dsp.subosc~) | Oscillator with sub bass |
| [abl.dsp.swarm~](https://docs.cycling74.com/reference/abl.dsp.swarm~) | Multi-oscillator swarm |
| [abl.dsp.tarp~](https://docs.cycling74.com/reference/abl.dsp.tarp~) | Kick/bass oscillator |
