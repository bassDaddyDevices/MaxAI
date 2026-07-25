---
type: gen
name: "ftom"
summary: "Convert frequency to MIDI note number"
signal: false
url: "https://docs.cycling74.com/reference/gen_dsp_ftom/"
package: "Gen"
see_also: ["atodb", "dbtoa", "ftom", "mstosamps", "mtof", "sampstoms", "t60", "t60time"]
---
# ftom

Convert frequency to MIDI note number

## Description

Frequency given in Hertz is converted to MIDI note number (0-127). Fractional note numbers are supported. The second input sets the tuning base (default 440).

## Constructors

- { arguments={freq, tuning}, inlets={} }

- { arguments={freq}, inlets={tuning} }

- { arguments={}, inlets={freq, tuning} }

## Inlets

### freq[float]

frequency in Hz

### tuning[float]

tuning base in Hz

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [atodb](https://docs.cycling74.com/reference/gen_dsp_atodb) | Convert linear amplitude to deciBel value |
| [dbtoa](https://docs.cycling74.com/reference/gen_dsp_dbtoa) | Convert deciBel value to linear amplitude |
| [ftom](https://docs.cycling74.com/reference/gen_dsp_ftom) | Convert frequency to MIDI note number |
| [mstosamps](https://docs.cycling74.com/reference/gen_dsp_mstosamps) | Convert period in milliseconds to samples |
| [mtof](https://docs.cycling74.com/reference/gen_dsp_mtof) | Convert MIDI note number to frequency |
| [sampstoms](https://docs.cycling74.com/reference/gen_dsp_sampstoms) | Convert period in samples to milliseconds |
| [t60](https://docs.cycling74.com/reference/gen_dsp_t60) | Return multiplication factor for a given t60 time (in samples) |
| [t60time](https://docs.cycling74.com/reference/gen_dsp_t60time) | Return a given t60 time (in samples) for a given multiplication factor |
