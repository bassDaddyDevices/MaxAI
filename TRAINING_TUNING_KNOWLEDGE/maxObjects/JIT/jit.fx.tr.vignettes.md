---
type: jitter
name: "jit.fx.tr.vignettes"
summary: "Vignette transition"
signal: false
url: "https://docs.cycling74.com/reference/jit.fx.tr.vignettes/"
package: "Jitter FX"
see_also: ["jit.fx.tr.dissolve", "jit.fx.tr.gridwipe", "jit.fx.tr.huefade", "jit.fx.tr.rotfade", "jit.fx.tr.shrinkwipe", "jit.fx.tr.slide", "jit.fx.tr.vignettes", "jit.fx.tr.xfade", "jit.fx.tr.zoomfade"]
---
# jit.fx.tr.vignettes

Vignette transition

## Description

[jit.fx.tr.vignettes](https://docs.cycling74.com/reference/jit.fx.tr.vignettes) performs a vignette based transition from the first to the second provided texture.

## Attributes

### bypass[int]

Bypass effect processing flag (default = 0). When enabled the input is passed through to the output without processing.

### adapt[int]: 1

Adapt output dims to input (default = 1). When enabled the output dimensions will match the leftmost input dimensions.

### dim[2 ints]

The output texture dimensions. When adapt is enabled this will be set automatically to the leftmost input.

### fade[float]

Fade the edges of the vignette mask (default = 0 0).

### invert[float]

Factor to invert the vignette mask (default = 0).

### scale[2 floats]

Control the vignette cell count (default = 1 1)

### wipe[float]

Control the vignette wipe factor (default = 0 0). If either one of the axis reaches 1, the second texture is fully visible.

### OB3D Attributes

### drawto[symbol]

The named drawing context in which to draw (default = none) A named drawing context is a named instance of a jit.window, jit.pwindow, or jit.matrix object that has an instance of the jit.gl.render object associated with it.

### enable[int]

Enable flag (default = 1) When the flag is set, drawing is enabled.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## Messages

### OB3D Messages

### bang

Equivalent to the  draw  message.

### draw

Draws the object in the named drawing destination. If the matrixoutput attribute is supported and set to 1, the geometry matrices are sent out the object's left outlet.

### drawraw

Equivalent to  draw  with the inherit\_all attribute set to 1.

### drawimmediate

Equivalent to  draw  but ignoring any potential renderer setup

### jit\_gl\_texture

Binds the texture specified by  *texture-name*  to this object. Equivalent to setting the texture attribute to  *texture-name* .

Arguments:

- texture-name
  [symbol]

## See Also

| Name | Description |
| --- | --- |
| [jit.fx.tr.dissolve](https://docs.cycling74.com/reference/jit.fx.tr.dissolve) |  |
| [jit.fx.tr.gridwipe](https://docs.cycling74.com/reference/jit.fx.tr.gridwipe) |  |
| [jit.fx.tr.huefade](https://docs.cycling74.com/reference/jit.fx.tr.huefade) |  |
| [jit.fx.tr.rotfade](https://docs.cycling74.com/reference/jit.fx.tr.rotfade) |  |
| [jit.fx.tr.shrinkwipe](https://docs.cycling74.com/reference/jit.fx.tr.shrinkwipe) |  |
| [jit.fx.tr.slide](https://docs.cycling74.com/reference/jit.fx.tr.slide) |  |
| [jit.fx.tr.vignettes](https://docs.cycling74.com/reference/jit.fx.tr.vignettes) |  |
| [jit.fx.tr.xfade](https://docs.cycling74.com/reference/jit.fx.tr.xfade) |  |
| [jit.fx.tr.zoomfade](https://docs.cycling74.com/reference/jit.fx.tr.zoomfade) |  |
