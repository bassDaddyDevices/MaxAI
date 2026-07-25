---
type: msp
name: "rect~"
summary: "Antialiased rectangular (pulse) oscillator"
signal: true
url: "https://docs.cycling74.com/reference/rect~/"
package: "MSP"
see_also: ["cycle~", "phasor~", "saw~", "techno~", "tri~"]
---
# rect~

Antialiased rectangular (pulse) oscillator

## Description

Use the [rect~](https://docs.cycling74.com/reference/rect~) object to generate an anti-aliased rectangle wave.

## Arguments

### frequency[number] optional

First argument sets the initial frequency of the oscillator. The default is 0.

### pulse-width[number] optional

An optional second argument sets the pulse width. The default is 0.5.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In left inlet: Sets the frequency of the oscillator.

In middle inlet: Sets the pulse width of the oscillator. Signal is wrapped into the range 0-1. A value of 0.5 will produce a rectangular wave that spends equal amounts of time on the positive and negative edges of its cycle.

Arguments:

- frequency
  [int]

### float

In left inlet: Sets the frequency of the oscillator.

In middle inlet: Sets the pulse width of the oscillator. Signal is wrapped into the range 0-1. A value of 0.5 will produce a rectangular wave that spends equal amounts of time on the positive and negative edges of its cycle.

Arguments:

- frequency
  [float]

### signal

In left inlet: Sets the frequency of the oscillator.

In middle inlet: Sets the pulse width of the oscillator. Signal is wrapped into the range 0-1. A value of 0.5 will produce a rectangular wave that spends equal amounts of time on the positive and negative edges of its cycle.

In right inlet: (optional) A sync signal. When the control signal crosses from below 0.5 to above 0.5, the oscillator resets itself. A [phasor~](https://docs.cycling74.com/reference/phasor~) object works well for this purpose. The classic use is to set this control signal to your fundamental frequency and "sweep" the left frequency input in a range somewhere several octaves higher than the fundamental.

### synctrig

The word  synctrig  followed by a floating-point number changes the value at which the object resets itself (i.e., when the input signal crosses from below the specified number to being above it, [rect~](https://docs.cycling74.com/reference/rect~) will reset itself).

Arguments:

- sync-value (0 through 1)
  [float]

## Output

### signal

An antialiased rectangular waveform. An ideal, straight-line rectangular wave generated in a computer contains aliased frequencies that can sound irritating. [rect~](https://docs.cycling74.com/reference/rect~) produces a nice, analog-esque output waveform.

## See Also

| Name | Description |
| --- | --- |
| [cycle~](https://docs.cycling74.com/reference/cycle~) | Sinusoidal oscillator |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [saw~](https://docs.cycling74.com/reference/saw~) | Antialiased sawtooth oscillator |
| [techno~](https://docs.cycling74.com/reference/techno~) | Signal-driven step sequencer |
| [tri~](https://docs.cycling74.com/reference/tri~) | Antialiased triangular oscillator |
