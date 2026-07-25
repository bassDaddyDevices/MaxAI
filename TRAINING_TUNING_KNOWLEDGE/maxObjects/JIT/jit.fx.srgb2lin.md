---
type: jitter
name: "jit.fx.srgb2lin"
summary: "Convert srgb color to linear"
signal: false
url: "https://docs.cycling74.com/reference/jit.fx.srgb2lin/"
package: "Jitter FX"
see_also: ["jit.fx.alphaglue", "jit.fx.bsort", "jit.fx.concat", "jit.fx.dimmap", "jit.fx.lin2srgb", "jit.fx.multiplex", "jit.fx.rgb2luma", "jit.fx.srgb2lin", "jit.fx.subtexture"]
---
# jit.fx.srgb2lin

Convert srgb color to linear

## Description

[jit.fx.srgb2lin](https://docs.cycling74.com/reference/jit.fx.srgb2lin) converts a texture in srgb color space to linear.

## Attributes

### bypass[int]

Bypass effect processing flag (default = 0). When enabled the input is passed through to the output without processing.

### adapt[int]: 1

Adapt output dims to input (default = 1). When enabled the output dimensions will match the leftmost input dimensions.

### dim[2 ints]

The output texture dimensions. When adapt is enabled this will be set automatically to the leftmost input.

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
| [jit.fx.alphaglue](https://docs.cycling74.com/reference/jit.fx.alphaglue) |  |
| [jit.fx.bsort](https://docs.cycling74.com/reference/jit.fx.bsort) |  |
| [jit.fx.concat](https://docs.cycling74.com/reference/jit.fx.concat) |  |
| [jit.fx.dimmap](https://docs.cycling74.com/reference/jit.fx.dimmap) |  |
| [jit.fx.lin2srgb](https://docs.cycling74.com/reference/jit.fx.lin2srgb) |  |
| [jit.fx.multiplex](https://docs.cycling74.com/reference/jit.fx.multiplex) |  |
| [jit.fx.rgb2luma](https://docs.cycling74.com/reference/jit.fx.rgb2luma) |  |
| [jit.fx.srgb2lin](https://docs.cycling74.com/reference/jit.fx.srgb2lin) |  |
| [jit.fx.subtexture](https://docs.cycling74.com/reference/jit.fx.subtexture) |  |
