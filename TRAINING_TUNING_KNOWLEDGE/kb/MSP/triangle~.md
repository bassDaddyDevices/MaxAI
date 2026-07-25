---
type: msp
name: "triangle~"
summary: "Triangle/ramp wavetable"
signal: true
url: "https://docs.cycling74.com/reference/triangle~/"
package: "MSP"
see_also: ["buffer~", "cos~", "phasor~", "trapezoid~", "tri~", "wave~"]
---
# triangle~

Triangle/ramp wavetable

## Description

[triangle~](https://docs.cycling74.com/reference/triangle~) is a triangle/ramp wavetable with signal input to change phase offset of the peak value. The default lo/hi points are -1. and 1., but may be changed using the lo/hi messages.

## Arguments

### peak-value-phase-offset[float] optional

Peak value phase offset, expressed as a fraction of a cycle, from 0 to 1.0. The default is  0.5 . A value of 0 produces a ramp waveform when the triangle~ object is driven by a [phasor~](https://docs.cycling74.com/reference/phasor~), and a value of 1.0 produces a sawtooth waveform.

## Attributes

### hi[float]

Sets the maximum value of [triangle~](https://docs.cycling74.com/reference/triangle~) for signal output. The default value is  1.0

### lo[float]

Sets the minimum value of [triangle~](https://docs.cycling74.com/reference/triangle~) for signal output. The default value is -1.0

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### float

In left inlet: Any signal, float, or an input signal progressing from 0 to 1 is used to scan the [triangle~](https://docs.cycling74.com/reference/triangle~) object's wavetable. The output of a [phasor~](https://docs.cycling74.com/reference/phasor~) or some other audio signal can be used to control [triangle~](https://docs.cycling74.com/reference/triangle~) as an oscillator, treating the contents of the wavetable as a repeating waveform.

In right inlet: Peak value phase offset, expressed as a fraction of a cycle, from 0 to 1.0. The default is 0.5. Scanning through the [triangle~](https://docs.cycling74.com/reference/triangle~) object's wavetable using output of a [phasor~](https://docs.cycling74.com/reference/phasor~) with a phase offset value of 0 produces a ramp waveform, and a phase offset of 1.0 produces a sawtooth waveform.

Arguments:

- triangular-control
  [float]

### signal

In left inlet: Any signal, float, or an input signal progressing from 0 to 1 is used to scan the [triangle~](https://docs.cycling74.com/reference/triangle~) object's wavetable. The output of a [phasor~](https://docs.cycling74.com/reference/phasor~) or some other audio signal can be used to control [triangle~](https://docs.cycling74.com/reference/triangle~) as an oscillator, treating the contents of the wavetable as a repeating waveform.

In right inlet: Peak value phase offset, expressed as a fraction of a cycle, from 0 to 1.0. The default is 0.5. Scanning through the [triangle~](https://docs.cycling74.com/reference/triangle~) object's wavetable using output of a [phasor~](https://docs.cycling74.com/reference/phasor~) with a phase offset value of 0 produces a ramp waveform, and a phase offset of 1.0 produces a sawtooth waveform.

## Output

### signal

A signal which corresponds to the value referenced by the [triangle~](https://docs.cycling74.com/reference/triangle~) object's input signal. If the output of a [phasor~](https://docs.cycling74.com/reference/phasor~) or some other audio signal is used to scan the [triangle~](https://docs.cycling74.com/reference/triangle~) object, the output will be a periodic waveform.

## See Also

| Name | Description |
| --- | --- |
| [buffer~](https://docs.cycling74.com/reference/buffer~) | Store audio samples |
| [cos~](https://docs.cycling74.com/reference/cos~) | Signal cosine function (0-1 range) |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [trapezoid~](https://docs.cycling74.com/reference/trapezoid~) | Trapezoidal wavetable |
| [tri~](https://docs.cycling74.com/reference/tri~) | Antialiased triangular oscillator |
| [wave~](https://docs.cycling74.com/reference/wave~) | Variable size wavetable |
