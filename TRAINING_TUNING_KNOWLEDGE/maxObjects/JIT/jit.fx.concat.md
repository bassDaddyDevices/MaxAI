---
type: jitter
name: "jit.fx.concat"
summary: "Concatenate two textures"
signal: false
url: "https://docs.cycling74.com/reference/jit.fx.concat/"
package: "Jitter FX"
see_also: ["jit.fx.alphaglue", "jit.fx.bsort", "jit.fx.concat", "jit.fx.dimmap", "jit.fx.lin2srgb", "jit.fx.multiplex", "jit.fx.rgb2luma", "jit.fx.srgb2lin", "jit.fx.subtexture"]
---
# jit.fx.concat

Concatenate two textures

## Description

Accepts two texture as input, and sends a single concatenated texture out.

## Arguments

None.

## Attributes

### bypass[0 atoms]

Bypass effect processing flag (default = 0). When enabled the input is passed through to the output without processing.

### concatdim[0 atoms]

The dimension across which concatenation occur.
Possible values:

'horizontal'

'vertical'

### drawto[0 atoms]

The named context (jit.world, jit.pworld or jit.gl.node) to draw this effect (default = none). If none provided a suitable context will be found implicitly.

### enable[0 atoms]

Enable flag (default = 1). When the flag is set, processing and output is enabled.

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
