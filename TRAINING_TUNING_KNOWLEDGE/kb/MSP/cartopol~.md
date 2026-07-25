---
type: msp
name: "cartopol~"
summary: "Signal Cartesian to Polar coordinate conversion"
signal: true
url: "https://docs.cycling74.com/reference/cartopol~/"
package: "MSP"
see_also: ["cartopol", "fft~", "fftin~", "fftinfo~", "fftout~", "frameaccum~", "framedelta~", "ifft~", "pfft~", "poltocar", "poltocar~", "vectral~"]
---
# cartopol~

Signal Cartesian to Polar coordinate conversion

## Description

Use the [cartopol~](https://docs.cycling74.com/reference/cartopol~) object to convert signal values representing cartesian coordinates to a signal composed of polar coordinates.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

In left inlet: The real part of a frequency domain signal (such as that created by the [fft~](https://docs.cycling74.com/reference/fft~) or [fftin~](https://docs.cycling74.com/reference/fftin~) objects) to be converted to a polar-coordinate signal pair consisting of amplitude and phase values.

In right inlet: The imaginary part of a frequency domain signal (such as that created by the [fft~](https://docs.cycling74.com/reference/fft~) or [fftin~](https://docs.cycling74.com/reference/fftin~) objects) to be converted to a polar-coordinate signal pair consisting of amplitude and phase values.

## Output

### signal

Out left outlet: The magnitude (amplitude) of the frequency bin represented by the current input signals.

Out right outlet: The phase, expressed in radians, of the frequency bin represented by the current input signals. If only the left outlet is connected the phase computation will be bypassed, reducing the intensity of the computation.

## See Also

| Name | Description |
| --- | --- |
| [cartopol](https://docs.cycling74.com/reference/cartopol) | Convert cartesian to polar coordinates |
| [fft~](https://docs.cycling74.com/reference/fft~) | Fast Fourier transform |
| [fftin~](https://docs.cycling74.com/reference/fftin~) | Input for a patcher loaded by pfft~ |
| [fftinfo~](https://docs.cycling74.com/reference/fftinfo~) | Report information about a patcher loaded by pfft~ |
| [fftout~](https://docs.cycling74.com/reference/fftout~) | Output for a patcher loaded by pfft~ |
| [frameaccum~](https://docs.cycling74.com/reference/frameaccum~) | Compute "running phase" of successive phase deviation frames |
| [framedelta~](https://docs.cycling74.com/reference/framedelta~) | Compute phase deviation between successive FFT frames |
| [ifft~](https://docs.cycling74.com/reference/ifft~) | Inverse fast Fourier transform |
| [pfft~](https://docs.cycling74.com/reference/pfft~) | Spectral processing manager for patchers |
| [poltocar](https://docs.cycling74.com/reference/poltocar) | Convert polar to cartesian coordinates |
| [poltocar~](https://docs.cycling74.com/reference/poltocar~) | Signal Polar to Cartesian coordinate conversion |
| [vectral~](https://docs.cycling74.com/reference/vectral~) | Vector-based envelope follower |
