---
type: jitter
name: "jit.gl.movie"
summary: "Play a movie file"
signal: false
url: "https://docs.cycling74.com/reference/jit.gl.movie/"
package: "Jitter"
see_also: ["Texture Output", "Video Engine", "jit.movie~", "jit.playlist", "jit.grab", "jit.record", "jit.pwindow", "jit.window", "jit.world", "jit.gl.texture"]
---
# jit.gl.movie

Play a movie file

## Description

The [jit.movie](https://docs.cycling74.com/reference/jit.movie) object plays and manipulates movie files. It comes in two forms: jit.movie, which outputs matrices, and jit.gl.movie, which outputs [OpenGL textures](https://docs.cycling74.com/userguide/jitter/textures). The OpenGL version is recommended for smoother playback and better performance.

#### Discussion

This document refers to the avf engine version of [jit.movie](https://docs.cycling74.com/reference/jit.movie).

The avf backed [jit.movie](https://docs.cycling74.com/reference/jit.movie) is asynchronous when seeking (e.g. setting the time attribute or using the  frame  or  jump  messages). This means that the frame output immediately following a seek request is not guaranteed to be correct. Users requiring exact frame timing must use the  seeknotify  message output from the object's dump outlet to trigger frame output.

As of Max 8.1.2 avf [jit.movie](https://docs.cycling74.com/reference/jit.movie) natively supports playback of
[Hap](https://hap.video)
encoded movie files, and there is no longer a need to install a separate package for hap playback.

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

### automatic[int] >= 7.0.0

Enable automatic matrix output when bound to [jit.world](https://docs.cycling74.com/reference/jit.world).

### autostart[int]

Autoplay on movie open flag (default = 1)

### colormode[symbol]

The output matrix's color encoding.

Possible values:

'argb'
(
ARGB (alpha, red, green, blue) colormode
)
'uyvy'
(
UYVY (YUV 4:2:2 packed) colormode
)

### drawto[symbol] >= 7.0.0

A render context name, used when output\_texture is enabled.

### dstrect[4 ints]

The portion of the output matrix used for decompressing media to the internal matrix (default = 0 0 (matrix width) (matrix height))

The bounds of the rectangle are expressed in the form  *left top right bottom* . All values are relative to the top-left corner of the viewing area of the output matrix.

### duration[int] read-only

The duration of the movie.

### engine[symbol] >= 7.0.0

Video engine backend. This argument can only be set in the max box. If not specified, it is determined by the Video Engine Max preference. As of this writing, possible values include  avf  (Mac only),  qt  and  viddll .

### fps[float] read-only

The approximate calculation of the movie's internal FPS rate.

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
no looping
)
1 = 'normal'
(
normal looping (start to end)
)
2 = 'palindrome'
(
palindrome looping (start to end to start to ....)
)
3 = 'playback-limits'
(
no looping, but use looppoints to define playback limits
)
4 = 'seamless'
(
seamless looping of entire file (looppoints ignored, see seamless\_loopcount)
)

### loopend[int]

The movie loop point end. Time is specified as time values.

### looppoints[2 ints]

The movie loop points. Time is specified as time values.

### looppoints\_ms[2 ints] >= 8.0.0

Movie loop points in milliseconds

### looppoints\_secs[2 floats] >= 8.0.0

Movie loop points in seconds

### loopreport[int]

Loop notification flag (default = 0). When enabled, the [jit.movie](https://docs.cycling74.com/reference/jit.movie) object will send the message  loopnotify  when the playing movie passes the loop point. In palindrome looping mode, the message will be sent at both the beginning and the end of the movie.

### loopstart[int]

The movie loop point start. Time is specified as time values.

### milliseconds[int] read-only>= 8.0.0

Movie duration in milliseconds

### movie\_dim[int] read-only

Native movie dimensions

### moviedim[2 ints] read-only

Native movie dimensions

### moviefile[symbol]

Load a movie file from disk

### moviename[symbol] read-only

Identifies the file name of a movie (Note: setting this attribute does not load a movie file).

### moviepath[symbol] read-only

The movie's fully-specified path on disk, if the movie has a disk-file (Note: setting this attribute does not load a movie file).

### output\_texture[int] >= 7.0.0

Enable OpenGL texture output (default = 0). When enabled an OpenGL texture is output instead of a Jitter matrix. The object's drawto attribute must be set to a valid gl context. An RGBA texture is output using the movie's native dimensions. When enabled, the following attributes have no effect:

adapt

colormode

dim

dstrect

srcrect

usedstrect

usesrcrect

### position[float] >= 7.0.0

Current playback position, normalized between 0. and 1. See the above Discussion for information on using  seeknotify  when setting this attribute.

### rate[float]

Set playback speed for a movie. (1.0 = original speed, 0.5 = half-speed, etc).

### seamless\_loopcount[int] >= 8.1.2

Number of instances to add to the seamless loop composition (default = 32). Seamless mode looping enables an avf only feature where the entire file is added seamless\_loopcount number of times to a virtual media composition. When enabled, looping media should exhibit less of a playback stutter when the playhead returns to the start of the file. This mode only allows forward playback looping of the entire file (looppoints are ignored), and is geared more towards temporal compression codec playback, such as h264. Increasing this value adds more instances to the composition, but may impact load time and memory usage.

### seconds[float] read-only>= 7.0.0

The movie duration in seconds.

### srcrect[4 ints]

The portion of the movie to decompress into a matrix (default = 0 0 (movie width) (movie height)). The bounds of the rectangle are expressed in the form  *left top right bottom* . All values are relative to the top-left corner of the viewing area of the movie.

### texture\_name[symbol] >= 7.0.0

Output texture name, when output\_texture is enabled.

### time[int]

The current time in the movie. Time is specified as time values. See the above Discussion for information on using  seeknotify  when setting this attribute.

### time\_ms[int] >= 8.0.0

Current playback time in milliseconds. See the above Discussion for information on using  seeknotify  when setting this attribute.

### time\_secs[float] >= 7.0.0

Current playback time in seconds. See the above Discussion for information on using  seeknotify  when setting this attribute.

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

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### (drag)

Load a compatible media file

### asyncread

Asynchronously reads a movie from a disk file, if possible. If no argument is present a file selection dialog will be presented to choose a file. Any argument is assumed to be a local file name. At this time, asynchronous reading is not supported for URL-based movies

Arguments:

- src-name
  [symbol]

### cancelframedump

Stops the frame dump process. See  framedump .

### dispose

Close the currently loaded movie

### frame

Jump to a frame number. See the above Discussion for information on using  seeknotify  with this message.

Arguments:

- frame-number
  [int]

### frame\_coarse

Jump to a frame number (inaccurate but fast)

### framedump

Commences a framedump, in which the movie will start from a frame specified by  *start-frame*  (the default is 0) and automatically output frames in sequence (no  bang  or  outputmatrix  message is necessary) up to the frame specified by  *end-frame* , skipping  *frame-skip*  frames between each frame. The default values are 0 for the start frame, and the total framecount of the movie for the end frame. The default  *frame-skip*  value is 1.

During operation, the message  framedump  *current\_frame*   is sent out the right outlet before each frame has been output. When finished, the message  framedump done  is output.

Arguments:

- start-frame
  [int]
- end-frame
  [int]
- frame-skip
  [int]

### jump

Jump to a relative movie frame. See the above Discussion for information on using  seeknotify  with this message.

Arguments:

- frame-offset
  [int]

### jump\_coarse

Jump to a relative movie frame (inaccurate but fast)

### read

Reads a movie from a disk file, URL or the clipboard. If no argument is present a file selection dialog will be presented to choose a file. If the argument is parseable as a URL, the object will attempt to load a movie from that location. Otherwise, an argument is assumed to be a local file name.

If autostart is enabled, the movie will begin playing at once.

Arguments:

- src-name
  [symbol]

### start

Starts movie playback at the current rate from the current time value specified by time.

### stop

Stops movie playback. rate is unaffected).

## See Also

| Name | Description |
| --- | --- |
| [Texture Output](https://docs.cycling74.com/userguide/jitter/textures?panchor=texture-output) | Texture Output |
| [Video Engine](https://docs.cycling74.com/userguide/jitter/video_engine) | Video Engine |
| [jit.movie~](https://docs.cycling74.com/reference/jit.movie~) |  |
| [jit.playlist](https://docs.cycling74.com/reference/jit.playlist) | Play video files |
| [jit.grab](https://docs.cycling74.com/reference/jit.grab) | Digitize video from an external source |
| [jit.record](https://docs.cycling74.com/reference/jit.record) | Record a movie |
| [jit.pwindow](https://docs.cycling74.com/reference/jit.pwindow) | Display Jitter data and images |
| [jit.window](https://docs.cycling74.com/reference/jit.window) | Display data in a window |
| [jit.world](https://docs.cycling74.com/reference/jit.world) | The Jitter world context |
| [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) | Create OpenGL textures |
