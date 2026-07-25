---
type: mc
name: "mc.kink~"
summary: "Distort a sawtooth waveform  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.kink~/"
package: "MC"
see_also: ["phasor~", "triangle~"]
---
# mc.kink~

Distort a sawtooth waveform (multichannel)

## Description

[kink~](https://docs.cycling74.com/reference/kink~) takes [phasor~](https://docs.cycling74.com/reference/phasor~) values and distorts them according to a slope factor. If the input times the slope is less than 0.5, that value is output. Otherwise, a complentary slope is used, equal to 0.5 at the same input value but equal to 1 when the input is 1. This creates a bend or "kink" in the phase waveform when the slope is not equal to 1.

#### Discussion

If you feed the output of [kink~](https://docs.cycling74.com/reference/kink~) into a [cycle~](https://docs.cycling74.com/reference/cycle~), the result is that the first part (before the kink) of the wavetable is scanned much more quickly than the second part (after the kink).

## Arguments

### slope-multiplier[float] optional

Sets the default slope multiplier. If a signal is attached to the right inlet, this argument is ignored.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Converted to  int ; In right inlet: The multiplier that affects the slope of the output between an output (Y) value of 0 and 0.5. After the output reaches 0.5, the waveform will increase to 1 so that the entire output moves from 0 to 1 in the same period of time as the input. A slope multiplier of 1(the default) produces no distortion Slope multipliers below 1 have a slower rise to 0.5 than the input, and slope multipliers above 1 have a faster rise to 0.5 than the input. If a signal is attached to the right inlet,  float  input is ignored.

Arguments:

- slope-multiplier
  [int]

### float

In right inlet: The multiplier that affects the slope of the output between an output (Y) value of 0 and 0.5. After the output reaches 0.5, the waveform will increase to 1 so that the entire output moves from 0 to 1 in the same period of time as the input. A slope multiplier of 1(the default) produces no distortion Slope multipliers below 1 have a slower rise to 0.5 than the input, and slope multipliers above 1 have a faster rise to 0.5 than the input. If a signal is attached to the right inlet,  float  input is ignored.

Arguments:

- slope-multiplier
  [float]

### signal

In left inlet: The input to [kink~](https://docs.cycling74.com/reference/kink~) should be a sawtooth waveform output from a [phasor~](https://docs.cycling74.com/reference/phasor~) object that repeatedly goes from 0 to 1.

In right inlet: The multiplier that affects the slope of the output between an output (Y) value of 0 and 0.5. After the output reaches 0.5, the waveform will increase to 1 so that the entire output moves from 0 to 1 in the same period of time as the input. A slope multiplier of 1(the default) produces no distortion Slope multipliers below 1 have a slower rise to 0.5 than the input, and slope multipliers above 1 have a faster rise to 0.5 than the input.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The output of [kink~](https://docs.cycling74.com/reference/kink~) should be fed to the right inlet of [cycle~](https://docs.cycling74.com/reference/cycle~) (at zero frequency) to produce a distorted sine wave (a technique known as phase distortion synthesis). As the slope multiplier in the right inlet of [kink~](https://docs.cycling74.com/reference/kink~) deviates from 1, additional harmonics are introduced into the waveform output of [cycle~](https://docs.cycling74.com/reference/cycle~). If the slope multiplier is rapidly increased and then decreased using a [line~](https://docs.cycling74.com/reference/line~), the output of [cycle~](https://docs.cycling74.com/reference/cycle~) may resemble an attack portion of an instrumental sound.

## See Also

| Name | Description |
| --- | --- |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [triangle~](https://docs.cycling74.com/reference/triangle~) | Triangle/ramp wavetable |
