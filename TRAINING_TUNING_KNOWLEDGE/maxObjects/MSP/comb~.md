---
type: msp
name: "comb~"
summary: "Apply a comb filter effect"
signal: true
url: "https://docs.cycling74.com/reference/comb~/"
package: "MSP"
see_also: ["allpass~", "delay~", "reson~", "teeth~"]
---
# comb~

Apply a comb filter effect

## Description

Use the [comb~](https://docs.cycling74.com/reference/comb~) object to apply the classic comb filtering effect to an audio input. The [comb~](https://docs.cycling74.com/reference/comb~) object mixes the current input sample with earlier input and/or output samples, according to the formula:

yn = axn + bxn-(DR/1000) + cyn-(DR/1000)

where R is the sampling rate and D is a delay time in milliseconds.

## Arguments

### max-delay[float]ms optional

The maximum delay time. Defaults to 10 ms if not specified.

### initial-delay[float]ms optional

Initial delay time

### gain-coefficient[float] optional

Gain coefficient

### feedforward-coefficient[float] optional

The feedforward coefficient

### feedback-coefficient[float] optional

The feedback coefficient

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### float

2nd inlet: delay time in milliseconds

3rd inlet: gain coefficient

4th inlet: feedforward coefficient

Right inlet: feedback coefficient

Arguments:

- filter-parameters
  [float]

### clear

Reset filter state to zero internal feedback

### signal

Left inlet: signal to be filtered

2nd inlet: delay time in milliseconds

3rd inlet: gain coefficient

4th inlet: feedforward coefficient

Right inlet: feedback coefficient

## Output

### signal

The filtered signal.

## See Also

| Name | Description |
| --- | --- |
| [allpass~](https://docs.cycling74.com/reference/allpass~) | Apply an allpass filter effect |
| [delay~](https://docs.cycling74.com/reference/delay~) | Delay a signal |
| [reson~](https://docs.cycling74.com/reference/reson~) | Resonant bandpass filter |
| [teeth~](https://docs.cycling74.com/reference/teeth~) | Comb filter with feedforward and feedback delay control |
