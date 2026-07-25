---
type: msp
name: "train~"
summary: "Pulse train generator"
signal: true
url: "https://docs.cycling74.com/reference/train~/"
package: "MSP"
see_also: ["<~", ">~", "clip~", "phasor~"]
---
# train~

Pulse train generator

## Description

[train~](https://docs.cycling74.com/reference/train~) generates a pulse signal whose period is specifiable in terms of milliseconds (see [<~](https://docs.cycling74.com/reference/lessthan~) for a method of making a pulse wave at a specified frequency). It also sends out a  bang  when going from 0 to 1, so it can be used as a metronome with a floating-point interval.

#### Discussion

The signal output can be used as a control input for [sah~](https://docs.cycling74.com/reference/sah~) as shown in the example below, or at very small intervals, it is audible.

## Arguments

### inter-pulse-interval[number]ms optional

Sets the initial value for the inter-pulse interval in milliseconds. The default is 1000 ms. If a signal object is connected to this inlet, the corresponding initial argument value is ignored.

### pulse-width[number] optional

Sets the initial value for the pulse width. The default is 0.5. If a signal object is connected to this inlet, the corresponding initial argument value is ignored.

### phase[number] optional

Sets the initial value for the pulse phase. The default is 0. If a signal object is connected to this inlet, the corresponding initial argument value is ignored.

## Attributes

### interval[float]

Specifies the period (time interval between pulse cycles), in milliseconds, of a pulse train sent out the left outlet. Signal inputs override this attribute value.

### phase[float]

Sets the phase of the onset of the "on" portion of the pulse. A value of 0 places the "on" portion at the beginning of the interval, while other values (up to 1, which is the same as 0) delay the "on" portion by a fraction of the total inter-pulse interval. Signal inputs override this attribute value.

### resetmode[int]

When resetmode is set to 1, [train~](https://docs.cycling74.com/reference/train~) will defer an interval change. If the interval is 2000 and you change it 400, [train~](https://docs.cycling74.com/reference/train~) will wait until it completes the current cycle to change the interval to 400. When resetmode is set to 0 (the default), the interval is changed immediately.

### width[float]

Controls the pulse width or duty cycle. A value of 0 has the smallest "on" pulse size, while a value of 1 has the largest. A value of 0.5 makes a pulse with half the time at 1 and half the time at 0. Signal inputs override this attribute value.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Sending a bang to [train~](https://docs.cycling74.com/reference/train~) will reset the cycle to make the "high" part of [train~](https://docs.cycling74.com/reference/train~) start immediately.

### int

Numbers can be used instead of signal objects to control period, pulse width, and phase. If a  signal  is also connected to the inlet,  float  and  int  messages are ignored.

Arguments:

- parameter-settings
  [int]

### float

Numbers can be used instead of signal objects to control period, pulse width, and phase. If a  signal  is also connected to the inlet,  float  and  int  messages are ignored.

Arguments:

- parameter-settings
  [float]

### signal

In left inlet: Specifies the period (time interval between pulse cycles), in milliseconds, of a pulse train sent out the left outlet.

In middle inlet: Controls the pulse width or duty cycle. The signal values represent a fraction of the pulse interval that will be devoted to the "on" part of the pulse (signal value of 1). A value of 0 has the smallest "on" pulse size (usually a single sample), while a value of 1 has the largest (usually the entire interval except a single sample). A value of 0.5 makes a pulse with half the time at 1 and half the time at 0.

In right inlet: Sets the phase of the onset of the "on" portion of the pulse. A value of 0 places the "on" portion at the beginning of the interval, while other values (up to 1, which is the same as 0) delay the "on" portion by a fraction of the total inter-pulse interval.

## Output

### bang

Out right outlet: When the "on" portion of the pulse begins, a  bang  is sent out the right outlet. Using this outlet, you can use [train~](https://docs.cycling74.com/reference/train~) as a signal-synchronized metronome with an interval specifiable as a floating-point (or  signal ) value. However, there is an unpredictable delay between the "on" portion of the pulse and the actual output of the  bang  message, which depends in part on the current Max scheduler interval. The delay is guaranteed to be a millisecond or less if the scheduler interval is set to 1 millisecond.

### signal

Out left outlet: A pulse (square) wave train having the specified interval, width, and phase.

## See Also

| Name | Description |
| --- | --- |
| [<~](https://docs.cycling74.com/reference/lessthan~) | Is less than, comparison of two signals |
| [>~](https://docs.cycling74.com/reference/greaterthan~) | Is greater than, comparison of two signals |
| [clip~](https://docs.cycling74.com/reference/clip~) | Limit signal amplitude |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
