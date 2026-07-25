---
type: mc
name: "mc.framedelta~"
summary: "Compute phase deviation between successive FFT frames  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.framedelta~/"
package: "MC"
see_also: ["frameaccum~"]
---
# mc.framedelta~

Compute phase deviation between successive FFT frames (multichannel)

## Description

[framedelta~](https://docs.cycling74.com/reference/framedelta~) computes a running phase deviation by subtracting values in each position of its previously received signal vector from the current signal vector. When used inside a [pfft~](https://docs.cycling74.com/reference/pfft~) object, it keeps a running phase deviation of the FFT because the FFT size is equal to the signal vector size.

## Arguments

None.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### clear >= 8.3.0

Clears all of the [framedelta~](https://docs.cycling74.com/reference/framedelta~) object's internal buffers.

### signal

The input on which the deviation will be computed.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

For each signal vector, the first sample of its output will be the first sample in the current signal vector minus the first sample in the previous signal vector, the second sample of its output will be the second sample in the current signal vector minus the second sample in the previous signal vector, and so on.

## See Also

| Name | Description |
| --- | --- |
| [frameaccum~](https://docs.cycling74.com/reference/frameaccum~) | Compute "running phase" of successive phase deviation frames |
