---
type: jitter
name: "jit.viddll.movie"
summary: "Play a movie file"
signal: false
url: "https://docs.cycling74.com/reference/jit.viddll.movie/"
package: "VIDDLL"
see_also: ["Texture Output", "Video Engine", "jit.movie~", "jit.playlist", "jit.grab", "jit.record", "jit.pwindow", "jit.window", "jit.world", "jit.gl.texture"]
---
# jit.viddll.movie

Play a movie file

## Description

The [jit.movie](https://docs.cycling74.com/reference/jit.movie) object plays and manipulates movie files. It comes in two forms: jit.movie, which outputs matrices, and jit.gl.movie, which outputs [OpenGL textures](https://docs.cycling74.com/userguide/jitter/textures). The OpenGL version is recommended for smoother playback and better performance.

#### Discussion

This document refers to the viddll engine version of [jit.movie](https://docs.cycling74.com/reference/jit.movie).
The viddll backed [jit.movie](https://docs.cycling74.com/reference/jit.movie) relies heavily on the cache\_size attribute for performance, especially when playing in reverse.

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

### cache\_size[float]

The maximum cache size in gigabytes (default = 0.1). The cache stores frames in memory as they are decoded, allowing for efficient playback. When the cache\_size limit is reached, the least recently used frames are discarded from the cache.

Reverse playback stutters may be the result of insufficient cache\_size.

Care should be taken when adjusting the cache\_size, if the frame cache exceeds the available memory, the application may crash.

See the  loadram  message for loading a file into cache automatically.

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

### drawto[symbol]

A render context name, used when output\_texture is enabled.

### dstrect[4 ints]

The portion of the output matrix used for decompressing media to the internal matrix (default = 0 0 (matrix width) (matrix height))

The bounds of the rectangle are expressed in the form  *left top right bottom* . All values are relative to the top-left corner of the viewing area of the output matrix.

### duration[int]

The duration of the movie.

### engine[symbol]

Video engine backend. This argument can only be set in the max box. If not specified, it is determined by the Video Engine Max preference. As of this writing, possible values include  avf  (Mac only),  qt  and  viddll .

### fps[float]

Internal FPS for the movie

### framecount[int]

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

### movie\_dim[2 ints] read-only

Native movie dimensions

### moviedim[2 ints] read-only

Native movie dimensions

### moviefile[symbol]

Load a movie file from disk

### moviename[symbol] read-only

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

### position[float]

Current playback position, normalized between 0. and 1.

### rate[float]

Movie rate

### seconds[float] read-only

The movie duration in seconds.

### srcrect[4 ints]

The portion of the movie to decompress into a matrix (default = 0 0 (movie width) (movie height)). The bounds of the rectangle are expressed in the form  *left top right bottom* . All values are relative to the top-left corner of the viewing area of the movie.

### texture\_name[symbol]

Output texture name, when output\_texture is enabled.

### time[int]

The current time in the movie. The actual time in seconds depends on the timescale attribute.

### time\_ms[int] >= 8.0.0

Current playback time in milliseconds.

### time\_secs[float]

Current playback time in seconds.

### timescale[int]

The timescale for the movie (default = 600, but movie-dependent). The timescale determines the number of time units per second.

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

Asynchronously reads a movie from a disk file in a non-blocking background thread. If no argument is present a file selection dialog will be presented to choose a file.

Arguments:

- src-name
  [symbol]

### cancelloadram

Cancel an executing loadram request

### dispose

Close the currently loaded movie and free any memory associated with it

### cancelframedump

Stops the frame dump process. See  framedump .

### frame

Jump to a frame number.

Arguments:

- frame-number
  [int]

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

Jump to a relative movie frame.

Arguments:

- frame-offset
  [int]

### loadram

loadram will attempt to load the current movie file into memory. The loading happens in a non-blocking background thread. When complete a loadram notification specifying the exact range loaded is sent out the dump outlet.

Arguments allow for specifying a range to load, in seconds. A single positive argument specifies end time, A single negative argument specifies start time from the end, and two arguments specify start and end times.

The cache\_size attribute must be set prior to the loadram request to a value large enough to hold frames from the specified range.

When a loadram request is executing the file cannot play back frames until the request is completed or the  cancelloadram  message is received.

Arguments:

- start-time-seconds
  [float]
- end-time-seconds
  [float]

### start

Starts movie playback at the current rate from the current time value.

### stop

Stops movie playback. rate is unaffected).

### read

Reads a movie from a disk file or URL. If no argument is present a file selection dialog will be presented to choose a file. If the argument is parseable as a URL, the object will attempt to load a movie from that location. Otherwise, an argument is assumed to be a local file name.

If autostart is enabled, the movie will begin playing at once.

Arguments:

- src-name
  [symbol]

### unloadram

Release any frames loaded with the  loadram  message

## See Also

| Name | Description |
| --- | --- |
| [Texture Output](https://docs.cycling74.com/userguide/jitter/textures?panchor=texture-output) | Texture Output |
| [Video Engine](https://docs.cycling74.com/userguide/jitter/video_engine) | Video Engine |
| [jit.movie~](https://docs.cycling74.com/reference/jit.movie~) | Play a movie file with an audio track |
| [jit.playlist](https://docs.cycling74.com/reference/jit.playlist) | Play video files |
| [jit.grab](https://docs.cycling74.com/reference/jit.grab) | Digitize video from an external source |
| [jit.record](https://docs.cycling74.com/reference/jit.record) | Record a movie |
| [jit.pwindow](https://docs.cycling74.com/reference/jit.pwindow) | Display Jitter data and images |
| [jit.window](https://docs.cycling74.com/reference/jit.window) | Display data in a window |
| [jit.world](https://docs.cycling74.com/reference/jit.world) | The Jitter world context |
| [jit.gl.texture](https://docs.cycling74.com/reference/jit.gl.texture) | Create OpenGL textures |
