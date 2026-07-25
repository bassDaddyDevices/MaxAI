---
type: msp
name: "degrade~"
summary: "Signal quality reducer"
signal: true
url: "https://docs.cycling74.com/reference/degrade~/"
package: "MSP"
see_also: ["downsamp~", "round~"]
---
# degrade~

Signal quality reducer

## Description

[degrade~](https://docs.cycling74.com/reference/degrade~) takes any given signal and reduces the sampling rate and bit-depth as specified/desired.

## Arguments

### resampling-frequency-ratio[float] optional

The first argument sets the resampling frequency ratio, as described above. If this argument is not supplied, the default value is 1.0.

### number-of-quantization-bits[int] optional

The second argument sets the number of bits used to quantize the input signal. If this argument is not supplied, the default value is 24.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

In right inlet: The number of bits used to quantize the input signal. This value must be in the range 1-52. Fewer bits mean lower signal quality.

Arguments:

- number-of-quantization-bits
  [int]

### float

In middle inlet: The ratio of frequency at which the input signal is resampled, effectively reducing its sampling rate. This ratio is the resampling rate divided by the system sampling rate. For example, if MSP"s current sampling rate is 44100 Hz, and the ratio is 0.75, the effective sampling rate of the output signal will be 33075 Hz.

Arguments:

- resampling-frequency-ratio
  [float]

### signal

In left inlet: The signal to be degraded.

## Output

### signal

The output signal is the input signal after being resampled and quantized. Note that this object deliberately does not use any interpolation when resampling, nor any dithering when quantizing. It is intended for creating "low-fi" effects.

Note: Use caution when listening to the output of this object. Quantizing to a small number of bits can create very loud, noisy signals.

## See Also

| Name | Description |
| --- | --- |
| [downsamp~](https://docs.cycling74.com/reference/downsamp~) | Downsample a signal |
| [round~](https://docs.cycling74.com/reference/round~) | Round an input signal value |
