---
type: jitter
name: "jit.qt.videoout"
summary: "Output video to QuickTime video output component"
signal: false
url: "https://docs.cycling74.com/reference/jit.qt.videoout/"
package: "Jitter"
see_also: ["jit.qt.effect", "jit.qt.grab", "jit.qt.movie", "jit.qt.record"]
---
# jit.qt.videoout

Output video to QuickTime video output component

## Description

[jit.qt.videoout](https://docs.cycling74.com/reference/jit.qt.videoout) takes a matrix as input, compresses the data and sends it directly to a video output component (VOC).

#### Discussion

Supported video output components include DV cameras (via the FireWire VOC) or special video cards (such as the Matrox RT).

 **WINDOWS USERS: This object is currently unsupported.**

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### codecquality[int]

Codec quality (default = 2 (normal))

0 = minimum

1 = low

2 = normal

3 = high

4 = maximum

5 = lossless

Note that minimum quality is, in many cases, the codec's default quality. Use "low" quality for consistent results.

### colormode[symbol]

Sets the color mode (argb or uyvy).

### voc[int]

The currently selected video output component (default = 0)

### vocmode[int]

The current video output component (VOC) mode (default = component dependent)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### close

Closes the connection to an open video output component. The connection is automatically closed when the object is freed.

### getvoclist

Sends a list of the available video output components out the object's right outlet.

### getvocmodes

Sends a list of the available video output component modes out the object's right outlet. (e.g. the FireWire DV VOC offers NTSC and PAL modes)

### open

Opens a component connection for video output. You must open the connection before the [jit.qt.videoout](https://docs.cycling74.com/reference/jit.qt.videoout) object does anything.

## See Also

| Name | Description |
| --- | --- |
| [jit.qt.effect](https://docs.cycling74.com/reference/jit.qt.effect) |  |
| [jit.qt.grab](https://docs.cycling74.com/reference/jit.qt.grab) | Digitize video from an external source |
| [jit.qt.movie](https://docs.cycling74.com/reference/jit.qt.movie) | Play or edit a movie |
| [jit.qt.record](https://docs.cycling74.com/reference/jit.qt.record) | Record a movie |
