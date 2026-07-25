---
type: gen
name: "accum"
summary: "An additive accumulator"
signal: false
url: "https://docs.cycling74.com/reference/gen_dsp_accum/"
package: "Gen"
see_also: ["accum", "counter", "history", "mulequals", "plusequals"]
---
# accum

An additive accumulator

## Description

The object adds to, and then outputs, an internal sum. This occurs at sample-rate, so the sum can grow very large, very fast. The value to be added is specified by either the first inlet or argument. The internal sum can be reset to the minimum by sending a nonzero value to the right-most inlet. The minimum value is 0 by default, but can be changed with the @min attribute. An optional maximum value can be specified with the @max attribute; values will wrap at the maximum.

## Constructors

- { arguments={incr}, inlets={reset} }

- { arguments={}, inlets={incr, reset} }

## Inlets

### incr[float]

amount to add

### reset[float]

nonzero reset

## Attributes

### init[float]: 0 write-only

Specify initial value stored in the accumulator

### max[float]: write-only

Specify optional maximum value. If @max is given, the count will reset to @min whenever it reaches @max.

### min[float]: 0 write-only

Specifies the internal count when the reset signal triggers (or the @max value is reached, if @max is specified.)

### resetmode[enum]: post write-only

Specifies whether the count is reset before or after the accumulation. If the mode is 'pre', the count is reset before accumulating the new input. The default is 'post' (after accumulation).

Possible values:

0 = 'pre'

1 = 'post'

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
