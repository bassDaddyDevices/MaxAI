---
type: jitter
name: "jit.fx.cf.kuwahara"
summary: "Applies a generalized anisotropic Kuwahara filter"
signal: false
url: "https://docs.cycling74.com/reference/jit.fx.cf.kuwahara/"
package: "Jitter FX"
see_also: ["jit.fx.cf.bilateral", "jit.fx.cf.directional", "jit.fx.cf.gaussian", "jit.fx.cf.kuwahara", "jit.fx.cf.radial", "jit.fx.cf.sharpen", "jit.fx.cf.tiltshift"]
---
# jit.fx.cf.kuwahara

Applies a generalized anisotropic Kuwahara filter

## Description

Applies a generalized anisotropic Kuwahara filter for edge-preserving smoothing and stylization.

## Arguments

None.

## Attributes

### adapt[0 atoms]

Adapt output dims to input (default = 1). When enabled the output dimensions will match the leftmost input dimensions.

### bypass[0 atoms]

Bypass effect processing flag (default = 0). When enabled the input is passed through to the output without processing.

### dim[2 ints]: 1 1

The output texture dimensions. When adapt is enabled this will be set automatically to the leftmost input. adapt is enabled this will be set automatically to the leftmost input.

### drawto[0 atoms]

The named context (jit.world, jit.pworld or jit.gl.node) to draw this effect (default = none). If none provided a suitable context will be found implicitly.

### enable[0 atoms]

Enable flag (default = 1). When the flag is set, processing and output is enabled.

### hardness[float]: 1

Controls edge sensitivity where higher equals stronger edge preservation (default = 1).

### kernel\_size[int]: 14

Sets the size of the filter kernel (default = 14).

### pre\_blur[int]: 4

Amount of blur applied before filtering (default = 4).

### sharpness[float]: 10

Controls filter anisotropy which indcreases directional emphasis (default = 10).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.fx.cf.bilateral](https://docs.cycling74.com/reference/jit.fx.cf.bilateral) |  |
| [jit.fx.cf.directional](https://docs.cycling74.com/reference/jit.fx.cf.directional) |  |
| [jit.fx.cf.gaussian](https://docs.cycling74.com/reference/jit.fx.cf.gaussian) |  |
| [jit.fx.cf.kuwahara](https://docs.cycling74.com/reference/jit.fx.cf.kuwahara) |  |
| [jit.fx.cf.radial](https://docs.cycling74.com/reference/jit.fx.cf.radial) |  |
| [jit.fx.cf.sharpen](https://docs.cycling74.com/reference/jit.fx.cf.sharpen) |  |
| [jit.fx.cf.tiltshift](https://docs.cycling74.com/reference/jit.fx.cf.tiltshift) |  |
