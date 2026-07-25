---
type: msp
name: "overdrive~"
summary: "Soft-clipping signal distortion"
signal: true
url: "https://docs.cycling74.com/reference/overdrive~/"
package: "MSP"
see_also: ["kink~", "lookup~"]
---
# overdrive~

Soft-clipping signal distortion

## Description

The [overdrive~](https://docs.cycling74.com/reference/overdrive~) object uses a waveshaping function to distort audio signals. It amplifies signals, limiting the maximum value of the signal to +/- 1. Values outside of this range are removed using "soft clipping" somewhat like that of an overdriven tube-based circuit.

## Arguments

### drive-factor[float] optional

A single number can be provided to set the drive factor. If no argument is provided, the drive factor is set to 1.0.

### drive-factor[int] optional

Integer inputs are converted to  float  and set the drive factor.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

Integer inputs are converted to  float  and set the drive factor. The drive factor should usually be in the range 1 - 10. Using a factor of 1 creates a linear response without distortion, and higher values increase the distortion. Values less than 1, including negative values, produce very heavily distorted signals. Use with caution.

Arguments:

- drive-factor
  [int]

### float

In right inlet: The [overdrive~](https://docs.cycling74.com/reference/overdrive~) object accepts a floating-point "drive factor". The drive factor should usually be in the range 1.0-10.0. Using a factor of 1.0 creates a linear response without distortion, and higher values increase the distortion. Values less than 1, including negative values, produce very heavily distorted signals. Use with caution, this behavior was originally considered a bug until friends of the object's creator insisted that it should be considered a feature and left intact.)

Arguments:

- drive-factor
  [float]

### signal

In left inlet: the signal to be distorted.

In right inlet: the drive factor as a signal value.

## Output

### signal

The distorted signal.

## See Also

| Name | Description |
| --- | --- |
| [kink~](https://docs.cycling74.com/reference/kink~) | Distort a sawtooth waveform |
| [lookup~](https://docs.cycling74.com/reference/lookup~) | Transfer function lookup table |
