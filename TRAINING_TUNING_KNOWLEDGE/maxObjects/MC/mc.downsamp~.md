---
type: mc
name: "mc.downsamp~"
summary: "Downsample a signal  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.downsamp~/"
package: "MC"
see_also: ["degrade~", "sah~"]
---
# mc.downsamp~

Downsample a signal (multichannel)

## Description

[downsamp~](https://docs.cycling74.com/reference/downsamp~) samples and holds a signal received in the left inlet at a rate set by an argument to the object of the value received in the right inlet, expressed in samples. No interpolation of the output is performed.

## Arguments

### downsampled-rate[number] optional

Sets the sample rate.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In right inlet: Sets the sample rate used to downsample the input signal. You can specify the number of samples with floating-point values, but the [downsamp~](https://docs.cycling74.com/reference/downsamp~) object will sample the input at most as frequently as the current sampling rate.

Arguments:

- downsampled-rate
  [int]

### float

In right inlet: Sets the sample rate used to downsample the input signal. You can specify the number of samples with floating-point values, but the [downsamp~](https://docs.cycling74.com/reference/downsamp~) object will sample the input at most as frequently as the current sampling rate.

Arguments:

- downsampled-rate
  [float]

### signal

In left inlet: A signal to be downsampled.

In right inlet: The rate, in samples, at which the incoming signal is to be downsampled.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

The input signal, resampled at the rate set by argument or by the value received in the right inlet.

## See Also

| Name | Description |
| --- | --- |
| [degrade~](https://docs.cycling74.com/reference/degrade~) | Signal quality reducer |
| [sah~](https://docs.cycling74.com/reference/sah~) | Sample and hold a signal |
