---
type: msp
name: "fftinfo~"
summary: "Report information about a patcher loaded by pfft~"
signal: true
url: "https://docs.cycling74.com/reference/fftinfo~/"
package: "MSP"
see_also: ["cartopol", "cartopol~", "fft~", "fftin~", "fftout~", "frameaccum~", "framedelta~", "ifft~", "pfft~", "poltocar", "poltocar~", "vectral~"]
---
# fftinfo~

Report information about a patcher loaded by pfft~

## Description

[fftinfo~](https://docs.cycling74.com/reference/fftinfo~) gets info about the fft frames in a patcher loaded by a [pfft~](https://docs.cycling74.com/reference/pfft~). It reports the information when sent a  bang  or whenever DSP is turned on via a [dac~](https://docs.cycling74.com/reference/dac~) ([fftinfo~](https://docs.cycling74.com/reference/fftinfo~) only functions within a [pfft~](https://docs.cycling74.com/reference/pfft~)).

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Causes the FFT window size, the FFT frame size (i.e., the signal vector size inside the patcher loaded by [pfft~](https://docs.cycling74.com/reference/pfft~)), and the FFT hop size to be sent out the object's outputs.

### signal

Reports the FFT window size, the FFT frame size, and the FFT hop size of the signal network to which it is connected.

## Output

### int

Out left outlet: The current FFT window size specified by argument to the [pfft~](https://docs.cycling74.com/reference/pfft~) object.

Out middle-left outlet: The current spectral frame size (half the FFT window size).

Out middle-right outlet: The current FFT hop size (i.e., the window size divided by the overlap).

Out right outlet: The full spectrum flag. It indicates whether or not the spectral subpatch of the parent [pfft~](https://docs.cycling74.com/reference/pfft~) object is processing the default half-spectrum FFT frames, or full (mirrored) FFT spectrum frames.

## See Also

| Name | Description |
| --- | --- |
| [cartopol](https://docs.cycling74.com/reference/cartopol) | Convert cartesian to polar coordinates |
| [cartopol~](https://docs.cycling74.com/reference/cartopol~) | Signal Cartesian to Polar coordinate conversion |
| [fft~](https://docs.cycling74.com/reference/fft~) | Fast Fourier transform |
| [fftin~](https://docs.cycling74.com/reference/fftin~) | Input for a patcher loaded by pfft~ |
| [fftout~](https://docs.cycling74.com/reference/fftout~) | Output for a patcher loaded by pfft~ |
| [frameaccum~](https://docs.cycling74.com/reference/frameaccum~) | Compute "running phase" of successive phase deviation frames |
| [framedelta~](https://docs.cycling74.com/reference/framedelta~) | Compute phase deviation between successive FFT frames |
| [ifft~](https://docs.cycling74.com/reference/ifft~) | Inverse fast Fourier transform |
| [pfft~](https://docs.cycling74.com/reference/pfft~) | Spectral processing manager for patchers |
| [poltocar](https://docs.cycling74.com/reference/poltocar) | Convert polar to cartesian coordinates |
| [poltocar~](https://docs.cycling74.com/reference/poltocar~) | Signal Polar to Cartesian coordinate conversion |
| [vectral~](https://docs.cycling74.com/reference/vectral~) | Vector-based envelope follower |
