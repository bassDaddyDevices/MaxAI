---
type: jitter
name: "jit.fx.dimmap"
summary: "Remap and/or invert texture dimensions"
signal: false
url: "https://docs.cycling74.com/reference/jit.fx.dimmap/"
package: "Jitter FX"
see_also: ["jit.fx.alphaglue", "jit.fx.bsort", "jit.fx.concat", "jit.fx.dimmap", "jit.fx.lin2srgb", "jit.fx.multiplex", "jit.fx.rgb2luma", "jit.fx.srgb2lin", "jit.fx.subtexture"]
---
# jit.fx.dimmap

Remap and/or invert texture dimensions

## Description

Provides remapping and/or inversion of texture dimensions. Similar to the [jit.transpose](https://docs.cycling74.com/reference/jit.transpose) object, however any dimension may be mapped to any other dimension as well as inverted. Note that the input to output map may not contain any duplicates. Redundant dimensions of size 1 may be inserted by using a map value of -1 at the corresponding dimension index.

## Arguments

None.

## Attributes

### adapt[0 atoms]

Adapt output dims to input (default = 1). When enabled the output dimensions will match the leftmost input dimensions.

### bypass[0 atoms]

Bypass effect processing flag (default = 0). When enabled the input is passed through to the output without processing.

### dim[2 ints]: 1 1

The output texture dimensions. When adapt is enabled this will be set automatically to the leftmost input.

### drawto[0 atoms]

The named context (jit.world, jit.pworld or jit.gl.node) to draw this effect (default = none). If none provided a suitable context will be found implicitly.

### enable[0 atoms]

Enable flag (default = 1). When the flag is set, processing and output is enabled.

### invert[2 ints]: 0 0

Invert dimension flag array (default = all zero)

### map[int]: 0

Input to output dimension map (default = 0 1 2 ... 31)

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
