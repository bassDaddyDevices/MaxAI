---
type: jitter
name: "jit.vcr"
summary: "Record a movie with MSP audio"
signal: false
url: "https://docs.cycling74.com/reference/jit.vcr/"
package: "Jitter"
see_also: ["jit.grab", "jit.movie", "jit.record"]
---
# jit.vcr

Record a movie with MSP audio

## Description

Use the [jit.vcr](https://docs.cycling74.com/reference/jit.vcr) object combine a sequence of Jitter matrices and MSP audio and save the sequence to disk as a synchronized movie. The two left inlets accept MSP audio signals (if only 1 inlet is used, the movie's audio will be monophonic). The right inlet accepts a Jitter matrix.

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

### interp[int]

Interpolation flag (default = 0)

When the flag is set, the incoming matrix is interpolated when scaling to display.

### planemap[4 ints]

The plane mapping from input matrix to output movie (default = 0 1 2 3)

### preview[int]

Preview flag (default = 0 (off))

Typically, the [jit.vcr](https://docs.cycling74.com/reference/jit.vcr) object passes input matrices directly to the outlet without any processing. Enabling preview during recording permits viewing of the compressed frames as they are recorded.

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

### signal

The [jit.vcr](https://docs.cycling74.com/reference/jit.vcr) records incoming MSP signals as audio in its output file.

### stop

Stop recording.

### write

Writes the sequence of incoming Jitter matrices to a disk file as a movie. The default is to write a  30.  fps  raw  codec  max  quality file with a timescale of  600 .

The following list of codecs is deprecated (retained for reference). See codeclist for the preferred method to list valid system codecs.

 *The available codec types are  raw ,  cinepak ,  graphics ,  animation ,  video ,  componentvideo ,  jpeg ,  mjpega ,  mjpegb ,  sgi ,  planarrgb ,  macpaint ,  gif ,  photocd ,  qdgx ,  avrjpeg ,  opendmljpeg ,  bmp ,  winraw ,  vector ,  qd ,  h261 ,  h263 ,  dvntsc ,  dvpal ,  dvprontsc ,  dvpropal ,  flc ,  targa ,  png ,  tiff ,  componentvideosigned ,  componentvideounsigned ,  cmyk ,  microsoft ,  sorenson ,  indeo4 ,  argb64 ,  rgb48 ,  alphagrey32 ,  grey16 ,  mpegyuv420 ,  yuv420 ,  sorensonyuv9  and  mpeg4 .*

The available codec quality settings are  lossless ,  max ,  min ,  low ,  normal , or  high .

Note that minimum quality is, in many cases, the codec's default quality. Use "low" quality for consistent results.

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
| [jit.record](https://docs.cycling74.com/reference/jit.qt.record) | Record a movie |
