---
type: gen
name: "delay"
summary: "Delays a signal by a certain amount of time (specified in samples)"
signal: false
url: "https://docs.cycling74.com/reference/gen_dsp_delay/"
package: "Gen"
see_also: ["buffer", "data", "dcblock", "history"]
---
# delay

Delays a signal by a certain amount of time (specified in samples)

## Description

Delays a signal by a certain amount of time (specified in samples). The first argument specifies the maximum delay time (in samples, default samplerate). The second argument specifies the number of tap inlet/outlet pairs (default 1). The first inlet is the signal to be delayed. Additional inlets specify the delay time per tap (in samples). With @feedback 1, like history, delay allows feedback loops in the patcher, but minium delay is 1 sample. With @feedback 0, minimum delay time is zero samples (or more if @interp is cubic, spline, or spline6)

## Constructors

- { arguments={size, taps}, inlets={input, ...} }

- { arguments={size}, inlets={input, ...} }

- { arguments={}, inlets={input, ...} }

## Inlets

### input[float]

input to delay

### ...[float]

input delay taps

## Attributes

### feedback[bool]: 1 write-only

Specify whether the object can receive feedback signals (this applies to visual gen patching only). If set to 0, the delay object will not accept incoming feedback signals (unless there is another feedback delay or history object in the feedback path). With @feedback enabled, the minimum delay time is increased by 1 sample.

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

### name[string]: write-only

Specify the name of the delay line. This name is used in the generated code and for retaining delay data between edits.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [buffer](https://docs.cycling74.com/reference/gen_dsp_buffer) | A reference to an external buffer~ object |
| [data](https://docs.cycling74.com/reference/gen_dsp_data) | A locally stored array of 64-bit values |
| [dcblock](https://docs.cycling74.com/reference/gen_dsp_dcblock) | DC blocking filter |
| [history](https://docs.cycling74.com/reference/gen_dsp_history) | Single-sample delay, allowing feedback connections |
