---
type: msp
name: "ifft~"
summary: "Inverse fast Fourier transform"
signal: true
url: "https://docs.cycling74.com/reference/ifft~/"
package: "MSP"
see_also: ["cartopol", "cartopol~", "fft~", "fftin~", "fftinfo~", "fftout~", "frameaccum~", "framedelta~", "pfft~", "poltocar", "poltocar~", "vectral~"]
---
# ifft~

Inverse fast Fourier transform

## Description

[ifft~](https://docs.cycling74.com/reference/ifft~) performs an Inverse FFT (inverse fast Fourier transform) on an input signal.

## Arguments

### number-of-IFFT-samples[int] optional

The first argument specifies the number of points (samples) in the IFFT. It must be a power of two. The default number of points is 512. The minimum number of points is 16. The maximum number of points for the FFT is 1048576.

### interval[int] optional

The second argument specifies the number of samples between successive IFFTs. This must be at least the number of points, and must also be a power of two. The default interval is 512.

### offset[int] optional

The third argument specifies the offset into the interval where the IFFT will start. This must either be 0 or a multiple of the signal vector size.

## Attributes

### fftsize[int]

The FFT Size is the number of points (samples) in the IFFT. It must be a power of two. The default number of points is 512. The minimum number of points is 16. The maximum number of points for the FFT is 1048576. Any changes to this value will take effect the next time signal processing is turned on.

### float32[int]

If
float32
is enabled, the IFFT will be performed using 32 bit floating point precision. This allows for faster performance using SIMD optimized code. This flag is ignored if
legacy
is enabled. Any changes to this value will take effect the next time signal processing is turned on.

### interval[int]

The number of samples between successive IFFTs. This must be at least the number of points, and must also be a power of two. The default interval is 512. Any changes to this value will take effect the next time signal processing is turned on.

### legacy[int]

If
legacy
is enabled, the IFFT will be performed using the legacy IFFT implementation with no SIMD optimization. Any changes to this value will take effect the next time signal processing is turned on.

### offset[int]

The offset into the interval where the IFFT will start. This must either be 0 or a multiple of the signal vector size. Any changes to this value will take effect the next time signal processing is turned on.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### phase

Offset from the beginning of a period when the IFFT is performed

Arguments:

- offset
  [int]

### signal

In left inlet: The real part of a complex signal that will be inverse transformed.

In right inlet: The imaginary part of a complex signal that will be inverse transformed.

If signals are connected only to the left inlet and left outlet, a real IFFT (inverse Fast Fourier transform) will be performed. Otherwise, a complex IFFT will be performed.

## Output

### signal

Out left outlet: The real part of the inverse Fourier transform of the input. The output begins after all the points of the input have been received.

Out middle outlet: The imaginary part of the inverse Fourier transform of the input. The output begins after all the points of the input have been received.

Out right outlet: A sync  signal  that ramps from 0 to the number of points minus 1 over the period in which the IFFT output occurs. When the IFFT is not being output (in the case where the interval is larger than the number of points), the sync  signal  is 0.

## See Also

| Name | Description |
| --- | --- |
| [cartopol](https://docs.cycling74.com/reference/cartopol) | Convert cartesian to polar coordinates |
| [cartopol~](https://docs.cycling74.com/reference/cartopol~) | Signal Cartesian to Polar coordinate conversion |
| [fft~](https://docs.cycling74.com/reference/fft~) | Fast Fourier transform |
| [fftin~](https://docs.cycling74.com/reference/fftin~) | Input for a patcher loaded by pfft~ |
| [fftinfo~](https://docs.cycling74.com/reference/fftinfo~) | Report information about a patcher loaded by pfft~ |
| [fftout~](https://docs.cycling74.com/reference/fftout~) | Output for a patcher loaded by pfft~ |
| [frameaccum~](https://docs.cycling74.com/reference/frameaccum~) | Compute "running phase" of successive phase deviation frames |
| [framedelta~](https://docs.cycling74.com/reference/framedelta~) | Compute phase deviation between successive FFT frames |
| [pfft~](https://docs.cycling74.com/reference/pfft~) | Spectral processing manager for patchers |
| [poltocar](https://docs.cycling74.com/reference/poltocar) | Convert polar to cartesian coordinates |
| [poltocar~](https://docs.cycling74.com/reference/poltocar~) | Signal Polar to Cartesian coordinate conversion |
| [vectral~](https://docs.cycling74.com/reference/vectral~) | Vector-based envelope follower |
