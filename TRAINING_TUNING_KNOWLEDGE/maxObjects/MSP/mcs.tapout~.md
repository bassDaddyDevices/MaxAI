---
type: msp
name: "mcs.tapout~"
summary: "Output from a delay line"
signal: true
url: "https://docs.cycling74.com/reference/mcs.tapout~/"
package: "MC"
see_also: ["delay~", "tapin~"]
---
# mcs.tapout~

Output from a delay line (multichannel I/O)

## Description

The outlet of a [tapin~](https://docs.cycling74.com/reference/tapin~) object must be connected to the left inlet of [tapout~](https://docs.cycling74.com/reference/tapout~) in order for the delay line to function.

The [tapout~](https://docs.cycling74.com/reference/tapout~) object has one or more inlets and one or more outlets. A delay time signal or number received in an inlet affects the output signal coming out of the outlet directly below the inlet.

The [tapout~](https://docs.cycling74.com/reference/tapout~) object is sub-sample accurate specifically when receiving a delay time signal in an inlet. It is not sub-sample accurate when receiving a delay time number in an inlet.

## Arguments

### initial-delay[number]ms optional

One or more initial delay times in milliseconds, one for each delay "tap" inlet-outlet pair desired. For example, the arguments  50 100 300  would create a [tapout~](https://docs.cycling74.com/reference/tapout~) object with three independent "taps" corresponding to three inlets and three outlets. If a  signal  is connected to an inlet, the initial delay time corresponding to that inlet-outlet pair is ignored. The minimum delay time that can be used is determined by the current signal vector size (Options->Audio Status). If the Signal Vector Size is set to 64, any delay less than 64 samples will be limited to a minimum of 64 samples.

## Attributes

### unique[int] >= 8.1.2

When the unique attribute is enabled, successive channels of a connected [mc.tapin~](https://docs.cycling74.com/reference/mc.tapin~) object are assigned to each [tapout~](https://docs.cycling74.com/reference/tapout~) signal outlet. If there are fewer channels in the source [mc.tapin~](https://docs.cycling74.com/reference/mc.tapin~) than signal outlets in [tapout~](https://docs.cycling74.com/reference/tapout~), assignment to additional channels of [tapout~](https://docs.cycling74.com/reference/tapout~) starts over with the first [mc.tapin~](https://docs.cycling74.com/reference/mc.tapin~) channel. This attribute is disabled for the [mc.tapout~](https://docs.cycling74.com/reference/mc.tapout~) object since it already provides a multi-channel signal outlet with all channels present in [mc.tapin~](https://docs.cycling74.com/reference/mc.tapin~).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

If a  signal  is not connected to an inlet of [tapout~](https://docs.cycling74.com/reference/tapout~), a fixed delay algorithm is used, and a  float  or  int  received in the inlet sets the delay time of the signal coming out of the corresponding outlet. This may cause clicks to appear in the output when the delay time is changed. However, fixed delay is suitable for many applications such as reverberation where delay times do not change dynamically, and it is computationally less expensive than the continuous delay algorithm.

Arguments:

- delay-time
  [int]

### float

If a  signal  is not connected to an inlet of [tapout~](https://docs.cycling74.com/reference/tapout~), a fixed delay algorithm is used, and a  float  or  int  received in the inlet sets the delay time of the signal coming out of the corresponding outlet. This may cause clicks to appear in the output when the delay time is changed. However, fixed delay is suitable for many applications such as reverberation where delay times do not change dynamically, and it is computationally less expensive than the continuous delay algorithm.

Arguments:

- delay-time
  [float]

### list

In left inlet: Allows several fixed delay times to be changed at the same time. The first number in the list sets the delay time for the first outlet, and so on. If any inlets corresponding to  list  values have  signals  connected to them, the values are skipped.

Arguments:

- delay-times-corresponding-to-outlets
  [list]

### signal

If a  signal  is connected to an inlet of [tapout~](https://docs.cycling74.com/reference/tapout~), the signal coming out of the outlet below it will use a continuous delay algorithm. Incoming signal values represent the delay time in milliseconds. If the signal increases slowly enough, the pitch of the output will decrease, while, if the signal decreases slowly, the pitch of the output will increase. The continuous delay algorithm is more computationally expensive than the fixed delay algorithm that is used when a signal is not connected to a [tapout~](https://docs.cycling74.com/reference/tapout~) inlet.

### tapconnect

The word  tapconnect  will connect a [tapout~](https://docs.cycling74.com/reference/tapout~) object to an available [tapin~](https://docs.cycling74.com/reference/tapin~) object remotely.

## Output

### signal

Each outlet of [tapout~](https://docs.cycling74.com/reference/tapout~) corresponds to an individually controlled "tap" of a delay line written by the [tapin~](https://docs.cycling74.com/reference/tapin~) object. The output signal coming out of a [tapout~](https://docs.cycling74.com/reference/tapout~) outlet is the input to [tapin~](https://docs.cycling74.com/reference/tapin~) delayed by the number of milliseconds specified by the numerical or signal control received in the inlet directly above the outlet.

## See Also

| Name | Description |
| --- | --- |
| [delay~](https://docs.cycling74.com/reference/delay~) | Delay a signal |
| [tapin~](https://docs.cycling74.com/reference/tapin~) | Input to a delay line |
