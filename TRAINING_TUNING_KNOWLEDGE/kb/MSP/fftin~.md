---
type: msp
name: "fftin~"
summary: "Input for a patcher loaded by pfft~"
signal: true
url: "https://docs.cycling74.com/reference/fftin~/"
package: "MSP"
see_also: ["cartopol", "cartopol~", "fft~", "fftinfo~", "fftout~", "frameaccum~", "framedelta~", "ifft~", "in", "out", "pfft~", "poltocar", "poltocar~", "vectral~"]
---
# fftin~

Input for a patcher loaded by pfft~

## Description

The [fftin~](https://docs.cycling74.com/reference/fftin~) object provides an signal input to a patcher loaded by a [pfft~](https://docs.cycling74.com/reference/pfft~) object.

#### Discussion

Where the [pfft~](https://docs.cycling74.com/reference/pfft~) object manages the windowing and overlap of the incoming signal, [fftin~](https://docs.cycling74.com/reference/fftin~) applies the windowing function (the envelope) and performs the Fast Fourier Transform.

## Arguments

### inlet-assignment[int] optional

Determines the inlet number of the [pfft~](https://docs.cycling74.com/reference/pfft~) which will be routed into the [fftin~](https://docs.cycling74.com/reference/fftin~) object. Inlet assignment starts at one, for the leftmost inlet in the [pfft~](https://docs.cycling74.com/reference/pfft~). Multiple [fftin~](https://docs.cycling74.com/reference/fftin~) objects will typically have different inlet numbers.

### window-envelope-function[symbol] optional

Specifies the window envelope function the [fftin~](https://docs.cycling74.com/reference/fftin~) object will apply to overlapping FFTs on the input signal. The options are  square  (i.e. no window envelope),  hanning  (the default),  triangle ,  hamming  and  blackman  (Note: The Blackman window should be used with an overlap of 4 or more). If the symbol  nofft  is used, then the [fftin~](https://docs.cycling74.com/reference/fftin~) object will not use a windowing envelope and will not perform a Fast Fourier Transform -- it will echo the first half of its input sample window to its real output and the second half of its input sample window to its imaginary output. This can allow you to input raw control signals from outside the parent patcher through inlets in the [pfft~](https://docs.cycling74.com/reference/pfft~) object, provided its overlap is set to 2. Other overlap values may not yield useful results.

## Attributes

### nofft[int]

With nofft set, fftin~ allows for audio to pass into the subpatcher from pfft~s inlets without performing an fft. There are a few idiosyncratic behaviors for pfft~ in the default half spectrum frame mode and pfft~ in fullspectrum mode, which for legacy reasons behave as they do.

When pfft is in the default half spectrum mode, fftin~ ignores the windowing function, reading from and writing to the first half of the incoming frame from the outer MSP patch.

When pfft is in full spectrum mode, unlike half spectrum mode, fftin~ nofft will apply the windowing function to the real output/input (default hanning).

fftin~ in fullspectrum mode will output the unwindowed values out the imaginary output. To have similar behavior out the real output, set the window to square.

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

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### signal

Dummy inlet. The signal input for an [fftin~](https://docs.cycling74.com/reference/fftin~) object is an inlet in the [pfft~](https://docs.cycling74.com/reference/pfft~) subpatcher which contains the object.

## Output

### signal

Out left outlet: This output contains the real-values resulting from the Fast Fourier transform performed on the corresponding inlet of the [pfft~](https://docs.cycling74.com/reference/pfft~). This output frame is only half the size of the parent [pfft~](https://docs.cycling74.com/reference/pfft~) object's FFT size because the spectrum of a real input signal is symmetrical and therefore half of it is redundant. The real and imaginary pairs for one spectrum are called a spectral frame.

Out middle outlet: This output contains the imaginary-values resulting from the Fast Fourier transform performed on the corresponding inlet of the [pfft~](https://docs.cycling74.com/reference/pfft~). This output frame is only half the size of the parent [pfft~](https://docs.cycling74.com/reference/pfft~) object's FFT size because the spectrum of a real input signal is symmetrical and therefore half of it is redundant. The real and imaginary pairs for one spectrum are called a spectral frame.

Out right outlet: A stream of samples corresponding to the index of the current bin whose data is being sent out the first two outlets. This is a number from 0 - (frame size - 1). The spectral frame size inside a [pfft~](https://docs.cycling74.com/reference/pfft~) object's subpatch is equal to half the FFT window size.

## See Also

| Name | Description |
| --- | --- |
| [cartopol](https://docs.cycling74.com/reference/cartopol) | Convert cartesian to polar coordinates |
| [cartopol~](https://docs.cycling74.com/reference/cartopol~) | Signal Cartesian to Polar coordinate conversion |
| [fft~](https://docs.cycling74.com/reference/fft~) | Fast Fourier transform |
| [fftinfo~](https://docs.cycling74.com/reference/fftinfo~) | Report information about a patcher loaded by pfft~ |
| [fftout~](https://docs.cycling74.com/reference/fftout~) | Output for a patcher loaded by pfft~ |
| [frameaccum~](https://docs.cycling74.com/reference/frameaccum~) | Compute "running phase" of successive phase deviation frames |
| [framedelta~](https://docs.cycling74.com/reference/framedelta~) | Compute phase deviation between successive FFT frames |
| [ifft~](https://docs.cycling74.com/reference/ifft~) | Inverse fast Fourier transform |
| [in](https://docs.cycling74.com/reference/in) | Message input for a patcher loaded by poly~ or pfft~ |
| [out](https://docs.cycling74.com/reference/out) | Message output for a patcher loaded by poly~ or pfft~ |
| [pfft~](https://docs.cycling74.com/reference/pfft~) | Spectral processing manager for patchers |
| [poltocar](https://docs.cycling74.com/reference/poltocar) | Convert polar to cartesian coordinates |
| [poltocar~](https://docs.cycling74.com/reference/poltocar~) | Signal Polar to Cartesian coordinate conversion |
| [vectral~](https://docs.cycling74.com/reference/vectral~) | Vector-based envelope follower |
