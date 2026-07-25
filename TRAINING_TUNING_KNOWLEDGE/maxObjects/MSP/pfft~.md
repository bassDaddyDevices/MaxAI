---
type: msp
name: "pfft~"
summary: "Spectral processing manager for patchers"
signal: true
url: "https://docs.cycling74.com/reference/pfft~/"
package: "MSP"
see_also: ["cartopol", "cartopol~", "fft~", "fftin~", "fftinfo~", "fftout~", "frameaccum~", "framedelta~", "ifft~", "in", "out", "poltocar", "poltocar~", "vectral~"]
---
# pfft~

Spectral processing manager for patchers

## Description

The [pfft~](https://docs.cycling74.com/reference/pfft~) object is designed to simplify spectral audio processing using the Fast Fourier Transform (FFT). In addition to performing the FFT and the Inverse Fast Fourier Transform (IFFT), [pfft~](https://docs.cycling74.com/reference/pfft~) (with the help of its companion [fftin~](https://docs.cycling74.com/reference/fftin~) and [fftout~](https://docs.cycling74.com/reference/fftout~) objects) manages the necessary signal windowing, overlapping and adding needed to create a real-time Short Term Fourier Transform (STFT) analysis/resynthesis system.

#### Discussion

The number of inlets on the [pfft~](https://docs.cycling74.com/reference/pfft~) object is determined by the number of [fftin~](https://docs.cycling74.com/reference/fftin~) and/or in objects in the enclosed subpatch. Patchers loaded into a [pfft~](https://docs.cycling74.com/reference/pfft~) object can only be given signal inlets by [fftin~](https://docs.cycling74.com/reference/fftin~) objects within the patch. See [fftin~](https://docs.cycling74.com/reference/fftin~) and in for details.

## Arguments

### subpatch-name[symbol] optional

Name of patcher to load

### FFT-size[int]samples optional

Specifies the FFT size, in samples, of the overlapped windows which are transformed to and from the spectral domain by the FFT/IFFT. The window size must be a power of 2, and defaults to 512. The minimum value is 32, unless
legacy
is enabled in which case it is 16. The maximum value is 1048576. (Note: The size of the spectral "frames" processed by the [pfft~](https://docs.cycling74.com/reference/pfft~) object's subpatch will be half this size, as the 2nd half of the spectrum is a mirror of the first and thus redundant, unless the full-spectrum-flag is present.)

### overlap-factor (hop-size-denominator)[int] optional

The third argument determines the overlap factor for FFT analysis and resynthesis windows. The hop size (number of samples between each successive FFT window) of Fast Fourier transforms performed is equal to the size of the Fast Fourier transform divided by this overlap factor. (e.g. if the frame size is 512 and the overlap is set to 4 then the hop size is 128 samples). The value must be a power of 2 and defaults to 2. A value of 4 is recommended for most applications.

### start-offset[int]samples optional

The fourth argument specifies the offset in samples for the Fast Fourier transform to start its first analysis. It must be a multiple of the current signal vector size and defaults to 0.

### full-spectrum-flag (0 or nonzero)[int] optional

A non-zero fifth argument may be used to specify "full-spectrum mode". In this mode, the [pfft~](https://docs.cycling74.com/reference/pfft~) object will internally compute a complex FFT and process full DC to SR mirrored spectra (instead of simply eliminating the redundant half of the spectrum). This takes extra computing power but may be potentially useful in some of the more esoteric spectral processing applications.

### 'args' and list-of-argument-values[symbol] optional

Use the argument  args  followed by an argument value to initialize any pound-sign arguments in the loaded patcher (e.g.,  args #1 ). If used, the  args  argument must be the last argument word used; everything which appears after the word  args  will be treated as an argument value.

## Attributes

### args[10 atoms]

The argument values to initialize any pound-sign arguments in the loaded patcher (e.g.,  args #1 ).

### fftsize[int]

The FFT Size is the number of points (samples) in the FFT. It must be a power of two. The default number of points is 512. The minimum number of points is 16. The maximum number of points is 1048576. Any changes to this value will take effect the next time signal processing is turned on.

### float32[int]

If
float32
is enabled, the FFT will be performed using 32 bit floating point precision. This allows for faster performance using SIMD optimized code. This flag is ignored if
legacy
is enabled. Any changes to this value will take effect the next time signal processing is turned on.

### fullspectrum[int]

If
fullspectrum
is enabled, the [pfft~](https://docs.cycling74.com/reference/pfft~) object will internally compute a complex FFT and process full DC to SR mirrored spectra (instead of simply eliminating the redundant half of the spectrum). This takes extra computing power but may be potentially useful in some of the more esoteric spectral processing applications. Any changes to this value will take effect the next time signal processing is turned on.

### legacy[int]

If
legacy
is enabled, the FFT will be performed using the legacy FFT implementation with no SIMD optimization. Any changes to this value will take effect the next time signal processing is turned on.

### overlap[int]

The overlap factor for FFT analysis and resynthesis windows. The hop size (number of samples between each successive FFT window) of Fast Fourier transforms performed is equal to the size of the Fast Fourier transform divided by this overlap factor. (e.g. if the frame size is 512 and the overlap is set to 4 then the hop size is 128 samples). The value must be a power of 2 and defaults to 2. A value of 4 is recommended for most applications.

### patchername[symbol]

Name of patcher file to load.

### startoffset[int]

The offset in samples for the Fast Fourier transform to start its first analysis. It must be a multiple of the current signal vector size and defaults to 0.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Patchers loaded into a [pfft~](https://docs.cycling74.com/reference/pfft~) object can only accept  bang  messages by [in](https://docs.cycling74.com/reference/in) objects within the patch. The number of inputs is determined by the [in](https://docs.cycling74.com/reference/in) objects in the enclosed subpatch. See [in](https://docs.cycling74.com/reference/in) for details.

### int

Integer values sent to the [pfft~](https://docs.cycling74.com/reference/pfft~) object cause the object to act according to the user-defined functionality within it.

Arguments:

- input
  [int]

### float

Floating-point values sent to the [pfft~](https://docs.cycling74.com/reference/pfft~) object cause the object to act according to the user-defined functionality within it.

Arguments:

- input
  [float]

### list

Lists sent to the [pfft~](https://docs.cycling74.com/reference/pfft~) object cause the object to act according to the user-defined functionality within it.

Arguments:

- input
  [list]

### anything

Messages sent to the [pfft~](https://docs.cycling74.com/reference/pfft~) object cause the object to act according to the user-defined functionality within it.

Arguments:

- input
  [list]

### clear

Clears all of the [pfft~](https://docs.cycling74.com/reference/pfft~) object's internal buffers.

### (mouse)

Double-clicking with the mouse on the [pfft~](https://docs.cycling74.com/reference/pfft~) object opens a Max patcher window containing the patcher loaded by the object.

### mute

The word  mute , followed by a 1 or 0, will mute or unmute the [pfft~](https://docs.cycling74.com/reference/pfft~), turning off signal processing within the enclosed subpatch.

Arguments:

- mute-flag (0 or 1)
  [int]

### open

The word  open  will open the subpatch loaded into the [pfft~](https://docs.cycling74.com/reference/pfft~) object.

Arguments:

- subpatch-filename
  [int]

### wclose

Closes the enclosed subpatch if it is open.

Arguments:

- subpatch-filename
  [int]

## Output

### message

Any messages received by an [out](https://docs.cycling74.com/reference/out) object in a loaded patcher appear at the message outlet of the [pfft~](https://docs.cycling74.com/reference/pfft~) object which corresponds to the number argument of the [out](https://docs.cycling74.com/reference/out) object. The message outlets of a [pfft~](https://docs.cycling74.com/reference/pfft~) object appear to the right of the rightmost signal outlet.

### signal

The output is the result of the FFT-based signal processing subpatch. As with the [fft~](https://docs.cycling74.com/reference/fft~) and [ifft~](https://docs.cycling74.com/reference/ifft~) objects, [pfft~](https://docs.cycling74.com/reference/pfft~) introduces a slight delay from input to output (although it is less than half the delay than with an [fft~](https://docs.cycling74.com/reference/fft~) / [ifft~](https://docs.cycling74.com/reference/ifft~) combination). The I/ O delay is equal to the window size minus the hop size (e.g., for a 1024-sample FFT window with an overlap factor of 4, the hop size is equal to 256, and the overall delay from input to output is 768 samples). The number of outlets is determined by the number of [fftout~](https://docs.cycling74.com/reference/fftout~) and/or [out](https://docs.cycling74.com/reference/out) objects in the loaded subpatcher. Patchers loaded into a [pfft~](https://docs.cycling74.com/reference/pfft~) object can be given outlets by [fftout~](https://docs.cycling74.com/reference/fftout~) or [out](https://docs.cycling74.com/reference/out) objects within the patch. See [fftout~](https://docs.cycling74.com/reference/fftout~) and [out](https://docs.cycling74.com/reference/out) for details.

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
| [in](https://docs.cycling74.com/reference/in) | Message input for a patcher loaded by poly~ or pfft~ |
| [out](https://docs.cycling74.com/reference/out) | Message output for a patcher loaded by poly~ or pfft~ |
| [poltocar](https://docs.cycling74.com/reference/poltocar) | Convert polar to cartesian coordinates |
| [poltocar~](https://docs.cycling74.com/reference/poltocar~) | Signal Polar to Cartesian coordinate conversion |
| [vectral~](https://docs.cycling74.com/reference/vectral~) | Vector-based envelope follower |
