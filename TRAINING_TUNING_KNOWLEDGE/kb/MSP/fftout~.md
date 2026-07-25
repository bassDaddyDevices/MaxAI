---
type: msp
name: "fftout~"
summary: "Output for a patcher loaded by pfft~"
signal: true
url: "https://docs.cycling74.com/reference/fftout~/"
package: "MSP"
see_also: ["cartopol", "cartopol~", "fft~", "fftin~", "fftinfo~", "frameaccum~", "framedelta~", "ifft~", "out", "pfft~", "poltocar", "poltocar~", "vectral~"]
---
# fftout~

Output for a patcher loaded by pfft~

## Description

The [fftout~](https://docs.cycling74.com/reference/fftout~) object provides an signal output to a [pfft~](https://docs.cycling74.com/reference/pfft~) object.

#### Discussion

The [fftout~](https://docs.cycling74.com/reference/fftout~) object performs an inverse Fast Fourier Transform and applies a windowing function (an envelope), allowing the [pfft~](https://docs.cycling74.com/reference/pfft~) object to manage the overlap-add of the output signal windows.

## Arguments

### outlet-assignment[int] optional

Determines the outlet number in the [pfft~](https://docs.cycling74.com/reference/pfft~) which will receive the output of the [fftout~](https://docs.cycling74.com/reference/fftout~) object. Outlet assignments start at 1 for the leftmost outlet of [pfft~](https://docs.cycling74.com/reference/pfft~). Multiple [fftout~](https://docs.cycling74.com/reference/fftout~) objects will typically have different outlet numbers.

### phase-offset[float] optional

A second float argument to [fftout~](https://docs.cycling74.com/reference/fftout~) between 0. and 1. specifies a phase offset for the window applied to the inverse FFT performed by [fftout~](https://docs.cycling74.com/reference/fftout~). A value of 0.5 for the phase offset (equivalent to 180 degrees) could potentially be helpful if using an [fft~](https://docs.cycling74.com/reference/fft~) object directly inside the [pfft~](https://docs.cycling74.com/reference/pfft~) subpatcher, since the output phase of [fft~](https://docs.cycling74.com/reference/fft~) is shifted by 180 degrees.

### window-envelope-function[symbol] optional

Tells [fftout~](https://docs.cycling74.com/reference/fftout~) which window envelope function to use when overlapping fft's on the input signal. The options are  square  (i.e. no window envelope),  hanning  (the default), and  hamming . If the argument  nofft  is used, then the [fftout~](https://docs.cycling74.com/reference/fftout~) will echo its input signal to its output without performing a Fast Fourier transform. This allows you to output raw control signals from the [pfft~](https://docs.cycling74.com/reference/pfft~) to the parent patcher. Note that when the  nofft  option is used, overlap-adding is still being performed to create the output signal.

## Attributes

### nofft[int]

With nofft set, fftout~ allows for audio to pass out from the subpatcher through pfft~s outlets without performing an inverse fft. There are a few idiosyncratic behaviors for pfft~ in the default half spectrum frame mode and pfft~ in fullspectrum mode, which for legacy reasons behave as they do.

When pfft~ is in the default half spectrum mode, fftout~ ignores the windowing function, writing to the first half of the outgoing frame for the outer MSP patch.

If overlap is 2, this half frame box window works out perfectly so that there is no overlap between frames. If the overlap factor is greater than 2 there are a few ways to accomodate for the overlap so that overlapping frames do not accumulate to a value N times greater than desired output.

The first way is to enable @overlapscale 1. This will divide the output by the number of overlapping frames so that the sum of all overlapping frames will be averaged.

The second way is to use @windowsqueeze N to squeeze the window to fit in that number of fft-hops (fftsize/overlap). For default half spectrum that should typically be set to 1 hop because of the exclusive half frame box window. For full spectrum with its default hanning window, that should typically be set to 2. This can be useful to avoid having too many overlapping frames accumulated together and then averaged.

### overlapscale[int]

If
nofft
is enabled, this will divide the output by the number of overlapping frames so that the sum of all overlapping frames will be averaged.

### userwindow[symbol]:

When the
window
attribute is set to user, the
userwindow
attribute sets which buffer to use as the window function.

### window[symbol]: hanning

Set the window function to one of the built in window functions, or a user specified buffer.

Possible values:

'square'

'triangle'

'hanning'

'hamming'

'blackman'

'user'

### windowsqueeze[int]

If
nofft
is enabled,
windowsqueeze
can be used to squeeze the window to fit in that number of fft-hops (fftsize/overlap).

For default half spectrum,
windowsqueeze
should typically be set to 1 hop because of the exclusive half frame box window. For full spectrum with its default hanning window,
windowsqueeze
should typically be set to 2. This can be useful to avoid having too many overlapping frames accumulated together and then averaged.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

In left inlet: The real part of a signal that will be inverse-transformed back into the time domain.

In right inlet: The imaginary part of a signal that will be inverse-transformed back into the time domain.

Note that the real and imaginary inlets of [fftout~](https://docs.cycling74.com/reference/fftout~) expect only the first half of the spectrum, as output by [fftin~](https://docs.cycling74.com/reference/fftin~). This half-spectrum is called a spectral frame in [pfft~](https://docs.cycling74.com/reference/pfft~) terminology.

## Output

### signal

The [fftout~](https://docs.cycling74.com/reference/fftout~) object transforms frequency domain signals back into the time domain, at which point they are overlap-added and output by the corresponding outlet in the [pfft~](https://docs.cycling74.com/reference/pfft~) object in which the subpatcher is loaded. The [fftout~](https://docs.cycling74.com/reference/fftout~) object itself has no outlets.

## See Also

| Name | Description |
| --- | --- |
| [cartopol](https://docs.cycling74.com/reference/cartopol) | Convert cartesian to polar coordinates |
| [cartopol~](https://docs.cycling74.com/reference/cartopol~) | Signal Cartesian to Polar coordinate conversion |
| [fft~](https://docs.cycling74.com/reference/fft~) | Fast Fourier transform |
| [fftin~](https://docs.cycling74.com/reference/fftin~) | Input for a patcher loaded by pfft~ |
| [fftinfo~](https://docs.cycling74.com/reference/fftinfo~) | Report information about a patcher loaded by pfft~ |
| [frameaccum~](https://docs.cycling74.com/reference/frameaccum~) | Compute "running phase" of successive phase deviation frames |
| [framedelta~](https://docs.cycling74.com/reference/framedelta~) | Compute phase deviation between successive FFT frames |
| [ifft~](https://docs.cycling74.com/reference/ifft~) | Inverse fast Fourier transform |
| [out](https://docs.cycling74.com/reference/out) | Message output for a patcher loaded by poly~ or pfft~ |
| [pfft~](https://docs.cycling74.com/reference/pfft~) | Spectral processing manager for patchers |
| [poltocar](https://docs.cycling74.com/reference/poltocar) | Convert polar to cartesian coordinates |
| [poltocar~](https://docs.cycling74.com/reference/poltocar~) | Signal Polar to Cartesian coordinate conversion |
| [vectral~](https://docs.cycling74.com/reference/vectral~) | Vector-based envelope follower |
