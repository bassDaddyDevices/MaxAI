---
type: jitter
name: "jit.fx.co.lighten"
summary: "Lighten blending mode"
signal: false
url: "https://docs.cycling74.com/reference/jit.fx.co.lighten/"
package: "Jitter FX"
see_also: ["jit.fx.co.accum", "jit.fx.co.additive", "jit.fx.co.alphablend", "jit.fx.co.average", "jit.fx.co.brightlight", "jit.fx.co.burn", "jit.fx.co.chromakey", "jit.fx.co.darken", "jit.fx.co.difference", "jit.fx.co.dodge", "jit.fx.co.exclude", "jit.fx.co.freeze", "jit.fx.co.glow", "jit.fx.co.hardlight", "jit.fx.co.heat", "jit.fx.co.inverse", "jit.fx.co.lighten", "jit.fx.co.lumakey", "jit.fx.co.multiply", "jit.fx.co.negate", "jit.fx.co.normal", "jit.fx.co.overlay", "jit.fx.co.reflect", "jit.fx.co.screen", "jit.fx.co.softlight", "jit.fx.co.stamp", "jit.fx.co.subtractive"]
---
# jit.fx.co.lighten

Lighten blending mode

## Description

Takes the brightest element between corresponding pixels in inputs.

## Attributes

### bypass[int]

Bypass effect processing flag (default = 0). When enabled the input is passed through to the output without processing.

### adapt[int]: 1

Adapt output dims to input (default = 1). When enabled the output dimensions will match the leftmost input dimensions.

### amount[4 floats]

The blend amount for each plane (default = 0 0 0 0). A blend value of 0. results in output values equivalent to the left input, while a value of 1.0 results in output values equivalent to the right input

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
| [jit.fx.co.accum](https://docs.cycling74.com/reference/jit.fx.co.accum) |  |
| [jit.fx.co.additive](https://docs.cycling74.com/reference/jit.fx.co.additive) |  |
| [jit.fx.co.alphablend](https://docs.cycling74.com/reference/jit.fx.co.alphablend) |  |
| [jit.fx.co.average](https://docs.cycling74.com/reference/jit.fx.co.average) |  |
| [jit.fx.co.brightlight](https://docs.cycling74.com/reference/jit.fx.co.brightlight) |  |
| [jit.fx.co.burn](https://docs.cycling74.com/reference/jit.fx.co.burn) |  |
| [jit.fx.co.chromakey](https://docs.cycling74.com/reference/jit.fx.co.chromakey) |  |
| [jit.fx.co.darken](https://docs.cycling74.com/reference/jit.fx.co.darken) |  |
| [jit.fx.co.difference](https://docs.cycling74.com/reference/jit.fx.co.difference) |  |
| [jit.fx.co.dodge](https://docs.cycling74.com/reference/jit.fx.co.dodge) |  |
| [jit.fx.co.exclude](https://docs.cycling74.com/reference/jit.fx.co.exclude) |  |
| [jit.fx.co.freeze](https://docs.cycling74.com/reference/jit.fx.co.freeze) |  |
| [jit.fx.co.glow](https://docs.cycling74.com/reference/jit.fx.co.glow) |  |
| [jit.fx.co.hardlight](https://docs.cycling74.com/reference/jit.fx.co.hardlight) |  |
| [jit.fx.co.heat](https://docs.cycling74.com/reference/jit.fx.co.heat) |  |
| [jit.fx.co.inverse](https://docs.cycling74.com/reference/jit.fx.co.inverse) |  |
| [jit.fx.co.lighten](https://docs.cycling74.com/reference/jit.fx.co.lighten) |  |
| [jit.fx.co.lumakey](https://docs.cycling74.com/reference/jit.fx.co.lumakey) |  |
| [jit.fx.co.multiply](https://docs.cycling74.com/reference/jit.fx.co.multiply) |  |
| [jit.fx.co.negate](https://docs.cycling74.com/reference/jit.fx.co.negate) |  |
| [jit.fx.co.normal](https://docs.cycling74.com/reference/jit.fx.co.normal) |  |
| [jit.fx.co.overlay](https://docs.cycling74.com/reference/jit.fx.co.overlay) |  |
| [jit.fx.co.reflect](https://docs.cycling74.com/reference/jit.fx.co.reflect) |  |
| [jit.fx.co.screen](https://docs.cycling74.com/reference/jit.fx.co.screen) |  |
| [jit.fx.co.softlight](https://docs.cycling74.com/reference/jit.fx.co.softlight) |  |
| [jit.fx.co.stamp](https://docs.cycling74.com/reference/jit.fx.co.stamp) |  |
| [jit.fx.co.subtractive](https://docs.cycling74.com/reference/jit.fx.co.subtractive) |  |
