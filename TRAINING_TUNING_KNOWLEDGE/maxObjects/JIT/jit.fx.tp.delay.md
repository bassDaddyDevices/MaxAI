---
type: jitter
name: "jit.fx.tp.delay"
summary: "Delay a texture"
signal: false
url: "https://docs.cycling74.com/reference/jit.fx.tp.delay/"
package: "Jitter FX"
see_also: ["jit.fx.tp.delay", "jit.fx.tp.filter", "jit.fx.tp.warp"]
---
# jit.fx.tp.delay

Delay a texture

## Description

Delays a texture of a certain amount of frames.

## Arguments

None.

## Attributes

### adapt[0 atoms]

Adapt output dims to input (default = 1). When enabled the output dimensions will match the leftmost input dimensions.

### bypass[0 atoms]

Bypass effect processing flag (default = 0). When enabled the input is passed through to the output without processing.

### delay[float]: 0

Sets the delay amount (default = 0).

### dim[2 ints]: 1 1

The output texture dimensions. When adapt is enabled this will be set automatically to the leftmost input.

### drawto[0 atoms]

The named context (jit.world, jit.pworld or jit.gl.node) to draw this effect (default = none). If none provided a suitable context will be found implicitly.

### enable[0 atoms]

Enable flag (default = 1). When the flag is set, processing and output is enabled.

### interp[0 atoms]

Frame interpolation flag (default = 1). When the flag is set, frames are linearely interpolated.

### max\_delay[int]: 30

Determines the amount of memory allocated for this delay line expressed as number of frames.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.fx.tp.delay](https://docs.cycling74.com/reference/jit.fx.tp.delay) |  |
| [jit.fx.tp.filter](https://docs.cycling74.com/reference/jit.fx.tp.filter) |  |
| [jit.fx.tp.warp](https://docs.cycling74.com/reference/jit.fx.tp.warp) |  |
