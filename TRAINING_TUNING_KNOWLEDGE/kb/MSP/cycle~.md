---
type: msp
name: "cycle~"
summary: "Sinusoidal oscillator"
signal: true
url: "https://docs.cycling74.com/reference/cycle~/"
package: "MSP"
see_also: ["buffer~", "buffir~", "cos~", "line~", "phasor~", "rect~", "saw~", "techno~", "trapezoid~", "tri~", "triangle~", "wave~", "2d.wave~"]
---
# cycle~

Sinusoidal oscillator

## Description

Use the [cycle~](https://docs.cycling74.com/reference/cycle~) object to generate a periodic waveform. The default waveform is one cycle of a cosine wave. You can also use the [wave~](https://docs.cycling74.com/reference/wave~) object, which offers additional flexibility though slightly less optimization.

#### Discussion

The [cycle~](https://docs.cycling74.com/reference/cycle~) object is an interpolating oscillator that reads repeatedly through one cycle of a waveform, using a wavetable. The wavetable can be changed using the 'set' message. This wavetable may be of any size, but historically was limited to 512 samples.

## Arguments

### frequency[number]hz optional

Oscillator frequency (initial)
The initial frequency of the oscillator

### buffer-name[symbol] optional

The name of a [buffer~](https://docs.cycling74.com/reference/buffer~) object used to define the oscillator's wavetable. If a frequency argument is present, the [buffer~](https://docs.cycling74.com/reference/buffer~) name follows the frequency. If no [buffer~](https://docs.cycling74.com/reference/buffer~) name is given, [cycle~](https://docs.cycling74.com/reference/cycle~) uses an internal 64-bit 16K cosine wavetable.

### sample-offset[int] optional

If a [buffer~](https://docs.cycling74.com/reference/buffer~) name has been given, this defines the sample offset into the named [buffer~](https://docs.cycling74.com/reference/buffer~) object's sample memory. [cycle~](https://docs.cycling74.com/reference/cycle~) only uses the first channel of a multi-channel [buffer~](https://docs.cycling74.com/reference/buffer~).

## Attributes

### buffer[symbol]

Buffer containing an external waveform. Setting the [buffer~](https://docs.cycling74.com/reference/buffer~) with the attribute is analogous to sending the  setall  message.

### buffer\_offset[atom\_long]

First sample of a buffer (if an external buffer is providing the waveform)

### buffer\_sizeinsamps[atom\_long]

Override the size of the buffer used for the wavetable. If using the  set  message the size will be 512, or if using the  setall  message the size will be the whole [buffer~](https://docs.cycling74.com/reference/buffer~) length. Use this attribute to define a different size (the size should be a power of two). Setting this size to 0 will result in an effective size of 512 and setting it to -1 will result an effective size of the whole [buffer~](https://docs.cycling74.com/reference/buffer~) length.

Possible values:

'-1'

'0'

'16'

'32'

'64'

'128'

'256'

'512'

'1024'

'2048'

'4096'

'8192'

'16384'

'32768'

'65536'

### frequency[float]

Oscillator frequency

### phase[float]

Phase offset

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### float

Left inlet: frequency of the oscillator

Right inlet: phase of the oscillator in the range 0.0 to 1.0

Arguments:

- frequency-or-phase
  [float]

### (mouse)

Double-click to display [buffer~](https://docs.cycling74.com/reference/buffer~) contents

### reset

In the left inlet, the  reset  message, followed by a float from 0 - 1, resets the phase of the [cycle~](https://docs.cycling74.com/reference/cycle~) object. Signal output continues from the specified phase. If you have multiple [cycle~](https://docs.cycling74.com/reference/cycle~) objects that are out of phase, sending them all the  reset  message will synchronize them.

Arguments:

- phase
  [float]

### set

Set a [buffer~](https://docs.cycling74.com/reference/buffer~) object to use as the wavetable, using the first 512 samples. If no name is given, the internal cosine wavetable with 16K samples will be used. Use the  setall  message to use an entire [buffer~](https://docs.cycling74.com/reference/buffer~) as a wavetable.

Arguments:

- buffer-name
  [symbol]
- sample-offset
  [int]

### setall

Set a [buffer~](https://docs.cycling74.com/reference/buffer~) object to use as the wavetable, using the entire [buffer~](https://docs.cycling74.com/reference/buffer~) length. This is in contrast to the  set  message which only uses the first 512 samples of the [buffer~](https://docs.cycling74.com/reference/buffer~).

Arguments:

- value
  [symbol]

### signal

Left inlet: frequency of the oscillator

Right inlet: phase of the oscillator in the range 0.0 to 1.0

## Output

### signal

A waveform (cosine by default) repeating at the specified frequency, with the specified phase.

## See Also

| Name | Description |
| --- | --- |
| [buffer~](https://docs.cycling74.com/reference/buffer~) | Store audio samples |
| [buffir~](https://docs.cycling74.com/reference/buffir~) | buffer-based FIR filter |
| [cos~](https://docs.cycling74.com/reference/cos~) | Signal cosine function (0-1 range) |
| [line~](https://docs.cycling74.com/reference/line~) | Linear signal ramp generator |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [rect~](https://docs.cycling74.com/reference/rect~) | Antialiased rectangular (pulse) oscillator |
| [saw~](https://docs.cycling74.com/reference/saw~) | Antialiased sawtooth oscillator |
| [techno~](https://docs.cycling74.com/reference/techno~) | Signal-driven step sequencer |
| [trapezoid~](https://docs.cycling74.com/reference/trapezoid~) | Trapezoidal wavetable |
| [tri~](https://docs.cycling74.com/reference/tri~) | Antialiased triangular oscillator |
| [triangle~](https://docs.cycling74.com/reference/triangle~) | Triangle/ramp wavetable |
| [wave~](https://docs.cycling74.com/reference/wave~) | Variable size wavetable |
| [2d.wave~](https://docs.cycling74.com/reference/2d.wave~) | Two-dimensional wavetable |
