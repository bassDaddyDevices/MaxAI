---
type: jitter
name: "jit.fx.ge.randlines"
summary: "Generate random lines"
signal: false
url: "https://docs.cycling74.com/reference/jit.fx.ge.randlines/"
package: "Jitter FX"
see_also: ["jit.fx.ge.flowfield", "jit.fx.ge.lineinterp", "jit.fx.ge.pattern", "jit.fx.ge.randlines"]
---
# jit.fx.ge.randlines

Generate random lines

## Description

Creates random lines connecting pairs of pixels.

## Arguments

None.

## Attributes

### adapt[0 atoms]

Adapt output dims to input (default = 1). When enabled the output dimensions will match the leftmost input dimensions.

### alpha[float]: 0.2

The alpha channel fade amount (default = 0.2).

### amt[float]: 0.5

Adjusts the density of lines by setting a luminance threshold. Pixels with luminance above this value have a chance to initiate a line (default = 0.5).

### blend[0 atoms]

The named blending mode. The possible values are:
Possible values:

'add'

'multiply'

'screen'

'exclusion'

'colorblend'

'alphablend'

'coloradd'

'alphaadd'

### bypass[0 atoms]

Bypass effect processing flag (default = 0). When enabled the input is passed through to the output without processing.

### dim[2 ints]: 1 1

The output texture dimensions. When adapt is enabled this will be set automatically to the leftmost input.

### drawto[0 atoms]

The named context (jit.world, jit.pworld or jit.gl.node) to draw this effect (default = none). If none provided a suitable context will be found implicitly.

### enable[0 atoms]

Enable flag (default = 1). When the flag is set, processing and output is enabled.

### indimscale[2 floats]: 0.5 0.5

Scales the input texture for the internal effect computation (default = 0.5 0.5).

### radius[float]: 100

Pixels have a chance to be connected by a line if the distance between them is less than radius (default = 100)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.fx.ge.flowfield](https://docs.cycling74.com/reference/jit.fx.ge.flowfield) |  |
| [jit.fx.ge.lineinterp](https://docs.cycling74.com/reference/jit.fx.ge.lineinterp) |  |
| [jit.fx.ge.pattern](https://docs.cycling74.com/reference/jit.fx.ge.pattern) |  |
| [jit.fx.ge.randlines](https://docs.cycling74.com/reference/jit.fx.ge.randlines) |  |
