---
type: jitter
name: "jit.fx.multiplex"
summary: "Multiplex (interleave) two textures into one texture"
signal: false
url: "https://docs.cycling74.com/reference/jit.fx.multiplex/"
package: "Jitter FX"
see_also: ["jit.fx.alphaglue", "jit.fx.bsort", "jit.fx.concat", "jit.fx.dimmap", "jit.fx.lin2srgb", "jit.fx.multiplex", "jit.fx.rgb2luma", "jit.fx.srgb2lin", "jit.fx.subtexture"]
---
# jit.fx.multiplex

Multiplex (interleave) two textures into one texture

## Description

The jit.multiplex object takes two textures as input, and derives a single output texture from it by interleaving the input textures across a specified dimension. Specifically, the object takes a set of scanlines across the first input texture, placing these into the output texture, then takes a set of scanlines across the second input texture, appending them to the output texture, alternating between the two input sources until their data is exhausted.

## Arguments

None.

## Attributes

### bypass[0 atoms]

Bypass effect processing flag (default = 0). When enabled the input is passed through to the output without processing.

### drawto[0 atoms]

The named context (jit.world, jit.pworld or jit.gl.node) to draw this effect (default = none). If none provided a suitable context will be found implicitly.

### multiplexdim[0 atoms]

The dimension across which multiplexing occurs (default = 0). The most common arguments specify horizontal (i.e., dim[0]) or vertical (dim[1]) multiplexing.
Possible values:

'horizontal'

'vertical'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

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
