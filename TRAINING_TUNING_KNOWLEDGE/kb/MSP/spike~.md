---
type: msp
name: "spike~"
summary: "Report intervals of zero to non-zero transitions"
signal: true
url: "https://docs.cycling74.com/reference/spike~/"
package: "MSP"
see_also: ["change~", "edge~", "zerox~"]
---
# spike~

Report intervals of zero to non-zero transitions

## Description

[spike~](https://docs.cycling74.com/reference/spike~) reports intervals of zero to non-zero transitions.

#### Discussion

The [spike~](https://docs.cycling74.com/reference/spike~) object is sample-accurate when Scheduler in Audio Interrupt is enabled. More details [here](https://docs.cycling74.com/userguide/sample_accurate_messages).

## Arguments

### refractory-period[int or float]ms optional

Sets the refractory period.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  will cause the object to restart the countdown of the refractory period from the time at which the  bang  was received.

### signal

In left inlet: A signal to be analyzed. The [spike~](https://docs.cycling74.com/reference/spike~) object analyzes an incoming signal and reports the interval, in milliseconds, between transitions between zero and non-zero signal values. You can specify a refractory period, which defines how soon after detecting a transition the [spike~](https://docs.cycling74.com/reference/spike~) object will report the next instance.

## Output

### float

The interval, in milliseconds, since the last zero to non-zero signal transition has occurred (which includes the refractory period, if one is set).

## See Also

| Name | Description |
| --- | --- |
| [change~](https://docs.cycling74.com/reference/change~) | Report signal direction |
| [edge~](https://docs.cycling74.com/reference/edge~) | Detect logical signal transitions |
| [zerox~](https://docs.cycling74.com/reference/zerox~) | Detect zero crossings |
