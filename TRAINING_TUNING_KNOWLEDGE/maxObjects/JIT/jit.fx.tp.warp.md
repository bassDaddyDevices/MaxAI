---
type: jitter
name: "jit.fx.tp.warp"
summary: "Temporal"
signal: false
url: "https://docs.cycling74.com/reference/jit.fx.tp.warp/"
package: "Jitter FX"
see_also: ["jit.fx.tp.delay", "jit.fx.tp.filter", "jit.fx.tp.warp"]
---
# jit.fx.tp.warp

Temporal

## Description

Distorts the flow of time by altering the playback speed or order of frames using luminance from the second input.

## Arguments

None.

## Attributes

### bypass[0 atoms]

Bypass effect processing flag (default = 0). When enabled the input is passed through to the output without processing.

### drawto[0 atoms]

The named context (jit.world, jit.pworld or jit.gl.node) to draw this effect (default = none). If none provided a suitable context will be found implicitly.

### num\_slices[int]: 80

Determines the amount of memory allocated for this delay line.

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.fx.tp.delay](https://docs.cycling74.com/reference/jit.fx.tp.delay) |  |
| [jit.fx.tp.filter](https://docs.cycling74.com/reference/jit.fx.tp.filter) |  |
| [jit.fx.tp.warp](https://docs.cycling74.com/reference/jit.fx.tp.warp) |  |
