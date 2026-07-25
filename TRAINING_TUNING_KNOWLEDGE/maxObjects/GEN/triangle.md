---
type: gen
name: "triangle"
summary: "Triangle/ramp wavetable"
signal: false
url: "https://docs.cycling74.com/reference/gen_dsp_triangle/"
package: "Gen"
see_also: ["phasor", "rate", "train"]
---
# triangle

Triangle/ramp wavetable

## Description

A triangle/ramp wavetable with input to change phase offset of the peak value. The phase ranges from 0 to 1 (and wraps outside these values). With a duty cycle of 0, it produces a descending sawtooth; with a duty cycle of 1 it produces ascending sawtooth; with a duty cycle of 0.5 it produces a triangle waveform. Output values always bounded in 0 to 1.

## Constructors

- { arguments={duty}, inlets={phase} }

- { arguments={}, inlets={phase, duty} }

## Inlets

### phase[float]

phase (0 to 1)

### duty[float]

duty cycle (0 to 1)

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [phasor](https://docs.cycling74.com/reference/gen_dsp_phasor) | Sawtooth wave generator |
| [rate](https://docs.cycling74.com/reference/gen_dsp_rate) | Time-scale the output of a phasor |
| [train](https://docs.cycling74.com/reference/gen_dsp_train) | Pulse train generator |
