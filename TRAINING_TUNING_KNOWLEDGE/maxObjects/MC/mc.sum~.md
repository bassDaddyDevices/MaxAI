---
type: mc
name: "mc.sum~"
summary: "Apply arithmetic operators to a multichannel signal"
signal: true
url: "https://docs.cycling74.com/reference/mc.sum~/"
package: "MC"
see_also: ["MC", "mc.mixdown~", "mc.dup~"]
---
# mc.sum~

Apply arithmetic operators to a multichannel signal

## Description

The [mc.op~](https://docs.cycling74.com/reference/mc.op~) object, similar to [jit.planeop](https://docs.cycling74.com/reference/jit.planeop), performs one of several arithmetic operations combining each sample of a multichannel input to produce a single-channel output.

## Arguments

None.

## Attributes

### op[symbol]: avg

The [mc.op~](https://docs.cycling74.com/reference/mc.op~) object can apply one of several operators to all channels of a connected multichannel signal. Each operator calculates the nth output sample on the basis of an operation on the nth sample of each input channel.

Possible values:

'avg'
(
Average
)
Each sample of the output is the average of corresponding samples in each input channel.

'sum'
(
Sum
)
Each sample of the output is the sum of corresponding samples in each input channel.

'product'
(
Product
)
Each sample of the output is produced by multiplying all corresponding samples in each input channel.

'min'
(
Minimum
)
Each sample of the output is produced by finding the minimum value of corresponding samples in each input channel.

'max'
(
Maximum
)
Each sample of the output is produced by finding the maximum value of corresponding samples in each input channel.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

[mc.op~](https://docs.cycling74.com/reference/mc.op~) will perform an arithmetic operation on all channels of a connected multichannel signal.

## See Also

| Name | Description |
| --- | --- |
| [MC](https://docs.cycling74.com/userguide/mc) | MC |
| [mc.mixdown~](https://docs.cycling74.com/reference/mc.mixdown~) | Mix and pan a multichannel signal |
| [mc.dup~](https://docs.cycling74.com/reference/mc.dup~) | Create a multichannel signal that duplicates a single-channel input |
