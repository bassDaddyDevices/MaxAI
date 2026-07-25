---
type: mc
name: "mc.teeth~"
summary: "Comb filter with feedforward and feedback delay control  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.teeth~/"
package: "MC"
see_also: ["allpass~", "comb~", "delay~", "reson~"]
---
# mc.teeth~

Comb filter with feedforward and feedback delay control (multichannel)

## Description

The [teeth~](https://docs.cycling74.com/reference/teeth~) object implements a comb filter, in which a slightly delayed version of a signal is added to itself, causing phase cancellations and a spectrum that looks like a comb.

#### Discussion

The [teeth~](https://docs.cycling74.com/reference/teeth~) object is a variation of the [comb~](https://docs.cycling74.com/reference/comb~) object and implements a similar filter formula:

y[n] = a \* x[n] + b \* x[n - FFdelay] + c \* y[n - FBdelay]

## Arguments

### maxdelaytime[float]ms optional

Sets the maximum delay time in milliseconds; this will be the upper limit for the feedforward and feedback delay. If no argument is present or it is zero, the default maximum delay time is 10 milliseconds.

### feedforward-delay[float]ms optional

Sets the initial value for the feedforward delay, in milliseconds. If a signal is connected to this inlet, the coefficient supplied as an argument for that inlet is ignored. If no argument is present, the delay time defaults to 10 milliseconds.

### feedback-delay[float]ms optional

Sets the initial value for the feedback delay, in milliseconds. If a signal is connected to this inlet, the coefficient supplied as an argument for that inlet is ignored. If no argument is present, the delay time defaults to 10 milliseconds.

### gain[float] optional

Sets the initial value for the gain. If a signal is connected to this inlet, the coefficient supplied as an argument for that inlet is ignored. If no argument is present, the value defaults to 0.

### feedforward-gain[float] optional

Sets the initial value for the feedforward gain. If a signal is connected to this inlet, the coefficient supplied as an argument for that inlet is ignored. If no argument is present, the value defaults to 0.

### feedback-gain[float] optional

Sets the initial value for the feedback gain. If a signal is connected to this inlet, the coefficient supplied as an argument for that inlet is ignored. If no argument is present, the value defaults to 0.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

The filter parameters in inlets 2 to 6 may be specified by a  float  instead of a signal. If a signal is also connected to the inlet, the  float  is ignored.

Arguments:

- filter-parameters
  [int]

### float

The filter parameters in inlets 2 to 6 may be specified by a  float  instead of a signal. If a signal is also connected to the inlet, the  float  is ignored.

Arguments:

- filter-parameters
  [float]

### clear

Clears the [teeth~](https://docs.cycling74.com/reference/teeth~) object's memory of previous outputs, resetting them to 0.

### signal

In left inlet: Signal to be filtered. The [teeth~](https://docs.cycling74.com/reference/teeth~) object is a variant of [comb~](https://docs.cycling74.com/reference/comb~)-- a comb filter that mixes the current input sample with earlier input and/or output samples to accentuate and attenuate the input signal at regularly spaced frequency intervals. Unlike the [comb~](https://docs.cycling74.com/reference/comb~) object, [teeth~](https://docs.cycling74.com/reference/teeth~) adds feedforward and feedback, which adds to the extremity of the effect.

In 2nd inlet: Feedforward - the delay, in milliseconds, before past samples of the input are added to the current input.

In 3rd inlet: Feedback - the delay, in milliseconds, before past samples of the output are added to the current input.

In 4th inlet: Gain coefficient - for scaling the amount of the input sample to be sent to the output.

In 5th inlet: Gain coefficient - for scaling the amount of feedforward to be sent to the output.

In right inlet: Gain coefficient - for scaling the amount of feedback to be sent to the output.

### list

The five parameters can be provided as a list in the left inlet. The first number in the list is the feedforward delay, the next number is the feedback delay, the third number is the Gain coefficient for the input sample, the fourth number is the feedforward gain coefficient, and the fifth number is the feedback gain coefficient. If a signal is connected to a given inlet, the coefficient supplied in the list for that inlet is ignored.

Arguments:

- feedforward-delay
  [float]
- feedback-delay
  [float]
- gain
  [float]
- feedforward-gain
  [float]
- feedback-gain
  [float]

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The filtered signal.

## See Also

| Name | Description |
| --- | --- |
| [allpass~](https://docs.cycling74.com/reference/allpass~) | Apply an allpass filter effect |
| [comb~](https://docs.cycling74.com/reference/comb~) | Apply a comb filter effect |
| [delay~](https://docs.cycling74.com/reference/delay~) | Delay a signal |
| [reson~](https://docs.cycling74.com/reference/reson~) | Resonant bandpass filter |
