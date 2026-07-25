---
type: msp
name: "frameaverage~"
summary: "Perform a piece-wise running averaging of consecutive frames of audio."
signal: true
url: "https://docs.cycling74.com/reference/frameaverage~/"
package: "MSP"
see_also: ["average~", "fft~", "framesmooth~", "plot~", "vectral~"]
---
# frameaverage~

Perform a piece-wise running averaging of consecutive frames of audio.

## Description

The [frameaverage~](https://docs.cycling74.com/reference/frameaverage~) object performs a piece-wise running averaging of consecutive frames of audio. Where the [framesmooth~](https://docs.cycling74.com/reference/framesmooth~) object can be seen as smoothing in the frequency domain (when using FFT as input), the [frameaverage~](https://docs.cycling74.com/reference/frameaverage~) object can be seen as performing temporal smoothing, more analogous to the [vectral~](https://docs.cycling74.com/reference/vectral~) object.

## Arguments

None.

## Attributes

### framecount[atom\_long]

The number of frames across which to average samples of the same index. Limited to between 1 and the 'maxframecount' argument given at object instantiation.

### framesize[atom\_long]

The number of samples per frame. If working with FFT output, this should be set to the size of the FFT.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### clear >= 8.3.0

Clears all of the [frameaverage~](https://docs.cycling74.com/reference/frameaverage~) object's internal buffers.

### signal

Frames of audio samples on which to perform running average calculations.

## Output

### signal

frame-wise averaged audio signal.

## See Also

| Name | Description |
| --- | --- |
| [average~](https://docs.cycling74.com/reference/average~) | Multi-mode signal average |
| [fft~](https://docs.cycling74.com/reference/fft~) | Fast Fourier transform |
| [framesmooth~](https://docs.cycling74.com/reference/framesmooth~) | Perform averaging of consecutive samples, grouped into frames, without blurring across the frames. |
| [plot~](https://docs.cycling74.com/reference/plot~) | Visualize two-dimensional data |
| [vectral~](https://docs.cycling74.com/reference/vectral~) | Vector-based envelope follower |
