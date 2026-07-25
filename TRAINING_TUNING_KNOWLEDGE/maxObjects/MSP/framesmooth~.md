---
type: msp
name: "framesmooth~"
summary: "Perform averaging of consecutive samples, grouped into frames, without blurring across the frames."
signal: true
url: "https://docs.cycling74.com/reference/framesmooth~/"
package: "MSP"
see_also: ["fft~", "frameaverage~", "plot~", "vectral~"]
---
# framesmooth~

Perform averaging of consecutive samples, grouped into frames, without blurring across the frames.

## Description

The [framesmooth~](https://docs.cycling74.com/reference/framesmooth~) object performs averaging of consecutive samples, grouped into frames, without blurring across the frames.

## Arguments

None.

## Attributes

### framesize[atom\_long]

The number of samples per frame. If working with FFT output, this should be set to the size of the FFT.

### smoothness[atom\_long]

The number of samples to be averaged to produce the smoothed output.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### clear >= 8.3.0

Clears all of the [framesmooth~](https://docs.cycling74.com/reference/framesmooth~) object's internal buffers.

### signal

Sets the number of audio samples to be smoothed.

## Output

### signal

Output samples with smoothing applied

## See Also

| Name | Description |
| --- | --- |
| [fft~](https://docs.cycling74.com/reference/fft~) | Fast Fourier transform |
| [frameaverage~](https://docs.cycling74.com/reference/frameaverage~) | Perform a piece-wise running averaging of consecutive frames of audio. |
| [plot~](https://docs.cycling74.com/reference/plot~) | Visualize two-dimensional data |
| [vectral~](https://docs.cycling74.com/reference/vectral~) | Vector-based envelope follower |
