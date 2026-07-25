---
type: jitter
name: "jit.qt.grab"
summary: "Digitize video from an external source"
signal: false
url: "https://docs.cycling74.com/reference/jit.qt.grab/"
package: "Jitter"
see_also: ["jit.movie", "jit.record"]
---
# jit.qt.grab

Digitize video from an external source

## Description

Use the [jit.grab](https://docs.cycling74.com/reference/jit.grab) object to digitize video from any video digitizer and decompress the signal into a Jitter matrix. On OSX, QuickTime is used; on Windows, DirectX is used.

#### Discussion

[jit.grab](https://docs.cycling74.com/reference/jit.grab) also offers a grab-to-disk mode. Although numerous parameters for control are offered, not all features are supported by all digitizers.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 4 | 1 | char |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### adapt[int]

Adapt output matrix dimensions to native device dimensions. Enabled by default if no dim specified.

### automatic[int]

Enable automatic matrix output when bound to [jit.world](https://docs.cycling74.com/reference/jit.world).

### colormode[symbol]

The output matrix's color encoding (default = argb)

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

The portion of the output matrix used for decompressing media to the internal matrix. (default = 0 0 (matrix width) (matrix height))

The proportions of the rectangle are expressed in the form  *left top right bottom* . All values are relative to the top left corner of the viewing area of the output matrix.

### engine[symbol]

Video engine backend. This argument can only be set in the max box. If not specified, it is determined by the Video Engine Max preference. As of this writing, possible values include  avf  (Mac only),  qt , and  viddll .

### framerate[float]

The video digitizer frame rate (default = digitizer-specific).

The digitizer has to be closed and re-opened before changes to framerate take effect.

### framereport[int]

Frame reporting flag (default = 0)

When enabled, the message  framecalc  will be sent from the rightmost outlet of the [jit.grab](https://docs.cycling74.com/reference/jit.grab) object as each frame is processed, followed by the number of milliseconds spent doing so.

### input[int]

The current video digitizer input (default = digitizer-specific)

### interp[int]

Image interpolation flag (default = 0)

### output\_texture[int]

Enable OpenGL texture output (default = 0). When enabled an OpenGL texture is output instead of a Jitter matrix. The object's drawto attribute must be set to a valid gl context. An RGBA texture is output using the movie's native dimensions. When enabled, the following attributes have no effect:

adapt
colormode
dim
dstrect
srcrect
usedstrect
usesrcrect

### srcrect[4 ints]

Source rect from digitizer frame (default = 0 0 (matrix width) (matrix height))

### texture\_name[symbol]

Output texture name, when output\_texture is enabled.

### unique[int]

Unique frame filter flag (default = 0 (disabled))

When the flag is set, only new frames from the digitizer are output when the object receives a bang. If no new frame has been received from the digitizer, the [jit.grab](https://docs.cycling74.com/reference/jit.grab) object will not respond to the bang.

### usedstrect[int]

Destination rect flag (default = 0) When the flag is set, the dstrect attributes are used when copying an input matrix to the internal matrix.

### usesrcrect[int]

Source rect flag (default = 0) When the flag is set, the srcrect attributes are used when copying an input matrix to the internal matrix.

### vdevice[int]

The current video digitizer (default = 0)

### format[int]

Format

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### close

Closes an open sequence grab component. The component is automatically closed when the object is freed.

### exportimage

Export the current frame as an image file with the name specified by the first argument. The second argument sets the file type (default = png). Available file types are  png ,  tiff , and  jpeg .
You can use the Max Preferences to [specify a default image resolution](https://docs.cycling74.com/userguide/preferences_and_settings#interface) for PNG images.

Arguments:

- filename
  [symbol]
- file-type
  [symbol]

### getinputlist

Reports the list of available inputs to the video digitizer from the object's right outlet, preceded by the word  inputlist . Note that the digitizer must be  open  in order for this method to function.

### getvdevlist

Reports the list of available video digitizers from the object's right outlet, preceded by the word  vdevlist .

### open

Opens a sequence grab component. A component must be explicitly opened before the [jit.grab](https://docs.cycling74.com/reference/jit.grab) object will began digitizing.

### int

TEXT\_HERE

## See Also

| Name | Description |
| --- | --- |
| [jit.movie](https://docs.cycling74.com/reference/jit.qt.movie) | Play or edit a movie |
| [jit.record](https://docs.cycling74.com/reference/jit.qt.record) | Record a movie |
