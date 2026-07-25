---
type: mc
name: "mc.peakamp~"
summary: "Report the maximum amplitude of a signal  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.peakamp~/"
package: "MC"
see_also: ["meter~", "levelmeter~", "snapshot~", "loudness~", "average~", "avg~"]
---
# mc.peakamp~

Report the maximum amplitude of a signal (multichannel)

## Description

Use the [peakamp~](https://docs.cycling74.com/reference/peakamp~) object to monitor an incoming signal and reports the absolute value of the peak amplitude of the signal it has received since the last time it was reported.

#### Discussion

The [peakamp~](https://docs.cycling74.com/reference/peakamp~) object is sample-accurate when Scheduler in Audio Interrupt is enabled. More details [here](https://docs.cycling74.com/userguide/sample_accurate_messages).

## Arguments

### ms-output-interval[int]ms optional

Sets the internal clock interval, in milliseconds. If it is 0, the internal clock is not used, so [peakamp~](https://docs.cycling74.com/reference/peakamp~) will only output data when it receives a bang message. If it is non-zero, [peakamp~](https://docs.cycling74.com/reference/peakamp~) will repeatedly send out the peak amplitude received in that interval of time. By default, the interval is 0.

## Attributes

### interval[float]

Sets the reporting interval, in milliseconds. This is the same functionality as the  ms-output-interval  argument. If the interval is 0, the internal clock is not used, so [peakamp~](https://docs.cycling74.com/reference/peakamp~) will only output data when it receives a bang message. If it is non-zero, [peakamp~](https://docs.cycling74.com/reference/peakamp~) will repeatedly send out the peak amplitude received in that interval of time. By default, the interval is 0.

### signed[int]

When the signed attribute is set to 1, the peak amplitude of the incoming signal in the specified interval is reported, rather than the absolute value of the peak amplitude.

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

In left inlet: Sends out a report of the greatest (absolute value) signal amplitude received since the previous report.

### signal

In left inlet: Signal to be evaluated for its peak amplitude.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### float

When [peakamp~](https://docs.cycling74.com/reference/peakamp~) receives a  bang  or its internal clock is on, the absolute value of the peak signal value from the input signal is sent out its outlet.

## See Also

| Name | Description |
| --- | --- |
| [meter~](https://docs.cycling74.com/reference/meter~) | Visual peak level indicator |
| [levelmeter~](https://docs.cycling74.com/reference/levelmeter~) | RMS level meter |
| [snapshot~](https://docs.cycling74.com/reference/snapshot~) | Convert signal values to numbers |
| [loudness~](https://docs.cycling74.com/reference/loudness~) | Report loudness of a signal |
| [average~](https://docs.cycling74.com/reference/average~) | Multi-mode signal average |
| [avg~](https://docs.cycling74.com/reference/avg~) | Signal average |
