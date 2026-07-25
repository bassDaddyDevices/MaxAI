---
type: mc
name: "mc.receive~"
summary: "Signals can be received from any loaded patcher, without patch cords"
signal: true
url: "https://docs.cycling74.com/reference/mc.receive~/"
package: "MC"
see_also: ["mc.send~", "send~", "receive~"]
---
# mc.receive~

TEXT\_HERE

## Arguments

### object-name[symbol] optional

Sets the name of the [mc.receive~](https://docs.cycling74.com/reference/mc.receive~) object.

### channel-count[int] optional

Sets how many channels [mc.receive~](https://docs.cycling74.com/reference/mc.receive~) should output from [mc.send~](https://docs.cycling74.com/reference/mc.send~). Otherwise, default is (logical channel) 1. When working with [send~](https://docs.cycling74.com/reference/send~), this argument is optional and unnecessary as there is only one channel of audio.

## Attributes

### chans[int]

Output Channels

### name[symbol]

Name

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

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

### signal

The combination of all signals coming into all [mc.send~](https://docs.cycling74.com/reference/mc.send~) or [send~](https://docs.cycling74.com/reference/send~) objects with the same name as the [mc.receive~](https://docs.cycling74.com/reference/mc.receive~).

## See Also

| Name | Description |
| --- | --- |
| [mc.send~](https://docs.cycling74.com/reference/mc.send~) | TEXT\_HERE |
| [send~](https://docs.cycling74.com/reference/send~) | Send signals without patch cords |
| [receive~](https://docs.cycling74.com/reference/receive~) | Signals can be received from any loaded patcher, without patch cords |
