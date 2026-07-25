---
type: ableton
name: "abl.dsp.phaser~"
summary: "Phaser"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.phaser~/"
package: "Ableton DSP"
see_also: ["abl.dsp.doubler~", "abl.dsp.flanger~"]
---
# abl.dsp.phaser~

Phaser

## Description

Stereo phaser effect

## Arguments

### mod[number] optional

Modulation amount

### feedback[number] optional

Feedback

### center[number] optional

Center frequency

### spread[number] optional

Spread

### blend[number] optional

Modulation blend

## Attributes

### bass\_freq[float]

Reduces the effect's strength on signal components below the specified frequency. [5., 3000.]

### blend[float]

Sets the amount of blend between center frequency and spread. [0., 1.]

### center[float]

Sets the phaser's notches' center frequency in Hz. [70., 18500.]

### duty[float]

Sets the duty cycle of the LFO waveform. [0., 1.]

### env\_amount[float]

Sets the intensity of the envelope follower. [-1., 1.]

### env\_attack[float]

Sets how quickly the envelope follower responds to rising input levels. [0.0001, 0.03]

### env\_release[float]

Sets how quickly the envelope follower responds to falling input levels. [0.001, 0.4]

### envelope[int]

Enables/disables the envelope follower.

### feedback[float]

Sets the amount of feedback from the output to the input. [0., 1.]

### invert[int]

Inverts the polarity of the feedback signal.

### lfo\_2\_freq[float]

Sets the rate of the second LFO's modulation in Hz. [0.001, 5.]

### lfo\_blend[float]

Sets the amount of the second LFO that is mixed with the first LFO. [0., 1.]

### mix[float]

Sets the dry/wet mix of the output signal

### mod[float]

Sets the amount of LFO modulation applied to incoming signals. [0., 1.]

### mod\_freq[float]

Sets the rate of LFO modulation in Hz. [0.001, 5.]

### notches[int]

Sets the number of notches created in the frequency spectrum. [1, 42]

### spin[float]

Spin detunes the two LFO speeds relative to each other. [0., 1.]

### spread[float]

Sets the spacing between the notches in the frequency spectrum. [0., 1.]

### stereo[int]

Sets the type of stereo LFO offset.
Possible values:

0 = 'Phase'

1 = 'Spin'

### stereo\_phase[float]

Sets the amount of offset between the waveforms for the left and right channel. At 180 degrees,
the LFOs will be perfectly out of phase. [0., 360.]

### warmth[float]

Add slight distortion and filtering for a warmer sound. [0., 1.]

### waveform[int]

Sets the waveform of the LFO modulation.
Possible values:

0 = 'Sine'

1 = 'Triangle'

2 = 'Analog triangle'

3 = 'Triangle 8-step'

4 = 'Triangle 16-step'

5 = 'Saw up'

6 = 'Saw down'

7 = 'Square'

8 = 'Random'

9 = 'Random sample-and-hold'

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
| [abl.dsp.doubler~](https://docs.cycling74.com/reference/abl.dsp.doubler~) | Doubler |
| [abl.dsp.flanger~](https://docs.cycling74.com/reference/abl.dsp.flanger~) | Flanger |
