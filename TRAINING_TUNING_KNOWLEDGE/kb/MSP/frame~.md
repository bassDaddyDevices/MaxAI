---
type: msp
name: "frame~"
summary: "Output a list as an FFT frame or a signal vector"
signal: true
url: "https://docs.cycling74.com/reference/frame~/"
package: "MSP"
see_also: ["cartopol", "cartopol~", "fft~", "fftin~", "fftinfo~", "fftout~", "frameaccum~", "framedelta~", "framesnap~", "ifft~", "in", "out", "poltocar", "poltocar~", "vectral~"]
---
# frame~

Output a list as an FFT frame or a signal vector

## Description

The [frame~](https://docs.cycling74.com/reference/frame~) object is similar to the MSP [sig~](https://docs.cycling74.com/reference/sig~) object, but it provides a way to output lists inside a patcher loaded by the [pfft~](https://docs.cycling74.com/reference/pfft~) object or to provide signal vector information outside of the [pfft~](https://docs.cycling74.com/reference/pfft~) domain.

## Arguments

None.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### int

An integer sent to the [frame~](https://docs.cycling74.com/reference/frame~) object will cause a signal vector containing that value to be sent out the object's outlet.

Arguments:

- signal-vector-value
  [int]

### float

A floating point number sent to the [frame~](https://docs.cycling74.com/reference/frame~) object will cause a signal vector containing that value to be sent out the object's outlet.

Arguments:

- signal-vector-value
  [float]

### list

A list of integers or floating point numbers sent to the [frame~](https://docs.cycling74.com/reference/frame~) object will cause a signal vector containing those values to be sent out the object's outlet.

Arguments:

- signal-vector-value
  [list]

### anything

Any integer, floating point number, or list sent to the [frame~](https://docs.cycling74.com/reference/frame~) object will cause a signal vector containing the value(s) to be sent out the object's outlet.

Arguments:

- signal-vector-value
  [list]

### fill

By default, the [frame~](https://docs.cycling74.com/reference/frame~) object sets all unspecified frame values to 0. The word  fill , followed by an integer or floating point value, will set all unspecified frame values to that amount.

Arguments:

- frame-value
  [list]

### mirror

By default, the [frame~](https://docs.cycling74.com/reference/frame~) object sets all frame values above the Nyquist frequency to 0. When used in conjunction with a [pfft~](https://docs.cycling74.com/reference/pfft~) object set to full spectrum mode, the message  mirror 1  will enable mirroring all frame values.

Arguments:

- mirroring
  [int]

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
| [framesnap~](https://docs.cycling74.com/reference/framesnap~) | Output an FFT frame or signal vector as a list |
| [ifft~](https://docs.cycling74.com/reference/ifft~) | Inverse fast Fourier transform |
| [in](https://docs.cycling74.com/reference/in) | Message input for a patcher loaded by poly~ or pfft~ |
| [out](https://docs.cycling74.com/reference/out) | Message output for a patcher loaded by poly~ or pfft~ |
| [poltocar](https://docs.cycling74.com/reference/poltocar) | Convert polar to cartesian coordinates |
| [poltocar~](https://docs.cycling74.com/reference/poltocar~) | Signal Polar to Cartesian coordinate conversion |
| [vectral~](https://docs.cycling74.com/reference/vectral~) | Vector-based envelope follower |
