---
type: msp
name: "click~"
summary: "Create an impulse"
signal: true
url: "https://docs.cycling74.com/reference/click~/"
package: "MSP"
see_also: ["buffer~", "buffir~", "line~"]
---
# click~

Create an impulse

## Description

Use the [click~](https://docs.cycling74.com/reference/click~) to create and output an impulse which can be used as an impulse-trigger.

#### Discussion

The [click~](https://docs.cycling74.com/reference/click~) object is sample-accurate when Scheduler in Audio Interrupt is enabled. More details [here](https://docs.cycling74.com/userguide/sample_accurate_messages).

## Arguments

### wavetable-values[list] optional

A list of floating-point values in the range 0.0-1.0, can be used to specify an impulse (i.e., a small wavetable) whose length is determined by the number of list elements. The maximum size for the list is 256 items.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sends an impulse out the [click~](https://docs.cycling74.com/reference/click~) object's outlet. The default impulse consists of a single value (1.0), followed by zero values.

### int

Sends an impulse scaled by the value of the number.

Arguments:

- scale
  [int]

### float

Sends an impulse scaled by the value of the number. The default impulse consists of a the value of the input number followed by zero values. If an impulse wavetable has been defined with the  set  message, the values in the table will be scaled by the input.

Arguments:

- scale
  [float]

### set

The word  set , followed by a list of floating-point values in the range 0.0-1.0, specifies a impulse (i.e., a small wavetable) whose length is determined by the number of list elements. The maximum size for the list is 256 items.

Arguments:

- wavetable-values
  [list]

### signal

A signal will trigger clicks on zero to non-zero transitions.

## Output

### signal

An impulse.

## See Also

| Name | Description |
| --- | --- |
| [buffer~](https://docs.cycling74.com/reference/buffer~) | Store audio samples |
| [buffir~](https://docs.cycling74.com/reference/buffir~) | buffer-based FIR filter |
| [line~](https://docs.cycling74.com/reference/line~) | Linear signal ramp generator |
