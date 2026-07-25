---
type: gen
name: "counter"
summary: "A sample-rate counter"
signal: false
url: "https://docs.cycling74.com/reference/gen_dsp_counter/"
package: "Gen"
see_also: ["accum", "counter", "history", "mulequals", "plusequals"]
---
# counter

A sample-rate counter

## Description

Accumulates and outputs a stored count, similarly to Max's counter object, but triggered at sample-rate. The amount to accumulate per sample is set by the first input (incr). The count can be reset by a non-zero value in the second input (reset). The third inlet (max) sets a maximum value; the counter will wrap if it reaches this value. However if the maximum value is set to 0 (the default), the counter will assume no limit and count indefinitely. The first outlet outputs the current count, the second outlet outputs 1 when the count wraps at the maximum and zero otherwise, and the third outlet outputs the number of wraps (the carry count).

## Constructors

- { arguments={incr, max}, inlets={reset} }

- { arguments={max}, inlets={incr, reset} }

- { arguments={}, inlets={incr, reset, max} }

## Inlets

### incr[float]

amount to add per sample

### reset[float]

non-zero value resets the count

### max[float]

count limit (zero means no limit)

## Attributes

### init[float]: 0 write-only

Specify the initial count

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [accum](https://docs.cycling74.com/reference/gen_dsp_accum) | An additive accumulator |
| [counter](https://docs.cycling74.com/reference/gen_dsp_counter) | A sample-rate counter |
| [history](https://docs.cycling74.com/reference/gen_dsp_history) | Single-sample delay, allowing feedback connections |
| [mulequals](https://docs.cycling74.com/reference/gen_dsp_mulequals) | A multiplicative accumulator |
| [plusequals](https://docs.cycling74.com/reference/gen_dsp_plusequals) | An additive accumulator |
