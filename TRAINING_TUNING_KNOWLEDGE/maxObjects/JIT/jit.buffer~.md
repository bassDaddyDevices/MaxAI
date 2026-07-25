---
type: jitter
name: "jit.buffer~"
summary: "Access an MSP buffer~ in matrix form"
signal: true
url: "https://docs.cycling74.com/reference/jit.buffer~/"
package: "Jitter"
see_also: ["buffer~", "jit.catch~", "jit.graph", "jit.peek~", "jit.poke~", "jit.release~", "peek~", "poke~"]
---
# jit.buffer~

Access an MSP buffer~ in matrix form

## Description

Represents audio in a  float32  matrix with time across dim[0]. Multi-channel audio uses a separate plane for each channel. The object arguments are the same as those for the [buffer~](https://docs.cycling74.com/reference/buffer~) object. [jit.buffer~](https://docs.cycling74.com/reference/jit.buffer~) responds to all the same messages as [buffer~](https://docs.cycling74.com/reference/buffer~).

## Arguments

### buffer\_name[] optional

The name of the buffer~ to access

### filename[] optional

Optional filename to read

### length[] optional

Optional length in milliseconds

### channels[] optional

Optional number of channels (default=1)

## Attributes

### inputfirst[int]

An input matrix will be written to the buffer~ starting at this frame

### inputstart[float]

An input matrix will be written to the buffer~ starting at this position in milliseconds

### outputfirst[int]

Frame at which to start collecting data from the buffer~ for an output matrix

### outputlast[int]

Frame at which to finish collecting data from the buffer~ for an output matrix

### outputlength[float]

The length in milliseconds of the output matrix collected from the buffer~

### outputstart[float]

The position in milliseconds to start collecting data from the buffer~ for an output matrix

### vizchecktime[int]

How often in milliseconds the visualization engine should check the status of the buffer~ and re-render the cache if necessary (default=250)

### vizfirst[int]

Frame at which to start render of the visualization output matrix

### vizheight[int]

The height of the visualization output matrix (default=160)

### vizmode[int]

A value of 1 turns on opaque rendering mode. A value of 2 turns on statistical rendering mode, which has greater detail but is more expensive to render. A value of 0 turns off visualization and all background processing of cached speedup data. (default=0)

### vizlast[int]

Frame at which to end render of the visualization output matrix

### vizlength[float]

The length in milliseconds to render for the visualization output matrix

### vizmemoryratio[float]

Specifies the size of the data cache used to speed up rendering of the visualization matrix as a fraction of the data size of the buffer~ (default=0.5)

### vizstart[float]

The position in milliseconds to start the render of the visualization output matrix

### vizwidth[int]

The width of the visualization output matrix (default=320)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### anything

Any message not specifically handled by the [jit.buffer~](https://docs.cycling74.com/reference/jit.buffer~) object will be passed along to its child [buffer~](https://docs.cycling74.com/reference/buffer~) object.

### (mouse)

Double-clicking on a [jit.buffer~](https://docs.cycling74.com/reference/jit.buffer~) object opens a display window where you can view its contents.

### getframes

Outputs the number of frames.

### getlength

Outputs the length of the buffer~ in milliseconds.

### output

float32  matrix containing the range of the buffer~ specified by the outputstart, outputlength, outputfirst and outputlast attributes will be output out the left outlet.

### viz

Outputs a visualization matrix from the second outlet. In opaque mode the matrix will be of type  char  and in statistical mode the matrix will be of type  float32 . In both modes each channel of audio results is mapped to a separate plane of the matrix.

## See Also

| Name | Description |
| --- | --- |
| [buffer~](https://docs.cycling74.com/reference/buffer~) | Store audio samples |
| [jit.catch~](https://docs.cycling74.com/reference/jit.catch~) | Transform signal data into matrices |
| [jit.graph](https://docs.cycling74.com/reference/jit.graph) | Perform floating-point data visualization |
| [jit.peek~](https://docs.cycling74.com/reference/jit.peek~) | Read matrix data as an audio signal |
| [jit.poke~](https://docs.cycling74.com/reference/jit.poke~) | Write an audio signal into a matrix |
| [jit.release~](https://docs.cycling74.com/reference/jit.release~) | Transforms matrix data into signals |
| [peek~](https://docs.cycling74.com/reference/peek~) | Read and write sample values |
| [poke~](https://docs.cycling74.com/reference/poke~) | Write sample values to a buffer by index |
