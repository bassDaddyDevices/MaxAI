---
type: max
name: "when"
summary: "Report the current transport time"
signal: false
url: "https://docs.cycling74.com/reference/when/"
package: "Max"
see_also: ["metro", "translate", "timepoint", "transport"]
---
# when

Report the current transport time

## Description

Outputs the current time of a transport in ticks and bars/beats/units.

## Arguments

### transport[symbol] optional

The name of the transport for connection. Defaults to the global default transport.

## Attributes

### transport[symbol]

The name of a [transport](https://docs.cycling74.com/reference/transport) object with which to associate. The default value is the global 'internal' transport.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Equivalent to  anything .

### int

Equivalent to  anything .

Arguments:

- input
  [int]

### float

Equivalent to  anything .

Arguments:

- input
  [float]

### list

Equivalent to  anything .

Arguments:

- input
  [list]

### anything

Any list or message causes the current time expressed in bars/beats/units to be sent out the left outlet, and the current time in ticks to be sent out the right outlet.

Arguments:

- input
  [list]

## See Also

| Name | Description |
| --- | --- |
| [metro](https://docs.cycling74.com/reference/metro) | Output a bang message at regular intervals |
| [translate](https://docs.cycling74.com/reference/translate) | Convert between different time formats |
| [timepoint](https://docs.cycling74.com/reference/timepoint) | Bang at a specific time |
| [transport](https://docs.cycling74.com/reference/transport) | Control a clock |
