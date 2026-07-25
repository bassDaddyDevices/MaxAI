---
type: max
name: "schedule"
summary: "Schedule messages on high priority scheduler thread"
signal: false
url: "https://docs.cycling74.com/reference/schedule/"
package: "Max"
see_also: ["defer", "delay", "pipe", "threadcheck"]
---
# schedule

Schedule messages on high priority scheduler thread

## Description

The schedule object schedules messages to execute on the high priority scheduler thread, optionally with a delay time (ms), and optionally deferring to main application thread after the delay time. Similar to the delay and pipe objects, but supports arbitrary messages.

## Arguments

### delay[number] optional

Sets the delay time in milliseconds. Default is zero.

## Attributes

### defer[int]

When enabled, any scheduled message will be deferred to main application thread before being sent out the [schedule](https://docs.cycling74.com/reference/schedule) object's outlet.

### delay[float]

The amount of delay time in milliseconds used to schedule any incoming messages into the future.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Same as  anything .

### int

Same as  anything .

Arguments:

- input
  [int]

### float

Same as  anything .

Arguments:

- input
  [float]

### list

Same as  anything .

Arguments:

- input
  [list]

### anything

Schedules the messages to execute on the high priority scheduler thread. If a non-zero delay time is set, the message will be scheduled that number of milliseconds into the future. If
defer
is enabled, the message will then be deferred to main application thread before being sent out the [schedule](https://docs.cycling74.com/reference/schedule) object's outlet.

Arguments:

- input
  [list]

### clear

If there have been any messages scheduled that have not been output, the  clear  message will remove them from the scheduler and prevent them from being output.

### sendmessage

Same as  anything , but strips the "sendmessage" first element of the output message. This is useful if you need to schedule a message that uses any of the schedule object's message or attribute names like clear, delay, or defer.

Arguments:

- input
  [list]

## See Also

| Name | Description |
| --- | --- |
| [defer](https://docs.cycling74.com/reference/defer) | Defer execution of a message |
| [delay](https://docs.cycling74.com/reference/delay) | Delay a bang |
| [pipe](https://docs.cycling74.com/reference/pipe) | Delay numbers, lists or symbols |
| [threadcheck](https://docs.cycling74.com/reference/threadcheck) | Report the thread of execution for a message |
