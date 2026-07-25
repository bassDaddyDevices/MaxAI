---
type: mc
name: "mc.deltaclip~"
summary: "Limit changes in signal amplitude (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.deltaclip~/"
package: "MC"
see_also: ["clip~"]
---
# mc.deltaclip~

Limit changes in signal amplitude (multichannel)

## Description

[deltaclip~](https://docs.cycling74.com/reference/deltaclip~) limits the change between samples in an incoming signal. It is similar to the [clip~](https://docs.cycling74.com/reference/clip~) object, but it limits amplitude changes with respect to slope rather than amplitude.

## Arguments

### minimum-slope-value[float] optional

Initial minimum slope value for the rate of change of the output signal. If no argument is supplied, the minimum limit is initially set to  0 . If a signal is connected to the middle inlet, the corresponding argument is ignored.

### minimum and maximum-slope-values[float] optional

Initial maximum slope value for the rate of change of the output signal. If no argument is supplied, the maximum limit is initially set to  0 . If a signal is connected to the right inlet, the corresponding argument is ignored.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes-v2.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In middle inlet: Minimum slope for the rate of change of the output signal. The minimum slope is typically negative.

In right inlet: Maximum slope for the rate of change of the output signal. The maximum slope is typically positive.

Arguments:

- minimum and maximum-slope-value
  [int]

### float

In middle inlet: Minimum slope for the rate of change of the output signal. The minimum slope is typically negative.

In right inlet: Maximum slope for the rate of change of the output signal. The maximum slope is typically positive.

Arguments:

- minimum and maximum-slope-value
  [float]

### (inlet1)

In middle inlet: Minimum slope for the rate of change of the output signal. The minimum slope is typically negative.

Arguments:

- minimum-slope-value
  [float]

### (inlet2)

In right inlet: Maximum slope for the rate of change of the output signal. The maximum slope is typically positive.

Arguments:

- maximum-slope-value
  [float]

### reset

Resets the minimum and maximum slope values to the default value of 0.

### signal

In left inlet: Any signal.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The input signal is sent out, with its change limited by the minimum and maximum slope values.

## See Also

| Name | Description |
| --- | --- |
| [clip~](https://docs.cycling74.com/reference/clip~) | Limit signal amplitude |
