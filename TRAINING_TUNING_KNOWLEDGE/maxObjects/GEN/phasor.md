---
type: gen
name: "phasor"
summary: "Sawtooth wave generator"
signal: false
url: "https://docs.cycling74.com/reference/gen_dsp_phasor/"
package: "Gen"
see_also: ["cycle", "rate", "train", "triangle"]
---
# phasor

Sawtooth wave generator

## Description

A non-bandlimited sawtooth-waveform signal generator which can be used as LFO audio signal or a sample-accurate timing/control signal.

## Constructors

- { arguments={freq}, inlets={reset} }

- { arguments={}, inlets={freq, reset} }

## Inlets

### freq[float]

frequency

### reset[float]

a non-zero value will reset the phase to the initial value

## Attributes

### phase[float]: 0 write-only

Specify the initial phase

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [cycle](https://docs.cycling74.com/reference/gen_dsp_cycle) | Sine / wavetable lookup oscillator |
| [rate](https://docs.cycling74.com/reference/gen_dsp_rate) | Time-scale the output of a phasor |
| [train](https://docs.cycling74.com/reference/gen_dsp_train) | Pulse train generator |
| [triangle](https://docs.cycling74.com/reference/gen_dsp_triangle) | Triangle/ramp wavetable |
