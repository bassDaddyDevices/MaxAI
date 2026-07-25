---
type: mc
name: "mc.trapezoid~"
summary: "Trapezoidal wavetable (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.trapezoid~/"
package: "MC"
see_also: ["buffer~", "cos~", "phasor~", "updown~", "wave~"]
---
# mc.trapezoid~

Trapezoidal wavetable (multichannel)

## Description

[trapezoid~](https://docs.cycling74.com/reference/trapezoid~) is a trapezoidal wavetable with signal inputs to change ramp up/down phase position. The default lo/hi points are 0. and 1., but may be changed using the lo/hi messages.

## Arguments

### ramp-up[float] optional

A floating-point value can be used to specify the ramp up value. The arguments  0. 0.  produce a ramp waveform, and  0.5 0.5  produces a triangle waveform.

### ramp-down[float] optional

A floating-point value can be used to specify the ramp down value. The arguments  0. 0.  produce a ramp waveform, and  0.5 0.5  produces a triangle waveform.

## Attributes

### hi[float]

Sets the maximum value of [trapezoid~](https://docs.cycling74.com/reference/trapezoid~) for signal output. The default value is  1.0

### lo[float]

Sets the minimum value of [trapezoid~](https://docs.cycling74.com/reference/trapezoid~) for signal output. The default value is  0.

### wrapmode[int]: 1

Controls how the leftmost phase signal input is handled when it is outside the range 0 - 1.

Possible values:

0 = 'Clip'
(
Clip input
)
When wrapmode is set to 0 (Clip), the phase is clipped to stay between 0 and 1.

1 = 'Wrap'
(
Wrap Input
)
When wrapmode is set to 1 (Wrap), phase values above 1 use the decimal part of the number only. For example, an input of 4.3 will be treated as 0.3. Phase values below 0 will have the decimal part of the value subtracted from 1. For example an input of -0.4 will be treated as 0.6.

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### float

In left inlet: Any float or signal or an input signal progressing from 0 to 1 is used to scan the [trapezoid~](https://docs.cycling74.com/reference/trapezoid~) object's wavetable. The output of a [phasor~](https://docs.cycling74.com/reference/phasor~) or some other audio signal can be used to control [trapezoid~](https://docs.cycling74.com/reference/trapezoid~) as an oscillator, treating the contents of the wavetable as a repeating waveform.

In middle inlet: The ramp up portion of the trapezoidal waveform, specified as a fraction of a cycle between 0 and 1.0. The default is .1.

In right inlet: The ramp up portion of the trapezoidal waveform, specified as a fraction of a cycle between 0 and 1.0. The default is 0.9.

Arguments:

- trapezoidal-control
  [float]

### signal

In left inlet: Any float or signal or an input signal progressing from 0 to 1 is used to scan the [trapezoid~](https://docs.cycling74.com/reference/trapezoid~) object's wavetable. The output of a [phasor~](https://docs.cycling74.com/reference/phasor~) or some other audio signal can be used to control [trapezoid~](https://docs.cycling74.com/reference/trapezoid~) as an oscillator, treating the contents of the wavetable as a repeating waveform.

In middle inlet: The ramp up portion of the trapezoidal waveform, specified as a fraction of a cycle between 0 and 1.0. The default is .1.

In right inlet: The ramp up portion of the trapezoidal waveform, specified as a fraction of a cycle between 0 and 1.0. The default is 0.9.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

A signal which corresponds to the value referenced by the [trapezoid~](https://docs.cycling74.com/reference/trapezoid~) object's input signal. If the output of a [phasor~](https://docs.cycling74.com/reference/phasor~) or some other audio signal is used to scan the [trapezoid~](https://docs.cycling74.com/reference/trapezoid~) object, the output will be a periodic waveform.

## See Also

| Name | Description |
| --- | --- |
| [buffer~](https://docs.cycling74.com/reference/buffer~) | Store audio samples |
| [cos~](https://docs.cycling74.com/reference/cos~) | Signal cosine function (0-1 range) |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [updown~](https://docs.cycling74.com/reference/updown~) | Trapezoidal Function Generator With Constant Attack and Release |
| [wave~](https://docs.cycling74.com/reference/wave~) | Variable size wavetable |
