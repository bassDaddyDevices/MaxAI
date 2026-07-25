---
type: max
name: "transport"
summary: "Control a clock"
signal: false
url: "https://docs.cycling74.com/reference/transport/"
package: "Max"
see_also: ["metro", "translate", "timepoint", "when"]
---
# transport

Control a clock

## Description

Starts and stops the passage of time for objects linked to a transport. If given a name, the transport object will control a time context of the given name, otherwise it will control Max's global 'internal' transport. The [transport](https://docs.cycling74.com/reference/transport) object reports time consistent with the [time formats](https://docs.cycling74.com/userguide/time_value_syntax) used in Max.

#### Discussion

Note for Max For Live Users: Currently translating a beat time song position in Max for Live will only take the global tempo into account and might not be accurate when the Live set contains tempo changes.

## Arguments

None.

## Attributes

### clocksource[symbol]

The current timing source for the transport. The default source is Max's internal clock but other timing sources may also be used.

### name[symbol]

There can be multiple named transports running simultaneously. By default, a transport will be associated with Max's global transport. If a name is provided then a new transport is created with that name and can be referenced using this attribute.

### resetbarcount[int]

Toggles whether the bar/beat/unit counter advances to the beginning of the next measure when a time signature change is received. By default, this is disabled (0).

### tempo[float]

Sets the tempo in beats-per-minute for this transport.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Report current state

### int

In left inlet: toggle whether or not the transport is running on or off

In right inlet: set the current position of the transport in ticks

Arguments:

- input
  [int]

### float

In left inlet: toggle whether or not the transport is running on or off

In right inlet: set the current position of the transport in ticks

Arguments:

- input
  [float]

### list

Set the current position of the transport using a time unit.

Arguments:

- position
  [list]

### (mouse)

Double-clicking on the [transport](https://docs.cycling74.com/reference/transport) object opens the GlobalTransport window.

### dump

Causes a report of the current state of the transport to be sent to the Max Console.

### getclocksources

Causes a list of active clock sources to be sent out the right outlet.

### timesig

Set the time signature for this transport using two numbers. The default is 4 4.

Arguments:

- beats
  [list]
- value
  [list]

## Output

### float

Out 3rd outlet: When [transport](https://docs.cycling74.com/reference/transport) receives a bang, the units are sent out the third outlet.

Out 4th outlet: When [transport](https://docs.cycling74.com/reference/transport) receives a bang, the current resolution (ticks per beat) is sent out the fourth outlet.

Out 5th outlet: When [transport](https://docs.cycling74.com/reference/transport) receives a bang, the current tempo is sent out the fifth outlet.

Out 8th outlet: When [transport](https://docs.cycling74.com/reference/transport) receives a bang, the number if raw ticks is sent out the eighth outlet.

### int

Out 1st outlet: When [transport](https://docs.cycling74.com/reference/transport) receives a bang, the current bar is sent out the first outlet.

Out 2nd outlet: When [transport](https://docs.cycling74.com/reference/transport) receives a bang, the current beat (within the bar) is sent out the second outlet.

Out 7th outlet: When [transport](https://docs.cycling74.com/reference/transport) receives a bang, the Transport State is sent out the seventh outlet. A value of 1 means that the transport is on, and a value of 0 means that the transport it off.

### list

Out 6th outlet: When [transport](https://docs.cycling74.com/reference/transport) receives a bang, the current time signature is sent out the sixth outlet.

Out 9th outlet: When the message  getclocksources  is sent to [transport](https://docs.cycling74.com/reference/transport), a list of active clock sources is sent out the right outlet.

## See Also

| Name | Description |
| --- | --- |
| [metro](https://docs.cycling74.com/reference/metro) | Output a bang message at regular intervals |
| [translate](https://docs.cycling74.com/reference/translate) | Convert between different time formats |
| [timepoint](https://docs.cycling74.com/reference/timepoint) | Bang at a specific time |
| [when](https://docs.cycling74.com/reference/when) | Report the current transport time |
