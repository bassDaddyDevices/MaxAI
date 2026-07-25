---
type: jitter
name: "jit.altern"
summary: "Color screen with threshold"
signal: false
url: "https://docs.cycling74.com/reference/jit.altern/"
package: "Jitter"
see_also: ["jit.eclipse", "jit.hatch", "jit.multiplex"]
---
# jit.altern

Color screen with threshold

## Description

Overlays a color screen onto incoming matrices. The original matrix values are revealed through "gaps" in the screen.

## Matrix Operator

matrix inputs:1, matrix outputs:1

| Name | IOProc | Planelink | Typelink | Dimlink | Plane | Dim | Type |
| --- | --- | --- | --- | --- | --- | --- | --- |
| out | n/a | 1 | 1 | 1 | 1 | 1 | char long float32 float64 |

### More about Matrix Operators

Shared across all objects — see [More about Matrix Operators](../_shared/jitter-matrix-operators.md).

## Attributes

### bgcolor[32 floats]

The overlaid screen color  *alpha*   *red*   *green*   *blue*  (default = 0. 0. 0. 0.) All values are in the range 0.-1.

### colwidth[int]

The width of the vertical band "gaps" in the screen. (default = 1)

### ignore\_zero[int]

Alpha channel mode (default = 0 (include alpha channel))

0 = Luminance calculation includes the alpha channel

1 = Plane 0 is ignored and the luminance threshold calculation uses the RGB value

### rowheight[int]

The height of the horizontal band "gaps" in the screen. (default = 1)

### thresh[float]

The luminance threshold as an average of plane values (default = 0.) Input matrix values above this threshold are displayed as a grid of rectangular "gaps" between the overlaid horizontal and vertical screen stripes. Values below the threshold are displayed using the color specified by the bgcolor attribute.

### xinterval[int]

The spacing of "gaps" in the screen along the horizontal axis. (default = 1)

### yinterval[int]

The spacing of "gaps" in the screen along the vertical axis. (default = 1)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.eclipse](https://docs.cycling74.com/reference/jit.eclipse) | Create images from images |
| [jit.hatch](https://docs.cycling74.com/reference/jit.hatch) | Perform crosshatch filtering |
| [jit.multiplex](https://docs.cycling74.com/reference/jit.multiplex) | Multiplex (interleave) two matrices into one matrix |
