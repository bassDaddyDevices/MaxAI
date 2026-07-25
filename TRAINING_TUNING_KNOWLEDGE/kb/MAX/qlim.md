---
type: max
name: "qlim"
summary: "Limit the speed of message throughput"
signal: false
url: "https://docs.cycling74.com/reference/qlim/"
package: "Max"
see_also: ["speedlim"]
---
# qlim

Queue-based message limiter

## Description

Slows down throughput of messages. Limiting is based on a minimum amount of time between passed message.

#### Discussion

The [qlim](https://docs.cycling74.com/reference/qlim) object is similar to a combination of the [speedlim](https://docs.cycling74.com/reference/speedlim) and the Jitter [jit.qball](https://docs.cycling74.com/reference/jit.qball) object. In Jitter, most execution take places in the low priority queue to prevent drawing to the screen at interrupt. The [speedlim](https://docs.cycling74.com/reference/speedlim) object unfortunately places messages back in the scheduler for execution, and thus may result in a crash when used to temporally downsample streams of Jitter matrices if Overdrive is turned on. The [qlim](https://docs.cycling74.com/reference/qlim) object is an interrupt safe replacement for this and other tasks.

## Arguments

### minimum[int]ms optional

The minimum amount of time between successive outputs. Time can be specified in any of the time formats used in Max. If there is no argument, the minimum time is 0 milliseconds.

## Attributes

### defer[float]: 0.

Turn this on to send output in the low-priority queue.

### quantize[Time Value]: 0 ticks

Send output only on the specified time-boundary if appropriate. This is achieved by making internal adjustments to the times used for sending output. The quantization can be specified in the following [time formats](https://docs.cycling74.com/userguide/time_value_syntax): bars.beats.units, ticks or note values.

### threshold[Time Value]: 0 ms

Sets the time threshold. The threshold can be specified in the following [time formats](https://docs.cycling74.com/userguide/time_value_syntax): bars.beats.units, ticks or note values.

### usurp[int]: 1

When usurp is enabled and multiple messages are received that could be output, the most recently received message replaces any currently queued message. When usurp is disabled, all messages received will be sent out. The difference is subtle and it is typically appropriate to leave usurp enabled for most situations.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Performs the same function as an  anything  message applied to the passing of  bang  messages.

### int

In left inlet: Equivalent to  anything .
In right inlet: The number is stored as the minimum amount of time, in milliseconds, between successive outputs.

Arguments:

- number
  [int]

### float

In left inlet: Equivalent to  anything .

Arguments:

- number
  [float]

### list

In left inlet: Equivalent to  anything .

Arguments:

- list items
  [list]

### anything

In left inlet: Any number, bang, or message is passed out the outlet, provided that a certain minimum time has elapsed since the previous output. Otherwise, the message is held until that amount of time has passed (or until it is overwritten by another incoming message).

Arguments:

- anything
  [list]

## See Also

| Name | Description |
| --- | --- |
| [speedlim](https://docs.cycling74.com/reference/speedlim) | Limit the speed of message throughput |
