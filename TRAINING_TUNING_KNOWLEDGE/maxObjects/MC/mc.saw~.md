---
type: mc
name: "mc.saw~"
summary: "Antialiased sawtooth oscillator  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.saw~/"
package: "MC"
see_also: ["cycle~", "phasor~", "rect~", "saw~", "techno~", "tri~"]
---
# mc.saw~

Antialiased sawtooth oscillator (multichannel)

## Description

Use the [saw~](https://docs.cycling74.com/reference/saw~) object to generate an anti-aliased sawtooth wave.

## Arguments

### initial-frequency[number]hz optional

Sets the initial frequency of the oscillator. The default is 0.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: Sets the frequency of the oscillator.

Arguments:

- frequency
  [int]

### float

In left inlet: Sets the frequency of the oscillator.

Arguments:

- frequency
  [float]

### signal

In left inlet: Sets the frequency of the oscillator.

In right inlet: (optional) A sync signal. When the control signal crosses from below 0.5 to above 0.5, the oscillator resets itself. A [phasor~](https://docs.cycling74.com/reference/phasor~) object works well for this purpose. The classic use is to set this control signal to your fundamental frequency and "sweep" the left frequency input in a range somewhere several octaves higher than the fundamental.

### synctrig

Sets the value which an input signal crosses at which the oscillator will reset itself.

Arguments:

- trigger-value
  [float]

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

An antialiased sawtooth waveform. An ideal, straight-line sawtooth wave generated in a computer contains aliased frequencies that can sound irritating. [saw~](https://docs.cycling74.com/reference/saw~) produces a nice, analog-esque output waveform.

## See Also

| Name | Description |
| --- | --- |
| [cycle~](https://docs.cycling74.com/reference/cycle~) | Sinusoidal oscillator |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [rect~](https://docs.cycling74.com/reference/rect~) | Antialiased rectangular (pulse) oscillator |
| [saw~](https://docs.cycling74.com/reference/saw~) | Antialiased sawtooth oscillator |
| [techno~](https://docs.cycling74.com/reference/techno~) | Signal-driven step sequencer |
| [tri~](https://docs.cycling74.com/reference/tri~) | Antialiased triangular oscillator |
