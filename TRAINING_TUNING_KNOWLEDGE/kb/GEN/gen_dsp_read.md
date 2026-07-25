---
type: gen
name: "gen_dsp_read"
summary: "reads from a delay line"
signal: false
url: "https://docs.cycling74.com/reference/gen_dsp_read/"
package: "Gen"
see_also: ["dcblock", "history"]
---
# gen\_dsp\_read

reads from a delay line

## Description

Reads delayed output(s). Each argument specifies a delay time, and a corresponding delayed value is returned.

## Constructors

- { arguments={self, ...}, inlets={} }

## Inlets

## Attributes

### interp[enum]: linear write-only

Specify the interpolation mode: "none" and "step" perform no interpolation, "linear" performs two-point linear interpolation, "cosine" performs two-point cosine interpolation, "cubic" performs four-point cubic interpolation, "spline" performs four-point Catmull-Rom spline interpolation, and "spline6" performs six-point (5th order) B-spline interpolation.

Possible values:

0 = 'none'

1 = 'spline6'

2 = 'step'

3 = 'cosine'

4 = 'cubic'

5 = 'fastcubic'

6 = 'linear'

7 = 'spline'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [dcblock](https://docs.cycling74.com/reference/gen_dsp_dcblock) | DC blocking filter |
| [history](https://docs.cycling74.com/reference/gen_dsp_history) | Single-sample delay, allowing feedback connections |
