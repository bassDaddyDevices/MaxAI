---
type: ableton
name: "abl.dsp.stereolfo~"
summary: "Stereo low-frequency oscillator"
signal: true
url: "https://docs.cycling74.com/reference/abl.dsp.stereolfo~/"
package: "Ableton DSP"
---
# abl.dsp.stereolfo~

Stereo low-frequency oscillator

## Description

An LFO with two output channels.

## Arguments

### frequency[number] optional

Oscillator frequency

### phase[number] optional

Normalized phase offset

### frequency[number] optional

Oscillator frequency

### phase[number] optional

Normalized phase offset

## Attributes

### duty[float]

Sets the warping of the LFO waveform. Values between -1 and 0 stretch the start of the waveform
and compress the end. Values between 0 and 1 compress the start and compress the end.

### enablespin[int]

When spin is on, stereo phase offset is disabled. Spin allows changing the relative frequencies
of the left and right channels by a given spin factor.

### frequency[float]

Frequency

### phase[float]

Sets the normalized phase. This sets the global phase offset for both output channels.
See

### spin[float]

Sets the factor by which the right channel LFO will be faster than the left. For example, if spin is
0.5, the right frequency is 1.5 \* left frequency.

### stereophase[float]

Sets the phase offset for the right channel LFO (in degrees).

### waveform[int]

Sets the waveform shape.

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

### ins[symbol]

Declares additional inlets that can be used to control float-type attributes at either event or
signal rate. Any declared attributes already mapped to inlets will be ignored. This attribute can only
be set when the object is instantiated.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### float

Left inlet: sets frequency

Inlet 2: sets phase.

### reset

Resets the phase to zero.

### signal

Function depends on inlet
