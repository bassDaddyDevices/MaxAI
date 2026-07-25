---
type: gen
name: "cycle"
summary: "Sine / wavetable lookup oscillator"
signal: false
url: "https://docs.cycling74.com/reference/gen_dsp_cycle/"
package: "Gen"
see_also: ["buffer", "data", "phasor", "train"]
---
# cycle

Sine / wavetable lookup oscillator

## Description

An interpolating oscillator that reads repeatedly through one cycle of a sine wave. By default it is driven by a frequency input, but if the @index attribute is set to 'phase', it can be driven by a phase input instead.

## Constructors

- { arguments={buffer, phase}, inlets={} }

- { arguments={buffer}, inlets={phase} }

- { arguments={}, inlets={phase} }

- { arguments={buffer, freq}, inlets={} }

- { arguments={buffer}, inlets={freq} }

- { arguments={}, inlets={freq} }

## Inlets

### freq[float]

wave frequency

### phase[float]

wave phase (0..1)

## Attributes

### index[enum]: freq write-only

Specify the index mode: "phase" maps the input signal range 0..1 to the span of the buffer, "freq" cycles through the buffer at a frequency given by the input signal.

Possible values:

0 = 'phase'

1 = 'freq'

### name[string]: write-only

Specify the data or buffer object to use for playback. If not specified, cycle will use a built-in sine wavetable."

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [buffer](https://docs.cycling74.com/reference/gen_dsp_buffer) | A reference to an external buffer~ object |
| [data](https://docs.cycling74.com/reference/gen_dsp_data) | A locally stored array of 64-bit values |
| [phasor](https://docs.cycling74.com/reference/gen_dsp_phasor) | Sawtooth wave generator |
| [train](https://docs.cycling74.com/reference/gen_dsp_train) | Pulse train generator |
