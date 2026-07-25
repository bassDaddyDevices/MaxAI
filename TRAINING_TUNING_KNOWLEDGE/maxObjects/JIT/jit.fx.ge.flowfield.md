---
type: jitter
name: "jit.fx.ge.flowfield"
summary: "Create a flow field effect"
signal: false
url: "https://docs.cycling74.com/reference/jit.fx.ge.flowfield/"
package: "Jitter FX"
see_also: ["jit.fx.ge.flowfield", "jit.fx.ge.lineinterp", "jit.fx.ge.pattern", "jit.fx.ge.randlines"]
---
# jit.fx.ge.flowfield

Create a flow field effect

## Description

Creates a flow field visual effect where dynamic lines are generated over an image, with their orientation influenced by the underlying color values, which they interpret as rotational vectors.

## Arguments

None.

## Attributes

### adapt[0 atoms]

Adapt output dims to input (default = 1). When enabled the output dimensions will match the leftmost input dimensions.

### alpha[float]: 0.05

The alpha channel fade amount (default = 0.05).

### blend[0 atoms]

The named blending mode.
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

### fade[float]: 1

Sets the amount of color fading along the lines (default = 0).

### filter[float]: 1

Introduces inertia to the rotation, causing the lines to turn more slowly (default = 0).

### indimscale[2 floats]: 0.25 0.25

Scales the input texture for the internal effect computation (default = 0.25 0.25).

### randomness[float]: 1

Controls the amount of randomness applied to line rotation (default = 0).

### rotation[float]: 0.5

Adjusts the strength of the rotation applied to the lines, based on the influence of the underlying color values (default = 0.5).

### step[float]: 1

Controls the lines step length (default = 1).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.fx.ge.flowfield](https://docs.cycling74.com/reference/jit.fx.ge.flowfield) |  |
| [jit.fx.ge.lineinterp](https://docs.cycling74.com/reference/jit.fx.ge.lineinterp) |  |
| [jit.fx.ge.pattern](https://docs.cycling74.com/reference/jit.fx.ge.pattern) |  |
| [jit.fx.ge.randlines](https://docs.cycling74.com/reference/jit.fx.ge.randlines) |  |
