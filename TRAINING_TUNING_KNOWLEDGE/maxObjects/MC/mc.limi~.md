---
type: mc
name: "mc.limi~"
summary: "Lookahead peak-limiter (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.limi~/"
package: "MC"
see_also: ["mc.limi~", "mcs.limi~", "omx.peaklim~"]
---
# mc.limi~

Lookahead peak-limiter (multichannel)

## Description

Lookahead peak-limiter.

## Arguments

### channel\_count[int] optional

The number of channels to process.

### buffer\_size[int] optional

The size (in samples) of internal buffers. This defines the maximum value for the lookahead attribute. The default is 512.

## Attributes

### bypass[int]

Pass the input straight-through.

### dcblock[int]

Filter DC Offsets at the input.

### lookahead[int]

Number of samples to look ahead.

### mode[int]

Response mode for the limiter. Choices are linear or exponential.

Possible values:

0 = 'Linear'

1 = 'Exponential'

### postamp[float]

Gain (db) applied after to processing.

### preamp[float]

Gain (db) applied prior to processing.

### release[float]

Millisecond release time.

### threshold[float]

Level (db) above which to apply limiting.

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### clear

Reset the limiter history.

### signal

Audio signal to process.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## See Also

| Name | Description |
| --- | --- |
| [mc.limi~](https://docs.cycling74.com/reference/mc.limi~) | Lookahead peak-limiter (multichannel) |
| [mcs.limi~](https://docs.cycling74.com/reference/mcs.limi~) | Lookahead peak-limiter |
| [omx.peaklim~](https://docs.cycling74.com/reference/omx.peaklim~) | OctiMax Peak Limiter |
