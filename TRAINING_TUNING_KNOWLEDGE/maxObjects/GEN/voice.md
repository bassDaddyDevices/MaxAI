---
type: gen
name: "voice"
summary: "Report voice index of a patcher loaded by poly~"
signal: false
url: "https://docs.cycling74.com/reference/gen_dsp_voice/"
package: "Gen"
see_also: ["fftinfo"]
---
# voice

Report voice index of a patcher loaded by poly~

## Description

If used within a poly~ patcher, the voice operator will return the current voice index (similar to thispoly~). Otherwise, it always returns 1.

## Constructors

- { arguments={}, inlets={} }

## Inlets

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [fftinfo](https://docs.cycling74.com/reference/gen_dsp_fftinfo) | Report FFT constant data about a patcher loaded by pfft~ |
