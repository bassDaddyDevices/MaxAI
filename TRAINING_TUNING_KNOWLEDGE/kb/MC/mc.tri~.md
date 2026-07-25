---
type: mc
name: "mc.tri~"
summary: "Antialiased triangular oscillator  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.tri~/"
package: "MC"
see_also: ["cycle~", "phasor~", "rect~", "saw~", "techno~", "triangle~"]
---
# mc.tri~

Antialiased triangular oscillator (multichannel)

## Description

[tri~](https://docs.cycling74.com/reference/tri~) generates a triangle wave whose component frequencies are resistant to aliasing.

## Arguments

### initial-frequency[number]hz optional

The first argument sets the initial frequency of the oscillator. The default is 0.

### duty-cycle[float] optional

The second argument sets the duty cycle. The default is 0.5. Input values are constrained to be between 0.05 and 0.95.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: Sets the frequency of the oscillator.

In middle inlet: Sets the duty cycle of the oscillator. Signal is wrapped into the range 0-1. A value of 0.5 will produce a triangular wave that spends equal amounts of time sloping positively and negatively. Input values are constrained to be between 0.05 and 0.95.

Arguments:

- frequency
  [int]

### float

In left inlet: Sets the frequency of the oscillator.

In middle inlet: Sets the duty cycle of the oscillator. Signal is wrapped into the range 0-1. A value of 0.5 will produce a triangular wave that spends equal amounts of time sloping positively and negatively. Input values are constrained to be between 0.05 and 0.95.

Arguments:

- frequency
  [float]

### signal

In left inlet: Sets the frequency of the oscillator.

In middle inlet: Sets the duty cycle of the oscillator. Signal is wrapped into the range 0-1. A value of 0.5 will produce a triangular wave that spends equal amounts of time sloping positively and negatively. Input values are constrained to be between 0.05 and 0.95.

In right inlet: (optional) A sync signal. When the control signal crosses from below 0.5 to above 0.5, the oscillator resets itself. A [phasor~](https://docs.cycling74.com/reference/phasor~) object works well for this purpose. The classic use is to "sweep" this control signal in a frequency range somewhere at least three or four octaves higher than the fundamental frequency.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

An antialiased triangular waveform. An ideal, straight-line triangular wave generated in a computer contains aliased frequencies that can sound irritating. [tri~](https://docs.cycling74.com/reference/tri~) produces a nice, analog-esque output waveform.

## See Also

| Name | Description |
| --- | --- |
| [cycle~](https://docs.cycling74.com/reference/cycle~) | Sinusoidal oscillator |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [rect~](https://docs.cycling74.com/reference/rect~) | Antialiased rectangular (pulse) oscillator |
| [saw~](https://docs.cycling74.com/reference/saw~) | Antialiased sawtooth oscillator |
| [techno~](https://docs.cycling74.com/reference/techno~) | Signal-driven step sequencer |
| [triangle~](https://docs.cycling74.com/reference/triangle~) | Triangle/ramp wavetable |
