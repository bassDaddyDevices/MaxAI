---
type: jitter
name: "jit.fx.tr.huefade"
summary: "Huefade transition"
signal: false
url: "https://docs.cycling74.com/reference/jit.fx.tr.huefade/"
package: "Jitter FX"
see_also: ["jit.fx.tr.dissolve", "jit.fx.tr.gridwipe", "jit.fx.tr.huefade", "jit.fx.tr.rotfade", "jit.fx.tr.shrinkwipe", "jit.fx.tr.slide", "jit.fx.tr.vignettes", "jit.fx.tr.xfade", "jit.fx.tr.zoomfade"]
---
# jit.fx.tr.huefade

Huefade transition

## Description

[jit.fx.tr.huefade](https://docs.cycling74.com/reference/jit.fx.tr.huefade) performs a hue based image transition from the first to the second provided texture.

## Arguments

None.

## Attributes

### adapt[0 atoms]

Adapt output dims to input (default = 1). When enabled the output dimensions will match the leftmost input dimensions.

### amt[float]: 0

The amount of the transition in 0-1 range. 0 fully displays the first input texture and 1 the second.

### bypass[0 atoms]

Bypass effect processing flag (default = 0). When enabled the input is passed through to the output without processing.

### dim[2 ints]: 1 1

The output texture dimensions. When adapt is enabled this will be set automatically to the leftmost input.

### drawto[0 atoms]

The named context (jit.world, jit.pworld or jit.gl.node) to draw this effect (default = none). If none provided a suitable context will be found implicitly.

### enable[0 atoms]

Enable flag (default = 1). When the flag is set, processing and output is enabled.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.fx.tr.dissolve](https://docs.cycling74.com/reference/jit.fx.tr.dissolve) |  |
| [jit.fx.tr.gridwipe](https://docs.cycling74.com/reference/jit.fx.tr.gridwipe) |  |
| [jit.fx.tr.huefade](https://docs.cycling74.com/reference/jit.fx.tr.huefade) |  |
| [jit.fx.tr.rotfade](https://docs.cycling74.com/reference/jit.fx.tr.rotfade) |  |
| [jit.fx.tr.shrinkwipe](https://docs.cycling74.com/reference/jit.fx.tr.shrinkwipe) |  |
| [jit.fx.tr.slide](https://docs.cycling74.com/reference/jit.fx.tr.slide) |  |
| [jit.fx.tr.vignettes](https://docs.cycling74.com/reference/jit.fx.tr.vignettes) |  |
| [jit.fx.tr.xfade](https://docs.cycling74.com/reference/jit.fx.tr.xfade) |  |
| [jit.fx.tr.zoomfade](https://docs.cycling74.com/reference/jit.fx.tr.zoomfade) |  |
