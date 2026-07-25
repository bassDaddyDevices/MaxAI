---
type: jitter
name: "jit.fx.delay"
summary: "Delay texture input"
signal: false
url: "https://docs.cycling74.com/reference/jit.fx.delay/"
package: "Jitter FX"
see_also: ["jit.fx.altern", "jit.fx.ameba", "jit.fx.bitcrush", "jit.fx.blur", "jit.fx.brass", "jit.fx.brcosa", "jit.fx.camera", "jit.fx.conway", "jit.fx.crt", "jit.fx.delay", "jit.fx.eclipse", "jit.fx.grain", "jit.fx.hue", "jit.fx.pixelsorting", "jit.fx.repos", "jit.fx.rota", "jit.fx.slide", "jit.fx.sobel", "jit.fx.threshold", "jit.fx.vhs", "jit.fx.wake"]
---
# jit.fx.delay

Delay texture input

## Description

Delay texture input by a certain amount of frames that can be set with the delay attribute.

## Arguments

None.

## Attributes

### adapt[0 atoms]

Adapt output dims to input (default = 1). When enabled the output dimensions will match the leftmost input dimensions.

### bypass[0 atoms]

Bypass effect processing flag (default = 0). When enabled the input is passed through to the output without processing.

### delay[float]: 0

Delay amount in frames (default = 0).

### dim[2 ints]: 1 1

The output texture dimensions. When adapt is enabled this will be set automatically to the leftmost input.

### drawto[0 atoms]

The named context (jit.world, jit.pworld or jit.gl.node) to draw this effect (default = none). If none provided a suitable context will be found implicitly.

### enable[0 atoms]

Enable flag (default = 1). When the flag is set, processing and output is enabled.

### interp[0 atoms]

Interpolate between current and delayed frame (default = 1)

### max\_delay[int]: 30

Maximum amount of frames to delay (default = 30)

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.fx.altern](https://docs.cycling74.com/reference/jit.fx.altern) |  |
| [jit.fx.ameba](https://docs.cycling74.com/reference/jit.fx.ameba) |  |
| [jit.fx.bitcrush](https://docs.cycling74.com/reference/jit.fx.bitcrush) |  |
| [jit.fx.blur](https://docs.cycling74.com/reference/jit.fx.blur) |  |
| [jit.fx.brass](https://docs.cycling74.com/reference/jit.fx.brass) |  |
| [jit.fx.brcosa](https://docs.cycling74.com/reference/jit.fx.brcosa) |  |
| [jit.fx.camera](https://docs.cycling74.com/reference/jit.fx.camera) |  |
| [jit.fx.conway](https://docs.cycling74.com/reference/jit.fx.conway) |  |
| [jit.fx.crt](https://docs.cycling74.com/reference/jit.fx.crt) |  |
| [jit.fx.delay](https://docs.cycling74.com/reference/jit.fx.delay) |  |
| [jit.fx.eclipse](https://docs.cycling74.com/reference/jit.fx.eclipse) |  |
| [jit.fx.grain](https://docs.cycling74.com/reference/jit.fx.grain) |  |
| [jit.fx.hue](https://docs.cycling74.com/reference/jit.fx.hue) |  |
| [jit.fx.pixelsorting](https://docs.cycling74.com/reference/jit.fx.pixelsorting) |  |
| [jit.fx.repos](https://docs.cycling74.com/reference/jit.fx.repos) |  |
| [jit.fx.rota](https://docs.cycling74.com/reference/jit.fx.rota) |  |
| [jit.fx.slide](https://docs.cycling74.com/reference/jit.fx.slide) |  |
| [jit.fx.sobel](https://docs.cycling74.com/reference/jit.fx.sobel) |  |
| [jit.fx.threshold](https://docs.cycling74.com/reference/jit.fx.threshold) |  |
| [jit.fx.vhs](https://docs.cycling74.com/reference/jit.fx.vhs) |  |
| [jit.fx.wake](https://docs.cycling74.com/reference/jit.fx.wake) |  |
