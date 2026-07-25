---
type: msp
name: "snapshot~"
summary: "Convert signal values to numbers"
signal: true
url: "https://docs.cycling74.com/reference/snapshot~/"
package: "MSP"
see_also: ["capture~", "number~", "sig~"]
---
# snapshot~

Convert signal values to numbers

## Description

Use the [snapshot~](https://docs.cycling74.com/reference/snapshot~) object to convert a signal value into a float message when a bang is received or according to a specified interval. The interval can be set to a fixed or tempo-relative rate using the Max [time format](https://docs.cycling74.com/userguide/time_value_syntax) syntax.

#### Discussion

The [snapshot~](https://docs.cycling74.com/reference/snapshot~) object is sample-accurate when Scheduler in Audio Interrupt is enabled. More details [here](https://docs.cycling74.com/userguide/sample_accurate_messages).

## Arguments

### reporting-interval[list]time-value optional

Set the reporting interval in ms or using the Max [time format](https://docs.cycling74.com/userguide/time_value_syntax) syntax. If the interval is 0 [snapshot~](https://docs.cycling74.com/reference/snapshot~) will only output data when it receives a  bang  message.

## Attributes

### active[int]

When active is enabled, [snapshot~](https://docs.cycling74.com/reference/snapshot~) outputs sample values at a rate specified by the interval attribute.

### interval[Time Value]: 0 ms

Reporting interval

### offset[int]

The index of the sample within a signal vector that will be reported. The index is constrained between 0 and the current signal vector size minus one.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Reports the sample value in the most recently received signal vector at the offset specified by the offset attribute. If offset is 0 and the  bang  message is received at the high priority thread when Scheduler in Audio Interrupt is enabled, [snapshot~](https://docs.cycling74.com/reference/snapshot~) will report the value at the sample offset of the current scheduler time.

### int

In left inlet: Any non-zero value turns on interval-based reporting,  0  turns it off. Reporting is on by default if a non-zero interval was specified.

In right inlet: Set the reporting interval in ms. If the interval is 0, automatic reporting stops.

Arguments:

- internal-clock-enable-flag
  [int]

### float

In left inlet: Any non-zero value turns on interval-based reporting,  0  turns it off. Reporting is on by default if a non-zero interval was specified.

In right inlet: Set the reporting interval in ms. If the interval is 0, automatic reporting stops.

Arguments:

- internal-clock-enable-flag
  [float]

### list

Set interval in Max [time format](https://docs.cycling74.com/userguide/time_value_syntax) syntax.

Arguments:

- ITM-time-list
  [list]

### anything

Set interval in Max [time format](https://docs.cycling74.com/userguide/time_value_syntax) syntax.

Arguments:

- ITM-time-list
  [list]

### sampleinterval

Set interval in samples per sampleinterval

Arguments:

- internal-clock-interval
  [int]

### signal

Connect a signal to sample

### start

Start periodic reporting

### stop

Stop periodic reporting

## Output

### float

When [snapshot~](https://docs.cycling74.com/reference/snapshot~) receives a  bang  or periodic reporting is enabled, sample values from the input signal are sent out its outlet.

[mc.snapshot~](https://docs.cycling74.com/reference/mc.snapshot~) outputs  voice  followed by the channel number of a connected multi-channel signal its right outlet, followed by sample value for that channel out its left outlet.

## See Also

| Name | Description |
| --- | --- |
| [capture~](https://docs.cycling74.com/reference/capture~) | Store a signal to view as text |
| [number~](https://docs.cycling74.com/reference/number~) | Signal monitor and constant generator |
| [sig~](https://docs.cycling74.com/reference/sig~) | Convert numbers into audio signals |
