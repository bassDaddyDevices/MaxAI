---
type: jitter
name: "jit.fx.cf.bilateral"
summary: "Bilateral filter"
signal: false
url: "https://docs.cycling74.com/reference/jit.fx.cf.bilateral/"
package: "Jitter FX"
see_also: ["jit.fx.cf.bilateral", "jit.fx.cf.directional", "jit.fx.cf.gaussian", "jit.fx.cf.kuwahara", "jit.fx.cf.radial", "jit.fx.cf.sharpen", "jit.fx.cf.tiltshift"]
---
# jit.fx.cf.bilateral

Bilateral filter

## Description

Applies bilateral filtering to a given input texture.

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
| [jit.fx.cf.bilateral](https://docs.cycling74.com/reference/jit.fx.cf.bilateral) |  |
| [jit.fx.cf.directional](https://docs.cycling74.com/reference/jit.fx.cf.directional) |  |
| [jit.fx.cf.gaussian](https://docs.cycling74.com/reference/jit.fx.cf.gaussian) |  |
| [jit.fx.cf.kuwahara](https://docs.cycling74.com/reference/jit.fx.cf.kuwahara) |  |
| [jit.fx.cf.radial](https://docs.cycling74.com/reference/jit.fx.cf.radial) |  |
| [jit.fx.cf.sharpen](https://docs.cycling74.com/reference/jit.fx.cf.sharpen) |  |
| [jit.fx.cf.tiltshift](https://docs.cycling74.com/reference/jit.fx.cf.tiltshift) |  |
