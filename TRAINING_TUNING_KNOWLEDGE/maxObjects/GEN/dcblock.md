---
type: gen
name: "dcblock"
summary: "DC blocking filter"
signal: false
url: "https://docs.cycling74.com/reference/gen_dsp_dcblock/"
package: "Gen"
see_also: ["delay", "fixdenorm", "fixnan", "history", "slide"]
---
# dcblock

DC blocking filter

## Description

A one-pole high-pass filter to remove DC components. Equivalent to the GenExpr:
History x1, y1;
y = in1 - x1 + y1\*0.9997;
x1 = in1;
y1 = y;
out1 = y;

## Constructors

- { arguments={}, inlets={input} }

## Inlets

### input[float]

input to filter

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [delay](https://docs.cycling74.com/reference/gen_dsp_delay) | Delays a signal by a certain amount of time (specified in samples) |
| [fixdenorm](https://docs.cycling74.com/reference/gen_dsp_fixdenorm) | Replace denormal values with zero. |
| [fixnan](https://docs.cycling74.com/reference/gen_dsp_fixnan) | Replace NaN (Not a Number) values with zero. |
| [history](https://docs.cycling74.com/reference/gen_dsp_history) | Single-sample delay, allowing feedback connections |
| [slide](https://docs.cycling74.com/reference/gen_dsp_slide) | Filter a signal logarithmically |
