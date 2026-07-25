---
type: jitter
name: "mc.jit.release~"
summary: "Transforms matrix data into signals"
signal: true
url: "https://docs.cycling74.com/reference/mc.jit.release~/"
package: "Jitter"
see_also: ["jit.buffer~", "jit.peek~", "jit.poke~", "jit.catch~", "peek~", "poke~"]
---
# mc.jit.release~

Transforms matrix data into signals

## Description

[jit.release~](https://docs.cycling74.com/reference/jit.release~) takes floating-point jitter matrices as input and transforms the stream of jitter matrices into MSP signals.

#### Discussion

The object can either be set to require a matrix element of floating point data for every signal sample that it will need to put out (locked mode), or it will smoothly adjust the playback position within the internal buffer to interpolate the data based on how much data has been made available to the object (varispeed mode).

## Arguments

### channels[] optional

The number of output signals. An outlet will be created for each channel and the input matrices should be composed of a separate plane for each channel.

## Attributes

### mode[int]

Two different modes are possible: in mode 0, jit.release~ does no intepolation and expects to receive one sample of input for every sample it needs to output. In mode 1 the playback position within the internal buffer is smoothly adjusted based on how much data has been made available to the object.

### latency[float]

The amount of signal data, in milliseconds, that the object should internally buffer before starting playback. Low latency values will be more susceptible to clicking due to temporal perturbations in the event-based jitter network.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.buffer~](https://docs.cycling74.com/reference/jit.buffer~) | Access an MSP buffer~ in matrix form |
| [jit.peek~](https://docs.cycling74.com/reference/jit.peek~) | Read matrix data as an audio signal |
| [jit.poke~](https://docs.cycling74.com/reference/jit.poke~) | Write an audio signal into a matrix |
| [jit.catch~](https://docs.cycling74.com/reference/jit.catch~) | Transform signal data into matrices |
| [peek~](https://docs.cycling74.com/reference/peek~) | Read and write sample values |
| [poke~](https://docs.cycling74.com/reference/poke~) | Write sample values to a buffer by index |
