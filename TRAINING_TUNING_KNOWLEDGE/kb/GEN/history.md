---
type: gen
name: "history"
summary: "Single-sample delay, allowing feedback connections"
signal: false
url: "https://docs.cycling74.com/reference/gen_dsp_history/"
package: "Gen"
see_also: ["buffer", "data", "dcblock", "delay", "param"]
---
# history

Single-sample delay, allowing feedback connections

## Description

The history operator allows feedback in the gen patcher through the insertion of a single-sample delay. The first argument is an optional name for the history operator, which allows it to also be set externally (in the same way as the param operator). The second argument specifies an initial value of stored history (defaults to zero).

## Constructors

- { arguments={name, value}, inlets={} }

- { arguments={name}, inlets={} }

- { arguments={}, inlets={} }

## Inlets

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [buffer](https://docs.cycling74.com/reference/gen_dsp_buffer) | A reference to an external buffer~ object |
| [data](https://docs.cycling74.com/reference/gen_dsp_data) | A locally stored array of 64-bit values |
| [dcblock](https://docs.cycling74.com/reference/gen_dsp_dcblock) | DC blocking filter |
| [delay](https://docs.cycling74.com/reference/gen_dsp_delay) | Delays a signal by a certain amount of time (specified in samples) |
| [param](https://docs.cycling74.com/reference/gen_common_param) | An externally modifiable, named parameter |
