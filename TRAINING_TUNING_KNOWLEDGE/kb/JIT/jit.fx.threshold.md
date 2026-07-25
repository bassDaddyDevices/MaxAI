---
type: jitter
name: "jit.fx.threshold"
summary: "Apply a smooth threshold effect on input texture"
signal: false
url: "https://docs.cycling74.com/reference/jit.fx.threshold/"
package: "Jitter FX"
see_also: ["jit.fx.altern", "jit.fx.ameba", "jit.fx.bitcrush", "jit.fx.blur", "jit.fx.brass", "jit.fx.brcosa", "jit.fx.camera", "jit.fx.conway", "jit.fx.crt", "jit.fx.delay", "jit.fx.eclipse", "jit.fx.grain", "jit.fx.hue", "jit.fx.pixelsorting", "jit.fx.repos", "jit.fx.rota", "jit.fx.slide", "jit.fx.sobel", "jit.fx.threshold", "jit.fx.vhs", "jit.fx.wake"]
---
# jit.fx.threshold

Apply a smooth threshold effect on input texture

## Description

Apply a smooth threshold effect on input texture. It smoothly blends pixels near the threshold using a smoothness parameter, allowing for soft transitions.

## Attributes

### bypass[int]

Bypass effect processing flag (default = 0). When enabled the input is passed through to the output without processing.

### adapt[int]: 1

Adapt output dims to input (default = 1). When enabled the output dimensions will match the leftmost input dimensions.

### amt[float]

Color range amt (default = 0.5). Defines the center of the threshold range, determining which colors in the image are affected by the effect. Colors near the amt value are highlighted, while those further away are suppressed.

### dim[2 ints]

The output texture dimensions. When adapt is enabled this will be set automatically to the leftmost input.

### smoothness[float]

Transition smoothness (default = 0.). Controls the softness of the transition at the threshold edges. A higher value creates a gradual blend between affected and unaffected colors, while a lower value results in a sharper, more defined threshold.

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
| [jit.fx.altern](https://docs.cycling74.com/reference/jit.fx.altern) |  |
| [jit.fx.ameba](https://docs.cycling74.com/reference/jit.fx.ameba) |  |
| [jit.fx.bitcrush](https://docs.cycling74.com/reference/jit.fx.bitcrush) |  |
| [jit.fx.blur](https://docs.cycling74.com/reference/jit.fx.blur) |  |
| [jit.fx.brass](https://docs.cycling74.com/reference/jit.fx.brass) |  |
| [jit.fx.brcosa](https://docs.cycling74.com/reference/jit.fx.brcosa) |  |
| [jit.fx.camera](https://docs.cycling74.com/reference/jit.fx.camera) |  |
| [jit.fx.conway](https://docs.cycling74.com/reference/jit.fx.conway) |  |
| [jit.fx.crt](https://docs.cycling74.com/reference/jit.fx.crt) |  |
| [jit.fx.delay](https://docs.cycling74.com/reference/jit.fx.delay) |  |
| [jit.fx.eclipse](https://docs.cycling74.com/reference/jit.fx.eclipse) |  |
| [jit.fx.grain](https://docs.cycling74.com/reference/jit.fx.grain) |  |
| [jit.fx.hue](https://docs.cycling74.com/reference/jit.fx.hue) |  |
| [jit.fx.pixelsorting](https://docs.cycling74.com/reference/jit.fx.pixelsorting) |  |
| [jit.fx.repos](https://docs.cycling74.com/reference/jit.fx.repos) |  |
| [jit.fx.rota](https://docs.cycling74.com/reference/jit.fx.rota) |  |
| [jit.fx.slide](https://docs.cycling74.com/reference/jit.fx.slide) |  |
| [jit.fx.sobel](https://docs.cycling74.com/reference/jit.fx.sobel) |  |
| [jit.fx.threshold](https://docs.cycling74.com/reference/jit.fx.threshold) |  |
| [jit.fx.vhs](https://docs.cycling74.com/reference/jit.fx.vhs) |  |
| [jit.fx.wake](https://docs.cycling74.com/reference/jit.fx.wake) |  |
