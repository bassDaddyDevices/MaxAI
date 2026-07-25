---
type: jitter
name: "jit.qt.movie"
summary: "Play or edit a movie"
signal: false
url: "https://docs.cycling74.com/reference/jit.qt.movie/"
package: "Jitter"
see_also: ["jit.grab", "jit.record"]
---
# jit.qt.movie

Play or edit a movie

## Description

Use the [jit.movie](https://docs.cycling74.com/reference/jit.movie) for working with movie files - playback, editing, import, export, effect generation and direct-to-video-output-component streaming.

#### Discussion

This document refers to the qt engine version of [jit.movie](https://docs.cycling74.com/reference/jit.movie).

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 4 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### adapt[int]

Adapt output matrix dimensions to movie size flag

### automatic[int]

Enable automatic matrix output when bound to [jit.world](https://docs.cycling74.com/reference/jit.world).

### autostart[int]

Autoplay on movie open flag (default = 1)

### colormode[symbol]

The output matrix's color encoding. 32 bit only.

Possible values:

'argb'
(
ARGB (alpha, red, green, blue) colormode
)
'uyvy'
(
UYVY (YUV 4:2:2 packed) colormode
)

### drawto[symbol]

A render context name, used when output\_texture is enabled.

### dstrect[4 ints]

The portion of the output matrix used for decompressing media to the internal matrix (default = 0 0 (matrix width) (matrix height))

The bounds of the rectangle are expressed in the form  *left top right bottom* . All values are relative to the top-left corner of the viewing area of the output matrix.

### duration[int]

The duration of the movie. When setting the duration, the entire movie will be scaled to the new length, unless the additional argument  noscale  is used. In that case, the movie length is changed without scaling. For more precise control of scaling, use the  scale  message.

### engine[symbol]

Video engine backend. This argument can only be set in the max box. If not specified, it is determined by the Video Engine Max preference. As of this writing, possible values include  avf  (Mac only) and  qt .

### fps[float] read-only

Internal FPS for the movie

### framecount[int] read-only

Number of frames in the movie

### framereport[int]

Frame reporting flag (default = 0). When enabled, the message  framecalc  will be sent from the rightmost outlet of the [jit.movie](https://docs.cycling74.com/reference/jit.movie) object as each frame is processed, followed by the number of milliseconds spent doing so.

### interp[int]

Output interpolation flag

### loop[int]

Looping mode (default = 1 (start to end))

Possible values:

0 = 'off'
(
0 = no looping
)
1 = 'normal'
(
1 = normal looping (start to end)
)
2 = 'palindrome'
(
2 = palindrome looping (start to end to start to ....)
)
3 = 'playback-limits'
(
3 = no looping, but use looppoints to define playback limits
)

### loopend[int]

The movie loop point end. Time is specified as time values.

### looppoints[2 ints]

The movie loop points. Time is specified as time values.

### loopreport[int]

Loop notification flag (default = 0). When enabled, the [jit.movie](https://docs.cycling74.com/reference/jit.movie) object will send the message  loopnotify  when the playing movie passes the loop point. In palindrome looping mode, the message will be sent at both the beginning and the end of the movie.

### loopstart[2 ints]

The movie loop point start. Time is specified as time values.

### movie\_dim[int] read-only

Native movie dimensions

### moviedim[int] read-only

Native movie dimensions

### moviefile[symbol]

Load a movie file from disk

### moviename[symbol]

Identifies the file name of a movie (Note: setting this attribute does not load a movie file).

### moviepath[symbol] read-only

The movie's fully-specified path on disk, if the movie has a disk-file (Note: setting this attribute does not load a movie file).

### output\_texture[int]

Enable OpenGL texture output (default = 0). When enabled an OpenGL texture is output instead of a Jitter matrix. The object's drawto attribute must be set to a valid gl context. An RGBA texture is output using the movie's native dimensions. When enabled, the following attributes have no effect:

adapt
colormode
dim
dstrect
srcrect
usedstrect
usesrcrect

### rate[float]

Movie rate

### srcrect[4 ints]

The portion of the movie to decompress into a matrix (default = 0 0 (movie width) (movie height)). The bounds of the rectangle are expressed in the form  *left top right bottom* . All values are relative to the top-left corner of the viewing area of the movie.

### texture\_name[symbol]

Output texture name, when output\_texture is enabled.

### time[int]

The current time in the movie. Time is specified as time values.

### timescale[int] read-only

The timescale for the movie (default = 600, but movie-dependent)

### unique[int]

Unique frame filter flag (default = 0 (disabled)). When the flag is set, only new frames from the movie are output when the object receives a bang. If no new frame has been decompressed, the [jit.movie](https://docs.cycling74.com/reference/jit.movie) object will not respond to the bang.

### usedstrect[int]

Destination rect flag (default = 0). When the flag is set, the dstrect attributes are used when copying an input matrix to the internal matrix.

### usesrcrect[int]

Source rect flag (default = 0). When the flag is set, the srcrect attributes are used when copying an input matrix to the internal matrix.

### vol[float]

Movie sound volume

### time\_secs[float] >= 7.0.0

Time Seconds

### time\_ms[int] >= 8.0.0

Time Milliseconds

### seconds[float] read-only>= 7.0.0

Seconds

### position[float] >= 7.0.0

Position

### milliseconds[int] read-only>= 8.0.0

Milliseconds

### looppoints\_secs[2 floats] >= 8.0.0

Looppoints Seconds

### looppoints\_ms[2 ints] >= 8.0.0

Looppoints Milliseconds

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### read

Reads a movie from a disk file, URL or the clipboard. If no argument is present, or if the symbol  dialog  is used for the  *src-name*  argument, a file selection dialog will be presented to choose a file. If the argument  scrap  is used for the  *src-name*  argument, the object will attempt to load a movie from the clipboard. If the argument is parsable as an http://, ftp:///, file://, or rtsp:// URL, the object will attempt to load a movie from that location. Otherwise, an argument is assumed to be a local file name.

If autostart is enabled, the movie will begin playing at once.

Arguments:

- src-name
  [symbol]

### framedump

Commences a framedump, in which the movie will start from a frame specified by  *start-frame*  (the default is 1) and automatically output frames in sequence (no  bang  or  outputmatrix  message is necessary) up to the frame specified by  *end-frame* , skipping  *frame-skip*  frames between each frame. The default values are 1 for the start frame, and the total framecount of the movie for the end frame. The default  *frame-skip*  value is 1.

During operation, the message  framedump  *current\_frame*   is sent out the right outlet after each frame has been output. When finished, the message  framedump done  is output.

Arguments:

- start-frame
  [int]
- end-frame
  [int]
- frame-skip
  [int]

### cancelframedump

Stops the frame dump process. See  framedump .

### asyncread

Asynchronously reads a movie from a disk file, if possible. If no argument is present, or if the symbol  dialog  is used for the  *src-name*  argument, a file selection dialog will be presented to choose a file. Any argument is assumed to be a local file name. At this time, asynchronous reading is not supported for URL- or clipboard-based movies; the normal  read  behavior will be used instead.

Arguments:

- src-name
  [symbol]

### (drag)

Load a media file

## See Also

| Name | Description |
| --- | --- |
| [jit.grab](https://docs.cycling74.com/reference/jit.qt.grab) | Digitize video from an external source |
| [jit.record](https://docs.cycling74.com/reference/jit.qt.record) | Record a movie |
