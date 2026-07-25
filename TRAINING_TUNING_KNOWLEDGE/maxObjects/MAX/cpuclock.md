---
type: max
name: "cpuclock"
summary: "Retrieve the CPU time"
signal: false
url: "https://docs.cycling74.com/reference/cpuclock/"
package: "Max"
see_also: ["metro", "translate", "timepoint", "transport", "when"]
---
# cpuclock

Retrieve the CPU time

## Description

Accesses a precise value from the system timer. This allows for timing calculations with very high resolution.

#### Discussion

While most Max timing references "logical" time derived from Max's millisecond scheduler, time values produced by the [cpuclock](https://docs.cycling74.com/reference/cpuclock) object are referenced from the CPU clock and can be used to time real world events with microsecond precision.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

bang  causes the current time to be output. The time value is calculated from when Max is launched (starting from 0.0).

### reset

Resets the system timer value to 0.0.

## Output

### float

The current time, in milliseconds.

## See Also

| Name | Description |
| --- | --- |
| [metro](https://docs.cycling74.com/reference/metro) | Output a bang message at regular intervals |
| [translate](https://docs.cycling74.com/reference/translate) | Convert between different time formats |
| [timepoint](https://docs.cycling74.com/reference/timepoint) | Bang at a specific time |
| [transport](https://docs.cycling74.com/reference/transport) | Control a clock |
| [when](https://docs.cycling74.com/reference/when) | Report the current transport time |
