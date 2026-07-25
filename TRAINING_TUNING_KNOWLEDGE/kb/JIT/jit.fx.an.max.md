---
type: jitter
name: "jit.fx.an.max"
summary: "Report max values"
signal: false
url: "https://docs.cycling74.com/reference/jit.fx.an.max/"
package: "Jitter FX"
see_also: ["jit.fx.an.max", "jit.fx.an.mean", "jit.fx.an.min"]
---
# jit.fx.an.max

Report max values

## Description

Reports the maximum values for each plane of a given input texture.

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

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.fx.an.max](https://docs.cycling74.com/reference/jit.fx.an.max) |  |
| [jit.fx.an.mean](https://docs.cycling74.com/reference/jit.fx.an.mean) |  |
| [jit.fx.an.min](https://docs.cycling74.com/reference/jit.fx.an.min) |  |
