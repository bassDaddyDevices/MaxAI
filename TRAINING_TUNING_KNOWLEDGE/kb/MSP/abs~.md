---
type: msp
name: "abs~"
summary: "Absolute value of a signal"
signal: true
url: "https://docs.cycling74.com/reference/abs~/"
package: "MSP"
see_also: ["avg~"]
---
# abs~

Absolute value of a signal

## Description

Use the [abs~](https://docs.cycling74.com/reference/abs~) object to take any given signal and output only the absolute (non-negative) translation of that signal (i.e. a rectified waveform). All negative values in the input signal are converted to positive values in the output.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

The [abs~](https://docs.cycling74.com/reference/abs~) object takes an input signal and output only the absolute (non-negative) translation of that signal - all negative values in the input signal are converted to positive values in the output.

## Output

### signal

A signal consisting of samples which are the absolute (i.e., non-negative) value of the samples in the input signal.

## See Also

| Name | Description |
| --- | --- |
| [avg~](https://docs.cycling74.com/reference/avg~) | Signal average |
