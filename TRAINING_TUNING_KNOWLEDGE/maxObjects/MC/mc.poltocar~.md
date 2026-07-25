---
type: mc
name: "mc.poltocar~"
summary: "Signal Polar to Cartesian coordinate conversion  (multichannel)"
signal: true
url: "https://docs.cycling74.com/reference/mc.poltocar~/"
package: "MC"
see_also: ["cartopol", "cartopol~", "fft~", "fftin~", "fftinfo~", "fftout~", "frameaccum~", "framedelta~", "ifft~", "pfft~", "poltocar", "vectral~"]
---
# mc.poltocar~

Signal Polar to Cartesian coordinate conversion (multichannel)

## Description

[poltocar~](https://docs.cycling74.com/reference/poltocar~) will take any given signal as a polar coordinate and output the cartesian conversion of that signal.

## Arguments

None.

## Attributes

### Multichannel Group Attributes

Shared across all objects — see [Multichannel Group Attributes](../_shared/mc-group-attributes.md).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

In left inlet: The magnitude (amplitude) of the frequency bin to be converted into a cartesian (real/imaginary) signal pair.

In right inlet: The phase of the frequency bin to be converted into a cartesian (real/imaginary) signal pair.

### Multichannel Group Messages

Shared across all objects — see [Multichannel Group Messages](../_shared/mc-group-messages.md).

## Output

### signal

Out left outlet: The real part of a frequency domain signal suitable for input into an [ifft~](https://docs.cycling74.com/reference/ifft~) or [fftout~](https://docs.cycling74.com/reference/fftout~) object.

Out right outlet: The imaginary part of a frequency domain signal suitable for input into an [ifft~](https://docs.cycling74.com/reference/ifft~) or [fftout~](https://docs.cycling74.com/reference/fftout~) object.

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
| [ifft~](https://docs.cycling74.com/reference/ifft~) | Inverse fast Fourier transform |
| [pfft~](https://docs.cycling74.com/reference/pfft~) | Spectral processing manager for patchers |
| [poltocar](https://docs.cycling74.com/reference/poltocar) | Convert polar to cartesian coordinates |
| [vectral~](https://docs.cycling74.com/reference/vectral~) | Vector-based envelope follower |
