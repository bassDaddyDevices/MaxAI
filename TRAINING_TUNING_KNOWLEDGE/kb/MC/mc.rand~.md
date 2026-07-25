---
type: mc
name: "mc.rand~"
summary: "Band-limited random signal  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.rand~/"
package: "MC"
see_also: ["line~", "noise~", "pink~"]
---
# mc.rand~

Band-limited random signal (multichannel)

## Description

Use the [rand~](https://docs.cycling74.com/reference/rand~) object to generate a signal consisting of random values between -1 and 1 generated at a frequency specified by its input. It interpolates linearly between these values.

## Arguments

### initial-frequency[number]hz optional

Sets the initial frequency. The default value is 0. If a signal is connected to the inlet, the argument is ignored.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

The frequency at which a new random number between -1 and 1 is generated. [rand~](https://docs.cycling74.com/reference/rand~) interpolates linearly between random values chosen at the specified rate. If there is a signal connected to the inlet, the  int  is ignored.

Arguments:

- input
  [int]

### float

The frequency at which a new random number between -1 and 1 is generated. [rand~](https://docs.cycling74.com/reference/rand~) interpolates linearly between random values chosen at the specified rate. If there is a signal connected to the inlet, the  float  is ignored.

Arguments:

- input
  [float]

### signal

The frequency at which a new random number between -1 and 1 is generated. [rand~](https://docs.cycling74.com/reference/rand~) interpolates linearly between random values chosen at the specified rate.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

A signal consisting of line segments between random values in the range -1 to 1. The random values occur at the frequency specified by the input.

## See Also

| Name | Description |
| --- | --- |
| [line~](https://docs.cycling74.com/reference/line~) | Linear signal ramp generator |
| [noise~](https://docs.cycling74.com/reference/noise~) | Generate white noise |
| [pink~](https://docs.cycling74.com/reference/pink~) | Pink noise generator |
