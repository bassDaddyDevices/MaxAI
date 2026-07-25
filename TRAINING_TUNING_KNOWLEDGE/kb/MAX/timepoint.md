---
type: max
name: "timepoint"
summary: "Bang at a specific time"
signal: false
url: "https://docs.cycling74.com/reference/timepoint/"
package: "Max"
see_also: ["metro", "translate", "transport", "when"]
---
# timepoint

Bang at a specific time

## Description

Outputs a  bang  when the clock reaches a specific time. The clock has to be moving forward in order for the bang to be output.

#### Discussion

In addition to triggering events, timepoint objects can be used to create loops (by setting the clock back to 0 or to a specific position), trigger tempo changes, and mess with time in other fun ways.

## Arguments

### time[int, float, symbol] optional

Sets the initial time at which to send a bang. Time can be specified in any of the [time formats](https://docs.cycling74.com/userguide/time_value_syntax) used in Max. The bang will only be sent when the transport is running.

## Attributes

### time[Time Value]: 0 ticks

Sets the initial time at which to send a bang. Time can be specified in any of the [time formats](https://docs.cycling74.com/userguide/time_value_syntax) used in Max. The bang will only be sent when the transport is running.

### transport[symbol]: internal

The name of the [transport](https://docs.cycling74.com/reference/transport) object used for timing. The default is  internal  which is the global transport. In Max for Live, the default is the Live transport.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Set the time in ticks at which to trigger a bang.

Arguments:

- time
  [int]

### float

Set the time in ticks at which to trigger a bang.

Arguments:

- time
  [float]

### list

A list may be used to specify time in one of the Max [time formats](https://docs.cycling74.com/userguide/time_value_syntax).

Arguments:

- time
  [list]

### anything

Set the time in any of Max's time units at which to trigger a bang.

Arguments:

- time
  [list]

## See Also

| Name | Description |
| --- | --- |
| [metro](https://docs.cycling74.com/reference/metro) | Output a bang message at regular intervals |
| [translate](https://docs.cycling74.com/reference/translate) | Convert between different time formats |
| [transport](https://docs.cycling74.com/reference/transport) | Control a clock |
| [when](https://docs.cycling74.com/reference/when) | Report the current transport time |
