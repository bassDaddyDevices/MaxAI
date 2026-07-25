---
type: gen
name: "train"
summary: "Pulse train generator"
signal: false
url: "https://docs.cycling74.com/reference/gen_dsp_train/"
package: "Gen"
see_also: ["phasor", "sah", "triangle"]
---
# train

Pulse train generator

## Description

train~ generates a pulse signal whose period is specifiable in terms of samples. The first input sets the pulse period (in samples). The second input sets the pulse width (default 0.5). The third inlet sets the phase of the 'on' portion (default 0.)

## Constructors

- { arguments={period, width, onset}, inlets={} }

- { arguments={period, width}, inlets={onset} }

- { arguments={period}, inlets={width, onset} }

- { arguments={}, inlets={period, width, onset} }

## Inlets

### period[float]

period (samples)

### width[float]

pulse width

### onset[float]

onset phase

## Attributes

### phase[float]: 0 write-only

Specify the initial phase (in samples)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [phasor](https://docs.cycling74.com/reference/gen_dsp_phasor) | Sawtooth wave generator |
| [sah](https://docs.cycling74.com/reference/gen_dsp_sah) | Sample and hold operator (Schmitt trigger) |
| [triangle](https://docs.cycling74.com/reference/gen_dsp_triangle) | Triangle/ramp wavetable |
