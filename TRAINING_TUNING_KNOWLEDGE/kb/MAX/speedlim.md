---
type: max
name: "speedlim"
summary: "Limit the speed of message throughput"
signal: false
url: "https://docs.cycling74.com/reference/speedlim/"
package: "Max"
see_also: ["delay", "mousefilter", "thresh", "timer", "transport"]
---
# speedlim

Limit the speed of message throughput

## Description

Limit the throughput speed of incoming messages to a fixed time limit. The time can be specified in milliseconds or using a tempo-relative interval.

#### Discussion

[speedlim](https://docs.cycling74.com/reference/speedlim) takes one optional argument which is a speedlimiting time. This object uses the Max [time format](https://docs.cycling74.com/userguide/time_value_syntax) syntax, and the interval that the [speedlim](https://docs.cycling74.com/reference/speedlim) object uses can be either fixed or tempo-relative. Its output can be also be quantized using tempo-relative syntax.

The left inlet takes any message and outputs it according to the argument value. The right inlet takes  int  to change the speedlimiting time.

## Arguments

### delta-time[int, float, symbol] optional

Sets an initial minimum time between outputs. Time can be specified in any of the [time formats](https://docs.cycling74.com/userguide/time_value_syntax) used in Max. If there is no argument, the minimum time is 0 milliseconds.

## Attributes

### defer[float]: 0.

Turn this on to send output in the low-priority queue.

### quantize[Time Value]: 0 ticks

Send output only on the specified time-boundary if appropriate. This is achieved by making internal adjustments to the times used for sending output. The quantization can be specified in the following [time formats](https://docs.cycling74.com/userguide/time_value_syntax): bars.beats.units, ticks or note values.

### threshold[Time Value]: 0 ms

Time threshold under which only one message may pass. Time can be specified in any of the [time formats](https://docs.cycling74.com/userguide/time_value_syntax) used in Max.

### usurp[int]: 1

When usurp is enabled and multiple messages are received that could be output, the most recently received message replaces any currently pending message. When usurp is disabled, all messages received will be sent out.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Performs the same function as an  anything  message applied to the passing of  bang  messages.

### int

In left inlet: Performs the same function as an  anything  message applied to the passing of integers.

In right inlet: The number is stored as the minimum amount of time, in milliseconds, between successive outputs.

Arguments:

- input
  [int]

### float

Performs the same function as an  anything  message applied to the passing of floats..

Arguments:

- input
  [float]

### list

In left inlet: Performs the same function as an  anything  message applied to the passing of lists.

In right inlet: A list may be used to specify time in one of the Max [time formats](https://docs.cycling74.com/userguide/time_value_syntax).

Arguments:

- input
  [list]

### anything

In left inlet: The message is passed out the outlet, provided that a certain minimum time has elapsed since the previous output. Otherwise, the message is held until that amount of time has passed (or until it is overwritten by another incoming message).

Arguments:

- input
  [list]

## Output

### anything

A message received in the left inlet is sent out the outlet, provided the specified minimum amount of time has elapsed since the previous output. Otherwise, [speedlim](https://docs.cycling74.com/reference/speedlim) waits until that amount of time has passed, then sends out the last message it has received since the previous output.

## See Also

| Name | Description |
| --- | --- |
| [delay](https://docs.cycling74.com/reference/delay) | Delay a bang |
| [mousefilter](https://docs.cycling74.com/reference/mousefilter) | Gate messages with the mouse |
| [thresh](https://docs.cycling74.com/reference/thresh) | Combine numbers, symbols and lists when received close together |
| [timer](https://docs.cycling74.com/reference/timer) | Report elapsed time between two events |
| [transport](https://docs.cycling74.com/reference/transport) | Control a clock |
