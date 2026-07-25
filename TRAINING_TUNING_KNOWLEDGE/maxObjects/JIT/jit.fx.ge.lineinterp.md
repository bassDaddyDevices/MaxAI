---
type: jitter
name: "jit.fx.ge.lineinterp"
summary: "Image edge line generator"
signal: false
url: "https://docs.cycling74.com/reference/jit.fx.ge.lineinterp/"
package: "Jitter FX"
see_also: ["jit.fx.ge.flowfield", "jit.fx.ge.lineinterp", "jit.fx.ge.pattern", "jit.fx.ge.randlines"]
---
# jit.fx.ge.lineinterp

Image edge line generator

## Description

Generates connecting lines along edges of image regions whose color values fall within a defined range.

## Arguments

None.

## Attributes

### adapt[0 atoms]

Adapt output dims to input (default = 1). When enabled the output dimensions will match the leftmost input dimensions.

### bypass[0 atoms]

Bypass effect processing flag (default = 0). When enabled the input is passed through to the output without processing.

### colormode[0 atoms]

Line color mapping mode (default = 0:interp).
Possible values:

0 = 'interp'

1 = 'sort\_up'

2 = 'sort\_down'

### dim[2 ints]: 1 1

The output texture dimensions. When adapt is enabled this will be set automatically to the leftmost input. adapt is enabled this will be set automatically to the leftmost input.

### dimmode[0 atoms]

Line orientation mode (default = 0:horizontal).
Possible values:

0 = 'horizontal'

1 = 'vertical'

2 = 'primary\_diagonal'

3 = 'secondary\_diagonal'

### drawto[0 atoms]

The named context (jit.world, jit.pworld or jit.gl.node) to draw this effect (default = none). If none provided a suitable context will be found implicitly.

### enable[0 atoms]

Enable flag (default = 1). When the flag is set, processing and output is enabled.

### outputmode[0 atoms]

Image output mode, mix of original image and effect, or effect only (default = mix).
Possible values:

'mix'

'effect'

### range[0 floats]

Minimum and maximum threshold for pixel selection (default = 0 0.5)

### rangemode[0 atoms]

Selection channel (default = 0:hue).
Possible values:

0 = 'hue'

1 = 'saturation'

2 = 'luminance'

3 = 'red'

4 = 'green'

5 = 'blue'

6 = 'alpha'

7 = 'edge'

### Common Box Attributes

Shared across all objects — see [Common Box Attributes](../_shared/common-box-attributes.md).

## See Also

| Name | Description |
| --- | --- |
| [jit.fx.ge.flowfield](https://docs.cycling74.com/reference/jit.fx.ge.flowfield) |  |
| [jit.fx.ge.lineinterp](https://docs.cycling74.com/reference/jit.fx.ge.lineinterp) |  |
| [jit.fx.ge.pattern](https://docs.cycling74.com/reference/jit.fx.ge.pattern) |  |
| [jit.fx.ge.randlines](https://docs.cycling74.com/reference/jit.fx.ge.randlines) |  |
