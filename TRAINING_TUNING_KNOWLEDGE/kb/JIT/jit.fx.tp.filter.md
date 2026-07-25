---
type: jitter
name: "jit.fx.tp.filter"
summary: "Temporal filter"
signal: false
url: "https://docs.cycling74.com/reference/jit.fx.tp.filter/"
package: "Jitter FX"
see_also: ["jit.fx.tp.delay", "jit.fx.tp.filter", "jit.fx.tp.warp"]
---
# jit.fx.tp.filter

Temporal filter

## Description

Applies temporal filtering to a texture using a two-pole, two-zero filter

## Arguments

None.

## Attributes

### bypass[0 atoms]

Bypass effect processing flag (default = 0). When enabled the input is passed through to the output without processing.

### cutoff[float]: 2

Sets the filter cutoff frequency (default = 2).

### drawto[0 atoms]

The named context (jit.world, jit.pworld or jit.gl.node) to draw this effect (default = none). If none provided a suitable context will be found implicitly.

### filtertype[0 atoms]

Select filter type to use. Possible values are:
Possible values:

'lowpass'

'hipass'

'bandpass'

'bandreject'

### fps[float]: 30

Sets the input video frame rate (default = 30).

### q[float]: 0.2

Sets the filter quality factor (default = 0.2).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.fx.tp.delay](https://docs.cycling74.com/reference/jit.fx.tp.delay) |  |
| [jit.fx.tp.filter](https://docs.cycling74.com/reference/jit.fx.tp.filter) |  |
| [jit.fx.tp.warp](https://docs.cycling74.com/reference/jit.fx.tp.warp) |  |
