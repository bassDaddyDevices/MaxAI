---
type: msp
name: "vectral~"
summary: "Vector-based envelope follower"
signal: true
url: "https://docs.cycling74.com/reference/vectral~/"
package: "MSP"
see_also: ["cartopol", "cartopol~", "deltaclip~", "fft~", "fftin~", "fftinfo~", "fftout~", "frameaccum~", "framedelta~", "ifft~", "pfft~", "poltocar", "poltocar~", "rampsmooth~", "slide~"]
---
# vectral~

Vector-based envelope follower

## Description

Use the [vectral~](https://docs.cycling74.com/reference/vectral~) object to filter frame-based signal data such as the output of the [fft~](https://docs.cycling74.com/reference/fft~) object.

#### Discussion

It may operate in one of the following modes:

 rampsmooth <up> <down> - linear ramp across up/down frames to the new value

 slide <up> <down> - logarithmic movement to new value

 deltaclip <max> <min> - limits the change in samples to be in the given range

## Arguments

### vector-size[int] optional

The argument is the vector size for the operation. It defaults to 512, but should be set appropriately for the size of the vectors you feed into the [vectral~](https://docs.cycling74.com/reference/vectral~) object.

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### clear

Clears object's sample memory (in case of a blow-up).

### deltaclip

In left inlet: The word  deltaclip , followed by two floats, limits the change in bins of successive vectors to the values given. This is equivalent to the time-domain [deltaclip~](https://docs.cycling74.com/reference/deltaclip~) object.

Arguments:

- low-limit
  [float]
- high-limit
  [float]

### rampsmooth

In left inlet: The word  rampsmooth , followed by two ints, causes the vector to be smoothed in a linear fashion across successive frames. The arguments specify the number of frames to use to interpolate values in both directions. This is equivalent to the time-domain filtering done by the [rampsmooth~](https://docs.cycling74.com/reference/rampsmooth~) object.

Arguments:

- number-of-interpolating-frames
  [list]

### signal

In left inlet: A sync signal for the index of the output vector. This is typically in the range of 0 to n-1 (where n is the size of the vector).

In middle inlet: A sync signal received in the middle inlet is used to synchronize the input index of the vector being processed. The sync signal will typically be in the range 0 to n-1 (where n is the size of the vector). If the left and middle inlets are "out-of-sync", the incoming vector's bins will shift by the difference between the two signals.

In right inlet: Signal data to be filtered. This will usually be frequency-domain information such as the output of an [fft~](https://docs.cycling74.com/reference/fft~) or [fftin~](https://docs.cycling74.com/reference/fftin~) object.

### size

In left inlet: The word  size , followed by a number, sets the vector size for the operation. The default is 512.

Arguments:

- vector-size
  [int]

### slide

In left inlet: The word  slide , followed by two floats, causes [vectral~](https://docs.cycling74.com/reference/vectral~) to do logarithmic interpolation of successive vectors in a manner equivalent to the time-domain [slide~](https://docs.cycling74.com/reference/slide~) object. The two arguments determine the denominator coefficient for the amount of the slide.

Arguments:

- slide-denominator-coefficients (2 floats)
  [list]

## Output

### signal

A smoothed version of the signal input into the right inlet, according to the parameters given to the [vectral~](https://docs.cycling74.com/reference/vectral~) object.

## See Also

| Name | Description |
| --- | --- |
| [cartopol](https://docs.cycling74.com/reference/cartopol) | Convert cartesian to polar coordinates |
| [cartopol~](https://docs.cycling74.com/reference/cartopol~) | Signal Cartesian to Polar coordinate conversion |
| [deltaclip~](https://docs.cycling74.com/reference/deltaclip~) | Limit changes in signal amplitude |
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
| [rampsmooth~](https://docs.cycling74.com/reference/rampsmooth~) | Smooth an incoming signal |
| [slide~](https://docs.cycling74.com/reference/slide~) | Filter a signal logarithmically |
