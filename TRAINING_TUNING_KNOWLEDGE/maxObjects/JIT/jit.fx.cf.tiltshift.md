---
type: jitter
name: "jit.fx.cf.tiltshift"
summary: "Generates a tilt-shift blur effect"
signal: false
url: "https://docs.cycling74.com/reference/jit.fx.cf.tiltshift/"
package: "Jitter FX"
see_also: ["jit.fx.cf.bilateral", "jit.fx.cf.directional", "jit.fx.cf.gaussian", "jit.fx.cf.kuwahara", "jit.fx.cf.radial", "jit.fx.cf.sharpen", "jit.fx.cf.tiltshift"]
---
# jit.fx.cf.tiltshift

Generates a tilt-shift blur effect

## Description

Generates a tilt-shift blur effect, simulating shallow depth of field.

## Arguments

None.

## Attributes

### adapt[0 atoms]

Adapt output dims to input (default = 1). When enabled the output dimensions will match the leftmost input dimensions.

### angle[0 floats]

Rotation of the blur plane in degrees in linear mode (default = 0).

### blur\_amount[0 floats]

Intensity of the blur (default = 1).

### bypass[0 atoms]

Bypass effect processing flag (default = 0). When enabled the input is passed through to the output without processing.

### center[2 floats]: 0 0

Position of the sharp focus area (default = 0 0).

### dim[2 ints]: 1 1

The output texture dimensions. When adapt is enabled this will be set automatically to the leftmost input. adapt is enabled this will be set automatically to the leftmost input.

### drawto[0 atoms]

The named context (jit.world, jit.pworld or jit.gl.node) to draw this effect (default = none). If none provided a suitable context will be found implicitly.

### enable[0 atoms]

Enable flag (default = 1). When the flag is set, processing and output is enabled.

### mode[0 atoms]

Blur shape type (default = radial).
Possible values:

'radial'

'linear'

### slope[0 floats]

Sharpness of the transition between focused and blurred areas (default = 1).

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
