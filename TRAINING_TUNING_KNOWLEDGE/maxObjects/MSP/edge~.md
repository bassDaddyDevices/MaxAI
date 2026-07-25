---
type: msp
name: "edge~"
summary: "Detect logical signal transitions"
signal: true
url: "https://docs.cycling74.com/reference/edge~/"
package: "MSP"
see_also: ["change~", "thresh~", "zerox~"]
---
# edge~

Detect logical signal transitions

## Description

Use the [edge~](https://docs.cycling74.com/reference/edge~) to detect zero to non-zero (and vice versa) signal transitions and report a bang out of one of its two outlets according to which direction the transition has occurred.

#### Discussion

The [edge~](https://docs.cycling74.com/reference/edge~) object is sample-accurate when Scheduler in Audio Interrupt is enabled. More details [here](https://docs.cycling74.com/userguide/sample_accurate_messages).

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

A signal that will change between zero and non-zero values

## Output

### bang

Out left outlet: Sent when the input signal changes from zero to non-zero. The minimum time between  bang  messages will not be shorter than the minimum scheduler interval, which is generally equal to the signal vector size, but may be larger if Scheduler in Audio Interrupt mode is not enabled.

Out right outlet: Sent when the input signal changes from non-zero to zero. The output will not happen more often than the time represented by the number of samples in the current input/output vector size.

## See Also

| Name | Description |
| --- | --- |
| [change~](https://docs.cycling74.com/reference/change~) | Report signal direction |
| [thresh~](https://docs.cycling74.com/reference/thresh~) | Detect signal above a set level |
| [zerox~](https://docs.cycling74.com/reference/zerox~) | Detect zero crossings |
