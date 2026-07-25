---
type: jitter
name: "jit.record"
summary: "Record a movie"
signal: false
url: "https://docs.cycling74.com/reference/jit.record/"
package: "Jitter"
see_also: ["jit.grab", "jit.movie", "jit.vcr"]
---
# jit.record

Record a movie

## Description

The [jit.record](https://docs.cycling74.com/reference/jit.record) object take a sequence of Jitter matrices as input, saving the sequence to disk as a movie. Currently only 4 plane, char type matrix input is supported.

#### Discussion

This document refers to the avf engine version of [jit.record](https://docs.cycling74.com/reference/jit.record).

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### adapt[int] >= 7.0.0

Adapt output matrix dimensions to matrix input. If dimension arguments provided, default = 0, otherwise default = 1.

### codec[symbol] >= 7.0.0

Set movie codec for recording (default = prores4444).

Possible values:

'jpeg'

'h264'

'prores4444'

'prores422'

### dstrect[4 ints]

The portion of the output matrix written to by the input frame (default = 0 0 (matrix width) (matrix height)).

The proportions of the rectangle are expressed in the form  *left top right bottom* . All values are relative to the top left corner of the object's viewing area.

### engine[symbol] >= 7.0.0

Video engine backend. This argument can only be set in the max box. If not specified, it is determined by the Video Engine Max preference. As of this writing, possible values include  avf  (Mac only), and  qt .

### fps[float]

Movie recording frames per second (default = 30).

### interp[int]

Interpolation flag (default = 0)

When the flag is set, the incoming matrix is interpolated when scaling to display.

### planemap[4 ints]

The plane mapping from input matrix to output movie (default = 0 1 2 3)

### preview[int]

Preview flag (default = 0 (off)). Enable to pass input matrices while recording.

### realtime[int]

Realtime recording mode flag (default = 0 (off))

### srcrect[4 ints]

The portion of the input matrix used when copying an input matrix to the internal matrix. (default = 0 0 (matrix width) (matrix height)) The proportions of the rectangle are expressed in the form  *left top right bottom* . All values are relative to the top left corner of the viewing area of the input matrix.

### time[int] read-only

The current duration, in time units, of media written to disk (default = operation-specific)

The time attribute only returns data during  write  operations.

### usedstrect[int]

Destination rect flag (default = 0)

When the flag is set, the dstrect attributes are used when copying an input matrix to the internal matrix.

### usesrcrect[int]

Source rect flag (default = 0)

When the flag is set, the srcrect attributes are used when copying an input matrix to the internal matrix.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### stop

Stop recording.

### write

Writes the sequence of incoming Jitter matrices to a disk file as a movie. The default is to write a  30.  fps  prores4444  codec  max  quality file with a timescale of  600 . Note, quality is ignored when using the engine. See the codec attribute for list of possible codec values.

Arguments:

- movie-name
  [symbol]
- FPS
  [float]
- codec
  [symbol]
- quality
  [symbol]
- timescale
  [int]

## See Also

| Name | Description |
| --- | --- |
| [jit.grab](https://docs.cycling74.com/reference/jit.qt.grab) | Digitize video from an external source |
| [jit.movie](https://docs.cycling74.com/reference/jit.qt.movie) | Play or edit a movie |
| [jit.vcr](https://docs.cycling74.com/reference/jit.vcr) | Record a movie with MSP audio |
