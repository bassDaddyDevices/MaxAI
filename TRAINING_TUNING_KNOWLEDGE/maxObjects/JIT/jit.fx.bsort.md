---
type: jitter
name: "jit.fx.bsort"
summary: "Bubble sort"
signal: false
url: "https://docs.cycling74.com/reference/jit.fx.bsort/"
package: "Jitter FX"
see_also: ["jit.fx.alphaglue", "jit.fx.bsort", "jit.fx.concat", "jit.fx.dimmap", "jit.fx.lin2srgb", "jit.fx.multiplex", "jit.fx.rgb2luma", "jit.fx.srgb2lin", "jit.fx.subtexture"]
---
# jit.fx.bsort

Bubble sort

## Description

Performs a bubble sort on an incoming texture, sorting pixels in ascending order

## Arguments

None.

## Attributes

### adapt[0 atoms]

Adapt output dims to input (default = 1). When enabled the output dimensions will match the leftmost input dimensions.

### bypass[0 atoms]

Bypass effect processing flag (default = 0). When enabled the input is passed through to the output without processing.

### dim[2 ints]: 1 1

The output texture dimensions. When adapt is enabled this will be set automatically to the leftmost input.

### dimmode[0 atoms]

Sorts along the dimension specified the integer (0 or 1)
Possible values:

'horizontal'

'vertical'

### drawto[0 atoms]

The named context (jit.world, jit.pworld or jit.gl.node) to draw this effect (default = none). If none provided a suitable context will be found implicitly.

### enable[0 atoms]

Enable flag (default = 1). When the flag is set, processing and output is enabled.

### max\_iterations[int]: 1000

The maximum number of search iterations (default = -1). A value of -1 sets the search iterations based on the texture size.

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
