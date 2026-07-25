---
type: msp
name: "windowed-fft~"
summary: "Windowed/Overlapped Fast Fourier Transform"
signal: true
url: "https://docs.cycling74.com/reference/windowed-fft~/"
package: "MSP"
see_also: ["fft~", "pfft~"]
---
# windowed-fft~

Windowed/Overlapped Fast Fourier Transform

## Description

[windowed-fft~](https://docs.cycling74.com/reference/windowed-fft~) is an abstraction wrapping a pair of [fft~](https://docs.cycling74.com/reference/fft~) objects and performing the necessary windowing and overlap to use the output for analysis.

## Arguments

### number-of-FFT-samples[int] optional

The first argument specifies the number of points (samples) in the FFT. It must be a power of two. If you are unsure, use 1024.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

Audio signal to be transformed from the time domain into the frequency domain.

## See Also

| Name | Description |
| --- | --- |
| [fft~](https://docs.cycling74.com/reference/fft~) | Fast Fourier transform |
| [pfft~](https://docs.cycling74.com/reference/pfft~) | Spectral processing manager for patchers |
