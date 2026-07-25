---
type: jitter
name: "mc.jit.catch~"
summary: "Transform signal data into matrices"
signal: true
url: "https://docs.cycling74.com/reference/mc.jit.catch~/"
package: "Jitter"
see_also: ["jit.buffer~", "jit.graph", "jit.gl.graph", "jit.peek~", "jit.poke~", "jit.release~", "peek~", "poke~"]
---
# mc.jit.catch~

Transform signal data into matrices

## Description

Transforms MSP signals into a stream of jitter matrices.

## Arguments

### channels[] optional

The number of input signals. An inlet will be created for each channel and the output matrices will contain the data for each channel on a separate plane.

## Attributes

### downsample[int]

A downsampling factor (default=1). If downsampling value is set to n, each group of n successive samples are averaged.

### framesize[int]

In some modes, the width of the output matrix. (default=320)

### mode[int]

Four different modes are possible: in mode 0, all data since the last output is output in a one-dimensional matrix. In mode 1 the amount of buffered data that fits into a multiple of the framesize is output in two dimensions; data not output will be saved for the next time. In these first two modes, every sample collected should be output once and only once. In mode 2 a framesize of the most recent data is output. Mode 3 causes [jit.catch~](https://docs.cycling74.com/reference/jit.catch~) to behave like an oscilloscope, triggering on channel trigchan when the signal crosses triglevel in the direction trigdir. If the threshold has not been passed for the duration of the entire internal data buffer (100 ms), jit.catch~ reverts temporarily to mode 2 behavior and outputs the most recent data until the threshold is crossed again.

### trigdir[int]

The direction to use to identify crosses in the trigger point: 0 is upwards, and 1 is downwards. (default=0)

### trigchan[int]

In mode 3, the channel to use for trigger points (default=0)

### trigthresh[float]

The signal level at which to trigger a redraw in mode 3 (default=0.0)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### bang

Receiving a bang may trigger a matrix to be output, depending on the  mode  and the amount of signal data that has been received since the last bang.

### bufsize

The word bufsize, followed by a floating-point number, sets the size of the buffer to be sampled.

### signal

Signal data received in any inlet of a [jit.catch~](https://docs.cycling74.com/reference/jit.catch~) object will be converted to a stream of Jitter matrices and sent out the object's outlet.

## See Also

| Name | Description |
| --- | --- |
| [jit.buffer~](https://docs.cycling74.com/reference/jit.buffer~) | Access an MSP buffer~ in matrix form |
| [jit.graph](https://docs.cycling74.com/reference/jit.graph) | Perform floating-point data visualization |
| [jit.gl.graph](https://docs.cycling74.com/reference/jit.gl.graph) | Graph floats into 3D space |
| [jit.peek~](https://docs.cycling74.com/reference/jit.peek~) | Read matrix data as an audio signal |
| [jit.poke~](https://docs.cycling74.com/reference/jit.poke~) | Write an audio signal into a matrix |
| [jit.release~](https://docs.cycling74.com/reference/jit.release~) | Transforms matrix data into signals |
| [peek~](https://docs.cycling74.com/reference/peek~) | Read and write sample values |
| [poke~](https://docs.cycling74.com/reference/poke~) | Write sample values to a buffer by index |
