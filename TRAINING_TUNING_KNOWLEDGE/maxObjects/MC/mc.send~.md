---
type: mc
name: "mc.send~"
summary: "Send signals without patch cords"
signal: true
url: "https://docs.cycling74.com/reference/mc.send~/"
package: "MC"
see_also: ["mc.receive~", "receive~", "send~"]
---
# mc.send~

TEXT\_HERE

## Arguments

### object-name[symbol] optional

Sets the name of the [mc.send~](https://docs.cycling74.com/reference/mc.send~) object.

### channel-count[int] optional

Sets how many channels [mc.send~](https://docs.cycling74.com/reference/mc.send~) should send to [mc.receive~](https://docs.cycling74.com/reference/mc.receive~). Otherwise, default is (logical channel) 1. When working with [receive~](https://docs.cycling74.com/reference/receive~), this argument is optional and unnecessary as there is only one channel of audio.

## Attributes

### name[symbol]

Name

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### clear

TEXT\_HERE

### (mouse)

TEXT\_HERE

### set

TEXT\_HERE

Arguments:

- object-name
  [symbol]

### signal

TEXT\_HERE

## Output

### Signal-Routing

Signals are routed remotely (i.e., sans patch-cord-connection).

## See Also

| Name | Description |
| --- | --- |
| [mc.receive~](https://docs.cycling74.com/reference/mc.receive~) | TEXT\_HERE |
| [receive~](https://docs.cycling74.com/reference/receive~) | Signals can be received from any loaded patcher, without patch cords |
| [send~](https://docs.cycling74.com/reference/send~) | Send signals without patch cords |
