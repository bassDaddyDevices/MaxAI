---
type: jitter
name: "jit.dx.videoout"
summary: "Output video to DirectX (Windows)"
signal: false
url: "https://docs.cycling74.com/reference/jit.dx.videoout/"
package: "Jitter"
see_also: ["jit.qt.effect", "jit.dx.grab", "jit.qt.grab", "jit.qt.movie", "jit.qt.record", "jit.qt.videoout"]
---
# jit.dx.videoout

Output video to DirectX (Windows)

## Description

The [jit.dx.videoout](https://docs.cycling74.com/reference/jit.dx.videoout) object takes a matrix as input, compresses the data and sends it directly over FireWire to an attached DV camera.

#### Discussion

MACINTOSH USERS: The [jit.dx.videoout](https://docs.cycling74.com/reference/jit.dx.videoout) object uses DirectX, and is Windows-only. Please refer to the [jit.qt.videoout](https://docs.cycling74.com/reference/jit.qt.videoout) object.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### open

Opens a connection to a FireWire device for video output. You must open the connection before the [jit.dx.videoout](https://docs.cycling74.com/reference/jit.dx.videoout) object does anything.

### close

Closes the connection to an open FireWire device. The connection is automatically closed when the object is freed.

## See Also

| Name | Description |
| --- | --- |
| [jit.qt.effect](https://docs.cycling74.com/reference/jit.qt.effect) |  |
| [jit.dx.grab](https://docs.cycling74.com/reference/jit.dx.grab) | Digitize video using DirectX (Windows) |
| [jit.qt.grab](https://docs.cycling74.com/reference/jit.qt.grab) | Digitize video from an external source |
| [jit.qt.movie](https://docs.cycling74.com/reference/jit.qt.movie) | Play or edit a movie |
| [jit.qt.record](https://docs.cycling74.com/reference/jit.qt.record) | Record a movie |
| [jit.qt.videoout](https://docs.cycling74.com/reference/jit.qt.videoout) | Output video to QuickTime video output component |
