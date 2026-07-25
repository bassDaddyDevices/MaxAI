---
type: max
name: "defer"
summary: "Defer execution of a message"
signal: false
url: "https://docs.cycling74.com/reference/defer/"
package: "Max"
see_also: ["deferlow", "qlim", "uzi"]
---
# defer

Defer execution of a message

## Description

Defers the output of all messages sent through it to the lower priority main thread. This is most applicable when using Overdrive mode.

## Arguments

None.

## Attributes

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

Reduces the priority of the message received. This allows other messages (which may be more time-critical) to execute first.

Arguments:

- input
  [list]

## Output

### anything

Same as the input.

## See Also

| Name | Description |
| --- | --- |
| [deferlow](https://docs.cycling74.com/reference/deferlow) | Defer the execution of a message (always) |
| [qlim](https://docs.cycling74.com/reference/qlim) | Queue-based message limiter |
| [uzi](https://docs.cycling74.com/reference/uzi) | Send many bang messages |
