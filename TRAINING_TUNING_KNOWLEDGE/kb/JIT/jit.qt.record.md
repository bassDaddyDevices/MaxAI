---
type: jitter
name: "jit.qt.record"
summary: "Record a movie"
signal: false
url: "https://docs.cycling74.com/reference/jit.qt.record/"
package: "Jitter"
see_also: ["jit.movie", "jit.record", "jit.vcr"]
---
# jit.qt.record

Record a movie

## Description

The [jit.record](https://docs.cycling74.com/reference/jit.record) object take a sequence of Jitter matrices as input, saving the sequence to disk as a movie.

#### Discussion

This document refers to the qt engine version of [jit.record](https://docs.cycling74.com/reference/jit.record).

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### adapt[int]

Adapt output matrix dimensions to matrix input. If dimension arguments provided, default = 0, otherwise default = 1.

### engine[symbol]

Video engine backend. This argument can only be set in the max box. If not specified, it is determined by the Video Engine Max preference. As of this writing, possible values include  avf  (Mac only), and  qt .

### preview[int]

Preview flag (default = 0 (off))

Typically, the [jit.record](https://docs.cycling74.com/reference/jit.record) object passes input matrices directly to the outlet without any processing. Enabling preview during recording permits viewing of the compressed frames as they are recorded.

### dstrect[4 ints]

The portion of the output matrix written to by the input frame (default = 0 0 (matrix width) (matrix height)).

The proportions of the rectangle are expressed in the form  *left top right bottom* . All values are relative to the top left corner of the object's viewing area.

### interp[int]

Interpolation flag (default = 0)

When the flag is set, the incoming matrix is interpolated when scaling to display.

### planemap[4 ints]

The plane mapping from input matrix to output movie (default = 0 1 2 3)

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

### fps[float]

Frames Per Second

### codec[symbol] >= 7.0.0

Codec

Possible values:

'jpeg'

'h264'

'prores4444'

'prores422'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### stop

Stop recording.

## See Also

| Name | Description |
| --- | --- |
| [jit.movie](https://docs.cycling74.com/reference/jit.qt.movie) | Play or edit a movie |
| [jit.record](https://docs.cycling74.com/reference/jit.qt.record) | Record a movie |
| [jit.vcr](https://docs.cycling74.com/reference/jit.vcr) | Record a movie with MSP audio |
