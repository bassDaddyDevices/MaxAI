---
type: mc
name: "mc.where~"
summary: "Report Elapsed and Remaining Time of a Phasor (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.where~/"
package: "MC"
see_also: ["phasor~", "spike~", "timer", "what~"]
---
# mc.where~

Report Elapsed and Remaining Time of a Phasor (multichannel)

## Description

The [where~](https://docs.cycling74.com/reference/where~) object generates two signals: one reports the elapsed time since the reset of a phasor ramp; the other predicts of the remaining time until the phasor resets again. You can use these time values to synchronize events to specific times within a ramp instead of its relative phase. For example, if you want something to happen at 30 milliseconds before the phasor is scheduled to reset, you can wait until the remaining time signal has a value of 30 or less. [where~](https://docs.cycling74.com/reference/where~) has a direction detection feature so it can report the elapsed and remaining time of ramps that go from 1 to 0 (as produced by a [phasor~](https://docs.cycling74.com/reference/phasor~) object with negative frequency) in addition to ramps that go from 0 to 1.

## Arguments

None.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

The phasor to be analyzed

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## See Also

| Name | Description |
| --- | --- |
| [phasor~](https://docs.cycling74.com/reference/phasor~) | Generate sawtooth signals |
| [spike~](https://docs.cycling74.com/reference/spike~) | Report intervals of zero to non-zero transitions |
| [timer](https://docs.cycling74.com/reference/timer) | Report elapsed time between two events |
| [what~](https://docs.cycling74.com/reference/what~) | Generate Impulses for a List of Audio Values |
