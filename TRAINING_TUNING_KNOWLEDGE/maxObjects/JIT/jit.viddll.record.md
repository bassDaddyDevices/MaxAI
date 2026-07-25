---
type: jitter
name: "jit.viddll.record"
summary: "Record a movie file"
signal: false
url: "https://docs.cycling74.com/reference/jit.viddll.record/"
package: "VIDDLL"
see_also: ["bogus"]
---
# jit.viddll.record

Record a movie file

## Description

The [jit.record](https://docs.cycling74.com/reference/jit.record) object take a sequence of Jitter matrices as input, saving the sequence to disk as a movie file. Currently only 4 plane, char type matrix input is supported.

#### Discussion

This document refers to the viddll engine version of [jit.record](https://docs.cycling74.com/reference/jit.record).

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

### codec[symbol]

Set movie codec for recording (default = h264).

Possible values:

'h264'

'huffyuv'

'gif'

'animation'

'jpeg'

### codeclist[512 symbols] read-only

Sending the message  getcodeclist  will cause a list of all valid codecs (that is, those with an available compressor component) to be reported from the dumpout. There is no guarantee that the codec will function properly on any system. For known supported codecs, see the codec attribute.

### dstrect[4 ints]

The portion of the output matrix written to by the input frame (default = 0 0 (matrix width) (matrix height)).

The proportions of the rectangle are expressed in the form  *left top right bottom* . All values are relative to the top left corner of the object's viewing area.

### engine[symbol]

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

The current duration, in QuickTime time units, of media written to disk (default = operation-specific)

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

### cancel

Cancel the recording, discarding any frames stored in the cache, and close the file.

### dictionary

FFmpeg encode options are set by passing a Max dictionary object. Support for each option is unknown. The options dictionary is persistent across writes, so setting it once will affect all subsequent writes.

### print\_formats

Undocumented

### print\_options

Undocumented

### stop

Stop recording.

### write

Writes the sequence of incoming Jitter matrices to disk as a movie file. The default is to write a 30. fps h264 codec. See the codec attribute for list of possible codec values. When the  stop  or  cancel  message is received, the file is closed and a write notification is sent to the dumpout.

Arguments:

- movie-name
  [symbol]
- FPS
  [float]
- codec
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [bogus](https://docs.cycling74.com/reference/bogus) |  |
