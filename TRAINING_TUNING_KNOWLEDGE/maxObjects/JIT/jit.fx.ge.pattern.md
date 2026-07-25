---
type: jitter
name: "jit.fx.ge.pattern"
summary: "Voronoi / Delaunay pattern generator"
signal: false
url: "https://docs.cycling74.com/reference/jit.fx.ge.pattern/"
package: "Jitter FX"
see_also: ["jit.fx.ge.flowfield", "jit.fx.ge.lineinterp", "jit.fx.ge.pattern", "jit.fx.ge.randlines"]
---
# jit.fx.ge.pattern

Voronoi / Delaunay pattern generator

## Description

Generates Voronoi / Delaunay patterns from the input image.

## Arguments

None.

## Attributes

### adapt[0 atoms]

Adapt output dims to input (default = 1). When enabled the output dimensions will match the leftmost input dimensions.

### amt[0 floats]

Inverse luminance threshold amount, controls the amount of image used for generation (default = 0.5).

### bypass[0 atoms]

Bypass effect processing flag (default = 0). When enabled the input is passed through to the output without processing.

### colorize[0 atoms]

Use input image colors for lines (default = 1).

### dim[2 ints]: 1 1

The output texture dimensions. When adapt is enabled this will be set automatically to the leftmost input. adapt is enabled this will be set automatically to the leftmost input.

### drawto[0 atoms]

The named context (jit.world, jit.pworld or jit.gl.node) to draw this effect (default = none). If none provided a suitable context will be found implicitly.

### enable[0 atoms]

Enable flag (default = 1). When the flag is set, processing and output is enabled.

### fraction[0 floats]

Draw fraction of each cell, 0 to 1 (default = 1).

### indimscale[0 floats]

Resolution scale applied to the input image dimensions to control the resolution of the internal textures (default = 1 1). Does not effect the output resolution.

### line\_fade[0 floats]

Line opacity falloff vs. distance from cell center (default = 1).

### line\_growth[0 floats]

Extra stroke width vs. distance from cell center (default = 0).

### line\_width[0 floats]

Base stroke width (default = 1).

### mode[0 atoms]

Pattern output mode (default = 0:voronoi)
Possible values:

0 = 'voronoi'

1 = 'delaunay'

2 = 'vor(R)+del(G)'

3 = 'cellID(R)+distance(G)+centerUVs(BA)'

### num\_edges[0 floats]

Polygon side count used to approximate each cell (default = 25).

### radius[0 floats]

Max cell extent for Voronoi construction (default = 0.3).

### randomness[0 floats]

Random offset applied to cell centers (default = 0.01).

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.fx.ge.flowfield](https://docs.cycling74.com/reference/jit.fx.ge.flowfield) |  |
| [jit.fx.ge.lineinterp](https://docs.cycling74.com/reference/jit.fx.ge.lineinterp) |  |
| [jit.fx.ge.pattern](https://docs.cycling74.com/reference/jit.fx.ge.pattern) |  |
| [jit.fx.ge.randlines](https://docs.cycling74.com/reference/jit.fx.ge.randlines) |  |
